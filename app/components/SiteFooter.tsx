import { assetPath } from "../lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <div className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">GDC</span>
            <span className="brand__name">Game Development Constitution</span>
          </div>
          <p className="site-footer__statement">An open, evidence-tagged field guide for people and machines making games.</p>
        </div>
        <div className="site-footer__links" aria-label="Footer navigation">
          <a href={assetPath("/explore")}>Explore</a>
          <a href={assetPath("/unreal")}>Unreal 5.8</a>
          <a href={assetPath("/for-ai")}>For AI</a>
          <a href={assetPath("/sources")}>Sources</a>
          <a href={assetPath("/about")}>About</a>
          <a href="https://github.com/adventuresincausality/game-development-constitution">GitHub</a>
        </div>
        <div className="site-footer__meta">
          <p>Created and maintained by Sontlux Sukhavachana.</p>
          <p>Developed with assistance from Claude and Codex.</p>
          <p><a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> · Public edition v1.1</p>
          <p><a href={assetPath("/unreal/legal")}>Unreal trademark and independence notice</a></p>
        </div>
      </div>
    </footer>
  );
}
