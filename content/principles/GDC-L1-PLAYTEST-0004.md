---
id: GDC-L1-PLAYTEST-0004
title: Listen to the problem, distrust the proposed solution
layer: L1
domain: PLAYTEST
subdomain: interpreting-feedback
type: objective
confidence: 5
status: canonical
tags:
  - playtest
  - feedback
  - interpretation
  - player-centric
related:
  - GDC-L1-DESIGN-0001
  - GDC-L1-PLAYTEST-0001
  - GDC-L1-DESIGN-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Players reliably tell you *where* something feels wrong and unreliably tell you *how* to
> fix it. Take their reported problems seriously as symptoms; treat their proposed
> solutions as data about the symptom, not as design direction. The cure is yours to find.

## Rationale
A player feels the pain of a design accurately — "this fight is frustrating," "I never
knew where to go," "the reward felt hollow" — because they're the one experiencing it
[S-schell-artofgamedesign]. But diagnosing the cause and prescribing the fix requires
seeing the whole system, which they can't; so their proposed solution ("make the boss
weaker," "add an arrow pointing to the door") usually treats the symptom and often
introduces new problems or erodes the design's intent. This is exactly the reconciliation
DESIGN-0001 reaches between listening to players and holding a vision: honor the reported
experience as truth, own the response. Dismiss the symptom and you're an arrogant auteur;
implement every prescribed fix and you design by committee into mush.

## Applies when
Interpreting all qualitative feedback — playtest comments, reviews, forums, surveys.

## Does not apply / Exceptions
Sometimes players *are* right about the fix, especially domain-expert testers or when many
independent players converge on the same concrete suggestion (convergence is itself
signal). And in usability specifics (a button they couldn't find, a control that felt
inverted) the reported fix is often correct. The principle is about weighting, not
ignoring: distrust prescribed solutions by default, but don't reflexively reject them.

## Implementation (kept separate from the principle)
When you get feedback, extract the underlying experience ("boss felt unfair") from the
proposed remedy ("nerf the boss"), and design against the experience. Look for *patterns*
of symptoms across testers rather than reacting to one loud prescription. Ask "what made it
feel that way?" not "what should I change?" Watch behavior (PLAYTEST-0001) to locate the
real cause the words only point at.

## Disagreement
This *is* the resolution of the auteur-vs-data-driven debate from DESIGN-0001, and it's
broadly accepted. The residual disagreement is only about how much weight expert-tester
prescriptions and strong player consensus should carry — more than a lone suggestion, less
than a mandate.

## Notes
Formalizes DESIGN-0001's "listen to the symptom; own the cure" into a playtest-interpretation
rule. Confidence 5.
