# Variation and recipes

## Impact/weapon one-shot

Input surface/material category, normalized magnitude, and optional seed. Select from a curated wave
array, avoid immediate repetition, map magnitude to bounded gain/pitch/filter/transient layers, apply a
short envelope, then finish explicitly. Keep hit validation in gameplay.

## Footsteps

Select material-aware sample sets, randomize within narrow authored bounds, and optionally scale by
speed/weight. Concurrency should prevent impossible stacking. Treat footsteps as feedback: preserve
distinguishability from ambience and pair critical enemy cues with visual/accessibility alternatives.

## Engine/machine loop

Maintain an owned indefinite Source. Map normalized RPM/load to crossfade, pitch, filtering, and
layers; smooth control changes. Separate start, sustain, and stop/release behavior. Stop/fade on owner
shutdown and test virtualization/re-entry.

## Adaptive ambience

Use independent bounded layers with randomized intervals and controlled density. Drive broad state via
Modulation or infrequent parameters rather than per-frame updates to every voice. Preserve silence and
headroom; random does not mean unbounded simultaneous playback.

## Procedural tone/UI

Oscillator -> envelope -> filter/gain -> output. Start/end at zero amplitude and avoid instantaneous
frequency/gain jumps to prevent clicks. Limit spectrum and loudness across headphones/speakers.

For deterministic replays or synchronized musical structure, own and pass a seed/clock deliberately.
For ordinary cosmetic variation, exact cross-client random identity is usually unnecessary.
