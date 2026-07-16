---
id: GDC-L1-SYS-0002
title: Design second-order — author the rules, not the outcomes
layer: L1
domain: SYS
subdomain: systems-thinking
type: objective
confidence: 5
status: canonical
tags:
  - systems-thinking
  - second-order-design
  - emergence
  - mda
related:
  - GDC-L1-DESIGN-0001
  - GDC-L1-SYS-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-salen-zimmerman-rulesofplay
  - S-hunicke-mda
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A game designer cannot directly design play — only the rules that give rise to it.
> Treat the *system* as the object you author and the player's experience as a
> second-order effect you steer indirectly, by tuning rules, incentives, and feedback and
> then observing what emerges.

## Rationale
Designers work at the mechanics end of the chain; players receive the aesthetics end, and
the dynamics in between are produced by play, not authored directly [S-hunicke-mda]. This
is the "second-order design problem": experience is created only indirectly
[S-salen-zimmerman-rulesofplay]. The practical consequence is humility and method — you
propose rules, the system and its players dispose, and you learn what you actually built
by watching it run (which is why this depends on judging by the experience produced,
DESIGN-0001). Designers who forget this try to script outcomes and are repeatedly
surprised when players route around their intentions.

## Applies when
All systemic design: rules, economies, AI, progression, multiplayer. The more systemic
and less scripted the game, the more this dominates.

## Does not apply / Exceptions
Not an exception so much as a boundary: the more heavily *authored* and linear a moment
is (a scripted set-piece, a cutscene), the more directly the designer controls the
experience and the less second-order it is. Even then, the player's *response* remains
second-order — you author the stimulus, not the feeling.

## Implementation (kept separate from the principle)
Design incentives and constraints, then playtest to discover the actual dynamics; expect
surprises and treat them as data. Build tunable systems with exposed parameters so you can
steer emergent behavior without rewriting. Ask "what will players do with this?" not "what
do I want players to do?" Instrument and observe (telemetry, playtests) because you cannot
deduce second-order behavior from first principles alone.

## Disagreement
Foundational and essentially uncontested as a description of how design works; it is the
conceptual basis of systemic and emergent design. No credible counter-position.

## Notes
The theoretical backbone of the whole SYS domain and a direct partner to DESIGN-0001.
Confidence 5.
