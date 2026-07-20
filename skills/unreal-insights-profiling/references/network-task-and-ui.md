# Network, task graph, and UI traces

## Networking Insights

Start each relevant client instance with:

```text
-trace=net -NetTrace=1
```

When tracing an editor instance to a separate local Insights store, add `-tracehost=localhost` as
required. Choose verbosity greater than zero and raise it only when the missing packet detail justifies
the overhead.

Inspect packet sizes/timeline, connection direction, object/property/RPC content, inclusive/exclusive
Net Stats, frequency, bursts, and retransmission/transport context. Optimize semantic frequency and
payload ownership before compressing an already-wrong replication pattern.

## Task Graph

Use:

```text
-trace=default,task
```

Inspect task prerequisites, worker occupancy, critical path, parent waits, queue delay, and task size.
Do not split work into smaller tasks when scheduling overhead already dominates; do not merge tasks
when one serial task blocks the frame and parallelism is available.

## UI and Slate

Triage with `stat slate`, `stat ui`, and widget-specific tools. Enable the built-in Slate Insights
plugin and capture with `-trace=slate`. In Slate Frame View, correlate invalidation reasons, update
reasons, layout/prepass, paint, volatility, draw-element growth, and Game/Render thread cost. Repeated
full-tree invalidation or per-frame binding work is usually a structural issue; confirm it in the trace
before adding caches or invalidation panels.
