# Locomotion patterns

## 1D idle/walk/run Blend Space

Assets:

- compatible idle, walk, and run/sprint sequences;
- same Skeleton and consistent forward axis;
- compatible gait start phase where possible.

Setup:

1. Create Blend Space 1D for the Skeleton.
2. Name axis `Speed`; use cm/s to match Character Movement velocity.
3. Set axis min/max to the actual locomotion range.
4. Place idle at zero and gait samples at their authored travel speeds.
5. Drive from horizontal velocity magnitude, not full 3D velocity if falling should not
   increase locomotion speed.
6. Add axis smoothing only to remove noisy input; do not use it to hide incorrect
   acceleration or bad sample speeds.
7. Put compatible gait clips in the same Sync Group.
8. Add matching left/right foot Sync Markers when phase drift is visible.

## 2D strafe Blend Space

Common axes:

- `Speed` and local-space `Direction`, or
- local forward velocity and local right velocity.

Procedure:

1. Transform world velocity into character/mesh local space.
2. Match axis ranges to actual movement limits.
3. Place forward/back/left/right/diagonal samples according to authored direction.
4. Preview corners and diagonals, not only axis centers.
5. Validate foot phase across neighboring samples.
6. If diagonal speed differs mechanically, drive the Blend Space with actual local
   velocity rather than normalized input.

## Starts, stops, and pivots

- Keep simple locomotion in a looping Blend Space.
- Add start/stop/pivot states when acceleration direction, planted foot, or authored
  anticipation materially changes the pose.
- Use marker-based sync for run-to-stop or walk-to-run transitions when phases differ.
- Set start/stop animations to an appropriate leader role when they must define phase.
- Use transition rules from movement state, acceleration, direction delta, and time
  remaining—not arbitrary delays alone.

## Aim Offset over locomotion

1. Author/convert directional aim samples as mesh-space additive.
2. Create Aim Offset with yaw/pitch axes.
3. Feed locomotion cached pose into the Aim Offset base pose.
4. Compute aim delta relative to character/mesh facing.
5. Clamp/wrap yaw and pitch to authored limits.
6. Layer weapon recoil after or within the aim layer according to desired space.
7. Verify spine/shoulder deformation at extreme corners.

## Root motion choice

- In-place locomotion: Character/Mover movement is authoritative; animation visualizes it.
- Root-motion action: animation drives movement for the action; use Montages for the
  common networked path.
- Enabling Root Motion from Everything moves AnimGraph evaluation to the Game Thread;
  profile before choosing it broadly.
- Verify capsule/mesh agreement, movement mode, slopes, falling behavior, replication,
  and correction.

## Evaluation checks

- No foot sliding at authored sample speeds.
- No phase double-step during walk/run blends.
- Direction changes do not collapse knees or twist pelvis.
- Acceleration/deceleration visual timing matches movement.
- Falling does not feed incorrect speed/direction into grounded locomotion.
- Network correction does not repeatedly restart or desynchronize gait.
