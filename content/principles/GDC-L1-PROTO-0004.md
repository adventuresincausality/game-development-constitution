---
id: GDC-L1-PROTO-0004
title: Keep prototypes focused and disposable — one question, throwaway code
layer: L1
domain: PROTO
subdomain: prototyping
type: contextual
confidence: 3
status: canonical
tags:
  - prototyping
  - focus
  - throwaway
  - scope
  - iteration
related:
  - GDC-L1-PROTO-0001
  - GDC-L1-PROTO-0002
  - GDC-L1-ARCH-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-proto-vertical-slice
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A prototype exists to answer a question, not to become the game. Keep it **narrow**
> (validate one thing), build it **cheap**, and be ready to **throw it away**. The value of
> a prototype is the *answer* it produces, not the artifact — prototype code that hardens
> into the shipping codebase quietly drags production down.

## Rationale
Every extra feature in a prototype dilutes its focus and slows the iteration it exists to
accelerate [S-proto-vertical-slice]. A prototype that tries to validate five things at once
answers none of them cleanly, and one built to "not waste the code" pressures the team to
keep hacks, shortcuts, and dead-ends that a throwaway would have discarded — technical debt
born at the worst possible time. Treating prototypes as disposable frees you to build them
fast and dirty (their only job is to teach you something) and to discard them without
sunk-cost grief once they have. The learning transfers to production; the code often
shouldn't.

## Applies when
Any exploratory prototype whose purpose is to answer a design or feasibility question.

## Does not apply / Exceptions
This is the sharpest genuine debate in prototyping. **Evolutionary prototyping** — where a
promising prototype is deliberately grown into the real product — is a legitimate and common
approach, especially for solo devs and small teams for whom rebuilding is a luxury. The rule
is really: *decide consciously* whether a prototype is throwaway or evolutionary, and if it's
throwaway, don't let sunk cost quietly promote it to production. Some prototypes also
rightfully seed production assets or architecture.

## Implementation (kept separate from the principle)
Scope each prototype to a single question (pairs with PROTO-0002, the riskiest one). Build it
in whatever is fastest, accepting messy code. Decide up front: throwaway or evolutionary. If
throwaway, extract the *lessons* and rebuild cleanly for production (where ARCH-0005's
iteration architecture pays off). If evolutionary, be honest that you're now paying to keep
the code good.

## Disagreement
Throwaway prototyping (learn then rebuild clean) vs. evolutionary prototyping (grow the
prototype into the product) is a real, unresolved fork. Throwaway maximizes learning speed
and code quality; evolutionary maximizes reuse and suits resource-constrained teams. Choose
per prototype and per team — just choose consciously.

## Notes
The focus-and-scope discipline of prototyping; its throwaway-vs-evolutionary tension is why
it's typed `contextual` at confidence 3. Connects to ARCH-0005 (the production codebase,
unlike the prototype, should be built for iteration). Confidence 3.
