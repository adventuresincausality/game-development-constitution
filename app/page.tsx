import { ConfidenceMeter } from "./components/ConfidenceMeter";
import { PrincipleCard } from "./components/PrincipleCard";
import { assetPath, domainCounts, domainInfo, domainOrder, principleById, principles, sources } from "./lib/content";

const landscapes = ["Design & player experience", "Craft & production", "Process, people & business"];
const featuredIds = ["GDC-L1-DESIGN-0001", "GDC-L1-PROTO-0001", "GDC-L1-PLAYTEST-0001"];

export default function Home() {
  const keystone = principleById.get("GDC-L1-DESIGN-0001")!;
  const featured = featuredIds.map((id) => principleById.get(id)!).filter(Boolean);

  return (
    <>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="shell hero__inner">
          <div className="hero__copy">
            <p className="eyebrow"><span>Open reference</span><span>Public edition v1.0</span></p>
            <h1>Make better game decisions, <em>one principle at a time.</em></h1>
            <p className="hero__lede">A searchable field guide of 143 engine-agnostic principles—built for developers who need clarity and AI collaborators that need structure.</p>
            <div className="button-row">
              <a className="button button--signal" href={assetPath("/explore")}>Explore the principles <span aria-hidden="true">→</span></a>
              <a className="button button--ghost" href={assetPath("/downloads/game-development-field-guide.pdf")}>Download the field guide</a>
            </div>
            <form className="hero-search" action={assetPath("/explore")} method="get">
              <label>
                <span className="sr-only">Search the constitution</span>
                <span aria-hidden="true">⌕</span>
                <input name="q" placeholder="Try “scope creep”, “game feel”, or “playtesting”…" />
              </label>
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="hero__artifact" aria-label="Example principle">
            <div className="artifact-orbit artifact-orbit--one" />
            <div className="artifact-orbit artifact-orbit--two" />
            <article className="artifact-card">
              <div className="artifact-card__top">
                <span>{keystone.id}</span>
                <span className="status-dot">Canonical</span>
              </div>
              <p className="artifact-card__kicker">Keystone principle</p>
              <h2>{keystone.title}</h2>
              <p>“{keystone.statement}”</p>
              <div className="artifact-card__rule" />
              <ConfidenceMeter value={keystone.confidence} />
              <a href={assetPath(`/principles/${keystone.id}`)}>Read the full principle <span aria-hidden="true">↗</span></a>
            </article>
            <span className="artifact-label artifact-label--type">objective</span>
            <span className="artifact-label artifact-label--domain">DESIGN</span>
            <span className="artifact-label artifact-label--source">2 sources</span>
          </div>
        </div>
        <div className="shell stat-rail">
          <div><strong>{principles.length}</strong><span>actionable principles</span></div>
          <div><strong>{domainOrder.length}</strong><span>development domains</span></div>
          <div><strong>{sources.length}</strong><span>source records</span></div>
          <div><strong>2</strong><span>ways to read: human + AI</span></div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow eyebrow--dark">The whole craft, mapped</p>
              <h2>Find the part of development you need right now.</h2>
            </div>
            <p>Every principle belongs to one domain, carries an evidence-strength score, and states where it applies—and where it does not.</p>
          </div>

          <div className="landscapes">
            {landscapes.map((landscape, landscapeIndex) => (
              <section className="landscape" key={landscape}>
                <div className="landscape__heading">
                  <span>0{landscapeIndex + 1}</span>
                  <h3>{landscape}</h3>
                </div>
                <div className="domain-grid">
                  {domainOrder.filter((code) => domainInfo[code].group === landscape).map((code) => (
                    <a className="domain-card" href={assetPath(`/explore?domain=${code}`)} key={code}>
                      <span className="domain-card__code">{code}</span>
                      <strong>{domainInfo[code].name}</strong>
                      <p>{domainInfo[code].description}</p>
                      <span className="domain-card__count">{domainCounts[code]} principles <span aria-hidden="true">→</span></span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink anatomy-section">
        <div className="shell anatomy-grid">
          <div className="anatomy-copy">
            <p className="eyebrow">Built to survive context</p>
            <h2>A principle tells you more than what to do.</h2>
            <p>Advice becomes useful when it carries its boundaries. Every entry separates durable guidance from implementation and preserves legitimate disagreement.</p>
            <a className="text-link text-link--light" href={assetPath("/about")}>See how the constitution works <span aria-hidden="true">→</span></a>
          </div>
          <ol className="anatomy-list">
            <li><span>01</span><div><strong>Statement</strong><p>The guidance, stripped of story.</p></div></li>
            <li><span>02</span><div><strong>Rationale</strong><p>The mechanism that makes it hold.</p></div></li>
            <li><span>03</span><div><strong>Applies when</strong><p>The conditions where it is useful.</p></div></li>
            <li><span>04</span><div><strong>Exceptions</strong><p>When to ignore or invert it.</p></div></li>
            <li><span>05</span><div><strong>Disagreement</strong><p>The real tension, kept intact.</p></div></li>
            <li><span>06</span><div><strong>Confidence</strong><p>Evidence strength, not enthusiasm.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section section--cream">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow eyebrow--dark">Three places to begin</p>
              <h2>Start with a live question.</h2>
            </div>
            <a className="text-link" href={assetPath("/explore")}>View all 143 principles <span aria-hidden="true">→</span></a>
          </div>
          <div className="principle-grid principle-grid--featured">
            {featured.map((principle) => <PrincipleCard key={principle.id} principle={principle} />)}
          </div>
        </div>
      </section>

      <section className="section section--signal">
        <div className="shell dual-audience">
          <div className="dual-audience__intro">
            <p className="eyebrow eyebrow--dark">One corpus, two readers</p>
            <h2>Readable by people.<br />Structured for machines.</h2>
          </div>
          <div className="audience-card">
            <span className="audience-card__number">H</span>
            <h3>For humans</h3>
            <p>Search by the problem in front of you, follow connected ideas, and keep the portable field guide nearby.</p>
            <a href={assetPath("/downloads/game-development-field-guide.pdf")}>Get the PDF <span aria-hidden="true">↗</span></a>
          </div>
          <div className="audience-card audience-card--dark">
            <span className="audience-card__number">AI</span>
            <h3>For AI collaborators</h3>
            <p>Use stable IDs, structured metadata, explicit exceptions, JSONL, and source keys without flattening context.</p>
            <a href={assetPath("/for-ai")}>Open the AI guide <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
