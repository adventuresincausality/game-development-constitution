---
name: unreal-animation-montages
description: Design, play, branch, layer, cancel, replicate, and debug Animation Montages in Unreal Engine 5.8. Use for attacks, dodges, reloads, interactions, abilities, Slots and Slot Groups, Montage Sections, combos, loops, Anim Notifies and Notify States, branching points, cancel windows, root motion, GAS Play Montage and Wait, interruptions, network playback, child montages, or gameplay animation timing.
---

# Unreal 5.8 Animation Montages

## Ownership boundary

This skill owns authored action playback, Slots, Sections, notify-timed windows, branching, and
interruption. Route final pose composition to
[`unreal-animation-blending`](../unreal-animation-blending/SKILL.md), authoritative Character
displacement and prediction to [`unreal-character-movement`](../unreal-character-movement/SKILL.md),
and ability activation/cost/cooldown ownership to
[`unreal-gas-abilities`](../unreal-gas-abilities/SKILL.md).

## Use Montages for bounded actions

Read [`references/action-selector.md`](references/action-selector.md).

Use a Montage when gameplay starts a discrete authored action and needs explicit playback,
sections, events, interruption, or root-motion control. Keep persistent locomotion in a State
Machine, Blend Space, or Motion Matching system. A Montage inserts an action through an AnimGraph
Slot; it does not replace the underlying gameplay state machine.

## Execute

1. Define action authority, eligibility, commitment, cancel, completion, and interruption states.
2. Choose full-body or regional layering and create the matching Slot/Slot Group path.
3. Build named Sections around semantic phases; define default and runtime transitions.
4. Add Notifies/Notify States only for events that must follow animation time.
5. Choose playback API: gameplay/AnimInstance, Character proxy node, or GAS Ability Task.
6. Define root-motion ownership and movement/collision behavior for every section.
7. Implement all completion, blend-out, interruption, cancellation, and owner-destruction exits.
8. Test network roles, variable frame rates, late interruption, and section boundaries.

Load only what applies:

- [`references/asset-sections-and-slots.md`](references/asset-sections-and-slots.md)
- [`references/playback-and-lifecycle.md`](references/playback-and-lifecycle.md)
- [`references/notifies-and-gameplay-windows.md`](references/notifies-and-gameplay-windows.md)
- [`references/combos-loops-and-variants.md`](references/combos-loops-and-variants.md)
- [`references/root-motion-and-movement.md`](references/root-motion-and-movement.md)
- [`references/gas-and-networking.md`](references/gas-and-networking.md)
- [`references/debugging-patterns.md`](references/debugging-patterns.md)

## Required answer format

Return:

1. **Action owner and authority** with eligibility/commitment/cancel rules.
2. **Montage, Slot/Group, body-region, and root-motion assumptions**.
3. **Named Sections and transition graph**.
4. **Playback API and exact callbacks handled**.
5. **Notifies/windows with cosmetic versus authoritative responsibility**.
6. **Interruption, GAS, replication, movement, and cleanup consequences**.
7. **Acceptance cases across frame rate and network roles**.

## Hard rules

- A matching Slot node must exist in the evaluated AnimGraph path or the Montage is invisible.
- Sequences in the same Slot/Slot Group can override or interfere; design concurrency explicitly.
- Sections describe playback topology; gameplay state decides whether a transition is legal.
- Treat Notify delivery as animation-timed signaling, not sole authority for irreversible gameplay.
- Use Branching Point timing only when its synchronous precision justifies higher cost.
- `Play Montage` exposes Montage Notify callbacks; `Play Anim Montage` does not expose the same proxy callbacks.
- Handle Completed, Blend Out, Interrupted, and Cancelled as distinct outcomes.
- Playing a Montage locally is not a complete network contract. Replicate/predict the gameplay action
  and trigger appropriate playback per role; root-motion correction does not replicate gameplay logic.
- Use `Root Motion from Montages Only` when the networked design relies on montage root motion.
- Keep Motion Matching/State Machines as the locomotion base; place final IK after action blending.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
