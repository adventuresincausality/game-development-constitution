import type { Metadata } from "next";
import { assetPath, siteUrl } from "../lib/content";

export const metadata: Metadata = {
  title: "For AI collaborators",
  description: "Machine-readable game-development principles with stable IDs, confidence, exceptions, relationships, sources, JSON, and JSONL.",
  alternates: { canonical: `${siteUrl}/for-ai/` },
};

const samplePrompt = `Use the Game Development Constitution as a decision-support reference.

For each recommendation:
1. Cite the relevant principle ID and public-edition version.
2. Distinguish objective, contextual, and stylistic guidance.
3. Respect "Applies when" and "Exceptions" before recommending action.
4. Surface recorded disagreement instead of inventing consensus.
5. Prefer higher-confidence principles, but never treat confidence as certainty.
6. If project evidence conflicts with a principle, say so explicitly.`;

export default function ForAiPage() {
  return (
    <>
      <header className="page-hero page-hero--ai">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Machine-readable by design</p>
            <h1>Give an AI context, not just commandments.</h1>
          </div>
          <p>Each principle is a self-contained record with stable identity, explicit scope, evidence strength, exceptions, disagreement, relationships, and source keys.</p>
        </div>
      </header>

      <section className="section section--ink">
        <div className="shell ai-formats">
          <div className="section-heading">
            <p className="eyebrow">Choose the right format</p>
            <h2>One source, several ingestion paths.</h2>
          </div>
          <div className="format-grid">
            <a className="format-card" href={assetPath("/data/principles.jsonl")}>
              <span>.jsonl</span><h3>Retrieval-ready records</h3><p>One complete principle per line for pipelines, embeddings, and batch processing.</p><strong>Download JSONL ↘</strong>
            </a>
            <a className="format-card" href={assetPath("/data/principles.json")}>
              <span>.json</span><h3>Full structured corpus</h3><p>All metadata, relationships, sections, source keys, and normalized search text.</p><strong>Download JSON ↘</strong>
            </a>
            <a className="format-card" href={assetPath("/data/manifest.json")}>
              <span>manifest</span><h3>Version and integrity</h3><p>Counts, schema version, license, canonical repository, and a SHA-256 content hash.</p><strong>Download manifest ↘</strong>
            </a>
            <a className="format-card" href="https://github.com/adventuresincausality/game-development-constitution/tree/main/content/principles">
              <span>.md + YAML</span><h3>Canonical human source</h3><p>Readable Markdown with machine-readable front matter and permanent filenames.</p><strong>Browse Markdown ↗</strong>
            </a>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell ai-usage">
          <div className="ai-usage__copy">
            <p className="eyebrow eyebrow--dark">Recommended behavior</p>
            <h2>Retrieve narrowly. Reason conditionally. Cite visibly.</h2>
            <ol className="numbered-list">
              <li><span>01</span><div><strong>Find by problem and domain.</strong><p>Retrieve a small cluster using title, statement, tags, domain, and relationship edges.</p></div></li>
              <li><span>02</span><div><strong>Check the boundaries.</strong><p>Read type, confidence, applies-when, exceptions, and disagreement before forming advice.</p></div></li>
              <li><span>03</span><div><strong>Keep implementation separate.</strong><p>Treat implementation notes as adaptable examples, not as the durable principle itself.</p></div></li>
              <li><span>04</span><div><strong>Return traceable guidance.</strong><p>Cite the permanent ID, version, and canonical principle URL so a human can inspect it.</p></div></li>
            </ol>
          </div>
          <div className="prompt-card">
            <div className="prompt-card__bar"><span>Suggested instruction</span><span>plain text</span></div>
            <pre><code>{samplePrompt}</code></pre>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell ai-warning">
          <p className="eyebrow eyebrow--dark">The failure mode to avoid</p>
          <h2>Do not flatten contextual guidance into universal truth.</h2>
          <p>The constitution is useful because it records conditions and tensions. An AI that copies only the Statement field discards the information most likely to prevent confident but inappropriate advice.</p>
        </div>
      </section>
    </>
  );
}
