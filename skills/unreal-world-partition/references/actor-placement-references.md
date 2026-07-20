# Actor placement, references, and lifetime

## Classify every load-bearing actor

Record five decisions:

1. **Spatial lifetime** — source-distance loaded or always resident.
2. **World state** — no Data Layer, Editor Data Layer, or Runtime Data Layer and initial state.
3. **Runtime grid** — normally `None` so the partition system selects the default.
4. **Distant representation** — HLOD layer or intentionally none.
5. **Dependencies** — hard actor references, soft asset references, subsystem lookup, or stable identifier.

## `Is Spatially Loaded`

- Enabled: the actor loads when it is in range of a streaming source and is not excluded by a disabled Runtime Data Layer.
- Disabled: the actor is not distance-streamed; Data Layer state can still control it.

Use non-spatial loading for truly global world actors whose lifetime is intentional and cheap. Do not use it for distant content, ordinary interactables, or as a blanket cure for missing references.

## Reference rule

A hard reference between spatial actors can make them part of the same streaming dependency bundle. A reference spanning distant cells may therefore pull content into memory earlier or keep it resident longer than expected.

Prefer, according to the requirement:

- a subsystem or manager that resolves a nearby actor at use time;
- an interface plus overlap/spatial query;
- a soft asset reference for asynchronously loaded assets;
- a stable gameplay identifier resolved through a registry;
- an event/message carrying data rather than a stored pointer.

Do not replace a required same-lifetime relationship with a soft reference merely to silence a warning. If two actors must exist together, co-location and bundling may be correct; document it.

## Ownership patterns

### Global rule or service

Put state in GameMode/GameState, GameInstance, an appropriate subsystem, or a replicated service—not in a random placed actor that happens to remain loaded.

### Spatial interactable

Keep durable state outside the streamed actor or reconstruct it from a stable ID when the cell loads. Treat actor unload as normal lifecycle, not destruction of game truth.

### Cross-cell mission dependency

Store mission state centrally. Resolve each endpoint when its cell is present and tolerate absence. Avoid direct endpoint-to-endpoint hard references across the world.

### Attached actors

Keep parent and child streaming policies compatible. Test attachment and absolute-transform behavior through unload/reload; editor visibility alone is insufficient.

## Validation

- Use the reference viewer and Size Map for suspicious asset chains.
- Inspect streaming-generation warnings and unexpected actor bundles.
- Traverse with debug cell visualization enabled and watch whether distant dependencies load.
- Unload/reload the cell repeatedly; confirm durable gameplay state survives.
- Test server and client separately because authoritative and client-visible actor sets can differ.
