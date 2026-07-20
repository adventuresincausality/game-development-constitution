# Validation and debugging

## Validation placement

Use both layers when appropriate:

- Override `IsDataValid` on the definition class for invariants that belong to that object.
- Derive `UEditorValidatorBase` to validate assets across engine/custom classes or enforce
  project-wide policy. Implement `CanValidateAsset` and ensure every `ValidateLoadedAsset`
  path calls `AssetPasses` or `AssetFails`.

Validate through Content Browser actions, **Tools > Validate Data**, and CI:

```text
UnrealEditor-Cmd.exe Project.uproject -run=DataValidation
```

The commandlet runs C++ rules by default. Blueprint/Python validation support requires
explicit extension; Python validators must register with `UEditorValidatorSubsystem`.

## Definition checks

At minimum validate:

- ID is present, unique, governed, and consistent with the asset/row when required;
- numeric values are finite and within domain ranges;
- required hard/soft references resolve and have allowed classes;
- mutually exclusive options are not both selected;
- dependent fields are present together;
- rows/reference targets exist;
- no forbidden dependency cycle or editor-only content crosses into runtime;
- Asset Manager ID and bundle/cook expectations are satisfied.

Use errors for content that cannot ship and warnings for suspicious but valid states. Include
asset path, field, received value, expected rule, and a repair action in every message.

## Failure routing

| Symptom | Check first |
|---|---|
| Primary Asset ID not found | Actual ID, type config, base-class mode, scan path, excluded path |
| Soft pointer is null | Was it loaded, did load finish, did the path redirect, is target cooked? |
| Table lookup fails | Correct table, exact row key, schema/import warnings, reimport result |
| Values do not update | Cached row pointer/copy, stale reimport, wrong source authority |
| Unexpected memory spike | Hard reference chain, broad bundle, synchronous load, retained handle |
| Works in PIE, fails packaged | Cook rule, Primary Asset Label, editor-only class/path, chunk availability |
| Registry query misses assets | Initial scan incomplete, wrong class path/filter, asset not resaved for tags |

Log stable IDs and package paths at load boundaries. Do not “fix” missing data by silently
substituting unrelated content unless the product explicitly defines that fallback.
