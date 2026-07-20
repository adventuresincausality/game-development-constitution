# Lumen GI and reflections

## Select quality by target

- High-quality Lumen is the modern dynamic GI/reflection path for capable targets.
- UE 5.8 Lumen Lite is **Beta**. Medium GI quality (`sg.GlobalIlluminationQuality 1`) selects its
  Irradiance Field Final Gather (`r.Lumen.FinalGatherMethod 0`) for faster, lower-quality GI.
- Medium reflection quality (`sg.ReflectionQuality 1`) disables Lumen Reflections, uses SSR on smooth
  surfaces, and retains rough specular from Lumen GI.
- Below Lumen, use the project/platform's supported baked or simpler GI/reflection fallback.

Start from Epic's `BaseScalability.ini` and platform device profiles; they coordinate many interdependent
settings to preserve a reasonably consistent look.

## Isolate cost

1. Confirm Lumen passes are material in `profilegpu`/GPU trace.
2. Capture Lumen visualization/overview modes to find scene representation, update, reflection, or
   screen-trace problems.
3. A/B GI and reflection scalability independently.
4. Test worst-case dynamic lights, camera motion, emissive content, interiors/exteriors, and distance.
5. Validate temporal stability and lighting continuity on every tier.

Lumen uses async compute on supported consoles and can overlap other work. Per-pass timings can include
overlap. Disable Lumen async compute only for isolated profiling, then restore it and judge total frame
time; overlap is part of the shipping performance strategy.
