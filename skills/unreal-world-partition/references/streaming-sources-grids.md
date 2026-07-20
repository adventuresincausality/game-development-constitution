# Streaming sources, runtime grids, and teleports

## Source model

PlayerControllers can act as streaming sources. Use a `WorldPartitionStreamingSourceComponent` for vehicles, cameras, scripted destinations, or temporary preloading.

Important source properties include:

- **Target State**: request `Loaded` or `Activated`; when sources overlap, the highest requested state wins.
- **Priority**: resolves competition between sources; higher priority wins.
- **Shapes**: constrain the affected region instead of always using an unconstrained radius.
- **Target Grid** and **Target HLOD Layer**: narrow a source only when a specific design requires it.

Avoid leaving speculative sources active. Each one expands residency and I/O demand.

## Loading-range model

Use a measured lower bound:

```text
minimum lead distance = maximum approach speed × worst observed ready latency
                       + camera/interaction look-ahead
                       + safety margin
```

`ready latency` includes storage I/O, decompression, object creation, registration, render-resource readiness, and gameplay initialization on the target build.

- Increasing loading range raises lead time but increases resident memory and concurrent work.
- Decreasing it reduces residency but increases pop-in and arrival hitch risk.
- Smaller cells increase cell count and management overhead while improving spatial granularity.
- Larger cells reduce cell count but make each transition heavier and coarser.

Do not tune cell size and range simultaneously. Change one variable, record a repeatable traversal, and compare.

## Runtime grid policy

Start with the default 2D Runtime Spatial Hash and one grid. More than one runtime grid can hurt performance and makes source behavior harder to reason about. Add a grid only when profiling shows a distinct content class needs a materially different cell size or loading range.

Relevant grid settings:

- `Cell Size`
- `Loading Range`
- `Block on Slow Streaming`
- `Priority`

Blocking can protect world correctness but visibly stalls play. Decide explicitly which transitions may block and provide UI or transition design when needed.

## Safe teleport pattern

1. Place or move a temporary streaming-source component at the destination.
2. Enable the source with an appropriate target state and shape.
3. Poll `UWorldPartitionSubsystem::IsStreamingCompleted` for that source/provider.
4. On success, teleport the pawn and camera.
5. Retain the source until the normal player source owns the destination cells.
6. Disable or remove the temporary source.
7. On timeout, cancel, present a loading transition, or move to a safe fallback. Never silently teleport into missing collision.

## High-speed traversal pattern

- Lead the source in the velocity/look direction rather than merely inflating a symmetric range.
- Test sudden turns, braking, respawn, spectating, network correction, and possession changes.
- Keep gameplay-critical collision and navigation readiness in the acceptance check, not just visual presence.

## Debug commands

```text
wp.Runtime.ToggleDrawRuntimeHash2D
wp.Runtime.ToggleDrawRuntimeHash3D
wp.Runtime.ShowRuntimeSpatialHashGridLevel
wp.Runtime.ShowRuntimeSpatialHashGridLevelCount
wp.Runtime.ShowRuntimeSpatialHashGridIndex
wp.Runtime.OverrideRuntimeSpatialHashLoadingRange
wp.Runtime.MaxLoadingLevelStreamingCells
```

Use overrides only for diagnosis. Return to authored settings before recording final performance.
