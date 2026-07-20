# Reference graphs and residency

## Audit an unexpected load

1. Select the suspect asset and open Reference Viewer.
2. Inspect referencers, dependencies, hard/soft edges, management references, and Reference Tree depth.
3. Open Size Map for the asset and its dependencies; use Asset Audit for class/type/cooked-size detail.
4. Confirm the runtime owner with Memory Insights/LLM; editor graph size is not runtime residency proof.
5. Identify the earliest hard edge that crosses the intended residency boundary.
6. Convert only that boundary to a soft/Primary Asset load contract, then prove cook and lifetime.

Use a hard reference when owner and target must always be resident together. Use `TSoftObjectPtr`,
`TSoftClassPtr`, or `FSoftObjectPath` when the dependency must load on demand. Use Primary Asset IDs and
bundles when many callers need governed discovery and phase-specific residency.

Common accidental roots:

- GameInstance/subsystem/default object references;
- always-loaded maps, HUDs, GameModes, singletons, or Data Assets;
- Blueprint class defaults that reference presentation-heavy classes;
- arrays/catalogs holding hard class or asset pointers;
- an async-loaded object copied into a long-lived hard owner;
- delegates/tasks/components retaining the owner after expected teardown.

Report the root and complete chain. Removing the leaf from memory without changing its surviving owner
does not fix retention.
