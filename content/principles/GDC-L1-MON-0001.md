---
id: GDC-L1-MON-0001
title: Choose a monetization model that fits the game and is honest about the deal
layer: L1
domain: MON
subdomain: models
type: contextual
confidence: 4
status: canonical
tags:
  - monetization
  - business-model
  - ethics
  - honesty
related:
  - GDC-L1-MON-0002
  - GDC-L1-DESIGN-0001
  - GDC-L1-PROG-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-monetization-ethics
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Pick a monetization model — premium, free-to-play, subscription, expansions, cosmetics —
> that fits the game's design and audience, and be honest with the player about the deal
> they're getting. The model is a design decision with ethical weight, not a bolt-on
> afterthought.

## Rationale
Monetization shapes design: a free-to-play game's economy, pacing, and retention loops are
built around its business model, so choosing the model *after* the design tends to graft
extractive mechanics onto a game that wasn't built for them [S-monetization-ethics]. Different
models fit different games — premium suits a finite, authored experience; F2P suits broad-reach
live games; subscription suits ongoing services — and forcing a mismatched model distorts the
design (DESIGN-0001: the model becomes part of the experience produced). The honesty clause is
the ethical core: players should understand what's free, what costs money, and what they're
buying, up front. A model chosen to fit the game and communicated plainly earns trust; one
chosen to maximize extraction and obscured erodes it.

## Applies when
Any commercial game — the model should be considered early, alongside the design, not tacked on
near launch.

## Does not apply / Exceptions
Non-commercial, free, or art games may have no monetization to design. And the "right" model is
genuinely game-dependent — there's no universally superior choice (premium vs. F2P is a real
strategic decision, not a moral hierarchy). The invariant is *fit and honesty*, not a particular
model.

## Implementation (kept separate from the principle)
Decide the model early and design the game and its economy (ECON) coherently around it. State
the deal plainly (what's free, what's paid, whether there's randomness — MON-0005). Prefer models
where the player's interests and the revenue align (MON-0002) over models that pit them against
each other. Revisit if the design and model drift apart.

## Disagreement
Premium (one honest purchase, aligned incentives, smaller reach) vs. free-to-play (broad reach,
ongoing revenue, but strong temptation toward extractive mechanics) vs. subscription — a genuine
strategic choice with different ethical hazards. This constitution takes no position on *which*
model, only that it fit the game and be honest.

## Notes
The framing principle of the MON domain; ties to ECON (the model shapes the economy), DESIGN-0001
(the model is part of the experience), and the ethics thread (PROG-0004, MON-0002/0003).
Confidence 4.
