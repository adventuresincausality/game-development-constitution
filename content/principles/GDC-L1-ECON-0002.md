---
id: GDC-L1-ECON-0002
title: Scarcity creates value and decisions
layer: L1
domain: ECON
subdomain: scarcity
type: contextual
confidence: 4
status: canonical
tags:
  - economy
  - scarcity
  - value
  - decisions
  - resources
related:
  - GDC-L1-DESIGN-0002
  - GDC-L1-BAL-0002
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
> A resource matters only when it is scarce enough to force choices. Abundance trivializes —
> if you can have everything, there's nothing to decide; over-scarcity frustrates and
> paralyzes. Tune scarcity so that spending a resource is a real tradeoff.

## Rationale
Value is a function of scarcity: a resource the player has in unlimited supply carries no
weight, so decisions about it are hollow (buy everything, use freely, feel nothing)
[S-economy-design]. Meaningful resource decisions — *this potion now or save it? this upgrade
or that one?* — only exist when having one thing means forgoing another, which requires
scarcity. This is DESIGN-0002 (interesting decisions) expressed through economics: scarcity is
what makes a spending choice a genuine tradeoff rather than a formality, and it's what gives
rewards their emotional weight. But the dial has two bad ends — abundance drains meaning, and
crushing scarcity produces frustration, hoarding (players too afraid to spend), and analysis
paralysis. The craft is finding the tension in between.

## Applies when
Any resource the player accumulates and spends — currency, consumables, materials, action
economy, time. Central to RPG, survival, strategy, and roguellike design.

## Does not apply / Exceptions
Some resources are *meant* to be abundant — a resource that exists to be spent freely for
expressive or comfort reasons (cosmetic currency, generous ammo in a power-fantasy shooter)
shouldn't be artificially starved. Power-fantasy and relaxation designs deliberately loosen
scarcity. And scarcity that's too tight in a *learning* context (early game) can gate players
out; scarcity often tightens as mastery grows.

## Implementation (kept separate from the principle)
Tune each resource's scarcity to the weight you want its decisions to carry — tighter for
resources meant to create tension, looser for those meant to enable expression. Watch for
hoarding (a sign of either too much scarcity or unclear value) and for trivializing abundance
(a sign of weak sinks — ECON-0003). Scarcity and the faucet/drain balance (ECON-0001) are the
same dial seen from two angles.

## Disagreement
Tight scarcity (tension, meaningful decisions, survival stakes) vs. generous abundance (power
fantasy, expression, low friction) — both are valid depending on whether the resource is meant
to create *tension* or enable *freedom*. Over-scarcity's frustration and abundance's
meaninglessness are the two failure modes to steer between.

## Notes
The value-and-decision rationale beneath the flow model (ECON-0001) and a direct economic
expression of DESIGN-0002 (interesting decisions) and BAL-0002 (meaningful choice). Confidence 4.
