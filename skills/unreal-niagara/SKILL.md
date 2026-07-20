---
name: unreal-niagara
description: Design, implement, connect, scale, profile, and debug visual effects in Unreal Engine 5.8. Use for Niagara Systems, emitters, modules, parameters, user parameters, CPU or GPU simulation, sprites, meshes, ribbons, collision, events, data interfaces, Data Channels, pooling, bounds, Effect Types, scalability, lightweight emitters, fluids, flipbooks, or gameplay-driven VFX.
---

# Unreal 5.8 Niagara

## Select the simulation before authoring

Read [`references/system-selector.md`](references/system-selector.md).

- Simple high-count noninteractive effect -> lightweight/stateless emitter candidate.
- Per-particle game-thread data, events, or CPU-only interfaces -> CPU simulation.
- Very high particle count with GPU-supported behavior -> GPU simulation.
- Many repeated gameplay bursts -> shared listener plus Niagara Data Channel candidate.
- Volumetric grid simulation -> Niagara Fluids only after platform/budget review; bake when possible.

Build the cheapest representation that preserves the required read, not the most elaborate simulation.

## Execute

1. Define the visual read, duration, scale, camera range, gameplay contract, and target platforms.
2. Split the effect into semantic emitters; choose renderer and simulation target per emitter.
3. Establish spawn, initialize, update, render, and completion behavior with built-in modules first.
4. Expose a small user-parameter contract; keep gameplay authority outside Niagara.
5. Add collision, events, data interfaces, or Data Channels only for a specific requirement.
6. Set bounds, warmup/pre-roll assumptions, pooling/reuse, and deactivation behavior.
7. Add Effect Type and platform scalability/culling rules before content multiplies.
8. Use Niagara Debugger and target-hardware captures at realistic instance counts and overdraw.

Load only what applies:

- [`references/architecture-and-stack.md`](references/architecture-and-stack.md)
- [`references/gameplay-integration.md`](references/gameplay-integration.md)
- [`references/cpu-gpu-collision-events.md`](references/cpu-gpu-collision-events.md)
- [`references/data-channels-and-interfaces.md`](references/data-channels-and-interfaces.md)
- [`references/scalability-and-pooling.md`](references/scalability-and-pooling.md)
- [`references/recipes.md`](references/recipes.md)
- [`references/debugging-and-profiling.md`](references/debugging-and-profiling.md)

## Required answer format

Return:

1. **Visual/gameplay contract** and chosen representation.
2. **System/emitter architecture**, simulation target, renderers, and module order.
3. **Spawn/lifetime/completion behavior**.
4. **User parameters and ownership/update frequency**.
5. **Collision/event/data-interface assumptions and fallbacks**.
6. **Bounds, pooling, Effect Type, culling, quality tiers, and platform consequences**.
7. **Debugger metrics and visual acceptance checks at realistic counts**.

## Hard rules

- Niagara presents effects; authoritative damage, hits, inventory, and progression remain gameplay-owned.
- Prefer existing modules/templates before custom Scratch Pad or HLSL modules.
- Choose CPU/GPU simulation from data-access, determinism, event, collision, and scale needs.
- Set and test bounds. GPU systems can disappear or waste work when bounds are wrong.
- Every looping system needs an explicit owner and stop/deactivate path.
- Pool only effects that reset cleanly; verify user parameters and persistent state on reuse.
- Use Effect Types for families of effects and platform-aware culling/scalability.
- Measure translucent overdraw as well as simulation time.
- Lightweight emitters trade flexibility for lower CPU/memory cost; verify feature compatibility.
- Niagara Fluids are Beta in UE 5.8 and can be graphically intensive; use 2D/game templates or
  baked flipbooks when they satisfy the effect.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
