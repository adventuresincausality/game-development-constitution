# Gameplay Effect selector

## Duration policy

| Need | Duration policy | Notes |
|---|---|---|
| Damage, healing, purchase, permanent progression, initialization | Instant | Changes base value |
| Timed buff/debuff | Has Duration | Modifier exists while active |
| Equipped/aura/passive modifier removed by handle/condition | Infinite | Explicit removal required |
| Damage/heal over time | Has Duration or Infinite with Period | Period and duration/removal are separate decisions |

## Magnitude method

| Need | Method |
|---|---|
| Constant or level-scaled data | Scalable Float / configured magnitude |
| Runtime caller supplies one named amount | SetByCaller on the Gameplay Effect Spec |
| Reusable magnitude from captured source/target attributes | Modifier Magnitude Calculation |
| Multi-stage authoritative result, multiple captures/outputs, custom damage resolution | Gameplay Effect Execution Calculation |

Prefer the simplest method that expresses the rule. Calculations add implementation and
prediction constraints; fixed/scalable modifiers remain easier to inspect.

## Modifier operation

Choose the operation from the desired math—additive, multiplicative, division, or override—
and test multiple simultaneous sources. Document whether percentages are intended to combine
additively or multiplicatively; do not infer it from UI wording.

## Runtime data

Gameplay Effect assets are immutable definitions. At runtime:

1. Make a Gameplay Effect Context with instigator/source information.
2. Make an outgoing Gameplay Effect Spec at the desired level.
3. Set SetByCaller magnitudes and other spec data before application.
4. Apply the spec to self or target ASC.
5. Retain the active effect handle when explicit removal or inspection is required.

## Stacking design questions

- Aggregate by source or by target?
- Maximum stack count?
- Refresh, extend, or preserve duration on reapplication?
- Reset period on reapplication?
- Overflow behavior?
- Is each source independent, or should all instances combine?
- Which tags identify and inhibit the effect?

Test the exact configured behavior; stacking policy changes gameplay semantics, not just
implementation.
