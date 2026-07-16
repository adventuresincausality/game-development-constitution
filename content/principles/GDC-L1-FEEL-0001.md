---
id: GDC-L1-FEEL-0001
title: Game feel is real-time control of a virtual body in a simulated space, made vivid by polish
layer: L1
domain: FEEL
subdomain: responsiveness
type: objective
confidence: 5
status: canonical
tags:
  - game-feel
  - definition
  - mda
  - player-centric
related:
  - GDC-L1-FEEL-0002
  - GDC-L1-FEEL-0004
  - GDC-L1-DESIGN-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-swink-gamefeel
  - S-pichlmair-johansen-survey
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Game feel is the moment-to-moment sensation of controlling a virtual body in a
> simulated space, made vivid by polish. Treat it as three interlocking layers you
> design deliberately — **control** (real-time input→response), **physicality** (a
> space with weight, momentum, and collision), and **polish** (sensory amplification) —
> not as an accident that emerges from the rest of the game.

## Rationale
"Feel" sounds ineffable, but it decomposes into three things a designer can actually
tune: real-time control, a simulated space with its own physicality, and the polish that
amplifies interactions [S-swink-gamefeel]. Independent academic synthesis recovers the
same structure under different names — physicality, amplification, support
[S-pichlmair-johansen-survey] — which is strong evidence the decomposition is real and
not just one author's framing. Because the layers are separable, "the controls feel bad"
becomes a diagnosable problem: a defect in one of control, physicality, or polish, each
with its own tools. Naming the layers turns a vague complaint into an addressable bug.

## Applies when
Any game with real-time or near-real-time player control of an avatar, cursor, camera,
or object — platformers, shooters, action, driving, sports, most action-RPGs. It is the
lens for every other FEEL principle.

## Does not apply / Exceptions
Games with no real-time control loop — pure turn-based strategy, most text and
narrative games, asynchronous puzzles — have aesthetics and polish but little "game
feel" in this technical sense. Their satisfaction comes from other domains (DESIGN,
NARR, SYS). Polish still matters; real-time *feel* does not.

## Implementation (kept separate from the principle)
Diagnose feel by layer. Bad **control** → look at latency, input mapping, and
responsiveness (see FEEL-0002/0003). Bad **physicality** → look at acceleration,
momentum, gravity, and collision tuning. Bad **polish** → look at feedback: animation,
particles, sound, camera (see FEEL-0004). Tune each layer in isolation before judging
the whole.

## Disagreement
No meaningful disagreement about the decomposition itself; it is the field's shared
vocabulary. Debate exists only *within* the layers (e.g. how much polish, how much
responsiveness) and is captured in the specific principles below.

## Notes
This is the anchor principle for the FEEL domain — most other FEEL entries are a deeper
cut into one of its three layers. Confidence 5: the foundational text and an independent
academic survey converge on the same decomposition, making this as settled as game-feel
theory gets.
