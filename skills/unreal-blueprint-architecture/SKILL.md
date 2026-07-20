---
name: unreal-blueprint-architecture
description: Design, refactor, and debug maintainable Blueprint gameplay architecture in Unreal Engine 5.8. Use for choosing Actors, Actor Components, Blueprint Interfaces, Event Dispatchers, direct references, Subsystems, Data Assets, function libraries, C++ boundaries, Construction Script behavior, dependency direction, lifecycle, or Blueprint performance patterns.
---

# Unreal 5.8 Blueprint Architecture

## Select the owner and lifetime

Read [`references/system-selector.md`](references/system-selector.md) before choosing a
class. Put behavior on the object with the shortest correct lifetime and clear ownership.

- Use an **Actor** for an independently placed, spawned, replicated, or transformed entity.
- Use an **Actor Component** for a reusable capability owned by an Actor.
- Use a **GameInstance Subsystem** for one service spanning maps in one game instance.
- Use a **LocalPlayer Subsystem** for per-local-player services and split-screen isolation.
- Use a **World Subsystem** for one service per World.
- Use a **Data Asset** for authored definitions; keep mutable runtime state elsewhere.
- Use a **Blueprint Function Library** only for stateless operations.

## Select communication

Read [`references/communication-patterns.md`](references/communication-patterns.md).

1. Use a direct reference for a stable one-to-one relationship.
2. Use a Blueprint Interface when the caller has a target but should not depend on its
   concrete class.
3. Use an Event Dispatcher when one known publisher notifies zero or more listeners.
4. Use a subsystem/message router for many-to-many, cross-system events with deliberate
   scope and debugging.
5. Do not replace clear one-to-one calls with global messaging.

## Execute

1. State ownership, lifetime, authority, and save/replication requirements.
2. Draw dependency direction before adding references.
3. Keep reusable capability logic in components; access owners through interfaces where
   concrete casts would defeat reuse.
4. Keep Blueprint graphs event-driven. Replace repeated Tick work with events, timers,
   or invalidation unless continuous per-frame evaluation is required.
5. Keep Construction Script idempotent and editor-safe. Put runtime mutation in explicit
   runtime functions.
6. Move stable contracts, high-frequency work, networking foundations, and merge-heavy
   shared systems to C++; expose deliberate Blueprint-facing APIs.
7. Test lifecycle, duplicate binding, teardown, map travel, respawn, multiplayer authority,
   and packaged behavior.

Read [`references/use-cases.md`](references/use-cases.md) for concrete layouts and
[`references/lifecycle-performance.md`](references/lifecycle-performance.md) for execution
boundaries. Use [`references/troubleshooting.md`](references/troubleshooting.md) when a
system becomes coupled, fires twice, retains stale references, or behaves differently in
the editor and runtime.

## Required answer format

Return:

1. **Class/component layout** and ownership.
2. **Communication choice** and why alternatives were rejected.
3. **Ordered implementation actions** with named nodes/APIs where verified.
4. **State, lifetime, authority, and replication boundaries**.
5. **Dependencies and asset-reference consequences**.
6. **Failure checks** and a packaged-build verification procedure.

Do not invent Blueprint nodes, editor paths, defaults, or replication behavior.

## Hard rules

- Avoid gameplay logic in Level Blueprints unless it truly belongs to that level.
- Never use `Get All Actors of Class` as routine dependency injection.
- Never bind a delegate repeatedly without a matching unbind or one-time guard.
- Never store mutable session state in a Data Asset or class default object.
- Treat Interfaces as contracts, not object discovery; a target reference is still needed.
- Treat Event Dispatchers as publisher-owned signals, not global message buses.
- Profile before moving Blueprint code to C++, but keep per-frame loops and complex math
  under suspicion.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
