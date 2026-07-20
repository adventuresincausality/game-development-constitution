---
name: unreal-animation-blending
description: Select, implement, tune, and debug character animation blending in Unreal Engine 5.8. Use for Animation Blueprints, Blend Spaces, state transitions, inertialization, sync groups and markers, layered blends per bone, additive animation, Aim Offsets, Montages and Slots, locomotion, upper-body actions, hit reactions, foot-phase problems, or animation popping.
---

# Unreal 5.8 Animation Blending

## Ownership boundary

This skill owns final AnimGraph composition, base locomotion, transitions, phase synchronization,
additives, and regional layering. Route bounded action sections/cancel windows to
[`unreal-animation-montages`](../unreal-animation-montages/SKILL.md), pose-search selection to
[`unreal-motion-matching`](../unreal-motion-matching/SKILL.md), and any defect already visible in an
IK Retargeter preview/export to [`unreal-control-rig-ik`](../unreal-control-rig-ik/SKILL.md).

## Select the mechanism before building the graph

Read [`references/method-selector.md`](references/method-selector.md).

- Continuous values → Blend Space.
- Discrete persistent modes → State Machine.
- Simple Boolean/enum/int choice → Blend Poses node.
- Simultaneous body regions → Layered Blend per Bone or Blend Mask.
- Relative motion layered over a base → additive animation / Aim Offset.
- Gameplay-triggered authored action → Montage + Slot.
- Cycles that must preserve phase → Sync Group + matching Sync Markers.
- Short natural transition with source evaluation no longer needed → Inertialization.

Do not solve every animation problem with more states or longer crossfades.

## Execute

1. Define gameplay state and animation variables outside the final pose graph.
2. Choose the smallest mechanism that matches the behavior.
3. Establish phase, root-motion, additive-space, and Slot assumptions.
4. Implement base locomotion before overlays.
5. Add transition logic and explicit blend behavior.
6. Validate notifies, root motion, sync markers, interruptions, and network behavior.
7. Profile graph evaluation and confirm thread-safe data access.

Read:

- [`references/locomotion.md`](references/locomotion.md) for Blend Space and phase setup.
- [`references/layering-and-actions.md`](references/layering-and-actions.md) for upper-body,
  additive, montage, and hit-reaction patterns.
- [`references/transitions-and-sync.md`](references/transitions-and-sync.md) for state
  transitions, inertialization, and markers.
- [`references/troubleshooting.md`](references/troubleshooting.md) for visible failures.

## Required answer format

Return:

1. **Chosen blend mechanism** and rejected alternatives.
2. **Required assets and assumptions**: Skeleton, additive type, root motion, markers.
3. **AnimGraph/state-machine node order**.
4. **Variables and how to calculate them**.
5. **Blend durations/curves as a tuning procedure**, not invented universal numbers.
6. **Notify, interruption, root-motion, and network consequences**.
7. **Debug and acceptance checks**.

## Hard rules

- Use Sync Markers for foot-phase alignment when length syncing is insufficient.
- Only markers common to every animation in a Sync Group participate.
- Keep inertialization blends short; UE guidance recommends under 0.4 seconds.
- Do not use inertialization for extremely different poses.
- Source animation evaluation and its future Notifies stop when inertialization begins.
- Treat Dead Blending as experimental in UE 5.8; do not make it a shipping dependency.
- Place inertialization after the nodes requesting it and generally before final IK.
- Use Layered Blend per Bone for regional overrides; use additive poses for deltas.
- Use Montages for event-driven actions, not the permanent locomotion state graph.
- Verify montage/root-motion authority and RPC behavior in networked games.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
