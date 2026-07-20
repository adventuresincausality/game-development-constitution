# Safe asset mutation

## Preflight

Before changing anything:

1. Resolve the exact project, level, folders, classes, and object count.
2. Refuse empty, root-wide, or unexpected scope unless explicitly authorized.
3. Record existing dirty packages and exclude them from implicit saves.
4. Check source-control/read-only state.
5. Produce a dry-run list and collision/dependency warnings.
6. Define backup/revert strategy for non-undoable operations.

## Asset operations

Use Unreal's Asset Tools, Editor Asset APIs/subsystems, factories, import tasks, and rename data.
Never use generic filesystem APIs on `.uasset` or `.umap`; doing so can break internal package
references and redirector handling.

For property changes:

1. Use editor property accessors or native setters.
2. Call the appropriate `Modify()`/transaction-aware path where required.
3. Mark affected packages dirty.
4. Save only the intended packages.
5. Requery/reload and verify the serialized result.

## Transactions

Group undoable object edits in one named `unreal.ScopedEditorTransaction` or Blueprint/C++
transaction. Transactions cover only operations the editor itself supports as undoable. Import,
save, source-control actions, and some asset operations remain irreversible even inside a scope.

Do not confuse canceling a transaction record with reverting partial object mutations. On error,
explicitly undo/restore when the API supports it; otherwise stop, report the changed set, and use
source control/backup recovery.

## Rename/delete/import

- Check destination collisions before rename.
- Fix redirectors deliberately after consumers are updated; do not mass-fix unrelated folders.
- Find referencers before deletion and require explicit confirmation for nonempty dependency sets.
- Import to a staging path, validate, then promote when feasible.
- Make generated names deterministic so reruns update or skip instead of duplicating assets.

## Completion proof

Report planned, changed, skipped, failed, saved, and still-dirty objects separately. Run Data
Validation, dependency checks, and the relevant automation test. Inspect source-control diff and
open a representative changed asset before claiming completion.
