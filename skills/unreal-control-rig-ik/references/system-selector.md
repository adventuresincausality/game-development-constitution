# System selector

| Need | Primary system | Avoid when |
|---|---|---|
| Reuse animation on another skeleton | IK Rig + IK Retargeter | Skeletons are already compatible enough for Compatible Skeletons |
| Drive a target from a live source mesh | Retarget Pose From Mesh | Offline export is simpler and runtime flexibility is unnecessary |
| Correct whole-body reach/stance | Full Body IK | A single two-bone limb solve is sufficient |
| Runtime goal-driven limbs | IK Rig node / focused IK | The change is authored and should be baked |
| Animate controls in Sequencer | Control Rig | Only a small additive bone correction is needed |
| Quick per-bone additive repair | FK Control Rig | A reusable procedural rig is required |
| Preserve planted contacts during retarget | Speed Planting after base retarget | The real fault is chain, pose, pelvis, root, or speed mismatch |

Decision gates:

1. Is this transfer, procedural correction, or authoring?
2. Must it remain live at runtime?
3. Does it require one limb or a connected full-body response?
4. Does gameplay need to drive the goal, or can the result be baked?
5. Is the problem already visible before IK? If yes, fix that stage first.

Keep ownership explicit: gameplay produces targets; the animation graph consumes targets;
IK solves the pose. Do not move authoritative gameplay state into a rig graph.
