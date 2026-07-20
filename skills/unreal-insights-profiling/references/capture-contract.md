# Capture contract

Record this metadata before interpreting a trace:

| Field | Required value |
|---|---|
| Target | platform, device model/CPU/GPU/RAM, driver/OS |
| Build | changelist/commit, Development/Test/Shipping, packaged/editor |
| Display | output resolution, screen percentage/dynamic resolution, refresh/VSync |
| Quality | device profile, scalability groups, ray tracing/upscaler path |
| Workload | map, save/state, camera path, player/AI/effect counts, duration |
| Budget | frame ms and percentile/hitch threshold; memory/load/net budget if relevant |
| Capture | command line, channels, warm-up, marked start/end, trace filename |

Frame budgets before platform overhead or safety margin:

| Target | Frame time |
|---|---:|
| 30 fps | 33.33 ms |
| 60 fps | 16.67 ms |
| 90 fps | 11.11 ms |
| 120 fps | 8.33 ms |

Use a repeatable traversal or automated scenario. Warm shader/asset caches only when measuring
steady state; preserve a cold-start run when first-use hitch or loading is the question. Record both
if players experience both.

Reject comparisons that changed more than the intended variable, ran different content paths, used
different thermal/power states, or silently changed resolution/scalability.
