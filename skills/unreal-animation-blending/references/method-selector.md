# Method selector

| Problem | Primary mechanism | Why | Common misuse |
|---|---|---|---|
| Idle/walk/run over speed | Blend Space 1D | One continuous axis | Separate state per speed |
| Strafing over speed and direction | Blend Space 2D | Two continuous axes | Unsynced directional clips |
| Aim/look over yaw and pitch | Aim Offset | Mesh-space additive directional pose | Ordinary non-additive Blend Space |
| Grounded/falling/swimming/climbing modes | State Machine | Persistent discrete states and transitions | Boolean blend web in main AnimGraph |
| Weapon equipped/unequipped | Blend Poses by Bool/Enum or linked layer | Small discrete variant | Duplicating the entire locomotion machine |
| Run while firing/reloading | Montage Slot + Layered Blend per Bone | Event action over lower-body base | Full-body montage when legs must continue |
| Recoil/breathing/lean | Additive pose | Relative delta over base pose | Treating additive clip as full pose |
| Walk/run cycles drift out of foot phase | Sync Group + Sync Markers | Aligns named gait events | Longer blend duration |
| Abrupt short transition between similar moving poses | Inertialization | Carries outgoing motion without continued source evaluation | Using it between radically different poses |
| One-off attack/combo with sections | Montage | Controlled sequence, sections, notifies, slots | Large state-machine branch |
| Different bones need different transition rates | Blend Profile | Per-bone transition weighting | Multiple arbitrary transition nodes |
| Complex reusable body-mode graph | Linked Anim Layer / Linked Anim Graph | Modular graph ownership | Copy-pasted graphs |

## Decision tests

### Blend Space

Use when the desired pose is a smooth function of one or two measured values. Inputs
must have meaningful units and ranges. Samples should represent comparable motion and
compatible phase.

### State Machine

Use when the animation mode persists and entry/exit rules matter. Keep gameplay truth
outside the state machine; let transitions consume stable variables.

### Montage

Use when gameplay explicitly starts/stops/branches an authored action. Use Sections for
combos or loops and Slots for body-region application. Same-Slot sequences override one
another.

### Layered Blend per Bone

Use for regional full-pose overrides. Select Branch Filter or Blend Mask deliberately.
Define the first affected bone and verify all descendants. Use mesh-space rotation blend
when local-space composition produces shoulder/spine artifacts, then recheck cost and
visual result.

### Additive

Use when the clip represents a delta from a known reference pose. Confirm local-space or
mesh-space additive setup and reference pose before blaming the graph.

### Inertialization

Use for short transitions where preserving outgoing velocity matters more than continuing
to evaluate the source clip. Keep standard crossfade when source Notifies or exact source
phase must remain active through the transition.
