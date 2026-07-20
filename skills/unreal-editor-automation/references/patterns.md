# Concrete automation patterns

## Safe batch property editor

```text
Input: folder, class, predicate, property, proposed value
Discover: Asset Registry / editor subsystem
Plan: old -> new table, invalid objects, count, dirty/source-control state
Apply: one named transaction for undoable edits
Save: only successfully changed packages selected by policy
Verify: reload/requery property, Data Validation, diff
```

Reject unknown property names, incompatible types, root-wide accidental scope, and an empty filter
that broadens selection.

## Naming validator and fixer

Keep validation and mutation separate. Validator reports naming failures without changing data.
Fixer computes collision-free target paths, shows referencers and redirector consequences, then
uses Asset Tools rename APIs. Never use filesystem rename.

## Deterministic import pipeline

1. Parse a versioned manifest.
2. Validate source existence, destination paths, factories/options, and collisions.
3. Import into staging using `AssetImportTask`/Asset Tools.
4. Apply editor properties and build derived data where required.
5. Run validators and representative opens/compiles.
6. Promote/rename through Unreal APIs.
7. Save intended packages and emit a manifest of results.

## Editor Utility Widget wrapper

The widget owns filters, preview, progress, cancel, and user confirmation. A reusable service owns
discovery/mutation. The widget never embeds the only implementation of a production pipeline.

## CI data gate

Run Data Validation, then project automation tests, then a representative cook. Persist reports
and engine logs. Treat missing reports, timeouts, partial processing, and unexpected dirty/output
counts as failures.

## Bounded MCP tool

Expose a typed operation with a narrow path root and `dry_run=true` default. The plan returns
candidate object paths and requested changes. Apply requires explicit confirmation token/request,
runs serially, validates, saves only its packages, and returns structured results. Do not expose
an unrestricted “execute editor command” tool to compensate for missing schema.
