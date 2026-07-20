# Character movement networking

## Standard flow

- Autonomous proxy performs local movement, records `FSavedMove_Character`, and sends packed
  move data.
- Server reproduces and validates movement, then acknowledges or corrects.
- Owning client replays unacknowledged saved moves after a correction.
- Simulated proxies receive replicated movement and use network smoothing.

Standard CMC modes implement this. New custom state does not become predicted merely because it
lives on an `ACharacter`.

## Custom predicted state

When a custom movement flag/value changes physics:

1. Add it to a custom `FSavedMove_Character` and clear/store/combine it correctly.
2. Extend `FCharacterNetworkMoveData` with values the server must receive.
3. Serialize them.
4. Provide a custom `FCharacterNetworkMoveDataContainer`.
5. Install it through `SetNetworkMoveDataContainer` in the custom CMC.
6. Apply the data before the server reproduces movement.
7. Test move combining; moves with incompatible state must not combine.

Use compressed flags only when their limited space and boolean semantics fit. Follow current
5.8 engine headers/source for signatures.

## Corrections and smoothing

- Fix deterministic divergence before tuning smoothing.
- `NetworkSmoothingMode` affects simulated-proxy presentation, not server authority.
- Location/rotation smoothing times and no-smooth distances are advanced levers; do not use
  them to conceal constant corrections.
- Keep visual mesh smoothing separate from authoritative capsule state.

## Verification matrix

Run standalone, listen server, and dedicated server where relevant:

- owning autonomous proxy;
- server-controlled AI;
- remote simulated proxy;
- 0/medium/high artificial latency;
- packet loss and jitter;
- low and high frame rates;
- sprint/crouch/custom-mode transitions while moves combine;
- moving platforms and jump-off velocity;
- root motion start/cancel/finish;
- teleport;
- server rejection/correction.

Log role, movement/custom mode, acceleration, velocity, location error, correction count,
saved custom flags/data, and root-motion sources. Never ship with client-authoritative
position or correction bypasses enabled as a workaround.
