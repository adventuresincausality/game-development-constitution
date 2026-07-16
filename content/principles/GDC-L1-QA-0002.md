---
id: GDC-L1-QA-0002
title: Automate regression; human-test feel and emergence
layer: L1
domain: QA
subdomain: automated-testing-of-games
type: contextual
confidence: 4
status: canonical
tags:
  - qa
  - automation
  - regression
  - playtesting
  - feel
related:
  - GDC-L1-PLAYTEST-0001
  - GDC-L1-QA-0001
  - GDC-L1-ARCH-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-games-user-research
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Use the right kind of testing for the question. **Automate** what is deterministic and
> regression-prone — systems, math, save/load, builds — so it's checked cheaply and constantly.
> Use **human testing** for what machines can't judge: fun, feel, difficulty, and emergent
> behavior. Neither replaces the other.

## Rationale
Games have two very different testing needs. Deterministic correctness (does the damage formula
compute right? does save/load round-trip? did that refactor break anything?) is perfect for
automation — fast, repeatable, and it catches regressions the moment they appear, which protects
iteration speed (ARCH-0005). But the questions that most determine whether a game is *good* — is
it fun, does it feel right, is the difficulty fair, what emerges when systems interact — are
subjective and situational, and only human play can answer them (which is why playtesting,
PLAYTEST-0001, exists) [S-games-user-research]. Trying to automate "is it fun" fails; trying to
manually regression-test every build wastes people and misses things. Matching method to question
(and to risk, QA-0001) gets both cheap regression safety and real judgment about the experience.

## Applies when
All testing. Automation scales with deterministic, regression-prone systems; human testing scales
with subjective/experiential and emergent aspects. Most games need both.

## Does not apply / Exceptions
Highly emergent or non-deterministic systems resist automated testing (and automating a fast-
changing prototype's tests can be wasted effort as it churns — automate *stable* things). Tiny
games may rely mostly on human testing. And automation has real setup/maintenance cost that must
be justified. The split is a guide, not a mandate to automate everything automatable.

## Implementation (kept separate from the principle)
Write automated tests for stable, deterministic, regression-prone systems (formulas, save/load,
core systems, build validation — CONTENT-0004/0005). Run them continuously (CONTENT-0005). Reserve
human testing — structured playtests (PLAYTEST) and exploratory QA — for feel, fun, difficulty,
and emergent/edge behavior. Prioritize both by risk (QA-0001).

## Disagreement
Test-automation-heavy (fast regression safety, but setup cost and can't judge fun) vs.
human-testing-heavy (judges the experience, but slow and misses regressions). The synthesis —
automate the deterministic, human-test the experiential — is broadly held; the debate is how much
to invest in automation for a medium where the most important qualities are subjective.

## Notes
The method principle of QA; pairs automation with human playtesting (PLAYTEST-0001) and protects
iteration (ARCH-0005) via regression safety. Confidence 4.
