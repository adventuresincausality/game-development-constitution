# Material effect recipes

## Dissolve / reveal

Compare a stable mask/noise field with a scalar threshold. Use Masked blend when a hard clipped
edge is acceptable. Derive a narrow edge band from the threshold difference for emissive/color.
Expose threshold, edge width, edge color/intensity, and coordinate controls. Test temporal aliasing,
shadows, depth, and bounds if WPO accompanies the dissolve.

## Hit flash / selection pulse

Drive a scalar/vector parameter from gameplay on the owning material instance or primitive data.
Blend a bounded tint/emissive contribution over the existing surface. Restore/default the value
explicitly; do not continuously create new dynamic instances.

## UV panning / flow

Use Time and Panner (or equivalent math) with parameterized direction and speed. Keep units and
coordinate space explicit. For networked cosmetic effects, synchronize an event/start time only
when visual phase agreement matters.

## Triplanar/world-aligned texture

Blend projections by surface normal for assets lacking suitable UVs or for consistent world scale.
It increases texture samples; reserve it for surfaces where seams or authoring cost justify it.

## Foliage wind

Apply WPO weighted by vertex mask, keeping attachment points stable. Parameterize amplitude and
frequency, then test bounds, shadow stability, LOD transitions, and worst-case instance counts.

## Distance/quality reduction

Remove the cost that matters: texture reads, per-pixel layers, expensive math, or WPO. Quality
switches produce additional permutations and are not simultaneous distance LODs. Verify with the
material stats and on hardware rather than assuming the simpler-looking graph is faster.
