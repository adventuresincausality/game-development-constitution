---
id: GDC-L1-CONTENT-0003
title: Enforce naming and organization conventions — consistency scales, chaos compounds
layer: L1
domain: CONTENT
subdomain: naming-and-organization
type: contextual
confidence: 4
status: canonical
tags:
  - content
  - naming
  - organization
  - conventions
  - maintainability
related:
  - GDC-L1-CONTENT-0001
  - GDC-L1-TEAM-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-gregory-game-engine-arch
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Adopt and enforce consistent naming and folder/organization conventions for assets, code, and
> data — early. Consistency scales gracefully as the project grows; inconsistency compounds into
> a mess where nobody can find anything, duplicates proliferate, and tools break. A convention
> followed is worth more than a perfect one ignored.

## Rationale
A game accumulates thousands of files, and the cost of disorganization grows super-linearly: finding assets, avoiding duplicates, wiring up tools, and onboarding people all get harder as the mess deepens [S-gregory-game-engine-arch]. Conventions are cheap to establish and enormously expensive to retrofit, so the time to set them is at the start. They pay off in searchability (you can *find* the thing), tool reliability (automated pipelines depend on predictable names and paths), and shared understanding (a team parallel to "make decisions visible and durable," TEAM-0004 — the convention *is* durable shared knowledge).

## Applies when
Any project past trivial size, and especially any team or long-lived project. The larger the
content and team, the more it matters — but it's cheapest to start on day one.

## Does not apply / Exceptions
A one-person weekend prototype can be loose about it (though even solo devs drift). And
conventions can be over-engineered into bureaucracy that slows people down — the goal is
*consistency that helps*, not a rulebook for its own sake. A simple convention everyone actually
follows beats an elaborate one they route around.

## Implementation (kept separate from the principle)
Keep them simple enough to follow. Enforce them via tooling/validation where possible (CONTENT-0004) rather than vigilance alone. Refactor toward the convention when things drift.

## Disagreement
Little on the value of conventions; the nuance is *how much* structure (lightweight vs. elaborate)
and how strictly to enforce. Over-formalization can bureaucratize; under-structuring invites
chaos. Match the rigor to team and project size.

## Notes
Confidence 4.
