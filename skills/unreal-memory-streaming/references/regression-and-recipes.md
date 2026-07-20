# Regression and recipes

## Regression record

| Metric | Baseline | Candidate | Budget/result |
|---|---:|---:|---|
| peak process/platform memory | | | |
| steady memory after traversal | | | |
| texture/VT/Nanite pool pressure | | | |
| ready latency / worst hitch ms | | | |
| PSO misses/runtime compile hitches | | | |
| visual quality/fallback result | | | |

Run repeated cold and warm samples. Preserve device profile, build, route, speed, camera, content, and
cache preparation. Reject wins that shift work past the capture, lower required quality, or break cook.

## Symptom recipes

| Symptom | Bounded experiment |
|---|---|
| opening one menu loads a level's content | Reference Viewer from widget/class default; soften first boundary |
| textures stay blurry | build/inspect streaming data, then compare wanted versus budgeted mips |
| texture pool over budget | identify valid demand/forced/non-streaming owners before pool or mip change |
| VT tiles flicker | identify saturated format pool; A/B fixed pool size within VRAM budget |
| static Nanite view keeps streaming | inspect pool thrash; A/B pool or resident demand |
| repeated spawn/despawn grows RAM | marked Memory Insights retained-allocation query |
| first material use hitches | cold PSO validation; wait/precache or cover documented misses |
| teleport arrives into missing world | destination source plus complete readiness gate and timeout |
