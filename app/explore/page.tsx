import type { Metadata } from "next";
import { PrincipleExplorer } from "../components/PrincipleExplorer";
import { principles, siteUrl } from "../lib/content";

export const metadata: Metadata = {
  title: "Explore principles",
  description: "Search and filter 143 engine-agnostic game-development principles by domain, type, and confidence.",
  alternates: { canonical: `${siteUrl}/explore/` },
};

export default function ExplorePage() {
  return (
    <>
      <header className="page-hero page-hero--compact">
        <div className="shell">
          <p className="eyebrow">The complete public corpus</p>
          <h1>Find the principle for the decision in front of you.</h1>
          <p>Search plain language or narrow the corpus by craft, evidence strength, and kind of guidance.</p>
        </div>
      </header>
      <section className="section section--paper section--explore">
        <div className="shell">
          <PrincipleExplorer principles={principles} />
        </div>
      </section>
    </>
  );
}
