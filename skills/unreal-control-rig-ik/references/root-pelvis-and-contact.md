# Root, pelvis, feet, and hand contact

## Root/pelvis order

1. Confirm the source sequence contains the motion you expect.
2. Confirm both retarget roots and actual skeleton root/pelvis hierarchy.
3. Establish pelvis transfer before adding root generation.
4. In Root Motion, choose either Copy From Source Root or Generate From Target Pelvis according
   to the source data. Do not combine two owners of translation.
5. Choose root height intentionally: copy source height or snap to ground.
6. Inspect Maintain Pelvis Offset, child updates, global offsets, and pelvis-yaw contribution.
7. Test export separately; preview root-lock overrides do not define exported behavior.

## Symptom mapping

- Whole character floats/sinks -> retarget pose ground, pelvis operation, root height, mesh scale.
- Pelvis stays while feet move -> retarget root, pelvis source/target, FK translation mode.
- Double translation -> root motion applied in both retarget/export and gameplay movement.
- Character rotates unexpectedly -> pelvis yaw/root rotation settings or incorrect root basis.
- Feet penetrate only on slopes -> runtime ground solution, not a retarget-pose correction.

## Contact correction

Use Speed Planting only after the base motion matches. It needs:

- target leg chains with IK goals and a functioning IK solver;
- source curves that identify foot-bone speed/contact, often generated with Animation Data
  Modifiers;
- thresholds tested across walk, run, start, stop, turn, and uneven ground.

For hands or weapon markers, first correct arm/hand chains and retarget pose. Use Pin Bones for
special bones such as a weapon IK marker that must follow a target hand, then apply small goal
offsets. Never compensate for a wrong chain map with a large per-animation hand offset.
