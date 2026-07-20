---
name: unreal-chaos-physics
description: Design, implement, tune, replicate, optimize, and debug Chaos Physics systems in Unreal Engine 5.8. Use for collision channels and shapes, scene queries, rigid bodies, mass, damping, friction, restitution, CCD, forces and impulses, Physics Constraints and drives, substepping, async/fixed physics, networked physics replication modes and resimulation, Physics Assets, ragdolls, physical animation, Geometry Collections, fracture and clustering, Chaos Fields, destruction caches, Chaos Cloth, Chaos Visual Debugger, unstable simulation, tunneling, jitter, explosions, or physics performance.
---

# Unreal 5.8 Chaos Physics

## Choose the physical contract first

Read [`references/system-selector.md`](references/system-selector.md).

1. Define which interactions are authoritative gameplay and which are cosmetic simulation.
2. Choose query-only, simple rigid body, skeletal Physics Asset, constraint assembly, Geometry
   Collection, cloth, or cached playback.
3. Define collision object/trace channels, shape representation, mass/inertia, timestep, sleep, and
   network authority before tuning forces.
4. Build the smallest stable case at target scale and frame-rate range.
5. Add constraints, drives, fields, fracture, cloth, and replication incrementally.
6. Reproduce worst contact counts, piece counts, player latency, and frame spikes on target hardware.
7. Capture Chaos Visual Debugger plus Timing/Network Insights when the failure is not visible in one
   component's settings.

Use `unreal-replication` for general Actor/property/RPC ownership. This skill owns physics-specific
replication modes, inputs/state history, correction, and resimulation.

Load only what applies:

- [`references/collision-and-queries.md`](references/collision-and-queries.md)
- [`references/rigid-bodies-forces-and-sleep.md`](references/rigid-bodies-forces-and-sleep.md)
- [`references/constraints-and-drives.md`](references/constraints-and-drives.md)
- [`references/timestep-substepping-and-async.md`](references/timestep-substepping-and-async.md)
- [`references/networked-physics.md`](references/networked-physics.md)
- [`references/physics-assets-and-ragdolls.md`](references/physics-assets-and-ragdolls.md)
- [`references/destruction-collections-and-fields.md`](references/destruction-collections-and-fields.md)
- [`references/cloth.md`](references/cloth.md)
- [`references/debugging-and-performance.md`](references/debugging-and-performance.md)
- [`references/use-case-recipes.md`](references/use-case-recipes.md)

## Required answer format

Return:

1. **Gameplay authority and chosen physics representation**.
2. **Collision/query matrix**, shapes, scale, mass/inertia, and physical material.
3. **Timestep/threading/substep assumptions** and failure frame-rate.
4. **Forces, impulses, constraints, drives, fields, or fracture/cloth settings** with units/effects.
5. **Network replication mode**, input/state ownership, correction, and latency test if multiplayer.
6. **Performance budget** for bodies, contacts, constraints, pieces, cloth vertices, events, and traces.
7. **Chaos Visual Debugger/Insights evidence** and acceptance checks.

## Hard rules

- Prefer simple primitives/convex collision for simulation; `Use Complex Collision As Simple` cannot
  simulate the object itself.
- Separate Query Only, Physics Only, and Query and Physics behavior deliberately.
- Enable overlap/hit events only for consumers that need them; event generation has work and both sides'
  response settings matter.
- Use force for sustained acceleration and impulse for an instantaneous change. Apply at location only
  when induced torque is intended.
- Do not repair scale, mass, collision, or timestep errors by arbitrary extreme damping/solver values.
- Treat UE 5.8 substepping, async substepping, and async physics settings as Experimental and test every
  platform/gameplay dependency.
- Physics callbacks under substepping may produce multiple ordered contact transitions in one game frame.
- Default, Predictive Interpolation, and Resimulation solve different network problems; Resimulation is
  more costly and the Network Physics Component requires manual C++ integration.
- Chaos Cloth is Production Ready in UE 5.8; Chaos Caching remains Experimental.
- Bound destruction piece/contact/event lifetime with clustering, sleep/disable/removal, and pooling.
- Do not make authoritative damage depend on nondeterministic cosmetic debris or cloth contacts.
- Profile the complete scene; a stable isolated asset can fail under real contact and solver load.

See [`references/sources.md`](references/sources.md) for the UE 5.8 primary-source trail.
