# Release reproducibility and security

## Candidate gate

- clean source revision; recorded submodules/plugins and no undeclared local files;
- pinned engine, SDK, compiler, build tools, platform extensions, and environment;
- clean By-the-Book cook/full rebuild according to release policy;
- zero undispositioned validation/cook/package warnings;
- expected maps, cultures, chunks, config, dependencies, prerequisites, and licenses;
- artifact hash/size/build ID, matching symbols, manifests, and retained base release;
- automated smoke plus human target-device acceptance;
- fresh install, upgrade/patch, uninstall/reinstall, low disk, offline, and permission tests;
- save migration and online/backend compatibility verified;
- exact candidate promoted without rebuild.

## Security boundaries

Signing establishes artifact authenticity/integrity for its supported workflow; encryption limits casual
content inspection. Neither makes client code/data trusted. Keep authoritative economy, entitlements,
match results, and anti-cheat decisions server-side.

Store private keys outside source, artifacts, logs, profiles, and command history. Rotate/revoke through
the platform process. Inspect staged config and loose files for credentials, internal URLs, test accounts,
debug endpoints, source paths, and unintended symbols.

Measure encrypted/compressed container startup, IO, memory, build time, store size, and patch delta.
