# PCG and World Partition integration

Use this with [`../../unreal-pcg/SKILL.md`](../../unreal-pcg/SKILL.md). World Partition owns spatial residency; PCG owns procedural generation. Keep their responsibilities explicit.

## Partitioned generation

A partitioned PCG component can generate through PCG Partition Actors aligned to generation grids. Hierarchical generation can use multiple grid sizes in one graph. Runtime generation schedules work around configured generation sources.

Do not assume the PCG grid and World Partition runtime grid are the same thing. Name which grid a setting belongs to.

## Integration workflow

1. Decide whether output is authored/baked, generated on demand in editor, or generated at runtime.
2. Decide whether the PCG component is partitioned and whether hierarchical generation is needed.
3. Keep deterministic seeds and stable source data where reproducibility matters.
4. Assign intended Data Layers and HLOD layers at the source/PCG settings level.
5. Confirm generated actors inherit the intended Data Layer and HLOD assignments.
6. Align generation/loading lead distance with player speed and worst generation latency.
7. Define cleanup when a source cell unloads or runtime generation is cancelled.
8. Re-run generation after relevant source or partition changes and validate in a cooked build.

## Ownership rules

- Durable gameplay state must not exist only in a generated actor that can be unloaded or regenerated.
- Generated collision and navigation must be ready before gameplay relies on them.
- Server-authoritative gameplay generation needs a replication/state plan; do not assume independently seeded clients produce authoritative equivalence.
- Data Layer state should express world phase; PCG parameters should express generation inputs. Do not create two competing state machines.
- HLOD represents distant generated visuals only after the output is eligible, assigned, and built appropriately.

## Commandlet

For offline or automated generation, use the `PCGWorldPartitionBuilder` through the World Partition Builder Commandlet. Record the map, generation filters, source-control mode, engine version, and output in build logs.

Do not treat successful commandlet exit as sufficient. Check generated actor counts/bounds, warnings, determinism, Data Layers, HLOD inputs, and cooked runtime behavior.

## Failure patterns

- **Duplicate output**: generation ownership or cleanup overlaps across components/cells.
- **Seams at cell boundaries**: sampling lacks neighbor context or grid sizes/seed domains disagree.
- **Generated content never unloads**: output ownership, runtime mode, or cleanup is wrong.
- **Content visible in the wrong phase**: generated actor Data Layer assignment was not inherited as assumed.
- **HLOD excludes generated content**: output is not eligible/assigned or HLOD was not rebuilt after generation.
- **Arrival hitch**: generation and cell streaming compete at the point of entry; preload earlier, reduce work, cache where valid, or bake stable content.
