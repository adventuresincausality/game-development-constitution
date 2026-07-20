# Behavior Trees and Blackboards

## Execution model

UE Behavior Trees are event-driven. Search/execution proceeds left-to-right and top-down; left branches represent higher priority. Blackboard observers and decorators can trigger reevaluation and abort running work.

## Asset/data contract

- Blackboard keys are typed working memory: target actor, last-known location, state flags, timestamps, current Smart Object handle wrapper, or requested action.
- Use a Blackboard parent only for genuinely shared keys.
- Keep durable/shared game truth in the owning gameplay system, not only in a Blackboard.
- Name keys semantically and distinguish observation (`SeenActor`) from conclusion (`CombatTarget`).

## Node responsibilities

- **Composite**: controls branch traversal.
- **Decorator**: gates execution and optionally observes changes/aborts branches.
- **Task**: performs one bounded action and reports success/failure/in-progress.
- **Service**: periodically updates data while its branch is active.

## Observer aborts

- `Self`: abort the decorated running branch when its condition fails.
- `Lower Priority`: abort branches to the right when this higher-priority condition becomes valid.
- `Both`: applies both behaviors.

Use the smallest abort scope that expresses intent. Broad aborts create churn and can repeatedly cancel expensive actions.

## Task contract

1. Validate controller, pawn, keys, and required subsystem.
2. Start the bounded action.
3. If latent, retain only the handles/state required for completion and return In Progress.
4. Complete exactly once with success or failure.
5. On abort, cancel delegates/timers/moves/abilities/claims and release resources.
6. Prevent stale callbacks from finishing a newer task instance.

Prefer native Tasks/Services in measured hot paths; Epic notes Blueprint versions are less performant.

## Services

Set an interval and random deviation from reaction needs and population budget. Do not use a service as disguised per-frame Tick. Prefer Perception/Blackboard events for facts that already publish changes.

## Common architecture

```text
Selector
  Combat (Target valid) [abort lower priority]
    Sequence: choose position -> move -> execute action
  Investigate (LastKnownLocation set)
    Sequence: move -> search -> clear
  Patrol
    Sequence: choose point -> move -> wait
```

Keep sensing outside the tree where possible; the tree reacts to well-defined working memory.

## Debug acceptance

- live Behavior Tree shows the expected active branch;
- Blackboard values change at the responsible event;
- aborts cancel latent work and release claims;
- every task result is handled;
- no high-priority condition causes search/restart oscillation;
- worst-case agent count stays inside the AI frame budget.
