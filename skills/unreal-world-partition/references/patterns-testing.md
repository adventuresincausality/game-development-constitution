# Production patterns and test gates

## Pattern: open-world traversal

- One default runtime grid until evidence requires another.
- Player source plus a velocity/look-ahead strategy for fast travel.
- Spatial environment actors; true global systems outside placed-world lifetime.
- HLOD for distant static silhouette.
- Runtime Data Layers only for cohesive world phases.
- Cooked traversal benchmark covering slow walk, sprint, fastest vehicle, abrupt turn, and return path.

## Pattern: seamless teleport or fast travel

- Destination streaming source enabled before travel.
- Loading/transition presentation begins.
- Wait for streaming completion and project-specific gameplay readiness.
- Server performs authoritative move.
- Client camera/input resumes after possession and local presentation are ready.
- Temporary source retires after the normal source owns the area.
- Timeout returns to a known safe location or explicit failure UI.

## Pattern: stateful location

- Durable quest/state data lives in save/gameplay state.
- Server maps that truth to Runtime Data Layer state.
- `Loaded` prewarms the destination; `Activated` reveals the chosen phase.
- Streamed interactables reconstruct local presentation from durable IDs/state.
- Late join and load-game tests confirm the same phase.

## Pattern: repeated point of interest

- Level Instance for mixed gameplay/content assembly.
- Packed Level Blueprint only when the assembly is supported static visual content.
- OFPA for collaborative editing.
- Instance-level Data Layer supplies the broad phase; internal layers only for truly reusable variants.
- Validate every instance transform, HLOD, navigation, and references.

## Pattern: persistent manager

Use a framework class or subsystem appropriate to its lifetime. A placed always-loaded actor is acceptable only when world placement is semantically required and its lifetime/cost are explicit.

## Required test matrix

| Axis | Minimum cases |
|---|---|
| Build | PIE, standalone, cooked Development, shipping-equivalent target |
| Cache | cold start and warm repeat |
| Motion | slow, fastest sustained, burst/teleport, sudden reversal |
| Network | listen/dedicated as applicable, late join, reconnect, packet impairment |
| State | each Runtime Data Layer transition and save/load reconstruction |
| Memory | baseline, worst vista, repeated round trip, long soak |
| HLOD | source/proxy comparison, transition in motion, rebuild after source edit |
| Failure | missing/late cell, timeout, cancelled travel, invalid reference |

## Acceptance gates

- No player reaches absent collision or interactive state.
- No unbounded memory rise after repeated traversal.
- Cell/HLOD transitions meet the project's visible-pop and hitch budgets.
- Server and clients agree on authoritative Data Layer/gameplay state.
- A clean builder run is reproducible from source control.
- Packaged behavior matches editor intent.
- Debug overrides are removed and experimental dependencies are documented.
