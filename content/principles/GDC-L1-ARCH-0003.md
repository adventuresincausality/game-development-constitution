---
id: GDC-L1-ARCH-0003
title: Decouple systems through events, not direct references
layer: L1
domain: ARCH
subdomain: decoupling
type: contextual
confidence: 4
status: canonical
tags:
  - events
  - observer
  - event-queue
  - decoupling
  - messaging
related:
  - GDC-L1-ARCH-0002
  - GDC-L1-SYS-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-nystrom-gpp
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Let systems communicate by broadcasting **events** through a mediator, rather than
> holding direct references to one another. A sender announces "this happened" without
> knowing who listens; listeners subscribe without knowing who sent it. This keeps
> systems independent — new listeners can be added without touching the sender.

## Rationale
Direct references make systems mutually dependent: the combat system calling the audio
system, the UI, the achievement tracker, and the particle system directly becomes a knot
where nothing can change in isolation [S-nystrom-gpp]. An event/observer boundary cuts
the knot — the combat system fires "enemy died" and is done; any number of systems react,
each ignorant of the others. An event *queue* goes further, decoupling *when* a message is
sent from *when* it's processed, which smooths frame spikes and ordering. This is the
architecture that lets a system like a behavior-observing skill engine watch everything
the player does without every other system having to know it exists.

## Applies when
Cross-cutting reactions to game events (audio, UI, VFX, analytics, progression), and any
system that must observe many others without coupling to them.

## Does not apply / Exceptions
Events are not free. Indirection makes control flow harder to trace, hides ordering
dependencies, and — overused — produces "event spaghetti" where no one can tell what
happens when. For tight, direct, one-to-one relationships a plain function call is
clearer and more debuggable than an event. Use events to decouple *across* system
boundaries; don't event-ify everything inside a system.

## Implementation (kept separate from the principle)
Define a clear, typed event vocabulary (a fixed set of well-named events beats ad-hoc
strings). Fire events at meaningful moments; let systems subscribe. Consider an event
queue when timing/ordering or frame-spikes matter. Guard debuggability: log/inspect the
event stream, and keep the vocabulary small and documented (this is where ARCH meets
SYS-0006, legibility — events can hurt traceability, so invest in tooling that restores
it).

## Disagreement
Event-driven decoupling vs. direct calls is a real tradeoff: decoupling and extensibility
vs. traceability and simplicity. The synthesis: use events at seams where decoupling pays
(many independent reactors, or a system that must not know its observers), and direct
calls where the relationship is tight and clarity matters more than flexibility.

## Notes
Confidence 4.
