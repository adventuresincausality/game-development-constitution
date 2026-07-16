---
id: GDC-L1-SHIP-0003
title: Run live ops as a service — sustain content, balance, and communication
layer: L1
domain: SHIP
subdomain: live-ops
type: contextual
confidence: 3
status: canonical
tags:
  - shipping
  - live-ops
  - content-cadence
  - balance
  - community
related:
  - GDC-L1-SHIP-0002
  - GDC-L1-SHIP-0004
  - GDC-L1-BAL-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A live game is a *service*: keeping it healthy takes a sustained cadence of content, ongoing
> balance, events, and honest communication with the community. Players stay for a game that keeps
> giving them reasons to return and visibly cares; they leave a game that stalls or goes silent.

## Rationale
Live games retain players through a rhythm of fresh reasons to play — new content, seasonal events,
balance updates that keep the meta alive (BAL), responsive fixes — and through a relationship with
the community maintained by communication [S-scope-production]. A live game that ships and then goes
quiet decays: the content gets exhausted, the balance staleness or exploits accumulate (BAL-0002,
BAL-0006), and players drift to games that are still evolving. Running live ops well means treating
the post-launch game as an ongoing production with its own cadence, informed by what players
actually do (telemetry and feedback, SHIP-0004). It's demanding — a real, sustained team cost — but
for a live game it's not optional; the service *is* the product after launch.

## Applies when
Live-service, seasonal, and ongoing multiplayer games — anything designed to be played and updated
for a long time.

## Does not apply / Exceptions
Finite/premium games don't run live ops (SHIP-0002) — they ship, patch, and are done, and forcing
live-ops cadence onto them wastes effort. Live ops also has a dark side to avoid: cadence and events
driven by *extraction* (FOMO, manufactured urgency) rather than genuine value cross into dark
patterns (MON-0003). Healthy live ops gives players real reasons to return, not manufactured
compulsion. Small live games run lighter cadences scaled to their team.

## Implementation (kept separate from the principle)
Plan an achievable, sustainable content/event cadence (don't over-promise — a burnt-out live team
serves no one, PROD-0005). Keep balance fresh and exploit-free (BAL-0002/0006), informed by
telemetry and feedback (SHIP-0004, BAL-0005). Communicate honestly and regularly with the community.
Ensure cadence delivers genuine value, not manufactured urgency (MON-0003). Staff and budget it as
ongoing production (SHIP-0002).

## Disagreement
Heavy live-ops cadence (retention, evolving game, revenue — but high sustained cost and burnout/
extraction risk) vs. lighter-touch or finite (lower ongoing cost, but decay without updates). And
value-driven vs. extraction-driven live ops (MON-0003). The right cadence scales with the model and
team; the ethics line is real reasons-to-return over manufactured compulsion.

## Notes
The live-operations principle of SHIP; depends on post-launch planning (SHIP-0002), telemetry-driven
iteration (SHIP-0004, BAL-0005), and honest (non-extractive, MON-0003) engagement. Confidence 3 —
live-ops practice is model-dependent and fast-evolving.
