# Gameplay camera architecture

## Traditional shipping baseline

- **Camera Component**: projection, FOV/aspect, post process, and POV on a Pawn/Actor.
- **Spring Arm**: desired boom distance, rotation inheritance, collision retract, optional lag.
- **PlayerController**: local input/view target and `Set View Target with Blend`.
- **PlayerCameraManager**: calculates/caches final POV and applies modifiers/shakes/post process.

Keep gameplay-facing camera state small: exploration, aim, lock-on, sprint, dialogue, photo, cinematic.
Each state supplies desired pivot, arm length, FOV, offsets, rotation constraints, and blend policy.
Interpolate a state result rather than running several independent timelines against the same property.

## Follow/orbit

1. Derive pivot from a stable target component/socket plus state offset.
2. Use controller rotation for player orbit when appropriate; separate character facing from camera yaw.
3. Clamp pitch before solving obstruction.
4. Compute desired arm/framing, solve collision, then apply bounded smoothing.
5. Preserve player input responsiveness; smooth camera motion, not input recognition.

## Aim/lock-on

Blend shoulder/FOV/rotation policy as a state. Keep reticle, weapon trace, camera trace, and character
aim solutions distinct. For lock-on, validate target, visibility/range, target switching, camera pitch,
and unlock fallback. Avoid snapping the player/camera because a target was briefly occluded.

On teleport, possession, respawn, or large correction, reset accumulated camera lag and stale targets.
