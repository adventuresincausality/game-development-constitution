---
id: GDC-L1-DESIGN-0005
title: Easy to learn, hard to master — pursue depth from a simple surface
layer: L1
domain: DESIGN
subdomain: elegance-and-depth
type: contextual
confidence: 4
status: canonical
tags:
  - depth
  - accessibility
  - emergence
  - mastery
  - elegance
related:
  - GDC-L1-DESIGN-0004
  - GDC-L1-DESIGN-0007
  - GDC-L1-DESIGN-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-bushnell-law
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Aim for a low barrier to entry and a high ceiling of mastery: the game should be easy
> to start and understand, yet reward deepening skill for a very long time. Reward both
> the first minute and the hundredth hour.

## Rationale
An accessible surface lets players in; a high skill ceiling keeps them [S-bushnell-law].
The two are not in tension when depth comes from *interaction* rather than *addition* —
a small set of clear rules that combine into a vast space of situations, strategies, and
edge cases. This is why chess, Go, and the best action and strategy games stay
compelling for decades on rules that fit on a card: initial simplicity gives way to
combinations, counterplay, and mastery that take thousands of hours to exhaust. Depth
bought this way (emergence from few rules) is cheap to teach and rich to master; depth
bought by piling on mechanics is expensive to teach and often shallow.

## Applies when
Broadly, but especially competitive, strategy, action, and any game seeking long
engagement or a wide audience. It is the design ideal behind "elegant" systems.

## Does not apply / Exceptions
Some celebrated games deliberately have a *high* barrier to entry and treat the struggle
to learn as part of the value: deep simulations (e.g. Dwarf Fortress), complex grand
strategy, and games that use opacity and discovery as core experiences (cryptic
progression, "figure it out yourself" design). For a niche, hardcore, or
discovery-driven audience a steep on-ramp can be a feature, not a flaw. The principle is
strongest when breadth of audience or immediate accessibility is a goal; weigh it against
the intended audience.

## Implementation (kept separate from the principle)
Prefer depth from *interacting* systems over depth from *more* systems (see DESIGN-0007
on elegance). Design a gentle on-ramp — teach the core in the first minutes through play
(not manuals), then layer complexity as mastery grows (pairs with flow, DESIGN-0004).
Stress-test the ceiling: can expert play keep discovering new strategies, or does the
system "solve" quickly? Emergent interactions, counterplay, and execution skill all
raise the ceiling.

## Disagreement
The maxim is sometimes overgeneralized into "all games should be easy to learn," which
the discovery/simulation camp rejects: for some experiences, *earning* your
understanding is the point, and an easy surface would cheapen it. The reconciliation:
"easy to learn, hard to master" is the right default for accessibility and reach, but a
deliberately hard-to-learn design is legitimate when difficulty of comprehension is
itself the intended experience.

## Notes
Confidence 4: a foundational industry heuristic; typed `contextual` for the real discovery/simulation exceptions.
