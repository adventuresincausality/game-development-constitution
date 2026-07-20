---
name: unreal-camera-cinematics
description: Design, implement, blend, animate, and debug gameplay cameras and cinematics in Unreal Engine 5.8. Use for Camera Components, Spring Arms, PlayerCameraManager, view targets, follow/orbit/aim/lock-on cameras, collision and lag, FOV, Camera Modifiers and shakes, accessibility, Experimental Gameplay Camera System, Cine Camera Actors, Sequencer, Camera Cut Tracks, gameplay-to-cinematic handoff, Camera Rig Rail or Crane, lens/focus/exposure, split screen, multiplayer, or camera jitter/clipping.
---

# Unreal 5.8 Cameras and Cinematics

## Choose the ownership model

Read [`references/system-selector.md`](references/system-selector.md).

- Pawn-relative gameplay follow/orbit -> Camera Component + Spring Arm.
- Central local-player rules/overlays/view-target control -> PlayerCameraManager.
- Reusable complex data-driven rigs -> Gameplay Camera System, but Experimental in UE 5.8.
- Authored shot/cut -> Cine Camera Actor + Level Sequence/Sequencer.
- Dolly/jib motion -> Camera Rig Rail or Crane in Sequencer.

The camera is local presentation. Replicate gameplay targets/state that influence it, not the final
per-frame camera transform, unless a special shared-camera design explicitly requires otherwise.

## Execute

1. Define the camera's gameplay job, local owner, subject/target, input authority, and comfort limits.
2. Choose gameplay or cinematic ownership and a single component responsible for final POV.
3. Establish pivot, distance/FOV, rotation, framing, and collision before adding lag or shake.
4. Add state transitions with explicit blend/interrupt/return policy.
5. Layer recoil, shake, post process, and offsets in a stable ordered stack with intensity controls.
6. For Sequencer, define cameras, cuts/blends, bindings, spawnable/possessable ownership, and handoff.
7. Test obstruction, teleport, low/high frame rate, split screen, network corrections, and accessibility.
8. Profile camera queries, post process, depth of field, and cinematic rendering on target hardware.

Load only what applies:

- [`references/gameplay-camera-architecture.md`](references/gameplay-camera-architecture.md)
- [`references/spring-arm-follow-and-collision.md`](references/spring-arm-follow-and-collision.md)
- [`references/transitions-modifiers-and-shakes.md`](references/transitions-modifiers-and-shakes.md)
- [`references/gameplay-camera-system.md`](references/gameplay-camera-system.md)
- [`references/cine-camera-and-lens.md`](references/cine-camera-and-lens.md)
- [`references/sequencer-cuts-and-handoff.md`](references/sequencer-cuts-and-handoff.md)
- [`references/rails-cranes-and-shot-recipes.md`](references/rails-cranes-and-shot-recipes.md)
- [`references/network-accessibility-and-performance.md`](references/network-accessibility-and-performance.md)
- [`references/debugging-patterns.md`](references/debugging-patterns.md)

## Required answer format

Return:

1. **Camera job, local owner, subject, and selected architecture**.
2. **Responsibility/order from input and target to final POV**.
3. **Transform/FOV/lens/collision/lag parameters and directional effects**.
4. **State transition, interruption, and gameplay-return rules**.
5. **Shake/modifier/post-process stack and accessibility scaling**.
6. **Sequencer binding/cut/rig or multiplayer/split-screen consequences**.
7. **Debug views, reproducible scenarios, and acceptance checks**.

## Hard rules

- Establish a stable unlagged, unshaken base camera before layering secondary effects.
- Use Spring Arm `SocketOffset`, not an arbitrary relative Camera offset, when collision tracing must
  account for the final framing position.
- Higher Spring Arm lag speed follows the target faster; lower speed creates more lag.
- Apply camera behavior once. Do not let Pawn, Controller, CameraManager, and Sequencer fight over POV.
- `Set View Target with Blend` changes the local PlayerController's view; define interruption/return.
- World camera shakes affect nearby local players and do not replicate automatically.
- Cap stacked shake and expose an intensity slider including zero.
- Treat the Gameplay Camera System and VCam as Experimental in UE 5.8; provide a shipping fallback.
- Camera Cut Track owns active cinematic camera; define blend-to/from-gameplay and sequence completion.
- Separate camera collision/readability from visual occlusion fixes; never move the player collision
  capsule merely to solve a camera obstruction.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
