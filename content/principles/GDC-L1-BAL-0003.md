---
id: GDC-L1-BAL-0003
title: Symmetry is safe; asymmetry is rich but must be earned through testing
layer: L1
domain: BAL
subdomain: symmetry-vs-asymmetry
type: contextual
confidence: 4
status: canonical
tags:
  - balance
  - symmetry
  - asymmetry
  - playtesting
  - variety
related:
  - GDC-L1-BAL-0002
  - GDC-L1-PLAYTEST-0005
  - GDC-L1-BAL-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schreiber-balance
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> **Symmetric** design (all sides given identical options) is fair by construction but often
> bland and limits variety. **Asymmetric** design (different options with different strengths)
> is far richer and more expressive — but it is *not* fair by construction and must be
> balanced through extensive playtesting and data. The more asymmetric the game, the more
> testing balance demands.

## Rationale
Symmetry buys fairness cheaply: if everyone has the same tools, no one can complain the sides
are unequal (chess is nearly symmetric — the main asymmetry is who moves first)
[S-schreiber-balance]. But symmetry also caps variety and can feel sterile — every mirror
match is the same match. Asymmetry (distinct factions, classes, characters, decks) is where
richness, identity, and replayability live, but each added difference multiplies the
interactions you must balance, and none of it is guaranteed fair — it has to be *discovered*
to be fair through play and data. Schreiber's rule is the practical takeaway: asymmetry and
required-playtesting scale together, so the expressive choice is also the expensive one.

## Applies when
Choosing and tuning any set of distinct options — factions, classes, characters, races,
decks, loadouts. The design decision (how asymmetric to be) is upstream of the balance cost.

## Does not apply / Exceptions
Symmetry isn't automatically boring — positional and emergent asymmetry (chess, Go) generate
enormous depth from symmetric starts. And some asymmetric games embrace *deliberate*
imbalance as identity (asymmetric-horror, 1-vs-many), where "fair" isn't the goal (BAL-0001).
Small or resource-constrained teams may choose more symmetry precisely to avoid the balancing
burden — a legitimate scope decision.

## Implementation (kept separate from the principle)
Decide how much asymmetry the game's identity needs, and budget the playtesting/data work to
match (BAL-0005) — don't ship heavy asymmetry you can't afford to balance. Use quantification
(cost curves, comparable stats) to get asymmetric options into the same rough range, then
lean on extensive expert play to find the real imbalances numbers miss. Prefer situational,
counter-based asymmetry (BAL-0004) so options differ in *kind*, keeping many viable.

## Disagreement
Symmetry (fair, cheaper to balance, can feel sterile) vs. asymmetry (rich, expressive,
expensive and never fair-by-default) is a core design/balance tradeoff. Competitive-fairness
purists and small teams lean symmetric; variety- and identity-driven designs lean asymmetric
and pay the testing cost.

## Notes
Sets the balance *cost* of a variety decision, and points at the methods (BAL-0005) and
structure (BAL-0004, counterplay) that make asymmetry tractable. Confidence 4.
