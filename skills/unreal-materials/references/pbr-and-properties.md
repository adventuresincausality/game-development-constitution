# PBR inputs and material properties

## Minimum surface

1. Select the Material Domain for the job: Surface unless it is explicitly decal, light function,
   post process, UI, or another specialized domain.
2. Choose Blend Mode. Use Opaque by default, Masked for binary coverage, and Translucent only
   when partial transmission is required.
3. Choose the Shading Model that represents the surface response.
4. Set Two Sided only when backfaces must render and the lighting result is acceptable.
5. Connect Base Color, Metallic, Roughness, Normal, and optional Emissive/AO inputs.

## Input meaning

- **Base Color**: intrinsic surface color, without baked directional lighting.
- **Metallic**: normally 0 for dielectric or 1 for metal; avoid unexplained mid-values.
- **Roughness**: low sharpens reflections; high broadens them.
- **Specular**: dielectric specular level; leave the physically reasonable default unless the
  material calls for a measured exception.
- **Normal**: fine lighting orientation; verify tangent-space import and sampler type.
- **Emissive**: emitted radiance appearance; it is not a free replacement for actual lighting.
- **Opacity Mask**: compared with clip threshold in Masked mode.

## Texture gates

- Color textures use the correct sRGB interpretation; packed masks/data usually do not.
- Normal textures use the Normal sampler/compression path.
- Confirm channel packing, UV set, tiling, addressing, mip behavior, and streaming size.
- Test at near, typical, and far viewing distances under representative neutral lighting.

If an input is disabled, inspect Domain, Blend Mode, and Shading Model before rebuilding the graph.
