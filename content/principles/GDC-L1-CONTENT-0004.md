---
id: GDC-L1-CONTENT-0004
title: Validate content early — catch bad data on ingest, not at runtime
layer: L1
domain: CONTENT
subdomain: asset-pipeline
type: contextual
confidence: 4
status: canonical
tags:
  - content
  - validation
  - data-integrity
  - pipeline
  - fail-fast
related:
  - GDC-L1-ARCH-0001
  - GDC-L1-CONTENT-0002
  - GDC-L1-QA-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-gregory-game-engine-arch
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Validate content as early as possible — on import, on save, in the build — so bad data fails
> *loudly and immediately*, at the point it was created, rather than silently causing a mysterious
> bug or crash at runtime hours later. Catch it where it's cheap to fix.

## Rationale
Data-driven design (ARCH-0001) and creator empowerment (CONTENT-0002) mean designers and artists
author lots of data, and some of it will be wrong — a missing reference, an out-of-range value, a
malformed asset. If that error surfaces only at runtime (a crash, a broken level, a subtle
wrong-number bug), it's expensive to trace back to its source and it may ship. Validating on
ingest inverts this: the error is reported to the person who made it, at the moment they made it,
with a clear message — cheap to fix and impossible to miss [S-gregory-game-engine-arch]. This is
the content-pipeline form of "fail fast" and of building quality in rather than testing it out
(QA-0005): the earlier a defect is caught, the cheaper it is, and validation is how you push data
defects to the earliest possible point.

## Applies when
Any data-driven content pipeline — asset imports, data assets, level data, config. The more
designer-authored data, the more validation pays.

## Does not apply / Exceptions
Trivial or one-off data may not justify formal validators. Over-strict validation can also block
legitimate work-in-progress (a designer mid-edit shouldn't be stopped by every transient
inconsistency) — validation should distinguish "broken and shippable" from "unfinished." And
validators are code that must be maintained. Validate what actually breaks; don't gold-plate.

## Implementation (kept separate from the principle)
Add validation at ingest points (import, save) and in the build, reporting errors clearly to the
author. Distinguish hard errors (block) from warnings (flag). Key runtime state by stable
identifiers so missing/renamed content fails cleanly (ARCH-0001/0006, CONTENT-0003). Make the
build fail on invalid content rather than shipping it. Treat this as part of building quality in
(QA-0005).

## Disagreement
Strict early validation (catches defects cheaply, but tooling cost and can block WIP) vs.
permissive pipelines (less friction, but runtime surprises). The balance is validating what
genuinely breaks while not obstructing legitimate in-progress work. Content-heavy, data-driven
projects strongly favor validation.

## Notes
The data-integrity principle of CONTENT; the ingest-time application of fail-fast and "build
quality in" (QA-0005), guarding data-driven content (ARCH-0001, CONTENT-0002). Confidence 4.
