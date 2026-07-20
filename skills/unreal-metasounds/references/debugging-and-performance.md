# Debugging and performance

## Symptom matrix

| Symptom | Inspect first |
|---|---|
| Silent | source playing, audio output route, gain/envelope, one-shot finish timing |
| Stops immediately | `On Finished` triggered early or one-shot interface on indefinite graph |
| Never stops | missing finish/release or owner cleanup |
| Runtime value ignored | using Variable instead of Input, wrong name/type/component, constructor pin |
| Click/pop | waveform/gain discontinuity, no release, abrupt stop, DC |
| Repeats audibly | random pool/history/seed and concurrency stealing |
| Wrong distance/direction | attenuation/spatialization asset/interface and listener |
| Mix parameter ignored | modulation routing/activation/proxy update |
| Hitches on first play | asset/stream/decode/graph readiness and packaged behavior |
| Audio overload | voice count, per-source graph/DSP, sample rate, effects/submix cost |

## Isolation ladder

1. Audition one Source with constant values and a minimal signal path.
2. Watch meters/output and verify envelope/lifetime.
3. Add graph stages one at a time.
4. Test through the exact gameplay Audio Component and parameter order.
5. Add attenuation, concurrency, modulation, class, and submix routing individually.
6. Reproduce maximum simultaneous voices and full mix on target hardware.
7. Use audio diagnostics/Insights and Mix Matrix Debugger where applicable.

Measure audio-render thread, source/voice count, underruns, streaming/decode, effects/submixes, and
game-thread parameter traffic. Reduce voice count and redundant graph work before degrading the cue
that carries critical information.
