# Presets, Patches, and interfaces

## Patch

Extract a Patch when the same bounded DSP/control behavior is reused: randomized wave choice,
envelope mapping, surface selection, filter chain, or musical utility. Document every pin, unit,
default, and timing assumption. Changes propagate to containing graphs; test representative callers.

## Preset

Right-click a Source/Patch -> Create MetaSound Preset. A Preset inherits a read-only graph and
overrides selected default Inputs. Parent changes propagate. Use Presets for variants sharing the
same behavior contract; convert from Preset only when the graph must diverge. Constructor-pin status
cannot be overridden on Presets.

## Interfaces

Interfaces supply standardized Inputs/Outputs connecting MetaSounds to audio-engine systems:

- `UE.Source.OneShot`: `On Finished` for finite source lifetime.
- `UE.Attenuation`: listener distance input.
- `UE.Spatialization`: azimuth/elevation inputs.

Add/remove interfaces in the MetaSound Interfaces panel. Do not retain OneShot on indefinite sources.
Treat interface changes like an API migration because dependent graphs/callers may rely on members.

Use templates only when repeated asset construction and curated designer controls justify the extra
framework. For a small graph, a normal Source/Patch/Preset is clearer.
