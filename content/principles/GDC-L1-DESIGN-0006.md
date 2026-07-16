---
id: GDC-L1-DESIGN-0006
title: Give the player real agency — choices must produce legible consequences
layer: L1
domain: DESIGN
subdomain: decisions-and-agency
type: contextual
confidence: 4
status: canonical
tags:
  - agency
  - meaningful-choice
  - consequences
  - player-centric
related:
  - GDC-L1-DESIGN-0002
  - GDC-L1-DESIGN-0001
depends_on:
  - GDC-L1-DESIGN-0001
conflicts_with: []
supersedes: []
sources:
  - S-meier-interesting-decisions
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Agency is the feeling that your choices author your experience. For it to be real, the
> player's choices must produce consequences that are *legible* — perceivable and
> attributable to the choice. A choice whose effect the player cannot see is, to them,
> not a choice at all.

## Rationale
Where DESIGN-0002 concerns the quality of an individual decision (tradeoffs, no dominant
option), this concerns agency at the level of the whole experience: does the player feel
authorship? Consequences drive that feeling, but only if the player can *perceive* them
and *attribute* them to their action [S-meier-interesting-decisions]. Invisible or
delayed-beyond-recognition consequences read as randomness or railroading; the player
stops believing their input matters and disengages (ties to DESIGN-0001 — judge by the
experience produced). Legibility is the hinge: the same branching system feels powerful
if consequences are readable and empty if they aren't.

## Applies when
Systems and narratives that promise player authorship: branching stories, faction and
reputation systems, build/character choices, strategic decisions, emergent sandboxes,
and any "your choices matter" pitch.

## Does not apply / Exceptions
Strongly-authored, linear experiences deliberately trade agency for a crafted arc, and
that is a legitimate design — not every game should maximize agency. The *illusion* of
choice is also a real and defensible tool: narrative games often present choices whose
mechanical outcomes converge, trading true branching for emotional agency (the player
felt the weight of choosing) at sustainable production cost. The line to avoid is the
*unsatisfying* illusion — where players notice their choices are hollow and feel
cheated.

## Implementation (kept separate from the principle)
Close the loop between choice and visible outcome: acknowledge choices promptly, and
surface their consequences where the player can connect cause to effect (immediate
feedback for tactical choices; callbacks and changed world-state for narrative ones).
Prefer fewer choices with real, readable consequences over many with imperceptible ones.
When using converging/illusory choice for production reasons, protect the *feeling* of
consequence and avoid exposing the seams.

## Disagreement
Agency-maximalists (systemic/immersive-sim tradition) hold that real, simulated
consequence is worth its high cost and that illusory choice ultimately betrays players.
Authored-experience designers hold that a curated, linear arc — or well-hidden illusion
of choice — often delivers a better and more sustainable experience than sprawling real
branching. Both are right for different games; the deciding factor is whether *authorship*
or *authored arc* is the promise you're making to the player. Keep the promise you make.

## Notes
Pairs with DESIGN-0002 (interesting decisions) as the two halves of choice design:
0002 = are the options interesting; 0006 = does choosing feel consequential. Confidence
4: broad agreement on the legibility requirement; typed `contextual` for the legitimate
linear-authorship and illusion-of-choice exceptions.
