# Network, accessibility, and performance

## Network/local ownership

Player cameras normally exist as local presentation for human-controlled local players. Replicate the
subject, lock-on target, gameplay state, or cinematic event; each relevant local PlayerController
constructs its own view. World camera shake does not replicate. In split screen, address the intended
local controller(s), not an assumed player zero.

Network corrections can feed large target discontinuities into camera lag. Reset or bound camera
history after teleports/corrections. Spectating/possession requires a new valid target and explicit
transition/cleanup.

## Accessibility/comfort

- expose shake intensity including off;
- expose or limit head bob, motion blur, FOV changes, and aggressive camera lag where appropriate;
- avoid forced roll and rapid oscillation;
- keep reticle/horizon/reference stable during precision tasks;
- preserve subtitle/UI safe areas and non-camera alternatives for feedback;
- provide cinematic skip and restore control predictably.

## Performance

Profile per-local-player camera traces, target/occlusion tests, Blueprint modifier work, post process,
depth of field, motion blur, and cinematic resolution. Avoid many redundant traces from Pawn,
Controller, and CameraManager. Cache stable references, restrict expensive target searches, and test
split screen as multiplied local work.

Camera motion can expose rendering/streaming problems not visible from static views. Test fast rails,
wide reveals, cuts across the world, Lumen/lighting transitions, World Partition streaming, and target
hardware. Coordinate with `unreal-lighting` and `unreal-world-partition` for those boundaries.
