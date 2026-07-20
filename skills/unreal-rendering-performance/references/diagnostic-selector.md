# Diagnostic selector

| Measured problem | First inspection | Route |
|---|---|---|
| GPU cost scales strongly with resolution | `profilegpu`, pass event tree | TSR/resolution, pixel-heavy pass |
| Draw/Render thread dominates | Primitive Debugger, `stat sceneRendering`, primitive/section counts | submission/culling/LOD |
| BasePass high | Shader Complexity, material/primitive isolation | materials/overdraw |
| Translucency/post high | Shader Complexity, screen coverage, effect toggles | translucency/resolution |
| Nanite pass/streaming issue | Nanite visualization, `NaniteStats` | Nanite geometry |
| Lumen GI/reflection high | Lumen overview/visualizations, quality A/B | Lumen |
| Shadow Depths/Projection high | VSM cache/caster views, light isolation | VSM or MegaLights |
| many local lights/noisy direct light | MegaLights light/ray/caster visualizers | MegaLights |
| TSR cost or ghosting | Temporal Upscaler visualization, GPU event | TSR |
| GPU memory over budget | Render Resource Viewer, RHI/platform memory stats | resources/streaming |
| camera-cut spike | GPU/Timing trace, VSM/visibility/streaming evidence | subsystem causing burst |

Disable diagnostic views before the timed A/B capture. Their value is attribution, not the final
number.
