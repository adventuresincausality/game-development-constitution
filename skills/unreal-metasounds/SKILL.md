---
name: unreal-metasounds
description: Design, parameterize, vary, mix, optimize, and debug procedural audio in Unreal Engine 5.8. Use for MetaSound Sources, Patches, Presets, graph Inputs and Triggers, runtime Audio Component parameters, random variation, sample playback, procedural synthesis, music timing, Quartz, Audio Modulation, Control Buses, attenuation and spatialization, interfaces, concurrency, looping sounds, output watching, Builder API, or silent/clicking/expensive audio.
---

# Unreal 5.8 MetaSounds

## Select the audio layer first

Read [`references/system-selector.md`](references/system-selector.md).

- One playable procedural/parameterized sound -> MetaSound Source.
- Reusable graph behavior inside other MetaSounds -> Patch.
- Same graph with different default inputs -> Preset.
- Cross-category volume/filter/pitch control -> Audio Modulation/Control Buses.
- Sample-accurate musical scheduling -> Quartz plus MetaSound where needed.
- Fixed simple one-shot -> Sound Wave or simple source may be enough.

Keep gameplay authority outside the audio graph. MetaSound consumes events and parameters to render
feedback; it does not decide whether a hit, purchase, cooldown, or state transition is valid.

## Execute

1. Define the sound's informational job, duration, spatial context, variation, and mix priority.
2. Choose Source, Patch, Preset, or a simpler asset and define the public input/output interface.
3. Build a minimum audible signal path and correct one-shot or indefinite lifetime.
4. Add deterministic/random variation, envelopes, filters, synthesis, or layering in bounded stages.
5. Drive runtime changes through MetaSound Inputs/Triggers on the playing Audio Component.
6. Configure attenuation, spatialization, concurrency, sound class/submix, and modulation routing.
7. Test repeated triggering, virtualization/lifecycle, listener distance, and worst-case voice counts.
8. Profile audio/render-thread cost and the complete mix during representative gameplay.

Load only what applies:

- [`references/assets-and-graph-contract.md`](references/assets-and-graph-contract.md)
- [`references/runtime-parameters-and-events.md`](references/runtime-parameters-and-events.md)
- [`references/variation-and-recipes.md`](references/variation-and-recipes.md)
- [`references/spatialization-lifetime-and-concurrency.md`](references/spatialization-lifetime-and-concurrency.md)
- [`references/modulation-mixing-and-quartz.md`](references/modulation-mixing-and-quartz.md)
- [`references/presets-patches-and-interfaces.md`](references/presets-patches-and-interfaces.md)
- [`references/builder-api-and-output-watch.md`](references/builder-api-and-output-watch.md)
- [`references/debugging-and-performance.md`](references/debugging-and-performance.md)

## Required answer format

Return:

1. **Sound's gameplay/readability job** and chosen asset architecture.
2. **Input/output/trigger interface**, units, defaults, and ownership.
3. **Graph signal/control flow in evaluation order**.
4. **Variation rules and deterministic requirements**.
5. **Lifetime, concurrency, attenuation, spatialization, class/submix, and modulation settings**.
6. **Network/cosmetic, accessibility, and performance consequences**.
7. **Audition, debug, and mix acceptance checks**.

## Hard rules

- Only a MetaSound Source is directly playable; Patches encapsulate reusable graph behavior.
- Use Presets for inherited graphs with overridden default Inputs; do not duplicate the graph.
- Use Inputs for values that change during playback. MetaSound Variables are graph-internal, cannot
  be accessed from Blueprint, and do not register external playback-time changes.
- Set runtime parameters on the Audio Component before Play when the first audio block depends on them.
- Keep `UE.Source.OneShot` and its `On Finished` contract for finite sounds; remove it from indefinite sounds.
- Remove DC, avoid discontinuous waveform jumps, and bound gain before output.
- Define concurrency and cleanup for every repeatedly triggered or looping source.
- Use Audio Modulation for shared mix state; do not update every MetaSound instance each frame.
- Critical gameplay information must have a non-audio equivalent and survive mix/accessibility settings.
- Profile at realistic simultaneous voice counts; graph complexity alone is not the final cost.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
