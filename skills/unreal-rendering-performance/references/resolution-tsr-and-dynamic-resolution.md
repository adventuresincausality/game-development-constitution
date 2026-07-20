# Resolution, TSR, and Dynamic Resolution

## TSR

TSR renders at a lower internal resolution and reconstructs the display image. Its work includes
input-resolution and display-resolution costs, so lowering screen percentage may not reduce the TSR
pass itself in direct proportion even when it reduces the rest of the frame.

Actions:

1. Capture GPU cost at the production output resolution.
2. Compare controlled primary screen percentages with identical content.
3. Set Anti-Aliasing scalability through `sg.AntiAliasingQuality` (`0` Low through `4` Cinematic).
4. Inspect Show -> Visualize -> Temporal Upscaler for velocity, rejection, translucency, exposure,
   input/output, and active quality information.
5. Inspect the `Scene > PostProcessing > TemporalSuperResolution` event in GPU tools.
6. Fix velocity/translucency/material history defects before raising global quality to conceal them.

Avoid routine input screen percentages below 50%; Epic reserves extreme upscaling for exceptional
cases such as output beyond 4K or brief dynamic-resolution pressure.

## Dynamic Resolution

Enable through Game User Settings/C++ for supported targets, then configure:

| CVar | Effect |
|---|---|
| `r.DynamicRes.MinScreenPercentage` | lower bound; decreasing permits more quality loss to recover GPU time |
| `r.DynamicRes.MaxScreenPercentage` | allocation/quality ceiling |
| `r.DynamicRes.FrameTimeBudget` | GPU-frame target in milliseconds |
| `r.DynamicRes.HistorySize` | larger smooths decisions but reacts more slowly; smaller reacts faster but is noisier |

Use `stat unitgraph`, then `stat raw`, to inspect raw GPU time and selected primary screen percentage.
Dynamic resolution reacts to prior GPU workload and may panic downward after consecutive over-budget
frames. It cannot predict every camera cut/effect burst and cannot recover a CPU-bound frame by doing
less GPU pixel work.
