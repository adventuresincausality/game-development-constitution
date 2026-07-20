# Use cases

## Vegetation scatter

- Landscape/surface -> slope/height/surface attributes -> road/water/POI Difference -> density
  noise -> weighted species selection -> bounded transform -> instanced mesh spawn.
- Partition/hierarchy by plant scale: trees on larger grids, grass/flowers/stones on smaller.
- Keep gameplay clearance, landmarks, paths, and sightlines as hard filters.
- Use persistent CPU instances when HLOD/collision/nav are required; GPU instances only for the
  supported purely visual runtime case.

## Roadside/fence generator

- Spline input -> distance sampling -> tangent/side/width -> terrain projection -> intersection/
  endpoint rules -> post/module selection -> spawn.
- Use Shape Grammar for repeating modules and corner/end pieces when rules stay legible.
- Route spline deformation/mesh segment details to `$unreal-splines`.

## Building/city blocks

- Polygon 2D city boundary -> cut/subdivide by splines -> offset for setbacks -> create surfaces ->
  sample parcels -> attribute-driven building archetype -> Spawn Actor/Level Instance.
- Keep roads and utility corridors as source geometry, not late random exclusions.
- Validate entrances, navigation, collision, streaming ownership, and HLOD output.

## Biome architecture

- Separate climate/biome classification, broad distribution, species selection, local exclusion,
  and spawn into subgraphs.
- Use Data Assets/Tables for species rules and weights.
- PCG Biome Core is Experimental; mine it for patterns rather than treating it as a production
  guarantee.

## Authored exceptions

- Use input splines/volumes/tags for repeatable design rules.
- Use UE 5.8 manual overrides for isolated art-directed exceptions only after accepting the
  Experimental status and defining merge/regeneration policy.
- If the same override occurs repeatedly, promote it into graph input or rule data.

## Acceptance test for any generator

The generator must produce valid constraints across at least ten representative seeds, regenerate
identically for a fixed seed/input, survive cleanup/reload/cook, remain editable by intended
creators, and meet total runtime/render/streaming budgets on target hardware.
