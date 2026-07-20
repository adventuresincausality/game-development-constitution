# Debugging and profiling

## Symptom ladder

| Symptom | Inspect first | Then |
|---|---|---|
| Nothing renders | system/component active, emitter enabled, spawn count | bounds, renderer binding, compile errors |
| Disappears at angle/distance | fixed bounds | scalability/culling, LOD/platform |
| Particles at origin | parameter binding and coordinate space | invalid data interface/source |
| Pooled effect keeps old color/target | reset contract | persistent age/emitter state |
| GPU collision fails off-screen | collision representation | switch method or design fallback |
| Effect never ends | loop/lifetime/completion | owner cleanup, Auto Deactivate |
| Hitch on first use | compilation/PSO/assets | prewarm/readiness strategy and packaged capture |
| Frame time spikes during bursts | system count and spawn multiplication | simulation, renderer, overdraw, collision |

## Debug procedure

1. Isolate one system and disable all but one emitter.
2. Check compile messages and parameter bindings.
3. Use attribute/parameter watch and Niagara Debugger (Tools -> Debug -> Niagara Debugger).
4. Visualize bounds and collision/debug drawing where supported.
5. Recreate the expected maximum system count and camera overlap.
6. Use the Debug Overview Performance view for system/game-thread comparison.
7. Inspect Shader Complexity for translucent overdraw and use GPU/CPU profiling for actual timing.
8. Compare one change under the same capture conditions.

Track system/emitter instance counts, active particles, tick/simulation time, render cost, material
overdraw, collision/events, and memory. A cheap simulation can still be expensive to render; a cheap
sprite can still become costly through overlap, sorting, lights, or full-screen coverage.
