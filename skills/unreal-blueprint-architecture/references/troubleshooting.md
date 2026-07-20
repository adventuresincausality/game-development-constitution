# Troubleshooting

## Cast fails

- Confirm the input reference is the expected object; casting does not locate it.
- Replace repeated concrete casts with an interface only when multiple types share a contract.
- Fix ownership/spawn/configuration rather than adding more casts.

## Event fires twice

- Search for multiple Bind/Assign nodes and repeated initialization.
- Log publisher, listener, lifecycle event, and object instance name.
- Bind once or unbind before rebinding.
- Check respawn, widget reconstruction, possession, and map travel.

## Event never fires

- Confirm binding occurs before broadcast.
- Confirm listener and publisher are the same instances.
- Confirm neither was destroyed or replaced.
- For multiplayer, confirm the state/RPC actually reaches that machine; dispatchers are local.

## Stale or invalid reference

- Identify which object's lifetime is shorter.
- Rebind on possession/target/world changes.
- Clear references and unregister during teardown.
- Avoid caching level actors in objects that survive map travel.

## Editor duplicates generated objects

- Make Construction Script regeneration idempotent.
- Destroy/reuse generated components from the previous run.
- Do not append to persistent arrays without clearing/reconciling.

## Blueprint becomes unmaintainable

- Split reusable capabilities into components.
- Replace cross-type casts with a narrow interface.
- Replace global searches with explicit references or scoped registries.
- Move stable shared contracts and hot paths to C++.
- Keep graphs as orchestration; move repeated logic into functions.

## Packaged build differs

- Check asset cooking and soft-reference loading.
- Remove assumptions about editor-only objects or Construction Script timing.
- Verify initialization order and null checks.
- Test a Development packaged build with logs before Shipping.
