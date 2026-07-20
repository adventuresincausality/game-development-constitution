# System selector

Choose by ownership and lifetime before convenience.

| Need | Use | Avoid when |
|---|---|---|
| Placed/spawned world entity with transform, collision, replication, or independent lifetime | Actor | It is only a reusable capability of another Actor |
| Reusable capability attached to actors | Actor Component | It needs its own transform; use Scene Component or Actor as appropriate |
| Reusable transform-bearing subobject | Scene Component | It must exist independently or replicate as an Actor |
| Service lasting for one engine process | Engine Subsystem | State should reset per game instance/world/player |
| Service lasting across map travel in one game instance | GameInstance Subsystem | Data is world-specific or per local player |
| Service scoped to one World | World Subsystem | It must survive world replacement |
| Service scoped to one local human | LocalPlayer Subsystem | State is shared by all local players |
| Immutable authored definition | Data Asset | The value mutates during play |
| Rich definition needing Asset Manager identity/load control | Primary Data Asset | Normal direct loading is sufficient |
| Stateless reusable operation | Blueprint Function Library | The function needs state, lifecycle, authority, or polymorphism |
| Shared behavior contract across unrelated object types | Blueprint Interface | The caller has no target reference |

## Placement procedure

1. Name the state owner.
2. Name the destruction/reset event: component removal, actor destroy, pawn respawn, world
   teardown, map travel, local player removal, or process exit.
3. Choose the class whose lifetime matches that reset event.
4. Decide whether the state is authoritative, predicted, cosmetic, saveable, or authored.
5. Keep authored definitions in assets and mutable instances in runtime objects.

## Blueprint versus C++

Prefer C++ for stable shared contracts, custom replication, high-frequency loops, complex
math, low-level engine integration, and code that many binary Blueprints would otherwise
duplicate. Prefer Blueprint for content assembly, presentation, designer-facing variation,
and event-driven orchestration. Profile before converting solely for speed.
