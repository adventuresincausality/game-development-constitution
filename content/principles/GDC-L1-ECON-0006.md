---
id: GDC-L1-ECON-0006
title: Player-driven economies are emergent systems — design the rules, not the transactions
layer: L1
domain: ECON
subdomain: trade
type: contextual
confidence: 3
status: canonical
tags:
  - economy
  - player-driven
  - markets
  - trade
  - emergence
related:
  - GDC-L1-SYS-0002
  - GDC-L1-SYS-0007
  - GDC-L1-SYS-0003
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
> The moment players can trade, a **market emerges** with its own dynamics — pricing,
> arbitrage, hoarding, speculation, and real-money-trading pressure — that no designer
> authored. Design the *rules and constraints* and let the economy emerge (second-order
> design), then watch for and curb degenerate outcomes.

## Rationale
A player-driven economy is a system, not a set of transactions: once players set prices and
trade freely, aggregate behavior produces phenomena you didn't script — supply and demand
curves, price bubbles, cornered markets, botting and farming, and real-money trading — exactly
the kind of unplanned complexity that emergence (SYS-0003) predicts [S-economy-design]. So you
can't design the outcomes directly; you design the *rules* (what's tradeable, transaction
costs, market structure, information visibility) and the economy self-organizes around them
(second-order design, SYS-0002). And because players optimize relentlessly (SYS-0007), a
player-run economy will find and exploit every inefficiency — so the designer's ongoing job is
to watch the emergent market and intervene against the degenerate cases (runaway inflation,
exploitative farming, RMT that corrodes the game) without trying to micromanage prices.

## Applies when
Any game with meaningful player-to-player trading or markets — MMOs, trading-heavy multiplayer,
economy sims with player exchange.

## Does not apply / Exceptions
Closed/authored economies (single-player, or multiplayer with no trading) have no emergent
market — the designer controls all prices and flows directly, which is simpler and more
controllable. Many games deliberately forbid or tightly constrain trade precisely to *avoid*
the emergent-market headaches (bind-on-pickup items, no player trading). Choosing a closed
economy is a legitimate way to sidestep this entire problem.

## Implementation (kept separate from the principle)
Decide first whether you even want a player-driven economy — the control cost is high. If you
do, design the market's rules (tradeable set, fees as sinks — ECON-0003, information you
expose) and expect to *observe and adjust* rather than dictate (telemetry, live-ops).
Anticipate optimization and exploitation (SYS-0007): botting, arbitrage, RMT. Build hard sinks
and transaction costs into the market to fight inflation and skim froth.

## Disagreement
Open/player-driven economy (rich emergent trading, player-authored value, but hard to control
and prone to exploitation) vs. closed/authored economy (fully controllable, simpler, but no
emergent market life). Sandbox and MMO design leans open; tightly-tuned and single-player design
leans closed. It's a fundamental structural choice, not a tuning knob.

## Notes
Where ECON meets emergence (SYS-0003), second-order design (SYS-0002), and the optimization
pressure of SYS-0007. Confidence 3: the phenomena are well-established, but player-economy design
is a specialized, high-variance discipline. Confidence would rise with dedicated MMO-economy
sources.
