# Use-case recipes

## Hinged door

Use one simulated door body plus world/frame constraint. Lock linear axes; free or limit one angular axis;
lock the others. Add angular drive only for self-closing. Limit Max Force so players can resist it. Disable
frame-door collision if shapes fight. Test both push directions, edge impacts, low FPS, and replication.

## Explosive prop

Use a radial impulse or transient field once, not a per-frame force. Keep gameplay damage authoritative and
separate from debris. Bound affected object types/radius, enable CCD only for fast critical fragments, and
cap/sleep/disable/remove cosmetic pieces.

## Partial hit reaction

Use a Physics Asset plus Physical Animation profile below the hit bone. Apply a bounded impulse at the hit
location, blend physics weight, then restore animation/body state. Keep character movement/capsule
authoritative unless the design intentionally enters ragdoll.

## Breakable wall

Use clustered Geometry Collection, anchored supports, size-specific collision, and thresholded transient
strain. Break large clusters first; disable/remove settled small fragments. Test worst simultaneous walls,
event-driven VFX/audio, navigation/cover authority, and network representation.

## Physics Pawn

Use Resimulation only when full predicted interaction is required; otherwise evaluate Predictive
Interpolation. Implement step-indexed inputs/state/actions in C++, keep cosmetic events replay-safe, and
test latency/loss/jitter/corrections against non-player physics objects.
