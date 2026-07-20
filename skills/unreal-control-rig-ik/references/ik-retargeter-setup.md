# IK Rig and Retargeter setup

## Build the minimum transfer

1. Create one IK Rig for the source Skeletal Mesh and one for the target.
2. In each IK Rig, set the Retarget Root. For a biped this is normally pelvis/hips, not the
   scene root, because it carries proportional body translation.
3. Create chains for matching semantic regions: root/pelvis as appropriate, spine, neck,
   head, each arm, each leg, and optional fingers or accessory chains.
4. Give every chain an exact start and end bone. A single-bone chain is valid.
5. Add IK Goals only to chains that need goal-based retarget operations or runtime solving.
6. Create an IK Retargeter: Content Browser -> Add -> Animation -> IK Rig -> IK Retargeter.
7. Assign source/target IK Rigs and preview meshes.
8. Verify chain mapping manually, even if Auto Map or Auto Create Retarget Chains succeeds.
9. Preview idle, locomotion, turns, crouch, jumps, extremes, and any root-motion clips.
10. Export only after the preview and output log are clean.

## Chain rules

- Map by function, not by coincidental name.
- Do not let a leg chain begin at the pelvis or end at an IK marker unless that is intentional.
- Separate fingers when independent finger motion matters; omit them when it does not.
- Include twist/helper bones only when their transfer is understood; otherwise let the target
  skeleton's deformation setup handle them.
- Use the Retarget Output Log for missing or incompatible chain warnings.

## Automation is a draft, not proof

Auto Retarget Chains uses name matching and common templates. Auto Align can substantially
accelerate setup. Both must be verified on the target skeleton, especially with unusual names,
extra roots, asymmetric rigs, nonhuman proportions, or different reference stances.
