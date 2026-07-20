import { assetPath } from "../lib/content";

const nav = [
  ["Explore", "/explore"],
  ["Unreal 5.8", "/unreal"],
  ["For AI", "/for-ai"],
  ["Sources", "/sources"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href={assetPath("/")} aria-label="The Game Development Constitution home">
          <span className="brand__mark" aria-hidden="true">GDC</span>
          <span className="brand__name">Game Development Constitution</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={assetPath(href)}>{label}</a>)}
        </nav>
        <a className="button button--small button--ink header-cta" href={assetPath("/explore")}>Search principles</a>
      </div>
    </header>
  );
}
