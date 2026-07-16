---
id: GDC-L1-SYS-0001
title: Build around a core loop and make it satisfying in isolation
layer: L1
domain: SYS
subdomain: core-loop
type: objective
confidence: 4
status: canonical
tags:
  - core-loop
  - iteration
  - prototyping
  - systems-thinking
related:
  - GDC-L1-FEEL-0001
  - GDC-L1-DESIGN-0003
  - GDC-L1-SYS-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-cook-loops-arcs
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Identify the core loop — the tight cycle of action, simulation, and feedback the
> player repeats most often — and make it satisfying on its own, before layering
> content, progression, or meta-systems on top. If the core loop isn't fun in isolation,
> nothing built on it will be.

## Rationale
Play is structured as nested loops, and the innermost loop is executed thousands of
times across a playthrough [S-cook-loops-arcs]. Because it repeats so often, any deficit
in the core loop compounds: a moment that is merely "fine" the first time becomes tedious
the thousandth. Conversely, a core loop that is intrinsically satisfying carries the game
even when surrounding systems are thin. Everything outside the loop — progression,
narrative, content variety — exists to *feed, vary, and frame* the loop, not to
substitute for it. This is why prototypes should prove the loop first.

## Applies when
Any game with a repeated central activity — which is nearly all of them (shooting/moving,
matching, building, negotiating, exploring). It is the first thing to prototype and the
last thing you can afford to get wrong.

## Does not apply / Exceptions
Highly authored, one-shot experiences (some narrative and art games) may have no single
dominant loop, distributing their value across unique moments instead. Even there,
micro-loops exist (read → choose → see consequence), but the "perfect the core loop
first" emphasis is weaker when repetition isn't the point.

## Implementation (kept separate from the principle)
Name the core loop explicitly ("aim → shoot → react → reposition"). Prototype it in
greybox with no content and ask: is this fun for five minutes with nothing else? Tune its
feel (see FEEL domain) before building progression around it. Layer secondary loops
(session, meta, social) only once the core holds. If playtesters get bored fast, fix the
loop, not the content.

## Disagreement
No serious disagreement that a strong core loop matters; debate is only about how much a
brilliant surrounding structure can carry a mediocre loop (rarely far) — an argument that
resolves in this principle's favor for replay-driven games.

## Notes
The core loop is where SYS, FEEL, and DESIGN meet: FEEL-0001 governs how the loop *feels* moment-to-moment, DESIGN-0003 governs how it *teaches*, and this principle governs its primacy. Confidence 4.
