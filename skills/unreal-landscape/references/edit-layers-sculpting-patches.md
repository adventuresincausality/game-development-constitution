# Edit Layers, sculpting, and patches

## Edit Layer contract

Landscape Edit Layers are stack-based, non-destructive containers for heightmap, weightmap, and visibility data. New Landscapes enable them automatically in UE 5.8. The default project limit is eight and is configurable.

Use a small semantic stack, for example:

```text
BaseImport
BroadSculpt
GameplayCorrections
SplineProcedural
PatchProcedural
PaintArtDirection
```

More layers increase evaluation, authoring, merge, and diagnosis cost. Add a layer only when it represents distinct ownership or must be independently hidden/reordered.

## Editing rules

- Lock completed/owned layers.
- Use visibility and **Layer Contribution** (`Lit > Visualizers > Layer Contribution`) to isolate effects.
- Record whether height/paint alpha is intentionally additive, subtractive, or zero.
- Erase on an Edit Layer removes that layer's contribution; it is not necessarily “sculpt terrain downward.”
- `Collapse` and `Collapse All Layers` are destructive. Save/source-control before flattening.
- Deleting a layer deletes its height, weight, visibility, and assigned Blueprint Brush data.

## Sculpting workflow

1. Sculpt broad landforms before detail.
2. Establish playable grades, ledges, sightlines, drainage/water bounds, and landmarks.
3. Use Smooth sparingly; repeated smoothing erases intentional terrain language.
4. Put gameplay corrections on a separate layer so art changes cannot silently remove them.
5. Rebuild/check collision and NavMesh after meaningful height changes.
6. Test movement agents and cameras, not only the landscape viewport.

## Special procedural layers

### Spline Edit Layer

Stores Landscape Spline deformation/paint. It accepts procedural spline data and cannot be hand-sculpted or painted.

### Patch Edit Layer

Stores Landscape Patch components. Patches can read textures/render targets and alter height/weight data. Patch inputs are editor-only and results are baked into the final Landscape, so the procedural source does not add runtime memory/performance by itself.

Use patches for reusable stamps, local terrain fitting, or actor-owned deformation that must remain editable. Use ordinary sculpt layers for unique manual art.

## Change validation

After reordering, changing alpha, importing, or modifying a procedural layer:

- isolate every layer contribution;
- inspect boundaries between loaded regions/components;
- recheck Landscape Splines, water, and patches;
- validate painted Target Layers and physical surfaces;
- rebuild Nanite representation if enabled;
- rebuild navigation and dependent PCG/HLOD as applicable;
- save/reload and cook a representative map.
