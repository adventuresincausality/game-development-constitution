# Relevancy, priority, frequency, and dormancy

## Relevancy

Relevancy is per connection: should this actor affect this viewer now? Use built-in settings before
overriding `IsNetRelevantFor`:

- `bAlwaysRelevant` for genuinely global actors only;
- `bOnlyRelevantToOwner` for private actors such as a PlayerController;
- `bNetUseOwnerRelevancy` for actors that should follow their owner;
- `NetCullDistanceSquared` for distance-based relevance where enabled.

Dynamically spawned replicated actors can be destroyed on a client when they become irrelevant
and recreated when relevant again. Durable state must survive that transition through replication,
not a one-shot multicast.

## Update frequency and priority

- `NetUpdateFrequency` determines how often an actor is considered for updates in Generic
  Replication.
- Priority decides which actors replicate first when a connection saturates; elapsed time since
  last update contributes, preventing simple starvation.
- Do not set every actor always relevant or high frequency.
- Change frequency/priority only from measured responsiveness and bandwidth evidence.

## Dormancy

Use dormancy for actors that replicate state but remain unchanged for long periods. Epic calls it
one of the most impactful server replication optimizations.

Procedure:

1. Map-placed initially static actor: start with `DORM_Initial` when appropriate.
2. Runtime/static actor: use `DORM_DormantAll` when all connections can sleep it.
3. **Before** changing replicated actor/component/subobject state, call `FlushNetDormancy`,
   `ForceNetUpdate`, or set `DORM_Awake` as the update pattern requires.
4. For continuous changes, wake with `SetNetDormancy(DORM_Awake)` and return to
   `DORM_DormantAll` after state settles.
5. Do not return a once-awakened map actor to `DORM_Initial`.

Blueprint actor replicated-property writes may flush automatically, but replicated ActorComponent
Blueprint properties do not have the same guarantee. Keep the explicit wake-before-mutate rule.

## Diagnostic sequence

If a property updates only sometimes:

1. Confirm mutation occurs on the server.
2. Confirm the actor/component/property replicates.
3. Confirm the connection owns/is relevant as required.
4. Check dormancy and wake order.
5. Check condition and update frequency.
6. Inspect the packet/property in Network Insights.

Use `LogNetDormancy`, `net.DumpRelevantActors`, and `net.ActorReport` for targeted evidence.
