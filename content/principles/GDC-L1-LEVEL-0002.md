---
id: GDC-L1-LEVEL-0002
title: Make space legible — support the player's mental map
layer: L1
domain: LEVEL
subdomain: guidance-and-legibility
type: contextual
confidence: 4
status: canonical
tags:
  - level-design
  - legibility
  - wayfinding
  - landmarks
  - navigation
related:
  - GDC-L1-LEVEL-0001
  - GDC-L1-SYS-0006
  - GDC-L1-DESIGN-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-lynch-image-city
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Design space so the player can always answer *where am I, where can I go, where have I
> been?* Give the world the ingredients of a mental map — memorable **landmarks**, distinct
> **districts**, clear **paths**, readable **edges** and **nodes** — so it organizes into a
> coherent whole and players navigate by understanding rather than by luck.

## Rationale
People build mental maps of a space from a small set of elements — paths (routes), edges
(boundaries), districts (areas with a shared character), nodes (junctions), and landmarks
(distinctive reference points visible from afar) — and a space rich in these is "legible":
easy to recognize, organize, and navigate without disorientation [S-lynch-image-city]. A
level that ignores them becomes a samey maze where every corridor looks alike and players
get lost, retread, and disengage. Strong landmarks let players orient after a distraction
(a big fight, a detour) and re-fix their goal; distinct districts make "I'm in the
sewers now" legible at a glance; clear paths and nodes make choices comprehensible.
Legibility is what turns navigation from a chore into confident movement.

## Applies when
Any navigable space, and critically any large, open, or interconnected world where getting
lost is a real risk. The bigger and more open the space, the more it depends on landmarks
and district identity.

## Does not apply / Exceptions
Disorientation is sometimes the *goal*: horror, dread, and certain puzzle or dream-logic
spaces deliberately break legibility to unsettle the player (a legible haunted house isn't
scary). Deliberately labyrinthine design — mazes, getting-lost-as-content — inverts this on
purpose. And an intentionally illegible *first* impression can make later mastery of the
space satisfying (Dark Souls' interconnected world rewards learning it). The principle is
the default; breaking it should be a choice.

## Implementation (kept separate from the principle)
Plant landmarks tall or bright enough to be seen across the level, and make them distinct
from each other. Give districts their own palette, architecture, and mood so areas are
identifiable at a glance. Keep paths readable and junctions (nodes) clear. Vary silhouettes
so places aren't confusable. Test by asking players to point toward where they've been —
if they can't, the space isn't legible.

## Disagreement
Legibility vs. deliberate disorientation is the axis: readable, confident navigation (most
games) vs. intentional lostness for horror, mystery, or mastery-through-learning. Both are
valid; the question is whether *knowing where you are* should be given or earned.

## Notes
The orientation half of level legibility (LEVEL-0001 is the attention half), and the spatial counterpart of SYS-0006 (legible systems). Confidence 4.
