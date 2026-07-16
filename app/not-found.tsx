import { assetPath } from "./lib/content";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <span>404</span>
      <h1>That principle is not in the public edition.</h1>
      <p>Try the full search or return to the constitution’s starting point.</p>
      <div className="button-row">
        <a className="button button--signal" href={assetPath("/explore")}>Search principles</a>
        <a className="button button--outline" href={assetPath("/")}>Go home</a>
      </div>
    </section>
  );
}
