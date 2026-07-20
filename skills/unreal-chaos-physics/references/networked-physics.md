# Networked physics

The server remains authoritative. Select replication per Actor interaction pattern:

| Mode | Use | Tradeoff |
|---|---|---|
| Default | simple replicated simulated props with limited local interaction | legacy correction overwrites local alterations; interactions degrade |
| Predictive Interpolation | server-authoritative props that clients predictably push/interact with | better local interaction, cheaper/less network intensive than Resimulation |
| Resimulation | physics Pawns/Actors needing full local prediction and authoritative replay | input/state history, rewinds/replays, higher CPU/memory/network complexity |

Default mode applies velocity/correction toward the forward-predicted server state. Predictive
Interpolation includes local velocity and correction timing so predicted interactions can survive.
Resimulation runs the client ahead and rewinds/replays when authoritative state diverges.

For Resimulation, implement the low-level Network Physics Component in C++:

1. Define serializable input and state structures.
2. Capture player input at physics-step cadence.
3. Apply identical deterministic-enough forces/actions during prediction and replay.
4. Cache bounded history for latency/jitter budget.
5. Compare authoritative state and trigger resimulation/correction through the framework.
6. Separate cosmetic events from replayable authoritative effects to avoid duplicates.

UE 5.8 supports Predictive Interpolation and Resimulation simultaneously on different Actors and adds
networked Actions. Inspect `np2.PredictiveInterpolation`, `np2.Resim`, and `p.Resim` console families for
current tuning options rather than copying stale CVar recipes.

Test packet loss, jitter, latency, low send rate, high velocity, collisions between modes, ownership
transfer, sleep/wake, spawn/despawn, and correction visibility.
