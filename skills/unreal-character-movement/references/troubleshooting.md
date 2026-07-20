# Troubleshooting

## Character slides after input release

- Raise braking deceleration and/or effective braking friction deliberately.
- Check `bUseSeparateBrakingFriction`, `BrakingFriction`, and factor interaction.
- Distinguish no-input stopping from direction-change grip.

## Direction changes feel slow despite high acceleration

- Check GroundFriction and effective input magnitude.
- Check rotation ownership/rate if facing, not velocity, is the slow part.
- Measure velocity change separately from mesh turn animation.

## Cannot climb a small step

- Compare collision height with `MaxStepHeight`.
- Confirm the upper surface is walkable and the capsule has clearance.
- Inspect collision seams and blocking channels.
- Test without decorative mesh collision overriding intended simple collision.

## Stands on implausibly tiny edges

- Review `PerchRadiusThreshold`, capsule radius, and ledge geometry.
- Visualize collision/floor results; do not judge by skeletal mesh feet.

## Jump varies with frame rate

- Remove manual per-frame velocity/position increments lacking delta-time/physics integration.
- Verify variable jump release is bound correctly.
- Check custom movement simulation time steps/iterations under low frame rate.

## Constant server corrections

- Confirm client and server use identical parameters and custom state.
- Serialize state that changes movement physics.
- Prevent incompatible saved moves from combining.
- Remove client-only transform changes.
- Fix divergence before changing smoothing or correction thresholds.

## Remote character jitters

- First determine whether authoritative capsule is correcting or only mesh smoothing looks bad.
- Inspect update rate, packet conditions, moving base, and custom-mode replication.
- Tune smoothing only after deterministic movement is correct.

## Root motion fights movement

- Confirm root-motion extraction mode and asset settings.
- Remember root motion takes precedence over normal movement physics.
- Do not also drive the same action with Launch/SetLocation/velocity.
- Ensure montage start/cancel is synchronized across network roles.

## Custom mode floats or tunnels

- `MOVE_Custom` suspends standard physics; implement gravity, velocity, swept collision, floor,
  sub-stepping, and exit behavior explicitly.
- Prefer C++ `PhysCustom` for complex production modes.
