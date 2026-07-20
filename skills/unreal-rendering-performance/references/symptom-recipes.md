# Symptom recipes

| Symptom | Prove first | First bounded experiment |
|---|---|---|
| slow only at high resolution | pixel-scaled GPU passes | lower screen percentage; compare pass deltas |
| slow in dense city/forest | Render thread, Nanite/material/VSM/visibility | isolate primitive/section, overdraw, caster invalidation |
| shadow spike while foliage moves | VSM uncached pages/casters | disable distant WPO/shadows on one foliage class |
| camera cuts hitch | visibility/VSM/streaming/upscaler history | marked trace plus cache/streaming views |
| many lights stay fast but noisy | MegaLights sample competition | reduce competing radii/lights or raise samples in controlled A/B |
| reflections dominate | Lumen reflection pass | compare reflection scalability separately from GI |
| translucent combat effect tanks GPU | translucency/overdraw event | cut overlap/coverage for one effect |
| render thread slow, GPU has headroom | primitive/section/submission count | instance/cull one high-count category |
| GPU memory grows by location | resource snapshot and streaming residency | identify largest new owners and correct residency/LOD |
| low tier changes nothing | device profile/group not applied or restart needed | display active CVars/profile and verify packaged build |
| dynamic resolution bottoms out | sustained GPU cost exceeds minimum-resolution budget or CPU bound | inspect GPU at minimum percentage; optimize dominant pass |

For every recipe, restore the toggle, implement the production-quality change through owned settings,
and capture the same worst case again.
