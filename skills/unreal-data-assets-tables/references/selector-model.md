# Representation selector

## Decision table

| Need | Choose | Reject when |
|---|---|---|
| One authored definition with named fields | `UDataAsset` instance | It needs Asset Manager identity/loading or inheritance |
| Individually discoverable/loadable definition | `UPrimaryDataAsset` | It is only a small row in one always-loaded table |
| Definition inheritance | Data-Only Blueprint derived from a suitable base | Inheritance would hide important per-item differences |
| Many records with one flat schema | `UDataTable` | Records need different shapes, behavior, or independent load policy |
| Numeric values over an input axis | `UCurveTable` | The row contains nonnumeric definition data |
| Ordered table overlays | `UCompositeDataTable` | Sources need asynchronous acquisition, caching, or flexible resolution |
| Multiple read-only sources with fallback/overrides | Data Registry | One table or asset set is sufficient |
| Search unloaded asset metadata | Asset Registry | The actual object must be executed or inspected beyond stored metadata |
| Mutable session/player state | Runtime owner plus SaveGame where persistent | Never store it in a shared definition asset |

## Selection questions

Answer in order:

1. Is this authored definition or mutable runtime state?
2. Does every record share the same schema?
3. Does each record need independent identity, inheritance, loading, or cook rules?
4. Must heavy dependencies load with the definition?
5. Must content be discovered without loading it?
6. Will shipped identifiers survive renames and schema changes?

Prefer one simple Data Table or Data Asset until a demonstrated loading, override, or
production requirement justifies Asset Manager or Data Registry machinery.

## Boundaries

- A Data Table row is a value in a table, not a polymorphic object.
- A Data Asset is a `UObject` asset instance. A Data-Only Blueprint is a class and gains
  inheritance through class defaults.
- A Primary Data Asset is not automatically discovered merely because it derives from
  `UPrimaryDataAsset`; configure its type and scan path or register it in code.
- Data Registries are for general read-only data. Use SaveGame for story progress,
  inventories, unlocks, or other mutable persistence.
