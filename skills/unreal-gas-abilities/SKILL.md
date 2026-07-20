---
name: unreal-gas-abilities
description: Design, implement, network, and debug Gameplay Abilities with Unreal Engine 5.8 Gameplay Ability System. Use for Ability System Component ownership, granting, activation, input or Gameplay Event triggers, costs, cooldowns, instancing, net execution, prediction, targeting, Ability Tasks, cancellation, animation, passive abilities, or ability lifecycle failures.
---

# Unreal 5.8 GAS Abilities

## Establish the GAS boundary

Read [`references/architecture.md`](references/architecture.md) before implementation.

- Put the Ability System Component on the Pawn/Character when abilities should reset with
  that avatar.
- Put it on PlayerState when abilities, attributes, or cooldowns must survive pawn death or
  replacement; initialize Owner Actor and Avatar Actor correctly on server and owning client.
- Grant and remove abilities on authority. Store returned ability spec handles when later
  removal or mutation is required.
- Route attribute/effect work to `$unreal-gas-attributes-effects` and taxonomy/query work
  to `$unreal-gameplay-tags`.

## Execute the lifecycle

1. Define activation trigger, ownership, instancing policy, net execution policy, tags,
   cost, cooldown, targeting, and cancellation behavior.
2. Request activation through `TryActivateAbility`, a Gameplay Event, or the project's
   input-to-ability mapping. Do not call `CallActivateAbility` as a normal public entry.
3. Let GAS run activation checks. Add custom checks only for conditions not represented by
   tags, costs, cooldowns, or target requirements.
4. In `ActivateAbility`, commit at the intended point. If `CommitAbility` fails, end the
   ability without applying authoritative gameplay.
5. Use Ability Tasks for multi-frame waits, animation, input, targeting, and events.
6. Apply authoritative effects on the server or through a supported predicted path.
7. Handle success, cancel, interruption, failed targeting, and montage interruption.
8. Call `EndAbility` on every terminal path and undo non-effect side effects.

Read [`references/ability-lifecycle.md`](references/ability-lifecycle.md) for the ordered
flow, [`references/patterns.md`](references/patterns.md) for concrete ability shapes, and
[`references/networking.md`](references/networking.md) before choosing prediction.

## Required answer format

Return:

1. **ASC owner/avatar layout** and initialization points.
2. **Ability configuration**: grant path, trigger, instancing, net policy, tags, cost,
   cooldown, and targeting.
3. **Ordered activation graph or C++ flow**.
4. **Authority/prediction split** and rollback limitations.
5. **All terminal paths**, including cancellation cleanup.
6. **Failure tags/logging** and multiplayer verification.

Do not invent property names, Blueprint nodes, prediction guarantees, or security behavior.

## Hard rules

- Grant abilities only on the authoritative server.
- Do not put mutable execution state on a non-instanced ability.
- Do not assume local prediction makes arbitrary spawned actors or instant damage reversible.
- Do not use Gameplay Cues for authoritative gameplay; they are cosmetic and not reliably
  replicated.
- Do not omit `EndAbility`.
- Do not commit a cost/cooldown before the design's true commitment point by accident.
- Keep ability input identifiers separate from semantic ability and state tags.

Use [`references/troubleshooting.md`](references/troubleshooting.md) when activation fails,
fires twice, desynchronizes, ignores cancellation, or leaves an ability active. See
[`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
