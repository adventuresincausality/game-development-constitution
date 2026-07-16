---
id: GDC-L1-QA-0004
title: Test on target hardware and under real conditions
layer: L1
domain: QA
subdomain: soak-and-stress
type: contextual
confidence: 4
status: canonical
tags:
  - qa
  - target-hardware
  - soak
  - stress
  - certification
  - real-conditions
related:
  - GDC-L1-PERF-0004
  - GDC-L1-PLAYTEST-0006
  - GDC-L1-QA-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-games-user-research
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> The dev machine lies. Test on the **target hardware** and under **real conditions** — the
> platforms players use, real content volumes, long play sessions (soak), heavy load (stress),
> poor networks, and the certification requirements the game must pass. Problems that never appear
> in the studio appear constantly in the wild.

## Rationale
Development happens on powerful, clean, well-connected machines running short sessions — conditions
nothing like where the game actually ships [S-games-user-research] [S-scope-production]. Whole
classes of defects only surface off the dev box: performance and memory problems on
minimum-spec/console/mobile hardware (a frame-budget reality, PERF-0004), memory leaks and state
corruption over long **soak** sessions, breakage under **stress** (many entities, full servers),
failures on bad networks, and platform-**certification** violations that block release. Testing
only where you develop is a form of the sampling bias that skews playtests (PLAYTEST-0006):
the dev environment is an unrepresentative sample of the shipping environment. Testing on target,
at scale, and over time is how you catch the bugs that would otherwise be discovered by players at
launch (SHIP-0001).

## Applies when
Throughout development, intensively before launch (SHIP-0001) — anything with fixed target
hardware (console, mobile, VR), long sessions, networking, or platform certification.

## Does not apply / Exceptions
Early prototypes on a single dev platform can defer target testing (but shouldn't defer it
*forever* — the longer you wait, the nastier the surprises). Single-platform PC games have a
narrower target range. Certification only applies to platforms that require it. Scale the effort to
the platforms and conditions the game will actually meet.

## Implementation (kept separate from the principle)
Test regularly on minimum-spec and each target platform, not just the dev machine. Run soak tests (long sessions, watch for leaks/degradation) and stress tests (peak load). Test on realistic networks (latency, loss) for multiplayer (MP-0004). Verify certification/compliance requirements early. Fold this into the launch-readiness plan (SHIP-0001).

## Disagreement
Little on the principle; the nuance is how early and how often to test on target (target hardware
and cert kits cost money and time) vs. developing fast on dev machines. Console/mobile/VR force
early target testing; PC-only games have more slack. Risk-weight it (QA-0001).

## Notes
The real-conditions principle of QA; connects to performance budgeting on target (PERF-0004),
sampling representativeness (PLAYTEST-0006), and launch readiness (SHIP-0001). Confidence 4.
