# World and actor state

Use an interface/component/registry to gather and apply records; do not enumerate every actor and dump
arbitrary properties.

For each savable actor record:

```text
PersistentInstanceId
DefinitionOrClassId when runtime-spawned
OwningMapOrPartitionId
Transform only if design permits movement
small explicit gameplay state struct
record schema/version when independently migrated
```

## Apply order

1. Load/map travel and wait for the intended world readiness boundary.
2. Apply global progression and subsystem registries.
3. Spawn saved runtime actors not already present.
4. Match placed actors by stable ID; apply state or tombstone.
5. Resolve cross-record references by stable ID after all participants exist.
6. Apply player pawn/inventory/checkpoint state and re-enable input/gameplay.

Do not use Actor label, array order, transient object name, pointer, or World Partition runtime cell as
durable identity. A streamed-out actor is not destroyed progress; retain its record independently of
current cell residency.

Define behavior for removed definitions/maps, duplicate IDs, actor class replacement, invalid transforms,
blocked spawn points, and a record whose owning content is not installed. Quarantine/skipping with a
clear player-facing status is safer than an unchecked spawn or null dereference.
