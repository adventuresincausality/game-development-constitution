import assert from "node:assert/strict";
import crypto from "node:crypto";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const output = path.join(root, "dist", "client");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? "https://adventuresincausality.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const readOutput = (...parts) => readFile(path.join(output, ...parts), "utf8");

test("publishes the designed static site with correct canonical metadata", async () => {
  const html = await readOutput("index.html");
  assert.match(html, /<title>The Game Development Constitution<\/title>/);
  assert.match(html, /143<\/strong><span>actionable principles/);
  assert.match(html, /Make better game decisions/);
  assert.match(html, new RegExp(`rel="canonical" href="${siteUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\/?"`));
  assert.match(html, new RegExp(`action="${basePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\/explore"`));
  assert.doesNotMatch(html, /vinext-starter|Codex is working|Your site is taking shape/);
});

test("exports every principle and the complete machine-readable corpus", async () => {
  const [principlesText, sourcesText, manifestText, markdownFiles] = await Promise.all([
    readFile(path.join(root, "public", "data", "principles.json"), "utf8"),
    readFile(path.join(root, "public", "data", "sources.json"), "utf8"),
    readFile(path.join(root, "public", "data", "manifest.json"), "utf8"),
    readdir(path.join(root, "public", "data", "principles")),
  ]);
  const principles = JSON.parse(principlesText);
  const sources = JSON.parse(sourcesText);
  const manifest = JSON.parse(manifestText);

  assert.equal(principles.length, 143);
  assert.equal(markdownFiles.filter((name) => name.endsWith(".md")).length, 143);
  assert.equal(sources.length, 48);
  assert.ok(sources.every((source) => source.verification === "verified"));
  assert.ok(sources.every((source) => /^https:\/\//.test(source.url)));
  assert.equal(manifest.principleCount, 143);
  assert.equal(manifest.sourceCount, 48);
  assert.equal(
    manifest.contentSha256,
    crypto.createHash("sha256").update(principlesText).digest("hex"),
  );

  assert.ok(principles.every((principle) => principle.layer === "L1"));
});

test("exports stable routes, discovery files, and downloads", async () => {
  const [principleHtml, sitemap, robots] = await Promise.all([
    readOutput("principles", "GDC-L1-DESIGN-0001", "index.html"),
    readOutput("sitemap.xml"),
    readOutput("robots.txt"),
  ]);
  assert.match(principleHtml, /Design for the player/);
  assert.match(principleHtml, new RegExp(`${siteUrl}/principles/GDC-L1-DESIGN-0001/`));
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 148);
  assert.match(robots, new RegExp(`${siteUrl}/sitemap.xml`));

  await Promise.all([
    access(path.join(output, "downloads", "game-development-field-guide.pdf")),
    access(path.join(output, "downloads", "game-development-field-guide.docx")),
    access(path.join(output, "data", "principles.jsonl")),
    access(path.join(output, "data", "manifest.json")),
  ]);
});
