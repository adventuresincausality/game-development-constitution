---
name: unreal-insights-profiling
description: Capture, analyze, compare, and automate performance evidence in Unreal Engine 5.8. Use for Unreal Insights, Timing Insights, Memory Insights, Networking Insights, Task Graph Insights, stat unit, stat commands, GPU Profiler, trace channels, CPU/GPU/thread bottlenecks, hitches, stalls, garbage collection, asset loading, memory growth, packet cost, custom trace instrumentation, performance budgets, or before/after regression captures.
---

# Unreal 5.8 Insights Profiling

## Establish the measurement contract

Read [`references/capture-contract.md`](references/capture-contract.md), then choose the narrowest
tool in [`references/tool-selector.md`](references/tool-selector.md).

1. State target platform, hardware class, build configuration, resolution, quality tier, map,
   camera path, player count, and workload.
2. State the frame, hitch, memory, load-time, or bandwidth budget in measurable units.
3. Reproduce without editor-only noise when possible; use a Development or Test packaged build.
4. Triage with `stat unit`/`stat unitgraph`; identify Game, Draw, RHI, GPU, memory, loading, or net.
5. Capture only the trace channels needed for the hypothesis and mark the measured interval.
6. Analyze inclusive/exclusive cost, thread dependencies, spikes, counts, and the critical path.
7. Change one causal variable, repeat the same workload, and compare milliseconds or bytes.
8. Preserve the baseline, candidate, capture metadata, and acceptance result.

Load only what applies:

- [`references/first-pass-triage.md`](references/first-pass-triage.md)
- [`references/timing-insights-cpu.md`](references/timing-insights-cpu.md)
- [`references/gpu-and-render-thread.md`](references/gpu-and-render-thread.md)
- [`references/hitches-loading-and-gc.md`](references/hitches-loading-and-gc.md)
- [`references/memory-insights.md`](references/memory-insights.md)
- [`references/network-task-and-ui.md`](references/network-task-and-ui.md)
- [`references/instrumentation-and-exports.md`](references/instrumentation-and-exports.md)
- [`references/regression-workflow.md`](references/regression-workflow.md)

## Required answer format

Return:

1. **Question and budget** being tested.
2. **Representative workload** and capture environment.
3. **Exact tool, channels, commands, and capture interval**.
4. **Observed bound and evidence**, separating sustained cost from spikes.
5. **Ranked causal suspects**, with inclusive/exclusive time or byte evidence.
6. **Single next experiment or fix** and its predicted measurable effect.
7. **Before/after comparison** and pass/fail result.
8. **Uncertainty**, capture overhead, and missing evidence.

## Hard rules

- Report frame time in milliseconds; FPS alone hides magnitude and variability.
- Do not profile a Debug build or treat PIE/editor numbers as shipping evidence.
- Do not infer CPU- versus GPU-bound from FPS; use thread/GPU timing and synchronization context.
- Do not treat GPU time as causal when it includes idle/wait time; inspect the frame and GPU event tree.
- Keep trace channels narrow. Tracing consumes CPU, memory, disk, and bandwidth and can perturb results.
- Capture spikes and steady state separately; averages can hide harmful hitches.
- Memory allocation tracing must start with the process; late connect cannot reconstruct earlier allocations.
- Use bookmarks for infrequent state changes, timers/counters for high-frequency events.
- Preserve same hardware, build, resolution, quality, workload, and capture length for A/B comparisons.
- Optimize the current top cost, re-profile, and stop when the declared budget is met.

See [`references/sources.md`](references/sources.md) for the UE 5.8 primary-source trail.
