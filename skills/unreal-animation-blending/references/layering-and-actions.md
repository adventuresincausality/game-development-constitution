# Layering and action patterns

## Run while firing

Asset setup:

1. Create firing Animation Montage.
2. Create/use an `UpperBody` Slot.
3. Put the Montage sequence on that Slot.

AnimGraph order:

1. Evaluate locomotion State Machine / Blend Space.
2. Save Cached Pose `Locomotion`.
3. Feed cached pose to the Slot as the base.
4. Feed original cached pose to Layered Blend per Bone Base Pose.
5. Feed Slot result to a Blend Pose.
6. Start branch filter at the intended spine bone or use an authored Blend Mask.
7. Output the layered result.
8. Apply final IK after blending unless the design requires regional IK first.

Verify pelvis ownership, shoulder seam, weapon alignment, aim offset order, and Montage
blend out while moving.

## Reload while moving

- Use a Montage Section for each authored phase only when gameplay may branch/interupt.
- Use Notifies/Notify States for magazine detach/attach, hand IK windows, and gameplay
  state changes.
- Use Branching Point only for frame-critical gameplay decisions; queued notifies are
  cheaper.
- Set Trigger Weight Threshold so barely weighted outgoing animation does not fire
  unwanted events.
- Define interruption behavior: retain old magazine, commit reload, or roll back.

## Full-body attack

- Use full-body Slot/Montage when attack owns the whole pose.
- Decide in-place versus root motion before graph work.
- Gate locomotion visually and mechanically from the same gameplay state.
- Use Sections for combo windows and branching.
- Put authoritative damage windows in gameplay logic driven by well-defined notify or
  ability events; test interruption and network authority.

## Additive recoil

1. Confirm recoil clip is authored as additive against the intended reference pose.
2. Evaluate base locomotion/aim pose.
3. Apply additive recoil with an alpha driven by gameplay/curve.
4. Apply before or after upper-body regional masking based on which bones should receive
   recoil.
5. Filter lower-body bones if required.
6. Verify repeated firing does not accumulate pose error.

## Hit reaction

Choose:

- additive directional reaction for small impulses that preserve current action;
- Layered Blend per Bone for regional override;
- Montage for authored full/partial-body reaction with timing and interruption;
- physics/ragdoll only when pose animation is no longer the correct model.

Drive direction from hit vector transformed into character local space. Ensure a high-
priority reaction does not silently cancel required gameplay Montages in the same Slot
Group.

## Multiple Slots

- Same Slot and Slot Group: later/active Montage overrides competing playback.
- Different body regions: use separate Slots and combine explicitly in AnimGraph.
- Keep sequence lengths aligned when multiple Slots in one Montage must stay synchronized.
- Document Slot ownership so abilities do not fight over unnamed defaults.

## Child Montages

Use Child Montages for weapon/character animation variants that retain parent Sections,
Notifies, and logic. Replace compatible animation segments; verify automatic play-rate
adjustment does not create implausible motion.
