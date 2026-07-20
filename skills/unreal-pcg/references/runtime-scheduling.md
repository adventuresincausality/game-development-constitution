# Runtime generation and scheduling

## Configure runtime generation

1. Set the PCG Component Generation Trigger to Generate at Runtime.
2. Enable Hierarchical Generation if multiple grid scales are required.
3. Configure generation radius for each grid size.
4. Configure Cleanup Radius Multiplier so content is not destroyed immediately at the generation
   boundary.
5. Use Generate/Cleanup Bounds Modifiers to begin work before the source looks toward content and
   reduce visible pops.
6. Define generation sources: player/camera, editor viewport for testing, or custom sources.
7. Choose a scheduling policy from actual traversal direction, distance, and urgency needs.
8. Test source teleport, rapid direction reversal, fast vehicles, multiple players/sources, and
   no-source cleanup.

## Budget controls

Relevant UE 5.8 variables include:

- `pcg.FrameTime`: runtime PCG execution budget in milliseconds.
- `pcg.RuntimeGeneration.NumGeneratingComponents`: parallel generating components.
- `pcg.RuntimeGeneration.FramesBetweenGraphSchedules`: scheduler delay between schedule passes.
- `pcg.RuntimeGeneration.EnablePooling`: partition-actor pooling.
- `pcg.Cache.Runtime.Enabled`: runtime CPU-node cache; disabled by default.
- `pcg.Cache.Runtime.MemoryBudgetMB`: runtime cache memory cap.

Do not copy documented defaults blindly. Tune on target hardware for time-to-screen, hitching,
memory, and background contention with gameplay/streaming.

## Failure policy

Define behavior when generation is late:

- hide with fog/distance/occlusion;
- preserve lower-detail/baked fallback;
- prevent access until generation completes;
- reduce small-grid detail before missing large silhouette content;
- prioritize forward/travel-direction cells.

Do not let missing collision or gameplay Actors become a visual-pop problem; that is a correctness
failure.

## Multiplayer

PCG output is not automatically authoritative or replicated. Choose explicitly:

- identical local cosmetic generation from controlled inputs/seeds;
- server-generated replicated gameplay Actors;
- baked/persisted world content streamed normally;
- server-authored compact state that each client converts into local presentation.

Test determinism across builds/platforms before relying on identical local generation for anything
more than cosmetic presentation.
