---
id: GDC-L1-BAL-0001
title: Decide what balance is for before you tune
layer: L1
domain: BAL
subdomain: balance-philosophy
type: contextual
confidence: 4
status: canonical
tags:
  - balance
  - philosophy
  - fairness
  - intent
related:
  - GDC-L1-BAL-0006
  - GDC-L1-DESIGN-0001
  - GDC-L1-BAL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schell-artofgamedesign
  - S-schreiber-balance
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> "Balanced" is meaningless without a goal. Decide *what* balance serves — competitive
> integrity, viable variety, a power fantasy, a difficulty target, a fair economy — because
> different goals demand opposite tuning. Balance toward the intended experience, not toward
> an abstract notion of "fairness."

## Rationale
Balance is not one thing; it's a family of goals that often conflict, and the word hides
which one you mean [S-schell-artofgamedesign]. Tuning a competitive game so every option is
viable at expert level is a completely different job from tuning a power-fantasy RPG (where
the player is *supposed* to become overwhelmingly strong) or a co-op game (where balance
means everyone contributes) or a horror game (where "unfair" is the point). Chasing generic
"fairness" without naming the target produces incoherent results — nerfing something that
was doing exactly what the design wanted, or "balancing" the fun out of a deliberately
lopsided moment. Naming the goal (this is DESIGN-0001 applied to numbers: balance for the
experience produced) turns tuning from vague fiddling into aimed work.

## Applies when
Before and during any balance pass, and any time someone says something is "unbalanced" —
the first question is "relative to what goal?"

## Does not apply / Exceptions
Not an exception so much as a caution: even within one game, different subsystems may have
different balance goals (the competitive PvP mode vs. the power-fantasy campaign), so
"decide what balance is for" is per-context, not one global answer. And some games
genuinely want *imbalance* as an experience (asymmetric horror, David-vs-Goliath), which is
a legitimate goal, not a failure to balance.

## Implementation (kept separate from the principle)
State the balance goal for each system explicitly (e.g. "all five archetypes should be
viable for a full playthrough" vs. "the mage should feel strongest late"). Judge tuning
changes against that goal, not against a reflex toward parity. Recognize when a subsystem's
goal differs from the game's and tune it on its own terms. Revisit the goal if the design
shifts.

## Disagreement
Balance-as-fairness (parity, competitive integrity) vs. balance-as-experience (tune toward
the intended feeling, even if "unfair") is the philosophical split under the whole domain.
Competitive games lean fairness; single-player and authored experiences lean experience.
This principle says: pick your meaning deliberately.

## Notes
The framing principle of the BAL domain — everything else (dominant strategies, symmetry,
methods) is *how*; this is *toward what*. Directly an application of DESIGN-0001. Confidence 4.
