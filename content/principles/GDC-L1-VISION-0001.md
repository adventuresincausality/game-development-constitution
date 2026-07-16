---
id: GDC-L1-VISION-0001
title: Hold a clear creative vision — a north star that resolves decisions
layer: L1
domain: VISION
subdomain: vision-holding
type: contextual
confidence: 4
status: canonical
tags:
  - vision
  - creative-direction
  - coherence
  - north-star
related:
  - GDC-L1-DESIGN-0001
  - GDC-L1-VISION-0002
  - GDC-L1-VISION-0005
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-design-pillars
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A coherent game needs a clear creative **vision** — a shared, specific idea of the intended
> experience — that ambiguous decisions can be measured against. Without it, every contributor
> quietly builds a slightly different game, and the whole loses coherence.

## Rationale
A game is made of thousands of decisions by many people, and most of them are too small to
escalate — so unless everyone shares the same mental picture of what the game *is*, each person
resolves ambiguity toward their *own* version, and the results don't cohere
[S-design-pillars]. A clear vision is the shared reference that lets distributed decisions
point the same way: when someone asks "should the tone here be funny or grim? should this
system be deep or simple?", the vision answers. This is the creative counterpart of designing
for the intended experience (DESIGN-0001) — the vision is the *statement* of that intended
experience, held in common so the whole team can serve it. Coherence is not automatic; it is
the product of a shared, maintained vision.

## Applies when
Any project with more than one contributor, and any decision where "what should this be?" has
no obvious answer. The larger and longer the project, the more a shared vision matters.

## Does not apply / Exceptions
A solo developer holds the vision implicitly and may not need to externalize it (though even
solo devs drift without one). Highly exploratory early phases deliberately keep the vision
loose while searching for the game. And vision must not calcify into dogma that ignores what
playtesting reveals (DESIGN-0001) — it's a north star to steer by, updated as the game teaches
you what it wants to be.

## Implementation (kept separate from the principle)
Articulate the intended experience explicitly and share it widely. Distill it into pillars
(VISION-0002) and a communicable hook (VISION-0005) so it's usable, not just aspirational. Use
it to resolve ambiguous decisions, and revisit it when playtests reveal the real game. Give it
an owner (VISION-0004) so it stays coherent.

## Disagreement
Strong up-front vision (coherence, direction) vs. emergent/discovered vision (let the game
reveal itself through iteration) — auteur-led vs. discovery-led development. Most projects need
some of both: enough vision to align the team, enough openness to learn from the game. The risk
at each extreme is incoherence (no vision) or rigidity (frozen vision).

## Notes
The anchor of the VISION domain and the creative statement of DESIGN-0001 (the intended
experience). Made practical by pillars (VISION-0002) and communication (VISION-0005), owned via
VISION-0004. Confidence 4.
