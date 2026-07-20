# Rigid bodies, forces, and sleep

## Body setup

- Fit collision around the mass-bearing shape; remove tiny snagging features.
- Set density/physical material or Mass in KG deliberately; inspect center of mass and inertia behavior.
- Use Linear/Angular Damping for real resistive behavior, not to mask unstable contacts.
- Set friction/restitution through Physical Materials and test combined material behavior.
- Enable gravity, CCD, hit/wake events, and simulation only when required.

## Apply motion

| Intent | Use | Notes |
|---|---|---|
| sustained thruster/wind | Add Force each physics/game update for duration | mass matters unless Accel Change |
| instantaneous kick/explosion | Add Impulse once | mass matters unless Vel Change |
| sustained force causing rotation | Add Force at Location | off-center application creates torque |
| instant off-center strike | Add Impulse at Location | changes linear and angular motion |
| direct kinematic placement | move/teleport/sweep policy | do not mix arbitrary transform writes with free simulation |

Sleep settled bodies to remove solver work. If an object wakes repeatedly, inspect contact jitter, moving
supports, thresholds, tiny penetrations, constraints, and per-frame property/transform writes before
forcing sleep. Disabled destruction pieces cannot be collision-woken; use only when the lifecycle allows it.

Test mass ratios. Very light bodies constrained/contacting extremely heavy bodies can destabilize stacks
and joints; correct representation and scale before raising iterations or projection.
