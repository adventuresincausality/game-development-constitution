import { confidenceLabels } from "../lib/content";

export function ConfidenceMeter({ value, compact = false }: { value: number; compact?: boolean }) {
  return (
    <div className={`confidence${compact ? " confidence--compact" : ""}`} aria-label={`Confidence ${value} of 5, ${confidenceLabels[value]}`}>
      <span className="confidence__label">{compact ? "Confidence" : confidenceLabels[value]}</span>
      <span className="confidence__dots" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((step) => <span key={step} className={step <= value ? "is-filled" : ""} />)}
      </span>
      <span className="confidence__score">{value}/5</span>
    </div>
  );
}
