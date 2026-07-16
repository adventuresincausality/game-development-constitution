---
id: GDC-L1-DESIGN-0007
title: Prize elegance — maximize meaningful gameplay per rule, and cut what doesn't earn its complexity
layer: L1
domain: DESIGN
subdomain: elegance-and-depth
type: stylistic
confidence: 3
status: canonical
tags:
  - elegance
  - depth
  - complexity
  - scope-discipline
  - emergence
related:
  - GDC-L1-DESIGN-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Favor elegance: get the most meaningful gameplay from the fewest rules. Every mechanic
> carries a cost — to learn, to build, to balance, to explain — so a mechanic must earn
> that cost in gameplay value. When a rule doesn't pull its weight, cut it rather than
> keep it.

## Rationale
Complexity is a budget spent on all sides: the player's cognitive load, the team's
build and balance effort, and the surface area for bugs and exploits. Elegant systems
spend that budget efficiently — a few rules that *interact* generate far more gameplay
than the same number of rules bolted on independently, which is why emergence is the
elegant designer's favorite tool (a small rule set, a large possibility space; see
DESIGN-0005). Cutting a weak mechanic usually *strengthens* the whole, because it lowers
the cost of entry and sharpens what remains. "What can I remove and lose nothing?" is
often a more productive question than "what can I add?"

## Applies when
System and mechanics design, and scope decisions throughout production. Especially
valuable when a design feels bloated, hard to teach, or hard to balance.

## Does not apply / Exceptions
Elegance is a value, not a law — some beloved games are deliberately *baroque*, and
their richness, maximalism, and abundance of interacting systems are the point (sprawling
sims, deep RPGs, systemic sandboxes, "kitchen-sink" designs). There, more systems create
more emergent stories, and aggressive minimalism would drain the appeal. Elegance also
trades against expressive breadth and content variety. This is why it is typed
`stylistic`: reasonable, excellent designers deliberately choose the opposite.

## Implementation (kept separate from the principle)
Pressure-test each mechanic: what does it add that nothing else does, and what would
break if it were removed? Prefer mechanics that interact with existing systems (multiply
value) over isolated ones (add value linearly). Periodically run a subtractive pass —
"kill your darlings" — and cut features that don't earn their complexity. Watch for
mechanics that exist only to prop up other mechanics; collapsing them often simplifies
and improves.

## Disagreement
Genuine, and it is a taste axis, not a correctness one: **minimalist/elegant** design
(few deep systems, ruthless cutting) vs. **maximalist/baroque** design (many interacting
systems, richness through abundance). Both have produced masterpieces. The choice should
follow the game's identity and the audience's appetite for complexity, not a universal
preference — which is exactly why this is `stylistic`.

## Notes
The counterweight to feature creep and a close ally of DESIGN-0005 (depth from simple
rules). Confidence 3 and typed `stylistic`: the *reasoning* is strong, but whether to
prize elegance over richness is a legitimate matter of design taste, so it must not be
stated as an objective rule.
