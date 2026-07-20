import type { Metadata } from "next";
import { assetPath, siteUrl } from "../../lib/content";

export const metadata: Metadata = {
  title: "Unreal Engine publication and legal boundary",
  description: "Copyright, trademark, source, attribution, and independence policy for the public Unreal Engine 5.8 skill library.",
  alternates: { canonical: `${siteUrl}/unreal/legal/` },
};

export default function UnrealLegalPage() {
  return (
    <>
      <header className="page-hero"><div className="shell page-hero__grid"><div><p className="eyebrow">Publication boundary</p><h1>Explain and cite. Do not copy.</h1></div><p>The Unreal field manual is independently written educational guidance. It links to official sources without redistributing Epic documentation, assets, code, screenshots, or logos.</p></div></header>
      <section className="section section--paper"><div className="shell prose-layout"><aside className="prose-index"><p>On this page</p><a href="#conclusion">Practical conclusion</a><a href="#copyright">Copyright</a><a href="#epic">Epic terms</a><a href="#trademark">Trademark</a><a href="#contributors">Contributor rule</a></aside><div className="prose">
        <section id="conclusion"><p className="eyebrow eyebrow--dark">Practical conclusion</p><h2>Publishing the library is reasonable within a conservative boundary.</h2><p>Facts, methods, systems, and procedures can be independently described. Copyright can protect Epic’s particular prose, illustrations, screenshots, and other expression, so this project uses original wording and links readers to the official material.</p><p>This is general information rather than legal advice. A lawyer should review any future release that republishes Epic media, Engine Code, assets, or substantial documentation excerpts.</p></section>
        <section id="copyright"><h2>Copyright</h2><p>The U.S. Copyright Office explains that copyright does not protect ideas, procedures, processes, systems, methods of operation, concepts, principles, or discoveries, although an author’s particular explanation or illustration can be protected.</p><p><a href="https://www.copyright.gov/circs/circ33.pdf">Read Copyright Office Circular 33 →</a></p></section>
        <section id="epic"><h2>Epic documentation and engine terms</h2><p>The library does not copy official documentation pages or distribute Unreal Engine technology. It contains original summaries, interoperable identifiers, and direct source links. The Unreal Engine EULA continues to govern anyone’s use of the engine itself.</p><p><a href="https://www.unrealengine.com/eula/unreal">Unreal Engine EULA →</a><br /><a href="https://legal.epicgames.com/epicgames/tos">Epic Games Terms of Service →</a><br /><a href="https://dev.epicgames.com/documentation/">Official Epic documentation →</a></p></section>
        <section id="trademark"><h2>Trademark and independence</h2><p>Unreal Engine and Unreal are trademarks or registered trademarks of Epic Games, Inc. in the United States and elsewhere. This independent resource is not affiliated with, approved by, sponsored by, or endorsed by Epic Games. It uses no Unreal Engine logo or Epic brand artwork.</p></section>
        <section id="contributors"><h2>The contributor rule</h2><p>Explain and cite; do not copy. Do not add Epic documentation prose, screenshots, artwork, logos, Engine Code, or assets unless a separate license clearly permits that exact use and the repository records it.</p><p><a className="text-link" href="https://github.com/adventuresincausality/game-development-constitution/blob/main/UNREAL-ENGINE-NOTICE.md">Read the repository notice →</a></p></section>
        <div className="button-row"><a className="button button--ink" href={assetPath("/unreal")}>Return to the Unreal field manual</a></div>
      </div></div></section>
    </>
  );
}
