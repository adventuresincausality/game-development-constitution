# Materials, translucency, and overdraw

## Diagnose

1. Confirm BasePass, translucency, post, or a material-bound draw is significant in GPU timing.
2. Use Shader Complexity (`Alt+8` / `viewmode shadercomplexity`) to locate expensive pixel regions.
3. Inspect Quad Overdraw/other supported view modes when tiny triangles or repeated coverage is suspected.
4. Isolate the material/primitive/effect and re-capture the same frame.

Shader Complexity primarily visualizes instruction count. It does not reliably price texture fetches,
bandwidth, divergent loops, vertex/WPO work, or platform-specific scheduling. Use it to locate suspects,
then prove cost with GPU milliseconds.

## Levers

- Reduce full-screen or large-screen material coverage before micro-optimizing a tiny object.
- Reduce overlapping translucent/masked layers, particle size, spawn density, and unnecessary sorting.
- Replace translucent effects with opaque/masked/dithered/mesh alternatives only when the visual result
  and temporal stability remain acceptable.
- Remove unused texture samples/features; move invariant work out of per-pixel paths where supported.
- Bound WPO and stop distant/imperceptible deformation.
- Reduce unique static-switch combinations/permutations; do not convert runtime decisions to static
  switches without considering compile/package/PSO cost.
- Reduce material slots/sections when submission evidence supports it; preserve authoring flexibility
  where the measured cost is elsewhere.

Optimize the exact platform permutation and worst visible overlap. Editor shader stats alone are not a
shipping GPU measurement.
