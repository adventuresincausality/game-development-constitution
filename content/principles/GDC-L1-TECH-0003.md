---
id: GDC-L1-TECH-0003
title: Lighting is the highest-leverage visual tool
layer: L1
domain: TECH
subdomain: lighting
type: contextual
confidence: 4
status: canonical
tags:
  - technical-art
  - lighting
  - mood
  - readability
  - composition
related:
  - GDC-L1-LEVEL-0001
  - GDC-L1-TECH-0004
  - GDC-L1-FEEL-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-realtime-rendering
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Lighting does more for a scene than almost any other visual element: it sets mood, directs
> attention, creates depth, and makes a world believable. The same geometry reads completely
> differently under different light — so treat lighting as a primary tool, not a final pass.

## Rationale
Human perception is exquisitely tuned to light and shadow, so lighting carries an outsized share
of a scene's mood, legibility, and realism [S-realtime-rendering]. It's the cheapest way to make
modest assets look great and the fastest way to make great assets look flat. Lighting also does
*gameplay* work: it guides the player's eye (the level-design use of light to direct attention,
LEVEL-0001), separates figure from ground for readability, and sets emotional tone. Because it's
so leverage-heavy, lighting deserves deliberate art direction and iteration rather than being
bolted on after the geometry is built. It is a major contributor to the "polish" layer of game
feel (FEEL-0001) and often the single biggest lever on how a game *looks*.

## Applies when
Any 3D (and much 2D) visual work — environments, characters, key moments. Especially powerful in
atmosphere-, horror-, and mood-driven games, and for guidance/readability everywhere.

## Does not apply / Exceptions
Flat, unlit, or deliberately-styled art (some 2D, cel/toon, retro) uses lighting minimally or
stylistically. Performance budgets constrain dynamic lighting (TECH-0002/0004) — expensive
lighting must fit the frame. And lighting must serve, not fight, gameplay readability (LEVEL-0001,
ANIM-0003) — beautiful lighting that hides threats or paths is a defect.

## Implementation (kept separate from the principle)
Treat lighting as art direction: design it for mood, depth, and attention-guidance (LEVEL-0001)
alongside the geometry, not after. Use light and contrast to lead the eye and separate the
important. Balance dynamic vs. baked lighting against the rendering budget (TECH-0002/0004).
Iterate lighting as a first-class part of look-dev.

## Disagreement
Little on lighting's importance; the tension is dynamic vs. baked lighting (flexibility/realism
vs. cost — TECH-0002) and realistic vs. stylized lighting (TECH-0005). These are budget and
art-direction choices, not disputes about whether lighting matters.

## Notes
The highest-leverage TECH principle; overlaps LEVEL-0001 (guide the eye with light) and
contributes heavily to game feel's polish layer (FEEL-0001). Confidence 4.
