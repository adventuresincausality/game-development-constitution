---
id: GDC-L1-TECH-0002
title: Budget the frame's visuals — art must fit the rendering cost
layer: L1
domain: TECH
subdomain: rendering-budget
type: contextual
confidence: 4
status: canonical
tags:
  - technical-art
  - rendering-budget
  - draw-calls
  - overdraw
  - optimization
related:
  - GDC-L1-PERF-0004
  - GDC-L1-TECH-0004
  - GDC-L1-TECH-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-realtime-rendering
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Rendering has a fixed per-frame budget, and visuals must fit it. Draw calls, overdraw, polygon
> and texture counts, shader complexity, and memory all cost time and space — so art is designed
> *to a budget*, not to whatever looks best in isolation. A gorgeous asset that blows the frame is
> a bug, not an achievement.

## Rationale
Every frame must finish within the frame-time budget (PERF-0004), and the GPU side of that budget
is spent by rendering cost — the number and expense of draw calls, how many pixels are shaded
(overdraw), shader instruction counts, texture memory bandwidth [S-realtime-rendering]. These
costs are driven largely by *art* decisions (mesh density, material complexity, transparency,
texture sizes), so visual quality is a budgeting problem: allocate the rendering budget across
what matters and hold assets to their share. Ignoring this produces the familiar failure — a
scene that looks stunning in a screenshot and runs at ten frames per second. Budgeting rendering
is the GPU-side, art-facing companion to frame budgeting (PERF-0004) and the reason optimization
techniques (TECH-0004) exist.

## Applies when
Any real-time-rendered game, on any platform — most acute on fixed/constrained hardware (console,
mobile, VR) where the budget is hard and known.

## Does not apply / Exceptions
Pre-rendered or non-real-time visuals (cinematics, offline renders) aren't frame-budget-bound.
Very simple or stylized games may have generous headroom. And the budget varies enormously by
target (a high-end PC vs. mobile), so "fits the budget" is relative to the platform, not absolute.

## Implementation (kept separate from the principle)
Set rendering sub-budgets (draw calls, triangles, texture memory, shader cost) for the target hardware and design art to them. Use optimization techniques — LODs, batching, atlasing, culling (TECH-0004) — to fit quality into the budget. Involve technical art early (TECH-0001) so budget informs look-dev.

## Disagreement
Little on the principle; the tension is where to *spend* the budget (fidelity vs. scene scale vs.
effects) and how much to sacrifice visuals for performance — a per-game, per-platform judgment
tied to the fidelity-vs-framerate choice (PERF-0004).

## Notes
The GPU/art side of frame budgeting (PERF-0004); the reason art-optimization (TECH-0004) exists,
owned via technical art (TECH-0001). Confidence 4.
