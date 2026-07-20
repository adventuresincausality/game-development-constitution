# First-pass triage

## Establish the bound

1. Run a non-Debug build with the target device profile and resolution.
2. Disable smoothing/VSync/frame caps only when they conceal the bound; record the change.
3. Enter `stat unit`; add `stat unitgraph` and `stat raw` when spikes or filtering matter.
4. Reproduce the workload for a fixed interval.
5. Compare Frame with Game, Draw, RHIT, and GPU.

Interpretation:

| Pattern | Working classification | Next capture |
|---|---|---|
| Frame follows Game | game-thread bound | CPU/frame/bookmark; inspect Game thread |
| Frame follows Draw | render-thread bound | CPU/frame/gpu; inspect rendering submission |
| Frame follows RHIT | RHI/submission/driver bound | CPU/GPU plus platform graphics profiler |
| GPU stands alone near Frame | GPU bound | `profilegpu`, GPU trace |
| all appear below Frame | cap, wait, sync, present, task dependency | timing + context switch; inspect waits |
| rare raw spikes | hitch | bookmark and narrow hitch capture |

`stat unit` is directional, not final proof. Parallel CPU and GPU work, pipelining, idle time, VSync,
and asynchronous compute can make similar numbers misleading.

## Fast probes

- Lower primary resolution/screen percentage while holding content constant. A material GPU gain
  implicates pixel/resolution-scaled work; no gain does not prove a CPU bottleneck.
- Pause or freeze simulation to separate simulation-fed rendering changes from a stable frame.
- Disable one major feature with a supported CVar for diagnosis, then restore it. Treat the delta as
  attribution evidence, not automatically as the shipping fix.
- Use `stat sceneRendering`, `stat rhi`, `stat gpu`, `stat game`, `stat anim`, `stat slate`, or the
  subsystem stat only after the first bound is known.
