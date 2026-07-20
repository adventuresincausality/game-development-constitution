# System selector

| Need | Prefer | Verify |
|---|---|---|
| Playable generated/processed source | MetaSound Source | output format, lifetime, concurrency |
| Reused DSP/control subgraph | MetaSound Patch | documented pins and propagation risk |
| Variants of one graph | MetaSound Preset | inherited defaults, constructor pins |
| Simple fixed sample | Sound Wave/simple playback | no procedural complexity required |
| Category/world mix state | Audio Modulation + Control Buses | routing, activation, unit conversion |
| Beat/bar scheduling | Quartz | clock ownership, latency, quantization |
| Dynamic graph construction | Builder API | lifecycle, handles, asset/runtime boundary |

Decision questions:

1. Does the sound need runtime variation or parameter response?
2. Is change per play, during playback, per category, or global?
3. Must events be sample-accurate or merely frame-aligned?
4. Is the source finite, looping, sustained, or procedurally terminated?
5. How many voices can coexist and which may be stolen/virtualized?

Use the simplest layer that owns the requirement. MetaSound handles per-source generation; Audio
Modulation handles shared mix control; gameplay provides semantic events/state.
