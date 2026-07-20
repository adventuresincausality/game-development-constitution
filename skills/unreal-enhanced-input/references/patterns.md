# Enhanced Input patterns

## Camera-relative 2D movement

- `IA_Move`: Axis2D.
- Keyboard mappings use Negate/Swizzle; gamepad stick maps directly with a dead zone.
- Bind `Triggered` for continuous movement values and handle zero/end only if receiver needs it.
- Convert input axes using controller/camera yaw basis, then call `AddMovementInput` for the
  Character.
- Do not multiply `AddMovementInput` scale by delta time; Character Movement consumes input and
  performs time integration.

## Look

- `IA_Look`: Axis2D.
- Separate mouse and gamepad mappings/modifiers when sensitivity units/acceleration differ.
- Apply inversion/sensitivity in modifiers or a centralized settings layer.
- Test time-dilation and frame-rate behavior; mouse delta and stick rate may require different
  treatment.

## Jump with forgiveness

- `IA_Jump`: Boolean + Pressed/appropriate one-shot semantics.
- Press records jump request; release calls Stop Jumping for variable height.
- Gameplay movement layer owns buffer and coyote windows.
- Clear on pawn/context changes and consume once.

## Sprint

- Hold: Started/Triggered sets request; Completed/Canceled clears it.
- Toggle: Pressed toggles local intent; gameplay/server can reject based on stamina/state.
- A context should not contain competing hold and toggle implementations simultaneously.

## Tap versus hold on one key

Prefer separate semantic actions sharing a key with Tap and Hold triggers, or one action whose
trigger-state flow is deliberately interpreted. Test quick release, exact threshold, long hold,
focus loss, mapping rebuild, and simultaneous chord conditions. Ensure tap does not fire after a
successful hold unless designed.

## Vehicle transition

1. Keep common pause/chat actions in base context.
2. Remove on-foot context.
3. Add vehicle context at documented priority.
4. Route actions to current controlled vehicle.
5. On exit/unpossess, reverse and clear held/buffered state.

## GAS ability input

- Input Action produces semantic input identifier/tag.
- Player input binding layer finds granted ability specs or sends a Gameplay Event.
- GAS owns activation legality, cost, cooldown, prediction, and cancellation.
- Keep press/release state if the ability needs held-input tasks.
- Route the ability lifecycle to `$unreal-gas-abilities`.

## Input testing/injection

Use `showdebug enhancedinput` for live actions/mappings and `showdebug devices` for devices.
Use Enhanced Input injection or `Input.+key`/`Input.-key` for deterministic test support where
appropriate. Injection tests the input pipeline; it does not prove physical-device or OS focus
behavior.
