---
id: GDC-L1-PERF-0004
title: Budget the frame — decide what each system may spend
layer: L1
domain: PERF
subdomain: frame-budget
type: contextual
confidence: 4
status: canonical
tags:
  - performance
  - frame-budget
  - cpu-gpu-bound
  - platform-constraints
related:
  - GDC-L1-PERF-0001
  - GDC-L1-PERF-0003
  - GDC-L1-FEEL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-perf-profiling
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A target frame rate is a **fixed time budget** — 60 fps means every frame must finish in
> about 16.6 ms. Treat that budget like money: allocate it across systems and hold each to
> its share. And know whether you're **CPU-bound or GPU-bound**, because the two have
> completely different fixes.

## Rationale
Frame rate isn't a vague "make it fast" goal; it's a hard deadline the game must hit every
frame or it stutters. Framing it as a budget makes the tradeoffs explicit — if rendering
takes 10 ms, AI, physics, gameplay, and audio must share the remaining ~6 ms — and turns
"is this affordable?" into a concrete question [S-perf-profiling]. The CPU/GPU distinction is
equally practical: the frame is bound by whichever finishes last, and the fixes diverge
sharply. CPU-bound → cut draw calls, batch/instance, reduce algorithmic work, pool objects;
GPU-bound → simplify shaders, add LODs, cull aggressively, scale resolution. Optimizing the
wrong side wastes effort (speeding up a GPU that's already waiting on the CPU changes
nothing). A quick diagnostic: halve the resolution — a big FPS jump means GPU-bound, little
change means CPU-bound.

## Applies when
Any real-time game with a frame-rate target — which is nearly all of them — and especially on
fixed hardware (console, mobile) where the budget is hard and known.

## Does not apply / Exceptions
Non-real-time or turn-based experiences have looser frame constraints. Targets vary by game
and platform (30 vs 60 vs 120+ fps; VR demands far stricter, per-eye budgets). Variable-rate
and frame-generation techniques complicate the simple "16.6 ms" model. And frame budget is
only one axis — memory and load-time budgets matter too, on their own terms.

## Implementation (kept separate from the principle)
Set a frame-time target and sub-budgets per system; profile against them (PERF-0001) and
treat an over-budget system as the bottleneck (PERF-0003). Determine CPU- vs GPU-bound early
(the resolution test) and aim fixes at the bound side. Budget to the *target* hardware, not
the dev machine. Remember that responsiveness (FEEL-0002) also depends on frame time —
performance is a feel issue, not just a technical one.

## Disagreement
Little on the budget concept itself; debate is about *what target* to choose (30 vs 60 vs
high-refresh, and the fidelity-vs-framerate tradeoff), which is a design/platform decision
rather than an engineering one.

## Notes
Turns PERF-0001/0003 into a concrete goal (fit the budget), and links performance to feel
(FEEL-0002 — latency and frame time are the same coin). Confidence 4.
