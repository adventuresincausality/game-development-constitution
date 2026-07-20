# Timestep, substepping, and async physics

Physics stability depends on maximum step size. UE's frame delta varies; large steps reduce contact and
constraint accuracy.

Project Settings -> Physics exposes:

| Setting | Effect |
|---|---|
| Max Physics Delta Time | caps simulated step; a lower cap may slow simulation during long frames |
| Substepping | divides a frame step into smaller solves; improves stability at CPU/bookkeeping cost |
| Max Substep Delta Time | smaller permits finer/more steps and higher cost |
| Max Substeps | caps catch-up work; beyond it, simulation cannot maintain the requested resolution |
| Tick Physics Async | moves simulation to async thread; Experimental in UE 5.8 |
| Async Fixed Time Step Size | fixed async step; Experimental and requires thread-safe integration |

Substepping, Substepping Async, and async physics are marked Experimental in UE 5.8 Project Settings.
Do not enable them merely because an asset jitters. First correct scale, penetration, collision shape,
constraint frames, mass ratios, and force application.

Collision callbacks are queued until the final substep and may include begin and end contact for the same
pair in one game frame. Make event consumers idempotent and state-based; do not award damage twice from
callback multiplicity.

Async/fixed simulation creates a game-thread/physics-thread boundary. Read/write physics state through
supported APIs and schedule authoritative forces/inputs at the intended physics step. Test 30/60/120 fps,
frame spikes, pause/time dilation, slow motion, and network resimulation.
