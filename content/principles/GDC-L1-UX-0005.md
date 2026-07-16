---
id: GDC-L1-UX-0005
title: Design controls for the hand — ergonomics, mapping, and button economy
layer: L1
domain: UX
subdomain: control-schemes
type: contextual
confidence: 4
status: canonical
tags:
  - ux
  - controls
  - ergonomics
  - button-economy
  - mapping
  - muscle-memory
related:
  - GDC-L1-UX-0004
  - GDC-L1-FEEL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-norman-doet
  - S-hodent-gamers-brain
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Controls live in the body, not just the menu. Map actions to inputs that fit the hand,
> respect muscle memory, and treat input space as **scarce** — every binding competes for the
> player's fingers and memory. Give the most frequent actions the easiest inputs, and never
> demand more simultaneous inputs than hands can comfortably manage.

## Rationale
Play is physical: the player's fingers, not their conscious mind, execute most actions once
learned, so the *layout* of controls shapes how the game feels to operate
[S-hodent-gamers-brain]. Frequent actions on awkward inputs cause constant friction and
error; conflicting or overloaded bindings break the muscle memory that skilled play depends
on. Button economy is real — a controller has a fixed, small number of comfortable inputs, so
each new action *costs* one, and adding capability often means *replacing* a binding rather
than piling on another (natural mapping and constraint, per Norman [S-norman-doet]). Designing
for the hand keeps the interface between intent and action invisible, which is the
precondition for good feel (FEEL-0002).

## Applies when
Control-scheme design, input mapping, and any time you add a new player action or ability.
Most acute on controllers (scarce buttons) and for action games (execution matters).

## Does not apply / Exceptions
Input-rich platforms (keyboard+mouse, complex sim setups) have more room and audiences who
accept dense bindings. Some genres intentionally use awkward or demanding controls for effect
(deliberate clumsiness for comedy or tension). And accessibility overrides ergonomic
"defaults" — full remapping (UX-0006) means no single layout must fit every hand.

## Implementation (kept separate from the principle)
Assign the easiest, most reachable inputs to the most frequent actions. Group related actions sensibly, respect platform conventions (UX-0004), and always offer full remapping.

## Disagreement
Minimal/economical control sets (accessible, low cognitive and motor load) vs. rich/expressive
control sets (depth, expert expression, more verbs) — fighting games and sims lean rich;
broad-audience and mobile lean minimal. The scarcity of comfortable inputs is the constraint
both negotiate.

## Notes
Confidence 4.
