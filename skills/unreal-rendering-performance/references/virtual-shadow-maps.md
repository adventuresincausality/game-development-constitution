# Virtual Shadow Maps

VSMs are designed to pair with Nanite and large dynamically lit worlds. If the target does not use
Nanite, validate whether conventional shadow maps are a better fit.

## Diagnose the two cost buckets

- **Shadow Depths**: rendering/updating caster depth pages.
- **Shadow Projection** under Lights: sampling/projecting shadows into the frame.

Use View Modes -> Virtual Shadow Map:

- Cached Page: green cached, red uncached, blue static-only cached;
- Shadow Casters: locate invalidators;
- Nanite Overdraw: locate costly caster coverage;
- Virtual Page/Clipmap-Mip: inspect page demand/resolution.

Disable visualization before timing. For counters, use `trace.enable counters,vsm`; CSV profiling can
enable the VSM category.

## Reduce invalidation

Largest invalidators commonly include moving lights, moving/added/removed casters, component render-
state churn, WPO/PDO, skeletal deformation, large bounds, camera cuts, and rapid disocclusion.

Actions:

- stop needless light/primitive updates;
- keep deforming bounds tight;
- remove WPO/PDO or shadow casting at distance when visually safe;
- use material/mesh LODs that disable deformation in the distance;
- use Contact or Distance Field shadows where the content/target supports the trade;
- use `Shadow Cache Invalidation Behavior` overrides only when the asserted rigidity/static state is
  true; incorrect suppression produces undefined/stale shadows.

`r.Shadow.Virtual.Cache 0` is a diagnostic to expose caching benefit, not a shipping optimization.
Resolution LOD bias trades shadow detail for pages/work. Moving-light biases exist because moving lights
cannot reuse cache like stationary ones.

When profiling individual VSM passes, `r.RDG.AsyncCompute 0` can make timings more representative;
never ship that profiling-only override.
