---
id: GDC-L1-UX-0002
title: Manage cognitive load — reveal complexity progressively
layer: L1
domain: UX
subdomain: cognitive-load
type: contextual
confidence: 4
status: canonical
tags:
  - ux
  - cognitive-load
  - progressive-disclosure
  - information-hierarchy
  - attention
related:
  - GDC-L1-UX-0001
  - GDC-L1-DESIGN-0005
  - GDC-L1-SYS-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-hodent-gamers-brain
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Attention and working memory are limited resources — spend them deliberately. Show the
> player what they need *when* they need it and no more, and introduce systems and interface
> gradually (progressive disclosure) rather than all at once. Complexity revealed over time
> is depth; complexity dumped at once is overload.

## Rationale
The brain can only attend to and hold so much at once, and exceeding that budget produces
confusion, missed information, and stress rather than mastery [S-hodent-gamers-brain]. The
same total complexity feels completely different depending on delivery: metered out as the
player is ready, it reads as a game with satisfying depth (easy to learn, hard to master —
DESIGN-0005); delivered all at once, it reads as impenetrable. Progressive disclosure — a
UI that starts simple and grows, systems introduced one at a time, advanced options tucked
until relevant — keeps the player inside their cognitive budget while still building toward
real depth. This is also how a legible system (SYS-0006) stays legible even when it's large.

## Applies when
Any game with substantial systems or interface — RPGs, strategy, sims, and especially deep
systemic games. The more total complexity, the more its *pacing* matters.

## Does not apply / Exceptions
Some audiences want the full dashboard immediately (expert-facing tools, hardcore sims where
mastering the information *is* the game). And progressive disclosure can be overdone —
hiding things players need, or gating information so aggressively it becomes patronizing or
obscure. Balance disclosure against the player's genuine need to see.

## Implementation (kept separate from the principle)
Introduce mechanics and UI elements one at a time, unlocking complexity as competence grows (pairs with just-in-time teaching, UX-0001). Use information hierarchy so the most important things dominate attention and secondary detail recedes. Hide advanced options until relevant.

## Disagreement
Progressive disclosure (start simple, reveal over time) vs. full-transparency (show
everything, trust the player) — the latter suits expert audiences and tools; the former suits
broad audiences and deep systems. Also overlaps the transparency⇄mystery axis: how much to
reveal is partly a UX-clarity question and partly a discovery-design choice.

## Notes
The attention-budget principle behind good onboarding (UX-0001) and legible large systems (SYS-0006, DESIGN-0005). Confidence 4.
