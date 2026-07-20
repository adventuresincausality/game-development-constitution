# World Partition integration

## Ownership model

Treat the systems as separate layers:

- PCG decides **what** data/content to generate.
- PCG partition/hierarchy decides **where and at what generation grid** work executes.
- World Partition decides **which persisted actors/cells stream**.
- Data Layers decide **which authored/runtime content set is loaded or activated**.
- HLOD decides **what distant proxy represents unloaded source content**.

Do not assume PCG grid size and World Partition runtime cell size are the same setting or must
match one-to-one.

## Persistent generated content

1. Choose partitioned/hierarchical editor generation for the large domain.
2. Assign the source PCG actor/component to the intended Data Layer and HLOD Layer.
3. Configure Spawn Actor/Create Target Actor Data Layer Source Type intentionally. `Self` inherits
   source-component Data Layers.
4. Generate and inspect actor/Data Layer/HLOD assignment.
5. Build HLODs after stable generation.
6. Cleanup and regenerate after grid changes; stale partition actors are not evidence of the new
   configuration.
7. Run the PCG World Partition Builder commandlet from a clean source state for reproducibility.

PCG-generated actors assigned through the source asset inherit matching Data Layer/HLOD ownership
according to the documented integration path.

## Runtime generation in a partitioned world

- Define runtime PCG generation sources independently from World Partition streaming sources.
- Set generation and cleanup radii by PCG grid level.
- Ensure World Partition cells and required source data load early enough for generation.
- Prewarm teleport destinations before player arrival; verify both streaming completion and PCG
  generation completion rather than assuming one implies the other.
- Keep gameplay-critical collision/nav content persisted or use a runtime path that explicitly
  supports and finishes it before access.

## Data Layer transitions

If PCG content follows a Runtime Data Layer:

1. Server/gameplay authority changes the Data Layer state in networked play.
2. Separate Loaded from Activated behavior.
3. Test generated content cleanup/reappearance through state changes.
4. Measure the burst; activating many assets/layers together can degrade streaming performance.

Route detailed streaming, Data Layer, and HLOD configuration to `$unreal-world-partition`.
