# Assets and graph contract

Create a Source via Content Browser -> Add -> Audio -> MetaSound Source and a Patch via Audio ->
MetaSounds -> MetaSound Patch. A Source produces playable audio; a Patch must be embedded in a Source
or another MetaSound.

## Minimum Source

1. Choose mono/stereo/output format deliberately.
2. Route Wave Player or synthesis output through gain/envelope/filter stages to Audio Output.
3. Expose semantic Inputs and Triggers in the Members panel.
4. For a finite sound, keep `UE.Source.OneShot` and connect the terminal trigger to `On Finished`.
5. For an indefinite loop/sustain, remove the one-shot interface and define external stop/fade cleanup.
6. Audition with extreme public-input values before composing into gameplay.

MetaSound is a flow graph, not a Blueprint execution graph. Audio-rate signals, block/control-rate
values, and Triggers have different timing semantics. Keep pin types/units explicit.

## Public contract

Name Inputs by meaning and unit: `ImpactStrength01`, `SpeedCmPerSec`, `SurfaceType`, `Release`,
`PitchSemitones`. Clamp/map raw gameplay values once at the boundary. Provide defaults that render a
safe, audible result if the caller omits an optional input.

Do not expose implementation knobs merely because nodes have pins. Public inputs should represent
stable design controls; internal constants and Variables remain graph details.
