# Triggers and modifiers

## Processing order

Raw device value → mapping/action modifiers → triggers → `ETriggerEvent` callbacks.

Use modifiers for values and triggers for activation conditions.

## Modifier patterns

- Dead Zone: suppress small analog noise; choose axial or radial behavior deliberately.
- Scalar: sensitivity or axis gain.
- Negate: invert selected axes or turn positive digital keys into negative input.
- Swizzle Input Axis Values: move a 1D key value to another axis.
- Response/dead-zone custom modifier: only when built-ins cannot express the device curve.
- World-space modifier: only when the receiver truly needs world-space input.

For WASD feeding Axis2D, Epic's documented pattern is:

| Key | Desired value | Mapping modifiers |
|---|---|---|
| W | +Y | Swizzle axis |
| A | −X | Negate |
| S | −Y | Negate + Swizzle axis |
| D | +X | None |

Normalize/clamp only when the design requires it. Diagonal keyboard accumulation and analog
magnitude must be tested rather than assumed.

## Trigger patterns

- Pressed: one trigger as actuation crosses the threshold.
- Released: trigger on release after actuation.
- Hold: trigger after held duration; can be one-shot or repeated by configuration.
- Hold And Release: trigger on release after minimum hold.
- Tap: press/release within threshold.
- Pulse: repeated interval while actuated.
- Chord: requires another Input Action.
- Blocker: prevents success when its condition succeeds.

## Event binding semantics

| Event | Use |
|---|---|
| `Started` | Begin evaluation/presentation, such as charging feedback |
| `Ongoing` | Show incomplete hold/tap evaluation; may fire each tick |
| `Triggered` | Execute successful semantic intent; repetition depends on trigger |
| `Completed` | Handle normal end after a triggered action |
| `Canceled` | Handle release/interruption before success |

Bind only the events the design needs. A raw action with no one-shot trigger can produce
Triggered repeatedly while actuated; do not use it for a one-shot action without deliberate
trigger/event design.

## Trigger composition

Explicit triggers require at least one explicit success, implicit triggers all must succeed,
and blocker success forces failure. When mixing types, write a truth table and inspect
`showdebug enhancedinput`. Do not infer AND/OR behavior from asset ordering.

## Stateful custom classes

UE 5.8 preserves trigger/modifier state more reliably across mapping rebuilds. Stateful custom
Blueprint/C++ triggers and modifiers should implement the current reinstancing callbacks so
state transfers when mappings are rebuilt without semantic change.
