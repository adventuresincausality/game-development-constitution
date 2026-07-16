---
id: GDC-L1-BAL-0006
title: Balance for fun and perceived fairness, not just mathematical parity
layer: L1
domain: BAL
subdomain: balance-philosophy
type: stylistic
confidence: 3
status: canonical
tags:
  - balance
  - perceived-fairness
  - fun
  - perfect-imbalance
  - metagame
related:
  - GDC-L1-BAL-0001
  - GDC-L1-DESIGN-0001
  - GDC-L1-BAL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-perfect-imbalance
  - S-sirlin-balance
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Players experience balance as a *feeling*, and a game can be mathematically balanced yet
> feel terrible — or slightly "imbalanced" yet feel great. Weigh perceived fairness and fun
> alongside the numbers: a slightly imbalanced option that's exciting can beat a perfectly
> tuned one that's dull, and even perfect balance can go stale.

## Rationale
Balance serves the experience (BAL-0001, DESIGN-0001), and the experience is subjective:
what matters to players is whether the game *feels* fair and fun, which doesn't always track
the spreadsheet. Two well-known consequences. First, *perceived* imbalance can wreck a
mathematically-fine game (an option that's technically balanced but feels cheap or
un-fun-to-face poisons the experience), while a bit of genuine imbalance can go unnoticed or
even feel good. Second — the "Perfect Imbalance" argument — a perfectly balanced game trends
toward *solved*: once optimal play is found, everyone executes the same known strategies and
the metagame stagnates, whereas slight, shifting imbalances keep players hunting new answers
and keep the game alive [S-perfect-imbalance]. So chasing parity for its own sake can cost
you fun and freshness.

## Applies when
Balance philosophy and any decision that trades measured parity against how the game feels
or how lively its metagame stays. Most pointed in competitive and long-lived games.

## Does not apply / Exceptions
This does *not* license lazy or lopsided balance — "it's more fun imbalanced" is often an
excuse for a dominant strategy (BAL-0002) that genuinely needs fixing. Competitive-integrity
contexts (esports, ranked ladders) weight measured fairness heavily, because perceived
unfairness there erodes trust in the competition itself.

## Implementation (kept separate from the principle)
Track *perceived* fairness (player sentiment, "feels cheap" complaints, what people ban or
avoid) alongside the numbers (BAL-0005). When an option is technically balanced but hated to
play against, treat that as a real problem. Be willing to leave — or even introduce — slight,
healthy imbalance to keep the meta evolving, while still hunting the *dominant* strategies
that actually collapse choice.

## Disagreement
This is the domain's sharpest live debate. **Perfect Imbalance** (Extra Credits): deliberate,
shifting slight imbalance keeps the metagame fresh and avoids the "solved game" endpoint.
**Balance-for-viable-diversity** (Sirlin): intentionally making the game unfair doesn't make
sense; aim for many viable options through genuine balance, and let a healthy metagame emerge
from *diversity*, not from engineered unfairness. Both agree perfect parity can stagnate and
that dominant strategies are bad; they disagree on whether the answer is *engineered
imbalance* or *viable diversity*. Typed `stylistic` because it is a genuine, unresolved values
split among expert designers.

## Notes
Where balance meets fun and perception, and home to the Perfect-Imbalance-vs-Sirlin debate
(see `index/DISAGREEMENTS.md`). Confidence 3: the phenomena (perceived fairness, solved-game
stagnation) are real and well-argued, but the prescriptive question is genuinely contested.
