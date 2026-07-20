# Cooking, inclusion, and validation

## Define roots

Cook inclusion comes from maps, hard dependencies, Asset Manager rules, Primary Asset Labels, explicitly
configured directories/assets, plugins, or command-line/profile selections. A soft path alone does not
prove inclusion.

1. Set Game Default Map and required maps explicitly.
2. Identify every on-demand asset's owning Primary Asset/rule or other cook root.
3. Run Data Validation and Map Check; use cook validation options when appropriate.
4. Cook the exact target platform By the Book.
5. Inspect Asset Audit, cook/staging manifests, Asset Registry, container listing, and warnings.
6. Run the cold path with no editor content or cook server.

Useful documented cook diagnostics include `-verbosecookerwarnings`, `-RunAssetValidation`,
`-RunMapValidation`, and `-ValidationErrorsAreFatal`. Confirm support against the installed 5.8 engine.

## Avoid masking the cause

- `-cookall` and **Cook Everything** increase size and can hide missing ownership.
- broad **Additional Asset Directories to Cook** create implicit contracts that are hard to audit.
- skipping soft/hard references is diagnostic and can create unloadable content.
- iterative cooks accelerate iteration but can retain stale evidence; require a clean cook for release.
- **Exclude Editor Content** can expose an improper runtime dependency on editor content; fix the edge.

Treat warnings about unknown assets, redirectors, missing packages, shader formats, serialization, or
never-cook conflicts as build defects until dispositioned.
