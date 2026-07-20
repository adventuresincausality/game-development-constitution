# Spatialization, lifetime, and concurrency

MetaSound generates a source; standard Unreal audio systems still own attenuation, spatialization,
occlusion, classes, submixes, concurrency, priority, and virtualization.

## Spatial contract

- Use attenuation assets/settings for distance curves, shape, spatialization, air absorption,
  occlusion, and focus according to the game.
- Add `UE.Attenuation` when graph behavior needs listener distance.
- Add `UE.Spatialization` when graph behavior needs azimuth/elevation.
- Test listener motion, split screen if supported, occlusion transitions, and teleport/discontinuity.

Do not synthesize manual left/right panning as a substitute for the engine spatializer when true 3D
audio is required.

## Lifetime

- Finite Source: terminal trigger -> `On Finished`; component auto-destroy/pool policy verified.
- Indefinite Source: no one-shot interface; external owner controls release/stop.
- Looping Wave Player: graph/source must still define when the overall sound ends.
- Virtualized source: define whether time advances silently or restarts when audible.

## Concurrency

Group semantically interchangeable voices and choose maximum count/resolution rule by information
priority. Test bursts, nearby identical sources, quiet-loop accumulation, and modulation interaction.
Concurrency voice stealing is a mix/design decision: never allow a low-value decorative sound to
steal a critical warning merely because it started later.
