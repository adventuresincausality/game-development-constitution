# System selector and architecture

## Layer the problem

```text
World collision -> NavMesh/path graph -> Path following/movement
Stimuli/events -> Perception/memory -> Decision architecture
World candidates -> EQS/direct query -> chosen goal
Interaction opportunities -> Smart Object claim -> interactor behavior
Nearby moving agents -> RVO or Detour Crowd -> local velocity adjustment
```

A bug belongs to one layer until evidence shows otherwise. Do not “fix AI” by changing several layers together.

## Decision selector

| Need | Default |
|---|---|
| One or two simple modes | component/enum/timers/events |
| Reactive priorities, conditions, abort-to-higher-priority behavior | Behavior Tree + Blackboard |
| Explicit hierarchical state, transitions, sequences, shared task data | StateTree |
| Large data-oriented crowds | Evaluate Mass/StateTree architecture separately; ordinary Actor AI may not scale |

Behavior Tree and StateTree can coexist at a system boundary, but do not duplicate the same state machine in both. Assign one owner and exchange compact state/events.

## Query selector

- Direct known actor/location: use the known reference or subsystem lookup.
- Reachable random point: navigation query.
- “Best cover/attack/resource point” from multiple constraints: EQS.
- Reusable reservable activity: Smart Object query/claim.
- Long-range route: NavMesh pathfinding.
- Short-range agent avoidance: RVO or Detour Crowd.

## Authority model

In networked games:

- run authoritative AI controller, decisions, path requests, Smart Object claims, damage, and gameplay state on the server;
- replicate the Pawn and observable gameplay state/animation inputs as designed;
- keep client-only cosmetic prediction/presentation non-authoritative;
- do not replicate entire Blackboards or internal decision graphs by default.

Route replication details to `$unreal-replication`.

## Data ownership

- Controller owns decision/path-following concerns tied to possession.
- Pawn/Character owns body, movement component, collision, animation-facing state.
- Blackboard holds Behavior Tree working memory, not universal game truth.
- StateTree context/external data supplies required owner/world data; Parameters configure instances.
- Subsystems/game state own durable shared facts.
- Perception stores observations; gameplay systems decide what those observations mean.

## Update policy

Prefer event-driven updates for target acquired/lost, damage, state changes, path completion, Smart Object invalidation, and Blackboard changes. Use bounded timers/services for genuinely periodic sensing or scoring. Stagger expensive work across agents and treat reaction delay as a design variable, not merely a performance defect.
