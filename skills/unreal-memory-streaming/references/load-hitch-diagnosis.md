# Load and streaming hitch diagnosis

1. Mark the player action/region entry and capture Timing plus `loadtime`/`file` channels as needed.
2. Inspect Asset Loading Insights package order, async priorities, serialization, and Game-thread waits.
3. Correlate file IO, decompression, UObject creation, PostLoad, component registration, render/physics
   resource creation, PSO compile, and GC.
4. Determine whether work is synchronous, async but completed too late, or async followed by a blocking
   readiness phase.
5. Move/preload only the causal work, increase lead time, or amortize creation across frames.

| Symptom | First evidence |
|---|---|
| first pickup/effect hitches | package load, component registration, PSO/decode readiness |
| entering region hitches | World Partition/cell activation, file IO, texture/Nanite demand |
| memory spike then GC hitch | transient allocations, object churn, retained load handles |
| asset says loaded but appears late | render/physics resource or PSO readiness |
| cold run hitches, warm run does not | OS/driver/cache-sensitive IO or compilation |
| async request still stalls | late request, completion on critical path, sync dependency inside PostLoad |

Never “fix” by hiding the trace interval behind a shorter loading screen. If blocking is required, own it
with a real loading transition and an explicit complete/timeout/failure contract.
