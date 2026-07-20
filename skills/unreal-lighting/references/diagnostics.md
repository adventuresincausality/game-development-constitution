# Diagnostics and validation

| Symptom | Check | Action |
|---|---|---|
| Everything is too bright/dark | Exposure mode, EV100, compensation | Lock Manual exposure; establish light values; then restore bounded adaptation |
| Bright object at screen edge pumps exposure | HDR histogram / metering | Add center-weighted Exposure Metering Mask or narrow histogram selection |
| Interior is black with Lumen | Surface Cache/Card coverage, mesh scale/topology | Split overly complex meshes; verify distance fields and Lumen representation |
| Light leaks through thin walls | Lumen representation, wall thickness, shadow method | Increase physical thickness; inspect distance fields; choose appropriate tracing/shadow path |
| Reflections miss objects | Lumen reflection mode/scene representation | Inspect Lumen scene; consider hardware RT where target supports it |
| Soft shadow is wrong | Source size, not intensity | Tune Source Radius/Width/Height/Angle |
| Local light costs too much | Bounds, shadows, overlaps | Reduce attenuation, disable unnecessary shadows, profile MegaLights versus conventional path |
| MegaLights looks noisy/blurry | Too many important overlapping lights per pixel | Narrow bounds, merge small lights, reduce local complexity |
| MegaLights ghosts in motion | Denoiser under high stochastic complexity | Simplify overlapping lights; test shadow method and temporal behavior |
| Fog glows everywhere | Volumetric scattering and large light bounds | Lower scattering; narrow bounds; remove irrelevant fog contribution |
| Day/night color looks fake | Manual tint fights Sky Atmosphere | Return sun toward neutral and let atmospheric scattering drive color |
| Emissive surface does not light enough | Emissive is visible but GI contribution is insufficient/noisy | Add a matching controlled light; do not rely on tiny bright emissives alone |
| Shadow acne/peter-panning | Bias settings or geometry | Inspect geometry/normals; tune bias minimally; verify VSM/ray-traced path |

## Debug sequence

1. Disable stylistic post effects that obscure diagnosis.
2. Lock exposure.
3. Inspect unlit/material values where relevant.
4. Inspect HDR (Eye Adaptation).
5. Inspect Lumen Overview, Surface Cache, and reflection views.
6. Inspect shadow/VSM or ray-tracing debug views.
7. Inspect light bounds and overlapping influence.
8. Measure GPU timing on target hardware and intended scalability.
9. Re-enable post effects one category at a time.

## Acceptance checks

- Focal subject reads at gameplay camera distance.
- Exposure transitions behave intentionally in both directions.
- Direct, indirect, reflection, emissive, and volumetric contributions are identifiable.
- No major light leaks, black Lumen surfaces, temporal ghosting, or unstable pumping.
- Scene remains legible at required scalability tiers.
- GPU cost meets the declared budget on target hardware.
