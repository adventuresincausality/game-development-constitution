# Replicated properties and RepNotify

## Use properties for state

Choose a replicated property when a client becoming relevant later must learn the current truth:

- health, score, inventory contents, team, door open/closed state;
- match phase and timestamps;
- equipped item or persistent ability state.

On the server, mutate the canonical property. Clients apply received values; client edits to a
replica are not authoritative and may be overwritten.

## C++ setup

1. Set the actor to replicate.
2. Mark the property `UPROPERTY(Replicated)` or `UPROPERTY(ReplicatedUsing=OnRep_Name)`.
3. Override `GetLifetimeReplicatedProps` and call `Super`.
4. Register with `DOREPLIFETIME`, a condition macro, or lifetime params.
5. Put client-side reaction in the RepNotify; it may accept the previous value.

Use Blueprint Replicated/RepNotify settings for Blueprint actors, but keep the same ownership and
state rules.

## RepNotify design

- Treat RepNotify as "received/applied current replicated state," not proof that the event just
  happened in the viewer's timeline.
- Make presentation reactions idempotent.
- If server and clients require the same reaction, put it in a shared non-RPC function and call it
  from the authoritative mutation path and RepNotify as appropriate. Do not assume all C++ and
  Blueprint RepNotify server behaviors are identical.
- Use the previous-value parameter when transition logic needs old versus new.
- Put values requiring coherent ordering in one replicated struct. Epic states there is no
  deterministic order between OnReps for separate variables.

## Conditions

Use the narrowest correct built-in condition:

- `COND_OwnerOnly`: private owner state;
- `COND_SkipOwner`: remote-only correction/presentation when owner predicts;
- `COND_InitialOnly`: immutable setup state after initial replication;
- `COND_SimulatedOnly` / `COND_AutonomousOnly`: role-specific state;
- `COND_Dynamic` or custom active override only when simpler static conditions cannot express it.

Conditions are per registered property layout; avoid per-instance assumptions in lifetime setup.

## State versus occurrence

Repeated writes can collapse to the latest received state. If every occurrence matters, use an
appropriate event/RPC, counter/sequence, or replicated collection—not a bool toggled too quickly.
For a chest, replicate `bIsOpen` for durable state; emit/derive the opening effect only when its
timing is still meaningful.

## UI hookup

RepNotify or a gameplay delegate updates a local presenter/Viewmodel, which pushes into widgets.
Never bind UI to poll replicated properties every frame.
