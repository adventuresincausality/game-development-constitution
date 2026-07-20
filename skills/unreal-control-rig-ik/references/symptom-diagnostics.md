# Symptom-first diagnostics

## Isolation ladder

1. Play the source Animation Sequence on its intended source mesh.
2. Preview the IK Retargeter with all optional operations disabled.
3. Validate chain map and dedicated retarget pose.
4. Enable Pelvis, FK, Root, IK, pin/contact, and curve operations one at a time.
5. Export one sequence and play it directly on the target.
6. Test runtime `Retarget Pose From Mesh` without target overlays.
7. Re-enable the final AnimGraph from base pose outward.

The first failing rung owns the investigation.

| Symptom | Inspect first | Then |
|---|---|---|
| Target frozen or stale | source mesh tick, source component, attached parent | graph order, LOD |
| Limbs explode/contort | chain start/end/map | retarget pose axes, FK rotation mode |
| Knees/elbows bend backward | pose bend direction | preferred angles, goal space |
| Floating or sinking | ground alignment, pelvis op | root height, floor constraint |
| Foot sliding | source speed vs target motion | Speed Planting curves/goals |
| Hand/weapon offset | arm/hand chains and pose | Pin Bones, goal offsets |
| Root motion absent | source root data and root op | export/root-motion settings, movement owner |
| Root motion doubled | duplicate translation owner | AnimBP/movement integration |
| Preview correct, export wrong | export root-lock mode | curves/bake settings |
| Preview correct, runtime wrong | component parent/source/tick | profile, LOD, node order |
| Works near camera only | animation/solver LOD | required bone stripping |

Capture: source/target asset names, skeleton roots, retarget roots, chain map, retarget pose name,
operation stack order, runtime component hierarchy, node order, and the shortest failing clip.
Do not tune several offsets at once.
