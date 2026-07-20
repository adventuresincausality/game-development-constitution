import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { ZipArchive } from "archiver";
import YAML from "yaml";

const root = path.resolve(import.meta.dirname, "..");
const principlesDir = path.join(root, "content", "principles");
const sourcesPath = path.join(root, "content", "sources.json");
const appDataDir = path.join(root, "app", "data");
const publicDataDir = path.join(root, "public", "data");
const publicPrinciplesDir = path.join(publicDataDir, "principles");
const skillsDir = path.join(root, "skills");
const publicDownloadsDir = path.join(root, "public", "downloads");
const unrealBundlePath = path.join(publicDownloadsDir, "unreal-engine-5.8-ai-skills.zip");

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

const stripFirstHeading = (markdown) => markdown.replace(/^#\s+.+\r?\n+/, "");

const toWebSkillMarkdown = (markdown, skillSlug) => stripFirstHeading(markdown).replace(
  /\]\((?!https?:\/\/|mailto:|#)([^)]+\.md)(#[^)]+)?\)/g,
  (full, target, fragment = "") => {
    const normalized = target.replaceAll("\\", "/");
    const crossSkill = normalized.match(/(?:^|\.\.\/)\/?(unreal-[^/]+)\/SKILL\.md$/);
    if (crossSkill) return `](/unreal/${crossSkill[1]}/${fragment})`;
    if (normalized.endsWith("SKILL.md")) return `](/unreal/${skillSlug}/${fragment})`;
    const reference = path.basename(normalized, ".md");
    return `](/unreal/${skillSlug}/${reference}/${fragment})`;
  },
);

const skillCategory = (slug) => {
  if (["unreal-animation-blending", "unreal-animation-montages", "unreal-control-rig-ik", "unreal-motion-matching"].includes(slug)) return "Animation";
  if (["unreal-landscape", "unreal-navigation-ai", "unreal-pcg", "unreal-splines", "unreal-world-partition"].includes(slug)) return "World & AI";
  if (["unreal-lighting", "unreal-materials", "unreal-niagara", "unreal-rendering-performance"].includes(slug)) return "Rendering & VFX";
  if (["unreal-metasounds", "unreal-camera-cinematics", "unreal-umg-commonui"].includes(slug)) return "Presentation";
  if (["unreal-character-movement", "unreal-chaos-physics", "unreal-enhanced-input"].includes(slug)) return "Gameplay";
  if (["unreal-gas-abilities", "unreal-gas-attributes-effects", "unreal-gameplay-tags", "unreal-replication"].includes(slug)) return "Systems & Networking";
  return "Data, Tools & Shipping";
};

const privatePatterns = [
  /GDC-L[3-9]/i,
  /principles[\\/]L3/i,
  /L3-studio/i,
  /private L3/i,
  /(?:this|our) studio/i,
  /studio-specific/i,
  /internal (?:game|project|studio) source/i,
];

const assertPublicSkillFile = (file, text) => {
  for (const pattern of privatePatterns) {
    if (pattern.test(text)) throw new Error(`Private-scope marker blocked in ${file}: ${pattern}`);
  }
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].split("#")[0];
    if (!target || /^(?:https?:\/\/|mailto:)/.test(target)) continue;
    const resolved = path.resolve(path.dirname(file), decodeURIComponent(target));
    if (!fs.existsSync(resolved)) throw new Error(`Broken local skill link in ${file}: ${target}`);
  }
};

const skillDirectories = fs.readdirSync(skillsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(skillsDir, entry.name, "SKILL.md")))
  .map((entry) => entry.name)
  .sort();

if (skillDirectories.length !== 30) throw new Error(`Expected 30 public Unreal skills, found ${skillDirectories.length}`);

