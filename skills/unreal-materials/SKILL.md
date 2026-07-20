---
name: unreal-materials
description: Select, build, parameterize, layer, profile, and debug materials in Unreal Engine 5.8. Use for PBR inputs, blend modes, shading models, parent materials, instances, functions, static switches, Material Layers, Substrate, decals, Runtime Virtual Textures, Custom Primitive Data, animated material effects, shader permutations, overdraw, or material performance.
---

# Unreal 5.8 Materials

## Ownership boundary

This skill owns surface/shader graph architecture and material parameter behavior. Route artistic
light/exposure/atmosphere setup to [`unreal-lighting`](../unreal-lighting/SKILL.md). If material cost is
only suspected, start with [`unreal-insights-profiling`](../unreal-insights-profiling/SKILL.md); route a
measured render/GPU optimization to
[`unreal-rendering-performance`](../unreal-rendering-performance/SKILL.md).

## Select the architecture first

Read [`references/architecture-selector.md`](references/architecture-selector.md).

- Shared surface family -> parent Material + Material Instances.
- Reusable graph behavior -> Material Function.
- Artist-reorderable surface stack -> Material Layers.
- Global world state -> Material Parameter Collection.
- Per-object variation without unique dynamic instances -> Custom Primitive Data.
- Large static terrain shading cache -> Runtime Virtual Texture.
- Local projected breakup/damage -> decal.

Do not begin from a universal master material. Begin from a bounded surface family and measured
platform needs.

## Execute

1. State the target look, geometry, lighting path, platform, and performance constraints.
2. Choose Material Domain, Blend Mode, Shading Model, and Two Sided behavior before graph work.
3. Build a physically coherent minimum surface and validate texture import/sampler assumptions.
4. Expose only parameters that represent intentional art controls.
5. Extract reused logic into documented functions; use static branching sparingly.
6. Add layers, decals, RVT, WPO, or translucency only when the use case requires them.
7. Test representative instances and worst-case screen coverage.
8. Inspect compile stats, permutations, Shader Complexity/overdraw, and target hardware.

Load only the relevant reference:

- [`references/pbr-and-properties.md`](references/pbr-and-properties.md)
- [`references/instances-functions-and-data.md`](references/instances-functions-and-data.md)
- [`references/layers-substrate-and-decals.md`](references/layers-substrate-and-decals.md)
- [`references/rvt-and-world-effects.md`](references/rvt-and-world-effects.md)
- [`references/effect-recipes.md`](references/effect-recipes.md)
- [`references/profiling-and-debugging.md`](references/profiling-and-debugging.md)

## Required answer format

Return:

1. **Chosen material architecture** and rejected alternatives.
2. **Domain, blend, shading, lighting, and platform assumptions**.
3. **Graph/function/layer structure in evaluation order**.
4. **Parameters with units/ranges and visual effect of increase/decrease**.
5. **Texture, UV, normal, and color-space requirements**.
6. **Permutation, overdraw, memory, WPO, RVT, and lighting consequences**.
7. **Debug views and acceptance shots on target hardware**.

## Hard rules

- Choose blend mode and shading model intentionally; they control available inputs and passes.
- Treat Base Color, Metallic, Roughness, and Specular as physically related inputs, not arbitrary style sliders.
- Use instances for variations and functions for reusable logic; document function inputs/outputs.
- Static parameters create compile-time variants. Audit them; do not expose every feature as a switch.
- Prefer masked over translucent when the look allows it; measure overlapping transparency.
- WPO changes vertices and bounds, not collision. Expand bounds only as much as required.
- Use RVT for suitable mostly static large-area shading; not as a continuously refreshed animation buffer.
- Validate decals on the actual rendering path and receiving material settings.
- Shader instruction count is a clue, not complete timing; profile target hardware and screen coverage.
- Keep lighting diagnosis in `unreal-lighting`; this skill owns surface response.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
