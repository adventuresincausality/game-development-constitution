# Concrete data patterns

## Item catalog with runtime inventory

```text
UItemDefinition : UPrimaryDataAsset
  ItemId or stable PrimaryAssetId
  DisplayName, Tags, tuning
  UI bundle: icon
  Gameplay bundle: actor class, mesh/effects

FInventoryEntry (runtime/save)
  DefinitionId
  Quantity
  Durability
  Instance modifiers
```

Load `UI` for menus; load `Gameplay` before spawning/equipping. The definition never stores
quantity or ownership.

## Balance table

Use one `FTableRowBase` schema for homogeneous weapon or progression values. Put heavy visual
assets behind soft references. Expose `FDataTableRowHandle` to authored consumers. Validate
unique domain IDs, monotonic thresholds where required, and all referenced rows.

## Layered tuning

Use a Composite Data Table only for a small, visible base-to-override stack sharing one schema.
Validate duplicate-row precedence. If sources are discovered dynamically, asynchronously
acquired, or cached under different lifetimes, use a Data Registry instead.

## Catalog browser tool

Query the Asset Registry by narrow path/class/tag filters, display `FAssetData`, then load only
the selected record. Never load the entire catalog merely to populate a list.

## Menu-to-match preload

1. Resolve selected Primary Asset IDs.
2. Request the next phase's bundles asynchronously.
3. Display progress and allow controlled cancellation.
4. Verify every required object in completion.
5. Transfer ownership to the match/session object.
6. Enter the match only after required content is resident.
7. Release at match teardown after dependent actors are gone.

## Validation CI gate

Run C++ data validation in a headless editor job, capture exit status and logs, then cook a
representative target. Treat invalid definition assets and missing cook dependencies as build
failures. Keep expensive full-project relationship checks separate from fast on-save checks.
