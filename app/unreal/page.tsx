import type { Metadata } from "next";
import { UnrealSkillExplorer } from "../components/UnrealSkillExplorer";
import { assetPath, siteUrl } from "../lib/content";
import { unrealReferenceCount, unrealSkills } from "../lib/unreal";

export const metadata: Metadata = {
  title: "Unreal Engine 5.8 field manual",
  description: "Search 30 practical Unreal Engine 5.8 skills with focused actions, parameters, diagnostics, source trails, and downloadable AI-ready files.",
  alternates: { canonical: `${siteUrl}/unreal/` },
};

const commonRoutes = [
  ["Animation looks wrong", "Blending, Montages, Motion Matching, Control Rig, IK and retargeting"],
  ["World content misbehaves", "Landscape, Splines, PCG, World Partition, navigation and streaming"],
  ["A build fails or differs", "Cooking, packaging, data ownership, save compatibility and deployment"],
  ["Performance is unclear", "Start with evidence, then route to rendering, memory, physics, UI or networking"],
];

export default function UnrealPage() {
  const summaries = unrealSkills.map(({ slug, title, shortDescription, description, category, referenceCount, searchText }) => ({
    slug, title, shortDescription, description, category, referenceCount, searchText,
  }));
  const basePath = assetPath("");

  return (
    <>
      <header className="page-hero unreal-hero">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Operational library · Unreal Engine 5.8</p>
            <h1>Find the system that owns the problem.</h1>
          </div>
          <div>
            <p>Thirty practical field manuals turn engine documentation into decisions, exact actions, parameter effects, diagnostics, and verification.</p>
            <div className="button-row">
              <a className="button button--signal" href={assetPath("/downloads/unreal-engine-5.8-ai-skills.zip")}>Download all skills</a>
              <a className="button button--ghost" href="https://github.com/adventuresincausality/game-development-constitution/tree/main/skills">Browse on GitHub</a>
            </div>
          </div>
        </div>
        <div className="shell unreal-stat-rail">
          <div><strong>{unrealSkills.length}</strong><span>subsystem skills</span></div>
          <div><strong>{unrealReferenceCount}</strong><span>focused references</span></div>
          <div><strong>5.8</strong><span>documented engine version</span></div>
          <div><strong>ZIP</strong><span>offline-ready bundle</span></div>
        </div>
      </header>

      <section className="section section--paper">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow eyebrow--dark">Route by symptom</p><h2>Start with the job in front of you.</h2></div>
            <p>Each task has one primary owner. Add neighboring skills only when the guidance names a real system boundary.</p>
          </div>
          <div className="unreal-route-grid">
            {commonRoutes.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="skills">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow eyebrow--dark">Human-readable library</p><h2>Search every Unreal skill.</h2></div>
            <p>Search includes every focused reference, so a concrete symptom can lead directly to the right subsystem.</p>
          </div>
          <UnrealSkillExplorer skills={summaries} basePath={basePath} />
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell unreal-download-grid">
          <div><p className="eyebrow">Built for local AI access</p><h2>Download once. Retrieve narrowly.</h2><p>The bundle keeps all relative links, source trails, routing rules, and agent metadata intact. Give your AI folder access and point it at the included start file.</p></div>
          <ol className="numbered-list">
            <li><span>01</span><div><strong>Download and extract.</strong><p>Use the focused ZIP or clone the full repository.</p></div></li>
            <li><span>02</span><div><strong>Grant folder access.</strong><p>Keep the folder local so the agent can retrieve only what the task requires.</p></div></li>
            <li><span>03</span><div><strong>Start at the router.</strong><p>Direct the agent to <code>UNREAL_AI_START_HERE.md</code>.</p></div></li>
          </ol>
          <div className="button-row">
            <a className="button button--signal" href={assetPath("/downloads/unreal-engine-5.8-ai-skills.zip")}>Download the Unreal AI bundle</a>
            <a className="button button--ghost" href={assetPath("/for-ai")}>Read the AI setup guide</a>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell unreal-legal-callout">
          <div><p className="eyebrow eyebrow--dark">Independent educational resource</p><h2>Original explanations. Primary-source links. No Epic assets.</h2></div>
          <div><p>This library is not official Epic Games documentation and is not affiliated with or endorsed by Epic Games. Unreal Engine changes; verify high-risk shipping decisions against current official documentation and your target build.</p><a className="text-link" href={assetPath("/unreal/legal")}>Read the publication and legal boundary →</a></div>
        </div>
      </section>
    </>
  );
}
