---
id: GDC-L1-PROD-0002
title: Fight scope creep — default to no; every feature has a hidden tail
layer: L1
domain: PROD
subdomain: scope-creep
type: contextual
confidence: 4
status: canonical
tags:
  - production
  - scope-creep
  - features
  - discipline
related:
  - GDC-L1-PROD-0001
  - GDC-L1-VISION-0003
  - GDC-L1-DESIGN-0007
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Features are easy to add and hard to remove, and each carries a **hidden tail** —
> integration, balance, polish, bug-fixing, testing, and maintenance — usually far larger
> than its build cost. Guard the scope actively. The default answer to a new feature added
> mid-project is **no**.

## Rationale
Scope creep is the slow accumulation of "just one more thing," each individually reasonable,
that collectively unbalances the project into delays, crunch, or cancellation
[S-scope-production]. The trap is that people estimate the *build* cost of a feature and
ignore its tail: a new mechanic must be integrated with every existing system, balanced,
polished, taught (UX/onboarding), debugged, and maintained forever after. Ten "small"
additions can sink a schedule. Because the pressure to add is constant and the cost is
hidden, the discipline has to be structural — a default of *no*, a filter every addition must
pass (the pillars, VISION-0002), and a conscious accounting of the tail before saying yes.

## Applies when
Throughout production, and especially in the messy middle where the game is playable enough
to inspire endless "wouldn't it be cool if" additions.

## Does not apply / Exceptions
Not every addition is creep — sometimes a new feature is exactly what the game needs, and
rigid feature-freezes can prevent genuine improvements found through iteration (PROTO-0006).
Pre-production and prototyping deliberately explore widely before locking scope. The rule is
"add deliberately, accounting for the tail," not "never change the plan." The default is no;
yes requires justification.

## Implementation (kept separate from the principle)
Run every proposed addition through the vision's pillars (VISION-0002) — does it serve *this*
game? Estimate the whole tail, not just the build. Prefer deepening existing systems over
adding new ones. Keep a "cut/later" list so good-but-wrong ideas are captured without being
built now (PROTO-0005). Make adding scope a deliberate, visible decision, not a quiet drift.

## Disagreement
Firm scope discipline (protect the schedule and coherence) vs. openness to iteration-driven
change (the best features are often discovered mid-development, not planned). The
reconciliation: distinguish *creep* (unaccounted accumulation) from *deliberate iteration*
(a justified change that pays for its tail). Cut creep; welcome justified change.

## Notes
The active-defense partner to PROD-0001 (scope is the primary risk); its filter is the vision
(VISION-0002/0003) and its spirit is elegance (DESIGN-0007). Confidence 4.
