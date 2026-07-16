---
id: GDC-L1-SYS-0008
title: Model resources as an internal economy — mind the sources, sinks, and flows
layer: L1
domain: SYS
subdomain: interlocking-systems
type: objective
confidence: 4
status: canonical
tags:
  - internal-economy
  - resources
  - pacing
  - balance
  - systems-thinking
related:
  - GDC-L1-SYS-0004
  - GDC-L1-DESIGN-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-adams-dormans-mechanics
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Treat every resource in the game — currency, health, ammo, time, XP, materials — as
> part of an internal economy of **sources** (where resources enter), **sinks** (where
> they leave), and **converters** (where one becomes another). The *rates of flow* through
> this economy govern pacing, difficulty, and progression; many problems that look like
> content problems are actually flow problems.

## Rationale
An internal economy is the connective tissue that turns isolated mechanics into a
system, and its structure — the balance of sources against sinks — is what generates
challenge and paces progression [S-adams-dormans-mechanics]. When a game feels too easy,
too grindy, too rich, or too starved, the cause is usually an imbalance in flow: a source
outpacing its sinks (runaway accumulation, trivialized challenge) or sinks outpacing
sources (starvation, grind). Seeing resources as an economy makes these diagnosable and
tunable at the level of *rates*, rather than as a pile of unrelated numbers.

## Applies when
Any game with accumulating or spent resources — which is almost all of them. Essential
for RPGs, strategy, survival, simulation, and any game with progression or crafting.

## Does not apply / Exceptions
Games with minimal or no resource accumulation (pure skill/action games, many puzzle
games) have thin economies where this lens adds little. Even there, "attention" and
"time" can be modeled as resources, but the framework earns its keep only when flows are
substantial.

## Implementation (kept separate from the principle)
Enumerate each resource's sources, sinks, and converters, and reason about *rates*, not
just totals. Model or diagram the flows (economy-simulation tools exist for this) to spot
runaway accumulation or starvation before players do. Tune pacing by adjusting flow rates
rather than bolting on content. Watch for feedback loops inside the economy (SYS-0004),
where a resource feeds a source of itself and snowballs.

## Disagreement
No serious disagreement on the framework's usefulness where economies are substantial;
debate lives one level down (how much scarcity, how fast progression) and belongs to the
ECON and BAL domains.

## Notes
Partners with SYS-0004 (feedback loops are the dynamics *of* the economy) and bridges to the future ECON and BAL domains, which will treat currencies, scarcity, and tuning in depth. Confidence 4.
