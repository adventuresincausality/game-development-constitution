# Runtime Virtual Textures and world effects

## RVT workflow

1. Create a Runtime Virtual Texture asset with the required material type/resolution.
2. Add and size an RVT Volume; assign the RVT asset.
3. Configure writer materials with RVT output expressions.
4. Configure receiving materials with RVT Sample or RVT Sample Parameter.
5. Assign the RVT asset to components that render into it.
6. Verify main-pass behavior, virtual-texture support fallback, mips, memory, and page uploads.

Good writers are mostly static large-area contributors: Landscape, Landscape Splines, static
meshes, instances, and foliage. Skeletal, movable, and frequently animated writers are poor fits
because RVT acts as a shading cache rather than a fully refreshed render target.

Use YCoCg base-color storage when smooth-gradient color quality justifies roughly 25% extra
memory and decode cost. If overlapping writers disappear or order incorrectly, inspect
Translucency Sort Priority; equal priority order is undefined.

## World-space effects

- Global wetness/snow value -> Material Parameter Collection.
- Local accumulation around many objects -> primitive data, masks, decals, or RVT according to scale.
- Vertex wind/displacement -> WPO with explicit amplitude, bounds, LOD, shadow, and Nanite checks.
- Camera-distance simplification -> explicit quality/LOD design, not an unmeasured chain of branches.

WPO does not move collision. When gameplay requires changed collision, modify the owning geometry
or gameplay representation, not only the shader.
