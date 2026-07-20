# Parameter effects

## Contents

- [Light selection](#light-selection)
- [Core light properties](#core-light-properties)
- [Mobility](#mobility)
- [Exposure](#exposure)
- [Physical-unit anchors](#physical-unit-anchors)
- [Lumen](#lumen)
- [MegaLights](#megalights)

## Light selection

| Need | Light |
|---|---|
| Sun, moon, or effectively infinite source | Directional Light |
| Captured environment/sky contribution | Sky Light |
| Bare bulb or omnidirectional fixture | Point Light |
| Flashlight, headlamp, stage cone | Spot Light |
| Window, panel, fluorescent fixture, softbox | Rect Light |

## Core light properties

| Property | Increase | Decrease / caution |
|---|---|---|
| Intensity | More direct contribution in the selected physical unit | Interpret only with exposure and distance |
| Temperature | Cooler/bluer at higher Kelvin | Warmer/oranger at lower Kelvin; avoid double-tinting a physically scattered sun unless stylized |
| Attenuation Radius | Affects more geometry and increases overlap | Not a brightness control; keep close to useful influence |
| Source Radius / Soft Source Radius | Larger apparent emitter; softer, broader shadows/reflections | Excessive size can erase contact definition |
| Source Length | Elongates emitter and shadow softness | Match tube/strip fixture shape |
| Indirect Lighting Intensity | Scales bounced contribution from this light | Nonphysical artistic override; debug GI before using |
| Volumetric Scattering Intensity | Stronger effect in participating media | Can create fog glow/noise and flatten contrast |
| Specular Scale | Changes specular response | Keep at default for physical work; use only as a deliberate art override |

### Spot Light

- Inner Cone Angle: fully lit core.
- Outer Cone Angle: full edge of influence.
- Larger gap between inner and outer angles creates a softer penumbra.
- Use IES profiles for fixture distribution when available instead of hand-shaping every
  falloff.

### Rect Light

- Source Width/Height define emitter size and reflection shape.
- Use for windows and panels where emitter geometry matters.
- Face the emitting side toward the scene.

## Mobility

| Mobility | Use | Cost/constraint |
|---|---|---|
| Static | Never changes; baked Lightmass workflow | Requires precomputed lighting; not useful as a Lumen dynamic source |
| Stationary | Color/intensity may change, transform stays fixed | Mixed baked/dynamic constraints; overlapping Stationary limits apply |
| Movable | Transform and properties change at runtime | Fully dynamic shadows; profile shadow path |

For Lumen-first fully dynamic projects, Movable lights are the normal baseline. Do not
choose mobility from habit; choose it from the rendering path.

## Exposure

| Control | Effect |
|---|---|
| Metering Mode: Manual | Fixed exposure; camera/light comparison is stable |
| Histogram | 64-bin adaptive exposure; default adaptive mode |
| Exposure Compensation | Offset in stops; `+1` = 2× brighter, `-1` = 2× darker |
| Min/Max EV100 | Clamp adaptation range; equal values disable adaptation |
| Speed Up | Adaptation rate from dark environment/view to bright |
| Speed Down | Adaptation rate from bright environment/view to dark |
| Metering Mask | Weights screen regions; center weighting reduces edge-light pumping |
| Low/High Percent | Select histogram range used for target exposure; extreme values can destabilize or clip |

Workflow:

1. Use Manual exposure while establishing physically plausible lights.
2. Enable HDR (Eye Adaptation) visualization.
3. If adaptation is required, set a purposeful Min/Max EV100 range.
4. Set speed from desired perceptual behavior.
5. Add a metering mask if peripheral bright objects cause pumping.
6. Use Local Exposure only after global exposure and light values are sound.

## Physical-unit anchors

- UE documents a zenith sun around **120,000 lux** with a 0.545° angular diameter.
- A perpendicular white diffuse surface under that sun may receive roughly **150,000
  lux** total.
- Point/Spot/Rect Lights can use Candela or Lumens when inverse-square falloff is on.
- `1000 cd` produces `1000 lux` at one meter for a perpendicular receiver in the
  documented example.

Use real fixture specifications as starting points. Do not compensate for incorrect
exposure by multiplying every light arbitrarily.

## Lumen

- Dynamic Global Illumination: Lumen.
- Reflection Method: Lumen.
- Software tracing requires Generate Mesh Distance Fields.
- Hardware ray tracing improves representation/quality in supported cases but costs
  more and requires compatible hardware.
- High scalability targets Lumen GI/reflections for 60 FPS on current-generation
  consoles; Epic targets cleaner indoor lighting at 30 FPS.
- Inspect Surface Cache/Card visualization when meshes appear black or fail to bounce
  light.

## MegaLights

- Enable under Project Settings > Rendering > Direct Lighting.
- Hardware ray tracing support is recommended.
- All local lights are handled when enabled; disable per light with `Allow MegaLights`.
- Directional Light support is disabled by default. Enable it with
  `r.MegaLights.DirectionalLights 1` only after testing: Epic recommends Deferred Lighting with
  VSM for a strong sun, while MegaLights may fit a dim, soft moonlight. Sky Light is not handled.
- Select Ray Tracing or Virtual Shadow Maps per light as shadow method.
- Disable by scalability/device profile with `r.MegaLights.Allow 0`.
- Avoid huge light bounds. Merge many tiny emitters when they create noise, blur, or
  ghosting at the same pixels.
