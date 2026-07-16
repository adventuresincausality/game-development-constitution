---
id: GDC-L1-MP-0003
title: Fair matchmaking is core design — match by skill and connection
layer: L1
domain: MP
subdomain: matchmaking-design
type: contextual
confidence: 4
status: canonical
tags:
  - multiplayer
  - matchmaking
  - fairness
  - skill
  - flow
related:
  - GDC-L1-MP-0002
  - GDC-L1-DESIGN-0004
  - GDC-L1-BAL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-multiplayer-design
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Matchmaking *is* game design, not plumbing: who a player is matched with largely determines
> whether a match is fun. Match players by skill (for balanced, engaging contests) and by
> connection quality (for a fair, playable match). A great game with bad matchmaking delivers
> bad games.

## Rationale
For competitive and many cooperative games, the moment-to-moment experience is produced by the
match, and the match is produced by matchmaking — so a mismatch (a stomp in either direction, a
laggy opponent, a broken team) ruins an otherwise-great game [S-multiplayer-design]. Skill-based
matching keeps players in the flow channel (DESIGN-0004): fights that are neither trivial nor
hopeless. Connection-based matching keeps them *fair* (a player shouldn't lose to latency,
MP-0004). And matchmaking shapes behavior — repeated stomps breed frustration and toxicity
(MP-0002). Because it so directly governs the experience, matchmaking deserves first-class design
attention and iteration (informed by player feedback and telemetry), not a set-and-forget
formula.

## Applies when
Any multiplayer game that pairs or groups players — competitive matches, co-op sessions, ranked
ladders. Most critical in competitive games where fairness and balance are the point.

## Does not apply / Exceptions
Small-population games face a real tension: strict skill/connection matching can mean *no* match
(long queues), so they must trade match quality against wait time. Social/party play often
*wants* mismatched skill (friends playing together). And some designs deliberately avoid tight
matchmaking (open-world PvP, casual playlists). The principle is strongest for competitive
integrity; it bends for population and social goals.

## Implementation (kept separate from the principle)
Match on skill (a rating system) and connection (latency/region), balancing match quality against
queue time for your population. Avoid repeated stomps (they breed toxicity, MP-0002). Iterate the
system on player feedback and telemetry (PLAYTEST-0005) — matchmaking is never "done." Handle
parties and social play as a deliberate exception, not a bug.

## Disagreement
Tight skill/connection matching (fair, balanced matches — but longer queues, harder on small
populations) vs. loose/fast matching (short queues, but stomps and unfair matches). Also
skill-based matchmaking itself is debated in casual contexts (some players want to "pubstomp").
The balance depends on population size and whether the mode is competitive or casual.

## Notes
The matchmaking principle of MP; connects to flow (DESIGN-0004), fairness/balance (BAL-0002), and
community health (MP-0002 — good matches reduce toxicity). Confidence 4.
