# Layers, Substrate, and decals

## Layering

Use Material Functions with Material Attributes when the graph author owns a fixed blend
architecture. Use Material Layers when artists need to reorder, swap, and tune layers in the
Material Instance Editor. Every extra per-pixel layer and mask still has a rendering cost.

For each layer define:

- physical surface contribution;
- blend mask source and coordinate space;
- normal-combination method;
- which values remain exposed;
- fallback for lower quality/platform tiers.

## Substrate

Use Substrate when the surface requires BSDF composition that the conventional shading model
cannot express cleanly. Confirm project enablement, platform support, material complexity, and
the UE 5.8 production decision before making it a shared dependency. Do not migrate a simple
surface merely because the framework is newer.

## Decals

1. Create a material with Deferred Decal domain and the required decal blend response.
2. Display it through a Decal Actor/component or decal mesh.
3. Confirm the receiving materials respond to the relevant DBuffer channels.
4. Use sort priority only where overlap order matters; avoid a proliferation of unique priorities.
5. Inspect angle stretch, projection depth, fade distance, overlap, and target-platform path.

DBuffer is the default decal path for UE5 projects. Decals are suited to localized breakup,
grime, damage, and signage; do not replace base material structure with thousands of overlapping
full-screen projections.
