---
id: GDC-L1-PROTO-0002
title: Prototype the riskiest assumption first
layer: L1
domain: PROTO
subdomain: fail-fast
type: objective
confidence: 4
status: canonical
tags:
  - prototyping
  - risk
  - fail-fast
  - iteration
related:
  - GDC-L1-PROTO-0001
  - GDC-L1-PLAYTEST-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-proto-vertical-slice
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Aim each prototype at the biggest open question or riskiest assumption — the thing that,
> if it turns out wrong, kills the project. Answer the scariest unknown early and cheaply,
> while changing course is still cheap.

## Rationale
Risk is cheapest to retire early. The assumption that "the core is fun," "this control
scheme works," "players will understand this mechanic," or "this tech is feasible" is a
loaded gun pointed at the project — and the longer it stays untested, the more you build on
top of a maybe [S-proto-vertical-slice]. Prototyping the *safe* parts first feels
productive but defers the decisions that actually determine whether the project should
continue. Attacking the riskiest question first means you either de-risk it (and proceed
with confidence) or discover the problem while a pivot costs days instead of months. Fail
fast on the things most likely to fail.

## Applies when
The start of a project or feature, and any time you're deciding what to build next under
uncertainty. Prioritize by "what's most likely to be wrong and most catastrophic if it is?"

## Does not apply / Exceptions
Not everything is a risk worth a dedicated prototype — well-understood, low-uncertainty work
just needs building, not validating. And "riskiest first" is about *project-killing*
uncertainty; polishing-order and content decisions follow different logic. If two risks are
entangled, you may need to prototype them together.

## Implementation (kept separate from the principle)
List the project's core assumptions and rank them by (likelihood of being wrong) × (cost if
wrong). Build the cheapest experiment that resolves the top one. Prefer answering "will this
even work?" before "how good can we make it?" Reassess the risk ranking after each
prototype — retiring one risk often promotes another.

## Disagreement
Little in principle. The practical debate is how to weigh technical risk vs. design/fun risk
first when both loom — usually the fun/design risk is primary for a game (a technically
perfect un-fun game is still dead), but a project resting on unproven tech may need to
retire that first.

## Notes
The prioritization rule that makes "find the fun first" (PROTO-0001) actionable — of all the
things to prototype, do the scariest. Pairs with early testing (PLAYTEST-0002). Confidence 4.
