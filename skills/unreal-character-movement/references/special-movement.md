# Special movement patterns

## Launch

Use `LaunchCharacter` for an impulse-like velocity change that should enter the Character
movement pipeline. Decide independently whether XY/Z override existing velocity. Test authority,
prediction/correction, landing, air control, and repeated launches. A launch is not a duration-
controlled dash.

## Teleport

For network play:

1. Validate the destination on the server.
2. Use a supported SetLocation path with teleport behavior or the Teleport Blueprint node.
3. Ensure collision/encroachment policy matches the design.
4. Expect clients to snap rather than smooth the teleport.

Do not move the owning client first with ordinary transform changes and expect CMC prediction
to accept it.

## Root Motion Source

Use for short programmatic motion needing Character root-motion networking, such as move-to or
jump-force behavior.

1. Select/create the appropriate `FRootMotionSource` variant.
2. Set duration, priority/accumulation, start/target, and finish behavior.
3. Apply through `UCharacterMovementComponent::ApplyRootMotionSource` on the appropriate
   prediction/authority path.
4. Retain the returned handle/ID.
5. Remove with `RemoveRootMotionSource` when canceled or finished if required by the pattern.
6. Test server rejection, collision, moving targets, and montage/root-motion competition.

GAS provides Ability Tasks that use Root Motion Sources; prefer those when the ability owns
activation, cancellation, and prediction.

## Custom movement mode

1. Allocate a stable custom sub-mode byte/enum.
2. Enter through `SetMovementMode(MOVE_Custom, SubMode)`.
3. Implement `UpdateCustomMovement` in Character Blueprint for prototypes, or override
   `PhysCustom` in a custom CMC for production control.
4. Perform swept movement and define collision, floor, velocity, gravity, and exit rules.
5. Serialize any custom input/state the server needs through saved-move/network move data.
6. Return to Walking/Falling/etc. through an explicit exit condition.

`MOVE_Custom` suspends normal movement physics. Failing to implement gravity, collision, or
velocity semantics is not an engine bug.

## Montage root motion

Use for animation-authored committed actions. Root motion takes priority over standard
movement physics. In network games, ensure gameplay triggers the montage consistently; GAS can
synchronize ability-owned montages/root motion. Route blend/slot details to
`$unreal-animation-blending`.
