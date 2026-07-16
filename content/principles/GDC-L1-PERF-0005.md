---
id: GDC-L1-PERF-0005
title: Respect data locality — memory layout often beats instruction cleverness
layer: L1
domain: PERF
subdomain: memory
type: contextual
confidence: 4
status: canonical
tags:
  - performance
  - data-locality
  - cache
  - data-oriented-design
  - memory
related:
  - GDC-L1-PERF-0001
  - GDC-L1-ARCH-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-nystrom-gpp
  - S-perf-profiling
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> On modern hardware, *how data is laid out in memory* frequently dominates performance
> more than *how clever the code is*. A cache miss costs hundreds of cycles while cache hits
> cost a few, so laying out hot data contiguously and touching it in order can beat
> micro-optimizing the instructions that touch it — often by multiples.

## Rationale
Processors have gotten dramatically faster while main-memory latency has barely improved, so
the gap between a cache hit (a few cycles) and a main-memory fetch (hundreds) now dwarfs the
cost of most arithmetic [S-nystrom-gpp]. Code that chases pointers through scattered objects
stalls the CPU waiting on memory, no matter how tight the logic; code that streams through
contiguous arrays keeps the cache fed and the pipeline busy. Measured differences between
cache-friendly (structure-of-arrays) and cache-hostile (array-of-structures) layouts run
around 5–7× for hot iteration [S-perf-profiling]. This is why performance-critical systems
that iterate over many entities every frame (particles, physics, AI, ECS) care intensely
about layout — and why the fix for a slow hot loop is often "reorganize the data," not
"rewrite the math."

## Applies when
Hot loops over many items every frame — particles, physics, large entity updates, rendering
data. The more items and the more often you iterate, the more layout dominates.

## Does not apply / Exceptions
Cold code, small collections, and rarely-run logic don't benefit from layout gymnastics —
data-oriented restructuring adds real complexity and shouldn't be applied where profiling
(PERF-0001) doesn't show a memory-bound hot loop. This is where the "don't optimize
prematurely" rule (PERF-0002) bites: reorganizing everything into SoA up front is
over-engineering. Restructure the hot paths measurement identifies, not the whole codebase.

## Implementation (kept separate from the principle)
For memory-bound hot loops, prefer contiguous storage and sequential access; group the fields you touch together (hot/cold splitting; structure-of-arrays for the fields you iterate). Pool and reuse rather than scatter-allocate. Verify with the profiler that a loop is memory-bound before restructuring it.

## Disagreement
Data-oriented design (organize by data and access patterns for the cache) sits in tension
with classical object-oriented modeling and encapsulation (organize by conceptual objects) —
and with a naive reading of "composition over inheritance" (ARCH-0002), where scattered
component objects can be cache-hostile. The reconciliation most teams reach: **ECS**
(entity-component-*system*) gets both — composition's flexibility *and* data-oriented layout —
and you apply DOD to the hot paths while keeping OOP clarity for the cold majority. It's a
where-and-when tradeoff, not a war.

## Notes
Governed by PERF-0001 (measure first) and PERF-0002 (don't do it prematurely). Confidence 4.
