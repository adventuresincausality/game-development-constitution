---
id: GDC-L1-VISION-0002
title: Define pillars — a few explicit principles every decision is checked against
layer: L1
domain: VISION
subdomain: pillars
type: contextual
confidence: 4
status: canonical
tags:
  - vision
  - pillars
  - creative-direction
  - filter
  - coherence
related:
  - GDC-L1-VISION-0001
  - GDC-L1-VISION-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-design-pillars
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Distill the vision into a few explicit **design pillars** — the fundamental goals of the
> intended experience — and use them as a filter for every idea and decision. Pillars turn a
> vague vision into a practical test: *does this serve the pillars?*

## Rationale
A vision (VISION-0001) is only usable if it can be applied to concrete decisions, and pillars
are how you make it applicable: a small set of guiding principles that every proposed mechanic,
feature, art choice, or cut can be checked against [S-design-pillars]. Pillars do two jobs.
They *align* — everyone measures against the same few goals, so decisions cohere. And they
*filter* — an idea that doesn't serve a pillar doesn't belong, which is how you resist feature
creep (PROD-0002) without relitigating the vision every time. Crucially, pillars reframe
rejection: they don't say an idea is *bad*, only that it doesn't fit *this* game — which makes
saying no (VISION-0003) defensible and impersonal. Few and sharp beats many and vague; three
strong pillars steer better than ten mushy ones.

## Applies when
Whenever you need to make the vision operational — evaluating features, resolving design
debates, prioritizing, and cutting. Valuable from pre-production through ship.

## Does not apply / Exceptions
Pillars can be over-formalized — a wall of vague, feel-good pillars that don't actually decide anything is worse than none. They must be *specific enough to reject things*. Very small or experimental projects may carry pillars informally.

## Implementation (kept separate from the principle)
Write a few (roughly 3–5) concrete, specific pillars that capture what the experience is *for*. Make them sharp enough to reject real ideas. Run features and cuts through them (VISION-0003, PROD-0002). Keep them visible to the whole team. Grow them when a decision can't be derived from them.

## Disagreement
Explicit pillars (shared filter, defensible nos) vs. holistic/tacit vision (some directors
carry coherence without formalizing it, and worry pillars ossify or oversimplify). Most teams
benefit from explicit pillars precisely because the vision must be shared across many people;
solo auteurs can carry it tacitly.

## Notes
The operational form of the vision (VISION-0001), the engine of principled nos (VISION-0003) and anti-creep (PROD-0002). Confidence 4.
