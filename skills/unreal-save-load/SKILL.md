---
name: unreal-save-load
description: Design, implement, version, migrate, optimize, and debug persistent game state in Unreal Engine 5.8. Use for USaveGame, ULocalPlayerSaveGame, UGameplayStatics save/load APIs, slots, platform users, profiles, checkpoints, autosaves, world and actor state, stable identifiers, serialization, FArchive custom versions, schema migration, asynchronous persistence, corruption and recovery, cloud conflicts, multiplayer save authority, GameUserSettings, missing or incompatible saves, save hitches, or packaged save behavior.
---

# Unreal 5.8 Save and Load

## Define the persistence contract first

Read [`references/system-selector.md`](references/system-selector.md).

1. List state that must survive a checkpoint, map travel, application restart, device change, patch,
   account change, and multiplayer session separately.
2. Assign each datum an authority, stable ID, owner file/slot, lifetime, default, validation rule, and
   migration policy.
3. Separate immutable definitions from mutable saved state. Persist definition IDs, not asset objects.
4. Capture a consistent snapshot, write through a serialized per-user operation queue, and acknowledge
   success/failure visibly.
5. Load into data first; validate type/header/version, migrate, resolve definitions, travel/construct the
   world, then apply state in a deterministic phase.
6. Preserve a last-known-good path and never overwrite a readable older/newer save after a failed load.
7. Test real previous-version files, corruption, missing content, low storage, interrupted operations,
   multiple users, and packaged target builds.

Route neighboring work deliberately:

- definition assets, Primary Asset IDs, tables, and redirects -> `unreal-data-assets-tables`;
- subsystem/Actor interface architecture -> `unreal-blueprint-architecture`;
- save-related loading/memory hitches -> `unreal-memory-streaming` and `unreal-insights-profiling`;
- release artifact, patch, platform packaging, and crash collection -> `unreal-packaging-deployment`;
- replicated runtime authority -> `unreal-replication`.

Load only what applies:

- [`references/schema-stable-identifiers.md`](references/schema-stable-identifiers.md)
- [`references/save-load-sequence-async.md`](references/save-load-sequence-async.md)
- [`references/world-state-actors.md`](references/world-state-actors.md)
- [`references/checkpoints-autosaves.md`](references/checkpoints-autosaves.md)
- [`references/versioning-migrations.md`](references/versioning-migrations.md)
- [`references/slots-users-platforms-cloud.md`](references/slots-users-platforms-cloud.md)
- [`references/corruption-failure-recovery.md`](references/corruption-failure-recovery.md)
- [`references/multiplayer-authority-security.md`](references/multiplayer-authority-security.md)
- [`references/performance-testing-debugging.md`](references/performance-testing-debugging.md)
- [`references/use-case-recipes.md`](references/use-case-recipes.md)

## Required answer format

Return:

1. **Persistence matrix** by datum, authority, lifetime, owner, stable ID, and slot.
2. **Save schema/header** with current version, defaults, validation, and size budget.
3. **Snapshot and write sequence**, concurrency policy, callbacks, UI, and failure behavior.
4. **Load, migration, definition resolution, world travel, and apply sequence**.
5. **Actor/world identity**, spawn/destroy state, missing-content behavior, and authority boundary.
6. **Backup/recovery/cloud conflict policy** without unsupported atomicity claims.
7. **Previous-version, corruption, interruption, platform-user, multiplayer, and packaged tests**.

## Hard rules

- Do not serialize live Actor/UObject pointers as durable identity. Persist stable domain IDs, Primary
  Asset IDs, tags, names, GUIDs, and value records with explicit resolution behavior.
- Do not save immutable definition data into every slot. Save the definition ID plus minimal mutable state.
- `AsyncSaveGameToSlot` still serializes on the game thread; it moves the platform write to a worker.
  Keep snapshot/schema cost bounded and measure hitches.
- Serialize save/load operations per platform user/slot. UE warns that some platforms may not support
  simultaneous save and load; completion order must not decide data authority.
- Treat callbacks as stale-capable. Bind weak ownership/request generations and verify slot/user/request.
- Never mutate the live world incrementally from unvalidated bytes. Validate and migrate a data snapshot
  before applying it.
- Never overwrite an unknown newer-version, corrupt, or failed-to-migrate save automatically.
- Do not rely on application shutdown as the only persistence point.
- Local save data is untrusted for competitive authority, paid entitlement, or server economy.
- `SaveGameToSlot` documents that it writes all non-transient properties and does not check the
  `SaveGame` property flag. Do not repeat the common claim that the flag filters this built-in call.
- Verify path, quota, user identity, slot enumeration, cloud behavior, suspend/resume, and atomicity with
  the target platform's current save API; desktop `.sav` behavior is not a universal contract.

See [`references/sources.md`](references/sources.md) for the UE 5.8 primary-source trail.
