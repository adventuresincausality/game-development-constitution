---
id: GDC-L1-QA-0003
title: A bug you can't reproduce, you can't fix
layer: L1
domain: QA
subdomain: repro-and-bug-tracking
type: contextual
confidence: 4
status: canonical
tags:
  - qa
  - reproduction
  - bug-tracking
  - determinism
  - logging
related:
  - GDC-L1-QA-0002
  - GDC-L1-CONTENT-0005
  - GDC-L1-TEAM-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-games-user-research
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Reproduction is the heart of fixing bugs: a defect you can reliably trigger you can diagnose and
> verify fixed; one you can't reproduce you can only guess at. Invest in the things that make bugs
> reproducible — clear repro steps, determinism where feasible, good logging, and captured state —
> so bugs become tractable instead of haunting.

## Rationale
The debugging loop is reproduce → diagnose → fix → verify, and it stalls entirely at step one: if
you can't make the bug happen on demand, you can't watch it, can't be sure of the cause, and can't
confirm your fix actually worked [S-games-user-research]. So reproducibility is the single most
valuable property for bug-fixing, and it doesn't happen by accident — it's enabled by disciplined
repro steps in reports, determinism (same inputs → same behavior, which also aids automated
testing, QA-0002, and reproducible builds, CONTENT-0005), comprehensive logging, and the ability
to capture and replay state. Non-reproducible bugs ("it happened once") are the ones that ship and
recur. Making bugs reproducible is upstream of fixing them.

## Applies when
All bug-fixing and QA. Especially critical for intermittent, timing-dependent, or emergent bugs,
and for anything that must be verified fixed.

## Does not apply / Exceptions
Some bugs are genuinely rare/environmental and full determinism is impractical (network races,
hardware-specific issues) — there you invest in *observability* (logging, crash dumps, telemetry)
to reconstruct what happened, since you can't reproduce it directly. And chasing perfect
reproducibility for a trivial cosmetic bug isn't worth it (risk-weight it, QA-0001).

## Implementation (kept separate from the principle)
Require clear repro steps in bug reports. Build for determinism where feasible (fixed seeds,
deterministic simulation) — it aids repro, automated testing (QA-0002), and reproducible builds
(CONTENT-0005). Log richly and capture state/crash dumps so hard-to-repro bugs can be reconstructed
(observability). Verify fixes by reproducing the original and confirming it's gone. Treat
non-reproducible recurring bugs as a signal to improve observability.

## Disagreement
Little on the principle; the nuance is how much to invest in determinism/observability infrastructure
versus living with some irreproducible bugs. High-reliability and competitive/networked games invest
heavily; smaller games lean on logging and accept some mystery bugs.

## Notes
The debugging-foundation principle of QA; enabled by determinism (shared with QA-0002 and
CONTENT-0005) and observability. Pairs with blameless problem-solving (TEAM-0003 — reproduce and
fix the system, don't blame). Confidence 4.
