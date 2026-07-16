---
id: GDC-L1-TEAM-0003
title: Run blameless postmortems — treat failure as a system to fix
layer: L1
domain: TEAM
subdomain: conflict
type: contextual
confidence: 4
status: canonical
tags:
  - team
  - postmortem
  - blameless
  - learning
  - culture
related:
  - GDC-L1-TEAM-0001
  - GDC-L1-DESIGN-0001
  - GDC-L1-PLAYTEST-0001
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-google-sre-postmortem
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> When something goes wrong, focus on understanding the *contributing causes* and improving the
> *system*, not on assigning fault. **Blameless postmortems** surface the real, fixable causes
> because people can be honest; blame drives problems underground, where they repeat.

## Rationale
Most failures are produced by systems and circumstances, not villains, and the fastest way to
*hide* a failure's true causes is to punish the person nearest to it [S-google-sre-postmortem].
When blame is the response, people conceal mistakes, omit the awkward details, and defend
themselves instead of explaining what actually happened — so the organization never learns, and
the same failure recurs. A blameless stance flips this: by treating an incident as a
learning opportunity about the system ("what let this happen, and how do we make it not happen
again?"), you get the honesty required to actually fix root causes. It's the team-process form of
the same commitment that runs through the whole constitution — learn from what *actually
happened* (DESIGN-0001, PLAYTEST-0001), not from what should have.

## Applies when
After any significant failure, incident, bug, missed milestone, or bad launch — and as a standing
cultural default for how the team responds to things going wrong.

## Does not apply / Exceptions
Blameless is about *learning*, not the absence of accountability — repeated negligence or bad-faith
behavior is a real management issue, handled directly and (usually) privately. And blameless does
not mean consequence-free for the *system*: the point is to change the process so the failure
can't recur. The invariant is: attack the cause, not the person, so the truth comes out.

## Implementation (kept separate from the principle)
After a failure, ask "what contributing causes let this happen?" rather than "whose fault was
it?" Write it down and change the system (process, tooling, checks) so it can't recur. Make it
safe to report problems early (TEAM-0001) by responding to bad news with curiosity, not
punishment. Separate the incident-learning from any genuine personnel issue (handle the latter
directly and privately, TEAM-0002).

## Disagreement
Little serious dissent in modern practice; the tension is only the misread that "blameless" means
"no accountability." Healthy cultures keep accountability for *behavior* while keeping the
*learning* process blameless — the two aren't in conflict.

## Notes
The failure-learning practice built on psychological safety (TEAM-0001); the team-process echo of
"judge by what actually happened" (DESIGN-0001, PLAYTEST-0001). Confidence 4.
