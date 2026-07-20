# Identifiers, state, and schema evolution

## Stable identity

Choose an identifier before content volume grows:

- Primary Assets: `FPrimaryAssetId` (`Type:Name`).
- Data Table rows: stable `FName` row key or a domain ID stored and validated in the row.
- Data Registry items: `FDataRegistryId`.
- Cross-system categories/state: governed Gameplay Tags where hierarchy is useful.

Display names are localized presentation, never durable identity. Array index and editor
position are not identity.

## Rename policy

Treat shipped IDs as append-only contracts. When a rename is unavoidable:

1. Record old-to-new mapping.
2. Configure Primary Asset ID/type/name redirects where Asset Manager identity changed.
3. Migrate save data and external references explicitly.
4. Validate that old IDs resolve or fail with a controlled migration message.
5. Test an upgrade from a real previous save and cooked build.

Asset redirectors repair package references; they do not automatically migrate every string,
row name, gameplay tag, save payload, or external service key.

## Definition versus state

Use this split:

```text
Definition asset/table row
  stable ID, display data, tuning, soft content references

Runtime state
  definition ID, quantity, durability, ownership, cooldown, progress

Save payload
  stable definition ID, version, minimal authoritative state
```

Resolve the definition after loading a save. Handle missing definitions with a documented
fallback, quarantine, refund, or migration; never crash on an unchecked lookup.

## Schema changes

- Add fields with safe defaults.
- Validate old imports against renamed/removed columns.
- Keep serialization versioning separate from the current asset schema.
- For computed/derived values, prefer recomputation over persisting redundant state.
- Run reimport, validation, cook, and previous-save migration after structural changes.
