---
id: GDC-L1-AUDIO-0001
title: Sound is feedback first — communicate action, state, and event
layer: L1
domain: AUDIO
subdomain: sfx-as-feedback
type: objective
confidence: 4
status: canonical
tags:
  - audio
  - feedback
  - sfx
  - communication
related:
  - GDC-L1-FEEL-0004
  - GDC-L1-UX-0003
  - GDC-L1-SYS-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-game-audio-practice
  - S-collins-game-sound
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> The primary job of game audio is *information*: confirm that an action happened, signal
> state changes, and cue events the player must react to. Before sound is atmosphere or
> music, it is **feedback** — often the fastest and most reliable channel the player has,
> because the ear catches things the eye (fixed forward, easily busy) misses.

## Rationale
A game is a stream of events the player must perceive to respond to, and audio is a superb
carrier: a weapon report, a footstep, a UI confirm, a low-health heartbeat, an ability's
tell all inform the player about actions and consequences instantly and omnidirectionally
[S-game-audio-practice]. Sound reaches the player even when the relevant thing is off-screen
or behind other visuals, which is exactly when a purely visual cue fails. This is the audio
arm of the feedback principle (FEEL-0004) and of interface communication (UX-0003): every
meaningful event should have a distinct, legible sound so the player can *hear* the game
state. Treating audio as mere decoration wastes its most valuable function.

## Applies when
Every meaningful game event and player action — combat, movement, interaction, UI, state
changes, warnings. The more the player must react quickly or to off-screen events, the more
audio feedback matters.

## Does not apply / Exceptions
Audio-free or minimal-audio contexts exist (silent play, accessibility for deaf/hard-of-
hearing players — which is exactly why critical information must *never* be audio-*only*; pair
it with visual cues, UX-0006). And not every event needs a sound; over-sonifying trivial
events clutters the mix and buries the signals that matter (AUDIO-0004). Atmosphere and music
are real jobs too — this principle says feedback is the *first* job, not the only one.

## Implementation (kept separate from the principle)
Give each meaningful event a distinct, recognizable sound; make gameplay-critical cues
(danger, low health, ability-ready) especially legible. Ensure critical information is never
conveyed by sound alone — mirror it visually for accessibility (UX-0006). Keep sounds
distinguishable from each other so the player can parse a busy moment. Protect the important
cues in the mix (AUDIO-0004).

## Disagreement
No serious dissent that audio's first duty is feedback; debate is about *how much* to sonify
(rich, informative soundscape vs. sparse, atmospheric restraint — see AUDIO-0005) and how
realistic vs. exaggerated the cues should be.

## Notes
The audio face of feedback (FEEL-0004), communication (UX-0003), and legibility (SYS-0006);
the foundation the rest of the AUDIO domain builds on. Confidence 4.
