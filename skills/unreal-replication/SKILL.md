---
name: unreal-replication
description: Design, implement, optimize, test, and debug server-authoritative multiplayer replication in Unreal Engine 5.8. Use for authority, roles, ownership, owning connections, replicated actors/components/properties, RepNotify, RPCs, relevancy, priority, dormancy, conditions, Fast Arrays, replicated UObjects/subobjects, Generic Replication, Replication Graph, Iris, bandwidth, ordering, prediction boundaries, Network Insights, packet emulation, or multiplayer UI state.
---

# Unreal 5.8 Replication

## Ownership boundary

This skill owns general Actor/property/RPC authority, ownership, relevancy, dormancy, and state
transport. Prediction remains subsystem-owned: route Character saved moves/root motion to
[`unreal-character-movement`](../unreal-character-movement/SKILL.md), network physics/ragdolls to
[`unreal-chaos-physics`](../unreal-chaos-physics/SKILL.md), and ability prediction to
[`unreal-gas-abilities`](../unreal-gas-abilities/SKILL.md).

## Select the replication system

- Start with **Generic Replication**, UE 5.8's default, unless measured scale requires another
  system.
- Evaluate **Replication Graph** for many replicated actors and connections. It is Beta and does
  not currently support split screen on console builds.
- Evaluate **Iris** for its filtering/prioritization/scalability architecture only with an
  explicit migration and compatibility plan. UE 5.8 still marks Iris Experimental and Generic
  Replication remains the default.
- Do not combine selection with gameplay prediction. Replication moves authoritative state;
  prediction is subsystem-specific behavior.

Read [`references/system-selector.md`](references/system-selector.md) before choosing.

## Design the network contract first

For every multiplayer action, state:

1. Which server object owns the canonical state?
2. Which client owns the connection allowed to request it?
3. What untrusted intent does the client submit?
4. What does the server validate and execute?
5. Which state persists for late join/relevancy and therefore uses properties?
6. Which transient occurrence uses an RPC or local reaction?
7. Which connections need the result, at what frequency and precision?
8. What may be predicted locally, and how is it reconciled?

Read [`references/authority-ownership.md`](references/authority-ownership.md).

## Choose state versus event

- Use replicated properties/RepNotify for durable state and late-joining/re-entering clients.
- Use Server RPCs for client intent on an actor/component owned by that client's connection.
- Use Client RPCs for targeted transient messages to the owning client.
- Use NetMulticast sparingly for transient effects visible to currently relevant clients.
- If every occurrence matters, do not encode it as repeated writes to one replicated scalar.
- Keep related values that require coherent handling in one replicated struct; OnRep order across
  separate properties is not deterministic.

Use [`references/properties-repnotify.md`](references/properties-repnotify.md) and
[`references/rpcs-ordering.md`](references/rpcs-ordering.md).

## Implement in dependency order

1. Set actor/component replication and server-only spawn/destruction.
2. Establish owner and owning connection; do not confuse ownership with authority.
3. Define replicated state, conditions, RepNotify handlers, and state invariants.
4. Define minimal client-intent Server RPCs with server validation/rate limits.
5. Add relevancy, priority, update frequency, and dormancy only from real requirements.
6. Use registered replicated subobjects and Fast Arrays for the relevant data shape.
7. Reuse CMC, GAS, or another subsystem's prediction rather than inventing generic prediction.
8. Test dedicated server and remote clients under lag, loss, jitter, reordering, reconnect, and
   relevancy transitions.
9. Capture Network Insights before optimizing bandwidth or selecting a scalable driver.

## Required answer format

Return:

1. **Authority/ownership table** per actor and action.
2. **Network contract**: client intent, server validation, canonical mutation, client result.
3. **Property/RPC/condition choice** with exact C++/Blueprint actions.
4. **Relevancy, dormancy, frequency, and scale strategy**.
5. **Prediction/reconciliation owner**, if any.
6. **Network test matrix and trace-based performance check**.

Do not invent ownership, delivery/order guarantees, maturity status, or bandwidth savings.

## Hard rules

- The server owns gameplay truth; client parameters are requests, never proof.
- `HasAuthority`/network role is not the owning connection.
- A client can call a Server RPC only through an actor/component it owns through its connection.
- Spawn and destroy replicated gameplay actors on the server.
- Never use reliable RPCs for high-frequency input/tick traffic.
- A client-called NetMulticast executes only on that invoking client.
- Do not rely on ordering across actors or between separate RepNotifies.
- Wake/flush a dormant actor **before** mutating replicated state.
- Replicate gameplay state, not widgets; local UI observes replicated models.
- Do not manually replicate Character transforms instead of CMC network movement.
- Profile before adopting Replication Graph, Iris, custom relevancy, or custom priority.

Read [`references/relevancy-dormancy.md`](references/relevancy-dormancy.md),
[`references/components-subobjects-fastarrays.md`](references/components-subobjects-fastarrays.md),
[`references/patterns.md`](references/patterns.md), and
[`references/debugging-testing.md`](references/debugging-testing.md). See
[`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
