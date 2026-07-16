---
id: GDC-L1-PLAYTEST-0005
title: Combine telemetry with observation — the "what" needs the "why"
layer: L1
domain: PLAYTEST
subdomain: telemetry-and-analytics
type: contextual
confidence: 4
status: canonical
tags:
  - playtest
  - telemetry
  - analytics
  - qualitative
  - quantitative
  - measure-dont-guess
related:
  - GDC-L1-PLAYTEST-0001
  - GDC-L1-PERF-0001
  - GDC-L1-SYS-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-games-user-research
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Instrument the game to see what players do at scale — telemetry answers "what" and "how
> many" across whole populations. But pair it with qualitative observation to learn "why."
> Numbers show *where* players drop off, quit, or cluster; only watching them shows what it
> *felt* like. Neither alone is enough.

## Rationale
Behavioral telemetry can now capture entire player populations, not just a lab sample,
which makes it uniquely powerful for spotting *where* problems are: the level with the
20% quit rate, the ability nobody uses, the difficulty spike where the curve craters
[S-games-user-research]. But telemetry is mute on causation — it tells you the cliff
exists, not why players fall off it (too hard? boring? confusing? a bug?). Qualitative
methods (observation, interviews, think-aloud) explain the why on a small sample.
Triangulating the two — quantitative to find the where, qualitative to understand the why —
is how you get both reliable signal and actionable understanding. Data-driven design
without the qualitative side optimizes numbers while missing the experience.

## Applies when
Any game you can instrument, especially at scale — betas, live-service, or any build with
enough players that patterns emerge. Even small tests benefit from basic metrics
(completion, deaths, time-per-section).

## Does not apply / Exceptions
Early prototypes with few testers have too little data for telemetry to mean much — lean
qualitative there. And metrics can mislead: optimizing purely for a measurable proxy
(engagement time, retention) can steer a game away from being *good* (compare PROG-0004,
where the metric and the player's interest can diverge). Measure to understand, not to
chase a number.

## Implementation (kept separate from the principle)
Log the events that answer real questions (progression, deaths, drop-off, choices, ability
use), not everything. Use telemetry to *locate* problems, then observe or interview to
*diagnose* them. Beware proxy metrics that reward the wrong thing. This is
"measure, don't guess" (the PERF domain's ethos) applied to player experience.

## Disagreement
Data-first cultures trust metrics and A/B tests heavily; craft-first cultures worry that
metric-chasing produces soulless, over-optimized games. The synthesis this principle takes:
quantitative finds the where, qualitative and design judgment decide the what — data
informs decisions, it doesn't make them.

## Notes
Extends behavior-over-opinion (PLAYTEST-0001) to population scale and connects to the
"measure, don't guess" ethos shared with the PERF domain. Its caution mirrors PROG-0004
(don't optimize for engagement at the player's expense). Confidence 4. Note: references
`GDC-L1-PERF-0001`, to be authored in the PERF sweep (tracked as a pending forward-ref).
