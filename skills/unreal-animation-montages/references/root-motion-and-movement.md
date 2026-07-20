# Root motion and movement

## Contract

1. Verify the source asset has an animated root bone and Enable Root Motion is set.
2. Choose Root Motion Root Lock: reference pose, animation first frame, or zero, based on the asset.
3. In AnimBP Class Defaults choose the intended Root Motion Mode. For network-oriented montage root
   motion, use **Root Motion from Montages Only**.
4. Decide how Character Movement mode handles vertical displacement. Walking/Falling apply movement
   physics differently from Flying.
5. Test capsule/mesh alignment, collision, slopes, stairs, interruption, correction, and blend-out.

Root motion moves the collision-owning character through the movement system; do not separately add
the same displacement in gameplay code. Conversely, in-place actions need code-driven movement when
displacement matters.

## Section/cancel hazards

- Jumping into a Section can skip root displacement that the following frames assume occurred.
- Interrupting a lunge must leave capsule and mesh aligned and define remaining momentum.
- Scaling montage play rate changes displacement timing and gameplay windows.
- Child Montage replacements may preserve timeline length while changing actual root trajectory.
- Root Motion modes move AnimGraph work to the Game Thread; profile target characters.

For directional or target-aligned actions, use motion/rotation warping only after the source root,
target transform, sync points, and maximum allowed warp are explicit. Gameplay collision and target
validity remain authoritative.
