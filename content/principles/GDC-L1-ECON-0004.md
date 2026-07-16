---
id: GDC-L1-ECON-0004
title: Guard against inflation and runaway accumulation
layer: L1
domain: ECON
subdomain: inflation
type: contextual
confidence: 4
status: canonical
tags:
  - economy
  - inflation
  - runaway
  - feedback-loops
  - money-supply
related:
  - GDC-L1-SYS-0004
  - GDC-L1-PROG-0006
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
> Unchecked faucets — and positive feedback loops that scale rewards with the wealth or
> progress a player already has — cause **inflation**: currency loses value, stockpiles pile
> up, and spending stops mattering. Monitor the money supply and drain the excess. The
> symptom looks like "the content got trivial," but the cause is economic.

## Rationale
Inflation is the natural end state of an economy whose faucets outpace its sinks, and it's
made worse by feedback: if wealthier players earn *faster* (a positive loop — SYS-0004), the
money supply grows super-linearly and value collapses [S-economy-design]. Its damage is
insidious because it disguises itself — designers see rewards feeling meaningless, prices
feeling trivial, new players unable to afford anything a veteran casually owns, and reach for
content or difficulty fixes when the real cause is too much currency chasing too few sinks.
This is the economic face of runaway positive feedback (SYS-0004) and of the unplanned power
curve (PROG-0006): unchecked accumulation trivializes the game whether the resource is gold or
raw power.

## Applies when
Persistent and long-lived economies especially — MMOs, live-service, economy sims — and any
game where resources accumulate across a long play horizon.

## Does not apply / Exceptions
Idle/incremental games are *deliberately* inflationary — the exploding numbers are the
appeal, and they control it by scaling *costs* alongside income rather than by stabilizing
value. Short, non-persistent economies rarely inflate meaningfully. Mild, managed inflation
can even be healthy (it pressures players to keep engaging with the economy rather than
sitting on a hoard).

## Implementation (kept separate from the principle)
Track the total money supply and prices over time, not just per-player balances (telemetry —
PLAYTEST-0005). Avoid or dampen faucets that scale with wealth/progress (SYS-0004). Keep hard
sinks (ECON-0003) sized to the money being generated, and scale sink costs with wealth so the
richest players still drain. Treat "rewards feel meaningless" as a possible economy signal,
not just a tuning-numbers one.

## Disagreement
Stable-value design (fight inflation to keep purchasing power and new-player viability) vs.
managed-inflation or deliberately-inflationary design (idle games; or mild inflation used to
keep players economically active). The right stance depends on whether stable value or growth-
as-spectacle serves the game.

## Notes
The economic form of SYS-0004 (runaway positive feedback) and PROG-0006 (runaway power); its
primary countermeasure is deliberate sinks (ECON-0003). Confidence 4.
