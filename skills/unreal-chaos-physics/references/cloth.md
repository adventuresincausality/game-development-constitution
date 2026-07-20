# Chaos Cloth

Chaos Cloth is **Production Ready in UE 5.8**. Prefer the Chaos Cloth Asset/Dataflow workflow for new
authoring and convert legacy skeletal-mesh cloth when continued editing/round-trip needs justify it.

## Authoring sequence

1. Import/build the render and simulation meshes; keep simulation topology only as dense as deformation
   requires.
2. Define skin weights, fixed/kinematic regions, seam/panel construction, and cloth-to-character mapping.
3. Paint/author constraint masks for max distance, stiffness, damping, bending, and related properties.
4. Add collision primitives/physics asset with simple, stable shapes.
5. Configure gravity, wind, animation drive, self/intersection behavior, and solver iterations deliberately.
6. Build cloth simulation LODs and validate transition behavior.

Parameter directions:

- more simulation vertices/iterations/collision shapes improve potential fidelity and raise CPU cost;
- higher stiffness resists stretch/bend but can require finer timesteps/iterations;
- damping reduces oscillation but can deaden motion;
- stronger animation drive holds cloth closer to animated pose and reduces free secondary motion;
- self-collision can be expensive; enable only where visible intersections justify it.

Test worst animation speed, teleports, spawn, LOD changes, wind, frame spikes, character scaling, multiple
characters, and collision extremes. Reset/teleport cloth state explicitly when discontinuous movement
would stretch history across the world.

Authoritative gameplay must not depend on cloth particle contacts. Use separate collision/gameplay shapes.
