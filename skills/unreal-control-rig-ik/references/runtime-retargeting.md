# Runtime retargeting

## Retarget Pose From Mesh

1. On the target Animation Blueprint, place `Retarget Pose From Mesh` as the base pose source.
2. Assign the IK Retargeter asset.
3. Either enable **Use Attached Parent** and parent the target Skeletal Mesh Component to the
   source Skeletal Mesh Component, or explicitly provide the source mesh component.
4. If the source mesh is hidden, set its Visibility Based Anim Tick Option to
   **Always Tick Pose and Refresh Bones**.
5. Apply target-only overlays or IK after the retargeted base pose.
6. Use Retarget Profiles when gameplay must override supported operation settings at runtime.

## Runtime failure gates

- Frozen/default target -> wrong source component, wrong parent, missing retargeter, or source not ticking.
- One-frame lag -> component tick prerequisite/order; ensure source updates before target.
- Preview works, runtime breaks -> component hierarchy, LOD, visibility tick, graph order, runtime profile.
- Correct close-up, wrong at distance -> LOD strips required bones or disables the solver/node.
- Different clients disagree -> replicate gameplay state/targets, not final cosmetic bone transforms,
  unless the design explicitly requires pose replication.

Runtime retargeting saves exported assets and supports dynamic source characters, but it adds
per-frame work. Profile the target platform and prefer exported sequences when runtime flexibility
does not justify the cost.
