# World Partition and Landscape streaming

Use with [`../../unreal-world-partition/SKILL.md`](../../unreal-world-partition/SKILL.md). Landscape defines terrain topology; World Partition defines cell residency and streaming sources.

## Large-world setup

1. Choose Landscape topology and source tile convention before World Partition import.
2. Import tiled heightmaps with recorded `World Partition Grid Size`, `World Partition Region Size`, `Flip Y Axis`, XY scale, and Z scale.
3. Verify all Landscape Streaming Proxies, component boundaries, edit ownership, and source-control files.
4. Establish streaming sources/ranges from maximum traversal speed and target-device readiness.
5. Build and validate Landscape-related HLOD/distant content where applicable.
6. Rebuild navigation, PCG, foliage, RVT streaming low mips, and Nanite data after relevant Landscape changes.

Do not assume Landscape component, Landscape Streaming Proxy, World Partition cell, HLOD cell, PCG grid, and navigation tile are the same unit. Name each size explicitly.

## Editor workflow

- Load only the region required for an edit, but check seams with neighboring regions loaded.
- Keep broad import/re-tile operations reproducible and coordinated; they can touch many external actor/proxy files.
- Disable automatic expensive derived rebuilds while making broad edits only when a deliberate final-build step exists.
- Use location/region loading and source control to prevent invisible work on unloaded neighbors.

## Seam validation

At each tile/proxy boundary inspect:

- height continuity and normals;
- Target Layer/weightmap continuity;
- material/RVT and virtual-texture behavior;
- Landscape Spline and Water deformation;
- collision and physical surface;
- NavMesh connectivity;
- PCG/grass/foliage density and exclusion;
- Nanite proxy freshness and skirt behavior.

## Runtime acceptance

- fastest traversal cannot reach missing terrain collision;
- camera vistas do not expose unloaded holes or unacceptable LOD changes;
- returning across cells does not grow memory indefinitely;
- Runtime Data Layer transitions do not leave terrain-dependent content inconsistent;
- server and clients have compatible collision/navigation/world state;
- cooked target traces show streaming, material, and Landscape work inside budgets.

Route streaming-source, cell, Data Layer, HLOD, and commandlet diagnosis to `$unreal-world-partition`.
