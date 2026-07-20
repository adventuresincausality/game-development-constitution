# Debugging and builder commandlets

## Diagnose in layers

1. **Source** — is an enabled source requesting the expected location, grid, shape, target state, and priority?
2. **Cell** — is the expected runtime cell generated, requested, loaded, and activated?
3. **Policy** — do `Is Spatially Loaded`, Data Layer state, grid assignment, and references agree?
4. **Content** — did the actor initialize, register collision/rendering/navigation, and survive replication rules?
5. **Representation** — is HLOD replacing the source as intended?
6. **Budget** — did I/O, decompression, memory, game-thread work, or rendering miss the deadline?

## Useful runtime commands

```text
wp.Runtime.ToggleDrawRuntimeHash2D
wp.Runtime.ToggleDrawRuntimeHash3D
wp.Runtime.ToggleDrawDataLayers
wp.DumpDatalayers
wp.Runtime.HLOD 0
```

Use `stat unit`, `stat streaming`, memory tools, Insights, and platform I/O telemetry alongside cell visualization. A colored cell does not prove the content was ready without a hitch.

## World Partition Insights in 5.8

UE 5.8 introduces per-cell streaming analysis and session playback in Unreal Insights. Epic documents enabling `WorldStreamingInsights` in Unreal Insights configuration and tracing with:

```text
-trace=WorldStreaming
```

Optional trace channels include:

```text
+WorldStreamingPriority
+WorldStreamingDependencies
```

Treat the toolchain as version-specific. Confirm configuration in the installed 5.8 build and record trace overhead before using production timing as a baseline.

## Repro capture

Record:

- engine revision and build configuration;
- map, start transform, route, speed, and source configuration;
- cell size/loading range and Data Layer states;
- cold versus warm cache;
- platform/storage/memory state;
- trace, log, hitch timestamp, and visible symptom.

## Builder commandlet form

```text
UnrealEditor.exe <Project.uproject> <Map> -run=WorldPartitionBuilderCommandlet -Builder=<BuilderClass> -Unattended
```

Current documented builders include:

- `WorldPartitionHLODsBuilder`
- `WorldPartitionMiniMapBuilder`
- `WorldPartitionRenameDuplicateBuilder`
- `WorldPartitionResaveActorsBuilder`
- `WorldPartitionFoliageBuilder`
- `WorldPartitionNavigationDataBuilder`
- `WorldPartitionSmartObjectCollectionBuilder`
- `PCGWorldPartitionBuilder`
- `WorldPartitionRuntimeVirtualTextureBuilder`

Some builders require rendering; add `-AllowCommandletRendering` only when required. Choose source-control behavior explicitly (`-SCCProvider=...` or the documented no-source-control path) and never automate submission without a reviewed change set.

## Builder acceptance

- command exits successfully with no ignored errors;
- expected assets changed and unrelated assets did not;
- a second identical run is stable or differences are explained;
- source-control status is reviewable;
- the map cooks and loads;
- target traversal, Data Layer transitions, HLOD, navigation, and PCG behave as expected.
