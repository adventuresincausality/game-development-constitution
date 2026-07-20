# Experimental Gameplay Camera System

The UE 5.8 Gameplay Camera System is Experimental. Use it only after an explicit production-maturity
decision and retain a traditional Camera Component/PlayerCameraManager fallback.

## Architecture

- **Camera Asset**: Camera Rigs, transitions, Director, and variables.
- **Camera Rig**: node network describing camera behavior.
- **Camera Transitions / Shared Transitions**: enter/exit behavior.
- **Camera Director**: selects active rig—Single, Blueprint, or StateTree Director.
- **Gameplay Camera Component/Actor**: consumes the Camera Asset.
- **Camera Variable Collection**: exposes values used by the asset.

## Procedure

1. Define bounded rig states and variables before building nodes.
2. Create one Camera Asset and the smallest required Camera Rigs.
3. Choose a Director matching selection complexity.
4. Author explicit enter/exit transitions and interruption behavior.
5. Feed stable gameplay-facing variables into the consuming component.
6. Use Camera Debugger to inspect selected rig, variables, and transitions.
7. Test cook/package, multiplayer local ownership, split screen, performance, and migration fallback.

Do not combine a data-driven Camera Rig with a second Blueprint system writing the same final POV.
Use traditional camera systems when the requirement is simple or shipping-risk tolerance is low.
