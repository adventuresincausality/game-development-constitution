# Gameplay input buffering and coyote time

Enhanced Input determines that an action was requested. Buffering preserves that semantic
request until gameplay can accept it.

## Minimal buffer model

Store per buffered action:

- semantic action identifier or Input Action;
- local request timestamp using a consistent clock;
- optional value/target/direction snapshot;
- expiration duration;
- consumed/canceled state.

Procedure:

1. On the deliberate input event (usually `Triggered` or `Started`), record/replace the request.
2. Immediately ask the gameplay system whether it can execute.
3. Re-evaluate only on relevant state changes or a bounded update path—landing, montage window,
   cooldown end, state-tag removal—not by spawning unbounded timers.
4. If legal and unexpired, consume exactly once and execute.
5. If expired, canceled, context removed, pawn changed, or input semantics invalidate it, clear.
6. Server still validates the resulting action in multiplayer.

Pseudocode:

```text
OnJumpRequested(now):
    bufferedJump = { requestedAt: now, expiresAt: now + JumpBufferWindow }
    TryConsumeJump(now)

OnLanded(now):
    TryConsumeJump(now)

TryConsumeJump(now):
    if bufferedJump exists and now <= expiresAt and CanJump():
        clear bufferedJump
        Jump()
```

## Coyote time

Track the last valid grounded time. Permit Jump when grounded now or when
`Now - LastGroundedTime <= CoyoteWindow`. Combine with the request buffer:

- early press before landing → input buffer;
- late press just after leaving edge → coyote time.

They solve opposite timing errors and should have separate tuning variables/telemetry.

## Ability/action buffer

For attacks/abilities, store semantic intent and consume at the next legal cancel/combo window.
Do not replay raw key events. Define whether the newest request replaces the oldest, how many
requests can queue, and whether direction/target is sampled at press or execution.

## Multiplayer

Local buffering improves responsiveness but does not authorize the result. For Character
movement, integrate through the predicted movement/command path. For GAS, request ability
activation and let server validation/prediction policies decide. Do not send an expired queue
of raw inputs to the server without bounded validation.
