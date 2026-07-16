import principlesJson from "../data/principles.json";
import sourcesJson from "../data/sources.json";

export type PrincipleType = "objective" | "contextual" | "stylistic";

export type Principle = {
  id: string;
  title: string;
  layer: "L1";
  domain: string;
  subdomain?: string;
  type: PrincipleType;
  confidence: number;
  status: string;
  tags: string[];
  related: string[];
  depends_on: string[];
  conflicts_with: string[];
  supersedes: string[];
  sources: string[];
  first_added: string;
  last_verified: string;
  file: string;
  statement: string;
  sections: Record<string, string>;
  rawMarkdown: string;
  searchText: string;
};

export type Source = {
  key: string;
  type: string;
  tier: string;
  citation: string;
  notes: string;
  group: string;
  url: string;
  verification: string;
};

export const principles = principlesJson as Principle[];
export const sources = sourcesJson as Source[];
export const principleById = new Map(principles.map((principle) => [principle.id, principle]));
export const sourceByKey = new Map(sources.map((source) => [source.key, source]));

export const domainOrder = [
  "DESIGN", "FEEL", "SYS", "PROG", "ECON", "BAL", "LEVEL", "NARR", "UX", "MP", "MON",
  "ARCH", "TECH", "ANIM", "AUDIO", "CONTENT", "PERF", "QA", "PROTO", "PLAYTEST",
  "PROD", "VISION", "TEAM", "SHIP",
] as const;

export const domainInfo: Record<string, { name: string; group: string; description: string }> = {
  DESIGN: { name: "Design First Principles", group: "Design & player experience", description: "Player-centered decisions, agency, depth, and meaning." },
  FEEL: { name: "Game Feel & Juice", group: "Design & player experience", description: "Responsiveness, impact, control, and tactile feedback." },
  SYS: { name: "Systems & Mechanics", group: "Design & player experience", description: "Rules, loops, emergence, and interacting systems." },
  PROG: { name: "Progression & Reward", group: "Design & player experience", description: "Mastery curves, unlocks, rewards, and difficulty." },
  ECON: { name: "Economy & Resources", group: "Design & player experience", description: "Sources, sinks, scarcity, trade, and value." },
  BAL: { name: "Balance & Tuning", group: "Design & player experience", description: "Viable choices, fairness, challenge, and curves." },
  LEVEL: { name: "Level & World Design", group: "Design & player experience", description: "Space, guidance, pacing, encounters, and exploration." },
  NARR: { name: "Narrative & Storytelling", group: "Design & player experience", description: "Agency, worldbuilding, pacing, and interactive story." },
  UX: { name: "UX & Accessibility", group: "Design & player experience", description: "Clarity, onboarding, controls, and inclusive access." },
  MP: { name: "Multiplayer & Social", group: "Design & player experience", description: "Fairness, cooperation, competition, and community." },
  MON: { name: "Monetization & Ethics", group: "Design & player experience", description: "Respectful value exchange without manipulation." },
  ARCH: { name: "Programming & Architecture", group: "Craft & production", description: "Code and systems designed to change safely." },
  TECH: { name: "Technical Art & Rendering", group: "Craft & production", description: "Visual ambition shaped by real-time constraints." },
  ANIM: { name: "Animation", group: "Craft & production", description: "Movement, readability, timing, and responsive performance." },
  AUDIO: { name: "Audio Design", group: "Craft & production", description: "Sound and music as feedback, space, and emotion." },
  CONTENT: { name: "Content Pipeline & Tooling", group: "Craft & production", description: "Reliable workflows that multiply creative output." },
  PERF: { name: "Performance & Optimization", group: "Craft & production", description: "Budgets, profiling, bottlenecks, and scalability." },
  QA: { name: "Testing & Quality Assurance", group: "Craft & production", description: "Repeatable confidence under real conditions." },
  PROTO: { name: "Prototyping & Iteration", group: "Craft & production", description: "Answering the riskiest questions quickly." },
  PLAYTEST: { name: "Playtesting & Research", group: "Craft & production", description: "Learning from behavior, evidence, and representative players." },
  PROD: { name: "Production & Scope", group: "Process, people & business", description: "Risk, milestones, cutting, and sustainable delivery." },
  VISION: { name: "Creative Direction", group: "Process, people & business", description: "Pillars, coherence, identity, and decision authority." },
  TEAM: { name: "Team & Collaboration", group: "Process, people & business", description: "Trust, feedback, communication, and healthy culture." },
  SHIP: { name: "Shipping & Live Operations", group: "Process, people & business", description: "Launch readiness, support, preservation, and endings." },
};

export const domainCounts = Object.fromEntries(
  domainOrder.map((domain) => [domain, principles.filter((principle) => principle.domain === domain).length]),
);

export const confidenceLabels: Record<number, string> = {
  1: "Speculative",
  2: "Tentative",
  3: "Reasonable",
  4: "Strong",
  5: "Established",
};

export const sectionOrder = [
  "Statement",
  "Rationale",
  "Applies when",
  "Does not apply / Exceptions",
  "Implementation (kept separate from the principle)",
  "Disagreement",
  "Notes",
];

export const sectionLabels: Record<string, string> = {
  "Implementation (kept separate from the principle)": "Implementation",
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adventuresincausality.github.io/game-development-constitution";

export function assetPath(pathname: string) {
  return `${basePath}${pathname}`;
}
