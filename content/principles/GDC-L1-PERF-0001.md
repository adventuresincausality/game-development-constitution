---
id: GDC-L1-PERF-0001
title: Measure, don't guess — profile before you optimize
layer: L1
domain: PERF
subdomain: profiling-first
type: objective
confidence: 5
status: canonical
tags:
  - performance
  - profiling
  - measure-dont-guess
  - optimization
related:
  - GDC-L1-PLAYTEST-0005
  - GDC-L1-PERF-0003
  - GDC-L1-ARCH-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-perf-profiling
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Never optimize on intuition. **Profile first** to find where time actually goes, then
> optimize only what the profiler proves is slow. Your guess about the bottleneck is
> usually wrong — measurement is the only reliable guide to where speed lives.

## Rationale
Human intuition about performance is notoriously unreliable: the code that *looks*
expensive often isn't, and the real cost hides somewhere unglamorous (a redundant load, a
cache-hostile loop, an accidental per-frame allocation). Optimizing without measuring means
you spend effort on code that wasn't the problem, complicate the codebase, and frequently
don't move the frame rate at all [S-perf-profiling]. A profiler replaces the guess with a
fact — *this* function, *this* system, *this* draw call is eating the frame — so every hour
of optimization is aimed at something that matters. "Measure, don't guess" is the same
discipline as judging design by observed play (DESIGN-0001) and player behavior
(PLAYTEST-0001), applied to performance.

## Applies when
Any performance work, on any platform. The instant the question is "why is this slow?" the
answer is "profile it," not "I bet it's X."

## Does not apply / Exceptions
Obvious, cheap wins with known costs (don't load a 4K texture for a 32px icon) don't need a
profiling session — some things are known-slow by construction. And profiling itself must be
representative: profile on target hardware under real workloads, since a debug build on a
dev machine can mislead. But even "obvious" fixes should be *verified* by measurement, since
the obvious cause is often not the actual one.

## Implementation (kept separate from the principle)
Profile on representative hardware and content, not a beefy dev box on an empty scene.
Identify the single biggest cost, fix it, then *re-profile* (the bottleneck moves — see
PERF-0003). Distinguish CPU-bound from GPU-bound before choosing a fix (PERF-0004). Keep
before/after measurements so you can prove a change helped rather than assuming it did.

## Disagreement
No serious dissent: profile-first is near-universal engineering practice. The only nuance is
how much "obvious" optimization to do without formal profiling — and even there, the safe
answer is to verify.

## Notes
The foundational PERF principle and the resolution of the `PERF-0001` forward-reference from
PLAYTEST-0005 (telemetry/measurement). Shares the "measure, don't guess" ethos that runs
through DESIGN-0001, PLAYTEST-0001/0005, and SYS-0002. Confidence 5.
