# Builder API and output watching

## Builder API

Use the MetaSound Builder Subsystem for runtime/editor creation and mutation of transient Sources or
Patches. Use the MetaSound Editor Subsystem for editor-only asset creation/serialization workflows.
Prefer authored assets unless dynamic graph topology is a real requirement.

Builder handles identify graph nodes/pins but may change when documents rebuild/version. Never
serialize them as durable identity. Define ownership of transient builders, audition/live-update
state, dependency loading, and teardown. Validate generated graphs before playback/export.

## Output watching

`Watch Output` can observe supported Source Outputs—Float, Int32, Bool, Time, String, and Trigger—while
the Source is playing. Patch Outputs cannot be watched directly. The delegate can fire for every
output update, including multiple updates within a frame.

Use watched outputs for presentation/analysis callbacks, not audio-thread authority over gameplay.
Throttle or aggregate high-rate outputs before expensive game-thread work. For envelope data, watch
the Audio Output with Epic's Envelope Follower analyzer identifiers.

Failure gates:

- no callback -> Source not playing, wrong exact output/analyzer name, unsupported type, or Patch;
- excessive callbacks -> output updates multiple times per frame;
- stale builder handle -> graph rebuilt/versioned;
- live changes absent -> not auditioning with supported Live Updates or wrong builder instance.
