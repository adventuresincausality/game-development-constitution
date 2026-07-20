# Collision and queries

## Configure the matrix

1. Define stable Object Channels for categories and Trace Channels for questions.
2. Give each component a preset: Collision Enabled mode, Object Type, and per-channel Block/Overlap/Ignore.
3. Use Query Only when no solver contact is required; Physics Only when only simulation contacts matter;
   use Query and Physics only when both are consumed.
4. Enable Generate Overlap Events or Simulation Generates Hit Events only where the callback is needed.
5. Test both participants' response rows; the interaction resolves from both settings.

## Shape selection

- sphere/capsule/box: cheapest stable approximation for many props/characters;
- multiple simple primitives: preserve concavity with bounded shape count;
- convex hulls: irregular simulated bodies, avoiding excessive hull detail;
- complex trimesh: detailed scene queries/static collision when justified.

Collision Complexity:

| Mode | Behavior |
|---|---|
| Simple And Complex | simple shapes for simple queries/simulation, trimesh for complex queries |
| Use Simple As Complex | complex queries use simple shapes; saves trimesh memory/expense |
| Use Complex As Simple | simple queries/other bodies collide with trimesh; this object cannot simulate |

Use CCD on fast small bodies only after proving tunneling. It increases collision work and cannot repair
bad collision geometry, teleportation, or an excessively large timestep.

Validate at gameplay scale, maximum speed, rotating thin obstacles, low frame rate, and cooked collision.
