---
id: GDC-L1-ANIM-0001
title: Apply the principles of animation — games are animation too
layer: L1
domain: ANIM
subdomain: principles-of-animation
type: contextual
confidence: 4
status: canonical
tags:
  - animation
  - principles
  - squash-stretch
  - anticipation
  - timing
related:
  - GDC-L1-FEEL-0001
  - GDC-L1-ANIM-0003
  - GDC-L1-ANIM-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-thomas-johnston-animation
  - S-cooper-game-anim
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> The classical principles of animation — squash & stretch, anticipation, staging,
> follow-through and overlapping action, timing, exaggeration, secondary action — apply to
> games. They are what make motion read as *alive* and *weighty*; a game that ignores them
> looks stiff and lifeless even when technically correct.

## Rationale
The twelve principles distilled by Disney's animators are not a house style; they are how
human perception reads motion as believable and expressive, which is why they transfer
directly to game animation [S-thomas-johnston-animation] [S-cooper-game-anim]. Anticipation
makes an action readable before it lands; squash & stretch and follow-through give it weight
and life; timing and exaggeration make it feel right rather than merely correct. A game whose
motion ignores them reads as robotic — accurate poses interpolated without life — no matter
how good the models are. Because animation is a huge part of game feel (FEEL-0001, the
"polish" layer), these principles are a primary lever on how a game *feels* to watch and
control, not just how it looks.

## Applies when
Any game with meaningful character or object animation — most action, adventure, platformer,
and character-driven games. The more the animation carries expression or feedback, the more
the principles matter.

## Does not apply / Exceptions
Games use the principles *in service of gameplay*, not as pure film craft — several bend
under the responsiveness constraint (ANIM-0002), e.g. anticipation must be short enough not
to add input lag on a player action. Abstract, minimalist, or deliberately-stylized games
(flat 2D, geometric) apply only the subset that fits their style. And technical/simulation
contexts may prioritize accuracy over expressive animation.

## Implementation (kept separate from the principle)
Learn the twelve principles and apply them within game constraints: use anticipation and
follow-through for readability and weight, timing and exaggeration for feel, secondary motion
for life (ANIM-0005). Adapt each to the responsiveness budget (ANIM-0002) — e.g. keep
anticipation on player-initiated actions minimal or cancelable. Judge animation by how it
reads and feels in play (PLAYTEST-0001), not by how it looks in isolation.

## Disagreement
No serious dissent that the principles apply; the game-specific tension is *how much* to
honor them against responsiveness and functionality (ANIM-0002, ANIM-0004) — full film-style
follow-through vs. snappy, cancelable game motion. Games resolve it case by case, gameplay
first.

## Notes
The craft foundation of the ANIM domain and a major contributor to the "polish" layer of game
feel (FEEL-0001). Confidence 4.
