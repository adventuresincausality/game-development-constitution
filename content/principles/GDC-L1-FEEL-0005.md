---
id: GDC-L1-FEEL-0005
title: Sell impact by briefly interrupting time (hitstop / hit pause)
layer: L1
domain: FEEL
subdomain: feedback-and-juice
type: contextual
confidence: 4
status: canonical
tags:
  - juice
  - impact
  - hitstop
  - feedback
  - combat
related:
  - GDC-L1-FEEL-0004
  - GDC-L1-FEEL-0006
depends_on:
  - GDC-L1-FEEL-0004
conflicts_with: []
supersedes: []
sources:
  - S-nijman-screenshake
  - S-impact-feedback-study
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> On a significant impact, freeze the action for a few frames before resuming. This
> brief interruption of time ("hitstop" / "hit pause") makes hits read as forceful and
> weighty far more cheaply and vividly than added animation alone.

## Rationale
A collision resolved in a single frame is perceptually thin — the eye barely registers
it. Inserting a brief pause [S-nijman-screenshake] holds the moment of contact on screen long enough for
the player to *feel* the collision, and momentarily halts the action so both bodies
register the blow. It exploits perception rather than fidelity: the pause implies
enormous force without simulating it. Time-based effects like this are among the features
that most strongly drive perceived impact in action games [S-impact-feedback-study].

## Applies when
Impacts that should feel heavy: melee hits, powerful shots, hard landings, parries,
finishing blows, big destruction. Scales with the significance of the impact — a light
jab gets a frame or two; a heavy smash gets more.

## Does not apply / Exceptions
Overuse is a real failure: constant or overlong hitstop makes fast combat feel stuttery,
laggy, or unresponsive, and can fight the responsiveness ideal (FEEL-0002) if it stalls
the player's *next* input. Games built on flow and speed (fast movement shooters, some
character-action at high skill) deliberately minimize it. Genres where impacts aren't
the point (most puzzle, strategy, narrative) don't need it.

## Implementation (kept separate from the principle)
Scale pause length to impact magnitude and keep it brief enough that it reads as emphasis,
not a stalled game. Freeze
the striking and struck actors (and often their effects) while ideally letting the
camera and particles keep moving so the frame doesn't feel dead. Let the player's *own*
next input still buffer during the pause so it never reads as latency. Pair with the
other juice layers (flash, sound, shake) landing on the same frame as the freeze.

## Disagreement
Amount is genre-dependent and somewhat stylistic: weighty character-action (heavy
hitstop) vs. high-flow action (minimal hitstop) are both correct for their fantasies.
The invariant is that hitstop must never degrade responsiveness of the *player's* next
action.

## Notes
A specific, high-leverage technique under FEEL-0004. Confidence 4: strongly supported as
effective; typed `contextual` because the right amount — and whether to use it at all —
depends on the game's speed and fantasy.
