# Control Rig and Full Body IK

## Control Rig setup

1. Right-click a Skeletal Mesh -> Create -> Control Rig.
2. Keep controls in a clear control hierarchy adjacent to the imported skeleton.
3. Use **Forward Solve** for controls-to-bones runtime evaluation.
4. Use **Backwards Solve** when bones must drive controls for baking or round-tripping.
5. Use **Construction Event** for setup that depends on the rig hierarchy.
6. Compile after hierarchy, variable, or structural graph changes; auto-compile does not cover
   every change.

## Full Body IK

1. Enable the FullBodyIK plugin and restart if required.
2. Add the FBIK node to Forward Solve.
3. Choose a solver root, commonly pelvis/hips for a biped.
4. Add effectors only for endpoints that need targets.
5. Drive targets from controls or validated gameplay-space transforms.
6. Tune Position/Rotation Stiffness: 0 allows movement, 1 resists/locks it.
7. Enable and set Preferred Angles for stable knee/elbow bending.
8. Configure limits only where anatomy or design requires them.
9. Exclude irrelevant bones rather than making every bone fully stiff.

## Diagnostic order

- Confirm control/goal transform space.
- Confirm solver root and affected hierarchy.
- Move one effector with all others disabled.
- Check preferred bend direction before adding more stiffness.
- Add constraints one at a time.
- Test unreachable targets and singular straight-limb poses.

Modular Control Rig is Experimental in UE 5.8. Use it only with an explicit maturity decision.
