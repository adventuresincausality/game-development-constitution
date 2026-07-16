---
id: GDC-L1-NARR-0005
title: Pace story around player-controlled time
layer: L1
domain: NARR
subdomain: pacing
type: contextual
confidence: 3
status: canonical
tags:
  - narrative
  - pacing
  - interactivity
  - interruptible
related:
  - GDC-L1-LEVEL-0003
  - GDC-L1-AUDIO-0003
  - GDC-L1-NARR-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> In games the player controls the clock — they linger, rush, backtrack, wander off, and
> interrupt — so narrative pacing cannot assume a fixed timeline the way film can. Deliver
> story in player-controllable, interruptible chunks that survive being paced by the player,
> and let gameplay and story share a rhythm rather than fight for the player's time.

## Rationale
A film runs on the director's clock; a game runs on the player's, and that breaks any narrative
pacing that assumes the audience is moving through at a set rate [S-schell-artofgamedesign]. A
story beat the player triggers three hours late (having explored elsewhere), or misses, or
rushes past, lands wrong if it was written for a fixed cadence. Worse, story that *stops* the
game to deliver itself fights the player's momentum and gets skipped. So narrative pacing in
games is a negotiation with player agency: parcel the story into interruptible units, make beats
robust to being reached out of tempo, and align the story's rhythm with the gameplay's
(the pacing curve of LEVEL-0003, and adaptive audio's response to state, AUDIO-0003) so the two
reinforce rather than interrupt each other.

## Applies when
Any game delivering authored story alongside player-controlled exploration or action —
especially open and semi-open games where the player sets the tempo.

## Does not apply / Exceptions
Tightly linear or on-rails sequences *do* control the clock (a scripted set-piece, a
cutscene) and can pace like film for that stretch — a valid tool used in bursts. Rhythm and
strongly-timed games control tempo by design. The principle bites hardest where the player has
real freedom over pace and place.

## Implementation (kept separate from the principle)
Break narrative into interruptible, self-contained beats rather than long unskippable sequences.
Make story robust to being reached early, late, or out of order (gate the truly
order-dependent beats). Align story rhythm with gameplay pacing (LEVEL-0003) and let systems
like adaptive music (AUDIO-0003) carry emotional pacing that survives player timing. Prefer
weaving story into play over stopping play to tell it (NARR-0003).

## Disagreement
Player-paced narrative (interruptible, robust, non-blocking — respects agency) vs.
author-paced sequences (controlled cadence, cinematic power — at the cost of interrupting the
player). Open games lean player-paced; cinematic games use author-paced bursts. The tension is
control-of-tempo vs. respect-for-agency.

## Notes
The narrative side of pacing — partner to LEVEL-0003 (spatial/intensity pacing) and AUDIO-0003
(adaptive music), all three about rhythm under player-controlled time. Confidence 3: sound and
widely-held, but narrative pacing craft is highly form-dependent.
