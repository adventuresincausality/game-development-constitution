"use client";

import { useMemo, useState } from "react";

export type UnrealSkillSummary = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  referenceCount: number;
  searchText: string;
};

export function UnrealSkillExplorer({ skills, basePath }: { skills: UnrealSkillSummary[]; basePath: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(skills.map((skill) => skill.category)))];
  const normalized = query.trim().toLowerCase();
  const visible = useMemo(() => skills.filter((skill) =>
    (category === "All" || skill.category === category)
    && (!normalized || skill.searchText.includes(normalized)),
  ), [category, normalized, skills]);

  return (
    <div className="unreal-explorer">
      <div className="unreal-filters">
        <label className="unreal-search">
          <span>What are you trying to build or fix?</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “IK retargeter”, “missing packaged asset”, or “lighting noise”"
          />
        </label>
        <label>
          <span>Area</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="unreal-results-bar">
        <strong>{visible.length}</strong> of {skills.length} skills
        {(query || category !== "All") && <button type="button" className="text-button" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button>}
      </div>
      <div className="unreal-skill-grid">
        {visible.map((skill) => (
          <a className="unreal-skill-card" href={`${basePath}/unreal/${skill.slug}`} key={skill.slug}>
            <div><span>{skill.category}</span><code>{skill.slug}</code></div>
            <h2>{skill.title.replace(/^Unreal 5\.8\s+/, "")}</h2>
            <p>{skill.shortDescription}</p>
            <strong>{skill.referenceCount} focused references <span aria-hidden="true">→</span></strong>
          </a>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="unreal-empty">
          <h2>No exact match.</h2>
          <p>Try the subsystem name, an Unreal feature, or the visible symptom instead of a full question.</p>
        </div>
      )}
    </div>
  );
}
