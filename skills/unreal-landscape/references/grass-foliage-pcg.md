# Grass, foliage, and PCG

## Choose one owner per population

| Need | Default system | Boundary |
|---|---|---|
| Material/paint-driven passive ground cover | Landscape Grass Output + Landscape Grass Type | Works only with Landscape terrain; coupled to material layer weights |
| Hand-authored instance painting | Foliage Mode + Static Mesh Foliage | Efficient instancing and direct art control |
| Ecological offline simulation | Procedural Foliage | Experimental editor workflow in current documentation |
| Rule-driven spatial generation, exclusions, runtime generation | PCG | Route graph implementation to `$unreal-pcg` |
| Unique behavior/identity | Actor or PCG Spawn Actor | Costs like actors; keep density low |

Do not simultaneously generate the same grass/tree class through Landscape Grass, Foliage, and PCG. Establish ownership, exclusion, regeneration, and source-control policy.

## Landscape Grass workflow

1. Derive a mask from a named Landscape Target Layer using `LandscapeGrassOutput`.
2. Create a Landscape Grass Type and entries for meshes, density, scale, rotation, alignment, and cull distances.
3. Attach the Grass Type to the corresponding Grass Output input.
4. Paint/fill the driving Landscape layer.
5. Validate density, collision expectations, shadows, wind, LOD/Nanite, and culling in a cooked build.

Landscape Grass is appropriate for passive visual distribution. If individual plants need durable identity, interaction, or authoritative state, they are not merely grass instances.

## Foliage Mode workflow

- Prefer **Static Mesh Foliage** for decoration; it is hardware-instanced and batched.
- **Actor Foliage** has the rendering/gameplay cost of ordinary actors. Use only where behavior requires it.
- Define slope, height, scale, alignment, collision, density scaling, cull distance, shadow, and navigation impact in governed Foliage Type assets.
- Use Reapply deliberately; it can change many existing instances.
- Validate instance attachment after Landscape edits and choose the UE 5.8 foliage snapping behavior intentionally.

## Procedural Foliage

The current guide still places Procedural Foliage under Experimental editor settings. Use it only after validating plugin availability, resimulation determinism, source-control output, cook behavior, and iteration cost.

## Performance and gameplay

- Use `foliage.DensityScale` only for types configured to participate in scalability.
- Cull distances, LOD/Nanite, shadow policy, WPO/wind, overdraw, and material cost determine final expense—not draw calls alone.
- Collision on dense small foliage is usually wasteful; collision/navigation blockers on important trees require explicit testing.
- Rebuild or update navigation after collision-relevant vegetation changes.
- Treat visually dense forests as AI sightline and path-design content, not only rendering content.

## Acceptance

- no duplicate ownership;
- deterministic regeneration where required;
- no vegetation on roads, entrances, traversal clearance, or critical sightlines;
- expected collision/nav/physical-surface behavior;
- stable memory and frame time through density scalability extremes;
- no visible cull/LOD transition beyond the project's budget.
