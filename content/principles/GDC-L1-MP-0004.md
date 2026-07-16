---
id: GDC-L1-MP-0004
title: Trust the server, not the client — assume the network is hostile
layer: L1
domain: MP
subdomain: competitive
type: contextual
confidence: 4
status: canonical
tags:
  - multiplayer
  - netcode
  - authoritative-server
  - anti-cheat
  - lag-compensation
related:
  - GDC-L1-MP-0003
  - GDC-L1-ARCH-0006
  - GDC-L1-FEEL-0002
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-multiplayer-design
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> In networked multiplayer, treat the client as untrusted and the network as hostile. Make the
> **server authoritative** over game state, **never trust a client's claims**, and use lag
> compensation to keep play fair and responsive despite latency. Fairness and security are
> designed in, not bolted on.

## Rationale
A client runs on a machine the player controls, so anything the client asserts (I hit, I moved
there, I have this item) can be forged — which is why a server-authoritative model, where the
server validates and owns the truth, is the foundation of fair networked play
[S-multiplayer-design]. "Never trust the client" limits the cheats possible and protects the
competition (MP-0003's fairness). At the same time, latency is unavoidable, so responsiveness
(FEEL-0002) must be preserved through techniques like client prediction and server-side lag
compensation (rewinding to validate a shot against what the shooter saw) — balancing "fair to
the shooter" against "fair to the target." These are architectural commitments (authoritative
state, ARCH-0006) that shape the whole game and are extremely costly to retrofit.

## Applies when
Any real-time networked multiplayer, especially competitive games where cheating and latency
directly affect outcomes.

## Does not apply / Exceptions
Purely cooperative or low-stakes multiplayer may tolerate more client trust for simplicity
(peer-to-peer, host-authoritative) — the security bar scales with how much cheating would hurt.
Turn-based and asynchronous games have weaker real-time constraints. And there are genuine
tradeoffs in lag compensation (favoring shooter vs. target) with no perfect answer. Full
server-authority also has cost (server infrastructure) that small/co-op games may forgo.

## Implementation (kept separate from the principle)
Make the server authoritative over outcomes; validate, don't trust, client input. Use client
prediction + reconciliation for responsiveness (FEEL-0002) and lag compensation for fairness
across latencies. Decide the netcode model (authoritative state, ARCH-0006) *early* — it's
foundational. Layer anti-cheat, but rely first on the server-authority architecture. Test under
real latency, packet loss, and adversarial clients (QA).

## Disagreement
Server-authoritative (secure, fair, but infrastructure cost and latency-handling complexity) vs.
client-trusting/peer-to-peer (cheaper, simpler, but exploitable) — the security bar follows the
stakes. And within lag compensation, favor-the-shooter vs. favor-the-target is a genuine,
unresolved fairness tradeoff. Competitive games lean fully authoritative; casual co-op may not.

## Notes
The networking-reality principle of MP; an architectural commitment (authoritative state,
ARCH-0006) that also serves fairness (MP-0003) and responsiveness (FEEL-0002). Confidence 4.
