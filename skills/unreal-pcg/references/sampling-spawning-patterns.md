# Sampling, filtering, and spawning

## Surface scatter procedure

1. Obtain actor/landscape/surface data within explicit component bounds.
2. Use Surface Sampler or the appropriate sampler to produce candidate points.
3. Project/re-project after transforms that move points off the target surface.
4. Compute slope, height, surface type/tag, density, and clearance attributes.
5. Apply hard filters before random thinning.
6. Subtract roads, structures, water, paths, and gameplay-clearance shapes with Difference or
   point filters.
7. Use density/weights for natural distribution and mesh choice.
8. Transform points within bounded rotation/scale ranges.
9. Inspect points and bounds before Static Mesh Spawner/Spawn Actor.

## Exclusion and spacing

- Use spatial Difference for clear exclusion shapes.
- Use Distance to create a gradient near another point set; filter/remap the result.
- Use Self Pruning or neighborhood logic for overlap/spacing, choosing bounds and pruning order
  intentionally.
- Account for final mesh bounds, not only pivot distance.
- Keep critical traversal and gameplay sightlines as hard constraints, never probability alone.

## Mesh selection

- Drive mesh/material/scale selection from explicit attributes or weighted selector data.
- Use Data Tables/Attribute Sets plus `Match And Set Attributes` for editable catalogs.
- Keep asset references soft/async where the generation and loading model requires it.
- Prefer instancing for repeated static meshes; use Actors only when Actor behavior is required.

## Spline pattern

1. Get Spline Data from the intended actor/component.
2. Sample by distance, subdivision, or control-point semantics appropriate to the asset.
3. Write tangent/orientation/width/side attributes.
4. Offset or project candidates.
5. Exclude intersections and invalid surface regions.
6. Spawn fence posts, roadside objects, or downstream spline/mesh data.

Use Shape Grammar when a repeatable module grammar materially simplifies fences/buildings; do not
force grammar onto free-form scatter.

## Spawn-output selector

| Output | Use |
|---|---|
| ISM/HISM/static mesh spawner | repeated static visual content |
| Spawn Actor | behavior, identity, components, or independent lifecycle required |
| Output node data | downstream PCG component/subgraph consumes points/attributes |
| PCG Data Asset | reusable baked data exchange |

Do not spawn thousands of Actors for decoration. Do not use GPU procedural instances for outputs
that need collision, nav, HLOD, persistence, ray tracing, or distance fields.
