---
id: GDC-L1-ANIM-0004
title: Choose your point on the root-motion vs. code-driven axis deliberately
layer: L1
domain: ANIM
subdomain: root-motion-vs-in-place
type: contextual
confidence: 4
status: canonical
tags:
  - animation
  - root-motion
  - locomotion
  - responsiveness
  - weight
related:
  - GDC-L1-FEEL-0008
  - GDC-L1-ANIM-0002
  - GDC-L1-FEEL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-cooper-game-anim
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Movement can be driven by the animation (**root motion** — precise, weighty, visually
> connected, but less responsive and harder to tweak) or by code (**in-place / procedural** —
> responsive, tweakable, but can feel floaty and disconnected from the animation). Choose the
> approach deliberately, per action; it is the animation form of the responsiveness–commitment
> tradeoff.

## Rationale
The two locomotion approaches sit at opposite ends of the same tension. Code-driven movement
lets you set exact speeds and turn rates and change them instantly — fast, responsive, easy to
tune — but the animation is just played on top, so it can slide, float, or desync from the
motion [S-cooper-game-anim]. Root motion bakes the movement into the animation itself, so the
character's feet and body match its travel exactly, giving weight and a strong
animation-to-motion connection — at the cost of responsiveness (you're committed to the
animation's path) and tweakability. This is FEEL-0008 (responsiveness vs. commitment) and
ANIM-0002 (responsiveness vs. fidelity) made concrete in locomotion: root motion buys weight
and precision by spending responsiveness; code-driven buys responsiveness by spending visual
connection. Neither is right in general; the right choice depends per action on whether that
motion should feel *snappy* or *grounded*.

## Applies when
Locomotion and movement-action design — walking/running, dodges, rolls, attacks that travel,
traversal. Especially where weight vs. snappiness is a defining feel choice.

## Does not apply / Exceptions
Many games mix both — code-driven locomotion for responsive general movement, root motion for
specific weighty actions (a committed dodge-roll, a lunging attack) — so it's per-action, not a
whole-game commitment. Hybrid and blended approaches (partial root motion, motion warping) blur
the line. And highly stylized or abstract games may not care about the visual-connection
benefit root motion provides.

## Implementation (kept separate from the principle)
Use motion-warping/blending to get some of both where needed. Expose the code-driven parameters for tuning (ARCH-0001). Judge by feel in playtest.

## Disagreement
Root-motion (weight, precision, visual fidelity) vs. code-driven (responsiveness, tweakability)
— the same axis as FEEL-0008/ANIM-0002, specific to how movement is produced. Weighty,
grounded games lean root motion; fast, snappy games lean code-driven; most blend per action.

## Notes
Confidence 4.
