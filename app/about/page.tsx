import type { Metadata } from "next";
import { assetPath, confidenceLabels, siteUrl } from "../lib/content";

export const metadata: Metadata = {
  title: "About the constitution",
  description: "How the Game Development Constitution turns scattered craft knowledge into bounded, evidence-tagged principles.",
  alternates: { canonical: `${siteUrl}/about/` },
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Why this exists</p>
            <h1>Game-development wisdom is scattered. This makes it usable.</h1>
          </div>
          <p>Talks, books, postmortems, research, and hard-won practice often bury durable guidance inside a specific engine, project, or era. The constitution extracts the principle while keeping its limits visible.</p>
        </div>
      </header>

      <section className="section section--paper">
        <div className="shell prose-layout">
          <aside className="prose-index" aria-label="On this page">
            <p>On this page</p>
            <a href="#principle">The unit of knowledge</a>
            <a href="#types">Fact, context, taste</a>
            <a href="#confidence">Confidence rubric</a>
            <a href="#living">A living reference</a>
            <a href="#stewardship">Stewardship</a>
          </aside>
          <div className="prose-page">
            <section id="principle">
              <p className="section-number">01</p>
              <h2>The unit of knowledge is one bounded principle.</h2>
              <p>This is not an encyclopedia and it is not a list of commandments. Each entry must stand alone and answer six practical questions: what to do, why it works, when it applies, when it does not, how to implement it, and where credible practitioners disagree.</p>
              <div className="callout">
                <strong>Design rule</strong>
                <p>What and why belong to the principle. Engine, tool, and project specifics belong to implementation.</p>
              </div>
            </section>

            <section id="types">
              <p className="section-number">02</p>
              <h2>Fact, context, and taste are not interchangeable.</h2>
              <div className="type-table">
                <div><span className="type-chip type-chip--objective">objective</span><p>A best practice that tends to hold across styles. Violating it produces measurable costs.</p></div>
                <div><span className="type-chip type-chip--contextual">contextual</span><p>A strong heuristic whose value depends on genre, audience, scope, or intended experience.</p></div>
                <div><span className="type-chip type-chip--stylistic">stylistic</span><p>A defensible philosophy where an excellent developer could reasonably choose the opposite.</p></div>
              </div>
            </section>

            <section id="confidence">
              <p className="section-number">03</p>
              <h2>Confidence rates evidence—not affection.</h2>
              <div className="rubric">
                {[5, 4, 3, 2, 1].map((score) => (
                  <div key={score}>
                    <strong>{score}</strong>
                    <span>{confidenceLabels[score]}</span>
                    <p>{score === 5 ? "Broad agreement, independent credible support, and long practice." : score === 4 ? "Multiple credible sources or strong practitioner consensus." : score === 3 ? "Respected support and sound reasoning, with meaningful limits or dissent." : score === 2 ? "Plausible and useful, but supported by few sources or limited evidence." : "A captured hypothesis that needs real verification before reliance."}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="living">
              <p className="section-number">04</p>
              <h2>A constitution must be allowed to be wrong.</h2>
              <p>Reality outranks the document. When playtests, production evidence, or better sources contradict a principle, the principle should change. Stable IDs preserve the history; versioned releases and a public changelog make that evolution inspectable.</p>
              <p>Disagreement is preserved instead of flattened. The goal is not false consensus—it is to state the conditions under which opposing approaches are each useful.</p>
            </section>

            <section id="stewardship">
              <p className="section-number">05</p>
              <h2>Open resource, visible stewardship.</h2>
              <p>The universal public edition is maintained by Sontlux Sukhavachana and developed with assistance from Claude and Codex. It is released under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>, so anyone may share and adapt it with attribution.</p>
              <div className="button-row">
                <a className="button button--ink" href={assetPath("/explore")}>Explore principles</a>
                <a className="button button--outline" href="https://github.com/adventuresincausality/game-development-constitution">Contribute on GitHub</a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
