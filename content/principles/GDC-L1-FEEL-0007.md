---
id: GDC-L1-FEEL-0007
title: Tune for the sensation, not physical accuracy
layer: L1
domain: FEEL
subdomain: physicality
type: contextual
confidence: 4
status: canonical
tags:
  - game-feel
  - physicality
  - tuning
  - player-centric
related:
  - GDC-L1-FEEL-0001
  - GDC-L1-FEEL-0003
  - GDC-L1-DESIGN-0001
depends_on:
  - GDC-L1-FEEL-0001
conflicts_with: []
supersedes: []
sources:
  - S-swink-gamefeel
  - S-thorson-celeste-forgiveness
  - S-pichlmair-johansen-survey
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> When realism and feel conflict, tune for the sensation you want the player to have,
> not for physical accuracy. The goal is a body that feels right to control — not a
> correct simulation.

## Rationale
The player experiences the *feeling* of movement, never its equations (ties to
DESIGN-0001: judge by the experience produced). Beloved control famously violates
physics: platformer jumps use asymmetric gravity (rise slower, fall faster) that no real
projectile obeys; characters accelerate to full speed in a frame or two; coyote time
lets you jump from empty air. These "lies" exist because they *feel* better —
controllable, snappy, fair. The whole discipline of game feel treats the sensation as
the tunable target and physical plausibility as merely one input to it
[S-swink-gamefeel] — which is why the craft of shaping physicality is literally named
"tuning": you tune toward a sensation, not toward realism [S-pichlmair-johansen-survey].

## Applies when
Any time simulated movement or physics is in service of *how it feels to play* — which
is most action, platforming, and character control. The more the game is about the joy
of moving, the more feel should win over accuracy.

## Does not apply / Exceptions
Simulation is the point in sim genres — racing sims, flight sims, physics sandboxes,
some sports — where fidelity to real behavior *is* the intended experience and
"improving the feel" by faking physics would betray it. Realism can also be a
deliberate feel target (deliberate heaviness, tank controls for tension). The principle
is "serve the intended sensation," and sometimes the intended sensation is realism.

## Implementation (kept separate from the principle)
Decide the target sensation first ("floaty and forgiving," "heavy and deliberate,"
"snappy and precise"), then tune numbers toward it and discard realism where it fights
the target. Expose feel-critical values (accel, gravity up/down, max speed, friction,
air control) as easily-iterated parameters and tune them by feel in playtest, not by
physical derivation. Keep the *simulated space* internally consistent even when it's
unrealistic, so the player can still build accurate intuitions.

## Disagreement
Feel-first (arcade, platformer, action) vs. simulation-first (sim genres) is a real and
legitimate split, but it is usually a genre choice rather than a live argument: both
camps agree the rule is "serve the intended experience," and simply intend different
experiences. Encoded here as `contextual` for that reason.

## Notes
This is the physicality-layer counterpart to FEEL-0002/0003's control-layer guidance.
Confidence 4: overwhelmingly true for action/arcade design, with the honest and large
sim-genre exception keeping it contextual.
