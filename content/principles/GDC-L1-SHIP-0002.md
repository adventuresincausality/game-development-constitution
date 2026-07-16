---
id: GDC-L1-SHIP-0002
title: For live games, launch is a beginning — plan post-launch from the start
layer: L1
domain: SHIP
subdomain: post-launch
type: contextual
confidence: 4
status: canonical
tags:
  - shipping
  - live-service
  - post-launch
  - planning
related:
  - GDC-L1-SHIP-0003
  - GDC-L1-ARCH-0006
  - GDC-L1-PROD-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> For live and ongoing games, launch is the *start* of the game's life, not the finish line. Plan
> for post-launch — updates, content, balance, events, support, and the systems that enable them —
> from the beginning. A game meant to live for years must be *built* to be maintained and extended,
> not just shipped once.

## Rationale
A live game spends most of its life *after* launch, and the decisions that determine whether that
life is sustainable are made *before* it: an architecture that supports live updates and
data-driven content (ARCH-0001/0006), the tooling to produce content at cadence (CONTENT-0001), the
telemetry to understand players (SHIP-0004), and the team and schedule to sustain it (PROD-0004)
all have to exist by launch [S-scope-production]. Teams that treat launch as the end and bolt on
live operations afterward struggle — the game wasn't built to be fed. Planning post-launch from the
start means designing for extension (the "build the seam" logic again), budgeting the ongoing team,
and sequencing content beyond day one. Even non-live games benefit from planning the inevitable
launch patches; for live games it's existential.

## Applies when
Any live-service, ongoing, or long-tail game — and to a lesser degree any game expecting
post-launch patches and support (i.e. almost all).

## Does not apply / Exceptions
A finite, premium, one-and-done game genuinely can treat launch as (nearly) the end — it still
plans launch patches (SHIP-0001), but not perpetual operations. Building heavy live-ops
infrastructure into a game that won't use it is over-engineering. The principle scales with how
"live" the game is meant to be — match the post-launch investment to the model (MON-0001).

## Implementation (kept separate from the principle)
Decide the live/finite model early (MON-0001) and build accordingly: architecture for live updates
and data-driven content (ARCH-0001/0006), pipelines to produce content at cadence (CONTENT-0001),
telemetry for post-launch understanding (SHIP-0004), and a staffed, budgeted post-launch plan
(PROD-0004). Sequence content beyond launch. Even for finite games, plan the day-one/first-weeks
patch support.

## Disagreement
Live-service/GaaS (ongoing revenue and evolving experience — but perpetual cost, commitment, and
the temptation toward extractive live monetization, MON-0003) vs. finite/premium (a complete,
authored experience that ends — but no ongoing revenue). A fundamental business-model and design
choice (MON-0001), not a quality question.

## Notes
The post-launch-planning principle of SHIP; depends on extensible architecture (ARCH-0001/0006),
content pipelines (CONTENT-0001), telemetry (SHIP-0004), and sustained planning (PROD-0004).
Confidence 4.
