---
name: unreal-enhanced-input
description: Design, implement, remap, test, and debug player input with Unreal Engine 5.8 Enhanced Input. Use for Input Actions, Input Mapping Contexts, priorities, local-player ownership, trigger events, hold/tap/release/chord behavior, modifiers, dead zones, sensitivity, inversion, 2D movement, contextual controls, possession, split screen, player-mappable key settings, key profiles, conflict handling, saving, input buffering, coyote time, input injection, Common UI integration, or missing/duplicate input events.
---

# Unreal 5.8 Enhanced Input

## Ownership boundary

This skill owns action/context/trigger/modifier semantics and player-mappable key profiles. Route menu
layers, focus, and UI input routing to
[`unreal-umg-commonui`](../unreal-umg-commonui/SKILL.md). Use
[`unreal-save-load`](../unreal-save-load/SKILL.md) only when settings join a broader custom slot,
versioning, user, or cloud-persistence policy; do not duplicate key-profile authority in two systems.

## Build the input model

1. Define one `UInputAction` per player intent, not per physical key.
2. Choose its value type: Boolean, Axis1D, Axis2D, or Axis3D.
3. Group mappings by coherent situation in `UInputMappingContext` assets.
4. Add/remove contexts on the correct `UEnhancedInputLocalPlayerSubsystem` with documented
   priorities and mutual-exclusion rules.
5. Transform raw values with modifiers; decide activation timing with triggers.
6. Bind action trigger events through `UEnhancedInputComponent` or Blueprint action events.
7. Forward semantic intent to the possessed pawn, component, GAS, UI, or command layer.

Read [`references/architecture.md`](references/architecture.md) and
[`references/contexts-ownership.md`](references/contexts-ownership.md) first.

## Select event semantics deliberately

- `Started`: evaluation began.
- `Ongoing`: trigger conditions are partially satisfied.
- `Triggered`: all trigger conditions succeeded; may repeat depending on trigger.
- `Completed`: a triggered action returned to none.
- `Canceled`: evaluation ended before successful completion.

Read [`references/triggers-modifiers.md`](references/triggers-modifiers.md). Do not assume
`Triggered` means a one-shot press; without a one-shot trigger, actuation can trigger each tick.

## Separate detection from gameplay forgiveness

Enhanced Input detects and interprets input. A gameplay buffer stores a timestamped semantic
request until the gameplay state can accept it. Implement buffers and coyote time in the
gameplay action/movement layer, not as an invented built-in Enhanced Input feature. Read
[`references/buffering.md`](references/buffering.md).

## Rebinding

Use UE 5.8 `UEnhancedInputUserSettings`, Player Mappable Key Settings, mapping names, slots,
and key profiles. Register all relevant contexts with settings, map with `FMapPlayerKeyArgs`,
surface failure reasons/conflicts, apply, and save. Read
[`references/rebinding-settings.md`](references/rebinding-settings.md).

## Required answer format

Return:

1. **Input Actions** with value types.
2. **Mapping Contexts**, ownership, priorities, and add/remove lifecycle.
3. **Mappings, modifiers, triggers, and bound trigger events**.
4. **Intent routing** and gameplay-buffer ownership where applicable.
5. **Rebinding, conflict, profile, persistence, and accessibility behavior**.
6. **Device, focus, possession, split-screen, and packaged-build tests**.

Do not invent node names, default thresholds, context priorities, or save behavior.

## Hard rules

- Add contexts to the Local Player that owns the input, not to a global gameplay object.
- Do not leave mutually exclusive contexts active and hope priority hides every collision.
- Do not bind the same action repeatedly across possession/reinitialization.
- Do not put gameplay logic inside reusable modifiers or triggers when a semantic command will do.
- Do not identify saved mappings by localized display text; use stable mapping names and slots.
- Do not treat client input as authoritative gameplay state.
- Test context rebuilds while keys are held; UE 5.8 preserves trigger/modifier state more
  reliably, but custom classes must implement reinstancing behavior when stateful.

Use [`references/patterns.md`](references/patterns.md) for common controls and
[`references/troubleshooting.md`](references/troubleshooting.md) for missing, repeated, stuck,
or conflicting input. See [`references/sources.md`](references/sources.md) for the UE 5.8 trail.
