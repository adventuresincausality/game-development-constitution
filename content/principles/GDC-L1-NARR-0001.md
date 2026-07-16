---
id: GDC-L1-NARR-0001
title: Seek ludonarrative harmony — align what the game says with what it makes you do
layer: L1
domain: NARR
subdomain: ludonarrative
type: contextual
confidence: 4
status: canonical
tags:
  - narrative
  - ludonarrative
  - harmony
  - mechanics
  - theme
related:
  - GDC-L1-DESIGN-0001
  - GDC-L1-SYS-0002
  - GDC-L1-NARR-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-hocking-ludonarrative
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A game tells its story two ways at once — through non-interactive narrative (cutscenes,
> dialogue, text) and through its **mechanics** (what the player actually does) — and when the
> two contradict (**ludonarrative dissonance**), the contradiction undercuts both. Aim for
> harmony: what the player *does* should reinforce what the story *says*.

## Rationale
Players believe actions over words: a game whose story preaches mercy while its mechanics
reward slaughter teaches the mechanical lesson, and the narrative rings hollow
[S-hocking-ludonarrative]. Mechanics are a rhetorical channel — the systems *argue* for a way
of being in the world — so theme lands hardest when the systems embody it (a game about
isolation that mechanically isolates you, a game about greed that mechanically tempts and
punishes greed). This is DESIGN-0001 (the experience produced is what matters) applied to
narrative: the experience is produced by mechanics as much as by script, and it is authored
second-order through the systems (SYS-0002). Harmony makes the whole game say one coherent
thing; dissonance makes it argue with itself.

## Applies when
Any game with both authored narrative and meaningful mechanics — most story-driven action,
RPG, and adventure games. Sharpest wherever the story asserts a theme the mechanics could
contradict.

## Does not apply / Exceptions
Dissonance can be a *deliberate device*, not only a flaw: intentional ludonarrative tension
can make a point by juxtaposing what the player is told against what they are made to do,
for example to critique control or complicity. Abstract or mechanics-only games have little narrative to harmonize
with. And perfect harmony isn't always the goal — a small dissonance in service of fun (you
kill hundreds in a story about one death) is often accepted as convention. The rule is to make
dissonance a *choice*, not an accident.

## Implementation (kept separate from the principle)
Ask of your core mechanics: what do these systems *teach* and *reward*, and does it match the
story's theme? Where they conflict unintentionally, change the mechanic or the story so they
agree. Where you *want* tension, make it deliberate and legible so players read it as
commentary, not sloppiness. Design theme into systems (SYS-0002), not just into script.

## Disagreement
Harmony-by-default (mechanics and story should agree; dissonance is a flaw to fix) vs.
dissonance-as-device (intentional tension is a legitimate expressive tool). Both are held by
serious designers; the reconciliation is that *unintentional* dissonance is a defect while
*intentional*, legible dissonance can be art.

## Notes
The mechanics-meet-story principle of NARR; an application of DESIGN-0001 and SYS-0002 to
theme. Confidence 4. Its harmony-vs-deliberate-dissonance split is catalogued in
`index/DISAGREEMENTS.md`.
