---
id: GDC-L1-ARCH-0002
title: Favor composition over inheritance — build entities from components
layer: L1
domain: ARCH
subdomain: patterns
type: contextual
confidence: 4
status: canonical
tags:
  - composition
  - components
  - ecs
  - modularity
  - decoupling
related:
  - GDC-L1-ARCH-0003
  - GDC-L1-SYS-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-nystrom-gpp
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Assemble game entities from small, reusable **components** rather than from deep
> inheritance hierarchies. Add behavior by composing parts, not by extending an
> ever-growing class tree. "This entity *has* a health component, a movement component, an
> inventory" scales; "this entity *is a* subclass of a subclass of Actor" does not.

## Rationale
Game entities need behavior in combinations that a single inheritance tree can't express
cleanly — the moment you want "a crate that's also flammable and also a mount," a rigid
hierarchy forces duplication or contortion [S-nystrom-gpp]. Composition sidesteps this:
each capability is an independent, reusable component, and an entity is whatever set of
components it holds. This keeps capabilities decoupled (each component is testable and
editable alone), avoids the duplication that deep inheritance breeds, and lets designers
build new entity types by mixing existing parts — which pairs naturally with data-driven
design (ARCH-0001).

## Applies when
Any game with many entity types that share overlapping-but-not-identical behavior — most
games with a variety of actors, items, or units.

## Does not apply / Exceptions
Composition has overhead: indirection, wiring, and (in full ECS) a real conceptual and
tooling cost that a small game may not need. Shallow, stable inheritance is perfectly
fine where the "is-a" relationship is genuine and unlikely to combine in surprising ways.
Full data-oriented ECS is a bigger commitment than "components over inheritance" and
brings its own tradeoffs (performance wins vs. complexity) — adopt the depth the game
actually needs.

## Implementation (kept separate from the principle)
Model capabilities as components with narrow responsibilities; compose entities from
them. Prefer wiring components together over subclassing. Let components communicate
through events or a shared owner rather than direct hard references (ARCH-0003). Keep each
component's job orthogonal to the others' (the code-level echo of SYS-0005).

## Disagreement
Component/ECS vs. classical OOP inheritance is a long-running debate. Inheritance is
simpler for small, stable hierarchies; composition scales far better for combinatorial
behavior. Full ECS adds performance and decoupling benefits at a real complexity cost.
The pragmatic default — "favor composition, reach for ECS only when its benefits are
needed" — is what this principle encodes.

## Notes
The code-level counterpart to systems-orthogonality (SYS-0005): distinct, non-overlapping parts, whether they're game systems or software components. Confidence 4.
