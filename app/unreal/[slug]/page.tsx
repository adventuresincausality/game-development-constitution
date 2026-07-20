import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyForAi } from "../../components/CopyForAi";
import { MarkdownBlock } from "../../components/MarkdownBlock";
import { assetPath, siteUrl } from "../../lib/content";
import { unrealSkillBySlug, unrealSkills } from "../../lib/unreal";

export const dynamicParams = false;

export function generateStaticParams() {
  return unrealSkills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const skill = unrealSkillBySlug.get(slug);
  if (!skill) return {};
  return {
    title: skill.title,
    description: skill.description,
    alternates: { canonical: `${siteUrl}/unreal/${skill.slug}/` },
  };
}

export default async function UnrealSkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = unrealSkillBySlug.get(slug);
  if (!skill) notFound();

  return (
    <article className="unreal-doc-page">
      <header className="principle-hero unreal-doc-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={assetPath("/unreal")}>Unreal field manual</a><span>/</span><span>{skill.category}</span></nav>
          <div className="principle-hero__grid">
            <div><div className="principle-hero__meta"><span>{skill.category}</span><span>Unreal Engine 5.8</span></div><h1>{skill.title.replace(/^Unreal 5\.8\s+/, "")}</h1></div>
            <div className="principle-hero__aside"><code>{skill.slug}</code><span>{skill.referenceCount} focused references</span><CopyForAi content={skill.rawMarkdown} /></div>
          </div>
        </div>
      </header>

      <div className="shell unreal-doc-layout">
        <aside className="unreal-doc-index">
          <p>Reference shelf</p>
          {skill.references.map((reference) => <a href={assetPath(`/unreal/${skill.slug}/${reference.slug}`)} key={reference.slug}>{reference.title}</a>)}
          <a className="button button--outline" href={`https://github.com/adventuresincausality/game-development-constitution/tree/main/skills/${skill.slug}`}>View source on GitHub</a>
        </aside>
        <div className="unreal-doc">
          <div className="unreal-doc__intro"><p>{skill.description}</p></div>
          <MarkdownBlock>{skill.webMarkdown}</MarkdownBlock>
          <section className="unreal-reference-shelf">
            <p className="eyebrow eyebrow--dark">Focused references</p>
            <h2>Go deeper only where the task requires it.</h2>
            <div>{skill.references.map((reference) => <a href={assetPath(`/unreal/${skill.slug}/${reference.slug}`)} key={reference.slug}><span>.md</span><strong>{reference.title}</strong><small>Open reference →</small></a>)}</div>
          </section>
        </div>
      </div>
    </article>
  );
}
