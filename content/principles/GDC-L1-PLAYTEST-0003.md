---
id: GDC-L1-PLAYTEST-0003
title: Don't help, don't explain
layer: L1
domain: PLAYTEST
subdomain: observing-vs-asking
type: objective
confidence: 5
status: canonical
tags:
  - playtest
  - first-time-user
  - onboarding
  - observation
related:
  - GDC-L1-PLAYTEST-0001
  - GDC-L1-DESIGN-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-games-user-research
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> During a playtest, resist the urge to coach, hint, or defend the design. The shipped game
> won't have you sitting beside the player. A test where you intervene measures your
> presence, not your game — so stay silent and let first-time users struggle. Their
> confusion is the finding.

## Rationale
The instinct to rescue a stuck tester ("oh, you just press X there") destroys the exact
data you came for: whether the game teaches itself [S-games-user-research]. Every time you
explain, you overwrite a real usability problem with a false success and blind yourself to
a flaw that every future player — playing without you — will hit. Silence is hard because
watching someone miss the obvious is uncomfortable, but that discomfort *is* the signal:
what's obvious to you (the author, saturated in intent — DESIGN-0001) is invisible to them.
First-time-user testing only works if the first-time experience is left intact.

## Applies when
Any test of onboarding, clarity, controls, or discoverability — and by default, any test at
all, until the scripted portion you're observing is complete.

## Does not apply / Exceptions
Some methods deliberately invite talking — think-aloud protocols ask players to narrate,
and post-session interviews are where you finally ask "why." The rule is no *help* and no
*defense* during the observed play; structured prompting to surface reasoning is different
from coaching past an obstacle. If a tester is truly, unproductively stuck and the rest of
the session depends on progress, intervene minimally and note that you did.

## Implementation (kept separate from the principle)
Brief testers that you won't help and that being stuck is useful information, not failure.
Sit where you can see but not loom. Bite your tongue; write down what they tried instead of
correcting it. Save all "why did you…" questions for after the observed segment. Treat every
urge to explain as a bug report about the game.

## Disagreement
None on the core rule for usability/first-run testing. The only nuance is method choice:
silent observation vs. think-aloud vs. post-hoc interview each surface different things, and
good research uses more than one — but none of them means coaching the player past the
design's own failures.

## Notes
The behavioral discipline that makes PLAYTEST-0001 work, and the direct antidote to the
author's intent-contamination named in DESIGN-0001. Confidence 5.
