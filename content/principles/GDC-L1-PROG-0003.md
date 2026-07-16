---
id: GDC-L1-PROG-0003
title: Reward the behavior you want — legibly and proportionately
layer: L1
domain: PROG
subdomain: reward-schedules
type: contextual
confidence: 4
status: canonical
tags:
  - progression
  - rewards
  - incentives
  - legibility
  - balance
related:
  - GDC-L1-SYS-0007
  - GDC-L1-DESIGN-0006
  - GDC-L1-PROG-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schell-artofgamedesign
  - S-soren-johnson-optimize
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Rewards teach. Players learn to do whatever the game rewards, so reward the behavior you
> actually want to see. Make each reward **legible** (the player understands what earned
> it) and **proportionate** (greater effort or skill earns greater payoff). Misaligned
> rewards train the fun out of the game.

## Rationale
A reward is a signal that says "do more of that." If the most-rewarded action is boring,
safe, or degenerate, players will gravitate to it and then blame the game for the tedium
(the optimization pressure of SYS-0007). So the reward structure must point at the
experience you want: reward bold play if you want bold play, exploration if you want
exploration, mastery if you want mastery. Legibility matters because a reward the player
can't attribute to an action can't reinforce that action — it reads as randomness (compare
DESIGN-0006, legible consequences). Proportionality matters because rewards that don't
scale with effort either trivialize achievement or feel unfair.

## Applies when
Any system that grants progress, loot, currency, unlocks, or score — i.e. most
progression and economy design.

## Does not apply / Exceptions
Deliberate randomness has a place (varicrity and surprise; see PROG-0004), so "legible"
means the player understands the *rules of the reward*, not that every drop is
deterministic. And not every action needs a reward — over-rewarding trivial actions
creates noise that drowns the signals that matter (compare FEEL-0004 on feedback). Some
cosmetic or expressive rewards are intentionally disproportionate to effort and that's
fine.

## Implementation (kept separate from the principle)
Audit what your game actually rewards versus what you want it to encourage, and realign the
gaps. Make the earning rule visible or discoverable. Scale payoff to effort/skill/risk so
the exciting path is also the rewarding path (this is the incentive lever behind SYS-0007).
Watch for accidental incentives — a reward attached to a boring-but-optimal action is a bug.

## Disagreement
How *tightly* to couple reward to desired behavior is debated: tight coupling steers
players cleanly but can feel manipulative or grindy; loose coupling preserves freedom but
lets degenerate strategies flourish. Balances differ by genre and by how much the game
trusts player-driven goals.

## Notes
The constructive counterpart to SYS-0007 (players optimize the fun out): SYS-0007 warns of
the failure, this says how to steer incentives so the fun path stays rewarding. Leads into
PROG-0004 (intrinsic vs. extrinsic). Confidence 4.
