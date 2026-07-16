---
id: GDC-L1-PROTO-0001
title: Find the fun first — prove the core before building around it
layer: L1
domain: PROTO
subdomain: prototyping
type: objective
confidence: 4
status: canonical
tags:
  - prototyping
  - find-the-fun
  - core-loop
  - iteration
  - vertical-slice
related:
  - GDC-L1-SYS-0001
  - GDC-L1-DESIGN-0001
  - GDC-L1-PROTO-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-proto-vertical-slice
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> The purpose of a prototype is to **find the fun as fast as possible.** Before investing
> in content, art, story, or supporting systems, build the smallest playable thing that
> answers "is the core actually fun?" If the fun isn't there in the prototype, it will not
> appear later with polish.

## Rationale
Fun lives in the core loop (SYS-0001), and whether that loop is fun is an empirical
question only play can answer (DESIGN-0001) — so the cheapest, fastest way to a good game
is to test the core in isolation before anything is built on it. Polish, content, and art
amplify a fun core; they cannot create one. Teams that build the game *around* an untested
core routinely discover, months and a fortune later, that the thing at the center was never
fun — a discovery a week-one prototype would have delivered for almost nothing. "Find the
fun first" front-loads the one risk that can sink everything.

## Applies when
The start of any project or major feature, and whenever the fundamental question is "is
this fun?" rather than "how do we polish it?"

## Does not apply / Exceptions
Some experiences aren't "fun" in the moment-to-moment sense — narrative, atmospheric, or
contemplative games seek a different core value (tension, meaning, mood), and the prototype
should target *that* value instead. And a few qualities can't be judged in a bare
prototype: feel and mood partly depend on fidelity (see PROTO-0003). "Find the fun" then
generalizes to "prove the core value early," whatever that value is.

## Implementation (kept separate from the principle)
Build the core loop in greybox with no content (PROTO-0003), aim it at the riskiest
assumption (PROTO-0002), and put it in front of players immediately (PLAYTEST-0002). Judge
by whether it's compelling for a few minutes with nothing else attached. Note the related
distinction: a *prototype* answers "*should* we make this game?"; a *vertical slice* (a
polished small demo at final quality) answers "*can* we make it?" — don't conflate the two,
and don't polish while you're still finding the fun.

## Disagreement
Broad agreement that the core must be proven early; the nuance is which *value* to prove
for non-"fun" games, and how much fidelity a fair test of the core requires (PROTO-0003).

## Notes
The keystone of the PROTO domain and the practical front-end of SYS-0001 (perfect the core
loop) and DESIGN-0001 (judge by the experience). Powered by the iteration loop (PROTO-0006).
Confidence 4.
