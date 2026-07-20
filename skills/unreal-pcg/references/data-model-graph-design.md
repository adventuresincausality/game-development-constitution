# Data model and graph design

## PCG data shapes

| Shape | Use |
|---|---|
| Volume | bounded 3D domain and boolean/spatial sampling |
| Surface | landscape/2D domain projected into the world |
| Line | Spline and Landscape Spline data |
| Point Data | explicit candidates with transform, bounds, density, steepness, color, seed |
| Polygon 2D | closed planar areas and polygon union/intersection/difference |
| Composite Data | lazy spatial union/intersection/difference before concretizing |
| Attribute Set | nonspatial typed metadata/parameters |

Keep spatial operations lazy as long as useful; convert/sample to explicit points only when a
downstream point operation or spawner requires it.

## Point contract

For every point stream, document:

- coordinate space and projection surface;
- bounds represented by each point;
- density meaning and expected range `[0,1]`;
- seed source and any `Mutate Seed` boundary;
- required metadata attributes, types, units, and defaults;
- whether transform scale is semantic size or spawn transform;
- which node owns rejection versus presentation.

Point seeds are derived in part from position for world-position consistency. Operations that
duplicate points can also duplicate random behavior; use `Mutate Seed` where independent random
branches are intentional.

## Graph layering

Use a readable staged graph:

```text
Input and bounds
  -> Sampling/projection
  -> Environmental attributes
  -> Hard filters and exclusion
  -> Density/weight shaping
  -> Selection attributes
  -> Transform variation
  -> Spawn/output
```

Name reroutes and comment the contract at each stage. Delete temporary attributes before expensive
copy/spawn operations when they are no longer needed.

## Attribute rules

- Prefer semantic names such as `SurfaceSlopeDegrees`, `BiomeId`, `Mesh`, `ClearanceCm`.
- Do not silently reuse one attribute with multiple units or meanings.
- Use graph parameters for tool-level inputs; use point attributes for per-point decisions.
- Use `Match And Set Attributes` for data-driven selection tables and weighted choices.
- Use typed complex attributes in UE 5.8 only when downstream nodes/cook targets support them.

## Determinism test

Generate, record point count/transforms/selected assets, cleanup, and regenerate with unchanged
inputs. Results must match wherever deterministic output is required. Then change only the exposed
seed and confirm intended variation changes without violating hard constraints.
