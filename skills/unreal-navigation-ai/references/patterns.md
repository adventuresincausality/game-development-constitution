# Common navigation and AI patterns

## Patrol -> investigate -> combat

- Perception event stores current stimulus and last-known location/time.
- Behavior Tree priorities or StateTree transitions own mode selection.
- Patrol follows authored points/spline goals through NavMesh, not direct spline locomotion through obstacles.
- Investigate moves to last-known location, performs a bounded search, then clears/ages state.
- Combat chooses an action/position; interruption aborts lower-priority movement cleanly.

## Ranged cover selection

1. Generate a bounded candidate set around the querier/target.
2. Filter unreachable, exposed, occupied, too-close/far, or invalid-team candidates.
3. Score path cost, line of sight, distance band, spacing, and tactical direction.
4. Choose best or controlled random top percentile.
5. Reserve the position if multiple agents compete.
6. Revalidate on arrival and use a cooldown before re-querying.

EQS finds a candidate; it does not own the combat state, path lifecycle, or reservation by itself.

## Door/ladder/jump

- Nav Link expresses connectivity and direction.
- Link traversal task owns door claim/open, alignment, animation/root motion, collision changes, and resume.
- Abort closes/releases/restores state safely.
- The destination cell and landing navigation must be loaded before traversal.

## Smart Object activity

- Query a bounded set at a modest interval/event.
- Claim before committing movement.
- Move to the Slot transform with appropriate filter.
- Use returned Behavior Definition to execute the interactor-owned behavior.
- Release in one cleanup path shared by success/failure/abort/death.

## Large-world agents

- Server keeps only design-required agents fully simulated.
- Streaming and AI significance/lifetime policies agree.
- Static/streamed NavMesh is preferred; use dynamic/invoker generation only where world changes require it.
- World Partition NavMesh remains Experimental and needs a fallback/shipping review.
- Durable world state survives actor unload; controllers/tasks/claims do not assume cells remain loaded.

## Crowd through a choke point

- Use one avoidance system.
- Spread destinations and approach slots.
- Keep agent radius/corridor valid; do not shrink NavMesh agent settings below bodies.
- Add lanes, queue Smart Objects, token/capacity control, or encounter scheduling when geometry cannot support simultaneous flow.
- Stress above expected population and record deadlocks, arrival time, and CPU.

## Acceptance for any behavior

- correct under success, failure, abort, unload, and death;
- explainable in debugger from observation through action;
- no authoritative client-only decisions;
- deterministic where design requires it and varied where repetition should be hidden;
- meets reaction-quality and frame budgets at worst population on target hardware.
