---
id: GDC-L1-UX-0004
title: Use affordances, signifiers, and conventions — make the right action obvious
layer: L1
domain: UX
subdomain: ui-design
type: contextual
confidence: 4
status: canonical
tags:
  - ux
  - affordances
  - signifiers
  - conventions
  - mapping
  - discoverability
related:
  - GDC-L1-UX-0003
  - GDC-L1-UX-0005
  - GDC-L1-FEEL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-norman-doet
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Design so the correct action is obvious and the wrong one is hard. Objects and controls
> should signal how to use them (**affordances** and **signifiers**), controls should map
> naturally to their effects, and established **conventions** (WASD to move, red for danger,
> a button prompt to interact) should be honored unless breaking them clearly pays. Don't
> make players guess or relearn what they already know.

## Rationale
Players arrive with a huge library of learned conventions and real-world intuitions, and good
design *leverages* that library rather than fighting it [S-norman-doet]. An affordance is
what an object lets you do; a signifier is the cue that tells the player it's possible — a
ledge that's clearly grabbable, a door that's obviously openable, a highlighted interactable.
Natural mapping (the control relates intuitively to its effect) and honored convention mean
the player transfers existing knowledge instead of learning from scratch, which lowers
cognitive load (UX-0002) and gets them playing sooner. Violating a strong convention without
a reason imposes a relearning tax and a stream of avoidable errors.

## Applies when
Control schemes, interactable objects, UI elements, iconography — anywhere the player must
figure out "what can I do here and how?"

## Does not apply / Exceptions
Breaking convention can be a deliberate, valuable design move — a novel control or interface
that unlocks something conventions can't (motion controls, unique traversal, an
intentionally alien UI). The test is whether the payoff exceeds the relearning cost. Some
signifiers are also deliberately hidden for discovery/puzzle design (a secret is *supposed*
to be non-obvious). Convention is the default to depart from consciously, not a mandate.

## Implementation (kept separate from the principle)
Signal interactivity clearly (highlights, prompts, distinct shapes/materials for
interactables). Map controls to their effects intuitively. Follow platform and genre
conventions for common actions unless you have a real reason not to — and when you break one,
teach the new pattern deliberately (UX-0001). Make illegal or harmful actions hard or
impossible rather than merely discouraged.

## Disagreement
Convention (leverage learned patterns, low friction, fast onboarding) vs. innovation (novel
schemes that enable new experiences at a learning cost) is a real tension. Broad-audience and
usability-first design leans convention; distinctive, mechanic-defining design sometimes earns
the cost of the new. Break conventions on purpose, not by accident.

## Notes
The Norman core of the UX domain; pairs with readable communication (UX-0003), control
ergonomics (UX-0005), and responsiveness (FEEL-0002 — a signified action must also *respond*).
Confidence 4.
