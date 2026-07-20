# Asset Registry discovery without loading

Use the Asset Registry when a tool or system must enumerate assets by path, class, or stored
metadata without materializing every `UObject`.

## Query pattern

1. Build a narrow `FARFilter` using package paths, class paths, and tag/value pairs.
2. Query `FAssetData`.
3. Read package/name/class and registry tags first.
4. Call `GetAsset()` only for entries that truly require loading; it loads the asset when
   necessary.

Avoid `GetAllAssets()` in routine interactive tools; Epic documents it as potentially slow.

## Searchable metadata

Mark appropriate properties `AssetRegistrySearchable`, or implement asset-registry tag
generation for derived metadata. Keep tags compact, stable, and useful for filtering.

After adding or changing searchable metadata, resave assets. Registry tags are gathered into
the saved asset header; unsaved legacy assets will not retroactively expose the new value.

## Completeness and state

The registry gathers asynchronously. If an operation requires the complete project catalog,
wait for initial discovery or use completion delegates rather than assuming the first query is
complete.

Be explicit about whether a query should use disk data or in-memory data. Unsaved loaded assets
may differ from their on-disk registry state.

## Asset Manager boundary

- Asset Registry answers: “what assets and metadata exist?”
- Asset Manager answers: “which assets have primary identity, how are they grouped, loaded,
  and cooked?”

Use both when a catalog is discovered by metadata but loaded under managed primary identities.
