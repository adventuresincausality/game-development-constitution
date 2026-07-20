# Replication patterns

## Networked door

1. Server owns `bIsOpen` (RepNotify) and interaction rules.
2. Client sends `ServerTryInteract(Door)` through its owned Pawn/Controller.
3. Server validates range, line of sight, permissions, and current state.
4. Wake the dormant door before mutation.
5. RepNotify sets door presentation from current state.
6. Return the door to dormancy after it settles.

Do not multicast the only open event; a late-relevant client needs durable state.

## Health and UI

1. Server applies damage and owns health.
2. Health replicates/uses GAS attribute replication.
3. RepNotify/attribute delegate updates a local presentation model.
4. Local HUD pushes the display change.
5. Death state is authoritative; cosmetic hit/death cues may be transient.

Route GAS details to `$unreal-gas-attributes-effects` and UI details to
`$unreal-umg-commonui`.

## Inventory

- Server owns the collection and validates add/remove/equip/drop.
- Client submits item identity and requested verb, never a new inventory total.
- Use a Fast Array when item-level delta replication and callbacks justify it.
- Use owner-only conditions for private inventory; replicate public equipped presentation
  separately when other clients need it.
- UI selection is local and keyed by stable item identity.

## Projectile selector

- Important persistent/colliding projectile: server-spawned replicated Actor with an appropriate
  movement/prediction model.
- High-volume cosmetic tracer: local cosmetic driven from an authoritative hit/result event.
- Never accept a client claim that a hit occurred without server validation or the game's
  deliberate lag-compensation model.

## Character movement

Use `ACharacter` + `UCharacterMovementComponent` network prediction/correction for standard
characters. Do not send per-tick transform RPCs or use client `SetActorLocation` as prediction.
Route custom movement serialization to `$unreal-character-movement`.

## Match state placement

- `GameMode`: server-only rules and authority.
- `GameState`: replicated match-wide state clients need.
- `PlayerState`: replicated player state that should outlive Pawn possession and be visible as
  designed.
- `PlayerController`: owner-only control/request channel; each client gets its own controller.
- `Pawn/Character`: current possessed avatar and movement/gameplay state.

Choose placement from lifetime, visibility, and ownership—not convenience.
