---
id: GDC-L1-SYS-0005
title: Make systems orthogonal — each earns its place by doing something no other does
layer: L1
domain: SYS
subdomain: complexity-management
type: contextual
confidence: 3
status: canonical
tags:
  - orthogonality
  - elegance
  - complexity-management
  - depth
related:
  - GDC-L1-DESIGN-0007
  - GDC-L1-DESIGN-0002
  - GDC-L1-SYS-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-adams-dormans-mechanics
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Each system, mechanic, or unit should occupy a distinct role that nothing else fills.
> When two elements do substantially the same job, one is redundant — merge them, cut
> one, or differentiate them. Orthogonality maximizes depth per unit of complexity and
> keeps the player's choices meaningful.

## Rationale
Redundant systems are a double cost: they add complexity (to learn, build, balance) while
*subtracting* meaning, because overlapping options collapse into a dominant one (the
strictly-better version wins) or an arbitrary one (indistinguishable, so the choice
doesn't matter) — both failure modes from DESIGN-0002. Orthogonal design gives each
element a unique axis of purpose, so every system pulls its weight and every choice
between systems is a real tradeoff. This is the systems-level expression of elegance
(DESIGN-0007): not fewest systems for their own sake, but *no wasted* systems.

## Applies when
Designing sets of parallel elements: weapons, unit rosters, character classes, resource
types, upgrade paths, verbs. Especially valuable when a design feels bloated or when
players ignore large parts of it.

## Does not apply / Exceptions
Deliberate redundancy has uses: overlapping options can serve *expression* and *comfort*
(different-feeling tools that reach similar outcomes let players pick a style), and some
genres value abundance and horizontal variety over strict differentiation. Sidegrades that
are mechanically similar but aesthetically distinct are a legitimate design. So
orthogonality is a strong default, not an absolute — hence `contextual`.

## Implementation (kept separate from the principle)
For each element ask: what does this do that no other element does? If the answer is
"nothing," differentiate it (give it a unique niche), merge it, or cut it. Map elements
on their functional axes and look for clusters occupying the same point. Prefer giving a
weak-but-redundant option a *distinct tradeoff* over simply buffing it into a new dominant
choice.

## Disagreement
Tension with variety-and-expression design: minimalist orthogonality (every option
mechanically distinct) vs. expressive abundance (many similar-feeling options for
player self-expression and comfort). Both are valid; competitive and elegance-focused
design leans orthogonal, while sandbox and expression-focused design tolerates more
overlap.

## Notes
The systems-level companion to DESIGN-0007 (elegance) and DESIGN-0002 (interesting decisions). Confidence 3 — a sound and widely-taught heuristic, but genuinely qualified by expression-driven design.
