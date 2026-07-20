# Runtime foot placement and focused IK

Use runtime foot placement when contacts depend on current world geometry. Retarget poses and
Speed Planting solve different problems: the former aligns skeletons, the latter preserves
source contact, while runtime foot placement adapts to live terrain.

## Procedure

1. Begin with a correct locomotion pose.
2. Trace from a stable foot reference toward the walkable surface using the same collision
   assumptions as character movement.
3. Reject invalid, distant, vertical, or non-walkable hits.
4. Convert hit position/normal into the exact component/bone space expected by the solver.
5. Solve feet, then derive pelvis compensation from the reachable leg with the limiting offset.
6. Clamp leg extension and pelvis displacement; define behavior when no ground is found.
7. Smooth target positions and normals over time without adding visible lag.
8. Apply after locomotion blending/inertialization and before any later presentation-only pass
   that intentionally depends on the solved pose.

## Failure patterns

- Feet snap -> unsmoothed target or discontinuous trace result.
- Knees invert -> missing preferred bend/pole direction or target crosses singularity.
- Legs stretch -> no reach clamp or pelvis compensation.
- Feet hover on stairs -> trace origin/distance or capsule-to-mesh offset mismatch.
- Correct on flat ground, wrong on moving platforms -> target stored in world space without
  platform-relative handling.
- Network jitter -> cosmetic client solve is consuming discontinuous replicated movement;
  smooth movement first and avoid replicating trace results unless gameplay requires them.

Validate flat ground, ramps, individual steps, stair runs, ledges, moving bases, sudden falls,
crouch, turns, and low animation LODs.
