---
name: unreal-lighting
description: Design, tune, profile, and debug lighting in Unreal Engine 5.8. Use for Lumen GI and reflections, MegaLights, physical light units, exposure and eye adaptation, Directional/Sky/Point/Spot/Rect Lights, Sky Atmosphere, fog, clouds, shadows, interiors, exteriors, day-night scenes, mood targets, or lighting performance problems.
---

# Unreal 5.8 Lighting

## Ownership boundary

This skill owns artistic light, exposure, atmosphere, physical units, and target-look setup. If the
request is an unmeasured performance complaint, start with
[`unreal-insights-profiling`](../unreal-insights-profiling/SKILL.md); after a render/GPU bound is
measured, route optimization to
[`unreal-rendering-performance`](../unreal-rendering-performance/SKILL.md). Route shader/surface graph
architecture to [`unreal-materials`](../unreal-materials/SKILL.md).

## Establish constraints first

Record:

- target platforms and frame-rate budget;
- deferred/forward renderer and scalability target;
- dynamic versus baked lighting requirement;
- Lumen software or hardware ray tracing;
- MegaLights enabled or disabled;
- intended exposure behavior: fixed, bounded adaptation, or full adaptation;
- reference image and desired focal hierarchy.

Do not tune lighting before exposure behavior is deliberate. A changing camera exposure
can hide whether the light or the exposure is wrong.

## Execute

1. Choose the rendering path and mobility.
2. Establish exposure and physical units.
3. Build broad environment light before local accents.
4. Add local lights with the smallest useful bounds.
5. Tune shadow softness with emitter size, not arbitrary intensity changes.
6. Inspect Lumen, exposure, shadow, and light-complexity visualizations.
7. Profile on target hardware.

Read:

- [`references/parameter-effects.md`](references/parameter-effects.md) for control behavior.
- [`references/recipes.md`](references/recipes.md) for concrete target looks.
- [`references/diagnostics.md`](references/diagnostics.md) for failures and performance.

## Required answer format

Return:

1. **Rendering/exposure assumptions**.
2. **Actor and component setup**.
3. **Ordered changes**, naming UE 5.8 properties and editor locations.
4. **Parameter direction**: what increasing or decreasing each value does.
5. **Starting values only when documented or physically grounded**; otherwise give a
   bounded tuning procedure.
6. **Debug views and console checks**.
7. **Performance validation** on the requested target.

Never prescribe an isolated intensity number without its light type, units, exposure,
distance, source size, and target platform.

## Hard rules

- Use Lux for Directional Light, cd/m² for Sky Light luminance, and Candela/Lumens for
  local lights when inverse-square falloff is enabled.
- Treat attenuation radius as an influence bound, not a brightness control.
- Treat exposure compensation in stops: `+1` doubles displayed brightness; `-1` halves it.
- Equal Min/Max EV100 disables auto exposure.
- With Lumen enabled, precomputed static lighting contributions are disabled/hidden.
- MegaLights handles local lights. Sky Light remains outside it. Directional Light support is
  opt-in with `r.MegaLights.DirectionalLights 1`, disabled by default, and has documented
  quality limitations; prefer Deferred Lighting with VSM for a strong sun unless target tests
  justify the MegaLights path.
- Narrow overlapping light bounds. MegaLights has fixed sampling; excessive local
  complexity reduces quality instead of scaling cost conventionally.
- Mark experimental features as experimental and provide a shippable fallback.
- Validate with visualizations and profiling, not the editor beauty view alone.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
