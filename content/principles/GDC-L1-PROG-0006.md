---
id: GDC-L1-PROG-0006
title: Design the mastery ceiling and endgame explicitly
layer: L1
domain: PROG
subdomain: mastery-curve
type: contextual
confidence: 3
status: canonical
tags:
  - progression
  - endgame
  - mastery-ceiling
  - balance
  - retention
related:
  - GDC-L1-DESIGN-0005
  - GDC-L1-SYS-0004
  - GDC-L1-PROG-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-koster-theoryoffun
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Decide what the *top* of progression looks like before you need it: where power
> converges, what expert play consists of, and whether the late game is a power fantasy or
> a tight skill test. An unplanned endgame collapses into trivialized challenge (runaway
> power) or a content cliff (nothing left to master).

## Rationale
Progression has an end state whether or not you designed one, and the two default failures
are predictable. If power keeps compounding unchecked (a positive feedback loop, SYS-0004),
the late game trivializes — every challenge falls over, and the mastery that made the game
fun evaporates (Koster's "mastery problem": once a pattern is fully solved, it stops being
fun) [S-koster-theoryoffun]. If instead the game simply runs out of new patterns, players
hit a content cliff and leave. Designing the ceiling deliberately means choosing which of
two satisfying end states you want — the earned power fantasy (you *are* strong now, and
that's the reward) or sustained skill expression (power converges so mastery stays about
play) — and shaping the curve toward it.

## Applies when
Any game long enough to have a late game or endgame — RPGs, live-service, roguelikes,
progression-heavy games. Most acute where power compounds.

## Does not apply / Exceptions
Short or session-based games without a meaningful late game don't need an endgame design.
Deliberate power-fantasy finales (the game *wants* you to feel unstoppable at the end) are
a valid choice, not a failure — the point is that trivialization is chosen and framed as a
reward, not stumbled into.

## Implementation (kept separate from the principle)
Decide early whether late-game power converges (caps, diminishing returns, scaling
challenge) or crescendos (an intentional power fantasy). Guard against runaway positive
feedback (SYS-0004) if you want convergence. Plan a source of continued mastery for the
top end — new patterns, higher-skill content, or horizontal variety — so expert players
still have somewhere to go (compare DESIGN-0005, high skill ceiling).

## Disagreement
Convergent endgame (keep power in check so skill and challenge stay meaningful) vs.
crescendo endgame (let power run so the finale is a cathartic power fantasy) are both
legitimate, opposite answers. The right one depends on whether the game's late-game
pleasure is *expression* or *dominance*.

## Notes
The top-of-curve companion to PROG-0001 (pacing) and DESIGN-0005 (accessible depth / high
ceiling), and it's where SYS-0004's runaway positive feedback most often bites. Confidence
3 — sound reasoning, but endgame design is highly genre-dependent and less settled than the
earlier-curve principles.
