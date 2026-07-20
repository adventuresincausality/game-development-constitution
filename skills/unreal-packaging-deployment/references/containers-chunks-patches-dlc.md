# Containers, chunks, patches, and DLC

## Containers and chunks

Packaging settings can use Pak files or IoStore `.utoc`/`.ucas` containers. Choose from platform and
delivery requirements; verify mount, load, patch size, startup, IO, and tooling on the target.

Asset Manager rules/Primary Asset Labels own content-to-chunk assignment. This skill owns generation,
artifact inspection, delivery order, and release testing. Audit shared dependencies and duplicate files;
folder layout does not guarantee chunk ownership.

Design chunk 0 for content required before optional chunks are available. Test missing, partial, delayed,
wrong-version, and corrupted optional installs. Never let core startup reference unavailable content.

## Patch contract

1. Retain the exact released binaries, containers, manifests, registry, config, keys, and version metadata.
2. Build the patch against that base using the target platform's approved pipeline.
3. Compare changed files/container blocks and investigate unexpected churn.
4. Test base -> patch on a clean device; also test fresh full install at the patched version.
5. Verify save migration, online compatibility, rollback policy, DLC entitlement, and disk-space behavior.

Compression, encryption, shader ordering, bulk-data changes, engine/toolchain changes, asset renames, and
resaves can enlarge a patch. Deterministic shader order may improve patch similarity while trading load
behavior; measure both.

Platform stores own final patch/DLC constraints. Do not infer console/mobile/store rules from a desktop
Pak example.
