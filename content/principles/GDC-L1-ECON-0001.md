---
id: GDC-L1-ECON-0001
title: Balance faucets against drains — the flow, not the total, defines the economy
layer: L1
domain: ECON
subdomain: faucets-and-drains
type: contextual
confidence: 4
status: canonical
tags:
  - economy
  - faucets
  - drains
  - sources
  - sinks
  - flow
related:
  - GDC-L1-SYS-0008
  - GDC-L1-SYS-0004
  - GDC-L1-ECON-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-economy-design
  - S-adams-dormans-mechanics
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A game economy is defined by its **faucets** (sources that create resources) and its
> **drains** (sinks that destroy them). Its health is a matter of *flow*: sinks must remove
> resources at a rate matched to what faucets generate. Watch the **rates**, not the
> stockpiles.

## Rationale
Resources in a game are created from nothing at faucets (quest rewards, loot, minigames)
and, ideally, destroyed at sinks (repair costs, consumables, fees) [S-economy-design]. What
determines whether the economy stays healthy is the *balance of flows* — if faucets pour in
faster than sinks drain out, resources accumulate, purchasing power falls, and the currency
inflates toward worthlessness (ECON-0004); if sinks over-drain, players feel starved. This is
the economy-specific deepening of SYS-0008 (model resources as an internal economy): SYS-0008
says treat resources as sources/sinks/converters; this says the *tuning target* is the flow
rate through them, and it interacts directly with feedback loops (SYS-0004 — a faucet that
scales with wealth is a positive loop that accelerates inflation). Designers who watch only
the current totals miss the trend that will break the economy weeks later.

## Applies when
Any game with accumulating resources — RPGs, MMOs, survival, city-builders, strategy,
economy sims, and most progression systems. The larger and longer-lived the resource pools,
the more flow balance dominates.

## Does not apply / Exceptions
Games with tiny or no persistent economies (most arcade, action, puzzle) don't need
flow modeling. Deliberately inflationary designs exist (idle/incremental games are *about*
numbers exploding — there the "economy" is the spectacle of growth, and control comes from
scaling costs alongside, not from stable purchasing power). Short, closed-loop economies
(one playthrough, no persistence) tolerate looser balance.

## Implementation (kept separate from the principle)
Enumerate every faucet and drain and estimate its rate; model the net flow over time (economy
-simulation tools help) rather than eyeballing current balances. Watch for faucets that scale
with player wealth, count, or game age — those are inflation engines (ECON-0004). Tune by
adjusting rates, and prefer adding/strengthening sinks (ECON-0003) over throttling the fun of
faucets. Instrument the live economy (telemetry — PLAYTEST-0005) to catch drift early.

## Disagreement
Little on the flow model itself; debate is about how *tightly* to control the economy —
stable-purchasing-power design (MMO-style, fight inflation hard) vs. deliberately
inflationary growth (idle games, where the exploding numbers are the point). The choice
follows whether stable value or the spectacle of growth is the goal.

## Notes
The economy-craft deepening of SYS-0008, and tightly coupled to SYS-0004 (feedback loops are
the dynamics of the flow). The parent of the more specific ECON principles (sinks, inflation,
currencies). Confidence 4.
