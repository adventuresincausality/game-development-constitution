# Troubleshooting

## Value exceeds min/max

- AttributeSets do not automatically clamp.
- Confirm both proposed current changes and final executed base changes are covered.
- Reapply invariant after Max-value changes and aggregator recalculation where required.
- Do not rely on AttributeMetaData table MinValue/MaxValue columns.

## Buff never reverts

- Confirm it is Duration/Infinite, not Instant.
- Confirm removal targets the retained active effect handle or matching query.
- Check stacking: another source/stack may remain.
- Check manual direct writes that bypassed the effect aggregator.

## Modifier applies twice

- Log every application site and active effect handle.
- Check duplicate initialization after possession/respawn.
- Check both server and client applying an unsupported non-predicted effect.
- Inspect stacking configuration and source aggregation.

## SetByCaller is zero/missing

- Confirm the magnitude tag/name on the spec exactly matches the effect modifier.
- Set the value before application.
- Log missing keys as errors during development; do not silently accept zero for critical
  gameplay.

## Client UI is stale

- Confirm attribute replicates and RepNotify calls `GAMEPLAYATTRIBUTE_REPNOTIFY`.
- Confirm widget binds to the current ASC after respawn/possession.
- Read initial value before waiting for changes.
- Ensure the UI listens to the attribute delegate rather than a local effect event only.

## Server and client damage disagree

- Keep final damage execution authoritative.
- Verify captured attributes and snapshot/non-snapshot intent.
- Log source/target context, spec level, runtime magnitudes, and prediction path.
- Separate predicted hit feedback from confirmed Health change.

## Death fires repeatedly

- Detect the transition from above zero to zero after final clamping.
- Centralize death signaling in one authoritative path.
- Guard against repeated Instant effects on an already-dead target with a state tag/rule.
