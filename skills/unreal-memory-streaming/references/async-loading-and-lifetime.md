# Async loading and lifetime

## Owned load sequence

1. Gather soft paths or Primary Asset IDs before the transition.
2. Request through Asset Manager or `FStreamableManager::RequestAsyncLoad`.
3. Retain the `FStreamableHandle` when cancellation, progress, combined requests, or residency ownership
   matters.
4. On completion, verify request state and every required asset; callbacks may arrive after the caller's
   original state changed.
5. Create/register render, physics, audio, and gameplay resources in a bounded readiness phase.
6. Transfer assets into a hard owner for the exact use lifetime or keep the governing handle alive.
7. On cancellation/transition, stop dependent work, release owners/handles, and verify collection/eviction.

`FStreamableManager` keeps requested assets referenced through the completion delegate; afterward the
caller must retain them if needed. A soft pointer path does not itself own residency.

## Race and failure checks

- owner destroyed before completion;
- two requests for the same asset with different consumers;
- cancel after IO began but before callback;
- partial bundle failure or missing cooked dependency;
- async completion followed by synchronous resource creation hitch;
- unload while a component/task/delegate still uses the asset;
- stale callback applies content to a new state/level/character.

Use a request generation/token and weak owner where appropriate. Completion means “asset available,”
not automatically “gameplay-ready.”
