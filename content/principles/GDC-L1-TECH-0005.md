---
id: GDC-L1-TECH-0005
title: Build materials and shaders as a data-driven system, not one-offs
layer: L1
domain: TECH
subdomain: shaders-and-materials
type: contextual
confidence: 4
status: canonical
tags:
  - technical-art
  - shaders
  - materials
  - data-driven
  - reuse
related:
  - GDC-L1-ARCH-0001
  - GDC-L1-TECH-0002
  - GDC-L1-CONTENT-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-realtime-rendering
  - S-gregory-game-engine-arch
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Build materials and shaders as a *system* — a small set of flexible master materials driven by
> parameters and instanced for variation — rather than a pile of bespoke one-off shaders.
> Data-driven materials let artists produce and tune vast visual variety without new code, and
> keep the rendering cost and pipeline manageable.

## Rationale
Authoring a unique shader per material doesn't scale: it multiplies engineering work,
fragments the rendering pipeline, makes optimization impossible, and locks artists out of their
own materials [S-realtime-rendering]. A systemic approach — master materials exposing parameters,
instanced and tuned per asset — is the data-driven-design principle (ARCH-0001) applied to
rendering: behavior and variety live in editable data (material instances) that artists control,
while the underlying shaders stay few and optimizable. This empowers content creators
(CONTENT-0002) to author look variety without programmers, keeps the shader count (and thus
rendering cost, TECH-0002) under control, and makes the material library consistent and
maintainable. It's the same "build the seam, fill it with data" logic that runs through the
architecture layer.

## Applies when
Any game with more than a handful of materials — most 3D and many 2D games. The more visual
variety, the more a material *system* pays over one-offs.

## Does not apply / Exceptions
Tiny games with a few materials may not need the abstraction. Some genuinely unique effects
(a signature hero shader, a special-case visual) warrant a bespoke shader — the rule is "systemic
by default, bespoke by exception," not "never write a custom shader." Over-parameterizing a
master material into an unusable monster is its own failure (the YAGNI caution from ARCH-0001).

## Implementation (kept separate from the principle)
Author a small set of flexible master materials with exposed parameters; create variation through
material *instances*, not new shaders. Let artists tune instances without code (CONTENT-0002).
Keep shader permutations and cost in check (TECH-0002). Reserve bespoke shaders for genuinely
unique effects. Validate and organize the material library (CONTENT-0003).

## Disagreement
Systemic/data-driven materials (scalable, artist-tunable, optimizable) vs. bespoke shaders
(maximal control per effect, but unscalable) — the same data-driven-vs-YAGNI tension as ARCH-0001,
in the rendering domain. Systemic by default; bespoke where a unique effect earns it.

## Notes
The rendering application of data-driven design (ARCH-0001) and creator-empowerment
(CONTENT-0002); keeps rendering cost (TECH-0002) manageable. Confidence 4.
