# Debugging patterns

## Ownership isolation

1. Print/log current local PlayerController, View Target, CameraManager, active sequence, and final POV.
2. Disable Sequencer Camera Cuts, then modifiers/shakes, lag, and collision in that order.
3. Verify the unmodified desired pivot/rotation/distance/FOV.
4. Re-enable collision, lag, state blend, modifiers, shake, and post process one at a time.
5. Test the same path at fixed low/high frame rates and in a packaged build.

| Symptom | Inspect first |
|---|---|
| Camera inside wall | Spring Arm collision enabled/channel/probe, Camera attachment |
| Snaps near corners | collision geometry/probe/release, pivot path, competing writers |
| Character occluded but no collision | foreground occlusion policy; Spring Arm solves camera collision only |
| Persistent jitter | target movement vs camera tick/order, multiple writers, network correction |
| Sluggish input | rotation lag or smoothed input/desired rotation twice |
| Offset ignored | relative Camera offset instead of Spring Arm SocketOffset |
| Wrong player camera | local controller/view target assumption, split screen index |
| Shake absent remotely | event not replicated/local playback not triggered |
| Shake never ends | indefinite duration/owner cleanup |
| Sequence plays but camera stays gameplay | missing/disabled Camera Cut Track or binding |
| Camera remains cinematic | finish/skip/interruption handoff omitted |
| Focus hunts/pumps | tracking target/focus distance and key interpolation |
| Rail speed uneven | spline/time-key parameterization and interpolation |

Acceptance routes: tight corridors, ceilings, corners, fast rotation, sprint/aim transition, teleport,
death/possession, lock target lost, split screen, latency correction, cinematic finish/skip/interruption,
resolution/aspect changes, zero-shake setting, and target performance capture.
