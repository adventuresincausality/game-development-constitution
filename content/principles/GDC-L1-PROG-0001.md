---
id: GDC-L1-PROG-0001
title: Design the power curve deliberately — pace growth against challenge
layer: L1
domain: PROG
subdomain: pacing-of-power
type: contextual
confidence: 4
status: canonical
tags:
  - progression
  - power-curve
  - pacing
  - flow
  - difficulty
related:
  - GDC-L1-DESIGN-0004
  - GDC-L1-PROG-0005
  - GDC-L1-SYS-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-csikszentmihalyi-flow
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Treat the rate at which the player's power grows *relative to challenge* as a designed
> curve, not an accident. If power grows too slowly, progress feels absent; too quickly,
> and the game becomes a cakewalk. Pace power so the player stays near the edge of their
> ability.

## Rationale
Progression only feels good in relation to challenge: the same +10% damage is thrilling
against a wall the player was stuck on and meaningless against trivial enemies. Because
engagement lives in the band where challenge matches ability (flow, DESIGN-0004), the
*gap* between the player's rising power and the game's rising challenge is the real design
object [S-csikszentmihalyi-flow]. Left unmanaged, that gap drifts: content built for an
early power level trivializes once power outpaces it, and positive feedback loops
(SYS-0004) can make a modest lead snowball into runaway dominance. A deliberately shaped
power curve keeps the player perpetually "almost overpowered, then challenged again."

## Applies when
Any game with character or player growth over time — RPGs, action games, roguelikes,
progression-driven games. The longer the progression and the more power accrues, the more
this matters.

## Does not apply / Exceptions
Games with little or flat progression (many competitive, arcade, or puzzle games) hold
power roughly constant and derive difficulty from content and player skill instead. And a
perfectly smooth curve isn't always the goal: deliberate power *spikes* (a burst of
power-fantasy after a hard stretch) and difficulty *walls* (a gate that demands mastery)
are valid pacing tools — the point is that they're chosen, not accidental.

## Implementation (kept separate from the principle)
Model both curves — player power and content/enemy power — and look at their gap over
time, not either alone. Tune so the gap oscillates within the flow band rather than
trending to trivial or brutal. Distinguish vertical growth (raw strength for tougher
challenges) from horizontal growth (new options and variety); many games pace both. Watch
for runaway positive feedback (SYS-0004) flattening the late game (see PROG-0006).

## Disagreement
Steady-curve design (smooth, predictable growth) vs. punctuated design (deliberate spikes
and valleys for drama) are both legitimate; the choice follows the intended emotional
rhythm. Neither "always keep it smooth" nor "always spike it" is universally right.

## Notes
The pacing backbone of the PROG domain; it is DESIGN-0004 (flow) extended across the whole
progression, and it interacts with SYS-0004 (feedback loops) in the late game. Confidence 4.
