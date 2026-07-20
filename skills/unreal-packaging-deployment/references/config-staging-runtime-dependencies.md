# Config, staging, and runtime dependencies

## Configuration

UE config resolves through an ordered hierarchy: engine bases, platform bases, project defaults,
platform project overrides, then user layers. Diagnose the effective staged value, not one source file.

- commit project defaults and deliberate platform overrides;
- keep generated `Saved/Config` user/machine state out of release inputs;
- use Packaging **Ini Key/Section Denylist** for values that must not ship;
- never put private signing, store, backend, or service secrets in staged client config;
- verify maps, cultures, device profiles, scalability, online subsystem, and log settings in the artifact.

Game plugin config has a documented packaging caveat: plugin config files are not automatically packaged
as an independent config layer. Merge required runtime defaults into the project's config and validate
the staged result.

## Files outside assets

Use `RuntimeDependencies` in `.Build.cs` for third-party libraries and staged files. Choose:

- `UFS`: accessed through Unreal file APIs and eligible for a container;
- `NonUFS`: loose file required by native/external IO;
- `DebugNonUFS`: loose debug file staged only when debug files are requested;
- `SystemNonUFS`: loose system file outside normal remapping.

DLLs/shared libraries loaded by the OS must remain loose. Use the packaging settings for intentional
non-asset directories only when build rules are not the right owner. Verify license files, movies,
certificates, prerequisites, and dynamic-library search paths on a clean machine.
