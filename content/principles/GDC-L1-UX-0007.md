---
id: GDC-L1-UX-0007
title: Minimize friction between the player and the fun
layer: L1
domain: UX
subdomain: ui-design
type: contextual
confidence: 4
status: canonical
tags:
  - ux
  - friction
  - player-respect
  - flow
  - core-loop
related:
  - GDC-L1-SYS-0001
  - GDC-L1-PROG-0004
  - GDC-L1-FEEL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-hodent-gamers-brain
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Every menu, load screen, unskippable cutscene, confirmation dialog, and scrap of busywork
> between the player and the core loop is a tax on engagement. Ruthlessly reduce friction on
> the path to play. Respect the player's time and attention — get them to the fun and keep
> them in it.

## Rationale
Engagement is fragile: friction on the way to the fun (long loads, menu mazes, forced
tutorials, needless confirmations, grindy setup) leaks motivation and gives the player exits
[S-hodent-gamers-brain]. The core loop (SYS-0001) is where the value lives, so anything that
delays, interrupts, or clutters the route to it is spending the player's goodwill for no
gameplay return. Minimizing friction is partly respect (PROG-0004 — don't waste the player's
time) and partly practical (a game that's quick to get into and stay in gets played more, and
loses fewer players at each seam). Fast, clean access to play is invisible when done well and
corrosive when ignored.

## Applies when
Boot-to-play flow, menu and inventory design, mission setup, retries and respawns, and any
repeated action on the path to the core loop.

## Does not apply / Exceptions
Not all friction is bad — **deliberate friction** creates weight, ritual, tension, and
meaning: a Souls bonfire's deliberate rest, inventory management *as* gameplay, a slow reload
that raises stakes, a save ritual that makes the world feel consequential. The distinction is
*meaningful* friction (part of the intended experience) vs. *incidental* friction (accidental
tax with no payoff). Cut the incidental; keep the meaningful. Removing all friction can also
flatten pacing (LEVEL-0003 needs rests).

## Implementation (kept separate from the principle)
Audit the path from launch to play and from failure to retry; cut or streamline every step
that isn't earning its place. Reduce load times (or mask them), skip or shorten repeated
cutscenes, trim confirmation dialogs to the genuinely destructive actions, and get respawns
fast. Ask of each bit of friction: does this add to the experience, or just delay it? Keep
the meaningful, cut the rest.

## Disagreement
Frictionless design (respect time, maximize flow, remove obstacles) vs. meaningful-friction
design (weight, ritual, stakes, and downtime as part of the experience). Both are right about
different friction; the craft is telling incidental tax from intentional texture. Hyper-casual
leans frictionless; immersive and deliberate games keep chosen friction.

## Notes
The engagement/respect principle that ties UX to the core loop (SYS-0001) and player respect
(PROG-0004); its meaningful-friction exception connects to pacing (LEVEL-0003) and weight
(FEEL-0008). Confidence 4.
