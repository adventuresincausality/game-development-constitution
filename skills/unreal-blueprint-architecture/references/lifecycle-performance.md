# Lifecycle and performance

## Construction versus runtime

Construction Script can rerun in the editor when an instance changes. Make it idempotent:

1. Clear or reuse previously generated objects/components.
2. Derive output entirely from current exposed inputs.
3. Avoid irreversible external side effects.
4. Do not assume BeginPlay has run.
5. Verify placed, duplicated, moved, recompiled, spawned, and packaged instances.

Use BeginPlay or an explicit runtime initialization function for runtime bindings and mutable
session state. Pair every binding, timer, spawned helper, and registration with cleanup.

## Tick decision

Keep Tick only when the value genuinely depends on every rendered/simulation frame. Otherwise:

- state changed → call an event;
- fixed cadence → timer;
- animation presentation → Animation Blueprint/native animation systems;
- delayed one-shot → timer or latent action with lifecycle guard;
- UI change → dispatcher/delegate/field notification;
- expensive repeated query → cache and invalidate.

If Tick remains, disable it by default where possible, enable only while active, scale motion
by delta seconds, avoid world scans and allocation, and profile on target hardware.

## References and loading

A hard class/object reference can pull referenced assets into the dependency/load graph. Use
soft references when the asset is optional or should load asynchronously. Use Primary Assets
when identity, discovery, bundles, cooking rules, or controlled loading justify Asset Manager
integration. Verify with Reference Viewer and packaged/cooked tests.

## Multiplayer boundary

Blueprint communication does not itself replicate. Decide separately:

- who owns authority;
- which properties replicate and with what notification;
- which RPC direction is legal;
- whether a dispatcher is local reaction to replicated state;
- whether a message router is local-only.

Never assume a client-side dispatcher call reaches the server or other clients.
