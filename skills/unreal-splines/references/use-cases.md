# System selector and use cases

## Choose by output

| Desired output | Use | Avoid |
|---|---|---|
| Invisible path, rail, route, or transform field | Spline Component | Spline Mesh unless geometry must bend |
| Bent road strip, pipe, cable, hose, curb, or continuous fence rail | Spline Component + one Spline Mesh Component per segment | One Spline Mesh for the whole path |
| Rigid posts, lamps, trees, signs, or modular props | Spline Component + ISM/HISM or spawned actors | Deforming the props with Spline Mesh |
| Road/path that raises, lowers, or paints Landscape | Landscape Splines on a dedicated Spline Edit Layer | Blueprint spline as a terrain-deformation substitute |
| Procedural content on a line | PCG Draw Spline / spline data | Construction Script spawning thousands of actors |
| Procedural content inside a closed shape | PCG Draw Spline Surface | Treating an open path as an area |
| Camera motion | Spline Component for position; optional second spline/target for aim | Deriving look rotation from tangent when the camera must frame a subject |
| AI patrol | Spline Component as route data plus explicit direction/dwell state | Using spline motion as navigation around dynamic obstacles |

## Use-case decisions

### Roads and paths

- Use Landscape Splines when terrain conformity and terrain painting are primary.
- Use Spline Mesh Components when road geometry is authored as deformable modular
  segments independent of Landscape.
- Keep road width, shoulder width, falloff, material, mesh, collision, and segment
  length exposed as data.
- For PCG-authored roads in UE 5.8, treat PCG Editor Mode as experimental. The 5.8
  `Apply Spline to Component` node can write PCG spline data to an existing component.

### Cables, pipes, and hoses

- Use short-enough source meshes that bend without obvious shearing.
- Ensure source mesh length axis matches the Spline Mesh `Forward Axis`.
- Use tangent magnitude to control curvature; do not use point position alone.
- Disable collision unless gameplay needs it. Test dynamic collision cost separately.

### Fences

- Deform only continuous rails or walls.
- Place posts as rigid instances by distance.
- Compute the final interval from spline length so the last gap is not visibly short:
  `count = max(1, round(length / targetSpacing))`, then
  `actualSpacing = length / count`.

### Camera rails

- Store travel as distance, not normalized time, if speed is specified in cm/s.
- Use a Timeline/curve to remap time to distance for authored acceleration.
- Use spline tangent for forward-facing travel; use `Find Look At Rotation` toward a
  target for subject framing.
- Apply camera easing separately from spline geometry.

### Patrol paths

- Track `Distance`, `Direction` (`+1` or `-1`), `SpeedCmPerSec`, and dwell state.
- Closed loop: wrap distance by spline length.
- Ping-pong: clamp at ends, reverse direction, then apply dwell.
- Use NavMesh pathing between sampled spline goals if agents must avoid obstacles.

### Placement along a spline

- Uniform physical spacing: sample by distance.
- One object per control point: sample by point index.
- Orientation: use transform/rotation at distance; optionally preserve world up for
  props that must remain vertical.
- Random variation: seed it; separate along-path distance jitter from lateral offset.

## Construction versus runtime

| Need | Location |
|---|---|
| Designer drags points and sees generated geometry immediately | Construction Script |
| Path is fixed after level load | Construction Script or baked editor tool |
| Path changes during play | Runtime function called only when data changes |
| Object travels along fixed path | Tick, Timeline, or movement task; do not rebuild spline |
| Thousands of procedural placements | PCG or instancing; avoid individual actor construction |
