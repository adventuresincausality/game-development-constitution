---
name: unreal-pcg
description: Design, implement, optimize, automate, and debug Procedural Content Generation workflows in Unreal Engine 5.8. Use for PCG Graphs, points, density, metadata attributes, spatial data, samplers, filters, exclusion zones, Static Mesh Spawner, splines, graph parameters, subgraphs, editor tools, manual overrides, deterministic seeds, partitioned or hierarchical generation, runtime generation, PCG with World Partition/Data Layers/HLOD, GPU execution, procedural GPU instancing, PCG Builder commandlets, profiling, caching, validation, or PCG-based vegetation, roads, fences, buildings, biomes, and world population.
---

# Unreal 5.8 PCG

## Ownership boundary

This skill owns procedural sampling, graph data, generation, cleanup, and generated-output ownership.
Route source-path mechanics to [`unreal-splines`](../unreal-splines/SKILL.md), source-terrain
deformation/paint to [`unreal-landscape`](../unreal-landscape/SKILL.md), and World Partition cells,
streaming sources, Data Layers, and HLODs to
[`unreal-world-partition`](../unreal-world-partition/SKILL.md).

## Select generation ownership

- Use **editor generation** for authored world content that must persist, cook, build HLODs,
  support collision/navigation, or be manually reviewed before shipping.
- Use **non-partitioned generation** for bounded tools and small generation domains.
- Use **partitioned generation** when a large domain must split into streamable cells.
- Use **hierarchical generation** when large-scale shared work and small-scale detail require
  different grid sizes.
- Use **runtime generation** only when content genuinely depends on runtime sources/state and
  its generation, cleanup, memory, and visual-pop costs fit the target budget.
- Use GPU execution only after a representative CPU/GPU trace proves enough parallel work to
  amortize transfers and dispatch preparation.

Read [`references/system-selector.md`](references/system-selector.md) before choosing.

## Design the data contract first

1. Identify the spatial source: volume, surface, spline/line, points, actor data, or polygon.
2. Declare each metadata attribute's name, type, units, producer, consumer, and default.
3. Define stable seeds and which operations intentionally mutate them.
4. Separate selection data from spawn/presentation data.
5. Define exclusion/clearance rules before adding variation.
6. Choose output ownership: instances, Actors, data assets, or downstream graph data.
7. Decide what is authoritative, persisted, streamed, rebuilt, or disposable.

Read [`references/data-model-graph-design.md`](references/data-model-graph-design.md).

## Build in dependency order

1. Confirm the PCG plugin and any required interop plugins are enabled.
2. Create the smallest graph: input -> sample -> debug/inspect -> output.
3. Establish bounds, projection, point density, and deterministic seed behavior.
4. Filter invalid slopes, heights, surfaces, tags, and exclusion volumes.
5. Add transforms and mesh/actor selection through explicit attributes.
6. Spawn only after point data is correct.
7. Expose instance parameters and extract reusable subgraphs/templates.
8. Choose partition/hierarchy/runtime grids from content scale and streaming ownership.
9. Integrate Data Layers/HLOD and batch builders for persistent large-world output.
10. Profile node cost, scheduling, instance count, memory, CPU/GPU transfers, and visual pops.

Use [`references/sampling-spawning-patterns.md`](references/sampling-spawning-patterns.md),
[`references/parameters-tools-overrides.md`](references/parameters-tools-overrides.md), and
[`references/world-partition-integration.md`](references/world-partition-integration.md).

## Respect UE 5.8 maturity boundaries

- PCG Editor Mode is **Experimental**.
- UE 5.8's non-destructive manual editing/Data Override system is **Experimental**.
- PCG GPU Processing is **Beta**.
- GPU Procedural Instancing in the GPU Static Mesh Spawner path is **Experimental** and lacks
  persisted instances, collision, navigation, ray tracing, distance-field lighting, HLOD, and
  static baked-lighting support.
- PCG Biome Core/Sample remains **Experimental**; treat it as an example architecture.

Read [`references/gpu-processing.md`](references/gpu-processing.md).

## Required answer format

Return:

1. **Generation-mode and output-ownership choice**.
2. **Spatial/attribute/seed contract**.
3. **Ordered graph procedure** with exact node categories/names and parameter effects.
4. **Partition, hierarchy, runtime, Data Layer, and HLOD design** where applicable.
5. **Maturity and platform constraints** for editor/manual/GPU features.
6. **Debug views, validation cases, profiling captures, and regeneration test**.

Do not invent node names, defaults, supported GPU features, determinism, or performance wins.

## Hard rules

- Inspect points and attributes before spawning content.
- Keep graph parameters typed, named, documented, and instance-overridable only when intentional.
- Never rely on uncontrolled randomness; preserve a reproducible seed path.
- Do not use runtime PCG for content that can be baked without losing the required behavior.
- Do not alternate CPU/GPU nodes repeatedly; transfers can erase GPU gains.
- Do not use Experimental GPU instances when collision, nav, ray tracing, HLOD, or persistence is
  required.
- Never assume generated gameplay Actors replicate or become authoritative automatically.
- Preserve artist-authored/manual overrides through the supported override system; do not bake
  accidental edits into opaque graph logic.
- Cleanup, regenerate, cook, and test from a clean state before declaring a graph reliable.
- Profile on target hardware and at shipping content density.

Read [`references/runtime-scheduling.md`](references/runtime-scheduling.md),
[`references/debugging-validation.md`](references/debugging-validation.md), and
[`references/use-cases.md`](references/use-cases.md). See
[`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
