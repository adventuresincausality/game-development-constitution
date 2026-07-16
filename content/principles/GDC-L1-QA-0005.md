---
id: GDC-L1-QA-0005
title: Build quality in — don't test it in at the end
layer: L1
domain: QA
subdomain: test-strategy
type: contextual
confidence: 4
status: canonical
tags:
  - qa
  - shift-left
  - quality
  - process
  - prevention
related:
  - GDC-L1-TEAM-0003
  - GDC-L1-CONTENT-0004
  - GDC-L1-PROD-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-games-user-research
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Quality is a *process*, not a final gate. Catch defects as early as possible — at authoring
> (validate content, CONTENT-0004), at commit (automated tests, QA-0002), in review — rather than
> relying on a QA pass at the end to find everything. A bug caught the day it's made is cheap; the
> same bug found at launch is expensive or unshippable.

## Rationale
The cost of a defect rises steeply the longer it goes undetected: caught at authoring it's a quick
edit; caught in a milestone build it's a bug hunt; caught by players at launch it's a crisis and a
reputation hit (SHIP-0001) [S-games-user-research]. Treating QA as only an end-phase gate
guarantees that defects accumulate cheaply-fixable-but-uncaught until they're expensive — so the
better strategy is to push quality *upstream* ("shift left"): validate data on ingest
(CONTENT-0004), run automated regression continuously (QA-0002), review changes, and make it safe
to surface problems early (the blameless, learn-from-failure culture of TEAM-0003). This also
demands that schedules *budget* for quality throughout rather than assuming a magic QA phase at the
end (PROD-0004). Building quality in makes the final QA a confirmation, not a rescue.

## Applies when
The whole development process — quality practices belong at every stage, not just before launch.

## Does not apply / Exceptions
A dedicated QA/hardening phase near launch is still valuable and necessary — "build quality in"
complements it, it doesn't replace it. And prototypes deliberately run rough (quality-in would be
premature polish on throwaway work, PROTO-0004). The principle is about not *deferring all* quality
to the end, not about polishing prototypes.

## Implementation (kept separate from the principle)
Push defect-catching upstream: validate content at ingest (CONTENT-0004), automate regression tests
run on every change (QA-0002, CONTENT-0005), review code and design, and playtest early and often
(PLAYTEST-0002). Make surfacing problems safe and blameless (TEAM-0003). Budget for quality
throughout the schedule (PROD-0004), not as a final phase alone. Use the end-phase QA to confirm,
not to discover everything.

## Disagreement
Shift-left/quality-as-process (cheaper defects, less end-crunch — but requires upstream discipline
and tooling) vs. quality-as-final-gate (simpler process, defer QA cost — but expensive late defects
and launch risk). Modern practice favors building quality in; the debate is how much upstream
investment a given project can justify.

## Notes
The prevention/process principle of QA; unifies content validation (CONTENT-0004), automated
regression (QA-0002), blameless learning (TEAM-0003), and quality-budgeted scheduling (PROD-0004).
Confidence 4.
