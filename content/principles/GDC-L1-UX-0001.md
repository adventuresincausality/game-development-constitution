---
id: GDC-L1-UX-0001
title: Teach by doing, just in time — not with front-loaded walls of text
layer: L1
domain: UX
subdomain: onboarding-and-tutorials
type: contextual
confidence: 4
status: canonical
tags:
  - ux
  - onboarding
  - tutorials
  - cognitive-load
  - learning
related:
  - GDC-L1-LEVEL-0004
  - GDC-L1-PROG-0005
  - GDC-L1-DESIGN-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-hodent-gamers-brain
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Teach a mechanic *when the player needs it*, through *action*, not in a front-loaded wall
> of text or a mandatory tutorial gauntlet. Introduce one thing at a time, in context, and
> let the player learn by doing. Information delivered before it's needed overloads working
> memory and is forgotten before it's used.

## Rationale
Working memory is small and short-lived, so a tutorial that front-loads a dozen controls
and rules exceeds the player's capacity to hold them — most of it evaporates before the
first real use [S-hodent-gamers-brain]. Learning sticks when it's *active* (the player does
the thing) and *timely* (taught at the moment of need, so it's immediately reinforced by
use). This is the UX/cognitive complement to teaching through space (LEVEL-0004) and the
mastery arc (PROG-0005): those shape *what* order to teach in; this insists on *how* — in
small, contextual, doing-based doses rather than a lecture up front. Fun is learning
(DESIGN-0003), and learning by playing is far more effective (and more fun) than learning by
reading.

## Applies when
Onboarding and the introduction of any mechanic, control, or system. Highest-value in the
opening hour, where first impressions and drop-off are decided.

## Does not apply / Exceptions
Some complexity genuinely needs explicit reference (deep strategy/sim games, complex control
schemes) — the fix there is an *accessible, optional* reference the player can consult, not a
forced lecture. Genre conventions vary: a hardcore sim audience tolerates (even expects) a
manual; a broad-audience game cannot. And "just in time" still needs the teaching to arrive
*before* failure, not after.

## Implementation (kept separate from the principle)
Break teaching into single-concept, in-context moments triggered by need. Prefer showing and doing over telling. Make any necessary text short, skippable, and re-accessible. Avoid the unskippable tutorial wall. Test onboarding with true first-time players and watch where they overload or forget (PLAYTEST-0001/0003).

## Disagreement
Guided just-in-time onboarding (accessible, low-overload) vs. manual/upfront instruction (thorough, suits complex or hardcore games) vs. discovery-first (teach nothing, let players find out).

## Notes
The cognitive/onboarding angle on teaching, complementing the spatial (LEVEL-0004) and
pacing (PROG-0005) angles. Feeds cognitive-load management (UX-0002). Confidence 4.
