---
id: GDC-L1-ECON-0005
title: Give each currency a distinct purpose
layer: L1
domain: ECON
subdomain: currencies
type: contextual
confidence: 3
status: canonical
tags:
  - economy
  - currencies
  - orthogonality
  - elegance
related:
  - GDC-L1-SYS-0005
  - GDC-L1-DESIGN-0007
  - GDC-L1-ECON-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-economy-design
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Each currency or resource type should have a clear, distinct role. When multiple currencies
> collapse into one fungible pile — same sources, same uses — they add complexity without
> meaning. Separate currencies to segment the economy and create distinct decisions, but only
> add a currency that earns its place.

## Rationale
Multiple currencies are a tool for *segmenting* an economy: a currency earned only one way and
spent only on one thing creates a separate, controllable sub-economy with its own faucets and
sinks (ECON-0001) — which is why games use distinct currencies for, say, routine spending vs.
rare aspirational purchases vs. time-gated progression. But the tool is often misused: piling
on currencies that are acquired and spent interchangeably just multiplies the UI and the
player's mental load without adding a single real decision. This is orthogonality (SYS-0005)
and elegance (DESIGN-0007) applied to economics: each currency must do something no other does,
or it shouldn't exist. Distinct currencies also let you protect one economy from another's
inflation (a premium or progression currency insulated from the grindable one).

## Applies when
Designing the set of currencies/resources — most acute in RPGs, live-service, and F2P games
that tend to accumulate many currencies over time.

## Does not apply / Exceptions
Many games are better with a *single* clean currency — added currencies are only worth it when
segmentation genuinely helps, and a proliferation of currencies is a common, real design smell
(confusing, grindy, opaque). Some multi-currency systems in live games exist for monetization
segmentation rather than player benefit (a MON/ethics concern, not a pure economy one). Default
to fewer currencies; add one only when it earns a distinct role.

## Implementation (kept separate from the principle)
For each currency, state its unique role: how it's earned, what it buys, and why it isn't just
the main currency. If two currencies share sources and sinks, merge them. Use separate
currencies deliberately to insulate economies from each other's inflation, to gate progression,
or to separate routine from aspirational spending — not by accident. Watch the UI/cognitive
cost (UX-0002) that each currency adds.

## Disagreement
Single-currency simplicity (clean, legible, fewer sinks to balance) vs. multi-currency
segmentation (controllable sub-economies, insulated inflation, distinct decisions — at the cost
of complexity and, sometimes, monetization-driven confusion). Lean simple; segment only where
it pays.

## Notes
The economic expression of orthogonality (SYS-0005) and elegance (DESIGN-0007) — no redundant
currencies. Confidence 3: a sound heuristic, but "how many currencies" is genuinely
game-dependent and often distorted by monetization pressures.
