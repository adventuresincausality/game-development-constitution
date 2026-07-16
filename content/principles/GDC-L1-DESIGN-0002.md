---
id: GDC-L1-DESIGN-0002
title: Make the player's choices interesting — real tradeoffs, no dominant option
layer: L1
domain: DESIGN
subdomain: decisions-and-agency
type: objective
confidence: 4
status: canonical
tags:
  - decisions
  - meaningful-choice
  - risk-reward
  - balance
related:
  - GDC-L1-DESIGN-0006
  - GDC-L1-DESIGN-0001
depends_on:
  - GDC-L1-DESIGN-0001
conflicts_with: []
supersedes: []
sources:
  - S-meier-interesting-decisions
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Wherever the game asks the player to choose, make the choice *interesting*: the
> outcome must matter, the best option must not be obvious, and every option must carry
> a real tradeoff. Ruthlessly remove dominant strategies (an option that is always
> correct) and inconsequential choices (options whose outcomes don't matter) — both are
> non-decisions wearing a decision's clothes.

## Rationale
Decision-making is the engine of most gameplay: agency, tension, and replayability all
grow from choices the player actually has to think about. A choice is only interesting
when multiple considerations pull in different directions and the player must apply
judgment [S-meier-interesting-decisions]. Two failure modes destroy this. A **dominant
option** collapses the decision — if A is always best, there was never a choice, just a
correct answer to discover once. An **inconsequential option** collapses it the other
way — if outcomes don't differ or aren't visible, the player has no basis to care.
Interesting decisions require both *real tradeoffs* (choosing A means giving up B) and
*visible consequences* (the player can see that the choice mattered).

## Applies when
Any point of player choice: builds, loadouts, tactics, resource spending, branching
paths, upgrade trees, moment-to-moment combat options. It is the primary lens for
combat, strategy, RPG systems, and progression design.

## Does not apply / Exceptions
This is guidance for the *choices a game contains*, not a claim that every good game is
built on choices. Experiential, narrative, and atmospheric games can be excellent with
few meaningful decisions — their value lives in other domains (NARR, FEEL, aesthetics).
Also, not every choice should be agonizing: low-stakes expressive or cosmetic choices
(character color, base decoration) are legitimately inconsequential by design and
shouldn't be forced into tradeoffs.

## Implementation (kept separate from the principle)
Audit choices for dominance: if playtesters or theory converge on one "correct" build or
tactic, either buff the alternatives, add situational counters (rock-paper-scissors
relationships), or add costs that make the strong option situational. Make consequences
legible — the player must be able to perceive that A led somewhere different from B.
Introduce tradeoffs along orthogonal axes (offense vs. defense, speed vs. power, now vs.
later) so options aren't strictly rankable.

## Disagreement
The famous framing "a game *is* a series of interesting decisions" is contested as a
*definition* of games — walking simulators, toys, and purely narrative works are games
by most accounts yet aren't built on decisions. The design *guidance*, however (when you
do include choices, make them interesting), is near-universally endorsed. This entry
adopts the guidance and rejects the overreach of the definition.

## Notes
Confidence 4: overwhelming practitioner consensus on the guidance; held below 5 by the legitimate "not all games are decisions" scope limit.
