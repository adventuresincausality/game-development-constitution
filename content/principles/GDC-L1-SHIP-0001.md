---
id: GDC-L1-SHIP-0001
title: You get one first impression — the launch state shapes the game's reception
layer: L1
domain: SHIP
subdomain: launch-readiness
type: contextual
confidence: 4
status: canonical
tags:
  - shipping
  - launch
  - first-impression
  - stability
  - reputation
related:
  - GDC-L1-QA-0004
  - GDC-L1-UX-0001
  - GDC-L1-PROD-0006
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-scope-production
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A game gets one launch, and its state at that moment — stability, performance, onboarding, and
> polish of the first hour — disproportionately shapes reviews, word of mouth, and long-term
> reception. First impressions are sticky and costly to reverse. Treat launch readiness as a
> deliberate goal, not the moment you happen to run out of time.

## Rationale
Launch is when the largest audience arrives at once, forms opinions fast, and broadcasts them
(reviews, streams, social) — and those early opinions harden into the game's reputation, which is
extremely hard to change later even if the game improves [S-scope-production]. A broken, sluggish,
or confusing launch (crashes, bad performance on common hardware — QA-0004, a baffling first hour —
UX-0001) squanders the one moment of peak attention, while a solid launch compounds into momentum.
This raises the stakes on finishing well (PROD-0006), on testing under real conditions before
release (QA-0004), and on the onboarding experience specifically (UX-0001), because the first hour
is what most players judge on. "We'll patch it later" underestimates how much the *first* impression
persists.

## Applies when
Any release to a real audience — launch especially, but also major updates, betas, and demos that
create first impressions.

## Does not apply / Exceptions
Early-access and live-service models deliberately launch *unfinished* — but they set the
expectation explicitly and still must nail the first impression *for what they claim to be*
(a rough early-access launch that oversells itself still burns trust). And no launch is
bug-free; the bar is "good enough that the first impression is positive," not "perfect." Small or
niche launches carry lower stakes but the same logic.

## Implementation (kept separate from the principle)
Define launch-readiness criteria (stability, performance on target hardware — QA-0004, a strong
first hour — UX-0001) and hold the release to them; if you can't hit them, cut scope or delay
rather than launch broken (PROD-0001/0006). Prioritize the first-hour experience and common-case
stability. Prepare day-one support (SHIP-0004). Set honest expectations for what the launch *is*
(especially for early access).

## Disagreement
Ship-when-ready/delay-for-quality (protect the first impression — but cost of delay, missed windows)
vs. ship-on-date-and-patch (hit the market/marketing window — but risk a bad first impression that
patches can't fully undo). Live-service blurs this. The stakes of the first impression push toward
readiness, weighed against real business timing.

## Notes
The launch-stakes principle of SHIP; raises the bar on finishing (PROD-0006), real-conditions
testing (QA-0004), and onboarding (UX-0001). Confidence 4.
