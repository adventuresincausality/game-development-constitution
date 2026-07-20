# Debugging, validation, and profiling

## Graph-debug procedure

1. Enable node Debug on the earliest suspicious stage.
2. Inspect the Data View and Attributes List: count, bounds, density, transforms, seed, attributes.
3. Move the debug point downstream one stage at a time.
4. Disable spawners while validating data.
5. Use graph/node profiling to identify CPU cost; use Unreal Insights for system-level cost.
6. Cleanup and regenerate to eliminate stale output.

## Runtime tools

- `pcg.RuntimeGeneration.EnableDebugOverlay 1`: scheduler/runtime overview.
- `pcg.GraphExecution.DebugDrawGeneratedCells 1`: sources, generating cells, grid/coordinates.
- `pcg.RuntimeGeneration.EnableDebugging`: verbose scheduler logging.
- `pcg.RuntimeGeneration.Refresh`: cleanup and schedule regeneration.
- `pcg.RuntimeGeneration.Enable`: freeze/enable runtime generation.
- `pcg.GPU.FuzzMemory`: expose uninitialized GPU output assumptions.

Debug overlays are not generally available in Shipping and may differ by build configuration.

## Validation matrix

- empty input and zero points;
- smallest and largest bounds;
- steep/vertical/overhanging surfaces;
- overlapping exclusion volumes and Data Layers;
- seed zero, repeated seed, and changed seed;
- missing asset/table row/soft reference;
- cleanup -> regenerate -> reload -> cook;
- source control clean checkout and commandlet generation;
- target platform scalability/feature-level switches;
- fast traversal/teleport and multiple runtime sources;
- maximum shipping density plus HLOD/nav/collision build where required.

## Common failures

| Symptom | First check |
|---|---|
| Points exist but nothing spawns | mesh/actor selector attribute, bounds, node enabled, output path |
| Same random choice repeats | duplicated seeds; place `Mutate Seed` at intentional branch |
| Content leaks into roads/buildings | exclusion input/bounds and Difference mode/order |
| Graph regenerates constantly | tracked actor/component changes or circular dependencies |
| Runtime pop-in | generation radius, bounds modifier, scheduler budget, traversal speed |
| Cleanup leaves stale actors | generation ownership, partition actors, grid change cleanup sequence |
| GPU path slower | transfers, small data, compute-graph fragmentation, preparation cost |
| Packaged result differs | editor-only input/node, unsupported platform path, unbuilt persistent output |

## Performance record

Record point count, spawned instance/Actor count, CPU node times, GPU execution/memory, generation
latency percentile, cache memory, cleanup time, streaming overlap, and final render cost. PCG graph
time alone does not include the lifetime cost of what it spawned.
