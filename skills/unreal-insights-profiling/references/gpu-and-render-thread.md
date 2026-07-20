# GPU and render thread

## Attribute GPU cost

1. Confirm GPU is plausibly the bound with `stat unit`.
2. Run `stat gpu` for a live overview.
3. Capture one representative frame with `profilegpu` or `Ctrl+Shift+;`.
4. Expand the event tree from the largest millisecond pass to its children.
5. Repeat at the same camera, resolution, screen percentage, and quality.
6. Toggle one supported renderer feature or quality control and compare the same pass.

GPU time may contain idle time. Asynchronous compute overlaps passes, so individual event totals can
overlap or appear inflated. Disable async compute only for isolated diagnosis when Epic's subsystem
guide explicitly recommends it; restore it for the real end-to-end measurement.

## Separate submission from shading

| Evidence | Likely direction |
|---|---|
| Draw/Render thread dominates, many primitives/sections | reduce submissions, components, sections, visibility work |
| GPU base pass dominates | material/pixel coverage/geometry path |
| shadows dominate | light/shadow method, invalidation, caster coverage |
| translucency/post dominates | screen coverage, layer count, resolution, effect quality |
| lowering resolution helps strongly | pixel-bound passes/upscaler tradeoff |
| lowering resolution barely helps | geometry/submission/CPU or fixed-cost GPU work |

Use the rendering-performance skill only after the pass or submission cost is identified.
