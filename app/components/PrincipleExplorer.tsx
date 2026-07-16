"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import type { Principle, PrincipleType } from "../lib/content";
import { domainCounts, domainInfo, domainOrder } from "../lib/content";
import { PrincipleCard } from "./PrincipleCard";

const ALL = "all";

type InitialFilters = {
  query: string;
  domain: string;
  type: PrincipleType | typeof ALL;
  confidence: string;
};

const subscribeToLocation = () => () => {};
const readLocationSearch = () => window.location.search;
const readServerSearch = () => "";

function parseInitialFilters(search: string): InitialFilters {
  const incoming = new URLSearchParams(search);
  const incomingDomain = incoming.get("domain") ?? ALL;
  const incomingType = incoming.get("type") as PrincipleType | null;
  const incomingConfidence = incoming.get("confidence") ?? ALL;
  return {
    query: incoming.get("q") ?? "",
    domain: domainOrder.includes(incomingDomain as (typeof domainOrder)[number]) ? incomingDomain : ALL,
    type: incomingType && ["objective", "contextual", "stylistic"].includes(incomingType) ? incomingType : ALL,
    confidence: ["1", "2", "3", "4", "5"].includes(incomingConfidence) ? incomingConfidence : ALL,
  };
}

export function PrincipleExplorer({ principles }: { principles: Principle[] }) {
  const search = useSyncExternalStore(subscribeToLocation, readLocationSearch, readServerSearch);
  return <ExplorerState key={search} principles={principles} initial={parseInitialFilters(search)} />;
}

function ExplorerState({ principles, initial }: { principles: Principle[]; initial: InitialFilters }) {
  const [query, setQuery] = useState(initial.query);
  const [domain, setDomain] = useState(initial.domain);
  const [type, setType] = useState<PrincipleType | typeof ALL>(initial.type);
  const [confidence, setConfidence] = useState(initial.confidence);
  const [visible, setVisible] = useState(18);

  const filtered = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return principles.filter((principle) => {
      if (domain !== ALL && principle.domain !== domain) return false;
      if (type !== ALL && principle.type !== type) return false;
      if (confidence !== ALL && principle.confidence !== Number(confidence)) return false;
      return terms.every((term) => principle.searchText.includes(term));
    });
  }, [principles, query, domain, type, confidence]);

  const hasFilters = query || domain !== ALL || type !== ALL || confidence !== ALL;

  function reset() {
    setQuery("");
    setDomain(ALL);
    setType(ALL);
    setConfidence(ALL);
    setVisible(18);
  }

  return (
    <div className="explorer">
      <div className="explorer__controls">
        <label className="search-field search-field--large">
          <span className="sr-only">Search principles</span>
          <span className="search-field__icon" aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => { setQuery(event.target.value); setVisible(18); }}
            placeholder="Search a problem, craft, or decision…"
            type="search"
          />
          <kbd>/</kbd>
        </label>
        <div className="filter-grid">
          <label>
            <span>Domain</span>
            <select value={domain} onChange={(event) => { setDomain(event.target.value); setVisible(18); }}>
              <option value={ALL}>All 24 domains</option>
              {domainOrder.map((code) => <option key={code} value={code}>{domainInfo[code].name} ({domainCounts[code]})</option>)}
            </select>
          </label>
          <label>
            <span>Principle type</span>
            <select value={type} onChange={(event) => { setType(event.target.value as PrincipleType | typeof ALL); setVisible(18); }}>
              <option value={ALL}>All types</option>
              <option value="objective">Objective</option>
              <option value="contextual">Contextual</option>
              <option value="stylistic">Stylistic</option>
            </select>
          </label>
          <label>
            <span>Confidence</span>
            <select value={confidence} onChange={(event) => { setConfidence(event.target.value); setVisible(18); }}>
              <option value={ALL}>Any confidence</option>
              <option value="5">5 — Established</option>
              <option value="4">4 — Strong</option>
              <option value="3">3 — Reasonable</option>
              <option value="2">2 — Tentative</option>
              <option value="1">1 — Speculative</option>
            </select>
          </label>
        </div>
      </div>

      <div className="results-bar" aria-live="polite">
        <p><strong>{filtered.length}</strong> {filtered.length === 1 ? "principle" : "principles"}</p>
        {hasFilters && <button className="text-button" type="button" onClick={reset}>Clear filters</button>}
      </div>

      {filtered.length ? (
        <>
          <div className="principle-grid">
            {filtered.slice(0, visible).map((principle) => <PrincipleCard key={principle.id} principle={principle} />)}
          </div>
          {visible < filtered.length && (
            <div className="load-more">
              <button className="button button--outline" type="button" onClick={() => setVisible((count) => count + 18)}>
                Show more
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <span aria-hidden="true">∅</span>
          <h2>No principle matches that combination.</h2>
          <p>Try a broader phrase or clear one of the filters.</p>
          <button className="button button--ink" type="button" onClick={reset}>Reset search</button>
        </div>
      )}
    </div>
  );
}
