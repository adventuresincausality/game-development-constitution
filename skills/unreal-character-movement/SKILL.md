---
name: unreal-character-movement
description: Design, tune, extend, network, and debug Character movement in Unreal Engine 5.8. Use for Character Movement Component selection, movement feel, walking, acceleration, braking, friction, rotation, jumping, gravity, air control, slopes, steps, crouching, moving platforms, custom movement modes, dashes, launches, teleports, root motion sources, client prediction, saved moves, corrections, smoothing, or evaluating experimental Mover.
---

# Unreal 5.8 Character Movement

## Select the movement framework

- Use `ACharacter` with `UCharacterMovementComponent` for standard capsule-based walking,
  falling, swimming, flying, crouching, root motion, and mature network prediction.
- Extend CMC with `MOVE_Custom` when one or more special modes must coexist with standard
  Character movement and its networking model.
- Use Root Motion Sources or GAS root-motion Ability Tasks for short, programmatic special
  moves that must participate in Character network prediction.
- Evaluate **Mover** only when its mode/layered-move architecture materially benefits the
  project. In UE 5.8 Epic still labels Mover Experimental; record that shipping risk.
- Use a bespoke Pawn movement component only when Character's capsule/mode model is a poor fit.

Read [`references/system-selector.md`](references/system-selector.md) before choosing.

## Tune in dependency order

1. Declare desired feel in measurable terms: target speed, time to speed, stopping distance,
   turn time, jump height/time, air steering, walkable slope, and step height.
2. Establish collision capsule and floor behavior.
3. Tune `MaxWalkSpeed`, `MaxAcceleration`, braking, and friction together.
4. Select rotation ownership: movement direction, controller desired rotation, or explicit
   gameplay rotation. Avoid competing rotation systems.
5. Tune `JumpZVelocity`, gravity, hold behavior, and `AirControl` as one jump model.
6. Add crouch, sprint, slopes, platforms, and special movement one at a time.
7. Integrate animation after the physical trajectory is stable.
8. Verify at varied frame rate, target hardware, slopes/steps/edges, and network conditions.

Read [`references/parameter-effects.md`](references/parameter-effects.md) for variable effects
and [`references/grounding-jumping.md`](references/grounding-jumping.md) for ground and jump
procedures.

## Network before polishing

Read [`references/networking.md`](references/networking.md) before adding replicated special
movement. Standard CMC prediction does not automatically serialize arbitrary custom state.
Extend saved moves/network move data when the server must reproduce new input or state.

Read [`references/special-movement.md`](references/special-movement.md) for dashes, launches,
teleports, custom modes, and root motion. Route action timing/input buffers to
`$unreal-enhanced-input`, action animation blending to `$unreal-animation-blending`, and
ability-owned movement to `$unreal-gas-abilities`.

## Required answer format

Return:

1. **Movement framework choice** and maturity risk.
2. **Desired feel metrics** and assumptions.
3. **Ordered parameter changes**, units, expected effects, and interactions.
4. **Movement/rotation/animation ownership**.
5. **Authority, prediction, saved-move, and smoothing design**.
6. **Test course and network verification matrix**.

Do not invent defaults, property names, prediction behavior, or safe values.

## Hard rules

- Tune coupled parameters together; speed alone does not define feel.
- Do not drive one movement simultaneously through CMC velocity, manual transforms, and root
  motion.
- Do not use client `SetActorLocation` as predicted multiplayer movement.
- Teleport on the server and mark the move as a teleport through the supported API path.
- Do not disable server corrections to hide a faulty movement implementation.
- Keep the collision capsule authoritative; mesh offset is presentation.
- Test custom movement with latency, packet loss, low frame rate, slopes, edges, and moving bases.

Use [`references/troubleshooting.md`](references/troubleshooting.md) for sliding, jitter,
corrections, slope/step failures, root-motion conflicts, and frame-rate dependence. See
[`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
