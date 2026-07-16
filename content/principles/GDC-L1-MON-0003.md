---
id: GDC-L1-MON-0003
title: Refuse dark patterns — don't exploit cognitive biases to extract spending
layer: L1
domain: MON
subdomain: dark-patterns-to-avoid
type: contextual
confidence: 4
status: canonical
tags:
  - monetization
  - dark-patterns
  - ethics
  - wellbeing
  - manipulation
related:
  - GDC-L1-MON-0002
  - GDC-L1-PROG-0004
  - GDC-L1-UX-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-monetization-ethics
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Do not use dark patterns — manipulative designs that exploit cognitive biases to get players
> to spend in ways they wouldn't on reflection. Artificial urgency (FOMO timers), sunk-cost and
> loss-aversion traps, obscured real costs (opaque currencies, layered conversions), and
> reward-anticipation loops belong on a refuse-list, not a design doc.

## Rationale
Dark patterns work by *overriding* the player's judgment rather than earning their choice: they
weaponize well-documented biases — loss aversion, the sunk-cost fallacy, reward anticipation,
social pressure — and obscure information (the true cost to obtain a reward) so the player can't
decide rationally [S-monetization-ethics]. This is exploitation, not persuasion, and it is most
harmful to those least able to resist it — younger players and people vulnerable to compulsion.
It is the monetization extreme of everything the constitution warns against: manufactured
compulsion (PROG-0004), imposed friction (UX-0007), and the opposite of clear, honest
communication (UX-0003, MON-0005). Beyond the ethics, it is increasingly a *legal* risk —
regulators have fined publishers for undisclosed odds and disguised paywalls.

## Applies when
Any monetization surface — stores, currencies, offers, loot mechanics, timers, bundles.

## Does not apply / Exceptions
Not every persuasive technique is a dark pattern — a genuinely limited-time cosmetic, a clearly-
priced bundle, or an honestly-communicated sale is legitimate marketing. The line is
*manipulation and concealment*: exploiting bias and hiding true cost is the abuse; clear,
honest offers are fine. Intent and transparency separate persuasion from a dark pattern.

## Implementation (kept separate from the principle)
Keep a refuse-list: no fake scarcity/urgency, no obscured real-money cost, no currency mazes
designed to hide value, no compulsion loops (loss-aversion streaks), no predatory targeting of
spenders or minors. Show true costs and odds plainly (MON-0005). Design offers you'd be
comfortable explaining to the player's face. Take extra care where minors may play (UX-0006's
duty-of-care spirit extends here).

## Disagreement
Engagement/revenue-optimization argues these techniques are effective, widely used, and that
adults opt in freely; the player-respect/wellbeing position (this constitution's, and
increasingly regulators') is that exploiting cognitive bias and concealing cost is manipulation
that harms players, especially the vulnerable. This is a genuine, live industry and legal
dispute — but the manipulation-and-concealment core is what this principle refuses.

## Notes
The sharpest ethics principle in the MON domain, with legal as well as moral stakes; the extreme
case of PROG-0004 (compulsion) and the opposite of honest communication (MON-0005, UX-0003).
Confidence 4.
