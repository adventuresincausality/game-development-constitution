# Attribute model

## Define AttributeSets

Gameplay Attributes live in native `UAttributeSet` classes as `FGameplayAttributeData`
properties. Group them by coherent ownership/lifetime, for example:

- vitals: Health, MaxHealth, Stamina, MaxStamina;
- combat: AttackPower, Armor, critical parameters;
- movement: MoveSpeed or movement multipliers;
- transient meta inputs: IncomingDamage or IncomingHealing.

An ASC can access registered AttributeSets. Avoid one giant set merely because it is easy to
create; avoid splitting so finely that related invariants become hard to enforce.

## Base and current values

- **Base value**: durable value before temporary modifiers.
- **Current value**: evaluated result including active modifiers.
- Instant Gameplay Effects change base values.
- Duration and Infinite effects modify current values while active and are undone when they
  expire or are removed.

Use an effect for changes. Do not directly write a temporary bonus into the attribute, or its
source/removal/stacking semantics become opaque.

## Initialization

1. Create an Instant initialization Gameplay Effect with default attribute modifiers.
2. Create a spec at the correct level or with SetByCaller values.
3. Apply it from authority after ASC actor info and AttributeSets are ready.
4. Guard against duplicate application on respawn/repossession.
5. If ASC persists on PlayerState, explicitly decide which attributes persist and which reset
   for the new avatar.

## Invariants and clamping

AttributeSets do not provide automatic min/max clamping. Data Table `MinValue` and `MaxValue`
columns do not enforce bounds.

Enforce invariants deliberately:

- clamp proposed current-value changes in `PreAttributeChange` where appropriate;
- clamp permanent executed results in `PostGameplayEffectExecute` or the authoritative
  calculation/application path;
- when MaxHealth changes, decide whether Health preserves absolute value, percentage, or only
  clamps down;
- keep resource invariants explicit: `0 <= Health <= MaxHealth`.

Do not assume a clamp in one hook covers every aggregator recalculation or execution path.
