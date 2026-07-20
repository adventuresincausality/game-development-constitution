# Implementation patterns

## Locomotion base

Gameplay movement -> animation-facing state/trajectory -> Chooser -> valid databases -> Motion
Matching -> Pose History -> orientation/stride warping -> leg IK -> upper-body/action Slots.

Validate: idle-to-walk/run, stop both feet, 45/90/180-degree pivots, analog direction changes,
acceleration/braking extremes, slopes, low frame rate, network correction, and animation LOD.

## Traversal entry selection

Gameplay detects and validates the obstacle. Pose Search chooses a compatible authored entry from a
bounded traversal set using relative obstacle/character features. The action system then owns the
committed traversal, collision/movement, interruption, and exit. Do not let pose selection decide
whether gameplay traversal is legal.

## Discrete action alongside Motion Matching

Keep locomotion Motion Matching active as the base. Play attack/reload/interact through a Montage
Slot and layer by body region when appropriate. For full-body actions, intentionally suppress or
replace base motion and define root-motion ownership. See `unreal-animation-montages`.

## Retargeted database

Retarget clips first, verify root motion and contact across the complete dataset, then index the
target data. A correct reference pose is insufficient: test starts, stops, pivots, extremes, and
curves/notifies. See `unreal-control-rig-ik` for retarget diagnostics.

## Network boundary

Replicate gameplay movement/state; let each client select cosmetic locomotion poses from equivalent
data. Do not replicate pose-search candidates every frame. Ensure discrete authoritative actions use
their own replicated gameplay contract.
