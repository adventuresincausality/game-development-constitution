---
id: GDC-L1-PROTO-0003
title: Greybox before you make it pretty — validate the design with placeholders
layer: L1
domain: PROTO
subdomain: greyboxing
type: contextual
confidence: 4
status: canonical
tags:
  - greyboxing
  - prototyping
  - placeholders
  - iteration
  - kill-your-darlings
related:
  - GDC-L1-PROTO-0001
  - GDC-L1-PROTO-0005
  - GDC-L1-FEEL-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-proto-vertical-slice
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Test mechanics and layouts in rough form — greybox geometry, placeholder art, ugly UI —
> before committing production assets. Validate that the *design* works while it's still
> cheap and unglamorous to change, and only then invest in making it beautiful.

## Rationale
Art is expensive to make and expensive to abandon — both in hours and in attachment. Once a
level is beautifully lit or a character lovingly animated, the team is far less willing to
rip it up even when the underlying design is wrong (which is why greyboxing and
kill-your-darlings, PROTO-0005, are siblings). Greyboxing keeps the question honest: does
this *space*, this *encounter*, this *mechanic* work, independent of how it looks?
[S-proto-vertical-slice] It also keeps iteration fast — moving grey blocks is minutes,
remaking finished art is weeks — so you get more loops (PROTO-0006) before anything is
locked. Pretty-first inverts the risk: you polish before you know if it's worth polishing.

## Applies when
Level design, encounter design, mechanic validation, UI flow — anywhere the design can be
judged before final assets exist. The default order: greybox → validate → polish.

## Does not apply / Exceptions
Some qualities genuinely require fidelity to evaluate. **Game feel and mood** partly live in
the art and audio — a movement system or a horror atmosphere can't be fully judged in flat
grey (this is the fidelity caveat that also qualifies PLAYTEST-0002, and it directly touches
FEEL-0001, where feel is the point). For those, prototype at enough fidelity to feel the
thing, while keeping everything *else* rough. Highly art-driven experiences may also need
earlier visual exploration.

## Implementation (kept separate from the principle)
Block out spaces and mechanics with primitive shapes and placeholder assets; lock the design
in greybox before art passes begin. Raise fidelity only where fidelity is what you're
testing (feel, mood). Keep placeholders obviously placeholder so nobody mistakes them for
final and gets attached. Validate with playtests (PLAYTEST-0001) on the greybox.

## Disagreement
Greybox-first is near-universal for mechanic- and layout-driven design; the honest exception
is feel/mood/art-driven work, where too-rough a prototype gives a false negative. The
reconciliation: greybox everything you *can* judge grey, and add fidelity only to the
specific quality that needs it.

## Notes
Keeps iteration cheap (PROTO-0006) and pairs with kill-your-darlings (PROTO-0005) — greybox
is partly a device to avoid getting attached too early. Its FEEL-0001 caveat is a genuine,
important limit. Confidence 4.
