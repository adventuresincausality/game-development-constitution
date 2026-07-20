# Nanite, performance, LOD, and collision

## Nanite Landscape boundary

Nanite can improve Landscape rendering performance, especially with Virtual Shadow Maps. It does not add source terrain detail or inherently improve image quality; the source data is identical.

UE 5.8 keeps both representations at runtime:

- Nanite Landscape data for Nanite rendering;
- non-Nanite Landscape data for systems including RVT, water, and other Landscape functions.

Therefore Nanite adds streaming and memory data. Measure the total system rather than assuming “Nanite replaces Landscape LOD.”

## Workflow

1. Capture non-Nanite target performance and memory.
2. Enable `Nanite` on the Landscape.
3. Build Nanite data through the documented Landscape build/save path.
4. Confirm every proxy is up to date before comparing visuals or timing.
5. Inspect seams; enable Nanite Skirt and tune skirt depth only if needed.
6. If using Nanite tessellation/displacement, validate material settings, rebuilt data, shadows, collision mismatch, and scalability.
7. Compare GPU, CPU, memory, streaming, cook time, disk size, and edit iteration.

`Landscape.Nanite.LiveRebuildOnModification` is Experimental and live rebuild can significantly slow editing. Keep it off by default and perform controlled rebuilds. Epic's page also shows a differently ordered legacy spelling in prose; confirm the exact CVar through console help in the installed build before scripting it.

## Landscape performance levers

- component and section count;
- visible component count and LOD distribution;
- material shader/texture cost and layer permutations;
- grass/foliage instance count, WPO, shadows, overdraw, culling;
- RVT page generation/uploads and pool memory;
- Nanite/VSM/tessellation cost;
- collision mip and physics queries;
- streaming and derived-data readiness.

Profile the dominant cost; do not apply every lever at once.

## Collision mip

- `Collision Mip Level` controls complex/visibility collision detail.
- `Simple Collision Mip Level` controls simple/player collision detail.
- Higher mip values reduce geometry/memory but increase mismatch from rendered terrain.
- Epic notes that common cases keep Collision Mip at 0 and Simple Collision Mip at 1 or 2; validate against the actual movement/query requirements rather than adopting this blindly.
- Per-component overrides can reduce cost in inaccessible areas.

Render displacement/tessellation does not automatically redefine gameplay collision. Keep visible displacement within the acceptable collision error or provide another collision/gameplay solution.

## Target capture

Record:

- `stat unit`, `stat gpu`, Insights trace, GPU profile;
- visible components/sections and draw calls;
- Landscape/material/GPU time;
- texture, RVT, Nanite, and total memory;
- streaming hitches at fastest traversal;
- collision query behavior and navigation rebuild/pathing;
- cold cook/load and warm traversal.
