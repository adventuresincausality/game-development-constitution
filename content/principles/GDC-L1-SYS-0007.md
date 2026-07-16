---
id: GDC-L1-SYS-0007
title: Players optimize the fun out — protect the experience from degenerate strategies
layer: L1
domain: SYS
subdomain: systems-thinking
type: contextual
confidence: 4
status: canonical
tags:
  - degenerate-strategy
  - dominant-strategy
  - balance
  - player-centric
related:
  - GDC-L1-DESIGN-0002
  - GDC-L1-SYS-0004
  - GDC-L1-SYS-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-soren-johnson-optimize
  - S-meier-interesting-decisions
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Given the opportunity, players will optimize the fun out of a game — they will find and
> repeat the most efficient path even when it makes their own experience worse. Anticipate
> degenerate and dominant strategies, and shape constraints and incentives so that the fun
> path stays the effective path. Part of the designer's job is to protect players from
> themselves.

## Rationale
Players under challenge seek efficiency, and once a clearly-best strategy exists, many
will grind it regardless of enjoyment, then experience the resulting monotony as the
game's fault [S-soren-johnson-optimize]. A designer cannot rely on players to
self-restrain toward fun; the incentive gradient wins. This is why "protecting the player
from themselves" is a real responsibility [S-meier-interesting-decisions]. The lever is
the *incentive structure*: if the optimal action is also boring, players will take it and
suffer — so the design must ensure the engaging way to play is also (at least
competitively) the rewarding way.

## Applies when
Any game with optimizable systems and a persistent player incentive to win, progress, or
accumulate — RPG builds, strategy, competitive play, progression and grind systems,
economies.

## Does not apply / Exceptions
Some games make optimization *itself* the fun: incremental/idle games, min-max sandboxes,
and puzzle-optimization games are *about* finding the efficient path, and there the
optimization pressure is the point rather than a threat. The principle inverts there —
give players a rich optimization space rather than protecting them from it. Elsewhere,
beware over-constraining: railroading players away from all efficiency can feel
patronizing.

## Implementation (kept separate from the principle)
Hunt for dominant strategies in playtest and remove them (buff alternatives, add costs,
introduce situational counters — see DESIGN-0002). Avoid incentive structures that reward
tedium (e.g. grinding a safe, dull action for optimal returns); make the exciting option
also the rewarding one. Watch feedback loops (SYS-0004): positive loops are what let a
single optimal strategy snowball into the only strategy. Use soft constraints (diminishing
returns, variety incentives) to keep the fun path competitive.

## Disagreement
Mostly about *how much* to intervene. Systemic-freedom advocates warn that
over-protecting players removes agency and the satisfaction of finding your own path;
experience-protection advocates note that unchecked optimization reliably flattens games.
The synthesis: shape incentives so the fun path is viable, but don't wall off exploration
entirely — protect the experience, don't confiscate the agency.

## Notes
The systems-level enforcement mechanism behind DESIGN-0002 (interesting decisions). Confidence 4.
