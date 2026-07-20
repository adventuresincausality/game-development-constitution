# RPCs, reliability, and ordering

## RPC selector

| Need | Mechanism |
|---|---|
| Client requests authoritative action | Server RPC on client-owned actor/component |
| Server targets one owning client | Client RPC |
| Server sends transient effect to currently relevant clients | NetMulticast, sparingly |
| Durable state for late relevance/join | Replicated property, not RPC |
| Local-only presentation | Local function/event |

RPCs are unidirectional and do not return values. Return outcomes through replicated state or a
separate targeted response.

## Execution truths

- A client Server RPC runs remotely only when invoked through that client's owning connection;
  otherwise it is dropped.
- A server Client RPC targets the actor's owning client.
- A server NetMulticast runs on the server and clients for which the actor is currently relevant.
- A client-called NetMulticast runs only on the invoking client.
- RPCs require a replicated actor/component and valid ownership conditions.

## Reliable versus unreliable

Use reliable only when loss would break a low-frequency essential transition and the call rate is
strictly bounded. Reliable RPCs consume an ordered reliable queue; input spam can overflow it.

Use unreliable for frequent, replaceable, or cosmetic occurrences. Design behavior that remains
correct when unreliable calls are dropped.

Never send reliable RPCs from Tick or directly from unbounded button repeat. Prefer replicated
state when the current result matters more than each call.

## Ordering rules

- Do not rely on RPC call order across different actors.
- Reliable RPC ordering guarantees are scoped; do not infer a global event timeline.
- Multicast versus unicast ordering is not universally preserved.
- Separate RepNotify callback order is nondeterministic.
- If values must be interpreted atomically/coherently, group them in one struct or add an explicit
  sequence/state-machine contract.

Design receivers to be idempotent, tolerate missing obsolete events, and reject stale sequence
numbers when correctness requires it.

## Request payload rule

Send minimum intent, for example `TryInteract(Target)` or `TryEquip(ItemId)`. Do not send trusted
results such as new balance, damage dealt, final position, or permission flags. The server derives
and validates results from canonical state.