const unrealSkills = skillDirectories.map((slug) => {
  const directory = path.join(skillsDir, slug);
  const skillPath = path.join(directory, "SKILL.md");
  const rawMarkdown = fs.readFileSync(skillPath, "utf8");
  assertPublicSkillFile(skillPath, rawMarkdown);
  const match = rawMarkdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`Invalid skill format: ${slug}`);
  const metadata = YAML.parse(match[1]);
  if (metadata.name !== slug) throw new Error(`Skill name/folder mismatch: ${slug}`);
  const heading = match[2].match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (!heading) throw new Error(`Missing skill heading: ${slug}`);

  const agentPath = path.join(directory, "agents", "openai.yaml");
  if (!fs.existsSync(agentPath)) throw new Error(`Missing agent metadata: ${slug}`);
  const agent = YAML.parse(fs.readFileSync(agentPath, "utf8"));

  const referencesDir = path.join(directory, "references");
  const references = fs.readdirSync(referencesDir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => {
      const filePath = path.join(referencesDir, file);
      const referenceMarkdown = fs.readFileSync(filePath, "utf8");
      assertPublicSkillFile(filePath, referenceMarkdown);
      const title = referenceMarkdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? path.basename(file, ".md");
      return {
        slug: path.basename(file, ".md"),
        file,
        title,
        rawMarkdown: referenceMarkdown,
        webMarkdown: toWebSkillMarkdown(referenceMarkdown, slug),
        searchText: toPlainText(referenceMarkdown).toLowerCase(),
      };
    });

  return {
    slug,
    name: metadata.name,
    title: heading,
    description: metadata.description,
    shortDescription: agent?.interface?.short_description ?? metadata.description,
    category: skillCategory(slug),
    referenceCount: references.length,
    rawMarkdown,
    webMarkdown: toWebSkillMarkdown(match[2], slug),
    searchText: toPlainText(`${heading} ${metadata.description} ${references.map((reference) => `${reference.title} ${reference.searchText}`).join(" ")}`).toLowerCase(),
    references,
  };
});

const unrealReferenceCount = unrealSkills.reduce((total, skill) => total + skill.referenceCount, 0);

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

const unrealSkillsJson = `${JSON.stringify(unrealSkills, null, 2)}\n`;
fs.writeFileSync(path.join(appDataDir, "unreal-skills.json"), unrealSkillsJson);
fs.writeFileSync(path.join(publicDataDir, "unreal-skills.json"), unrealSkillsJson);
fs.writeFileSync(
  path.join(publicDataDir, "unreal-skills.jsonl"),
  `${unrealSkills.map((skill) => JSON.stringify(skill)).join("\n")}\n`,
);

for (const principle of principles) {
  fs.copyFileSync(
    path.join(principlesDir, principle.file),
    path.join(publicPrinciplesDir, principle.file),
  );
}

const hash = crypto.createHash("sha256").update(principlesJson).digest("hex");
const unrealHash = crypto.createHash("sha256").update(unrealSkillsJson).digest("hex");
const countsByDomain = Object.fromEntries(
  domainOrder.map((domain) => [domain, principles.filter((principle) => principle.domain === domain).length]),
);
const manifest = {
  name: "The Game Development Constitution",
  edition: "Public universal principles and Unreal Engine skill library",
  version: "1.1.0",
  schemaVersion: "1.0",
  generatedAt: new Date().toISOString(),
  license: "CC-BY-4.0",
  canonicalRepository: "https://github.com/adventuresincausality/game-development-constitution",
  principleCount: principles.length,
  domainCount: domainOrder.length,
  sourceCount: sources.length,
  unrealEngineVersion: "5.8",
  unrealSkillCount: unrealSkills.length,
  unrealReferenceCount,
  countsByDomain,
  contentSha256: hash,
  unrealContentSha256: unrealHash,
};
fs.writeFileSync(path.join(publicDataDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL
  ?? "https://adventuresincausality.com").replace(/\/$/, "");
const sitemapRoutes = [
  "", "/explore/", "/about/", "/for-ai/", "/sources/", "/unreal/", "/unreal/legal/",
  ...principles.map((principle) => `/principles/${principle.id}/`),
  ...unrealSkills.flatMap((skill) => [
    `/unreal/${skill.slug}/`,
    ...skill.references.map((reference) => `/unreal/${skill.slug}/${reference.slug}/`),
  ]),
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

fs.mkdirSync(publicDownloadsDir, { recursive: true });
await new Promise((resolve, reject) => {
  const output = fs.createWriteStream(unrealBundlePath);
  const archive = new ZipArchive({ zlib: { level: 9 } });
  output.on("close", resolve);
  output.on("error", reject);
  archive.on("error", reject);
  archive.pipe(output);
  archive.file(path.join(root, "UNREAL_AI_START_HERE.md"), { name: "UNREAL_AI_START_HERE.md" });
  archive.file(path.join(root, "UNREAL-ENGINE-NOTICE.md"), { name: "UNREAL-ENGINE-NOTICE.md" });
  archive.file(path.join(root, "LICENSE"), { name: "LICENSE" });
  archive.directory(skillsDir, "skills");
  archive.finalize();
});

console.log(`Generated ${principles.length} principles, ${unrealSkills.length} Unreal skills, ${unrealReferenceCount} Unreal references, ${sources.length} sources, and AI-ready exports.`);
