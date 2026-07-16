---
id: GDC-L1-NARR-0004
title: Branching is expensive — buy the feeling of agency efficiently
layer: L1
domain: NARR
subdomain: branching-vs-linear
type: contextual
confidence: 4
status: canonical
tags:
  - narrative
  - branching
  - illusion-of-choice
  - agency
  - cost
related:
  - GDC-L1-DESIGN-0006
  - GDC-L1-NARR-0002
  - GDC-L1-PROTO-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-interactive-narrative
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Fully branching narrative is combinatorially expensive and mostly unseen by any single
> player. Get the *feeling* of agency affordably: reactive storytelling (the world
> acknowledges choices without wholly branching), convergence and hub-and-spoke structures,
> and judicious illusion of choice — while keeping the choices that truly matter genuinely
> consequential.

## Rationale
Every branch that never rejoins multiplies the content you must build, and a player on one
path never sees the others — so naive branching spends enormous effort on story most players
never experience [S-interactive-narrative]. The craft is decoupling the *feeling* of agency
from the *cost* of true divergence. Reactive narrative (NPCs comment on your deeds, the world
reflects your choices) delivers acknowledgment cheaply. **Convergence** — branches that
diverge then rejoin — lets choices feel impactful in the moment while keeping the content
bounded. The **illusion of choice** (options that lead to the same outcome) is a real,
respectable tool when it protects the *feeling* of consequence — though it fails badly if
players notice the seams and feel cheated (DESIGN-0006's warning). The goal is maximum
perceived agency per unit of production, with the genuinely pivotal choices actually branching.

## Applies when
Any choice-driven or narrative game weighing how much real branching to build. Central to RPGs,
narrative adventures, and any "your choices matter" design.

## Does not apply / Exceptions
Some games *do* commit to deep, real branching as their identity (heavily replayable
choice-games, some visual novels) and accept the cost as the point. Purely linear games sidestep
the question entirely (NARR-0002's authored-narrative pole). And illusion of choice, over-used
or clumsily hidden, becomes the *unsatisfying* illusion DESIGN-0006 warns against — the tool
works only while the seams stay invisible.

## Implementation (kept separate from the principle)
Reserve true branching for the few pivotal choices; make everything else *reactive*
(acknowledged, not branched) or *convergent* (diverge then rejoin). Use hub-and-spoke structures
to let players tackle content in their order without exploding the tree. Deploy illusion of
choice where it protects felt consequence, and hide the seams. Be willing to cut branches that
don't earn their cost (PROTO-0005, kill your darlings).

## Disagreement
Deep real branching (maximal agency and replayability, at high and often-unseen cost) vs.
reactive/convergent/illusory structures (efficient perceived agency, bounded content). The
choice-game tradition leans real-branching; most narrative games lean efficient-agency. Both
are valid; the risk to manage is the *noticed* illusion that feels like a cheat.

## Notes
The production-craft complement to NARR-0002 (co-authorship) and DESIGN-0006 (legible agency);
its illusion-of-choice tool sits on DESIGN-0006's exact caution. Confidence 4.
