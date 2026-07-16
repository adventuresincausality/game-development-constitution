---
id: GDC-L1-SHIP-0004
title: Close the loop after launch — telemetry and community feedback into responsive patching
layer: L1
domain: SHIP
subdomain: post-launch
type: contextual
confidence: 4
status: canonical
tags:
  - shipping
  - telemetry
  - feedback
  - patching
  - community
related:
  - GDC-L1-PLAYTEST-0005
  - GDC-L1-PLAYTEST-0004
  - GDC-L1-SHIP-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-scope-production
  - S-games-user-research
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> After launch, keep the iteration loop running: gather what players *do* (telemetry) and what they
> *say* (community feedback), and turn it into responsive fixes and improvements. Launch multiplies
> your player base — and thus your data — enormously; a responsive post-launch loop turns a rough
> launch into a recovery and a good one into a great one.

## Rationale
Launch is the biggest playtest the game will ever get (PLAYTEST-0005): millions of real players in
real conditions surface the balance problems, exploits, pain points, and crashes that no internal
test found. A team that watches this — telemetry for the *what* (where players quit, what they use,
where they crash) plus community feedback for the *why* — and patches responsively can fix a shaky
launch and keep a strong one improving [S-scope-production] [S-games-user-research]. This is the
post-launch continuation of the whole iteration ethos (PROTO-0006) and the playtest principles:
watch behavior over opinion (PLAYTEST-0001/0005), and listen to the problem while distrusting the
prescribed fix (PLAYTEST-0004). A responsive, visible post-launch loop also signals to the community
that the game is cared for (SHIP-0003), which retains players through the rocky early weeks.

## Applies when
The post-launch period of any game, and continuously for live games. Most critical in the first days
and weeks when the largest audience and the most data arrive at once.

## Does not apply / Exceptions
Finite games close the loop for a limited support window rather than forever. And responsiveness has
limits: not every loud complaint warrants a change (PLAYTEST-0004 — distrust the prescribed fix),
and knee-jerk patching can destabilize a game or chase a vocal minority. The loop should be
*responsive and judged*, not reflexive. Telemetry can also mislead if optimized for the wrong metric
(PROG-0004's caution).

## Implementation (kept separate from the principle)
Instrument the game for post-launch telemetry (crashes, drop-off, usage, balance data — build it in
before launch, SHIP-0002). Monitor community channels for the *why*. Combine both (PLAYTEST-0005),
and patch responsively — prioritizing crashes, exploits, and the worst pain points. Listen to the
problem, own the fix (PLAYTEST-0004). Communicate what you're doing (SHIP-0003). Avoid
metric-chasing at the experience's expense (PROG-0004).

## Disagreement
Highly responsive patching (recover launches, retain players, show care — but risk instability,
chasing vocal minorities, and over-reacting) vs. measured/deliberate updates (stability, considered
changes — but slower to fix real problems). The synthesis: fast on crashes/exploits, deliberate on
design changes, always judging feedback (PLAYTEST-0004) rather than obeying it.

## Notes
The post-launch iteration principle of SHIP; the launch-scale continuation of playtesting
(PLAYTEST-0001/0004/0005) and the iteration loop (PROTO-0006), feeding live ops (SHIP-0003).
Confidence 4.
