---
id: GDC-L1-ECON-0003
title: Design sinks deliberately — the missing half of most economies
layer: L1
domain: ECON
subdomain: sources-and-sinks
type: contextual
confidence: 4
status: canonical
tags:
  - economy
  - sinks
  - drains
  - inflation
  - spending
related:
  - GDC-L1-ECON-0001
  - GDC-L1-ECON-0004
  - GDC-L1-ECON-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-economy-design
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Most economy problems are missing or weak **sinks**. Faucets are easy and fun to add —
> rewards feel good to give — while sinks (compelling reasons to *spend* or *destroy*
> resources) are harder to design and routinely neglected, which is why inflation and
> hoarding are the default failure states. Design sinks as carefully as sources.

## Rationale
There is an asymmetry in how economies get built: giving players resources is rewarding and
gets attention, so faucets proliferate, while sinks — which take resources *away* — feel less
generous and get under-designed [S-economy-design]. The result is predictable: resources
accumulate faster than they leave, the currency inflates (ECON-0004), and a rich player has
nothing worth buying. The fix is to treat sinks as first-class design: give players things
they genuinely *want* to spend on, so draining resources feels like a choice they make, not a
tax. And distinguish sink types — a **hard sink** destroys value (repair costs, consumables,
fees) and truly fights inflation; a **soft sink** merely *transfers* value between players
(buying from another player) and does *not* remove it from the economy. When you need to
control inflation, you need hard sinks.

## Applies when
Any accumulating economy, especially persistent and multiplayer ones (MMOs, live-service,
economy sims) where resources pile up over months and inflation compounds.

## Does not apply / Exceptions
Short, non-persistent economies (one playthrough) can tolerate weak sinks — there's not
enough time for inflation to bite. Deliberately generous power-fantasy designs may want few
sinks. And sinks must be *attractive*, not punitive — a sink players resent (arbitrary decay,
punitive taxes) drains fun along with resources; the goal is desirable spending, not
confiscation.

## Implementation (kept separate from the principle)
Audit the ratio of faucets to sinks in your design — if faucets outnumber compelling sinks,
that's the bug. Add sinks players *want* to use (aspirational purchases, upgrades,
customization, consumables, services). Favor hard sinks (destroy value) where inflation is a
risk; know that player-to-player trade is a soft sink that doesn't help. Scale sink cost with
player wealth so the rich have somewhere to spend (a "gold sink").

## Disagreement
Little that sinks are necessary; the nuance is *how* to drain — attractive, aspirational
sinks (players want to spend) vs. structural sinks (decay, taxes, upkeep that players may
resent). Aspirational sinks preserve fun; structural sinks are reliable but can feel punitive.
Most healthy economies use both, weighted toward the aspirational.

## Notes
The most commonly-neglected half of the faucet/drain balance (ECON-0001) and the direct lever
against inflation (ECON-0004). Confidence 4.
