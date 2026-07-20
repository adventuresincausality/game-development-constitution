# Communication patterns

## Direct reference

Use when one caller owns or is explicitly configured with one target.

1. Expose an object reference, assign it at spawn/configuration, or obtain it from a known
   framework relationship.
2. Validate the reference at the use boundary.
3. Call the typed function directly.

This is the clearest option. A cast does not find an object; it only tests/converts an
existing reference. Avoid repeated discovery calls.

## Blueprint Interface

Use when the caller has a target but multiple unrelated classes implement the operation.

1. Create a Blueprint Interface containing the smallest stable function contract.
2. Implement it on each responder.
3. Obtain a target reference through overlap, trace, ownership, configuration, or spawn.
4. Call the interface message on that reference.
5. Define what a non-implementing target means; do not silently depend on a response.

Example: an interaction trace calls `Interact` on doors, pickups, and terminals without
casting to each concrete class.

## Event Dispatcher

Use when one known publisher emits a signal to zero or more listeners.

1. Declare the dispatcher on the publisher.
2. Give the payload the minimum data listeners need.
3. Listeners obtain the publisher and bind once during a defined lifecycle event.
4. Publisher calls the dispatcher after its authoritative state change.
5. Listeners unbind on teardown or when switching publishers.

The publisher owns the event; listeners own their reactions. Guard against duplicate binds.

## Subsystem or message router

Use for deliberately scoped many-to-many communication, not as a default.

1. Choose lifetime: GameInstance, World, or LocalPlayer.
2. Define message channel identifiers and payload structs.
3. Register listeners and retain handles where the API requires them.
4. Broadcast only after authoritative state is valid.
5. Log channel, source, target scope, and payload in development builds.
6. Unregister on teardown.

Global messaging hides dependency and ordering. Document who may publish, whether messages
cross the network, and whether late subscribers need current state separately.

## Choice table

| Relationship | Pattern |
|---|---|
| One caller → one concrete target | Direct reference |
| One caller → one target behind a shared contract | Interface |
| One publisher → many listeners | Event Dispatcher |
| Many publishers → many listeners | Scoped message router |
| Listener needs current value, not merely an occurrence | Query owned state, then subscribe to changes |
