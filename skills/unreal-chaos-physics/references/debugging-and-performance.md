# Debugging and performance

## Chaos Visual Debugger

Open Tools -> Debug -> Chaos Visual Debugger. Record local/remote PIE, client/server, or packaged
Development/Test sessions. Capture only needed data channels; CVD data volume and recording overhead can
be substantial. Test builds may omit object debug names.

Inspect particles, position/velocity/mass/state, collision geometry/channels, contact constraints, joint
constraints, character ground constraints, sync/async frames, and resimulated frames. Save recordings for
cross-team reproduction without requiring project assets.

## Symptom matrix

| Symptom | Inspect first |
|---|---|
| falls through thin wall | collision shape, speed/timestep, CCD, teleport versus sweep |
| jitters at rest | penetration, shape seams, mass ratio, contact/constraint, per-frame writes |
| constraint stretches/explodes | frames, limits, collision, mass ratio, timestep, drive/projection |
| overlap/hit fires twice | both-side settings, substep callback queue, duplicate components |
| ragdoll explodes | overlapping bodies, bad constraints, scale, pose penetration |
| debris never settles | sleep thresholds, ongoing field/contact, removal policy |
| network object rubber-bands | replication mode, authority, send/latency, predicted forces |
| cloth stretches/explodes | teleport reset, collision penetration, timestep, stiffness/iterations |

Profile Timing Insights/`stat physics` plus active/dynamic/sleeping bodies, shapes, broadphase pairs,
contacts, constraints/iterations, substeps, cloth vertices/iterations, destruction pieces/events, and
CVD/trace overhead. Disable visualization/recording for final timing.
