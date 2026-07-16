---
id: GDC-L1-PERF-0003
title: Optimize the bottleneck — the critical few, not the trivial many
layer: L1
domain: PERF
subdomain: optimization-timing
type: objective
confidence: 4
status: canonical
tags:
  - performance
  - bottleneck
  - profiling
  - diminishing-returns
related:
  - GDC-L1-PERF-0001
  - GDC-L1-PERF-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-perf-profiling
  - S-knuth-premature
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Performance work has sharply diminishing returns off the critical path. Find the single
> biggest bottleneck, fix it, **re-profile**, and repeat. Time spent speeding up code that
> isn't the bottleneck buys nothing — the frame is only as fast as its slowest necessary
> part.

## Rationale
Runtime is dominated by a small fraction of the code — Knuth's "critical 3%" — so a game's
frame time is gated by whichever system takes longest, and shaving a function that isn't
that system changes the frame rate not at all [S-perf-profiling] [S-knuth-premature]. This
makes optimization a targeting problem: the payoff comes from attacking the *current* top
cost, not from broad, even effort across the codebase. And bottlenecks move — fix the top
one and a different system becomes the new ceiling — which is why optimization is a *loop*
(profile → fix the top cost → re-profile) rather than a single pass. Working the loop
concentrates every hour where it actually buys frame time.

## Applies when
Any optimization pass. The rule for *what* to optimize: whatever profiling currently shows
as the largest cost on the critical path.

## Does not apply / Exceptions
Death by a thousand cuts is real: sometimes there is no single fat bottleneck but many small
costs (lots of tiny per-frame allocations, thousands of trivial draw calls), and the fix is
a systemic pattern change rather than one hot function. Frame-time *spikes* (hitches) also
need different treatment than steady-state cost — a rare 40 ms stall hurts more than a
slightly higher average. And memory or load-time budgets are separate axes from frame time.

## Implementation (kept separate from the principle)
Profile (PERF-0001), fix the top cost, and immediately re-profile to find the new top cost —
don't optimize a list of pre-planned targets, follow the profiler. Watch for the
many-small-costs pattern (attack it structurally). Track spikes separately from averages.
Stop when the frame fits the budget (PERF-0004), not when the code is "as fast as possible."

## Disagreement
Little on "optimize the bottleneck"; the practical nuance is single-fat-bottleneck (attack
it directly) vs. many-small-costs (change the pattern) vs. spikes (hunt the stall) — different
shapes of performance problem needing different responses, all still guided by measurement.

## Notes
Follows directly from PERF-0001 (measure) and feeds PERF-0004 (budget defines "fast enough").
The critical-few framing echoes elegance and focus elsewhere in the corpus. Confidence 4.
