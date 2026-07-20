# Input, focus, and navigation

## Define per-screen policy

For each screen record:

- input mode: game only, UI only, or game and UI;
- mouse cursor/capture/lock policy;
- Enhanced Input Mapping Contexts applied while active;
- initial desired-focus widget;
- Back behavior;
- whether gameplay input continues beneath the screen.

Do not let individual buttons decide global input mode.

## Focus lifecycle

1. Populate or restore screen data.
2. Ensure the target widget is visible, enabled, focusable, and in the active hierarchy.
3. Return/set the desired focus target during activation.
4. When a focused entry disappears, move focus to a deterministic neighbor or parent control.
5. When a modal closes, restore focus to the action that opened it when still valid.

Avoid arbitrary delays as a focus fix. A delay can mask invalid lifecycle or asynchronous list
population. Focus after the target exists, using the activation/data-ready event.

## Navigation

- Build logical visual order so automatic cardinal navigation is predictable.
- Add explicit navigation rules only where spatial layout makes automatic choice ambiguous.
- Test keyboard Tab/arrow navigation and gamepad cardinal navigation separately.
- Keep focus visible with a non-color-only indicator.
- Prevent focus from entering hidden, disabled, decorative, or offscreen controls.
- For scroll/list screens, keep the selected entry scrolled into view.

## Unified CommonUI + Enhanced Input

- Use semantic UI Input Actions, not hard-coded keys.
- Mark generic actions so CommonUI handles routing without broadcasting unwanted global
  Enhanced Input events.
- Apply screen-specific Mapping Contexts on activation and remove them on deactivation.
- Keep gameplay and UI action namespaces clear; prioritize contexts intentionally.
- Route remapping/profile details to `$unreal-enhanced-input`.

## Split-screen check

Run with two local players. Each player must have an independent focus user, root UI, action
router/context state, and prompts. `GetPlayerController(0)` in reusable UI is a defect signal.

## Common failures

| Symptom | Check |
|---|---|
| Gamepad moves character behind menu | input mode/context priority and screen activation |
| Accept fires twice | duplicate action binding or both generic and specific action paths |
| Focus vanishes after list refresh | recycled entry was focus target; restore by item identity |
| Mouse works, gamepad does not | focusability, desired focus, viewport class, navigation |
| Back closes wrong screen | layer priority or competing local Back handlers |
