---
id: GDC-L1-PLAYTEST-0002
title: Test early, often, and rough
layer: L1
domain: PLAYTEST
subdomain: playtest-methods
type: objective
confidence: 4
status: canonical
tags:
  - playtest
  - iteration
  - early-testing
  - prototyping
related:
  - GDC-L1-PLAYTEST-0001
  - GDC-L1-DESIGN-0001
  - GDC-L1-ARCH-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schell-artofgamedesign
  - S-games-user-research
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Playtest as soon as the game is playable, and keep testing repeatedly with rough,
> unfinished builds. Frequent cheap tests catch problems while they're cheap to fix;
> waiting for polish means discovering fundamental flaws after they're expensive — or
> unfixable.

## Rationale
The cost of fixing a design problem rises the longer it goes undetected: a broken core loop
found in a greybox prototype is a quick pivot; the same flaw found after months of content
built on top is a catastrophe. Because good games are found through iteration (DESIGN-0001),
and each test is one iteration's worth of truth, testing *early and often* maximizes the
number of corrections before commitments harden. Rough builds are a feature, not an excuse:
testers of an ugly prototype react to the *design*, and the team stays willing to change
what isn't yet polished (nobody wants to kill a beautiful thing — see PROTO). Polished
builds arrive with the expensive decisions already made.

## Applies when
From the first playable prototype through the whole of development. The earlier the flaw,
the cheaper the fix, so the value is highest at the start.

## Does not apply / Exceptions
Some questions genuinely require fidelity — final-feel tuning, performance, and
polish-dependent reactions can't be judged in greybox. And testing has a cost per session;
tiny solo projects may test informally. The principle is "don't wait for polish to start,"
not "every test must be rough."

## Implementation (kept separate from the principle)
Build the smallest thing that answers your current question and put it in front of players
now (compare PROTO — prototype to find the fun). Test the riskiest assumption first.
Architect for fast iteration (ARCH-0005) so turning feedback into a new build is cheap. Run
many small tests rather than one big late one.

## Disagreement
Little on "test early"; the practical debate is *how* rough is useful for *which* question
— core-loop and clarity questions test great in greybox, while feel and polish questions
need fidelity. Match build quality to the question, not to a calendar.

## Notes
Pairs behavior-first testing (PLAYTEST-0001) with the iteration architecture (ARCH-0005)
and the prototyping discipline (PROTO, to come). Confidence 4.
