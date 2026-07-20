# Schema and database

## Schema

Create via Content Browser -> Add -> Animation -> Motion Matching -> Pose Search Schema, then assign
the character Skeleton. For basic locomotion begin with:

- **Trajectory channel**: a few past/future samples of position/facing/velocity that distinguish
  continue, start, stop, and turn intent.
- **Pose channel**: bones whose position/velocity distinguish phase and continuity, commonly feet
  for locomotion or hands for climbing.

Every channel and sample increases feature dimensionality and search work. Add one only when a
recorded failure cannot be separated by existing features. Component stripping can ignore irrelevant
axes; character-space values help localized motion comparisons.

## Database

Create via Add -> Animation -> Motion Matching -> Pose Search Database and assign the Schema.

1. Add compatible Sequences, Composites, or Blend Spaces needed for the bounded state.
2. For documented locomotion, ensure clips contain root motion and Enable Root Motion is set.
3. Trim/exclude unusable entry/exit ranges; preserve frames needed to blend.
4. Use Pose Search notify states to block branch-in, exclude ranges, or bias specific intervals.
5. Inspect every indexed clip in the database editor.

Partition by gameplay meaning—walk/run, stance, carried object, injury, traversal type—when only a
subset is valid at once. A Normalization Set can compare related databases consistently; a Chooser can
select the context-valid set at runtime.

Prefer PCAKDTree for an optimized search after verifying quality against Brute Force. VPTree is
Experimental in UE 5.8. Higher principal-component counts can improve represented variance while
increasing memory and cost; tune with evidence.
