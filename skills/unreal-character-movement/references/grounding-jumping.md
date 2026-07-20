# Grounding, slopes, steps, and jumping

## Ground test course

Build reusable geometry containing:

- flat acceleration/braking lane with distance marks;
- gradual slopes below, at, and above `WalkableFloorAngle`;
- steps below, at, and above `MaxStepHeight`;
- narrow ledges and corners for perching;
- low ceilings for crouch/uncrouch;
- moving and rotating bases;
- seams between collision pieces.

Test capsule behavior first. The skeletal mesh is not the authoritative collision body.

## Rotation ownership

Choose one primary path:

- `bOrientRotationToMovement`: face acceleration using `RotationRate`;
- `bUseControllerDesiredRotation`: rotate toward controller desired rotation using
  `RotationRate`;
- explicit gameplay rotation: disable competing automatic rotation and own it in one system.

Also reconcile `ACharacter::bUseControllerRotationYaw`. Conflicting owners cause snapping,
oscillation, or a facing direction that disagrees with movement/aim.

## Jump model

1. Define target apex height, time to apex, total airtime, horizontal control, and variable
   jump behavior.
2. Tune `JumpZVelocity` and `GravityScale` together.
3. Configure Character jump-hold behavior (`JumpMaxHoldTime`) only if variable-height jumps
   are desired; bind press to Jump and release to Stop Jumping.
4. Tune `AirControl`, boost settings, falling friction, and lateral cap.
5. Add coyote time and buffered jump as explicit gameplay forgiveness; route the timestamped
   input design to `$unreal-enhanced-input`.
6. Test stepping off edges, ceilings, slopes, moving bases, repeated press, held input, and
   landing during a buffered request.

Use CMC's `GetMaxJumpHeight`/`GetMaxJumpHeightWithJumpTime` as diagnostics, then verify in the
actual level because collision, slopes, bases, and frame/network behavior matter.

## Sprint and crouch

- Treat sprint as a state that changes desired max speed and perhaps acceleration, not as a
  second movement implementation.
- Decide hold versus toggle in the input layer.
- Keep the server authoritative over sprint/crouch eligibility.
- Use Character crouch support so capsule changes and movement integration remain coherent.
- Test uncrouch obstruction; never force the capsule into a ceiling.
