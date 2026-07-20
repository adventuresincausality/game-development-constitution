# Data Layers

## Data model

- A **Data Layer Asset** is a project asset that declares an Editor or Runtime layer.
- A **Data Layer Instance** is the world-specific instance and assignment surface.
- **Editor Data Layers** organize authoring views and alternate editing sets; they do not define a runtime state machine.
- **Runtime Data Layers** can be changed at runtime and participate in streaming.

Runtime states:

- **Unloaded**: content is not resident.
- **Loaded**: content is resident but not visible/activated.
- **Activated**: content is resident and visible/active.

Treat `Loaded` as a preload state and `Activated` as presentation/gameplay availability. Verify component-specific behavior instead of assuming visibility is the only activation consequence.

## Network authority

In client/server play, the server changes authoritative Runtime Data Layer state. Clients should observe the replicated result. Do not let each client independently activate a layer that changes collision, interaction, or world truth.

Cosmetic client-only variants should use an explicitly client-owned presentation mechanism unless their Data Layer behavior and replication have been proven for the target design.

## Good uses

- preloading a boss arena before revealing it;
- switching repaired/destroyed or seasonal world variants;
- phasing a location by authoritative quest state;
- separating alternate set dressing while preserving shared terrain;
- grouping editor-only disciplines or review passes.

## Poor uses

- replacing a local component visibility flag for one tiny object;
- encoding every quest boolean as a separate layer;
- assigning widely scattered actors to many Runtime Data Layers without measuring streaming cost;
- hiding authoritative actors only on a client;
- storing durable quest truth in the layer state itself.

## State-transition pattern

1. Author a Runtime Data Layer Asset and world instance.
2. Assign only the content that shares the transition and lifetime.
3. Set and document the initial runtime state.
4. On the server, request `Loaded` early enough to cover worst load latency.
5. Wait for readiness when the transition requires collision or interaction.
6. Request `Activated` at the reveal/phase boundary.
7. Persist the underlying gameplay state separately so load/save can reconstruct the layer state.
8. Test late join, reconnect, respawn, and server travel.

## Performance caution

Actors spread over large areas or repeated across many Runtime Data Layers can degrade streaming performance by creating broad or fragmented dependencies. Use cohesive spatial/state groups and inspect the resulting cells.

## Debug commands

```text
wp.DumpDatalayers
wp.Runtime.SetDataLayerRuntimeState
wp.Runtime.ToggleDataLayerActivation
wp.Runtime.ToggleDrawDataLayers
```

Epic's current documentation also lists `wp.Runtime.DebugFilerByDatalayer` with that spelling. Confirm the available console command in the running 5.8 build before automating it.
