---
id: GDC-L1-NARR-0002
title: The player is a co-author, not an audience
layer: L1
domain: NARR
subdomain: player-authored-story
type: contextual
confidence: 4
status: canonical
tags:
  - narrative
  - agency
  - participation
  - player-authored
  - interactivity
related:
  - GDC-L1-DESIGN-0006
  - GDC-L1-NARR-0004
  - GDC-L1-NARR-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-interactive-narrative
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Games are participatory: the player experiences story by *acting*, not just watching. Design
> narrative for a participant with agency — account for what they do, react to it, and where it
> fits, let them help *author* the story rather than have it delivered to them passively.

## Rationale
The defining difference between games and linear media is that the audience acts, and acts
*differently* each time [S-interactive-narrative]. Narrative that ignores this — that treats
the player as a viewer between cutscenes — wastes the medium's unique power and often creates
the passivity it fears (players skip the story they can't affect). Designing for a co-author
means the world acknowledges the player's actions, choices carry consequences the player can
feel (DESIGN-0006, legible agency), and the most memorable "stories" are frequently the ones
players generate themselves through play (an emergent escape, a desperate improvised win). The
strongest game narratives treat the player as the protagonist *doing* the story, not the
spectator being told it.

## Applies when
Any game that wants narrative engagement — most story-driven and role-playing games, and any
game seeking the participatory, "my story" feeling.

## Does not apply / Exceptions
Some games deliberately keep the player a near-passive audience for authored, cinematic
storytelling (linear narrative adventures, "walking simulators" that curate a fixed emotional
journey) — a valid trade of agency for authorial control and craft. And full player authorship
has real costs and risks (incoherence, the player "missing" the intended story) — see the
branching-cost principle (NARR-0004). Co-authorship is a spectrum, not an absolute.

## Implementation (kept separate from the principle)
Make the world react to what the player does, at whatever scale you can afford (from a guard
commenting on your last action to persistent world-state changes). Give consequential choices
legible consequences (DESIGN-0006). Create conditions for emergent player stories (systemic
interactions, SYS-0003). Where you deliver authored story, weave it into play rather than
stopping play to show it (NARR-0003, NARR-0005).

## Disagreement
Participatory/agency-driven narrative (the player co-authors; "my story") vs. authored/curated
narrative (a crafted, controlled arc the player receives) — the immersive-sim and RPG tradition
vs. the cinematic-adventure tradition. Both make great games; the split is the same
agency-vs-authored axis as DESIGN-0006, seen from the narrative side.

## Notes
The participation principle of NARR; an application of DESIGN-0006 (agency) to storytelling,
and the setup for the branching-cost craft (NARR-0004). Confidence 4.
