---
id: GDC-L1-PROD-0004
title: Plan for iteration and the unknown — schedules must budget discovery
layer: L1
domain: PROD
subdomain: scheduling
type: contextual
confidence: 4
status: canonical
tags:
  - production
  - scheduling
  - iteration
  - risk-management
  - uncertainty
related:
  - GDC-L1-PROTO-0006
  - GDC-L1-ARCH-0005
  - GDC-L1-DESIGN-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schell-artofgamedesign
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Game development is *discovery*, not linear execution — the fun is found through iteration
> (PROTO-0006), not specified up front — so a schedule that assumes you already know the
> answer is fiction. Budget explicit time for iteration, failure, and re-work, and treat the
> plan as a living hypothesis, not a contract.

## Rationale
The core activity of making a good game is finding out what's fun by trying, testing, and
adjusting (DESIGN-0001, PROTO-0006), which is inherently unpredictable — you cannot schedule
"discover the fun" like you schedule "lay bricks." Plans that assume linear execution
therefore systematically under-budget the loops that actually produce quality, and the
overrun shows up as crunch or cut quality [S-scope-production]. Planning for iteration means
building slack and re-work into the schedule, front-loading the riskiest unknowns
(PROTO-0002), and updating the plan as discovery reveals reality. The schedule's job is to
manage uncertainty, not to deny it.

## Applies when
All game scheduling and production planning, especially for novel or design-risky games where
much is genuinely unknown. Less so for well-understood, formulaic production (a known genre,
a sequel) where uncertainty is lower.

## Does not apply / Exceptions
Some work *is* predictable — porting, localization, well-understood content production — and
can be scheduled tightly. Highly derivative projects carry less discovery risk. And "plan for
iteration" is not license for endless drift (PROTO-0006's know-when-to-ship caveat): budgeted
iteration is bounded, aimed, and eventually stopped.

## Implementation (kept separate from the principle)
Identify what's genuinely unknown and schedule discovery/iteration time for it explicitly;
schedule the known work normally. Front-load the riskiest unknowns (PROTO-0002) so surprises
arrive while cheap. Invest in iteration speed (ARCH-0005) to get more loops per unit time.
Re-plan as reality is revealed — treat the schedule as a forecast you update, not a promise
you defend against the facts.

## Disagreement
Iteration-budgeted, adaptive planning (embrace uncertainty, re-plan often) vs. fixed
milestone planning (predictability for stakeholders, funding, coordination) — publishers and
large teams need commitments the creative reality resists. Most teams blend: firm outer
milestones, adaptive iteration within them.

## Notes
The scheduling face of the iteration truth (PROTO-0006, DESIGN-0001); pairs with iteration-
speed architecture (ARCH-0005). Confidence 4.
