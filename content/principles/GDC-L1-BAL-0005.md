---
id: GDC-L1-BAL-0005
title: Tune with data and math; decide with play
layer: L1
domain: BAL
subdomain: tuning-methods
type: contextual
confidence: 4
status: canonical
tags:
  - balance
  - tuning
  - quantification
  - telemetry
  - playtest
  - measure
related:
  - GDC-L1-PLAYTEST-0005
  - GDC-L1-PERF-0001
  - GDC-L1-PLAYTEST-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schreiber-balance
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Use quantification — cost curves, spreadsheets, telemetry, win-rates — to reason about
> balance systematically and to *flag* outliers. But make the final call by *play*: math
> finds what's suspicious; playing decides what's fun and fair. The harder quantities are to
> compare, the more you must lean on playtesting.

## Rationale
Numbers are indispensable for balance at scale: a cost curve lets you price a hundred items
consistently, and telemetry surfaces the option with a 70% pick rate you'd never spot by feel
[S-schreiber-balance]. But numbers also lie by omission — they can't fully capture how an
option *feels*, how it interacts with everything else, or whether a statistically-fine option
is miserable to play against. So the two methods are complementary: quantify to narrow the
search and catch outliers, then *play* to judge. Schreiber's own caveat — the harder direct
comparison is, the more playtesting you need — captures the balance: math scales, play judges,
and the murkier the math, the more the judgment falls to play. This is the balance-specific
form of "measure, don't guess" (PERF-0001) fused with "watch behavior, not just numbers"
(PLAYTEST-0005).

## Applies when
Any balance pass, at any scale — from pricing a single item to tuning a live competitive
roster. Data-heavy at large scale; play-heavy where interactions are complex or subjective.

## Does not apply / Exceptions
Tiny option sets can be balanced almost entirely by play (no spreadsheet needed for three
weapons). Conversely, at massive scale (live-service with millions of matches) telemetry
carries more weight — though even there, the numbers point and humans still decide (PROG-0004's
warning against optimizing the metric instead of the experience applies). Pure faith in either
extreme — spreadsheet-only or vibes-only — fails.

## Implementation (kept separate from the principle)
Build a cost/value model so options are priced consistently, and instrument the game to see
pick rates, win rates, and drop-off (PLAYTEST-0005). Use both to *find* imbalances; then
playtest the flagged cases and decide by experience, not by the number alone. Where quantities
resist comparison, weight playtesting more. Keep before/after data so you can tell a change
helped.

## Disagreement
Data-driven balance (quantify, trust metrics, A/B test) vs. designer-judgment balance (play,
feel, expert intuition). Data scales and catches blind spots; judgment captures fun and
context that numbers miss. The synthesis — data flags, play decides — is what most balance
designers converge on; the debate is the *weighting*, which shifts with scale and how
measurable the game is.

## Notes
The methods principle of BAL, unifying the "measure, don't guess" thread (PERF-0001,
PLAYTEST-0001/0005) with the reality that balance is ultimately a judgment about experience.
Confidence 4.
