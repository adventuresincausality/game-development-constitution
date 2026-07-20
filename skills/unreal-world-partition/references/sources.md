# Primary sources and maturity notes

Checked against Unreal Engine 5.8 documentation on 2026-07-19.

## Core documentation

- [World Partition](https://dev.epicgames.com/documentation/en-us/unreal-engine/world-partition-in-unreal-engine) — system overview, enabling/conversion, actor settings, streaming sources, runtime grids, debug commands.
- [World Partition Data Layers](https://dev.epicgames.com/documentation/en-us/unreal-engine/world-partition---data-layers-in-unreal-engine) — assets/instances, Editor vs Runtime layers, runtime states, network authority, diagnostics.
- [World Partition HLOD](https://dev.epicgames.com/documentation/en-us/unreal-engine/world-partition---hierarchical-level-of-detail-in-unreal-engine) — HLOD layer types, assignment, settings, building, commandlet.
- [One File Per Actor](https://dev.epicgames.com/documentation/en-us/unreal-engine/one-file-per-actor-in-unreal-engine) — editor/source-control workflow and cooked-package boundary.
- [Level Instancing](https://dev.epicgames.com/documentation/en-us/unreal-engine/level-instancing-in-unreal-engine) — Level Instances, Packed Level Blueprints, Embedded and Level Streaming runtime modes, Data Layers.
- [`APackedLevelActor`](https://dev.epicgames.com/documentation/unreal-engine/API/Runtime/Engine/APackedLevelActor?lang=en-US) — packing boundary and fallback to a regular Level Instance when components are unsupported.
- [World Partition Builder Commandlet Reference](https://dev.epicgames.com/documentation/en-us/unreal-engine/world-partition-builder-commandlet-reference) — builder classes, forms, and source-control/rendering options.
- [Using PCG with World Partition](https://dev.epicgames.com/documentation/en-us/unreal-engine/using-pcg-with-world-partition-in-unreal-engine) — partitioned/hierarchical PCG interaction, Data Layer and HLOD assignment.
- [`UWorldPartitionSubsystem::IsStreamingCompleted`](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UWorldPartitionSubsystem/IsStreamingCompleted) — readiness API used in source-gated travel.
- [UE 5.8 Release Notes](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-8-release-notes?lang=en-US) — World Partition Insights, HLOD workflow changes, fixes, and experimental features.

## Maturity and interpretation

- World Partition, Data Layers, HLOD, OFPA, Level Instances, and builder commandlets are established UE5 workflows.
- World Partition Insights is new in 5.8; verify its configuration and capture overhead in the installed engine.
- Release-note items marked Experimental, including Fast Geometry-related work and optional external HLOD asset workflows, are not production defaults.
- `UWorldPartitionRuntimeHashSet` exists in the 5.8 API, but this skill does not prescribe it without current project-specific documentation and profiling. The documented default 2D Runtime Spatial Hash remains the baseline.
- Current Epic pages occasionally preserve command spelling quirks. Check console autocomplete/help in the exact engine build before scripting a command.

## Source-use rule

Prefer the 5.8 page or engine source over remembered UE 5.0–5.7 behavior. If a property, command, or UI path is absent in the installed build, report the discrepancy and inspect the engine version/plugin/configuration instead of inventing a replacement.
