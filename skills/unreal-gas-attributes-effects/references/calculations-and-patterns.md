# Calculations and action patterns

## Direct damage with a meta-attribute

1. Source ability creates an Instant damage effect spec.
2. Supply raw damage through a configured modifier or SetByCaller tag.
3. Execution calculation captures required source/target values and computes mitigated damage
   on authority.
4. Write the result to transient `IncomingDamage`.
5. In `PostGameplayEffectExecute`, consume IncomingDamage, set it back to zero, subtract from
   Health, clamp, and signal death only on the valid transition.

The meta-attribute keeps transient inputs separate from persistent Health and centralizes
post-damage rules.

## Healing

1. Create an Instant effect with a positive health change or IncomingHealing meta value.
2. Apply on authority with source context.
3. Clamp final Health to MaxHealth.
4. Emit UI/gameplay reactions after final value is known.

## Timed buff

1. Create a Has Duration effect.
2. Add a modifier to the target Attribute.
3. Configure duration and stacking explicitly.
4. Add owned/status tags through the current Gameplay Effect component model where needed.
5. Apply and retain the active effect handle only if a later targeted removal needs it.
6. Verify attribute returns exactly when the effect expires/removes.

## Equipment or passive modifier

1. Create an Infinite effect per coherent source or bundle.
2. Apply when equipped/granted.
3. Store `FActiveGameplayEffectHandle` with the runtime equipment/passive instance.
4. Remove by that handle on unequip/revoke.
5. Test duplicate equip, load restore, owner change, and removal order.

## Regeneration

Choose one model:

- periodic Gameplay Effect for discrete authoritative ticks;
- continuous modifier if the Attribute semantics support it;
- server-owned timer/system applying instant effects.

Define delay after damage, period, first tick timing, max clamp, stacking, and pause/block tags.
Do not add per-character Tick without a measured need.

## Max-value change

Pick and document one policy:

- preserve absolute current value, then clamp;
- preserve percentage: `NewCurrent = OldCurrent / OldMax * NewMax`;
- apply the same delta to current and max;
- refill on increase.

Implement deliberately; no policy is universally correct.
