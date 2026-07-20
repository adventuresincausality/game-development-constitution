# Transitions, modifiers, and shakes

## View targets

Use PlayerController `Set View Target with Blend` with New View Target, Blend Time, Blend Function,
Blend Exponent, and optional Lock Outgoing. Lock Outgoing freezes the outgoing camera at its last
position during the blend. Store/derive the return target and define what happens if the target is
destroyed, the player skips, or another transition interrupts.

## Camera modifiers

`UCameraModifier` adjusts final camera/Post Process through the owning PlayerCameraManager. Priority
defines order; a modifier can be exclusive at its priority. Use modifiers for bounded cross-camera
effects such as recoil, damage response, sprint FOV, or post-process feedback. Enable/disable and
blend them rather than permanently accumulating offsets.

## Camera shakes

- **Perlin**: irregular high-energy rumble/explosion.
- **Wave oscillator**: smooth periodic rocking/drift.
- **Sequence**: authored camera animation.
- **Composite**: layered pattern types.

Amplitude controls displacement/rotation/FOV magnitude; frequency controls speed. Duration <= 0 can
be indefinite, so owner cleanup is mandatory. Blend in/out prevents discontinuities. Single Instance
restarts instead of stacking another copy.

Use world shake for radial local-player response with inner/outer radius and falloff. It does not
replicate; replicate/dispatch the gameplay event and play locally where appropriate. Cap combined
amplitude/frequency, scale by event/distance, and apply the player's shake-intensity setting including
zero. Avoid shake in precision aiming/platforming unless explicitly designed and controllable.
