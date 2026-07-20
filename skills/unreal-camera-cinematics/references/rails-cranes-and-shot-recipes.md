# Rails, cranes, and shot recipes

## Camera Rig Rail

Place from Cinematic actors, shape its Blueprint Spline, attach the Cine Camera to the dolly, and
animate `Current Position on Rail` from 0 to 1 in Sequencer. `Lock Orientation to Rail` makes camera
rotation relative to dolly orientation; otherwise animate orientation independently. Spatially even
spline travel is not guaranteed by evenly spaced time keys—inspect speed and use key interpolation.

## Camera Rig Crane

Attach the camera to the mount, then animate arm length, yaw, and pitch. Lock mount pitch/yaw only
when camera orientation should follow the crane. Combine Rail and Crane only when the extra degrees of
freedom materially serve the shot; nested transforms complicate framing and debugging.

## Recipes

- **Reveal**: begin with occlusion/tight frame, move Rail/Crane to expose subject, preserve focal plane.
- **Tracking shot**: rail/dolly carries translation; camera independently maintains composition/look.
- **Dialogue cut**: consistent eyeline/screen direction, controlled lens/focus, intentional cut timing.
- **Gameplay establishing shot**: show objective/path, minimize duration, retain/restore player context,
  and provide skip/replay policy.
- **Impact camera**: directional short modifier/shake layered over stable gameplay camera; never replace
  precise aiming information with uncontrolled jitter.

Use `unreal-splines` for general spline construction decisions. Camera Rig Rail owns the cinematic
tracking-shot implementation and Sequencer keying.
