---
name: unreal-memory-streaming
description: Budget, load, retain, stream, evict, precache, and diagnose runtime content in Unreal Engine 5.8. Use for unexpected asset residency, hard and soft reference chains, Asset Manager load lifetimes, async loading, Memory Insights, LLM, texture streaming pools and mip quality, Streaming Virtual Texturing, Nanite streaming, World Partition readiness, load-time hitches, shader or PSO compilation hitches, PSO precaching, bundled PSO caches, or memory/load regression testing.
---

# Unreal 5.8 Memory and Streaming

## Classify the failure before changing policy

Read [`references/system-selector.md`](references/system-selector.md) and
[`references/budgets-and-evidence.md`](references/budgets-and-evidence.md).

1. Define target device, memory pools, storage, build, scenario, cold/warm state, and readiness budget.
2. Classify the problem: dependency residency, retained allocation, streaming budget, IO/load latency,
   render-resource readiness, or shader/PSO compilation.
3. Capture the appropriate evidence: Reference Viewer/Size Map, Memory Insights/LLM, Asset Loading
   Insights, texture/VT/Nanite stats, Render Resource Viewer, or PSO validation.
4. Name the owner, load trigger, residency boundary, unload condition, and failure behavior.
5. Change one dependency edge, budget, lead time, representation, or precache policy.
6. Repeat the identical cold or warm traversal on target hardware and verify memory, quality, and hitch.

Use neighboring skills for their owned decisions:

- Asset schemas, Primary Asset rules, bundles, cook inclusion ->
  [`../unreal-data-assets-tables/SKILL.md`](../unreal-data-assets-tables/SKILL.md)
- World Partition cells, sources, loading range, teleports ->
  [`../unreal-world-partition/SKILL.md`](../unreal-world-partition/SKILL.md)
- Trace capture and Memory/Asset Loading Insights ->
  [`../unreal-insights-profiling/SKILL.md`](../unreal-insights-profiling/SKILL.md)
- GPU resource/pass budgets ->
  [`../unreal-rendering-performance/SKILL.md`](../unreal-rendering-performance/SKILL.md)

Load only what applies:

- [`references/reference-graphs-and-residency.md`](references/reference-graphs-and-residency.md)
- [`references/async-loading-and-lifetime.md`](references/async-loading-and-lifetime.md)
- [`references/texture-streaming.md`](references/texture-streaming.md)
- [`references/virtual-texturing.md`](references/virtual-texturing.md)
- [`references/geometry-and-world-readiness.md`](references/geometry-and-world-readiness.md)
- [`references/pso-and-shader-hitches.md`](references/pso-and-shader-hitches.md)
- [`references/memory-profiling.md`](references/memory-profiling.md)
- [`references/load-hitch-diagnosis.md`](references/load-hitch-diagnosis.md)
- [`references/regression-and-recipes.md`](references/regression-and-recipes.md)

## Required answer format

Return:

1. **Target budget and workload**, including cold/warm state.
2. **Failure class and evidence source**.
3. **Owner and dependency/residency graph**.
4. **Load, readiness, use, retention, and unload sequence**.
5. **Exact setting/API/policy change** and predicted memory/latency/quality effect.
6. **Cooked-build A/B proof** and failure-path test.
7. **Uncertainty**, profiler overhead, and adjacent skill routing.

## Hard rules

- Do not equate soft references with unloaded content; loaded assets require explicit lifetime ownership.
- Do not replace every hard edge with a soft edge; use hard references inside one intentional residency unit.
- Never synchronously load in latency-sensitive gameplay unless a measured, bounded exception is accepted.
- Separate CPU memory, GPU allocations, texture pools, VT pools, Nanite pools, and package size.
- Do not set `r.Streaming.PoolSize=0` or disable streaming as a shipping fix.
- Do not raise a pool before proving the target budget has headroom and the content demand is valid.
- Treat low mips, fallback meshes, collision, shaders/PSOs, registration, and gameplay initialization as
  part of readiness—not only UObject load completion.
- Memory allocation tracing must start with the process; a late trace cannot reconstruct old allocations.
- Validate PSO precache misses and wait for required startup compiles; a warm driver cache can hide failure.
- Prove behavior in a cooked target build. PIE, loose editor content, and a warm dev PC are insufficient.

See [`references/sources.md`](references/sources.md) for the UE 5.8 primary-source trail.
