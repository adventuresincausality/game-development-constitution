# Hitches, loading, and garbage collection

## Capture a hitch

1. Set an explicit hitch threshold for the target experience; use `stat hitches` or `stat dumphitches`
   for fast detection where useful.
2. Display `stat unitgraph`, toggle `stat raw`, and reproduce the hitch.
3. Add bookmarks immediately before/after the action that triggers it.
4. Trace `cpu,frame,bookmark` plus only the suspected channel: `loadtime`, `file`, or `stats`.
5. Inspect the exact slow frame and the preceding work; asynchronous requests often cause a later wait.

## Symptom routing

| Hitch shape | Inspect |
|---|---|
| first use of asset/effect | async load, shader/PSO readiness, construction, audio decode |
| periodic spike | GC, streaming update, autosave/telemetry, scheduled subsystem |
| entering region | World Partition/level/texture/Nanite streaming and file IO |
| mass spawn/despawn | object construction, registration, physics/nav, GC pressure |
| camera cut | visibility burst, VSM pages, streaming, post/upscaler history |

For loading, correlate Asset Loading events with file reads and Game-thread waits. A long async load is
not necessarily a hitch unless the critical thread blocks for it or the workload saturates IO/CPU.

For GC, inspect allocation/object churn before the collection, collection duration, unreachable-object
processing, and post-GC work. Reduce avoidable churn or distribute work; do not merely raise the GC
interval if that creates a larger eventual pause or excess memory.
