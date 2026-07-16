---
id: GDC-L1-ARCH-0004
title: Keep game logic decoupled from engine and platform specifics
layer: L1
domain: ARCH
subdomain: gameplay-architecture
type: contextual
confidence: 3
status: canonical
tags:
  - separation-of-concerns
  - portability
  - testability
  - engine-agnostic
related:
  - GDC-L1-ARCH-0001
  - GDC-L1-ARCH-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-gregory-game-engine-arch
  - S-nystrom-gpp
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Express game rules in terms of the game, not the engine. Isolate gameplay logic behind
> interfaces so it doesn't depend directly on rendering, input, platform, or engine
> internals. The more your rules are engine-agnostic, the more testable, portable, and
> durable they are.

## Rationale
Engine and platform details churn — APIs change, engines get upgraded, platforms come and go — while a game's core rules are comparatively stable [S-gregory-game-engine-arch]. Binding rules directly to engine specifics couples the durable to the volatile, so an engine change ripples into gameplay code, and the rules can't be unit-tested without spinning up the whole engine. A clean seam between "the game" and "the engine that runs it" contains that volatility: gameplay logic becomes testable in isolation and survives engine changes, and the engine-specific layer stays thin and replaceable.

## Applies when
Longer-lived projects, teams anticipating engine upgrades or ports, and any logic worth
unit-testing. The value grows with the project's lifespan and the cost of an engine change.

## Does not apply / Exceptions
This is the most contested ARCH principle, and honestly so. For a team fully committed to
one engine, *embracing* the engine's idioms (its component model, its ability system, its
data assets) is often more pragmatic than abstracting over them — over-abstraction to
preserve a portability you'll never use is wasted effort and can fight the engine.
Prototypes and jam games should just use the engine directly. Decouple where testability
or longevity genuinely pays; otherwise lean into the engine.

## Implementation (kept separate from the principle)
Keep core rules in engine-agnostic terms and push engine calls to a thin adapter layer.
Depend on interfaces, not concrete engine types, at the seam. Aim for gameplay logic you
can exercise in a test harness without the full runtime. But calibrate the effort to the
project — a fully committed single-engine game may draw the seam loosely.

## Disagreement
Engine-agnostic purity vs. engine-embrace is a live disagreement with no universal winner.
Purity buys testability and portability; embrace buys velocity and full use of the engine's
strengths. The deciding factors are project lifespan, port intentions, and how much of the
engine you're leaning on.

## Notes
