# Budgets and baselines

Specify:

- target FPS and full frame budget;
- rendering-thread and GPU sub-budget with safety margin;
- output resolution and primary/secondary screen percentage;
- renderer path, RHI, shader model, ray-tracing state, upscaler;
- device profile and every `sg.*` quality group;
- scene, camera, time/weather, dynamic objects/lights/effects;
- memory/thermal/power constraints.

Use milliseconds:

| Target | Whole-frame deadline |
|---|---:|
| 30 fps | 33.33 ms |
| 60 fps | 16.67 ms |
| 90 fps | 11.11 ms |
| 120 fps | 8.33 ms |

Keep margin for unsampled combat, traversal, streaming, platform services, and thermal variance. Test
representative worst cases, not an empty editor viewport.

## Resolution sensitivity test

1. Capture at production resolution/screen percentage.
2. Lower primary screen percentage while preserving camera/content/quality.
3. Compare total GPU and each pass.
4. Classify passes that fall with pixel count versus fixed/geometry/submission costs.

A resolution response localizes pixel-scaled work; it does not identify the specific effect. A weak
response does not by itself prove CPU-bound because some GPU passes are weakly resolution-dependent.
