---
name: unreal-data-assets-tables
description: Design, implement, load, cook, validate, and debug data-driven content in Unreal Engine 5.8. Use for UDataAsset, UPrimaryDataAsset, Data-Only Blueprints, Data Tables, Curve Tables, Composite Data Tables, Data Registries, FPrimaryAssetId, Asset Manager scan rules, asset bundles, hard versus soft references, asynchronous loading, Asset Registry queries, Primary Asset Labels, cooking, chunking, or data validation.
---

# Unreal 5.8 Data Assets and Tables

## Ownership boundary

This skill owns definition schemas, stable asset IDs, discovery, Asset Manager rules, bundles, and
content-to-cook/chunk ownership. Route runtime residency, reference-chain hitches, and unload policy to
[`unreal-memory-streaming`](../unreal-memory-streaming/SKILL.md), artifact construction and packaged-only
failure isolation to [`unreal-packaging-deployment`](../unreal-packaging-deployment/SKILL.md), and mutable
player/world persistence to [`unreal-save-load`](../unreal-save-load/SKILL.md).

## Select the representation

Read [`references/selector-model.md`](references/selector-model.md) before creating a schema.

- Use a **Data Asset** for one inspectable authored definition with heterogeneous fields.
- Use a **Primary Data Asset** when the definition needs a stable `FPrimaryAssetId`,
  Asset Manager discovery, bundles, explicit loading, or cook rules.
- Use a **Data-Only Blueprint** when authored definitions require inheritance.
- Use a **Data Table** for many homogeneous rows sharing one `FTableRowBase` schema.
- Use a **Curve Table** for keyed numeric progression and interpolation.
- Use a **Data Registry** when multiple read-only sources, override/fallback ordering,
  asynchronous acquisition, or managed caching justify its plugin and indirection.
- Use **SaveGame/runtime objects**, not authored assets, for mutable player or session state.

## Execute

1. State the definition/state boundary, stable identifier, ownership, load lifetime, and
   cook requirements.
2. Choose the smallest representation that satisfies those requirements.
3. Define the schema in C++ when type stability, validation, or broad reuse matters.
4. Choose hard references only for assets that must load with the owner. Use soft
   references when the dependency should load on demand.
5. If using the Asset Manager, configure the Primary Asset Type and scan path before
   relying on discovery. Keep each type in deliberate folders.
6. Load asynchronously before the asset is needed; retain the returned asset or handle
   for the required lifetime and define failure behavior.
7. Validate identifiers, ranges, references, duplicate rows, cross-row relationships,
   and cook inclusion before runtime.
8. Test in a cooked build. Editor discovery and successful PIE loading do not prove that
   an indirectly referenced asset was cooked.

Read the reference matching the task:

- authored definitions: [`references/data-assets-primary.md`](references/data-assets-primary.md)
- tabular schemas/import: [`references/data-tables-curves.md`](references/data-tables-curves.md)
- stable identity and state: [`references/identifiers-state-versioning.md`](references/identifiers-state-versioning.md)
- reference and loading choice: [`references/references-loading.md`](references/references-loading.md)
- Asset Manager/bundles: [`references/asset-manager-bundles.md`](references/asset-manager-bundles.md)
- unloaded discovery: [`references/asset-registry-discovery.md`](references/asset-registry-discovery.md)
- cooking/chunking: [`references/cooking-chunking-audit.md`](references/cooking-chunking-audit.md)
- validation and failures: [`references/validation-debugging.md`](references/validation-debugging.md)
- concrete layouts: [`references/patterns.md`](references/patterns.md)

## Required answer format

Return:

1. **Representation and schema**, including why nearby alternatives were rejected.
2. **Stable identifier and mutable-state boundary**.
3. **Reference graph**, naming hard and soft edges.
4. **Discovery, loading, ownership, and unload sequence**.
5. **Cook/chunk rules** and a packaged-build proof.
6. **Validation rules**, failure behavior, and migration consequences.

Do not invent editor paths, Blueprint nodes, APIs, metadata, or cook behavior.

## Hard rules

- Treat Data Assets, Data Tables, and Data Registries as read-only definitions at runtime.
- Never use an asset object or table-row pointer as persistent mutable game state.
- Never cache a Data Table row pointer beyond local use when the table may reimport.
- Never assume a soft reference loads or cooks its target merely because the path exists.
- Never replace every hard reference with a soft reference; loading boundaries must be
  explicit and worth their complexity.
- Never rename shipped Primary Asset IDs or row identifiers without redirects or migration.
- Query unloaded assets through metadata before calling an API that materializes `UObject`s.
- Validate the cooked artifact, not only the editor database.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
