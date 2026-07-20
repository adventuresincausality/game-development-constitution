# Landscape Splines, water, and RVT

## Landscape Spline workflow

Use when a road, path, riverbed, or embankment must deform and optionally paint the Landscape.

1. Create a dedicated **Spline Edit Layer**.
2. Author control points and segments in Landscape Manage mode.
3. Set width, side falloff, end falloff, tangent/rotation, and segment direction.
4. Enable `Raise Terrain` and/or `Lower Terrain` only where the segment should deform height.
5. Assign `Layer Name` when the spline should paint a Target Layer.
6. Assign spline meshes with consistent forward axis, collision, LOD/Nanite, and material policy.
7. Inspect intersections, sharp curvature, component boundaries, landscape seams, and navigation.

Landscape Splines do not affect height until a Spline Edit Layer exists. Route general spline motion or spline mesh implementation to `$unreal-splines`.

## Water integration boundary

The Water plugin supplies spline-driven oceans, lakes, and rivers integrated with Landscape. Establish before authoring:

- water body type and spline ownership;
- Landscape deformation/Edit Layer ownership;
- water surface height and terrain datum;
- shore/riverbank material transition;
- collision, swimming/boat physics, nav, and gameplay volumes;
- World Partition loading and distant representation.

Do not let a Water Body, Landscape Spline, manual sculpt, and Patch all deform the same bank without a documented stack order. Verify the terrain with each layer isolated.

## RVT selector

Use Runtime Virtual Texturing when it materially helps:

- cache expensive Landscape shading;
- blend static meshes/spline roads into terrain;
- add decal-like static surface contributions;
- provide a common terrain/object material-data surface.

RVT is a GPU-generated cache, not durable gameplay data. Writers are expected to be static; skeletal, movable, or animated components are poor writers.

## RVT workflow

1. Enable Virtual Texture support and restart.
2. Create an RVT Asset with a material type and memory/resolution plan.
3. Make the Landscape material write through `RuntimeVirtualTextureOutput` and sample/fallback intentionally.
4. Place an RVT Volume and set bounds from the Landscape/required writers.
5. Add the RVT asset to writer components and choose Main Pass behavior.
6. Use world-space normals for consistent blending.
7. Define sort priority when multiple alpha writers overlap; equal-priority order is undefined.
8. Validate a fallback path for feature levels without RVT when the content must remain visible.

## RVT performance/debug

```text
stat virtualtexturing
stat virtualtexturememory
```

- Larger/more detailed RVTs consume more pool memory and uploads.
- YCoCg base-color encoding reduces banding but uses about 25% more memory and adds decode cost.
- A writer rendered only to RVT may still have collision; disable it when not needed.
- Diagnose missing writers by checking volume bounds, asset/material type match, Render to Virtual Textures, Main Pass setting, and sort priority.
