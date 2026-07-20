# Audio Modulation, mixing, and Quartz

## Audio Modulation

Enable the Audio Modulation plugin when shared dynamic mix control is needed. Build:

1. Modulation Parameters with defined unit/normalized mapping.
2. Control Buses for categories such as master, music, SFX, dialogue, ambience, or accessibility.
3. Control Bus Mixes for gameplay/menu/state profiles.
4. Modulation Destinations on MetaSound Sources, Sound Classes, Components, Submixes, or effects.
5. Blueprint/C++ activation/update/clear ownership and debugging.

Routing can Disable, Inherit, Override, or Union at supported destinations. Sound Class hierarchy is
not automatically equivalent to modulation routing; assign required buses deliberately. When an API
edits only the UObject representation, use the appropriate Update call to push it to the audio-thread
proxy.

Use MetaSound `Get Modulator Value`/`Mix Modulators` when the graph must react to a bus. Modulation is
block-rate, not sample-rate. Use graph/audio-rate signals for true audio-rate modulation.

## Mix hierarchy

Protect critical cues through class/submix routing, concurrency priority, headroom, ducking, and
state mixes. Test the whole combat/ambience/music/dialogue mix, not soloed assets. Provide category
volume controls and non-audio equivalents for critical signals.

## Quartz

Use Quartz clocks for beat/bar/subdivision-aligned scheduling. Keep transport/clock ownership stable,
schedule sufficiently ahead for the audio renderer, and define pause, tempo change, world transition,
and late-event behavior. MetaSound produces/varies sound; Quartz owns musical-time scheduling.
