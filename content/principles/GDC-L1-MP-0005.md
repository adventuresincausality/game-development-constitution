---
id: GDC-L1-MP-0005
title: Design for the players who actually show up
layer: L1
domain: MP
subdomain: community
type: contextual
confidence: 3
status: canonical
tags:
  - multiplayer
  - community
  - population
  - resilience
  - griefers
related:
  - GDC-L1-MP-0001
  - GDC-L1-MP-0002
  - GDC-L1-SYS-0007
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-multiplayer-design
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Design multiplayer for the *real* population, not an idealized one: uneven skill and numbers,
> off-peak hours, disconnects, AFKers, griefers, and a community with its own culture. The game
> must stay good when the lobby isn't perfect — because it rarely will be.

## Rationale
Multiplayer designs quietly assume full, balanced, well-behaved lobbies, and then reality
delivers a 4v5 after a disconnect, a lopsided skill spread at 3am, a griefer, or a dwindling
off-hours population [S-multiplayer-design]. Systems that only work under ideal conditions fail
constantly in practice. Robust multiplayer plans for the imperfect case: backfill and surrender
options for abandoned matches, bots or scaling for thin populations, penalties and safeguards for
griefing and quitting (MP-0002), and graceful handling of disconnects. Players also form a
*community* with emergent norms and their own optimization pressure (SYS-0007) — anticipate that
they'll find the exploits and the antisocial edges, and design so the common, messy reality still
produces good games.

## Applies when
Any multiplayer game, especially those depending on healthy populations and fair lobbies —
competitive, session-based, and community-driven games.

## Does not apply / Exceptions
Games with guaranteed full, curated lobbies (private matches, esports, tightly-managed sessions)
face less of this. Very large, always-populated games have more slack. But even they hit off-peak
and adversarial conditions eventually. The principle scales with how much the game depends on
other players cooperating.

## Implementation (kept separate from the principle)
Plan for imperfect lobbies: backfill, surrender/forfeit, disconnect handling, bot or scaling
support for thin populations, and anti-griefing/quitting safeguards (MP-0002). Watch the real
community's behavior and norms, and design against the antisocial edges players will find
(SYS-0007). Test with realistic, adversarial, and under-populated conditions, not just ideal
ones.

## Disagreement
Robustness-for-the-real-population (resilient, but more systems to build) vs. design-for-the-happy
-path (simpler, but brittle in practice). Also how much to spend accommodating small/off-peak
populations vs. focusing on peak. The right investment tracks how central healthy lobbies are to
the experience.

## Notes
The resilience/community principle of MP; extends behavior design (MP-0002) and optimization
pressure (SYS-0007) to the messy reality of live populations. Confidence 3 — clearly wise, but
how much to invest is highly game- and population-dependent.
