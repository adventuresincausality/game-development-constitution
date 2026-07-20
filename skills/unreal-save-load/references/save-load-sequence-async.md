# Save/load sequence and async behavior

## Save

1. Coalesce a request and capture reason, user, slot, generation, and checkpoint ID.
2. On the game thread, ask owned systems for a consistent value snapshot in a declared order.
3. Validate required IDs/ranges and create/populate the SaveGame object.
4. Call `AsyncSaveGameToSlot`; keep UI/state pending until its completion callback.
5. Verify callback generation, slot, user, and success. Update last-good metadata only on confirmed success.

UE 5.8 performs `AsyncSaveGameToSlot` serialization on the game thread, platform write on a worker, and
completion on the game thread. Large object graphs can still hitch during serialization. Delegate payload
is copied to a worker thread, so copied payload must be thread-safe by value.

## Load

1. Select user/slot and queue behind conflicting persistence operations.
2. Call `AsyncLoadGameFromSlot`; handle null/failure as a distinct result, not “new game” silently.
3. On callback, verify request identity and cast/type/header/version.
4. Migrate a data object; validate it without mutating live gameplay.
5. Resolve required definition IDs/assets asynchronously and decide missing-content policy.
6. Travel/load the target world if needed.
7. When registered systems/actors are ready, apply global -> world -> spawned -> placed actor -> player
   state in a documented order; then emit one load-complete event.

UE 5.8 performs the platform read on a worker, then object creation/deserialization and callback on the
game thread. Keep migration/apply work bounded or split it behind a loading transition.

Synchronous APIs are acceptable only for proven-small data at a blocking menu/boot boundary.
