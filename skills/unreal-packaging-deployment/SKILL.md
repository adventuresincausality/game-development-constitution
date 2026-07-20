---
name: unreal-packaging-deployment
description: Build, cook, stage, package, archive, deploy, release, and diagnose Unreal Engine 5.8 projects. Use for build configurations and targets, UnrealBuildTool, AutomationTool, BuildCookRun, Project Launcher profiles, command-line cooks, cook inclusion, maps, Pak or IoStore containers, chunks, patches, DLC, platform SDKs, plugins, runtime dependencies, configuration staging, signing and encryption, symbols, logs, crash reporting, CI artifacts, reproducible builds, missing cooked assets, packaging failures, or packaged-build differences.
---

# Unreal 5.8 Packaging and Deployment

## Establish the artifact contract

Read [`references/system-selector.md`](references/system-selector.md).

1. Record engine revision, project commit, target platform, architecture, target type, build
   configuration, device profile, distribution channel, and base release when patching.
2. Define the artifact: Development/Test/Shipping, client/server, container format, chunks, symbols,
   prerequisites, archive, deploy destination, and acceptance tests.
3. Separate Build, Cook, Stage, Package, Deploy, and Run. Identify the first failing phase.
4. Reproduce with a saved Project Launcher profile or recorded AutomationTool command.
5. Preserve the complete log, exit code, manifests, artifact hashes, size report, and symbol identity.
6. Run from a clean staging/archive location and test without editor binaries, loose source content,
   developer config, or a cook server.
7. Promote the exact tested artifact; do not rebuild after approval.

Route neighboring work deliberately:

- asset schemas, Primary Asset rules, and content-to-chunk ownership -> `unreal-data-assets-tables`;
- commandlets, Data Validation, and automation tests -> `unreal-editor-automation`;
- runtime loading, residency, PSOs, and load hitches -> `unreal-memory-streaming`;
- packaged performance captures -> `unreal-insights-profiling`;
- save-format compatibility across releases -> `unreal-save-load`.

Load only what applies:

- [`references/build-configurations-targets.md`](references/build-configurations-targets.md)
- [`references/build-cook-stage-package.md`](references/build-cook-stage-package.md)
- [`references/cooking-inclusion-validation.md`](references/cooking-inclusion-validation.md)
- [`references/uat-project-launcher-ci.md`](references/uat-project-launcher-ci.md)
- [`references/containers-chunks-patches-dlc.md`](references/containers-chunks-patches-dlc.md)
- [`references/config-staging-runtime-dependencies.md`](references/config-staging-runtime-dependencies.md)
- [`references/plugins-sdks-platforms.md`](references/plugins-sdks-platforms.md)
- [`references/symbols-logs-crash-reporting.md`](references/symbols-logs-crash-reporting.md)
- [`references/release-reproducibility-security.md`](references/release-reproducibility-security.md)
- [`references/diagnostics-recipes.md`](references/diagnostics-recipes.md)

## Required answer format

Return:

1. **Artifact contract** and target matrix.
2. **Exact pipeline surface**: editor, Project Launcher, commandlet, UAT, or CI.
3. **Ordered Build/Cook/Stage/Package/Deploy actions** and owned configuration.
4. **Cook roots, maps, chunks, staged files, plugins, SDKs, and platform prerequisites**.
5. **Symbols, logs, crash collection, version/build ID, archive, and security policy**.
6. **Clean-device verification**, failure injection, patch/base compatibility, and pass criteria.
7. **First causal error** with the smallest confirming experiment when diagnosing.

## Hard rules

- Use Cook By the Book and a packaged target build for QA/release evidence; Cook On the Fly is an
  iteration service, not a distributable artifact.
- Never use `-cookall`, broad always-cook directories, or loose copied assets as the first fix for a
  missing dependency. Identify the intended cook root and prove it in manifests/artifacts.
- Never infer success from AutomationTool exit alone. Launch, traverse, save/load, network, suspend,
  and platform-test the staged artifact required by the release contract.
- Keep source defaults, platform overrides, generated user config, and secrets separate. Inspect the
  staged effective configuration and strip denied keys/sections.
- Declare third-party runtime files through build/staging rules; do not repair a release by manually
  copying an untracked DLL beside one machine's executable.
- Preserve symbols outside the public artifact and map them to the exact executable/build identity.
- Build a patch against the exact retained base release. Never regenerate or silently replace the base.
- Treat signing/encryption keys as release secrets. Encryption can increase patch entropy and IO cost;
  measure the chosen policy.
- Test the distribution path on clean target hardware with the correct account, SDK/runtime,
  permissions, storage state, and no editor installation.
- Do not invent UAT flags or platform requirements. Inspect `BuildCookRun -Help`, the generated Project
  Launcher command, UE 5.8 source, and the target platform's current restricted documentation.

See [`references/sources.md`](references/sources.md) for the UE 5.8 primary-source trail.
