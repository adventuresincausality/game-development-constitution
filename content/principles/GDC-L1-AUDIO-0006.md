---
id: GDC-L1-AUDIO-0006
title: Place sound in space — spatialization conveys position and information
layer: L1
domain: AUDIO
subdomain: spatialization
type: contextual
confidence: 4
status: canonical
tags:
  - audio
  - spatialization
  - 3d-audio
  - positional
  - information
related:
  - GDC-L1-AUDIO-0001
  - GDC-L1-LEVEL-0002
  - GDC-L1-FEEL-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-collins-game-sound
  - S-game-audio-practice
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Position sound in 3D space so the player can locate events by ear: footsteps behind them,
> a threat off-screen, a pickup down the hall. Spatial audio is both immersion *and*
> information — and in competitive play, a fair and readable soundscape is effectively a core
> mechanic.

## Rationale
The ear locates sources the eye can't see, so spatialized audio extends the player's
perception beyond the screen — a crucial advantage in any game where important things happen
off-camera [S-collins-game-sound]. Spatial cues do double duty: they immerse (a world that
sounds like it surrounds you), and they *inform* (which direction is that footstep? how far is
that roar?). In competitive games this becomes load-bearing — players make real decisions off
positional audio (footstep direction, reload sounds), which means the soundscape must be
*consistent and fair*, since an inaudible or misleading cue is a competitive defect, not just
an aesthetic one [S-game-audio-practice]. Spatialization is also part of physicality and
game feel (FEEL-0001): sound that moves with the world makes the world feel real.

## Applies when
3D games, and any game where off-screen events matter — especially action, shooters, horror,
and competitive multiplayer. The more the player must react to what they can't see, the more
positional audio matters.

## Does not apply / Exceptions
Non-spatial or abstract games (many 2D, puzzle, and menu-driven experiences) get little from
3D audio, and UI/music are often intentionally non-diegetic (not placed in the world).
Hardware and headphones-vs-speakers variance limits how much precise localization you can rely
on. And spatialization must not *hide* critical cues behind distance/occlusion — gameplay-
critical information sometimes needs to break realism to stay audible (a tension with
AUDIO-0001).

## Implementation (kept separate from the principle)
Spatialize world sounds (attenuation, panning, occlusion, reverb by space) so position is
readable by ear. For competitive integrity, keep positional cues consistent and hard to
mask (AUDIO-0004), and test them for fairness across setups. Keep UI and non-diegetic music
out of the spatial field. Where a critical cue would be lost to distance/occlusion, bias
toward audibility over strict realism.

## Disagreement
Realistic spatialization (full occlusion/attenuation, immersive but sometimes hides cues) vs.
gameplay-biased audio (readability and fairness first, even if less realistic) — competitive
games lean gameplay-biased; immersive single-player leans realistic. Also diegetic vs.
non-diegetic placement is a per-sound choice.

## Notes
The spatial principle of AUDIO; serves legibility (LEVEL-0002), feedback (AUDIO-0001),
physicality/feel (FEEL-0001), and — in competitive play — fairness. Confidence 4.
