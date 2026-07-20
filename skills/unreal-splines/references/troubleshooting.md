# Troubleshooting

| Symptom | Likely cause | Action |
|---|---|---|
| Actor speeds up and slows down | Sampling by input key or normalized parameter | Advance and sample by distance along spline |
| Objects bunch on curves | Sampling control-point intervals rather than arc length | Use spline length and distance queries |
| Mesh is sideways | Wrong source-mesh length axis / `Forward Axis` | Identify source mesh longitudinal axis and match it |
| Mesh twists or flips | Inconsistent up vector, roll, or extreme tangent change | Set a stable up-vector convention; inspect point roll and tangents; add points at controlled bends |
| Visible kink at segment boundary | Tangents or segment scale do not match | Use spline-provided tangents at both ends; keep adjacent scale/roll continuous |
| Severe stretching | Segment is too long for source mesh or tangent magnitude is extreme | Increase segment count or author a longer/denser source mesh |
| Last fence gap is wrong | Fixed spacing without fitting total length | Recompute actual spacing from rounded interval count |
| Generated objects duplicate when editing | Construction Script is appending without cleanup | Destroy/clear generated components or instances before rebuilding |
| Editor becomes slow while dragging points | Heavy Construction Script, collision rebuild, or too many components | Debounce/bake generation; disable unneeded collision; use ISM/HISM or PCG |
| Runtime mutation does not update queries | Spline changed without final update | Batch mutations and call the spline update once |
| Collision does not match deformation | Collision disabled, stale, or expensive dynamic update | Confirm collision settings; rebuild only after geometry changes; test cooked behavior |
| Closed-loop seam pops | Missing last-to-first segment or discontinuous roll/tangent | Generate closing segment and align seam properties |
| Camera looks unstable | Tangent rotation is not the desired framing | Separate position rail from look target; smooth look rotation independently |
| Patrol agent hits obstacles | Spline is not obstacle-aware navigation | Sample spline goals and move via NavMesh/path following |
| Network clients disagree | Each client mutates path independently | Make spline/path state authoritative and replicate deterministic inputs or results |

## Verification checklist

- Draw/debug the spline and inspect point order.
- Print spline length and sampled distance.
- Test distance `0`, `length / 2`, and `length`.
- Test shortest and tightest segments.
- Test reverse and loop boundaries.
- Test editor reconstruction after moving, duplicating, and undoing the actor.
- Test collision in standalone and packaged builds.
- Profile component count, collision, Construction Script time, and runtime updates.
