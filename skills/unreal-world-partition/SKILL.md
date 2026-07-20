---
name: unreal-world-partition
description: Operational Unreal Engine 5.8 guidance for World Partition, streaming sources, runtime grids, Data Layers, HLODs, One File Per Actor, Level Instances, conversion, commandlets, PCG integration, and large-world diagnosis. Use when designing, implementing, profiling, or debugging a partitioned or streamed world.
---

# Unreal 5.8 World Partition

## Ownership boundary

This skill owns cells, streaming sources, runtime grids, Data Layers, HLODs, and OFPA/Level Instance
world organization. Route procedural generation/output rules to
[`unreal-pcg`](../unreal-pcg/SKILL.md), Landscape topology and deformation to
[`unreal-landscape`](../unreal-landscape/SKILL.md), and cooked-asset residency/readiness to
[`unreal-memory-streaming`](../unreal-memory-streaming/SKILL.md).

Route a world-streaming task to the smallest relevant reference. Give concrete editor actions, runtime ownership, failure checks, and a verification pass.

## Select the world system first

- Use **World Partition with Enable Streaming on** for a continuous world whose content should load by distance or explicit streaming sources.
- Use **World Partition with Enable Streaming off** when its authoring model, OFPA, Data Layers, or future scale helps but the whole map can remain resident.
- Use **Level Instances** for reusable points of interest or gameplay assemblies. Prefer OFPA-backed Embedded Mode in a World Partition main world.
- Use **Packed Level Blueprints** for repeated, dense, static-mesh arrangements. Do not assume arbitrary components survive packing.
- Keep traditional sublevel streaming for a legacy architecture or a discrete-level requirement that World Partition does not satisfy. Do not introduce World Composition in a new UE5 project.

Read [system-selector-conversion.md](references/system-selector-conversion.md) before converting an existing world.

## Route by task

| Need | Load |
|---|---|
| Choose a world model or convert a map | [system-selector-conversion.md](references/system-selector-conversion.md) |
| Decide spatial loading, references, ownership, persistence | [actor-placement-references.md](references/actor-placement-references.md) |
| Configure sources, cells, grids, loading ranges, teleport gates | [streaming-sources-grids.md](references/streaming-sources-grids.md) |
| Author editor/runtime variants and state changes | [data-layers.md](references/data-layers.md) |
| Build and tune distant proxy content | [hlod.md](references/hlod.md) |
| Reuse assemblies; understand OFPA and runtime modes | [level-instances-ofpa.md](references/level-instances-ofpa.md) |
| Combine PCG with partitioning, Data Layers, and HLOD | [pcg-integration.md](references/pcg-integration.md) |
| Diagnose loading or run unattended builds | [debugging-builders.md](references/debugging-builders.md) |
| Apply common production patterns and test gates | [patterns-testing.md](references/patterns-testing.md) |
| Verify claims or feature maturity | [sources.md](references/sources.md) |

## Execute in this order

1. State map scale, movement speed, multiplayer model, target hardware, memory budget, and whether transitions may block.
2. Classify each important actor by spatial lifetime, Data Layer state, runtime grid, HLOD policy, and hard-reference dependencies.
3. Begin with the default 2D Runtime Spatial Hash and one runtime grid. Add grids only after a measured requirement.
4. Place or configure streaming sources. Derive initial loading range from maximum travel speed, worst observed load latency, and safety margin.
5. Gate teleports and scripted arrivals on streaming completion; provide timeout and failure behavior.
6. Add Runtime Data Layers for stateful world variants, not as a substitute for every gameplay visibility flag.
7. Assign and build HLODs for distant, non-interactive representation. Compare proxies against sources at expected viewing distance.
8. Validate editor, PIE, standalone, multiplayer, cooked build, target device, and worst-case traversal.
9. Profile cell timing, memory, I/O, hitches, draw calls, and HLOD transitions before increasing ranges or making content always loaded.

## Hard rules

- Do not solve streaming bugs by marking broad content **not spatially loaded**; that converts uncertainty into permanent memory and initialization cost.
- Treat hard actor references as streaming dependencies. Referenced actors can be bundled and loaded together even when spatially separated.
- The server owns Runtime Data Layer state in networked play. Replicate gameplay state; do not let clients independently decide authoritative world state.
- A distant HLOD is representation, not authoritative collision, interaction, AI, or gameplay state.
- Do not teleport into an unloaded destination. Enable a destination streaming source, wait for completion, then move the player and retire the temporary source.
- Do not tune only in the editor. Cooked packaging, I/O, memory pressure, and target hardware decide whether streaming works.
- OFPA reduces file contention; it does not remove logical merge conflicts or make cross-actor ownership safe.
- Keep Experimental features explicitly labeled. UE 5.8 World Partition Insights and Fast Geometry-related workflows require deliberate opt-in and validation.

## Answer contract

Return:

1. **Selected system and assumptions** — including why it fits.
2. **Actor/content classification** — spatial loading, Data Layer, grid, HLOD, references.
3. **Exact actions** — editor paths, properties, components, APIs, commands, or commandlets.
4. **Parameter effects** — what changing cell size, loading range, priority, or state actually does.
5. **Network and packaging consequences**.
6. **Failure checks and recovery**.
7. **Verification** — observable pass criteria on a cooked target build.

Do not invent universal cell sizes, loading radii, or memory budgets. Supply a starting hypothesis only when its assumptions are stated, then require measurement.
