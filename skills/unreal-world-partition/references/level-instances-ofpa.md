# Level Instances, Packed Level Blueprints, and OFPA

## Choose the reusable unit

### Level Instance

Use for a repeated point of interest, building with gameplay actors, or standalone setup that benefits from in-context sublevel editing. Saving edits to the source propagates to every instance.

### Packed Level Blueprint

Use for a repeated, dense, static-mesh visual assembly. Packing replaces supported source meshes with an optimized actor representation. Arbitrary components are unsupported and can produce an incomplete packed actor; use a regular Level Instance when behavior or component support is uncertain.

## Runtime behavior in a World Partition main world

### Embedded Mode

- Default and recommended for OFPA Level Instances.
- At runtime, the Level Instance wrapper is discarded and its external actors are added to the parent World Partition grid.
- The Level Instance is primarily an editor authoring construct.
- Non-OFPA actors such as the instance's `AWorldSettings` do not survive embedding. Do not place runtime logic there.

### Level Streaming Mode

- Used when the instance cannot be embedded, including non-OFPA content.
- Loading the owning World Partition cell streams the associated Level.
- Each streamed Level adds runtime overhead. Avoid high densities of Level Instances that require this mode.

Outside a World Partition main world, Level Instances do not gain automatic World Partition streaming management.

## Data Layers

Actors inside an instance inherit the Data Layer assigned to the Level Instance Actor by default and may also have additional internal Data Layers. Use this for cohesive variants, but verify runtime state and HLOD behavior in every placed copy.

## OFPA boundary

One File Per Actor stores actor edits in external files so team members can change different actors without checking out the entire level. World Partition enables OFPA by default.

OFPA is an editor/source-control workflow. During cooking, actor content is embedded into the appropriate cooked level packages. Never write runtime code that depends on external actor file layout.

OFPA does not prevent:

- two people changing the same actor;
- logical conflicts between related actors;
- rename/move/delete coordination failures;
- broad churn from derived HLOD or generated content.

## Creation checklist

1. Select the cohesive actors.
2. Choose **Create Level Instance** for general assemblies or **Create Packed Level Actor** for supported static visual assemblies.
3. Enable External Actors when the instance should use OFPA.
4. Choose a stable pivot meaningful for placement and snapping.
5. Save under the project's naming and ownership conventions.
6. Test propagation to several instances.
7. Verify Embedded versus Level Streaming behavior in a cooked build.
8. Verify internal gameplay actors, Data Layers, HLODs, collision, navigation, and references.

Breaking a Level Instance replaces it with its original actors and cannot be undone through the Level Instance operation. Commit/save before destructive restructuring.
