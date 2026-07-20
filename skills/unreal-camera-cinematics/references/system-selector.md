# System selector

| Need | Prefer | Key risk |
|---|---|---|
| Third-person follow/orbit | Pawn Camera + Spring Arm | collision pop, lag, tight spaces |
| First-person viewpoint | Pawn Camera / PlayerCameraManager | body clipping, recoil/comfort |
| Local overlays and central POV policy | PlayerCameraManager/CameraModifier | competing ownership/order |
| Switch to fixed/security camera | View target blend | return/interruption, local player |
| Reusable complex data-driven rigs | Gameplay Camera System | Experimental UE 5.8 maturity |
| Authored cinematic | Sequencer + Cine Camera | binding/time/skip/handoff |
| Tracking/dolly/crane shot | Camera Rig Rail/Crane | spline speed/orientation/framing |
| Virtual production operation | VCam | Experimental/runtime/device workflow |

Write the ownership chain before implementation:

`input/game state -> desired subject/pivot -> base camera rig -> obstruction/collision -> lag ->
state blend -> modifiers/shake -> post process -> final local POV`.

Sequencer temporarily replaces or blends with that chain when Camera Cuts are enabled. One system
must be authoritative for final POV at each instant.
