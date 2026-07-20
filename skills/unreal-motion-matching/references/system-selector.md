# System selector

| Situation | Prefer | Reason |
|---|---|---|
| Large realistic locomotion set with dense transitions | Motion Matching | search scales with compatible data coverage |
| Small/stylized moveset with deliberate states | State Machine/Blend Space | lower data/tooling cost, direct control |
| One-off attack, dodge, interaction, reload | Montage | explicit action lifecycle/sections/notifies |
| Traversal entry needs contextual pose selection | Pose Search/Motion Match query plus action system | choose a compatible entry, then own the action |
| Missing directional/speed coverage | Author/retarget data first | weights cannot select absent motion |

Adoption gates:

- The animation set covers the movement model's speed and direction envelope.
- Starts, stops, pivots, loops, and transitions have valid selectable ranges.
- The team can curate schemas/databases and use Rewind Debugger.
- Memory and runtime search cost fit target platforms.
- Root-motion versus capsule-driven intent is explicit.

Start with one locomotion mode and a representative test map. Do not migrate every character state
before the first database proves better than the existing system under real input.
