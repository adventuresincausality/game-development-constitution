---
name: unreal-editor-automation
description: Design, implement, run, and debug safe Unreal Editor automation for Unreal Engine 5.8. Use for Editor Utility Widgets, Editor Utility Blueprints, Scripted Actions, Call in Editor, Scriptable Tools, Python Editor scripting, editor subsystems, asset import or batch mutation, commandlets, CI, Data Validation, Automation Tests, Functional Tests, transactions, source control, or the experimental Unreal MCP server and AI-driven editor tools.
---

# Unreal 5.8 Editor Automation

## Select the automation surface

Read [`references/selector-architecture.md`](references/selector-architecture.md).

- Use a **Scripted Action** for a contextual operation on selected assets or actors.
- Use an **Editor Utility Widget** for a persistent dockable UI and human-reviewed batch work.
- Use **Call in Editor** for an action attached to a placed Actor that also has runtime use.
- Use a **Scriptable Tool** for modal viewport interaction with accept/cancel semantics.
- Use **Python** for text-based pipelines, cross-DCC integration, and repeatable batches.
- Use a **commandlet** for unattended/headless work and CI.
- Use **Data Validation** for asset invariants, not as a general behavior-test framework.
- Use **Automation/Functional Tests** for code, system, map, gameplay, and regression checks.
- Use **Unreal MCP** only for bounded AI tool calls in 5.8; it is Experimental.

## Execute safely

1. Define selection/input scope, mutation set, source-control behavior, undo boundary,
   save policy, cancellation, logs, and validation before writing the tool.
2. Separate discovery and planning from mutation. Produce a dry-run report for destructive,
   bulk, or difficult-to-reverse work.
3. Use editor APIs for assets and packages. Never move, rename, or delete `.uasset` files
   with generic filesystem operations.
4. Use `get_editor_property`/`set_editor_property` when scripting reflected editor data so
   editor change notifications run.
5. Wrap only genuinely undoable changes in a transaction. Import, save, source-control,
   and many package operations are not made reversible by a transaction.
6. Mark changed objects/packages dirty, save deliberately, and report every failure.
7. Make reruns idempotent or detect prior output. Test on a disposable subset before the
   full content tree.
8. Run validation/tests and inspect the actual diff before submission.

Load the task reference:

- UI/Blueprint tools: [`references/editor-utilities-blueprint.md`](references/editor-utilities-blueprint.md)
- Python execution/APIs: [`references/python-workflows.md`](references/python-workflows.md)
- mutation guardrails: [`references/safe-asset-mutation.md`](references/safe-asset-mutation.md)
- command line/CI: [`references/commandlets-headless-ci.md`](references/commandlets-headless-ci.md)
- Data Validation: [`references/data-validation.md`](references/data-validation.md)
- test frameworks: [`references/automation-tests.md`](references/automation-tests.md)
- Unreal MCP: [`references/unreal-mcp.md`](references/unreal-mcp.md)
- concrete tools: [`references/patterns.md`](references/patterns.md)
- recovery: [`references/debugging-recovery.md`](references/debugging-recovery.md)

## Required answer format

Return:

1. **Automation surface** and maturity status.
2. **Inputs, selection filters, preconditions, and dry-run output**.
3. **Ordered API/node/command sequence** with editor/runtime boundaries.
4. **Transaction, source-control, save, cancellation, and idempotency policy**.
5. **Validation/test procedure**, logs, exit criteria, and expected diff.
6. **Failure recovery** and any operation that cannot be undone.

Do not invent nodes, APIs, command-line flags, defaults, or MCP tools. Inspect the enabled
5.8 API/tool schema when exact availability matters.

## Hard rules

- Never operate directly on `.uasset`/`.umap` files with `os`, `shutil`, or shell moves.
- Never run a bulk mutation before a scoped dry run or disposable-copy test.
- Never assume a transaction makes import, save, delete, or source-control work reversible.
- Never autosave unrelated dirty packages.
- Never suppress per-asset failures and still report success.
- Never run Python as gameplay code; UE 5.8's embedded Python is editor-only.
- Never expose Unreal MCP beyond loopback; it has no authentication layer.
- Never issue overlapping Unreal MCP tool calls; the server serializes them on the game thread.
- Never let an AI infer permission for destructive or project-wide mutations.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
