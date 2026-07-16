---
id: GDC-L1-AUDIO-0002
title: Sound is the cheapest, highest-impact feel win — sell impact with audio
layer: L1
domain: AUDIO
subdomain: sfx-as-feedback
type: contextual
confidence: 4
status: canonical
tags:
  - audio
  - game-feel
  - juice
  - impact
  - sfx
related:
  - GDC-L1-FEEL-0004
  - GDC-L1-FEEL-0005
  - GDC-L1-PROTO-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-nijman-screenshake
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Audio is disproportionately powerful for game feel. A punchy hit, a bass-heavy weapon, a
> crunchy impact, a satisfying pickup chime sell force and reward far more cheaply than new
> animation or VFX. When a moment feels flat, sound is usually the fastest, cheapest fix.

## Rationale
Impact is a perceptual illusion assembled from many cues, and audio is one of the strongest
and cheapest to author — raising the bass on a gunshot or adding a meaty thud to a hit
transforms how forceful it feels, with none of the cost of new art [S-nijman-screenshake].
This is why the classic "juice" demonstrations lean so hard on sound, and why audio pairs so
naturally with hitstop (FEEL-0005): the freeze and the crunch land on the same frame and
amplify each other. For a small team especially, sound is the highest feel-per-hour
investment available — a reason it's often the fastest win when a prototype's core loop feels
lifeless (PROTO-0001).

## Applies when
Any impactful or rewarding moment — hits, kills, weapon fire, landings, pickups, ability
activations, successes. Highest-leverage exactly when a moment should feel powerful but
doesn't.

## Does not apply / Exceptions
Restraint-driven and quiet aesthetics deliberately *don't* punch up every event (AUDIO-0005),
and over-juiced audio fatigues the ear and clutters the mix (AUDIO-0004) — more is not
monotonically better, same as visual juice (FEEL-0004). Mood-first games may want understated,
realistic sound rather than exaggerated impact.

## Implementation (kept separate from the principle)
Reach for sound early when tuning feel — often before new animation or VFX. Layer impact
sounds (transient "attack" + body + tail), use low-end for weight, and sync them to the exact
impact frame and to hitstop (FEEL-0005). Keep the punchy sounds for the events that matter so
they stay special (AUDIO-0004/0005). Prototype feel with placeholder-but-punchy audio rather
than waiting for final assets.

## Disagreement
Exaggerated/hyperreal audio (maximum punch and satisfaction) vs. realistic/restrained audio
(authenticity, mood) is a stylistic split — arcade and action lean hyperreal; sims, horror,
and grounded games lean realistic. Both are valid; the choice follows the intended register.

## Notes
The feel/impact half of game audio (AUDIO-0001 is the information half), and a specific,
high-ROI instance of FEEL-0004 (juice) that pairs with FEEL-0005 (hitstop). Confidence 4.
