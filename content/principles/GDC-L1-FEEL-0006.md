---
id: GDC-L1-FEEL-0006
title: Use camera motion and screenshake to convey force — but dose it and let players control it
layer: L1
domain: FEEL
subdomain: camera
type: contextual
confidence: 4
status: canonical
tags:
  - juice
  - camera
  - screenshake
  - feedback
  - accessibility
related:
  - GDC-L1-FEEL-0004
  - GDC-L1-FEEL-0005
depends_on:
  - GDC-L1-FEEL-0004
conflicts_with: []
supersedes: []
sources:
  - S-nijman-screenshake
  - S-jonasson-purho-juice
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Move the camera to sell force — screenshake, kicks, punch-in, recoil — because the
> camera is a sense the player inhabits, so shaking it makes impacts physical. But dose
> it carefully and expose intensity as a player-controllable setting: unbounded shake
> becomes noise, harms readability, and excludes some players.

## Rationale
The camera is the player's eyes; perturbing it transfers force directly into their
perception, which is why screenshake is one of the most effective and widely-cited juice
techniques [S-nijman-screenshake] [S-jonasson-purho-juice]. But the same power makes it
dangerous:
excessive or constant shake destroys the player's ability to read the game state,
induces motion discomfort or nausea, and can trigger issues for photosensitive and
vestibular-sensitive players. Its strength and its risk are the same property, so it must
be *dosed* and *optional*.

## Applies when
Impacts, explosions, weapon recoil, heavy landings, big events — moments that should feel
physically forceful. Small, brief kicks scaled to event magnitude are the high-value
default.

## Does not apply / Exceptions
Precision-reading contexts (competitive aiming, careful platforming, strategy) want
minimal camera disturbance so state stays legible. Calm or contemplative aesthetics avoid
it. And it is subject to strong accessibility limits — always shippable-off.

## Implementation (kept separate from the principle)
Scale amplitude and duration to event importance; decay quickly; cap the maximum so no
combination of events can stack into an unreadable frame. Prefer directional kicks
(shake *away* from the impact) over random jitter for events with a clear source. Provide
an explicit "screen shake" intensity slider (including off) — now an expected
accessibility option. Combine with hitstop (FEEL-0005) and the other juice layers rather
than relying on shake alone.

## Disagreement
Pro-juice practitioners treat screenshake as near-free game feel; the "resist the urge"
counter-camp warns it is the most over-applied juice technique and the fastest route to
sensory overload and unreadability. Both agree on the resolution captured here: dose to
the event, cap the total, and make it optional. The remaining difference is a stylistic
dial (how punchy the house style is), not a dispute about the guardrails.

## Notes
Confidence 4: effectiveness is well-established; typed `contextual` and held below 5 by
the genuine readability/accessibility exceptions. The player-control-and-cap clause is
the part practitioners most often skip and later regret.
