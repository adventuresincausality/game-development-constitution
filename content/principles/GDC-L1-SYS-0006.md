---
id: GDC-L1-SYS-0006
title: Make systems legible — expose enough state for players to form and test hypotheses
layer: L1
domain: SYS
subdomain: systems-thinking
type: contextual
confidence: 4
status: canonical
tags:
  - legibility
  - feedback
  - systems-thinking
  - player-centric
  - learning
related:
  - GDC-L1-DESIGN-0006
  - GDC-L1-DESIGN-0003
  - GDC-L1-FEEL-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-salen-zimmerman-rulesofplay
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Players can only engage a system they can read. Surface enough of a system's state and
> behavior for players to build a mental model, form hypotheses, and see the results of
> their actions. A system whose cause-and-effect the player cannot perceive produces
> confusion or superstition, not depth.

## Rationale
Meaningful play requires that the relationship between action and outcome be
*discernible* and *integrated* — the player must be able to perceive what their action
did and how it fits the larger game [S-salen-zimmerman-rulesofplay]. Depth that the
player can't observe is, functionally, not depth: they can't reason about it, so they
can't make skillful decisions, and they can't *learn* (which breaks DESIGN-0003, since
learning requires readable feedback). When systems are opaque, players fall back on
guesswork and ritual — attributing outcomes to the wrong causes — and the richest
underlying model goes to waste.

## Applies when
Any system the player is expected to master: combat, economy, crafting, AI behavior,
progression. The bar rises with how central the system is to skillful play.

## Does not apply / Exceptions
Deliberate opacity is a legitimate tool. Survival, horror, mystery, and discovery-driven
games hide systems on purpose — the *not knowing* creates dread, curiosity, or the joy of
figuring it out. The key distinction: you may hide the *rule*, but you should still expose
enough *feedback* that players can learn by experiment. Hidden answer, visible
consequences. Fully hiding both rule and feedback produces frustration, not mystery.

## Implementation (kept separate from the principle)
Give systems clear feedback (see FEEL-0004): show what changed and, where appropriate,
why. Prefer readable representations (numbers, states, tells) for systems meant to be
mastered. When intentionally hiding a rule, compensate with rich observable consequences
so the player can still test hypotheses. Playtest for superstition — if players
consistently misattribute cause and effect, legibility is too low.

## Disagreement
Transparency vs. mystery is a real design axis. Systems-mastery designs (strategy,
fighting games, sims) push toward maximum legibility; discovery- and atmosphere-driven
designs deliberately obscure. The reconciliation most designers accept: match legibility
to whether the system is meant to be *mastered* (expose it) or *discovered/feared* (hide
the rule, keep the feedback).

## Notes
