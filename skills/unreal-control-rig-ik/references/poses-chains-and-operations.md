# Retarget poses, chains, and operation stack

## Pose alignment

1. Create a named target retarget pose; do not overwrite the baseline without a reason.
2. Compare source and target in reference-pose view.
3. Align large axes first: pelvis facing, spine, clavicles, upper/lower arms, hands, thighs,
   calves, feet, and toes.
4. Use Auto Align as a starting point. Direction, local/global rotation axes, and mesh methods
   solve different mismatches; inspect every limb afterward.
5. Snap the character to ground when vertical reference offsets differ.
6. Scrub Retarget Pose Blend between 0 and 1 to distinguish reference-pose error from the
   stored correction.

## Operation stack discipline

Operations evaluate top to bottom. Disable all nonessential corrections, establish a clean
FK transfer, then enable one operation at a time.

- **Retarget Pose**: first in the stack; selects stored source/target pose overrides.
- **Pelvis Motion**: transfers and constrains pelvis movement; tune floor/crotch offsets only
  after the retarget roots and poses are correct.
- **FK Chains**: maps rotations/translations by chain.
- **Root Motion**: copies source root or generates it from target pelvis.
- **Run IK Rig**: applies goal-based target solving.
- **Pin Bones / goal offsets / floor constraints**: late corrections for explicit contacts.
- **Remap Curves**: needed when semantic curves have different names.

## FK modes

- **Interpolated rotation**: default choice when chain lengths, proportions, or bone counts differ.
- **One to One**: corresponding bones transfer directly; use when counts and intent match.
- **One to One Reversed**: maps from chain ends; useful only when the end is the stable anchor.
- **None**: exclude the chain from FK rotation transfer.
- **Translation None**: preferred for most chains.
- **Globally Scaled / Absolute / Stretch modes**: use only for a specific diagnosed translation
  requirement; verify deformation and root behavior across clips.

Use Profile Ops to find an unexpectedly expensive retarget operation.
