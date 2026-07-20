# Niagara system selector

| Requirement | Prefer | Verify |
|---|---|---|
| Simple repeatable particles, many emitters | Lightweight/stateless emitter | required modules/renderers are supported |
| Gameplay-readable particle data or CPU-only interface | CPU sim | particle count and game-thread cost |
| Large particle count, supported GPU behavior | GPU compute sim | bounds, GPU collision/data access, readback limits |
| Many same-type impacts/bursts | Data Channel + shared listener | batching semantics, island/extents, lifetime |
| Trail/beam | Ribbon or beam-style module setup | source continuity, tessellation, UVs |
| Volumetric smoke/fire/liquid | Niagara Fluids or flipbook | Beta maturity, GPU/memory budget, platform |
| Pure camera-facing illusion | Sprite/flipbook | overdraw, sorting, lighting |
| Shape and parallax matter | Mesh particles | triangles, draw calls, material cost |

Decision questions:

1. What must the player perceive, and for how long?
2. Must particles affect gameplay, or only respond to gameplay?
3. Does the simulation need scene/depth/distance-field collision?
4. How many systems and particles coexist in the worst representative view?
5. Can a material animation, decal, mesh animation, or flipbook communicate the same effect cheaper?

Mixed systems may contain both stateful and lightweight emitters. Choose per emitter, not by habit.
