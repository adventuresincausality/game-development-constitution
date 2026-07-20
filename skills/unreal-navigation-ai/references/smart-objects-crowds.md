# Smart Objects and crowd avoidance

## Smart Object boundary

Smart Objects describe spatial interaction opportunities and reserve Slots. They do **not** contain the execution logic; each interactor implements the returned Behavior Definition.

Core pieces:

- SmartObject subsystem and spatial database;
- SmartObject component on the world actor;
- Smart Object Definition asset shared across instances;
- Slots with transforms, filters/tags, and behavior definitions;
- optional Persistent Collection influencing runtime-instance lifetime.

## Claim lifecycle

```text
Find matching objects -> choose result -> claim slot -> validate handle
-> navigate to slot -> use/occupy -> execute behavior -> release
```

Rules:

- Search with bounded area, activity tags, user tags, behavior class, and other filters.
- A search result is not a reservation; always validate the returned Claim Handle.
- Revalidate slot/location and object state before/after approach.
- Release on success, failure, abort, death, possession change, timeout, and task/state exit.
- Handle `OnSlotInvalidatedDelegate`; the object may disable/unload/destroy while claimed or occupied.
- Keep durable gameplay outcome outside the transient claim.

A Persistent Collection keeps included Smart Object runtime instances in the simulation even if source actors stream out. That is a lifetime decision, not permission to execute interaction against unloaded visuals/collision.

## RVO versus Detour Crowd

| System | Use | Constraint |
|---|---|---|
| RVO | CharacterMovement-local velocity avoidance, including without NavMesh | Character only, less configurable, can push agents outside NavMesh |
| Detour Crowd | path-corridor-aware crowd avoidance for Pawns | fixed Max Agents/Max Agent Radius and Crowd Manager tuning |

Epic states the two systems work independently and should be used exclusively. Do not enable both for one agent.

## Crowd tuning

Start without avoidance and prove paths. Then add one system and test:

- maximum simultaneous agents and radius support;
- consideration radius/neighbors and wall samples;
- corridor width, opposing flows, doors, corners, merges, and destinations;
- separation/collision resolution and movement-component interaction;
- agents leaving NavMesh, deadlocks, oscillation, and arrival congestion;
- CPU cost at worst population.

Crowd avoidance cannot solve a level whose doorway is narrower than the throughput the encounter requires. Fix geometry, lane design, destination distribution, or scheduling when appropriate.

## Smart Object + crowd pattern

Reserve before entering a congested approach, expose one Slot per true simultaneous user, move to a reachable slot transform, queue outside the interaction corridor, and release immediately on cancellation. Do not let every waiting agent continuously re-query every object.
