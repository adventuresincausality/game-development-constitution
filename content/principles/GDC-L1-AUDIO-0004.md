---
id: GDC-L1-AUDIO-0004
title: Mix for clarity — the player must always hear what matters
layer: L1
domain: AUDIO
subdomain: mixing
type: objective
confidence: 4
status: canonical
tags:
  - audio
  - mixing
  - clarity
  - ducking
  - hdr
  - information-hierarchy
related:
  - GDC-L1-AUDIO-0001
  - GDC-L1-UX-0003
  - GDC-L1-UX-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-game-audio-practice
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> In the chaotic, unpredictable soundscape of a game, mix **dynamically** so that
> gameplay-critical sounds always cut through. Establish an audio hierarchy and use real-time
> techniques — ducking, HDR/state mixing — so footsteps aren't buried under music and the
> sound that matters most in a given moment wins it.

## Rationale
Unlike film, a game's mix is unpredictable — any combination of sounds can fire at once — so a
static mix will inevitably let something important get masked at the worst time
[S-game-audio-practice]. The fix is a *prioritized, dynamic* mix: the engine decides in real
time which sounds matter now and makes room for them. Ducking attenuates background layers
(music, ambience) when a higher-priority sound (a callout, a warning) plays; HDR audio
"declutters" by making loud sounds louder and quiet ones quieter (muting footsteps under an
explosion, then restoring them). This is the audio expression of information hierarchy
(UX-0003) and cognitive-load management (UX-0002): the player has limited auditory attention,
so the mix must spend it on what matters. A mix where critical cues (AUDIO-0001) get masked is
a failure no matter how good the individual sounds are.

## Applies when
Any game with a busy or unpredictable soundscape — action, shooters, anything with
simultaneous combat, music, and ambience. Most critical where audio carries gameplay-relevant
information (competitive footsteps, warnings).

## Does not apply / Exceptions
Sparse or highly-controlled soundscapes may not need aggressive dynamic mixing. And clarity
can be pushed too far — over-ducking or heavy HDR can make the mix feel pumpy, lifeless, or
constantly shifting; deliberate overwhelming chaos (a wall of sound for effect) is sometimes
the intent. Clarity is the default goal, not an absolute.

## Implementation (kept separate from the principle)
Assign priorities/categories to sounds and let a real-time system (ducking, HDR, state
mixing) enforce them. Protect the always-must-hear cues (danger, footsteps, callouts). Mix
and QA under real gameplay chaos, not on isolated sounds — the masking problems only appear in
combination. Give the player volume sliders per category (music/SFX/voice) for their own
clarity and accessibility (UX-0006).

## Disagreement
Little on "critical sounds must be audible"; the nuance is *how much* dynamic processing
before the mix feels artificial (pumpy ducking, over-aggressive HDR) — a taste-and-tuning
question, plus the rare deliberate-chaos exception.

## Notes
The mixing principle that protects AUDIO-0001's feedback; the audio form of information
hierarchy (UX-0003) and attention budgeting (UX-0002). Confidence 4.
