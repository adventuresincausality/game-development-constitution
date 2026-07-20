# Effect recipes

## Impact burst

Finite system: flash sprite, directional debris, short smoke, optional decal handoff. Inputs are
position, surface normal, physical-surface style, scale, and seed. Align directional particles to
the normal, cap secondary spawns, auto-deactivate, and batch high-frequency impacts through a Data
Channel when measurement supports it.

## Character trail

Attach to a stable component/socket or sample a skeletal data interface. Use ribbons when continuous
history is required; reset ribbon identity on teleport/reuse. Bound width, tessellation, lifetime,
and translucency. Stop spawning on state exit and allow a deliberate tail.

## Area telegraph

Prefer a simple mesh/decal/material plus Niagara accents. Gameplay owns radius, timing, and damage;
the effect consumes normalized progress and dimensions. Preserve contrast and shape at low quality.

## Environmental ambient

Use large controlled bounds, distance scalability, low update frequency where valid, and camera/local
space only when it matches the illusion. Avoid one independent system per tiny ambient element when
one shared system or lightweight emitters suffice.

## Smoke/fire

Start with sprites/flipbooks. Use 2D Niagara Fluids templates when simulation materially improves a
game effect and the budget supports it. Reserve 3D fluids for high-end/cinematic cases unless proven.
Bake a fluid simulation to a flipbook when dynamic interaction is unnecessary.

## Beam/target link

Pass source and target explicitly, define behavior when either is invalid, and update only as often
as visual motion requires. Ribbons/beams are presentation; gameplay traces determine hits.
