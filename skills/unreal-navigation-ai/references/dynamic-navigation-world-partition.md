# Dynamic navigation, invokers, and World Partition

## Generation mode selector

| Mode | Use when | Constraint |
|---|---|---|
| Static | Navigable collision does not change at runtime | Build/cook data; cheapest runtime |
| Dynamic Modifiers Only | Base surface is static; runtime obstacles/areas modify it | Cannot create arbitrary new navigable surface absent from base data |
| Dynamic | Runtime geometry changes require tile regeneration | Highest runtime generation cost |
| Dynamic + Navigation Invokers | Very large/procedural world needs local generation around seeds | Readiness radius, generation latency, and removal policy become gameplay constraints |

Prefer the least dynamic mode that represents real changes.

## Runtime modifier pattern

- Use `NavModifierVolume` or `NavModifierComponent` with an Area Class to change cost or mark `NavArea_Null`.
- For moving obstacles that should block rather than become walking surface, mark them as Dynamic Obstacles/appropriate modifiers so only affected data is dirtied.
- Batch or debounce frequent changes; continuous transform noise can cause rebuild thrash.

## Navigation Invokers

1. Enable `Generate Navigation Only Around Navigation Invokers` in Navigation System settings.
2. Use Dynamic runtime generation.
3. Keep a NavMeshBoundsVolume covering the possible generation domain.
4. Add `NavigationInvokerComponent` or register an invoker.
5. Set generation radius from movement speed × worst tile-ready latency + path/look-ahead margin.
6. Set removal radius larger than generation radius to prevent boundary churn.
7. Test fast motion, teleport, multiple invokers, invokers far from seeds, and no-invoker cleanup.

Do not allow an agent to request a route beyond generated navigation without a waiting, partial-route, or fallback policy.

## World Partition NavMesh

World Partitioned Navigation Mesh is **Experimental** in UE 5.8. It splits NavMesh into chunk Actors that stream with World Partition and supports Static, Dynamic Modifiers Only, and Dynamic modes.

Key rules:

- enable `Is World Partitioned Navmesh` on the RecastNavMesh;
- enable Fixed Tile Pool Size for streaming and size the pool for the maximum loaded navigation bubble plus editor visualization needs;
- disable automatic editor navigation updates for very large maps and require a deliberate final build;
- understand Base NavMesh Data Layers: base navigation includes navigation-relevant objects outside Data Layers, Editor Data Layers, and configured Base NavMesh Data Layers;
- Dynamic tile generation is limited to loaded space;
- build static WP navigation with `WorldPartitionNavigationDataBuilder` through the World Partition Builder Commandlet.

## Acceptance

- clean commandlet build from source control;
- correct chunks load/unload with cells;
- no route crosses unloaded/missing collision;
- pool exhaustion and rapid traversal have explicit behavior;
- Runtime Data Layer state produces expected base/dynamic navigation;
- server paths and replicated movement remain correct;
- Experimental dependency and fallback are recorded for shipping review.
