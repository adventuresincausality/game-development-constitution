# Profiling and debugging

## Visual defect ladder

1. Preview texture channels and constants independently.
2. Verify UV set/scale and object/world/tangent coordinate spaces.
3. Verify sRGB, normal sampler, compression, channel packing, and mip level.
4. Reduce the graph to the minimum surface; re-enable functions/layers one at a time.
5. Test neutral direct lighting before blaming the material or lighting system.
6. Inspect bounds, decals, RVT writer/receiver assignment, and platform feature switches.

## Cost ladder

1. Record target resolution, view, material screen coverage, and overlapping transparency.
2. Use Material Editor stats/platform stats for compiled shader information.
3. Use Shader Complexity (`Alt+8`) to locate costly pixel regions and particle/translucency overdraw.
4. Use Material Analyzer for static-switch/permutation families.
5. Use GPU profiling/Insights on target hardware to verify actual passes and time.
6. Change one suspected cost and compare the same capture.

Instruction count alone misses important differences such as texture fetches, bandwidth, divergent
work, and vertex cost. A costly pixel shader matters most over large screen area; WPO/vertex work
matters for every submitted vertex. Translucent layers can repeatedly shade the same pixel.

Common causes:

- Pink/checker/default material -> compile error, missing shader, unsupported path.
- Flat/no normal response -> sampler/import type or tangent basis.
- Dark/bright mismatch -> color-space or packed-channel error.
- Flickering displacement -> bounds, precision, temporal aliasing, or LOD discontinuity.
- Shader compile explosion -> unconstrained static switches and instance override combinations.
