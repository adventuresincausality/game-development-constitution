# Sequencer cuts, blends, and gameplay handoff

Sequencer uses a Level Sequence Asset for tracks/keys/bindings and a Level Sequence Actor in the
world for playback/context.

## Camera workflow

1. Create/open a Level Sequence.
2. Add Cine Camera Actors as spawnables or possessables according to lifetime/ownership.
3. Add one Camera Cut Track and bind shot sections to cameras.
4. Place cut boundaries deliberately; overlap/shape supported sections when a camera blend is intended.
5. Animate camera transform/lens/focus and preview through the cinematic viewport.
6. Add event/audio/subsequence tracks only with explicit runtime ownership.
7. Configure playback, binding overrides, sequence completion state, skip, and gameplay return.

Camera Cut Track controls the active cinematic camera. Disabling Camera Cuts prevents the sequence
from taking camera control. `Can Blend`/cut blending and gameplay blending must be tested with any
gameplay camera switching that could occur during the blend.

## Handoff contract

Before playback, capture/derive the local PlayerController's gameplay view state, input mode, UI,
time/dilation, and player-control policy. During playback, decide whether gameplay continues, pauses,
or is restricted. On finish, skip, interruption, death, level transition, or sequence destruction:

1. stop/finish the sequence using the intended completion policy;
2. restore or blend to the current valid gameplay view target, not a stale actor;
3. restore input/UI/time state;
4. clear cinematic-only modifiers and camera shakes;
5. handle repeated/overlapping sequence requests idempotently.

Test packaged builds and all terminal paths; editor scrubbing is not runtime handoff proof.
