# Ability lifecycle

## Configuration checklist

- Instancing: non-instanced, instanced per actor, or instanced per execution.
- Net execution: local only, local predicted, server initiated, or server only.
- Activation trigger: explicit/spec handle, Gameplay Event, effect/tag trigger, or input.
- Ability/state tags: activation required/blocked, cancel, block, owned while active.
- Cost and cooldown Gameplay Effects.
- Target acquisition/validation.
- Cancellation and terminal cleanup.

Use an instanced policy when Blueprint graphs, member variables, latent work, or per-run state
are needed. Non-instanced abilities operate on the class default object and cannot safely
hold mutable execution state.

## Ordered activation flow

1. Input/gameplay event requests `TryActivateAbility` or a project wrapper.
2. GAS evaluates availability, tags, cost/cooldown checks, and custom activation checks.
3. `ActivateAbility` starts only after activation succeeds.
4. Validate target data at the authority boundary.
5. Call `CommitAbility` at the designed commitment point. If it returns false, terminate.
6. Start Ability Tasks for montage, waits, input, events, or targeting.
7. Apply authoritative Gameplay Effects and other gameplay results.
8. Route cosmetic feedback through Gameplay Cues or presentation systems.
9. On completion, interruption, cancel, invalid target, or task failure, clean up and call
   `EndAbility` with the correct canceled flag.

`CallActivateAbility` does not perform the normal availability check itself; do not use it
as the usual input entry point.

## Commit point

Commit determines when cost and cooldown become real. Examples:

- Immediate dodge: commit after direction and movement feasibility checks.
- Aimed spell: commit on confirm, not when targeting UI opens, unless design says aiming
  itself spends the resource.
- Melee attack: commit at accepted activation or at a montage-defined point, consistently.
- Channel: initial cost on start; periodic cost through a deliberate repeating effect/task.

Avoid applying gameplay before a failed commit. Avoid accidentally charging on canceled
target selection.

## Cleanup checklist

- stop or let GAS terminate active Ability Tasks;
- remove non-effect temporary state and input locks;
- clear spawned targeting helpers owned by the run;
- stop animation only when this ability owns it;
- end exactly once on every branch.
