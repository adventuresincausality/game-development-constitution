---
id: GDC-L1-ARCH-0006
title: Decide your authoritative state and how it serializes — early
layer: L1
domain: ARCH
subdomain: save-systems
type: contextual
confidence: 3
status: canonical
tags:
  - save-systems
  - serialization
  - state
  - determinism
  - networking
related:
  - GDC-L1-ARCH-0001
  - GDC-L1-ARCH-0004
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-gregory-game-engine-arch
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Decide early what the game's **authoritative state** is and **how it serializes**.
> Save/load, networking, and determinism all depend on a clean answer to "what is the
> state, and how does it persist?" Retrofitting persistence onto a codebase that ignored
> it is painful, bug-prone, and sometimes save-breaking.

## Rationale
Persistence cuts across everything: if state is scattered, implicit, or tangled with
transient runtime objects, then saving, loading, syncing, or replaying it becomes a
minefield of special cases [S-gregory-game-engine-arch]. Deciding up front what is
canonical state (versus derived or transient), and giving it a stable serialized form,
keeps that complexity contained. It also front-loads decisions that are *expensive to
change later* — notably identifier and format stability: once a build ships, the ids and
schemas in save files are effectively permanent, because changing them breaks existing
saves. Thinking about this before shipping avoids a class of the worst late bugs.

## Applies when
Any game with saves, progression, multiplayer, or replays — anything where state must
persist or synchronize. The larger and longer-lived the state, the more this matters.

## Does not apply / Exceptions
Games with little or no persistent state (pure arcade loops, some session-only
experiences) can treat this lightly. Early prototypes may defer it deliberately — but
should *know* they're deferring it, since the cost of retrofitting rises with codebase
size.

## Implementation (kept separate from the principle)
Distinguish authoritative state from derived/transient state, and keep the authoritative
set explicit and serializable. Choose stable identifiers and a versioned save format
early; treat shipped ids and schemas as append-only/immutable. Design state so it can be
reconstructed from its serialized form. If determinism or netcode is a goal, decide that
early too — it constrains the whole architecture.

## Disagreement
Mostly about timing: persistence-first designers argue state/serialization should shape
architecture from day one; YAGNI-leaning developers defer it to avoid over-designing an
uncertain game. The reconciliation: the *decision* about what state is authoritative
should be early and conscious even if the *implementation* is deferred — deferring
knowingly is fine, ignoring it is not.

## Notes
Confidence 3; typed `contextual` for the low-persistence exception.
