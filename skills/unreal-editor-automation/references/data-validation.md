# Data Validation automation

## Choose the validator

- Override `UObject::IsDataValid` when the rule belongs to a custom asset/class and may need
  private or protected data.
- Derive `UEditorValidatorBase` when a validator should cover existing engine classes, several
  classes, or project-wide policy.

For `UEditorValidatorBase`, implement `CanValidateAsset` narrowly and call `AssetPasses` or
`AssetFails` on every `ValidateLoadedAsset` execution path. Make messages actionable.

C++ and Blueprint validators are discovered at editor startup. Python validators must register
with `UEditorValidatorSubsystem.AddValidator`. The command-line Data Validation path runs C++
rules by default; do not assume editor-registered Blueprint/Python rules ran in CI without proving
the configured extension.

## Run surfaces

- One/many assets: **Asset Actions > Validate Assets**.
- Assets plus dependencies: **Validate Assets and Dependencies**.
- Folder: **Validate Assets in Folder**.
- Project: **Tools > Validate Data**.
- CI: `UnrealEditor-Cmd.exe Project.uproject -run=DataValidation`.

## Design rules

Use fast local validators on save. Put slow global uniqueness, dependency-cycle, budget, and
cross-asset relationship checks in an explicit full-project/CI stage.

An error message should contain:

```text
asset path | field/rule | received value | expected condition | repair action
```

Distinguish **Invalid** from **Not Validated**. Unsupported assets should be skipped explicitly,
not reported as passed. Treat warnings and errors according to a documented build policy.

## Validate the validator

Create fixtures that should pass, warn, and fail. Confirm interactive save, Content Browser,
project-wide validation, and commandlet behavior. A validator that only runs in one surface is
not yet a reliable gate.
