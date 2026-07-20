import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyForAi } from "../../../components/CopyForAi";
import { MarkdownBlock } from "../../../components/MarkdownBlock";
import { assetPath, siteUrl } from "../../../lib/content";
import { unrealSkillBySlug } from "../../../lib/unreal";

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { slug: string } }) {
  const skill = unrealSkillBySlug.get(params.slug);
  return skill?.references.map((reference) => ({ reference: reference.slug })) ?? [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; reference: string }> }): Promise<Metadata> {
  const { slug, reference: referenceSlug } = await params;
  const skill = unrealSkillBySlug.get(slug);
  const reference = skill?.references.find((item) => item.slug === referenceSlug);
  if (!skill || !reference) return {};
  return {
    title: `${reference.title} · ${skill.title}`,
    description: `Focused Unreal Engine 5.8 guidance for ${reference.title}.`,
    alternates: { canonical: `${siteUrl}/unreal/${slug}/${referenceSlug}/` },
  };
}

export default async function UnrealReferencePage({ params }: { params: Promise<{ slug: string; reference: string }> }) {
  const { slug, reference: referenceSlug } = await params;
  const skill = unrealSkillBySlug.get(slug);
  const reference = skill?.references.find((item) => item.slug === referenceSlug);
  if (!skill || !reference) notFound();

  const currentIndex = skill.references.findIndex((item) => item.slug === reference.slug);
  const previous = skill.references[currentIndex - 1];
  const next = skill.references[currentIndex + 1];

  return (
    <article className="unreal-reference-page">
      <header className="unreal-reference-hero">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={assetPath("/unreal")}>Unreal field manual</a><span>/</span><a href={assetPath(`/unreal/${skill.slug}`)}>{skill.title.replace(/^Unreal 5\.8\s+/, "")}</a><span>/</span><span>Reference</span></nav>
          <p className="eyebrow">Focused reference · Unreal Engine 5.8</p>
          <h1>{reference.title}</h1>
          <div className="unreal-reference-hero__meta"><code>{skill.slug}/references/{reference.file}</code><CopyForAi content={reference.rawMarkdown} /></div>
        </div>
      </header>
      <div className="shell unreal-reference-layout">
        <aside><p>Parent skill</p><a href={assetPath(`/unreal/${skill.slug}`)}><strong>{skill.title.replace(/^Unreal 5\.8\s+/, "")}</strong><span>Return to the system workflow →</span></a></aside>
        <div className="unreal-doc"><MarkdownBlock>{reference.webMarkdown}</MarkdownBlock></div>
      </div>
      <nav className="shell principle-pagination" aria-label="Adjacent references">
        {previous ? <a href={assetPath(`/unreal/${skill.slug}/${previous.slug}`)}><span>← Previous</span><strong>{previous.title}</strong></a> : <span />}
        {next ? <a href={assetPath(`/unreal/${skill.slug}/${next.slug}`)}><span>Next →</span><strong>{next.title}</strong></a> : <span />}
      </nav>
    </article>
  );
}
