---
id: GDC-L1-TEAM-0004
title: Make decisions shared, visible, and durable
layer: L1
domain: TEAM
subdomain: communication
type: contextual
confidence: 4
status: canonical
tags:
  - team
  - communication
  - documentation
  - alignment
  - decisions
related:
  - GDC-L1-VISION-0001
  - GDC-L1-TEAM-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-schell-artofgamedesign
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> A team can only align on decisions it can *see* and *remember*. Record settled decisions where
> everyone can find them, and make the reasoning visible — shared understanding, not private
> knowledge, is what keeps a distributed effort coherent. Undocumented decisions are lost
> decisions.

## Rationale
Coherence (VISION-0001) is a property of shared understanding, and understanding that lives only
in one person's head or in a hallway conversation doesn't scale past that moment
[S-schell-artofgamedesign]. Decisions get re-litigated, contradicted, or silently forgotten;
new members and future-you can't reconstruct *why* something is the way it is; and the same
debates recur. Making decisions visible and durable — written down, findable, with their
reasoning — turns the team's accumulated choices into a shared, persistent memory that keeps
everyone building the same game. It also enables honest disagreement to *resolve* rather than
recur, because a settled decision is recorded rather than perpetually reopened. (This
constitution — and its `STATUS.md` session tracker — is itself an instance of the principle.)

## Applies when
Any team with more than a couple of people, any project spanning enough time that people forget,
and especially distributed, async, or long-lived efforts. The larger and longer, the more it
matters.

## Does not apply / Exceptions
Over-documentation is a real cost — a team can drown in process and write docs no one reads, which
is its own failure. The bar is *decisions and their reasoning*, not every detail; capture what
future-you and new members genuinely need. Very small, co-located teams can hold much in shared
conversation, though even they drift without some durable record.

## Implementation (kept separate from the principle)
Record settled decisions and *why* somewhere findable (a design doc, a decision log, a tracker). Make the reasoning visible, not just the conclusion. Keep it lightweight enough that it's actually maintained. Revisit and update as decisions change — a stale record misleads.

## Disagreement
Documentation-heavy (durable, scalable, but risks process bloat and unread docs) vs. lightweight/
conversational (fast, low-overhead, but forgetful and hard to scale). The balance depends on team
size, distribution, and project length — more of both as those grow.

## Notes
Confidence 4.
