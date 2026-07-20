# Cooking, chunking, and audit

## Prove cook inclusion

A reference working in PIE is insufficient. For every asynchronously loaded asset:

1. Identify the Primary Asset, label, directory, map, or explicit cook rule that includes it.
2. Cook the target platform.
3. Inspect Asset Audit, cooked output, or staging manifests.
4. Launch a packaged build without editor-only loose content.
5. exercise the cold-load path and its failure handling.

Use **Project Settings > Game > Asset Manager** for type rules. Use **Tools > Audit > Asset
Audit** and Reference Viewer to inspect management and dependency chains.

## Primary Asset Labels

Use `UPrimaryAssetLabel` to assign rules to explicit assets, collections, or a directory tree.
Labels can define priority, chunk ID, and cook rule.

Important 5.8 constraint: Blueprint subclasses of `PrimaryAssetLabel` do not work for chunking.
Use the provided class or a native C++ subclass when adding metadata.

## Chunking

- Chunk `0` is the default base content.
- Positive chunk IDs create separately assignable content groups when chunk generation is
  enabled.
- A Primary Asset's management rules can assign referenced secondary assets.
- Higher-priority management can win when more than one Primary Asset claims content.

Design chunks around install/patch/DLC boundaries, not folder aesthetics. Duplicated shared
dependencies, circular ownership, and accidental hard references can defeat the intended layout.

## Release checks

- Enable **Only Cook Production Assets** when development-only primary assets must fail a
  production cook.
- Compare Asset Audit across representative builds.
- Verify chunk availability order on the real delivery platform.
- Treat rule and label changes as packaging changes requiring a full staged test.
