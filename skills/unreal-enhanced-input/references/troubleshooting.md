# Troubleshooting

## Action never fires

- Confirm the correct Mapping Context is applied to the correct Local Player.
- Inspect context priority/collisions with `showdebug enhancedinput`.
- Confirm value type matches mapping and callback extraction.
- Inspect modifier output and trigger state/threshold.
- Confirm action is bound after possession/input component setup.

## Action fires every frame instead of once

- Raw actuation with no one-shot trigger can Trigger each tick.
- Use Pressed or another deliberate one-shot trigger, or bind the correct event.
- Do not patch with a gameplay bool before understanding trigger semantics.

## Hold never completes or tap fires unexpectedly

- Inspect Hold/Tap threshold, actuation threshold, explicit/implicit/blocker composition.
- Handle Completed and Canceled separately.
- Test focus loss and mapping rebuild while held.
- Ensure two actions sharing the key have intentional chord/blocker/priority behavior.

## Input becomes stuck after opening UI

- Confirm UI input routing/focus and gameplay context lifecycle.
- Handle flushed input and Canceled/Completed cleanup.
- Clear gameplay held state when context/pawn changes.
- In UE 5.8, check custom stateful modifier/trigger reinstancing implementation.

## Context added but wrong action wins

- Inspect all active contexts and their priorities.
- Remove mutually exclusive context instead of relying only on priority.
- Check whether the same key maps to the same versus different actions.
- Revisit consume/chord behavior and UE 5.8 Common UI integration.

## Duplicate callback after respawn

- Bind actions once in the correct input-component lifecycle.
- Check repeated `BindAction` calls and stale Pawn/component references.
- Keep context management separate from Pawn callback binding.

## Rebinding appears in UI but does not work

- Confirm mapping context is registered with user settings.
- Confirm stable mapping name, slot, profile, and device data.
- Inspect `MapPlayerKey` failure-reason tags.
- Apply/rebuild as required and save the correct Local Player's settings.
- Query the active profile, not only the default asset mapping.

## Keyboard diagonal is too fast

- Inspect accumulated Axis2D magnitude after Negate/Swizzle.
- Clamp/normalize in the appropriate input/gameplay layer only if the design requires equal
  cardinal and diagonal magnitude.
- Preserve analog magnitude when normalizing digital input; one rule may not fit both devices.

## Buffered action fires in the wrong state

- Clear on context removal, pawn replacement, death, cancel, or expiry.
- Revalidate legality at consumption time.
- Consume exactly once and log request/consume timestamps.
- Decide whether direction/target is captured at press or at execution.
