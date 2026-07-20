# Use-case recipes

## Small single-player checkpoint

Use one profile SaveGame plus a short autosave ring. Persist checkpoint ID, player semantic state,
inventory records by stable definition/instance ID, quest state, and placed-actor tombstones. On load,
migrate, travel to the checkpoint map, resolve definitions, apply world records, then player state.

## Multiple campaigns plus global unlocks

Separate global profile/unlocks from each campaign slot. A campaign save references the owning profile ID
and its own schema/checkpoint. Deleting a campaign must not delete account settings/unlocks accidentally.

## Per-player settings

Use `UGameUserSettings` for resolution/window/scalability. Use `ULocalPlayerSaveGame` or the owning
feature's user-settings API for per-player controls/accessibility/custom preferences. Bind to platform
user, handle split screen/account switch, and do not put world progress in machine graphics config.

## Open-world actors

Assign authored stable IDs to placed savable actors. Store a sparse map of changed state/tombstones plus
records for persistent runtime-spawned actors. Keep records independent of World Partition residency;
apply when the owning actor registers or after its cell loads.

## Server-owned progression

Persist authenticated account/domain records through a server/backend transaction. Keep the local file
to settings/cache/offline mode. Use idempotency keys and compare-and-set/version checks so retries cannot
duplicate or roll back rewards.
