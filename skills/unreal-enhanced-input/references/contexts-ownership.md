# Mapping Context ownership and lifecycle

## Owner

Applied contexts belong to `UEnhancedInputLocalPlayerSubsystem`, so split-screen players and
local profiles remain isolated. Obtain the `ULocalPlayer` from the correct PlayerController,
then its subsystem. Never use player index 0 as a hidden assumption in reusable code.

## Context design

- Base/common context: actions valid across related gameplay modes.
- Mode context: on-foot, vehicle, swimming, build mode, spectator.
- Overlay context: temporary targeting, radial menu, photo mode, debug.
- UI/Common UI: follow the project's UI input-routing architecture and UE 5.8 unified input
  workflow; do not merely stack a high-priority gameplay context over UI focus.

Prefer mutually exclusive mode contexts over collisions resolved only by enormous priority
numbers. Priority is for intentional overlap, not lifecycle replacement.

## Add/remove procedure

1. Resolve the correct Local Player subsystem.
2. Add each required context once with a documented priority.
3. On mode transition, remove the old mutually exclusive context, then add the new one.
4. Decide whether held inputs should remain active across the rebuild. Use
   `FModifyContextOptions` where the API exposes the needed behavior.
5. Remove temporary contexts on cancel, teardown, unpossess, or UI close.
6. Log applied context, priority, owner, reason, and lifecycle in development builds.

## Possession

- PlayerController/LocalPlayer can outlive a Pawn.
- Put persistent player-wide context management on the PlayerController or LocalPlayer-facing
  service.
- Bind Pawn-specific action callbacks through `SetupPlayerInputComponent` and avoid repeated
  binding on repossession.
- When the Pawn changes, route semantic actions to the new controlled object and clear stale
  references/buffers.

## Multiplayer

Enhanced Input runs locally. It does not replicate a context, trigger, or action value. Convert
input to server-validated commands, GAS activation, or Character movement input through the
appropriate networking system. Never treat the presence of an input action as proof that an
authoritative action occurred.
