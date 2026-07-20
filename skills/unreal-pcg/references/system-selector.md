# PCG system selector

## Choose the generation mode

| Need | Mode | Cost/constraint |
|---|---|---|
| Small bounded authoring tool | Non-partitioned editor generation | simplest; one component domain |
| Large persistent generated area | Partitioned editor generation | grid cells integrate with streaming |
| Multiple detail scales | Hierarchical generation | shared large-grid work feeds smaller grids |
| Viewer/source-dependent transient content | Runtime generation | scheduler, memory, cleanup, and pop budget |

PCG generation modes are not visual-quality settings. Select them from domain size, update
frequency, output lifetime, and streaming requirements.

## Bake versus runtime

Prefer editor-generated/baked output when content needs:

- manual art review and source-control visibility;
- HLOD or static baked lighting;
- persistent instance data;
- collision, navigation, ray tracing, or distance-field participation;
- deterministic cook output without runtime generation stalls.

Use runtime generation when player position, runtime terrain/state, or effectively unbounded
content makes baking impractical. Runtime generation must define generation sources, radii,
cleanup radii, scheduling policy, memory/caching, and what happens when generation falls behind.

## Partitioned versus hierarchical

- Partitioned generation divides one component's domain into PCG grid cells.
- Hierarchical generation lets branches execute at different grid sizes through Grid Size nodes.
- Put broad, reusable calculations on larger grids and dense local detail on smaller grids.
- Data produced on a larger hierarchical grid is cached for smaller-grid execution.
- Choose cell/grid size from content size and cost, not one universal number.

## CPU versus GPU

Stay on CPU for small point counts, frequent CPU consumers, Actor spawning, unsupported nodes, or
when transfer overhead dominates. Evaluate GPU when long connected GPU-capable regions process
enough points to amortize upload/download and compute-graph setup.

PCG GPU Processing is Beta. GPU procedural instancing is a narrower Experimental output path with
major persistence and feature limitations. See `gpu-processing.md`.

## Related skills

- Route World Partition/Data Layer/HLOD ownership to `$unreal-world-partition`.
- Route spline construction and spline meshes to `$unreal-splines`.
- Route asset definitions/soft loading to the future `unreal-data-assets-tables` skill.
- Route final bottleneck work to `$unreal-insights-profiling` when available.
