---
id: GDC-L1-PROD-0001
title: Scope is the primary risk — cut scope to protect quality and shipping
layer: L1
domain: PROD
subdomain: scoping-and-cutting
type: contextual
confidence: 4
status: canonical
tags:
  - production
  - scope
  - iron-triangle
  - cutting
  - shipping
related:
  - GDC-L1-PROTO-0005
  - GDC-L1-DESIGN-0007
  - GDC-L1-VISION-0003
  - GDC-L1-PROD-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-scope-production
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> The most common way games fail is **over-scoping.** Scope, time, and resources form a
> triangle; under a fixed team and timeline, **scope is the variable that must flex.** When
> reality bites — and it will — cut scope to protect quality and the ship date, rather than
> sacrificing polish or crunching people.

## Rationale
Almost every project underestimates how long things take, so the plan will exceed the
available time; the only question is what gives [S-scope-production]. There are three
options — extend time, add people (which often *slows* a late project), or cut scope — and
for most teams, especially small ones, cutting scope is the sustainable lever. The
alternatives degrade the things that matter most: cutting quality ships a worse game, and
crunching (PROD-0005) burns the team. A smaller game done well beats a bigger game done
badly or not at all. Treating scope as the flex variable — deciding *in advance* what you'll
cut if you must — turns the inevitable overrun from a crisis into a plan.

## Applies when
Every project with a deadline or finite resources — which is all of them. Most acute for
small/indie teams and first projects, where scope discipline is the difference between
shipping and development hell.

## Does not apply / Exceptions
Occasionally time or budget genuinely is the right lever (a funded team pushing a date for a
clearly-worth-it feature). And "cut scope" is not "cut everything distinctive" — the cuts
must protect the vision's core (VISION-0003), not gut it. Research/exploration phases
deliberately keep scope open. The principle is about the *production* commitment, where the
bar is quality-of-what-ships over quantity-of-what's-attempted.

## Implementation (kept separate from the principle)
Rank features by importance to the core experience and pre-decide the cut list. Define a
Minimum Viable Product early and keep it visible. When you overrun, cut from the bottom
rather than lowering quality across the board or extending indefinitely. Protect the vision's
core while cutting its periphery (VISION-0002/0003). Cutting well is a skill — expect to cut
things you love (PROTO-0005).

## Disagreement
Cut-scope-to-hit-the-date vs. push-the-date-for-the-content — both are valid levers, and
funded teams have more room to move the date. But the default, especially under real
constraints, is that scope flexes; the failure mode is treating scope as fixed and letting
quality, the schedule, or the team absorb the overrun instead.

## Notes
The master production principle; partners with PROD-0002 (scope creep), PROD-0006 (finish),
and the design-side cutting principles (DESIGN-0007 elegance, PROTO-0005 kill your darlings).
Confidence 4.
