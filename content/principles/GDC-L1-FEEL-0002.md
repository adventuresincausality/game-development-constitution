---
id: GDC-L1-FEEL-0002
title: Acknowledge input immediately; keep control latency perceptually tight
layer: L1
domain: FEEL
subdomain: responsiveness
type: objective
confidence: 5
status: canonical
tags:
  - responsiveness
  - latency
  - input
  - measure-dont-guess
related:
  - GDC-L1-FEEL-0001
  - GDC-L1-FEEL-0003
depends_on:
  - GDC-L1-FEEL-0001
conflicts_with:
  - GDC-L1-FEEL-0008
supersedes: []
sources:
  - S-swink-gamefeel
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> The game must register and visibly acknowledge the player's input immediately —
> ideally on the next frame. Keep end-to-end control latency low enough that the player
> reads response as continuous with intent, because delayed acknowledgment quickly erodes game feel.

## Rationale
Control feel lives in a tight loop: the player acts, the game responds, the player
reads the response and acts again. Swink describes roughly 100 ms as an important region
for instant-feeling response, while also emphasizing that acceptable latency varies with
the action and that continuity degrades across a wider range [S-swink-gamefeel]. Latency is
uniquely corrosive because it degrades every single interaction uniformly and cannot be
compensated for by more polish — a beautifully juiced game with sluggish input still
feels bad. Crucially, "acknowledge" is not the same as "resolve": the game can register
the input this frame and start showing *something* (a wind-up, a sound, a flash) even if
the full action takes longer to play out.

## Applies when
Every real-time control action: movement, jumping, firing, camera, menu navigation.
The bar is strictest for high-frequency, skill-expressive actions the player performs
constantly.

## Does not apply / Exceptions
Deliberate, communicated delays that are part of the fantasy (a heavy weapon's
wind-up, a charged attack) are not latency — see FEEL-0008. The distinction: latency is
the game being slow to *hear* you; commitment is the game taking time to *carry out*
what it already heard. The former is always a defect; the latter can be a feature. Also,
some competitive or simulation genres accept higher latency for other guarantees
(rollback vs. delay-based netcode tradeoffs), a networking concern rather than a feel
ideal.

## Implementation (kept separate from the principle)
Measure, don't guess: capture end-to-end latency (photograph or high-speed-capture the
button-to-pixel delay), not just engine frame time. Reduce it by processing input as
early in the frame as possible, avoiding multi-frame input pipelines, and giving
*instant* feedback on press even when the modeled action resolves later. On unavoidable
delays, mask them with immediate secondary feedback (sound, a tiny anticipation pose) so
the player still feels heard on frame one.

## Disagreement
The pure-responsiveness ideal is in tension with deliberately weighty, commitment-heavy
combat (see FEEL-0008). The reconciliation both sides accept: *acknowledgment* latency
should always be minimized; *resolution* time is a design choice. Even Dark Souls
registers your dodge press instantly and buffers it — it just resolves the roll on its
own animation schedule.

## Notes
Confidence 5: universal agreement across action-game practice, plus a measured
perceptual threshold. The `conflicts_with` link to FEEL-0008 is intentional and
productive — see that entry for the full responsiveness-vs-commitment treatment.
