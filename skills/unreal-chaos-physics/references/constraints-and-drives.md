# Constraints and drives

## Build order

1. Place body shapes, centers of mass, and constraint frames correctly.
2. Disable collision between constrained bodies when their shapes should not fight the joint.
3. Lock/free/limit X/Y/Z and Swing1/Swing2/Twist to form the intended hinge, slider, ball, or fixed joint.
4. Test hard limits before enabling soft limits or motors.
5. Add position/orientation and velocity drives with bounded Max Force.
6. Add break/plasticity rules only after stable normal operation.

Parameter effects:

- higher stiffness/drive strength reaches the target harder but can oscillate or demand more solver work;
- higher damping opposes target-relative velocity and reduces oscillation but can feel sluggish;
- restitution adds bounce at a violated limit;
- lower Max Force allows lag/compliance; unlimited/excess force can overpower the assembly;
- SLERP angular drive handles full orientation but does not work when an angular axis is locked;
- Twist and Swing drive works with decomposed axes/locked configurations.

Projection is a post-solve correction. It can stiffen a chain at lower iterations but works poorly while
the chain interacts with other objects and may inject nonphysical correction. Shock Propagation stiffens
chains by increasing parent mass on the last solve iteration but can inject energy. Use both as measured,
bounded tools—not default fixes.

Validate constraint-frame alignment, extreme pose, dropped frame, contact load, break threshold, scale,
and network correction.
