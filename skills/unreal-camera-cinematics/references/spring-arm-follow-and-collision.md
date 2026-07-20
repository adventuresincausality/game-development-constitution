# Spring Arm follow, lag, and collision

`USpringArmComponent` tries to maintain `TargetArmLength`, retracts for collision, and returns when
clear.

## Important controls

- **TargetArmLength**: unobstructed boom distance.
- **TargetOffset**: world-space offset at the arm origin/pivot.
- **SocketOffset**: offset at the arm end; use it for shoulder framing so collision tracing includes it.
- **Use Pawn Control Rotation / inherit axes**: defines rotation source.
- **Do Collision Test**: enables probe retraction.
- **ProbeChannel / ProbeSize**: collision response and sphere size.
- **CameraLagSpeed**: higher catches target faster; lower increases positional lag.
- **CameraRotationLagSpeed**: higher catches desired rotation faster.
- **CameraLagMaxDistance**: caps positional separation from the target.
- **Use Camera Lag Substepping / Max Time Step**: improves damping consistency under fluctuating frame
  rate at added cost.

## Tuning order

1. Disable lag and shake; tune pivot, offsets, pitch, and arm length.
2. Configure Camera collision channel so intended blockers block and characters/effects do not.
3. Test walls, corners, ceilings, doors, thin props, slopes, and tight corridors.
4. Add location lag, cap it, then rotation lag.
5. Test at multiple frame rates and after teleport/network correction.

If retraction pops, inspect trace geometry/channel, probe size, pivot path, and obstruction release
before slowing the entire camera. Spring Arm prevents its camera child from entering blockers; it does
not solve subject occlusion by foreground objects between the camera and character.
