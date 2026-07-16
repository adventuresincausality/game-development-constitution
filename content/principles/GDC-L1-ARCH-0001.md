---
id: GDC-L1-ARCH-0001
title: Make the game data-driven — push behavior and tuning out of code into editable data
layer: L1
domain: ARCH
subdomain: data-driven-design
type: contextual
confidence: 4
status: canonical
tags:
  - data-driven
  - iteration
  - tooling
  - decoupling
  - empower-creators
related:
  - GDC-L1-ARCH-0005
  - GDC-L1-SYS-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-nystrom-gpp
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Push as much game behavior, content, and tuning as practical out of compiled code and
> into **data** — assets, tables, config, DataAssets — that can be edited and reloaded
> without a rebuild. This separates *what the game does* from *how the engine runs it*,
> and lets designers and artists iterate directly instead of through a programmer.

## Rationale
Games are found through iteration, and the iteration bottleneck is usually the
edit→compile→see-result loop. Moving values and behavior into data collapses that loop:
a designer changes a number or a rule in an asset and sees the result immediately, with
no code change [S-nystrom-gpp]. It also decouples systems — the code becomes a generic
engine that interprets data, so new content is new data rather than new code, and the
people closest to the design (not just programmers) can shape it. The deeper payoff is
architectural: a data-driven system is one where you "build the seam" (baseline plus
parameters) once and fill it endlessly, which is exactly what makes large, tunable
systems tractable.

## Applies when
Content- and tuning-heavy games; anything with many entities, abilities, items, or
values that will be balanced and iterated. The more content and the more iteration
expected, the stronger the case.

## Does not apply / Exceptions
Data-driving everything has real upfront cost — schema design, tooling, an interpretation
layer — and can be over-applied (YAGNI): for a tiny game, a game-jam prototype, or a
one-off system, hardcoding is faster and clearer. Over-abstraction into data can also
hurt readability and debuggability. Data-drive what will actually be iterated; hardcode
what won't.

## Implementation (kept separate from the principle)
Identify the values and behaviors that will be tuned or extended, and expose them as
data with a clear schema. Support hot-reload so edits show up live (see ARCH-0005). Give
the data good authoring tools (even a spreadsheet beats recompiling). Keep the code a
thin, generic interpreter of the data. Validate data on load so bad content fails loudly,
not silently.

## Disagreement
The tension is future-proofing vs. YAGNI. Over-engineering seams that never get used is
waste; under-building them forces painful refactors when iteration demand arrives. The
resolution most teams accept: data-drive the systems you *know* will be iterated heavily
(combat tuning, content), hardcode the rest until proven otherwise.

## Notes
Partners with SYS-0002 (second-order design — data is how you author the rules players play with) and ARCH-0005 (iteration speed). Confidence 4; typed `contextual` for the genuine small-project exception.
