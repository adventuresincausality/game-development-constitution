# Authority, role, and owning connection

## Keep the concepts separate

| Concept | Answers |
|---|---|
| Authority / local role | Which machine owns this actor's canonical replicated copy? |
| Owner | Which Actor is this actor's UE owner? |
| Owning connection | Which client connection is reached through the owner chain to a PlayerController? |
| Local control | Is this Pawn/Controller controlled by a local player on this machine? |
| Relevancy | Should this connection currently receive this actor? |

Network role is not ownership. A server has authority over replicated gameplay actors, while a
client may own a connection to its PlayerController/Pawn and therefore be permitted to call
Server RPCs through that chain.

## Client request path

```text
local input/UI
  -> locally owned PlayerController, Pawn, or owned replicated component
  -> Server RPC carrying minimal intent
  -> server validates current canonical state, range, permissions, rate, and target
  -> server mutates canonical state
  -> properties/RPCs replicate the result
```

Do not put Server RPCs on arbitrary world actors and expect clients to call them. Route the
request through an owned actor, then have server code interact with the target.

## Validation checklist

Validate on the server:

- requesting connection may perform the action;
- actor and target still exist and are relevant to the rule;
- distance, line of sight, cooldown, resources, and state preconditions;
- numeric values are bounded and derived server-side where possible;
- request rate/sequence is acceptable;
- the request cannot select objects hidden from that player;
- repeated or reordered requests are safe/idempotent where needed.

`WithValidation` is an available C++ RPC mechanism, but server gameplay logic must still enforce
rules regardless of where validation is written.

## Spawn and destruction

- Spawn replicated gameplay actors on the server.
- Destroy them on the server.
- A client-spawned actor is local to that client unless it participates through another
  authoritative mechanism; setting Replicates on the client copy does not create the server copy.
- Cosmetic local actors are allowed when they have no gameplay authority.

## UI boundary

Widgets are not replicated actors and should not own RPCs. A widget emits intent to its owning
local controller/pawn/component. It observes replicated state through a presenter/Viewmodel.
