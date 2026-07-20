# Debugging and production patterns

## Diagnose by layer

1. **Topology** — valid resolution, correct component/section layout, XY/Z scale.
2. **Authoring stack** — correct active Edit Layer, order, visibility, lock, alpha, procedural owner.
3. **Paint contract** — material name, Target Layer, Layer Info type, filled base, weight data.
4. **Derived systems** — splines, water, patches, grass/foliage/PCG, RVT, Nanite, collision, navigation.
5. **Streaming** — loaded region/proxy and dependent World Partition cells.
6. **Runtime budget** — shader, texture, virtual texture, geometry, shadow, instances, collision, I/O.

## Useful visualizers and stats

- Landscape component/section/quads color overlays in Manage mode.
- `View > Landscape Visualizers > Layer Debug` for Target Layer channels.
- `Lit > Visualizers > Layer Contribution` for Edit Layer contribution.
- Player Collision and Visibility Collision view modes.
- `Landscape.RenderNanite 0/1` for controlled representation comparison.
- `stat virtualtexturing` and `stat virtualtexturememory` for RVT.
- `stat unit`, `stat gpu`, GPU Visualizer, Unreal Insights.

Restore diagnostic overrides before final captures.

## Common symptom table

| Symptom | First checks |
|---|---|
| Tile seam/crack | source edge pixels, Flip Y, XY/Z scale, proxy freshness, Nanite skirt |
| Sculpt has no effect | wrong/locked Edit Layer, special procedural layer, alpha zero |
| Spline does not deform | missing Spline Edit Layer, raise/lower disabled, width/falloff |
| Black/default material | compile error, missing Layer Info/base fill, sampler/permutation |
| Wrong physical surface | dominant Target Layer and Physical Material assignment |
| Grass missing | Grass Output name/mask, Grass Type, Landscape-only boundary, culling |
| RVT contribution missing | bounds, asset type, writer list, pass type, sort priority |
| Nanite visual stale | dirty proxy; build/save/cook Nanite representation |
| Character floats/clips | collision mip or render displacement differs from collision |
| NavMesh breaks after sculpt | navigation not rebuilt or slope/step/agent settings no longer fit |

## Production test matrix

| Axis | Minimum cases |
|---|---|
| Edit | sculpt/paint, undo, save/reload, layer reorder/hide, neighbor regions |
| Import | clean reimport, tiled seams, round-trip export, source checksum |
| Traversal | walk, fastest vehicle, steepest intended slope, world edge, teleport |
| Rendering | near/far, Nanite on/off, scalability tiers, target feature levels |
| Surface | each Target Layer, transitions, traces, footsteps/effects |
| Derived | splines, water, patches, vegetation, PCG, nav, HLOD/RVT |
| Build | PIE, standalone, cooked Development, shipping-equivalent target |
| Soak | repeated cross-world route and memory stabilization |

## Acceptance

- terrain supports intended mental map, sightlines, and traversal;
- no missing collision or navigation at streaming/edit boundaries;
- layer ownership is understandable and reversible;
- derived data can be rebuilt reproducibly;
- target frame, memory, disk, cook, and streaming budgets are met;
- no final conclusion relies on stale Nanite/RVT/nav/PCG data.
