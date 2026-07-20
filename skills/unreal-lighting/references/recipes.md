# Lighting recipes

## Physically based clear daylight

1. Add Directional Light, Sky Atmosphere, Sky Light, and optional Volumetric Clouds.
2. Enable Atmosphere Sun Light on the Directional Light.
3. Set Directional Light in Lux; use approximately 120,000 lux for a documented zenith
   sun starting point.
4. Enable Sky Light Real Time Capture for dynamic time of day.
5. Start with Manual exposure; inspect HDR Eye Adaptation values.
6. Rotate the Directional Light for time of day before altering intensity/color.
7. Enable bounded auto exposure only after the noon reference is stable.
8. Verify shadow, atmosphere, cloud, Lumen, and target-platform cost.

## Golden hour

1. Lower the Directional Light angle near the horizon.
2. Let Sky Atmosphere produce longer optical paths and warm scattering first.
3. Increase Mie contribution/anisotropy only when the desired haze is missing; inspect
   silhouettes and aerial perspective.
4. Preserve a cooler Sky Light/environment contrast unless the art target is uniformly
   warm.
5. Use restrained exposure compensation; do not turn sunset into daylight brightness.
6. Add local practicals only to guide focal hierarchy.

## Night exterior that still reads as night

1. Use a second atmospheric Directional Light for moon if required; set Atmosphere Sun
   Light Index appropriately.
2. Reduce broad environment contribution rather than crushing blacks with post color.
3. Clamp auto exposure so the camera cannot adapt the night back to daytime.
4. Place local lights in purposeful pools; minimize attenuation overlap.
5. Keep navigable silhouettes and landmark contrast.
6. Check emissives at gameplay distance; use real lights when they must illuminate.
7. Verify local-light noise/ghosting with MegaLights enabled.

## Interior lit by windows

1. Establish exterior Directional/Sky lighting and exposure.
2. Use Lumen for indirect bounce.
3. Add Rect Lights at important apertures only when the dynamic solution needs an art-
   directed key or stronger directionality.
4. Match Rect Light dimensions/orientation to the opening.
5. Keep attenuation bounds inside the useful room volume.
6. Inspect Lumen Surface Cache and mesh modularity when interiors stay black.
7. Compare interior-to-exterior exposure transition and set Speed Up/Down intentionally.

## Practical-lit interior

1. Give emissive materials plausible luminance for visible fixture surfaces.
2. Pair important fixtures with Point/Spot/Rect Lights for controlled illumination.
3. Match source size and shape to the fixture.
4. Use IES profiles for real fixture distributions where available.
5. Limit attenuation to the room/area of influence.
6. With MegaLights, merge clusters that produce stochastic blur or ghosting at the same
   pixels.
7. Test with fog/translucency because MegaLights includes those paths.

## Horror or high-contrast scene

1. Lock or tightly bound exposure; uncontrolled eye adaptation destroys authored
   darkness.
2. Preserve readable navigation and interactable silhouettes.
3. Use small areas of motivated light rather than globally lowering every value.
4. Control source radius: smaller sources create harder, more threatening shadows;
   larger sources create softer ambiguity.
5. Use volumetric scattering only where it supports composition.
6. Test black-level visibility on the target display and scalability tiers.

## Stylized scene

1. Start from stable exposure and functional key/fill separation.
2. Use temperature/color and indirect intensity as deliberate nonphysical controls.
3. Keep values consistent by light role, not per-object improvisation.
4. Validate material roughness and albedo before fixing every problem with lights.
5. Preserve performance rules: bounded lights, intentional shadows, target profiling.
