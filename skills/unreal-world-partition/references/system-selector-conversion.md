# System selector and conversion

## Choose the smallest system that meets the need

| Situation | Default choice | Reason |
|---|---|---|
| Continuous traversable world with bounded residency | World Partition, streaming enabled | Automatic source-distance streaming and one persistent authoring world |
| Small map that fits budget | World Partition, streaming disabled, or a normal level | Avoid runtime streaming complexity while retaining the desired authoring workflow |
| Repeated point of interest or gameplay assembly | Level Instance | Reusable sublevel edited in context |
| Repeated static architectural/mesh assembly | Packed Level Blueprint | Packs supported static content into an optimized actor |
| Existing UE5 World Partition project | Extend current model | Avoid a second overlapping streaming authority |
| Legacy/discrete sublevel architecture | Existing level streaming until migration is justified | Conversion risk may exceed its value |

World Partition is Epic's recommended UE5 large-world approach. It is not proof that every map needs cell streaming.

## Conversion safety workflow

1. Work on a source-controlled branch or verified backup.
2. Inventory Level Blueprints, streaming volumes, scripted sublevel transitions, world settings, always-loaded managers, actor references, foliage, navigation, and HLODs.
3. Resave the source level and correct unstable actor GUID warnings before conversion.
4. Run the conversion commandlet with `-ReportOnly` first.
5. Review actors that cannot be externalized, reference clusters, sublevel handling, and generated configuration.
6. Convert a copy or use `-ConversionSuffix` until the result passes validation.
7. Rebuild derived data: HLOD, navigation, foliage, PCG, minimap, or RVT as applicable.
8. Compare gameplay and memory in a cooked build; keep the old map until parity is demonstrated.

General form:

```text
UnrealEditor.exe <Project.uproject> <MapName> -run=WorldPartitionConvertCommandlet -ReportOnly
```

Useful flags include:

- `-ConversionSuffix`: preserve the source and write a converted map with a suffix.
- `-ReportOnly`: analyze without converting.
- `-GenerateIni`: emit conversion settings that can be reviewed and reused.
- `-OnlyMergeSubLevels`: merge sublevels without otherwise converting the result to World Partition.

Avoid `-SkipStableGUIDValidation` as a routine fix. Stable GUIDs are required for repeatable conversion; resave and repair the map instead.

## Reject the conversion when

- success depends on Level Blueprint state or streaming callbacks not yet replaced;
- non-OFPA actors inside Level Instances must exist at runtime but the design assumes Embedded Mode;
- reference bundles make most of the world resident;
- target-device memory or traversal hitching regresses with no credible mitigation;
- the team cannot rebuild and validate derived content reproducibly.

## Version-sensitive note

UE 5.8 adds World Partition streaming analysis in Unreal Insights and improves scoped HLOD building. Treat these as new workflow capabilities, not permission to skip before/after performance captures.
