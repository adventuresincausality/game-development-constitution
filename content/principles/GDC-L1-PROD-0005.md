---
id: GDC-L1-PROD-0005
title: Avoid crunch — sustained overwork is a planning failure, not a virtue
layer: L1
domain: PROD
subdomain: crunch-avoidance
type: contextual
confidence: 4
status: canonical
tags:
  - production
  - crunch
  - sustainability
  - wellbeing
  - planning
related:
  - GDC-L1-PROD-0001
  - GDC-L1-TEAM-0001
  - GDC-L1-PROD-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Crunch — sustained, mandatory overwork — degrades both the work and the people doing it,
> and it is a *symptom* of a scoping or planning failure (usually over-scope, PROD-0001), not
> a form of heroism. Protect a sustainable pace; the quality of the game and the health of the
> team both depend on it.

## Rationale
Tired people make worse decisions, write buggier code, and produce weaker work, so extended
crunch often *lowers* net output while burning out the team it depends on
[S-scope-production]. It also masks the real problem: crunch is what happens when scope, time,
and resources were never balanced (PROD-0001) and the gap gets absorbed by people's evenings
and weekends instead of by a plan. Treating crunch as a virtue ("we shipped through heroic
effort") rewards the planning failure that caused it and normalizes harm. The humane *and*
the effective choice is the same: plan realistically, cut scope, and keep the pace
sustainable — which is also a wellbeing and ethics commitment, not just a productivity one.

## Applies when
All production planning and management. Most acute near milestones and launch, where the
temptation to "just push through" is strongest.

## Does not apply / Exceptions
Short, voluntary, well-compensated, genuinely-rare pushes (a true one-off before a hard
external deadline) are different from chronic crunch culture — the harm is in the *sustained,
mandatory* form. Passion-driven overwork that people freely choose exists, but leaders must be
careful not to launder mandatory crunch as "passion." The principle targets crunch as a
*planned-for* norm.

## Implementation (kept separate from the principle)
Plan for a sustainable pace and cut scope to hold it (PROD-0001/0004). Treat a looming crunch
as a signal to re-scope, not to demand more hours. Track workload honestly. Build the schedule
slack that PROD-0004 calls for so surprises don't land on people. Protect the team's health as
a first-order constraint (TEAM-0001), not a variable to spend.

## Disagreement
"Crunch is sometimes necessary/worth it" (deadlines are real; a final push can matter) vs.
"crunch is a failure of planning and a harm to avoid" (the sustainable-development position).
The industry has moved decisively toward the latter; the honest middle acknowledges rare
short pushes while rejecting crunch as a planned norm or a badge of honor.

## Notes
A production principle with an explicit wellbeing/ethics dimension; the human counterpart of
scope discipline (PROD-0001) and a team-health commitment (TEAM-0001). Confidence 4.
