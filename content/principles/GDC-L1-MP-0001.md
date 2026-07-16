---
id: GDC-L1-MP-0001
title: Design the social experience, not just the netcode
layer: L1
domain: MP
subdomain: social-dynamics
type: contextual
confidence: 4
status: canonical
tags:
  - multiplayer
  - social
  - community
  - human-interaction
related:
  - GDC-L1-MP-0002
  - GDC-L1-DESIGN-0001
  - GDC-L1-MP-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-multiplayer-design
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> In multiplayer games the product is **human interaction**, not just synchronized state. Design
> the social experience — how players meet, cooperate, compete, communicate, and relate —
> deliberately. The other players are the content; the netcode only delivers them.

## Rationale
What players remember about multiplayer games is the *people* — the clutch teammate, the rival,
the friend made in a raid, the stranger who was kind or cruel — and those experiences are
produced by the game's social systems, not incidentally [S-multiplayer-design]. Treating
multiplayer as "single-player plus networking" misses that the design object is the *interaction*:
whether the game fosters cooperation or hostility, connection or isolation, is a design outcome
(DESIGN-0001, the experience produced). Matchmaking, communication tools, team structures,
incentives, and social features all shape what kind of human experience the game creates. The
netcode (MP-0004) is necessary infrastructure, but the social design is the actual game.

## Applies when
Any multiplayer game — cooperative, competitive, social, or massively-multiplayer. The more
central other players are to the experience, the more social design dominates.

## Does not apply / Exceptions
Primarily single-player games with thin multiplayer (a leaderboard, an async ghost) have little
social experience to design. And some multiplayer is deliberately anonymous or minimal-contact
(a background-population feel) — a valid choice, but still a *social* design decision (how much
contact), not the absence of one.

## Implementation (kept separate from the principle)
Decide what social experience you want (cooperation? rivalry? community? fleeting encounters?)
and build the systems that produce it: matchmaking (MP-0003), communication affordances and
limits (MP-0002), team and role structures, and incentives that reward the interactions you want.
Design against the toxic dynamics your systems could produce (MP-0002). Treat "how does it feel to
play *with people*" as the core question.

## Disagreement
Rich social design (deep interaction, community, relationships — but heavier design and moderation
cost) vs. minimal/anonymous multiplayer (lower friction and moderation burden, but thinner human
experience). The right amount depends on the game; the point is that it's a *design* choice, made
on purpose.

## Notes
The framing principle of the MP domain; an application of DESIGN-0001 to human interaction, and the
context for behavior design (MP-0002) and matchmaking (MP-0003). Confidence 4.
