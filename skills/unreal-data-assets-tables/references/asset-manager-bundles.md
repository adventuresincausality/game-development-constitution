# Asset Manager, Primary Assets, and bundles

## Configure discovery

Open **Project Settings > Game > Asset Manager** and define each Primary Asset Type:

1. Match the actual Primary Asset Type returned by `GetPrimaryAssetId`.
2. Set the correct base class and whether the entries are Blueprint classes.
3. Add narrow scan directories; exclude tests where appropriate.
4. Define type-level cook/chunk rules only when the delivery plan requires them.
5. Restart/rescan as required, then confirm IDs through Asset Manager audit tools or code.

Do not create a custom `UAssetManager` subclass unless startup registration, dynamic assets,
or project-specific policy requires it. The base manager can load configured primary assets.

## Load and unload

Use `LoadPrimaryAsset`, `LoadPrimaryAssets`, or `LoadPrimaryAssetsWithType` with the bundles
needed for the current phase. Use the corresponding unload functions at the owner-defined
boundary. Loading the primary asset can also load secondary assets listed in requested bundles.

State who owns residency. Avoid independent systems issuing unmatched loads/unloads against
the same content without a shared lifetime contract.

## Asset bundles

Create a bundle by placing `meta=(AssetBundles="BundleName")` on soft asset/class properties
of a Primary Asset. Saving the Primary Data Asset updates its bundle data.

Good bundle names describe use phases:

- `UI`: icon, portrait, preview material;
- `Gameplay`: class, mesh, animation set, effects;
- `Server`: authoritative data needed without presentation assets.

Bundle names have no inherent semantics. The caller chooses which bundles to load. Validate
that each required dependency is included and each excluded dependency is genuinely optional.

## Identity and configuration traps

- Data Asset instances and Blueprint class assets use different Asset Manager accessors;
  Blueprint class helpers include `Class` in their names.
- A type/base-class mismatch or wrong scan path produces an empty discovery set.
- Renaming an asset changes the default name portion of its Primary Asset ID; shipped IDs
  require redirects or a custom stable identity.
- Asset Manager success in editor does not prove that cook rules include all secondaries.
