# System architecture and stack order

## Asset roles

- **System**: complete effect, timelines, system-level parameters and scalability.
- **Emitter**: one particle population and behavior stream.
- **Module**: reusable operation in a stage/stack.
- **Parameter**: typed data in engine, user, system, emitter, or particle namespace.
- **Renderer**: converts particle/system data to sprites, meshes, ribbons, lights, or other output.

## Build order

1. Create a System from the closest template or an empty system.
2. Add one emitter per semantic layer: core flash, debris, smoke, trail, decal handoff, and so on.
3. Establish emitter/system lifecycle and loop behavior.
4. In spawn stages, initialize values that are constant over a particle's life.
5. In update stages, integrate motion and change values over time.
6. Bind renderer attributes explicitly; remove unused attributes/modules.
7. Add user parameters only at the system's public integration seam.
8. Validate each emitter alone, then the composed effect.

Module order is behavior order. When a later module overwrites an attribute, earlier work can be
invisible. Debug by watching the attribute and disabling modules from the end of the relevant stack.

Use local/module inputs for internal implementation, particle attributes for per-particle state,
system/emitter parameters for shared simulation state, and user parameters for caller-controlled
values. Name user parameters by meaning and units, not by the current graph node.
