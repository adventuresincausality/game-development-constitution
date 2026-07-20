# NavMesh generation and agents

## Basic setup

1. Place a `NavMeshBoundsVolume` over intended traversable space.
2. Press `P` to visualize generated navigation.
3. Configure Supported Agents from real capsule/body dimensions and traversal abilities.
4. Confirm the Pawn uses an AIController and a movement/path-following-compatible movement component.
5. Project representative starts/goals and run actual path/movement tests.

NavMesh is generated from collision, not visible triangles alone. Inspect collision channels, `Can Ever Affect Navigation`, mobility, modifier components/volumes, and runtime generation.

## Agent settings

- `Agent Radius`: clearance from obstacles; too small permits paths the body cannot traverse.
- `Agent Height`: vertical clearance requirement.
- `Agent Max Slope`: steepest navigable surface.
- `Agent Max Step Height`: largest vertical step represented as traversable.

Keep Character Movement step/slope/capsule constraints compatible. Multiple materially different agent shapes may require separate supported-agent/NavData configurations; validate which NavData each controller selects.

## Tile and voxel settings

- Smaller `Cell Size`/`Cell Height`: more accurate geometry, slower generation, higher data cost.
- Larger cells: faster/smaller, but narrow paths and steps can disappear.
- Larger `Tile Size UU`: fewer heavier rebuild units.
- Smaller tiles: more localized rebuilds but more border/management overhead.
- `Min Region Area`: discards small isolated regions.
- `Max Simplification Error`: trades polygon fidelity for simpler data.

Epic recommends making cells as large as possible while preserving required paths and using roughly 32–128 cells per tile side for dynamic rebuild performance. Treat this as a measured range, not a copied value.

## Multiple resolutions

UE 5.8 supports low/default/high tile resolutions in one NavMesh through Nav Modifier components/areas.

- Use low resolution in open areas for faster generation/lower memory.
- Use default/high resolution only where narrow geometry needs it.
- Make resolution Cell Sizes multiples and keep `Tile Size UU` divisible by each Cell Size.
- Visualize tile resolutions and build-time heat maps on the RecastNavMesh actor.

## Validation grid

Test every agent at:

- narrowest intended doorway/corridor;
- lowest overhead clearance;
- steepest intended slope and largest intended step;
- moving platform/link endpoints;
- material/collision transitions and Landscape edits;
- NavMesh bounds edge and streamed-cell boundary;
- exact and slightly invalid start/goal positions.

Never approve settings only because the green overlay exists. Record successful path query, movement completion, arrival distance, and body collision.
