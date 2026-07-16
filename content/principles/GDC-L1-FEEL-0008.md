---
id: GDC-L1-FEEL-0008
title: Place the game deliberately on the responsiveness–commitment axis
layer: L1
domain: FEEL
subdomain: responsiveness
type: contextual
confidence: 4
status: canonical
tags:
  - responsiveness
  - commitment
  - weight
  - combat
  - risk-reward
related:
  - GDC-L1-FEEL-0001
  - GDC-L1-FEEL-0007
  - GDC-L1-ANIM-0002
  - GDC-L1-ANIM-0004
depends_on:
  - GDC-L1-FEEL-0001
conflicts_with:
  - GDC-L1-FEEL-0002
supersedes: []
sources:
  - S-swink-gamefeel
  - S-cooper-game-anim
first_added: 2026-07-14
last_verified: 2026-07-15
---

## Statement
> How long an action takes to *resolve* once committed — its wind-up, follow-through,
> and cancelability — is a primary design lever, not a bug to minimize. Choose the
> game's position on the axis from "instantly cancelable and snappy" to "fully committed
> and weighty" deliberately, to serve the intended fantasy and risk/reward.

## Rationale
Responsiveness (FEEL-0002) says the game must *hear* you instantly. This principle is
about how fast it *acts* — and here more speed is not always better. Commitment —
animations that must play out, actions you can't cancel — is what creates weight,
consequence, and readable risk/reward, and it is implemented as **animation priority**:
an action holds control until a designated frame, a lever the animator controls
[S-cooper-game-anim]. Deliberate attack and dodge commitment (as in weapon-based
souls-likes, or Monster Hunter's extreme swing commitment) is core to the tension and
mastery of such combat. That "heavy" feel is
*designed*, not a latency defect: the player is heard instantly (input is registered and
buffered) but the modeled action honors its own timing. Position on this axis defines
whole combat identities: twitch-cancelable character-action vs. deliberate weapon-based
souls-likes.

## Applies when
Any game with meaningful action timing, especially combat, and anywhere risk/reward
should come from committing to actions. The choice sets the game's core rhythm.

## Does not apply / Exceptions
Games whose fantasy is pure speed and flow (fast movement shooters, hyper-agile
character-action) legitimately sit at the fully-responsive end and minimize commitment.
There is no universally correct point — only a correct point *for a given intended feel*.

## Implementation (kept separate from the principle)
Separate the two latencies explicitly: always acknowledge input on frame one (buffer it,
show anticipation), then resolve on the action's designed schedule. Tune wind-up,
active, recovery, and cancel windows as first-class combat parameters. Use committed
recovery frames as the currency of risk (whiffing a heavy attack should hurt). If
players report the game feeling "laggy," diagnose whether it's true acknowledgment
latency (a defect — fix per FEEL-0002) or commitment they're reading as lag (a feature —
communicate it better via anticipation and telegraphing).

## Disagreement
This is the domain's central productive tension, and it is why this entry
`conflicts_with` FEEL-0002:

- **Responsiveness-maximalist:** every frame of delay is an enemy; the avatar should be
  a frictionless extension of the player (platformers, twitch shooters, Devil May
  Cry–style flow).
- **Commitment-maximalist:** weight, consequence, and deliberate pacing require actions
  that can't be instantly taken back (Souls games, Monster Hunter, fighting-game
  recovery frames).

**Reconciliation (both accept):** the conflict dissolves once you split *acknowledgment*
latency from *resolution* time. Acknowledgment should always be near-instant (FEEL-0002
holds absolutely); resolution time is the dial this principle governs. A great weighty
game and a great snappy game both register your input on frame one — they differ only in
how long the world takes to answer.

## Notes
The `conflicts_with: FEEL-0002` edge is deliberate and is the pilot's demonstration of
how the constitution preserves and *resolves* disagreement rather than flattening it. Its
animation-domain expressions are ANIM-0002 (responsiveness beats fidelity / cancel windows)
and ANIM-0004 (root-motion vs. code-driven). Confidence 4. *(2026-07-15: the weak community
source was retired and replaced with Cooper's* Game Anim*, a proper primary for the
animation-priority/commitment mechanism.)*
