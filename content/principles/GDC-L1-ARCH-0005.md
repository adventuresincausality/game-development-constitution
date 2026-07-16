---
id: GDC-L1-ARCH-0005
title: Architect for iteration speed — treat the change-to-feedback loop as first-class
layer: L1
domain: ARCH
subdomain: code-that-designers-can-touch
type: objective
confidence: 4
status: canonical
tags:
  - iteration
  - hot-reload
  - tooling
  - workflow
  - empower-creators
related:
  - GDC-L1-ARCH-0001
  - GDC-L1-DESIGN-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-nystrom-gpp
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Treat the length of the change-to-feedback loop as a primary architectural concern.
> Hot-reload, live tuning, data-driven values, fast builds, and good in-editor tools all
> compound: the faster a creator sees the result of a change, the more iterations they
> get — and iteration count, not any single decision, is what produces quality.

## Rationale
Good games are found, not specified — the target experience only becomes real through
repeated try-observe-adjust cycles against actual play (DESIGN-0001). That makes the
*cost of one iteration* the master variable of a project's quality ceiling: halve the
edit→see-result time and you roughly double how many refinements fit in the same schedule.
Architecture directly sets that cost — a codebase that requires a full recompile and
relaunch to test a tweak strangles iteration, while one with hot-reloadable data and live
tuning invites it [S-nystrom-gpp]. Investing in iteration speed pays back continuously,
across every future change.

## Applies when
Throughout development, for any system that will be tuned or iterated — which is most of a
game. The earlier the investment, the more cycles benefit.

## Does not apply / Exceptions
Iteration tooling has upfront cost, and there's a point of diminishing returns — building
elaborate live-tuning for a value you'll set once is waste. Tiny or one-off projects may
not recoup the investment. Spend the tooling budget where iteration will actually be heavy.

## Implementation (kept separate from the principle)
Make tunable values data-driven and hot-reloadable (ARCH-0001). Minimize build and load
times on the critical iteration path. Provide in-editor/live controls for the parameters
designers touch most. Measure the loop: if changing a combat value takes minutes, that's
an architectural bug worth fixing. Prefer play-in-editor and fast preview over
full-rebuild testing.

## Disagreement
Little on the principle; debate is only about *how much* to invest and *when*. The honest
caution is over-tooling — gold-plating iteration affordances that never get used. Target
the systems with real iteration demand.

## Notes
The architectural enabler of the whole design-by-iteration philosophy (DESIGN-0001, and
the PROTO domain to come). Tightly paired with ARCH-0001 (data-driven). Confidence 4.
