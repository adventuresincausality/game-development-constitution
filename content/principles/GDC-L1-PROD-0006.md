---
id: GDC-L1-PROD-0006
title: Finish — shipping is its own skill
layer: L1
domain: PROD
subdomain: scoping-and-cutting
type: contextual
confidence: 4
status: canonical
tags:
  - production
  - finishing
  - shipping
  - polish
  - cutting
related:
  - GDC-L1-PROTO-0006
  - GDC-L1-PROTO-0005
  - GDC-L1-PROD-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-scope-production
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A game that never ships helps no one, and **finishing is a distinct, hard skill.** The last
> stretch is dominated by cutting, polishing, and bug-fixing — not by adding. Decide what
> "done" means, cut ruthlessly to reach it, and actually release.

## Rationale
Starting is easy and finishing is where most projects die, because the end game is
psychologically and practically different from the beginning: it's about *converging* —
closing off scope, fixing the long tail of bugs, polishing what exists, and letting go of what
won't make it — rather than the open-ended creativity of the start [S-scope-production]. The
"last 10%" reliably takes far more than 10% of the effort, and inexperienced teams
underestimate it badly. Finishing requires a clear definition of done, the discipline to stop
adding (and stop iterating — PROTO-0006's know-when-to-ship), and the willingness to cut
beloved-but-unfinished work (PROTO-0005) so the whole can ship. Shipping is a skill you build,
and an unshipped game teaches almost nothing compared to a finished one.

## Applies when
The back half of any project, and the decision — recurring — of whether to add/iterate more or
converge and ship. Especially critical for first projects, which most often stall before the
finish.

## Does not apply / Exceptions
Live-service and early-access models blur "finished" deliberately (ship a viable core, keep
developing) — but even they must reach a *shippable* state, so the finishing discipline still
applies to each release. Research prototypes are *meant* not to ship. And "finish" doesn't
mean ship broken — it means converge on a defined, achievable "done," which may itself be
scoped down (PROD-0001).

## Implementation (kept separate from the principle)
Define "done" concretely and early enough to steer toward it. In the end game, switch from
adding to converging: freeze scope, fix bugs, polish, and cut what won't make it (PROTO-0005).
Budget realistically for the long tail (it's bigger than it looks). Know when iterating more
costs more than it adds (PROTO-0006) and ship. Treat *finishing* as a skill to practice on
small projects before big ones.

## Disagreement
Ship-it discipline (finished-and-imperfect beats perfect-and-unreleased) vs. hold-for-quality
(don't ship before it's good). Both fail at the extreme — premature shipping and endless
polishing are both real. The reconciliation is a *defined, achievable* bar for "done," reached
by cutting rather than by indefinite extension.

## Notes
The convergence/ship discipline; the production partner of PROTO-0006 (stop looping) and
PROTO-0005 (cut), and the endpoint of the scope story (PROD-0001). Confidence 4.
