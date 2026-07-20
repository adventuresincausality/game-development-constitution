# Debugging, performance, networking, and testing

## Diagnose in order

1. **Authority/lifetime** — correct server/controller/pawn, possessed and initialized.
2. **Nav data** — bounds, collision, agent/NavData selection, generation mode, loaded tile.
3. **Path request** — valid projected start/goal, filter, partial-path policy, result.
4. **Path following/movement** — movement mode, speed, collision, root motion, avoidance, link.
5. **Observation/data** — Perception stimulus, Blackboard/StateTree values and age.
6. **Decision** — active BT branch/StateTree path and transition/abort cause.
7. **Action cleanup** — move, task, ability, montage, timer, delegate, claim.
8. **Budget** — number/frequency/cost of agents, queries, traces, rebuilds, and replication.

## Gameplay Debugger

During play, press apostrophe (`'`) while looking at an AI to select/debug it.

- Numpad `0`: NavMesh.
- Numpad `1`: general AI/controller/path following.
- Numpad `2`: Behavior Tree and Blackboard.
- Numpad `3`: EQS when available in the current configuration.
- Numpad `4`: Perception.

Use `show Navigation true/false` for runtime NavMesh visualization. StateTree uses its asset Debugger and trace-backed instance timeline.

## Performance capture

Record:

- active/sleeping AI count and distance bands;
- game-thread time by controller, BT/StateTree task/service/evaluator;
- path requests and path time percentile;
- dynamic tile rebuild count/time and dirty causes;
- Perception listeners/sources/stimuli and sight trace load;
- EQS queries, candidates/tests, duration, and failures;
- Smart Object searches/claims/contention;
- crowd neighbor/sample cost;
- replication bandwidth and Character Movement corrections.

Use Unreal Insights and before/after captures on target hardware. Stagger periodic work and apply significance/distance-based update policies only when behavior quality remains acceptable.

## Network rules

- Server owns AI decisions, authoritative navigation, Smart Object reservation, and gameplay effects.
- Clients receive replicated Pawns/state and render presentation.
- Test dedicated server, late join, relevancy loss/regain, dormancy, possession, server travel, and packet impairment.
- A client debug overlay may not contain server-only internal data unless the Gameplay Debugger category replicates it.

## Required failure tests

- unreachable/invalid destination and partial path;
- runtime obstacle and NavMesh rebuild latency;
- agent knocked off mesh or movement mode changes;
- target dies/unloads/becomes irrelevant;
- task/state abort during MoveTo, montage, ability, or Smart Object use;
- claim contention and invalidation;
- Perception gain/loss/expiration and late stimulus;
- EQS returns none or result becomes invalid;
- streamed cell/NavData unload;
- crowd congestion above configured maximum.

Acceptance requires bounded recovery—no per-frame retry loops, leaked claims/delegates, zombie moves, or silent permanent stalls.
