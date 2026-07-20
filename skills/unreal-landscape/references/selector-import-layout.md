# Terrain selector, import, and initial layout

## Representation selector

| Requirement | Default representation |
|---|---|
| Broad continuous ground, hills, valleys | Landscape |
| Cave, arch, overhang, vertical cut | Static/Nanite mesh integrated with Landscape |
| Small isolated terrain prop | Static mesh |
| Road that raises/lowers and paints terrain | Landscape Spline on a Spline Edit Layer |
| Local procedural height/weight stamp | Landscape Patch on a Patch Edit Layer |
| Runtime deformable arbitrary surface | A dedicated runtime deformation/mesh solution; Landscape authoring is not the default |

Prototype the transition between Landscape and meshes. Hide seams through placement, material/RVT blending, decals, rocks, or vegetation; do not rely on a single shading trick.

## Before creation/import

Record:

- playable XY extent and non-playable vista extent;
- minimum and maximum elevation, including depth below datum;
- desired XY vertex spacing and smallest shape the heightfield must express;
- valid heightmap resolution and component topology;
- World Partition use and tiled-import convention;
- coordinate origin, tile naming/order, Y-axis orientation, units, and Z-scale formula;
- source heightmap version and checksum/path for reproducibility.

## Supported heightmap paths

UE 5.8 supports 16-bit grayscale PNG, 8-bit `.r8`, 16-bit `.r16`, and RAW with a JSON sidecar. Prefer 16-bit source data for smooth elevation precision. Target-layer weightmaps are normally single-channel 8-bit data.

For a new Landscape:

1. Enter Landscape mode (`Shift+2`).
2. Choose **Import from File** or **Create New**.
3. Enable Edit Layers.
4. Select the material only if its Target Layer contract is already known.
5. For World Partition tiled import, set and record partition grid/region settings and accept the tiled path prompt.
6. Confirm heightmap resolution, component topology, XY scale, Z scale, and `Flip Y Axis` before import.
7. Import, then immediately verify seams, orientation, elevation extrema, and world size.

## Z-scale calculation

Epic documents:

```text
Z scale = elevation range in meters × 100 × 0.001953125
```

The source range must include the full desired vertical span, not merely the height above sea level. Document where the source zero/datum maps into the UE height range.

## Existing Landscape import modes

- `Original`: original resolution at gizmo location.
- `Expand`: expand data to fit.
- `Resample`: resample to the existing Landscape.
- `Subregion`: import without resolution checks; used for World Partition subregions.

Resampling changes data. Keep the source and export a verification copy after the operation.

## Acceptance

- no tile rotation/flip/seam mismatch;
- known world points match source coordinates and elevations;
- slopes and plateaus support intended movement/camera;
- a round-trip export records the blended result or selected Edit Layer intentionally;
- the import can be repeated from a clean checkout with the same result.
