# Components, subobjects, and Fast Arrays

## Replicated ActorComponents

Both must be true:

- owning Actor replicates;
- ActorComponent replicates (`SetIsReplicatedByDefault(true)` in the component constructor for a
  default behavior, or the appropriate instance setup).

Components can replicate properties, RPCs, and their own subobjects. Component RPCs add more
overhead than Actor RPCs; route high-volume calls through the Actor when appropriate.

## Replicated UObjects/subobjects

Use a UObject subobject when state belongs to an Actor/component but needs its own identity and
replicated properties without becoming a world Actor.

Preferred forward-compatible procedure:

1. Make the outer/owner a replicated Actor or replicated ActorComponent.
2. Enable `bReplicateUsingRegisteredSubObjectList` on that owner.
3. Create the subobject on the server with a stable ownership relationship.
4. Register it with `AddReplicatedSubObject` and an optional condition.
5. Remove/unregister it before deletion when required by the lifetime path.
6. Wake/flush the owning Actor before changing a dormant subobject.

The registered subobject list works with Generic Replication and RepGraph and is the only
supported subobject method for Iris. Do not enable Iris while relying only on legacy
`ReplicateSubobjects` overrides.

## Fast Arrays

Use `FFastArraySerializer` for replicated collections with item-level additions, removals, and
changes where a normal whole-array representation is too costly or lacks item callbacks.

Implementation contract:

- item struct derives from `FFastArraySerializerItem`;
- container struct derives from `FFastArraySerializer` and owns the item array;
- provide the required delta serialization trait/function for the chosen pattern;
- call `MarkItemDirty` after an item changes;
- call `MarkArrayDirty` for structural changes when required by the operation;
- handle add/change/remove callbacks as received-state reactions;
- use stable item identity and do not retain pointers to entries that may move.

Verify exact signatures against `FastArraySerializer.h` for the engine build; do not invent them
from memory. Iris has a native Fast Array path, but Iris itself remains Experimental.

## Selection

| Data | Representation |
|---|---|
| A few scalar states | actor/component replicated properties |
| Cohesive values needing ordered handling | one replicated struct |
| Large changing item collection | Fast Array |
| Modular owned state object | registered replicated UObject subobject |
| Independent world relevance/transform | replicated Actor |
