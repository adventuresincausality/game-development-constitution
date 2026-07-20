# Sequencer, authoring, and baking

## Choose the authoring path

- Use Control Rig in Sequencer for reusable controls and procedural relationships.
- Use FK Control Rig for fast additive per-bone repair.
- Use Backwards Solve when an existing animation must populate controls.
- Bake when runtime evaluation is unnecessary, compatibility matters, or the result must become
  a normal Animation Sequence.

## Bake gates

1. Duplicate or version the source asset.
2. Confirm display rate, sample rate, sequence range, root behavior, and additive intent.
3. Evaluate the complete source graph, including any warmup needed for procedural state.
4. Bake transforms and required curves; choose local/world evaluation intentionally.
5. Reduce keys only after visually comparing the unreduced bake; tune tolerance against the
   smallest important contact or facial motion.
6. Recheck notifies and metadata because transform baking does not automatically preserve every
   semantic event contract.
7. Test the resulting Animation Sequence outside Sequencer and in a cooked build.

Keep a reversible path: source sequence/rig, settings, and generated output should be distinct.
