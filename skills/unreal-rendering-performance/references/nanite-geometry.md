# Nanite geometry

Use Nanite for supported high-detail static/skeletal content when its virtualized path matches the
target. Preserve conventional LOD/fallback behavior for unsupported platforms and features.

## Diagnose

- Open View Modes -> Nanite Visualization for triangles/clusters/overdraw/streaming/fallback evidence.
- Run `NaniteStats`; use `NaniteStats List` and a named view such as
  `NaniteStats VirtualShadowMaps` when applicable.
- Toggle `r.Nanite 0` only as a diagnostic/fallback-platform experiment; a scene authored around
  Nanite may explode into conventional draw calls or unusable fallback cost.

## Cost levers

| Evidence | Action |
|---|---|
| streaming pool thrashes in a static view | increase `r.Nanite.Streaming.StreamingPoolSize` if memory permits, or reduce resident demand |
| GPU memory/storage excess | reduce source detail where imperceptible; review fallback and texture payloads |
| masked/stacked surface overdraw | simplify aggregate geometry/material coverage; inspect Nanite Overdraw |
| deformation/WPO cost | bound affected content and distance; remove deformation when imperceptible |
| blinking/missing clusters at extreme complexity | inspect `ClustersSW`/`ClustersHW`; size candidate/visible limits conservatively in config |
| foliage loses area | evaluate Preserve Area and foliage-specific representation/LOD |

Larger streaming pools reduce IO/decompression churn but consume more memory. `Max Edge Length Factor`
should remain `0` unless solving observed over-simplification on deforming/spline content; increasing
it preserves detail at additional cost.

Do not use triangle count alone as a performance target. Measure Nanite passes, material/shadow cost,
streaming, storage, and fallback behavior.
