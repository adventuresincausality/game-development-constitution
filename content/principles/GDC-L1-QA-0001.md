---
id: GDC-L1-QA-0001
title: Match test rigor to risk
layer: L1
domain: QA
subdomain: test-strategy
type: contextual
confidence: 4
status: canonical
tags:
  - qa
  - testing
  - risk
  - strategy
  - prioritization
related:
  - GDC-L1-PERF-0003
  - GDC-L1-PROTO-0002
  - GDC-L1-QA-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-games-user-research
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Spend testing effort where the risk is highest. Not everything needs the same rigor: the core
> loop, the systems everything depends on, the save/economy/networking that can corrupt or cheat,
> and the launch path deserve heavy testing; peripheral, low-impact, rarely-hit content deserves
> less. Test by risk, not uniformly.

## Rationale
Testing is finite, and applying it evenly wastes it — the same failure-hunting logic as
optimizing the bottleneck (PERF-0003) and prototyping the riskiest assumption first (PROTO-0002):
the payoff comes from attacking the highest (probability × impact) risks first [S-scope-production].
A save-corruption or economy-exploit bug is catastrophic and worth deep testing; a cosmetic glitch
in a rarely-visited room is not. Risk-based testing also directs *what kind* of testing to use
(QA-0002): high-regression-risk systems want automation, feel/fun questions want human play. A test
plan that ranks by risk finds the important bugs with the effort available, rather than exhausting
itself on the trivial and missing the catastrophic.

## Applies when
Any test planning — deciding what to test, how hard, and with what method. Throughout development
and especially before milestones and launch (SHIP-0001).

## Does not apply / Exceptions
Safety-, certification-, or compliance-critical areas may require uniform thoroughness regardless
of apparent risk (platform cert, legal, accessibility conformance). And "low risk" can be
mis-assessed — the point is *deliberate* risk assessment, not an excuse to skip testing you find
inconvenient. Very small games test informally but should still weight the core loop heaviest.

## Implementation (kept separate from the principle)
Rank areas by (likelihood of failure) × (cost if it fails), and allocate testing accordingly.
Test the core loop, dependency-heavy systems, and data-integrity/security/networking hardest.
Choose method by risk type: automation for regression-prone systems (QA-0002), human testing for
feel and emergent behavior. Re-assess risk as the game changes. Meet certification/compliance
thoroughness regardless.

## Disagreement
Risk-based testing (efficient, focuses effort — but depends on assessing risk correctly) vs.
uniform/exhaustive testing (thorough, but expensive and often infeasible). Certification contexts
demand uniformity; most development benefits from risk prioritization. The nuance is getting the
risk assessment right.

## Notes
The strategy principle of QA; the testing form of "attack the biggest risk first" (PERF-0003,
PROTO-0002). Confidence 4.
