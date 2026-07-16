import type { Metadata } from "next";
import { siteUrl, sources } from "../lib/content";

export const metadata: Metadata = {
  title: "Source registry",
  description: "The public source registry for the universal Game Development Constitution principles.",
  alternates: { canonical: `${siteUrl}/sources/` },
};

export default function SourcesPage() {
  const groups = [...new Set(sources.map((source) => source.group))];

  return (
    <>
      <header className="page-hero page-hero--compact">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Provenance without clutter</p>
            <h1>The source registry.</h1>
          </div>
          <p>Principles carry stable source keys; full citations live here once. This keeps each entry readable while preserving a trail back to the material that supports it.</p>
        </div>
      </header>
      <section className="section section--paper">
        <div className="shell source-layout">
          <aside className="source-summary">
            <strong>{sources.length}</strong>
            <span>public source records</span>
            <p>Only sources referenced by the engine-agnostic public edition are included.</p>
          </aside>
          <div className="source-groups">
            {groups.map((group) => (
              <section className="source-group" key={group}>
                <h2>{group}</h2>
                <div className="source-list">
                  {sources.filter((source) => source.group === group).map((source) => (
                    <article className="source-entry" id={source.key} key={source.key}>
                      <div className="source-entry__meta">
                        <code>{source.key}</code>
                        <span>{source.type}</span>
                        <span>{source.tier}</span>
                      </div>
                      <h3>{source.url ? <a href={source.url}>{source.citation}</a> : source.citation}</h3>
                      <p>{source.notes}</p>
                      <span className={`verification verification--${source.verification}`}>{source.verification.replaceAll("-", " ")}</span>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
