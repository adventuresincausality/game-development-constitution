# Data Assets and Primary Data Assets

## Plain Data Asset

Use a native subclass of `UDataAsset` when designers need one asset per definition.

1. Create the native class and expose deliberate fields with `UPROPERTY`.
2. Create instances through **Content Browser > Miscellaneous > Data Asset**.
3. Store authored definition data only.
4. Add `IsDataValid` for invariants owned by the class.

Prefer a non-Blueprint Data Asset instance when inheritance is unnecessary. It is simpler
and more memory-efficient than representing pure data as a Blueprint class.

## Inherited definitions

When values must inherit:

1. Derive a Blueprint class from the native Data Asset/Primary Data Asset base.
2. Create Data-Only Blueprint children from that Blueprint class.
3. Read definition values from the class defaults.

Do not expect one Data Asset instance to inherit values from another instance. Epic's 5.8
guidance recommends Data-Only Blueprint classes for inheritance and parent updates.

## Primary Data Asset

Use `UPrimaryDataAsset` when the asset needs:

- an `FPrimaryAssetId`;
- Asset Manager discovery and direct manipulation;
- named bundles of soft-referenced secondary assets;
- explicit load/unload or cook/chunk policy.

Its default Primary Asset Type depends on the first native class or highest Blueprint class
in the hierarchy. Confirm the actual `Type:Name` emitted by `GetPrimaryAssetId`; override
`GetPrimaryAssetId` when the default identity is not the stable contract you need.

## Definition pattern

Keep lightweight identity and tuning directly on the definition. Store optional heavy
content as `TSoftObjectPtr`/`TSoftClassPtr`, grouped into semantic bundles such as `UI`,
`Gameplay`, or `Match` only when callers truly load different subsets.

Do not mutate the asset to track ownership, quantity, durability, cooldown, or progress.
Create a runtime instance/state struct keyed by the stable definition ID.
