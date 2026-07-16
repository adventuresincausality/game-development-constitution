---
id: GDC-L1-SYS-0004
title: Know your feedback loops — positive loops amplify, negative loops stabilize
layer: L1
domain: SYS
subdomain: feedback-loops
type: objective
confidence: 4
status: canonical
tags:
  - feedback-loops
  - balance
  - pacing
  - systems-thinking
related:
  - GDC-L1-DESIGN-0004
  - GDC-L1-SYS-0008
  - GDC-L1-SYS-0007
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-adams-dormans-mechanics
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Every dynamic system contains feedback loops, and you must know which ones yours
> creates. **Positive (reinforcing)** loops amplify a lead — they accelerate outcomes,
> snowball advantages, and shorten games. **Negative (balancing)** loops resist change —
> they stabilize, enable comebacks, and prolong games. Deploy each deliberately; an
> unnoticed loop will shape your game whether you designed it or not.

## Rationale
Feedback loops are the deep structure that determines a game's pacing and fairness
[S-adams-dormans-mechanics]. A positive loop (the winner gains resources that help them
win more) makes outcomes decisive and can feel thrilling — or hopeless, once a lead is
insurmountable. A negative loop (trailing players get help, leaders get friction) keeps
everyone in contention and games close — or can feel like it punishes skill and rewards
mediocrity. Neither is good or bad in itself; each is a tool with a characteristic effect
on drama and duration. The failure is having them by accident: runaway snowballs and
mushy stalemates are usually *unintended* feedback loops.

## Applies when
Any system with accumulating state: economies, scoring, combat, progression, and
especially competitive multiplayer where loop effects are felt most sharply.

## Does not apply / Exceptions
No exception to *understanding* your loops; the contextual part is *how much* of each to
use. High-positive-feedback designs (decisive, snowbally) suit short, dramatic matches;
high-negative-feedback designs (catch-up, rubber-banding) suit accessible, everyone-stays-
in-it experiences. Purely authored/linear content has weaker loop dynamics.

## Implementation (kept separate from the principle)
Diagram resource flows and mark each loop's polarity (economy-modeling tools make this
visible). Use positive feedback to resolve games that would otherwise stall; use negative
feedback to prevent early leads from becoming boring runaways — but keep catch-up
*legible* and skill-respecting so it doesn't feel like theft. Test late-game states
specifically: is a modest lead already unbeatable (too much positive), or is skill
irrelevant to the finish (too much negative)?

## Disagreement
Real and mostly about negative feedback / catch-up mechanics: competitive purists resist
rubber-banding because it dampens skill expression; accessibility- and drama-focused
designers favor it because it keeps all players engaged to the end. Both are right for
their goals; the deciding question is whether the design prioritizes *skill differentiation*
or *sustained tension for everyone*.

## Notes
Closely tied to SYS-0008 (feedback loops live inside the internal economy) and SYS-0007
(positive loops are what make optimization snowball). Bridges to DESIGN-0004 (loops shape
the difficulty/flow curve). Confidence 4.
