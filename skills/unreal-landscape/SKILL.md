---
name: unreal-landscape
description: Operational Unreal Engine 5.8 guidance for Landscape creation and import, valid component topology, scale, sculpting, non-destructive Edit Layers, Landscape Patches and Splines, materials, Target Layers, physical surfaces, grass and foliage, Runtime Virtual Texturing, World Partition integration, Nanite Landscapes, collision, performance, and debugging. Use when designing, building, automating, profiling, or repairing terrain and outdoor-world workflows.
---

# Unreal 5.8 Landscape

## Ownership boundary

This skill owns heightfield topology, sculpt/paint state, Landscape materials, terrain collision, and
Landscape-specific Splines/Patches. Route generic path math to
[`unreal-splines`](../unreal-splines/SKILL.md), procedural population to
[`unreal-pcg`](../unreal-pcg/SKILL.md), and cell/source/Data Layer/HLOD policy to
[`unreal-world-partition`](../unreal-world-partition/SKILL.md).

Route a terrain task to the smallest relevant reference. Tie terrain decisions to gameplay traversal, sightlines, collision, navigation, streaming, and target-device budgets.

## Select the terrain representation

- Use **Landscape** for large heightfield terrain that needs efficient LOD, painting, foliage, collision, and world streaming.
- Use **Static Meshes/Nanite meshes** for caves, overhangs, vertical cliffs, floating geometry, small hero formations, or topology a heightfield cannot represent.
- Combine them: Landscape supplies broad traversable ground; meshes supply silhouettes and non-heightfield forms.
- Use **Landscape Splines** when a road/path must deform or paint terrain. Use a normal Spline Component when deformation is not required.
- Use **Landscape Patches** for procedural, non-destructive height/weight edits baked into the final Landscape.
- Use **PCG**, Landscape Grass, Foliage Mode, or Procedural Foliage according to output lifetime and authoring needs; do not let several systems own the same vegetation population.

Read [selector-import-layout.md](references/selector-import-layout.md) before creating or importing a Landscape.

## Route by task

| Need | Load |
|---|---|
| Choose terrain system, import/export, establish scale | [selector-import-layout.md](references/selector-import-layout.md) |
| Choose components, sections, quads, dimensions, resolution | [components-dimensions-scale.md](references/components-dimensions-scale.md) |
| Sculpt non-destructively; use Edit Layers or Patches | [edit-layers-sculpting-patches.md](references/edit-layers-sculpting-patches.md) |
| Build materials, paint Target Layers, physical surfaces | [materials-painting.md](references/materials-painting.md) |
| Select Landscape Grass, foliage painting, procedural foliage, or PCG | [grass-foliage-pcg.md](references/grass-foliage-pcg.md) |
| Build roads, water deformation, decals, and terrain/object blends | [splines-water-rvt.md](references/splines-water-rvt.md) |
| Stream Landscape with World Partition | [world-partition-streaming.md](references/world-partition-streaming.md) |
| Tune Nanite, LOD, collision, rendering, and memory | [nanite-performance-collision.md](references/nanite-performance-collision.md) |
| Diagnose artifacts and run production test gates | [debugging-patterns.md](references/debugging-patterns.md) |
| Verify claims and maturity | [sources.md](references/sources.md) |

## Execute in this order

1. State playable bounds, elevation range, smallest required terrain feature, movement agents, target hardware, and streaming model.
2. Choose Landscape versus mesh ownership for each terrain form.
3. Choose valid heightmap dimensions, component/section topology, XY vertex spacing, and Z scale before detailed authoring.
4. Enable Edit Layers at creation and define a named layer stack: base import, broad sculpt, gameplay corrections, splines, patches, and paint as needed.
5. Prove graybox traversal, slopes, sightlines, landmarks, collision, and navigation before expensive material/foliage work.
6. Build a small material layer contract and matching Layer Info assets; validate physical surfaces.
7. Add roads/water and other procedural deformation on dedicated special layers.
8. Add vegetation with one clear owner per population and explicit collision/nav/HLOD requirements.
9. Configure World Partition, Nanite, RVT, LOD, and collision only from measured needs.
10. Rebuild derived data and test a cooked target build through representative and worst-case routes.

## Hard rules

- Landscape is a heightfield. Do not force caves, overhangs, or arbitrary topology into it.
- **Edit Layers** store non-destructive height/weight edits; material **Target Layers** store named paint weights. Never use the terms interchangeably.
- Component count and section count have CPU/draw-call cost. More resolution is not free terrain detail.
- Do not rescale a finished Landscape casually. Scale changes invalidate assumptions about slope, texture density, foliage, collision, navigation, water, and world coordinates.
- Nanite does not remove the non-Nanite Landscape data. UE 5.8 retains both for systems including RVT and water, increasing streaming and memory requirements.
- A stale Nanite representation is not a trustworthy editor preview. Rebuild/save before visual or performance conclusions.
- Do not paint gameplay-critical surface identity only into an unvalidated visual material. Confirm Layer Info and physical-material results through traces and movement/audio tests.
- Do not use dense Actor Foliage for decoration; it costs like ordinary actors.
- Never tune Landscape in the editor alone. Profile cooked target builds for rendering, collision, navigation, streaming, memory, and shader compilation.

## Answer contract

Return:

1. **Selected representation and assumptions**.
2. **Topology and scale** — dimensions, components, sections, XY/Z scale, elevation range.
3. **Ownership** — Edit Layers, Target Layers, splines/patches, vegetation system, streaming.
4. **Exact actions and parameter effects**.
5. **Performance, collision, navigation, and packaging consequences**.
6. **Failure checks and recovery**.
7. **Verification** — visible and measured pass criteria on target hardware.

Do not invent a universal Landscape size, material-layer count, or component layout. Derive them from world extent, required precision, content density, and measured budgets.
