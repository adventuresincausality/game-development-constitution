# Gameplay Tag patterns

## Persistent state

Use `State.Stunned`, `State.Dead`, or `State.Movement.Sprinting` while the condition is true.
One system owns addition/removal. In GAS, prefer state granted by the active effect/ability
whose lifetime creates the state so removal is deterministic.

Test:

- tag present during condition;
- parent queries succeed;
- exact sibling queries fail;
- tag removes on expiry, cancellation, death, and teardown.

## Ability gating

Separate:

- ability identity: `Ability.Movement.Dash`;
- state owned while active: `State.Movement.Dashing`;
- activation blocker: `State.Stunned`;
- input route: `InputTag.Ability.Dash`;
- activation event: `Event.Ability.DashRequested` if an event path is used.

Configure required/blocked/cancel relationships through GAS's current tag relationship
settings/components and verify with failure tags. Route full ability procedure to
`$unreal-gas-abilities`.

## Gameplay Event

Use an Event tag for a momentary occurrence plus `FGameplayEventData`, such as
`Event.Combat.HitConfirmed`. Do not add/remove it as though it were state. Define which
machine sends/handles it and validate its payload and targets.

## Identity and categorization

Use tags for extensible categories and cross-system queries, for example
`Item.Weapon.Ranged.Bow` or `Damage.Element.Fire`. Keep a stable primary identifier separate
when save identity must distinguish two assets that share the same categories.

Tags classify; they are not automatically unique IDs.

## UI categories

UI can map gameplay categories to presentation, but do not let display wording become the
canonical gameplay taxonomy. Localize labels separately. Keep UI-only navigation/action tags
under a UI root.

## Message channels

Tags work well as channel identifiers for a scoped message system. Define payload type and
network scope separately. Hierarchical listener semantics must be explicit; do not assume a
message bus uses the same parent matching as a tag container.
