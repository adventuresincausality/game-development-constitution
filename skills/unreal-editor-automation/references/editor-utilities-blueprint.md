# Blueprint editor utilities

## Scripted Actions

Create **Content Browser > Editor Utilities > Editor Utility Blueprint** and choose:

- `AssetActionUtility` for selected Content Browser assets;
- `ActorActionUtility` for selected Level actors.

Expose a function/custom event with **Call in Editor**. Restrict **Supported Classes** so the
action appears only for valid targets. Validate dynamic inputs; the editor checks input types,
not whether a value is present or sensible.

## Editor Utility Widgets

Use an Editor Utility Widget when users need filters, preview, progress, warnings, and explicit
apply/cancel controls. Create it under **Editor Utilities > Editor Utility Widget** and run it as
an editor tab.

Recommended flow:

1. Collect selection/path/filter inputs.
2. Scan and display the candidate set.
3. Show planned changes and non-undoable consequences.
4. Require explicit **Apply** for mutations.
5. Provide progress/cancel for long batches.
6. Validate and display a per-object result table.

Editor Utility Widgets and Editor Scripting Utilities are documented as Beta in 5.8.

## Call in Editor and startup objects

Use **Call in Editor** for functions/events on a placed Actor when the same graph must be usable
at runtime or needs level context. An editor-only base class exposes more editor APIs but is not
included in packaged applications.

Startup Objects instantiate when a project opens and invoke their startup event. Keep startup
work fast, idempotent, and limited to registration/listeners. Do not perform bulk asset mutation
at editor startup. The startup-object workflow is Beta in 5.8.

## Scriptable Tools

Use a Scriptable Tool for modal viewport editing. Its managed lifecycle, shutdown before save or
PIE, deferred autosave, and accept/cancel model are safer for temporary preview actors and direct
viewport interaction than a non-modal widget. The system is Beta in 5.8.

## Editor-only boundary

Place editor tool code and dependencies in editor-only Blueprints/modules/plugins. Prevent
runtime assets from hard-referencing editor utility classes. Test a Shipping cook for accidental
editor-only references.
