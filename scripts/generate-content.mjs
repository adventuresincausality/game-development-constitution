import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const root = path.resolve(import.meta.dirname, "..");
const principlesDir = path.join(root, "content", "principles");
const sourcesPath = path.join(root, "content", "sources.json");
const appDataDir = path.join(root, "app", "data");
const publicDataDir = path.join(root, "public", "data");
const publicPrinciplesDir = path.join(publicDataDir, "principles");

const domainOrder = [
  "DESIGN", "FEEL", "SYS", "PROG", "ECON", "BAL", "LEVEL", "NARR", "UX", "MP", "MON",
  "ARCH", "TECH", "ANIM", "AUDIO", "CONTENT", "PERF", "QA", "PROTO", "PLAYTEST",
  "PROD", "VISION", "TEAM", "SHIP",
];

const normalizeBody = (body) => body.replace(/^\s+|\s+$/g, "");

const parseSections = (body) => {
  const sections = {};
  const matches = [...body.matchAll(/^##\s+(.+)$/gm)];
  for (let index = 0; index < matches.length; index += 1) {
    const title = matches[index][1].trim();
    const start = matches[index].index + matches[index][0].length;
    const end = matches[index + 1]?.index ?? body.length;
    sections[title] = normalizeBody(body.slice(start, end));
  }
  return sections;
};

const toPlainText = (markdown = "") => markdown
  .replace(/^>\s?/gm, "")
  .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
  .replace(/[*_`#]/g, "")
  .replace(/\s+/g, " ")
  .trim();

const files = fs.readdirSync(principlesDir)
  .filter((name) => /^GDC-L1-[A-Z]+-\d{4}\.md$/.test(name));

const principles = files.map((file) => {
  const raw = fs.readFileSync(path.join(principlesDir, file), "utf8");
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) throw new Error(`Invalid principle format: ${file}`);
  const metadata = YAML.parse(match[1]);
  if (metadata.layer !== "L1") throw new Error(`Non-L1 principle blocked: ${file}`);
  if (`${metadata.id}.md` !== file) throw new Error(`ID/filename mismatch: ${file}`);
  const sections = parseSections(match[2]);
  if (!sections.Statement || !sections.Rationale) throw new Error(`Missing required section: ${file}`);
  return {
    ...metadata,
    file,
    statement: toPlainText(sections.Statement),
    sections,
    rawMarkdown: raw,
    searchText: toPlainText(`${metadata.id} ${metadata.title} ${(metadata.tags ?? []).join(" ")} ${Object.values(sections).join(" ")}`).toLowerCase(),
  };
});

principles.sort((a, b) => {
  const domainDelta = domainOrder.indexOf(a.domain) - domainOrder.indexOf(b.domain);
  return domainDelta || a.id.localeCompare(b.id);
});

if (principles.length !== 143) throw new Error(`Expected 143 public principles, found ${principles.length}`);

const ids = new Set(principles.map((principle) => principle.id));
for (const principle of principles) {
  for (const field of ["related", "depends_on", "conflicts_with", "supersedes"]) {
    for (const linkedId of principle[field] ?? []) {
      if (!ids.has(linkedId)) throw new Error(`${principle.id} contains non-public ${field} reference: ${linkedId}`);
    }
  }
}

const sources = JSON.parse(fs.readFileSync(sourcesPath, "utf8"));
const sourceKeys = new Set(sources.map((source) => source.key));
if (sourceKeys.size !== sources.length) throw new Error("Duplicate public source keys found");
for (const source of sources) {
  if (source.verification !== "verified") throw new Error(`Unverified public source blocked: ${source.key}`);
  if (!/^https:\/\//.test(source.url)) throw new Error(`Source URL must use HTTPS: ${source.key}`);
}
for (const principle of principles) {
  for (const key of principle.sources ?? []) {
    if (!sourceKeys.has(key)) throw new Error(`${principle.id} references missing public source ${key}`);
  }
}

fs.mkdirSync(appDataDir, { recursive: true });
fs.rmSync(publicPrinciplesDir, { recursive: true, force: true });
fs.mkdirSync(publicPrinciplesDir, { recursive: true });

const principlesJson = `${JSON.stringify(principles, null, 2)}\n`;
const sourcesJson = `${JSON.stringify(sources, null, 2)}\n`;
fs.writeFileSync(path.join(appDataDir, "principles.json"), principlesJson);
fs.writeFileSync(path.join(appDataDir, "sources.json"), sourcesJson);
fs.writeFileSync(path.join(publicDataDir, "principles.json"), principlesJson);
fs.writeFileSync(path.join(publicDataDir, "sources.json"), sourcesJson);
fs.writeFileSync(
  path.join(publicDataDir, "principles.jsonl"),
  `${principles.map((principle) => JSON.stringify(principle)).join("\n")}\n`,
);

for (const principle of principles) {
  fs.copyFileSync(
    path.join(principlesDir, principle.file),
    path.join(publicPrinciplesDir, principle.file),
  );
}

const hash = crypto.createHash("sha256").update(principlesJson).digest("hex");
const countsByDomain = Object.fromEntries(
  domainOrder.map((domain) => [domain, principles.filter((principle) => principle.domain === domain).length]),
);
const manifest = {
  name: "The Game Development Constitution",
  edition: "Universal public edition",
  version: "1.0.0",
  schemaVersion: "1.0",
  generatedAt: new Date().toISOString(),
  license: "CC-BY-4.0",
  canonicalRepository: "https://github.com/adventuresincausality/game-development-constitution",
  principleCount: principles.length,
  domainCount: domainOrder.length,
  sourceCount: sources.length,
  countsByDomain,
  contentSha256: hash,
};
fs.writeFileSync(path.join(publicDataDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL
  ?? "https://adventuresincausality.github.io/game-development-constitution").replace(/\/$/, "");
const sitemapRoutes = [
  "", "/explore/", "/about/", "/for-ai/", "/sources/",
  ...principles.map((principle) => `/principles/${principle.id}/`),
];
const escapeXml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapRoutes.map((route) => `  <url><loc>${escapeXml(`${siteUrl}${route}`)}</loc></url>`),
  "</urlset>",
  "",
].join("\n");
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "public", "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

console.log(`Generated ${principles.length} principles, ${sources.length} sources, and AI-ready exports.`);
