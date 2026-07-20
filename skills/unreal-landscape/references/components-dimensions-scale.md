# Components, dimensions, and scale

## Topology

Landscape Components are the base units for rendering, visibility, collision, and streaming proxies. All components in one Landscape are square and use the same size.

- A component uses one section or `2×2` sections.
- A section is the unit of Landscape LOD transition.
- Each section is a draw call, and every component carries render-thread CPU cost.
- Valid component quad dimensions follow the Landscape texture/mip layout: power-of-two vertices produce power-of-two-minus-one quads for one section, or power-of-two-minus-two component quads for `2×2` sections.
- Epic recommends no more than 1024 components for the largest Landscapes; treat this as an upper guideline, not a target.

Use Epic's valid-dimensions table or the creation UI rather than cropping an arbitrary image to “almost” fit.

## Tradeoffs

### More, smaller components

- finer culling and LOD granularity;
- smaller localized edit/stream units;
- more component CPU overhead and potentially more section draw calls.

### Fewer, larger components

- lower component count;
- coarser culling, LOD, collision, and streaming granularity;
- heavier individual visible/rebuild units.

`2×2` subsections can provide the same terrain resolution with fewer components than four separate one-section components, but still create four section draw calls per component.

## XY scale

XY scale defines vertex spacing in centimeters. At 100, adjacent vertices are one meter apart.

- Smaller spacing expresses smaller terrain features but covers less world area for the same heightmap and can increase pressure for more components.
- Larger spacing covers more area but produces coarser silhouettes, collision, slopes, and deformation.

Do not chase texture detail with geometry. Use materials, normal/detail maps, meshes, decals, and vegetation for sub-vertex detail.

## Z scale

Z scale maps 16-bit height values into world height. Increasing it expands vertical range but also magnifies each height step and changes gameplay slopes. Pick the range before sculpting and leave headroom for intentional edits.

## Layout procedure

1. Convert desired world width to centimeters.
2. Choose the coarsest XY vertex spacing that still represents required gameplay terrain.
3. Select a valid overall resolution and component topology that covers the extent.
4. Calculate Z scale from the source elevation range.
5. Create a small representative slice with the intended topology.
6. Test terrain silhouette, traversal, collision, navigation, LOD, material, and edit speed.
7. Profile component/section cost before committing the entire world.

## Never infer from resolution alone

Two Landscapes with the same vertex resolution can have different physical sizes, precision, component counts, and runtime behavior. Always report resolution together with XY/Z scale, section size, sections per component, and component count.
