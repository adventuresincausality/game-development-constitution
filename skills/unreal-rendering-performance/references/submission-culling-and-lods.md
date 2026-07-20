# Submission, culling, and LODs

Render-thread cost often follows visible primitive/component/section/light counts and state diversity,
not raw triangle count alone.

## Inspect

- `stat unit`, `stat sceneRendering`, `stat rhi`, and Timing Insights Render/RHI tracks.
- Runtime **Primitive Debugger** (`PrimitiveDebugger.Open`) in Development/Test builds for primitive,
  draw-call, and LOD data. It is Experimental in UE 5.8; use it diagnostically, not as shipping logic.
- Freeze rendering/occlusion and `r.VisualizeOccludedPrimitives 1` to inspect culling behavior.

## Reduce submissions and visibility work

- Instance repeated meshes when transforms/material requirements permit.
- Merge actors/sections only when it does not destroy culling granularity, streaming, interaction, or
  authoring needs.
- Use HLOD for distant groups and conventional skeletal/static LODs where Nanite is not the path.
- Set Max Draw Distance or Cull Distance Volumes for content that becomes irrelevant.
- Keep bounds accurate; oversized bounds harm culling, shadows, and streaming decisions.
- Avoid thousands of independently ticking/updating render components when a batched representation fits.
- Remove material slots/sections only when section submission is measured.

Unreal applies distance, frustum, precomputed visibility, then dynamic occlusion according to method and
platform. Hardware occlusion queries are enabled by default on supported paths. Precomputed Visibility
trades build/runtime memory for reduced runtime rendering work and best fits constrained, mostly static,
small-to-medium environments.

Test occlusion changes during camera motion. More aggressive culling can add popping or query cost and
can be worse than rendering small cheap objects.
