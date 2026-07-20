# Ability patterns

## Instant self ability

Example: heal, stance toggle request, short utility action.

1. Try activation.
2. Commit.
3. Make outgoing effect spec with ability level/context.
4. Apply to self or resolved target on authority/predicted supported path.
5. Trigger cosmetic cue.
6. End.

## Montage-driven melee

1. Activate and commit at the chosen commitment point.
2. Start a montage Ability Task.
3. Open damage window from a gameplay event/notify path owned by the ability.
4. Server validates hits and applies effects once per valid target/window.
5. Close the window.
6. End on montage completed, blended out, interrupted, or canceled; distinguish paths where
   recovery/cooldown rules differ.

## Target-confirmed projectile

1. Activate into targeting state without spending if design permits cancellation.
2. Ability Task waits for confirm/cancel and produces target data.
3. Server validates origin, direction/range, target legality, and fire rate.
4. Commit.
5. Spawn the authoritative projectile or apply the validated result.
6. End; clean up reticle/target actor on every path.

Do not assume a client-predicted spawned Actor automatically rolls back.

## Charged ability

1. Activate and record charge start in an instanced ability/task.
2. Wait for release, cancel, maximum charge, or interruption.
3. Compute charge from server-valid timing or bounded client data.
4. Commit on release.
5. Put charge magnitude into a SetByCaller value or level/context as designed.
6. Apply effect, feedback, and end.

## Channeled ability

1. Commit initial activation.
2. Apply an active state tag/effect.
3. Use tasks/effects for periodic work; do not create uncontrolled Tick logic.
4. Stop on input release, insufficient resource, blocking tag, death, invalid target, or
   external cancel.
5. Remove non-effect state and end.

## Passive ability

1. Define grant and activation trigger.
2. Apply persistent effects or register bounded event listeners.
3. On removal/end, remove active effects by retained handle and unregister listeners.
4. Test loadout swaps, respawn, duplicate grants, and reconnect.
