import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfidenceMeter } from "../../components/ConfidenceMeter";
import { CopyForAi } from "../../components/CopyForAi";
import { MarkdownBlock } from "../../components/MarkdownBlock";
import {
  assetPath,
  domainInfo,
  principleById,
  principles,
  sectionLabels,
  sectionOrder,
  siteUrl,
  sourceByKey,
} from "../../lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return principles.map((principle) => ({ id: principle.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const principle = principleById.get(id);
  if (!principle) return {};
  const canonical = `${siteUrl}/principles/${principle.id}/`;
  return {
    title: principle.title,
    description: principle.statement,
    alternates: { canonical },
    openGraph: {
      title: principle.title,
      description: principle.statement,
      url: canonical,
      type: "article",
    },
  };
}

function RelationshipList({ label, ids }: { label: string; ids: string[] }) {
  if (!ids.length) return null;
  return (
    <div className="relationship-group">
      <span>{label}</span>
      <div>{ids.map((id) => {
        const related = principleById.get(id);
        return related ? <a key={id} href={assetPath(`/principles/${id}`)}>{id} · {related.title}</a> : null;
      })}</div>
    </div>
  );
}

export default async function PrinciplePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const principle = principleById.get(id);
  if (!principle) notFound();

  const index = principles.findIndex((item) => item.id === principle.id);
  const previous = principles[index - 1];
  const next = principles[index + 1];
  const citedSources = principle.sources.map((key) => sourceByKey.get(key)).filter(Boolean);
  const copyContent = `${principle.rawMarkdown}\nCanonical URL: ${siteUrl}/principles/${principle.id}/\nPublic edition: v1.1`;

  return (
    <article className="principle-page">
      <header className="principle-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href={assetPath("/explore")}>Principles</a><span aria-hidden="true">/</span><a href={assetPath(`/explore?domain=${principle.domain}`)}>{domainInfo[principle.domain].name}</a><span aria-hidden="true">/</span><span>{principle.id}</span>
          </nav>
          <div className="principle-hero__grid">
            <div>
              <div className="principle-hero__meta">
                <span className={`type-chip type-chip--${principle.type}`}>{principle.type}</span>
                <span className="domain-chip domain-chip--light">{principle.domain}</span>
                <span>{principle.status}</span>
              </div>
              <h1>{principle.title}</h1>
            </div>
            <div className="principle-hero__aside">
              <code>{principle.id}</code>
              <ConfidenceMeter value={principle.confidence} />
              <CopyForAi content={copyContent} />
            </div>
          </div>
        </div>
      </header>

      <div className="shell principle-layout">
        <aside className="principle-index">
          <p>In this principle</p>
          {sectionOrder.filter((section) => principle.sections[section]).map((section) => (
            <a key={section} href={`#${section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{sectionLabels[section] ?? section}</a>
          ))}
          <div className="principle-index__facts">
            <span>Subdomain<strong>{principle.subdomain?.replaceAll("-", " ")}</strong></span>
            <span>Last verified<strong>{principle.last_verified}</strong></span>
            <span>Sources<strong>{principle.sources.length}</strong></span>
          </div>
        </aside>

        <div className="principle-content">
          {sectionOrder.filter((section) => principle.sections[section]).map((section) => {
            const slug = section.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <section className={`principle-section principle-section--${slug}`} id={slug} key={section}>
                <p className="principle-section__number">{String(sectionOrder.indexOf(section) + 1).padStart(2, "0")}</p>
                <h2>{sectionLabels[section] ?? section}</h2>
                <MarkdownBlock statement={section === "Statement"}>{principle.sections[section]}</MarkdownBlock>
              </section>
            );
          })}

          {(principle.related.length > 0 || principle.depends_on.length > 0 || principle.conflicts_with.length > 0) && (
            <section className="principle-section relationship-section">
              <p className="principle-section__number">↔</p>
              <h2>Connected principles</h2>
              <RelationshipList label="Related" ids={principle.related} />
              <RelationshipList label="Depends on" ids={principle.depends_on} />
              <RelationshipList label="In tension with" ids={principle.conflicts_with} />
            </section>
          )}

          {citedSources.length > 0 && (
            <section className="principle-section principle-sources">
              <p className="principle-section__number">S</p>
              <h2>Source trail</h2>
              {citedSources.map((source) => source && (
                <div className="principle-source" key={source.key}>
                  <code>{source.key}</code>
                  <p>{source.url ? <a href={source.url}>{source.citation}</a> : source.citation}</p>
                  <a href={assetPath(`/sources#${source.key}`)}>Registry entry →</a>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>

      <nav className="shell principle-pagination" aria-label="Adjacent principles">
        {previous ? <a href={assetPath(`/principles/${previous.id}`)}><span>← Previous</span><strong>{previous.title}</strong></a> : <span />}
        {next ? <a href={assetPath(`/principles/${next.id}`)}><span>Next →</span><strong>{next.title}</strong></a> : <span />}
      </nav>
    </article>
  );
}
