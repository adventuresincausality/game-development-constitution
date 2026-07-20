---
name: unreal-rendering-performance
description: Diagnose, budget, scale, and optimize real-time rendering in Unreal Engine 5.8 after profiling identifies a render-thread or GPU bottleneck. Use for GPU Profiler results, draw calls, primitive and material cost, Nanite, Lumen, Lumen Lite, Virtual Shadow Maps, MegaLights, TSR, screen percentage, Dynamic Resolution, translucency, overdraw, culling, LOD/HLOD, GPU memory, Render Resource Viewer, Primitive Debugger, scalability groups, device profiles, or platform rendering tiers.
---

# Unreal 5.8 Rendering Performance

## Start from measured evidence

Use `unreal-insights-profiling` first when no trustworthy bound/pass/capture exists. Read
[`references/diagnostic-selector.md`](references/diagnostic-selector.md) and
[`references/budgets-and-baselines.md`](references/budgets-and-baselines.md).

1. Lock target hardware, renderer, resolution, quality tier, scene/camera, and frame budget.
2. Identify whether the cost is Render/RHI-thread submission, GPU pass time, GPU memory, or a hitch.
3. Name the largest measured pass/resource/submission category and its millisecond or byte cost.
4. Use the subsystem visualization/stats to locate causal content or settings.
5. Choose the least destructive lever that changes the measured cost: visibility, workload count,
   quality, resolution, representation, update frequency, or feature path.
6. Change one lever, capture the identical workload, and compare cost plus visual/gameplay impact.
7. Encode approved changes in scalability/device profiles and test every supported tier.

Load only what applies:

- [`references/resolution-tsr-and-dynamic-resolution.md`](references/resolution-tsr-and-dynamic-resolution.md)
- [`references/nanite-geometry.md`](references/nanite-geometry.md)
- [`references/lumen-and-reflections.md`](references/lumen-and-reflections.md)
- [`references/virtual-shadow-maps.md`](references/virtual-shadow-maps.md)
- [`references/megalights.md`](references/megalights.md)
- [`references/materials-translucency-and-overdraw.md`](references/materials-translucency-and-overdraw.md)
- [`references/submission-culling-and-lods.md`](references/submission-culling-and-lods.md)
- [`references/scalability-and-device-profiles.md`](references/scalability-and-device-profiles.md)
- [`references/gpu-memory-and-resources.md`](references/gpu-memory-and-resources.md)
- [`references/symptom-recipes.md`](references/symptom-recipes.md)

## Required answer format

Return:

1. **Target, renderer, budget, capture, and measured bound**.
2. **Dominant pass/submission/resource** with current cost.
3. **Diagnostic visualization or command** and expected evidence.
4. **Ranked changes**, each with mechanism, quality risk, platform scope, and predicted delta.
5. **Exact property/CVar/scalability/device-profile action** for the chosen experiment.
6. **A/B verification** at the same camera and settings.
7. **Tier and fallback behavior**, including unsupported/experimental paths.

## Hard rules

- Do not prescribe renderer CVars from symptoms alone; require a measured pass or bounded experiment.
- Do not compare GPU captures at different resolution, screen percentage, camera, or warm/cold state.
- Optimize milliseconds, not triangle/draw-call/instruction counts in isolation.
- Treat editor view modes and visualization overlays as diagnostic overhead; disable them for final timing.
- Preserve gameplay readability and fairness across tiers; scalability must not hide actionable content.
- Prefer scalability groups and device profiles over scattered runtime CVars.
- Treat Lumen Lite as Beta in UE 5.8 and Primitive Debugger/Nanite Foliage as Experimental.
- MegaLights is Production Ready in UE 5.8, but its quality still degrades as per-pixel light complexity
  exceeds its fixed sampling budget.
- Nanite does not make materials, masked overdraw, WPO, shadows, streaming, or storage free.
- Dynamic resolution mitigates GPU spikes; it does not repair a CPU/render-thread bottleneck.
- Preserve a supported fallback for target platforms that lack Nanite/Lumen/TSR/hardware ray tracing.

See [`references/sources.md`](references/sources.md) for the UE 5.8 primary-source trail.
