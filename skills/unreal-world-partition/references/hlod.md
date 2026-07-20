# World Partition HLOD

## Purpose and boundary

HLOD replaces distant content from unloaded cells with proxy representation and can reduce draw calls. It is for visual continuity and rendering cost—not authoritative interaction, collision, navigation, destruction state, or AI.

## Layer type selector

| HLOD layer type | Use when | Primary tradeoff |
|---|---|---|
| Instancing | Source actors share a mesh/material pattern | Low build complexity; less consolidation than merging |
| Merged Mesh | A combined proxy can preserve adequate silhouette/material appearance | Fewer components/draw calls; asset and texture cost can grow |
| Simplified Mesh | Distant geometry can tolerate reduction | Best geometric reduction; longer builds and more visual risk |

## Authoring workflow

1. Identify distant content that must remain visually present after its source cell unloads.
2. Ensure source actors are Static and eligible to generate HLOD.
3. Create focused HLOD Layer assets by content behavior, not one universal layer.
4. Choose layer type and mesh/material settings from expected viewing distance and silhouette importance.
5. Set HLOD layer `Cell Size`, `Loading Range`, optional parent layer, and `Always Loaded` only when justified.
6. Assign actors or defaults deliberately.
7. Build HLOD setup, then proxies.
8. Compare source and proxy at the intended transition distance and in motion.
9. Profile draw calls, GPU time, memory, disk size, and transition hitches.

## Parameter effects

- Larger HLOD cells merge more source content into fewer, heavier proxies.
- Smaller HLOD cells improve granularity but increase actor/cell counts and transitions.
- Larger HLOD loading range preserves distant representation longer and raises residency.
- Parent HLOD layers create additional distance tiers; each tier adds build, storage, and validation cost.
- `Always Loaded` removes transition risk for that HLOD layer but creates permanent residency.

## UE 5.8 workflow additions

UE 5.8 adds region- and selection-scoped HLOD builds, comparison against source content, a perceptual-difference option for deciding whether an update is needed, and standalone HLOD improvements. Use scoped builds to shorten iteration, then run the complete reproducible build before release.

Features explicitly marked Experimental in the release notes—such as externalizing HLOD assets—must remain opt-in and receive cook/source-control/rollback validation.

## Commandlet

General form:

```text
UnrealEditor.exe <Project.uproject> <Map> -run=WorldPartitionBuilderCommandlet -Builder=WorldPartitionHLODsBuilder -AllowCommandletRendering -Unattended
```

Useful builder switches include:

- `-SetupHLODs`
- `-BuildHLODs`
- `-DeleteHLODs`

Add project source-control flags deliberately; do not let an unattended build unexpectedly check out or submit files.

## Validation failures

- **Proxy pops or changes silhouette**: adjust transition distance, simplification, materials, or layer grouping.
- **Proxy shows stale state**: rebuild after source changes and verify Data Layer/HLOD assignment.
- **Gameplay disappears with source cells**: gameplay was incorrectly assumed to live in the HLOD.
- **Memory rises after HLOD**: inspect proxy textures/materials, overlapping tiers, always-loaded settings, and source residency.
- **Build churn is excessive**: use 5.8 scoped iteration, stable grouping, and the perceptual-difference heuristic; still require a clean final build.

For rapid visual diagnosis, toggle HLODs with:

```text
wp.Runtime.HLOD 0
```

Restore the default after the comparison.
