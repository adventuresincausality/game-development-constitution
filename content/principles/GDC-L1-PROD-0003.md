---
id: GDC-L1-PROD-0003
title: Build a vertical slice — prove one polished slice at target quality
layer: L1
domain: PROD
subdomain: pre-production-vs-production
type: contextual
confidence: 4
status: canonical
tags:
  - production
  - vertical-slice
  - de-risking
  - quality-bar
related:
  - GDC-L1-PROTO-0001
  - GDC-L1-PROD-0004
  - GDC-L1-PROD-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-proto-vertical-slice
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Before scaling to full production, build a **vertical slice**: a small piece of the game
> realized at *final quality*, cutting through every discipline. It answers "**can we
> actually make this?**", sets the quality bar for the whole team, and — for funding or
> recruiting — shows rather than tells.

## Rationale
A prototype proves the game is *fun* ("should we make this?", PROTO-0001); a vertical slice
proves the team can *produce* it at the intended quality ("can we make it?")
[S-proto-vertical-slice]. It de-risks production by forcing every discipline — art, code,
audio, design, UX — through one representative piece at shipping fidelity, surfacing the real
cost and the real bottlenecks before they're multiplied across the whole game. It also aligns
the team on a concrete quality target ("this good, everywhere") far better than a document
can, and it's the most persuasive artifact for funding, publishers, and recruits because it
*is* the game in miniature. Choosing a *tiny, representative* slice is the craft — the
temptation to show everything defeats the purpose.

## Applies when
The transition from pre-production to full production, and any point you need to prove
feasibility or the quality bar (pitching, funding, team alignment).

## Does not apply / Exceptions
Very small or experimental projects may go straight from prototype to building. A vertical
slice is expensive (it's real production work), so it's overkill when feasibility isn't in
doubt. And a slice can become a trap if the team over-polishes it forever instead of using it
to *validate and move on* — or if it's mistaken for a prototype and used to find the fun
(that's PROTO-0001's job, done cheaper).

## Implementation (kept separate from the principle)
Pick the smallest slice that is *representative* of the whole game, and build it to final
quality across all disciplines. Use it to measure real production cost and extrapolate the
full schedule (feeding PROD-0004). Treat it as a quality benchmark and a de-risking exercise,
not a demo to endlessly polish. Keep the prototype (fun) and vertical slice (feasibility)
distinct — they answer different questions.

## Disagreement
Slice-first (prove feasibility and bar before scaling) vs. lighter-weight approaches
(prototype then build, common for tiny teams who can't afford a full slice). The value of a
slice scales with the project's size and risk; for a solo micro-game it may be
unnecessary ceremony.

## Notes
The production complement to PROTO-0001: prototype = "should we?", slice = "can we?". Feeds
scheduling (PROD-0004) and the scope commitment (PROD-0001). Confidence 4.
