# Data Tables, Curve Tables, and overlays

## Define a Data Table schema

1. Declare a `USTRUCT(BlueprintType)` deriving from `FTableRowBase`.
2. Expose typed columns with `UPROPERTY`.
3. Use `FName`, Gameplay Tags, enums, and typed handles where they communicate domain
   meaning better than free-form strings.
4. Use `TSoftObjectPtr` for optional or heavy assets. A hard `UObject` field can cause all
   referenced assets to load with the table.
5. Add defaults and validation for every field whose absence has meaning.

For CSV/JSON import, map headings to struct property names. CSV convention uses `Name` as
the row key unless **Import Key Field** selects another field. Keep **Ignore Extra Fields**
and **Ignore Missing Fields** off when schema drift should fail loudly.

Reimport uses the stored source path. Treat the source spreadsheet/CSV/JSON and the Unreal
asset as one controlled pipeline; decide which side is authoritative.

## Read rows safely

- Expose `FDataTableRowHandle` when designers should choose both table and row.
- In C++, use `FindRow<T>()` with a useful context string and handle null explicitly.
- Do not retain returned row or curve pointers beyond local scope. Reimport can refresh the
  table and invalidate pointers.
- Copy a row only when a snapshot is intentional; otherwise resolve by handle when needed.

## Curve Tables

Use a Curve Table when each named row is a float curve. Select interpolation deliberately:

- **Constant**: step changes; holds the previous value.
- **Linear**: straight interpolation between keys.
- **Cubic**: smooth interpolation that can overshoot; inspect gameplay-critical ranges.

Use `FCurveTableRowHandle` for authored references. Do not use a Curve Table to disguise a
wide, heterogeneous record schema.

## Composite Data Tables and Data Registries

Use a Composite Data Table for a controlled stack of same-schema parent tables. Validate
duplicate rows and make override precedence visible. Runtime changes to parent tables can
rebuild the composite and hitch.

Use a Data Registry instead when data comes from several sources, needs ordered fallback,
asynchronous acquisition, or configurable caching. `AcquireItem` scheduling success does
not prove that the item exists. Do not retain registry-owned row pointers if a source can
unload; consume immediately or copy the value.
