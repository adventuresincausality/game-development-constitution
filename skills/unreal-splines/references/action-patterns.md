# Action patterns

## Constant-speed actor movement

Variables:

- `DistanceCm` — float
- `SpeedCmPerSec` — float
- `Direction` — `1.0` or `-1.0`
- `Loop` — bool
- `OrientToSpline` — bool

Per update:

1. `Length = Spline -> Get Spline Length`.
2. `DistanceCm += SpeedCmPerSec * Direction * DeltaSeconds`.
3. Loop: wrap into `[0, Length)`; non-loop: clamp into `[0, Length]`.
4. `Get Transform at Distance Along Spline` in World space.
5. If orientation is disabled, use only returned location.
6. Apply with `Set Actor Transform` or move the intended component.
7. Define end behavior explicitly: stop, loop, reverse, fire event, or dwell.

Do not drive constant speed with `Get Location at Spline Input Key` plus a linearly
increasing key. Parametric distance is not guaranteed to be uniform.

## Closest progress to an actor

1. Read actor world location.
2. Use `Get Distance Along Spline at Location` with World coordinate space.
3. Use the returned distance for progress, ordering, or a subsequent transform query.
4. If the spline crosses itself, retain previous progress and constrain how far the
   result may jump between updates.

## Rigid objects at uniform intervals

1. Get spline length.
2. Choose either:
   - fixed maximum spacing: `count = ceil(length / maxSpacing)`;
   - approximately target spacing with even end fit: `count = round(length / targetSpacing)`.
3. Compute `actualSpacing = length / max(1, count)`.
4. Iterate `0..count` when both endpoints need objects; otherwise `0..count-1`.
5. Query transform at `index * actualSpacing`.
6. Add an ISM/HISM instance for repeated meshes; spawn actors only when each instance
   needs independent behavior.
7. Apply lateral offset in the sampled transform's right-vector direction.

## Continuous deformed mesh

For each consecutive pair of spline points:

1. Create or reuse one Spline Mesh Component.
2. Query start/end locations and tangents in the spline owner's Local space.
3. Assign the static mesh and `Forward Axis`.
4. Call `Set Start and End` with start position/tangent and end position/tangent.
5. Apply start/end scale or roll only if required by the design.
6. Register the component when created at runtime.
7. Store generated components in an array. Destroy/clear them before regeneration.

For a closed loop, include the last-to-first segment.

## Editable Blueprint generator

Recommended layout:

- Actor root
- Spline Component
- Exposed mesh/material/spacing/width/collision variables
- `GeneratedComponents` array
- `Rebuild` function used by Construction Script and explicit runtime updates

`Rebuild`:

1. Destroy or clear previously generated components/instances.
2. Validate spline point count and assets.
3. Generate deterministically from current spline data.
4. Do not modify the designer's control points unless that is the tool's explicit job.

## Landscape road

1. Enter Landscape Manage mode and select Spline.
2. Create/join/split control points and segments.
3. Add a dedicated Spline Edit Layer before expecting heightmap deformation.
4. Set segment mesh, width, side falloff, layer name, and raise/lower behavior.
5. Snap points to Landscape where appropriate.
6. Inspect intersections, steep grades, tangents, and material paint transitions.

## PCG spline authoring in UE 5.8

- Enable and enter PCG Editor Mode.
- Use Draw Spline for roads, fences, and line placement.
- Use Draw Spline Surface for closed fields or bounded scattering.
- Use graph refresh-rate controls when interactive generation is expensive.
- Use `Apply Spline to Component` when PCG must update an existing Spline Component.
- Mark the workflow experimental in production documentation and provide a fallback.
