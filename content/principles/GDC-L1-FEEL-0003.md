---
id: GDC-L1-FEEL-0003
title: Interpret the player's intent, not just their literal input
layer: L1
domain: FEEL
subdomain: input
type: contextual
confidence: 4
status: canonical
tags:
  - input
  - forgiveness
  - player-centric
  - intent
  - accessibility
related:
  - GDC-L1-FEEL-0002
  - GDC-L1-DESIGN-0001
depends_on:
  - GDC-L1-FEEL-0002
conflicts_with: []
supersedes: []
sources:
  - S-thorson-celeste-forgiveness
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Read what the player *meant*, not only what they literally pressed. Add small,
> invisible forgiveness windows — coyote time, input buffering, corner correction — so
> that near-misses of timing or aim resolve the way the player intended.

## Rationale
Human motor timing is imprecise by tens of milliseconds; strict input handling punishes
players for gaps between intent and execution that they never perceive as their own
error — it just feels like the game "didn't work." Forgiveness closes that gap. The
staple techniques [S-thorson-celeste-forgiveness]: coyote time (a jump still fires
briefly after leaving a ledge), jump-input buffering (a jump pressed shortly before
landing still fires on landing), and
corner correction (a head-bonk nudges the avatar around the lip instead of stopping it).
Players don't perceive these as assists; they perceive the controls as "tight." The
deeper principle: the game should be on the player's side, targeting the experience they
intended (ties to DESIGN-0001).

## Applies when
Precision- and timing-critical real-time control, especially platforming, action, and
anything with tight jumps, dashes, or combo timing. Highest value where the skill
expression is in *positioning and timing* rather than in the timing test itself.

## Does not apply / Exceptions
When the strictness *is* the game. Rhythm games, precision-timing challenges, and some
hardcore/competitive designs treat exact timing as the skill being tested; forgiveness
there removes the point. And forgiveness must stay small and consistent — overly generous
or context-varying windows make the game feel mushy, unpredictable, or unfair in the
other direction. Tune to taste and genre.

## Implementation (kept separate from the principle)
Start with short coyote-time and input-buffer windows, then tune them against the game’s
speed, animation, and intended difficulty. Add corner/edge correction where collision would
otherwise reject a clear player intention. Make windows *fixed and predictable*, not adaptive,
so mastery stays learnable. Keep them invisible — if players can point at the assist, it
is probably too large. Always verify by watching real players (playtest), since the
whole point is matching perceived intent.

## Disagreement
Two schools: **forgiveness-first** (Celeste, Super Meat Boy — assume good intent,
tighten feel) vs. **purity-first** (execution-focused and competitive designs — exact
input is the test). Neither is universally right; the deciding question is *whether the
timing itself is the skill you want to measure.* If yes, stay strict; if the timing is
just a tax on the real skill (positioning, decision-making), forgive it.

## Notes
Type is `contextual` precisely because the purity-first exception is real and common.
Confidence 4: strong practitioner consensus for the genres where it applies, with the
genuine genre-dependent exception keeping it below 5.
