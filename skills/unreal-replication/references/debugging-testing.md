# Debugging, testing, and profiling

## Minimum topology matrix

Test each feature in:

- dedicated server + two remote clients;
- listen server + remote client;
- late join after state changed;
- leave and re-enter relevancy;
- disconnect/reconnect or respawn where supported;
- two local players if split screen is supported.

Do not accept a listen-server-only pass; the host combines authority and local control and can
hide ownership defects.

## Adverse network matrix

Use UE network emulation, then turn it off after each test:

- latency (`NetEmulation.PktLag` or a named emulation profile);
- packet loss (`NetEmulation.PktLoss`);
- jitter/lag variance;
- packet duplication;
- packet reordering, when compatible with the chosen lag settings.

Verify input responsiveness, correction, reliable-queue health, stale-state rejection, and
eventual authoritative convergence.

## Network Insights

Launch instances with networking trace enabled, for example:

```text
-trace=net -NetTrace=1
```

For editor capture, add `-tracehost=localhost` when needed. Inspect:

- Packet Overview for timing and size;
- Packet Content for actors, properties, and RPCs;
- Net Stats for inclusive/exclusive byte cost;
- connection direction and selected connection;
- spikes during spawn, relevance changes, or UI-driven action spam.

## Useful commands

- `net.ActorReport`: active replicated actor information.
- `net.DumpRelevantActors`: actors relevant on the next update.
- `net.ListActorChannels`: open actor channels.
- `net.ForceOnePacketPerBunch`: stress ordering assumptions.
- `net.DormancyEnable 0/1`: isolate dormancy-related failures.
- `showdebug enhancedinput`: inspect input before blaming RPCs.

Confirm command availability/side effects in the 5.8 console-command reference before adding to
automation or shipping tooling.

## Failure tree

| Symptom | First checks |
|---|---|
| Server RPC never runs | caller owns actor, actor/component replicates, call made on client copy |
| Property only updates for owner | replication condition and actor relevancy/ownership |
| Works until actor sleeps | wake/flush before mutation, including component/subobject |
| Remote client misses effect | actor relevance at multicast time; should it be durable state? |
| Duplicate/late effect | RepNotify treated as a new event instead of current state |
| Character rubber-bands | server/client movement divergence; use CMC trace/saved moves |
| Bandwidth spike | high-frequency RPC/property, always-relevant actors, large collections |
| Only host works | local-control/authority branch conflated or wrong owner |

## Shipping gate

- Server remains correct with malicious/out-of-range/repeated client requests.
- All durable state reconstructs for late and re-relevant clients.
- Reliable RPC rate is bounded under worst input spam.
- Ordering assumptions survive forced packet/bunch stress.
- Network Insights meets server CPU and per-connection bandwidth budgets at target scale.
- Experimental/Beta system risks and rollback are documented.
