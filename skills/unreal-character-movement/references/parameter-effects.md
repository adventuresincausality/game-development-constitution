# Character Movement parameter effects

Units follow Unreal's centimeter-based world unless the project changes conventions.

| Parameter | Primary effect | Increasing it does | Important coupling |
|---|---|---|---|
| `MaxWalkSpeed` (cm/s) | Maximum ground speed; also maximum lateral falling speed | Raises travel/top air-lateral cap | Acceleration, braking, animation stride |
| `MaxAcceleration` (cm/s²) | Rate velocity can change from input | Reaches desired velocity/direction faster | Ground friction, analog magnitude |
| `BrakingDecelerationWalking` (cm/s²) | Constant deceleration with no acceleration | Shortens coast/stopping time | Braking friction/factor |
| `GroundFriction` | Ground movement control/friction | Increases directional grip and braking when shared braking friction is used | `bUseSeparateBrakingFriction` |
| `bUseSeparateBrakingFriction` | Selects dedicated braking friction | Separates turning grip from no-input stopping drag | `BrakingFriction`, factor |
| `BrakingFriction` | Drag coefficient while braking | Shortens coast when separate braking friction is active | `BrakingFrictionFactor` |
| `RotationRate` (deg/s) | Rotation change rate | Turns facing faster | Only used by controller-desired or orient-to-movement modes |
| `AirControl` | Lateral control during falling | Permits stronger steering in air | Boost multiplier/threshold, falling friction |
| `FallingLateralFriction` | Drag on lateral falling motion | Removes lateral velocity faster in air | Braking deceleration falling |
| `JumpZVelocity` (cm/s) | Initial upward jump velocity | Raises jump and airtime for fixed gravity | Gravity scale, jump hold |
| `GravityScale` | Multiplier on character gravity | Increases downward acceleration and shortens airtime | Jump Z velocity |
| `MaxStepHeight` (cm) | Maximum step-up height | Traverses taller ledges without jumping | Capsule, floor angle, geometry |
| `WalkableFloorAngle` (0–90°) | Maximum walkable slope | Accepts steeper surfaces as floor | Floor normals, slide design |
| `PerchRadiusThreshold` (cm) | Rejects edge contacts near capsule rim | Requires more capsule support to perch | Ledge behavior, capsule radius |
| `MaxWalkSpeedCrouched` (cm/s) | Crouched top speed | Speeds crouched travel | Crouched capsule and animation |
| `MinAnalogWalkSpeed` (cm/s) | Speed at minimum analog tilt | Raises low-stick movement floor | Dead zone and response curve |

## Tuning method

1. Tune a clean flat test lane without animation-driven motion.
2. Measure time to 90% speed and stopping distance, not just max speed.
3. Tune direction reversal separately from release-to-stop.
4. Add rotation ownership and rate.
5. Test stick magnitudes, keyboard digital input, low and high frame rates.
6. Add animation and correct stride/lean presentation after trajectory is approved.

Do not publish universal numeric presets. Desired scale, camera, genre, capsule, animation,
and network conditions change what feels correct.
