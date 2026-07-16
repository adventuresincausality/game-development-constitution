---
id: GDC-L1-BAL-0002
title: Hunt down dominant strategies; protect viable diversity
layer: L1
domain: BAL
subdomain: dominant-strategies
type: contextual
confidence: 4
status: canonical
tags:
  - balance
  - dominant-strategy
  - viable-diversity
  - degenerate-strategy
related:
  - GDC-L1-SYS-0007
  - GDC-L1-DESIGN-0002
  - GDC-L1-BAL-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-sirlin-balance
  - S-schreiber-balance
  - S-meier-interesting-decisions
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A **dominant strategy** — one option that is simply best — collapses choice: once found,
> everyone uses it, and the rest of the design becomes decoration. The central balance goal
> is that *many options remain viable*, especially in expert play. Hunt down and remove
> always-best options; success is a rich space of reasonable choices, not one correct answer.

## Rationale
Once a single strategy dominates, informed players converge on it and the game's apparent
depth evaporates — a roster of "many characters" or "many builds" is a lie if only one is
worth picking [S-sirlin-balance]. This is the balance-craft enforcement of two principles
already in the constitution: interesting decisions require no dominant option (DESIGN-0002),
and players will optimize the fun out of a game by finding and repeating the best strategy
(SYS-0007). "Viable diversity" is the concrete target Sirlin names: a large number of the
available options should be reasonable choices, particularly at high skill. Balance work is,
in large part, the ongoing hunt for the current dominant option and the act of pulling it
back into the viable pack.

## Applies when
Any game with options that can be compared and optimized — builds, characters, weapons,
tactics, deck archetypes, upgrade paths. Sharpest in competitive and highly-optimized games,
but it applies to single-player build variety too.

## Does not apply / Exceptions
Perfect parity is neither achievable nor always desirable (see BAL-0006 and the
perfect-imbalance debate) — the goal is *viable diversity*, not identical power. Some
single-player games happily let players find an overpowered build as a reward for system
mastery (the "break the game" pleasure), where the dominant strategy is a feature the player
earned. And a *temporary* dominant strategy that a healthy metagame will answer is different
from a permanent one.

## Implementation (kept separate from the principle)
Actively look for the current best option (playtest, telemetry, expert feedback — BAL-0005)
and rein it in, rather than waiting for players to find it. Prefer bringing weak options up
to bringing the strong one down where it preserves fun. Give options situational strengths
and counters (BAL-0004) so "best" is context-dependent. Measure viability by *expert* play,
where dominance shows most clearly.

## Disagreement
"Kill dominant strategies for viable diversity" (Sirlin) is broadly held, but two live
tensions qualify it: whether to chase parity at all (perfect-imbalance camp says slight
dominance keeps the meta fresh — BAL-0006), and whether single-player games should even
prevent players from finding a dominant "break-the-game" build (many say let them).

## Notes
The BAL-domain enforcement of DESIGN-0002 (interesting decisions) and SYS-0007 (optimize the fun out). Confidence 4.
