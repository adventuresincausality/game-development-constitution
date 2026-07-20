# Architecture use cases

## Reusable interaction

- `BPI_Interactable`: contract such as `CanInteract` and `Interact`.
- Player interaction component: traces, holds the current target, invokes the interface.
- Door/pickup/terminal actors: implement their own response.
- UI: subscribes to target-change events; it does not discover interactables independently.

## Reusable health capability

- Actor Component owns health behavior or bridges to an ASC.
- Owner implements only interfaces the component requires.
- Component emits `OnHealthChanged` and `OnDeath` after state changes.
- HUD binds through the possessed pawn/player view model and rebinds on possession change.
- Server owns damage; replicated state/delegates drive client presentation.

## Global save service

- GameInstance Subsystem coordinates save/load across maps.
- SaveGame object contains serialized mutable state.
- World actors expose stable identifiers and a save contract.
- Data Assets remain definitions and are referenced by stable IDs; they do not store progress.

## Per-player settings or UI routing

- LocalPlayer Subsystem owns data that differs between split-screen players.
- Widgets receive the correct owning Local Player.
- Avoid GameInstance globals for per-player focus, input mode, or local settings state.

## Encounter director

- World Subsystem owns world-scoped registry/director state.
- Encounter actors register/unregister explicitly.
- Designers configure encounter definitions in Data Assets.
- The subsystem emits local events; replicated gameplay still follows server authority.

## Data-driven item

- Primary Data Asset stores immutable item identity, display data, and soft references.
- Runtime item instance stores quantity, durability, roll, owner, and save identity.
- Inventory component owns runtime instances.
- UI reads a projection/view model, not the mutable Data Asset.
