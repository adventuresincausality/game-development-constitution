---
id: GDC-L1-UX-0003
title: Make the interface communicate — readability, hierarchy, and feedback
layer: L1
domain: UX
subdomain: ui-design
type: objective
confidence: 4
status: canonical
tags:
  - ux
  - ui
  - readability
  - information-hierarchy
  - feedback
  - hud
related:
  - GDC-L1-FEEL-0004
  - GDC-L1-SYS-0006
  - GDC-L1-LEVEL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-hodent-gamers-brain
  - S-norman-doet
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> The interface exists to answer the player's questions at a glance: *what's happening, what
> can I do, what just happened, what matters most?* Use visual hierarchy — size, contrast,
> position, color, motion — to rank importance, and give clear feedback for every action. If
> players have to squint, hunt, or guess, the UI has failed its job.

## Rationale
An interface is a communication channel, and its quality is measured by how quickly and
correctly the player reads it, not by how it looks in a screenshot [S-hodent-gamers-brain].
The eye and brain triage by salience — bright, big, high-contrast, moving things get
attention first — so a UI that doesn't *rank* its elements forces the player to search, which
costs attention that should be on the game (UX-0002). Feedback closes the loop Norman
describes: every action needs a visible, immediate confirmation, or the player can't tell if
it worked [S-norman-doet] (the UI expression of FEEL-0004). Good UI makes the important
legible instantly and the unimportant recede.

## Applies when
All HUD, menu, and interface design, and any moment the game must convey state,
availability, or the result of an action.

## Does not apply / Exceptions
Deliberate minimalism and diegetic/no-HUD design are valid stylistic choices (immersion,
tension, art) — but they don't exempt the game from *communicating*; they just move the
communication into the world (a wounded character's limp instead of a health bar). Some
information is intentionally withheld for tension or discovery (transparency⇄mystery). The
rule is "communicate what the player needs, clearly," not "put everything on a HUD."

## Implementation (kept separate from the principle)
Establish a clear hierarchy: the most important information is the most salient; secondary
detail is quieter. Never encode critical information in color alone (accessibility, UX-0006).
Give immediate, unambiguous feedback for actions and state changes. Test readability with
real players at real speed and viewing distance — if they miss it, redesign the presentation,
not the player. Reduce clutter; every element competes for attention.

## Disagreement
Rich/informative HUD (clarity, low friction) vs. minimal/diegetic UI (immersion, art) is a
stylistic split — but both camps agree the game must *communicate*, differing on *where* and
*how much*. The debate is presentation, not whether to inform.

## Notes
The UI face of legibility — SYS-0006 (systems), LEVEL-0002 (space), and FEEL-0004 (feedback)
all meet here in the interface layer. Confidence 4.
