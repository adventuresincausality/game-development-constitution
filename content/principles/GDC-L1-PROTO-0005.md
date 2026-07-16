---
id: GDC-L1-PROTO-0005
title: Kill your darlings — cut what doesn't serve the game, however attached you are
layer: L1
domain: PROTO
subdomain: kill-your-darlings
type: contextual
confidence: 4
status: canonical
tags:
  - kill-your-darlings
  - scope
  - elegance
  - cutting
  - iteration
related:
  - GDC-L1-DESIGN-0007
  - GDC-L1-SYS-0005
  - GDC-L1-PROTO-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-kill-your-darlings
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Be willing to cut features, systems, and content you love when they don't serve the game.
> Emotional attachment and sunk cost are not design arguments. The discipline to remove a
> beloved-but-not-working element is often what separates a focused game from a bloated one.

## Rationale
The ideas a team is most attached to are frequently the hardest to evaluate honestly — pride
of authorship and the hours already spent both argue *for* keeping something regardless of
whether it earns its place [S-kill-your-darlings]. But a game is not the sum of its clever
parts; it's a focused whole, and every element that doesn't pull its weight dilutes the ones
that do (the elegance argument, DESIGN-0007, and orthogonality, SYS-0005). "Killing a
darling" — a mechanic you invented, a level you polished, a system you championed — hurts
precisely because it was good in isolation; the point is that *good in isolation* isn't the
bar. Cutting it usually strengthens the whole and sharpens what remains.

## Applies when
Scope decisions, feature reviews, and any moment a beloved element isn't working or is
pulling the design out of focus. Especially during production crunch and when the game feels
bloated or unfocused.

## Does not apply / Exceptions
"Kill your darlings" is not "cut everything distinctive." A game's boldest, most personal,
most *load-bearing* ideas are often its darlings *and* its reason to exist — reflexively
sanding off everything you love produces a safe, characterless game (a real risk if the
maxim is over-applied). The test is service to the game, not attachment: cut darlings that
don't serve; fight for darlings that do. Distinguish "this is precious and not working" from
"this is precious and central."

## Implementation (kept separate from the principle)
Judge each element by its contribution to the whole, not by effort spent or affection felt
(ignore sunk cost). Greybox and playtest to get honest evidence (PROTO-0003, PLAYTEST-0001)
before defending or cutting. When cutting hurts, that's normal — save the idea in a "cut
features" file for a future game rather than forcing it into this one. Prefer cutting to
propping up: a mechanic that needs three other mechanics to justify it is often a darling.

## Disagreement
The real tension is *what* to cut: ruthless-cutting culture (focus above all, cut freely)
vs. protect-the-vision culture (a game's soul lives in its risky, beloved, distinctive
parts). Both fail at the extreme — one into blandness, the other into bloat. The shared rule
is "serve the game," and the judgment call is which darlings do.

## Notes
The production/scope face of elegance (DESIGN-0007) and orthogonality (SYS-0005), and a
sibling of greyboxing (PROTO-0003, which partly exists so you don't get attached too early).
Confidence 4.
