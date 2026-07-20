# MegaLights

MegaLights is **Production Ready in UE 5.8**. It replaces several deferred direct-lighting/shadow paths
for local lights and supports many dynamic shadowed area lights. Hardware ray tracing is recommended;
each light can use ray-traced or VSM shadowing.

Directional Light support is opt-in with `r.MegaLights.DirectionalLights 1` and disabled by default.
Epic recommends Deferred Lighting with VSM for a strong sun because the MegaLights path has quality
limitations; a dim, soft moonlight can be a better fit. Sky Light remains outside MegaLights.

## Understand the budget

MegaLights traces a fixed sample budget per pixel toward important lights. Runtime cost is more stable
than per-light traditional paths, but quality/noise worsens when too many important lights compete at
one pixel. More lights are not free artistically even when the timing remains bounded.

## Diagnose

1. Use MegaLights light finder, ray visualizer, and shadow-caster/mismatch views.
2. Compare complete GPU frame time, not only one MegaLights event; it replaces multiple passes.
3. Inspect off-screen and tiny bright lights, huge attenuation radii, overlapping volumes, and shadow
   methods.
4. Test motion/noise at target internal resolution and TSR quality.

## Scale

| Control | Effect |
|---|---|
| `r.MegaLights.Allow 0` | disable per tier/device profile for a fallback path |
| `r.MegaLights.DownsampleMode` | adjust sampling/tracing resolution; stronger downsampling saves work but can reduce quality |
| `r.MegaLights.NumSamplesPerPixel` | more samples improve stability/quality and increase GPU cost |
| Allow MegaLights per light | remove incompatible/problem lights from the path |
| Shadow Method per light | choose ray tracing or VSM with different quality/CPU/memory/GPU tradeoffs |

Start from the Shadow Quality scalability group in `BaseScalability.ini`. High-quality translucency,
volumetric fog, hair, textured area lights, and soft shadows have their own cost; scale only after the
visualizer identifies them.
