---
id: GDC-L1-PERF-0002
title: Don't optimize prematurely — implement simply first
layer: L1
domain: PERF
subdomain: optimization-timing
type: contextual
confidence: 4
status: canonical
tags:
  - performance
  - premature-optimization
  - simplicity
  - iteration
related:
  - GDC-L1-PERF-0001
  - GDC-L1-DESIGN-0007
  - GDC-L1-ARCH-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-knuth-premature
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Write clear, correct, simple code first; optimize later, and only where measurement
> demands it. Premature optimization wastes effort on code that will change, obscures the
> design, and usually targets the wrong thing — "premature optimization is the root of all
> evil." Correctness and clarity come before speed.

## Rationale
Early in development the game is in flux — systems get rebuilt, content multiplies, the
performance profile shifts drastically — so optimizations made before the design settles are
often rendered irrelevant or actively harmful by later changes [S-knuth-premature].
Optimizing early also costs twice: once to write the complex fast version, and again to
understand and maintain it, all while the simple version would have been fine (only a small
fraction of code — Knuth's "critical 3%" — ever meaningfully affects runtime). Clear code is
also easier to *correctly* optimize later, once profiling (PERF-0001) shows where it's
actually needed. Simplicity first keeps the code malleable during the iteration that makes
the game good (PROTO/ARCH-0005).

## Applies when
Most feature and gameplay code during active development, before the design and content have
stabilized enough for the performance profile to be meaningful.

## Does not apply / Exceptions
Two important limits. First, *architectural* decisions that are expensive to reverse — core
data layout, threading model, entity architecture — must consider performance up front,
because you can't "profile it later" your way out of a fundamentally wrong foundation
(this is the counter-tension, and it's real). Second, avoid *premature pessimization*:
deliberately writing gratuitously wasteful code "to optimize later" is its own mistake —
don't optimize early, but don't be needlessly slow either. Known hot paths and shipping
platform limits also warrant earlier attention.

## Implementation (kept separate from the principle)
Default to the simplest correct implementation. Reserve optimization for what the profiler
flags (PERF-0001) on the critical path (PERF-0003). *Do* think about performance for
hard-to-change architecture (data layout, PERF-0005; state/serialization, ARCH-0006) early.
Otherwise, keep code clear and change it when measurement says to.

## Disagreement
The genuine tension: "premature optimization is evil" (defer, measure, keep it simple) vs.
"architecture is destiny" (some performance-shaping decisions are effectively permanent and
must be made early). The reconciliation most engineers accept: defer *local* optimizations
(algorithms, micro-tuning) until measured, but make *structural* performance decisions
consciously up front. Judge which kind you're facing.

## Notes
Pairs with PERF-0001 (measure) and PERF-0003 (bottleneck); its "architecture early" exception
connects to ARCH-0006 (serialization/state) and PERF-0005 (data layout). Allies with
elegance/simplicity (DESIGN-0007). Confidence 4.
