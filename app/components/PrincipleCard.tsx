import { assetPath, type Principle } from "../lib/content";
import { ConfidenceMeter } from "./ConfidenceMeter";

export function PrincipleCard({ principle }: { principle: Principle }) {
  return (
    <article className="principle-card">
      <div className="principle-card__meta">
        <span className={`type-chip type-chip--${principle.type}`}>{principle.type}</span>
        <span>{principle.id}</span>
      </div>
      <h3><a href={assetPath(`/principles/${principle.id}`)}>{principle.title}</a></h3>
      <p>{principle.statement}</p>
      <div className="principle-card__footer">
        <span className="domain-chip">{principle.domain}</span>
        <ConfidenceMeter value={principle.confidence} compact />
      </div>
    </article>
  );
}
