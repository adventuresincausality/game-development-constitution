# Parameters, subgraphs, tools, and manual overrides

## Expose parameters deliberately

Expose only values that define a meaningful tool instance:

- density/count target;
- seed;
- allowed slope/height;
- clearance distance;
- asset set or selection table;
- scale/rotation range;
- grid/runtime generation settings when instance variation is legitimate.

Give each parameter a category, order, description, unit, safe range, and default in UE 5.8's
Graph Parameters hierarchy editor. Do not expose internal scratch attributes.

## Reuse hierarchy

- Use named subgraphs for reusable pipeline stages.
- Use UE 5.8 embedded subgraphs for graph-local function-like logic.
- Use graph instances for variations that share implementation but override parameters.
- Mark a graph as a template when it is a starting structure, not a live shared dependency.
- Keep the interface small; sprawling pins usually indicate missing stage boundaries.

## PCG Editor Mode

PCG Editor Mode is Experimental in UE 5.8. It provides Draw Spline, Draw Spline Surface, Paint,
and Volume tools driven by graphs/presets.

For a tool graph:

1. Set compatible tool tags (`SplineTool`, `SplineSurfaceTool`, `PaintTool`, `VolumeTool`).
2. Define the initial actor class and a clear spawned-actor/component naming policy.
3. Expose only instance parameters the artist needs while interacting.
4. Define raycast rules for landscapes, meshes, ignored PCG components, allowed classes, and
   selection constraints.
5. Test Apply, Cancel, undo/redo, reload, source control, and regeneration.

## UE 5.8 manual editing/data overrides

The new non-destructive manual-editing/Data Override system is Experimental.

- Mark only the node/output that owns artist-editable data for manual editing.
- Use selection, exclusion, modification, and restore rather than detaching the whole result.
- Inspect all overrides in the Data Overrides window.
- Define team policy: override intent, author, and whether it survives graph regeneration.
- Verify overrides after upstream graph edits, cleanup/regenerate, map reload, cook, and merge.
- Prefer a source input/exclusion layer when an exception is systemic; reserve manual overrides
  for genuine local art direction.

Do not silently convert override data into graph constants or delete it during cleanup.
