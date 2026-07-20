# Architecture and lifecycle

## Ownership chain

Use this default chain:

```text
server-authoritative gameplay state
  -> replicated actor/component/property
  -> local player presentation model or Viewmodel
  -> local widget tree

widget interaction
  -> semantic local intent
  -> owning PlayerController/Pawn/component
  -> validated gameplay call or Server RPC
```

Widgets are local presentation objects. They must not own canonical inventory, health, match,
or save state. UI may predict presentation, but authoritative correction comes from gameplay.

## Local-player ownership

- Create player UI with an owning `PlayerController`/`LocalPlayer`.
- Prefer `AddToPlayerScreen` for player-specific full-screen UI; it targets the player's
  viewport section. Use `AddToViewport` only when the UI is intentionally viewport-global.
- In split screen, keep one root layout/presentation model per local player.
- Set the owning player on world-space Widget Components when per-player display matters.
- Never fetch player zero as a substitute for correct ownership.

## Widget lifecycle

- `OnInitialized`/`NativeOnInitialized`: one-time instance initialization.
- `Construct`/`NativeConstruct`: Slate construction; it may run multiple times when the widget
  leaves and re-enters the hierarchy.
- `Destruct`/`NativeDestruct`: release hierarchy-time subscriptions/resources, while allowing
  that the UObject can still exist.
- `NativeOnActivated`/`NativeOnDeactivated`: Common Activatable Widget screen-active lifetime.

Bind and unbind symmetrically. Guard against duplicate delegate registration if construction or
activation can repeat. Keep activation-time subscriptions scoped to activation.

## State placement

| State | Owner |
|---|---|
| Health, inventory, score, match phase | Replicated gameplay model |
| Display-formatted health, selected tab, sorted rows | Local presentation model/Viewmodel |
| Hover, focus, animation progress | Widget |
| Input mapping/profile | Local Player input subsystem/user settings |
| Screen stack and modal state | Local root UI/CommonUI layer manager |

## Failure checks

- UI works for client 1 but not client 2: inspect owning local player and player-zero lookups.
- callbacks duplicate after reopening: inspect Construct/activation bindings and unbind path.
- client UI changes but server state does not: route intent through an owned replicated actor.
- listen server appears correct: repeat on a remote client; host-local ownership can hide bugs.
