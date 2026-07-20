---
name: unreal-umg-commonui
description: Design, implement, optimize, and debug game UI in Unreal Engine 5.8 with UMG and CommonUI. Use for widget architecture, HUDs, menus, modal layers, Common Activatable Widgets, input routing, Enhanced Input integration, focus, gamepad navigation, local-player ownership, split screen, responsive layout, DPI scaling, safe zones, accessibility, MVVM, event-driven updates, ListView virtualization, invalidation, pooling, or UI performance.
---

# Unreal 5.8 UMG and CommonUI

## Ownership boundary

This skill owns widget lifecycle, screen layers, focus, navigation, and UI input routing. Route action,
context, trigger, modifier, and key-profile semantics to
[`unreal-enhanced-input`](../unreal-enhanced-input/SKILL.md), authoritative multiplayer state to
[`unreal-replication`](../unreal-replication/SKILL.md), and durable slot/schema/migration policy to
[`unreal-save-load`](../unreal-save-load/SKILL.md).

## Select the UI stack

- Use **UMG** for every game UI; it is the base authoring layer.
- Add **CommonUI** when the product needs complex layered screens, robust gamepad navigation,
  cross-platform input prompts, or consistent back/input routing.
- Do not add CommonUI solely for a small mouse-driven HUD or a single simple menu.
- Treat **UMG Viewmodel/MVVM as Beta in UE 5.8**. Use it when push binding and UI/backend
  separation justify the maturity risk; otherwise use explicit delegates and setters.
- In UE 5.8 prefer the unified CommonUI + Enhanced Input workflow. Do not copy older tutorials
  that require a parallel UI action-data-table vocabulary unless maintaining legacy content.

Read [`references/system-selector.md`](references/system-selector.md) before choosing.

## Preserve the presentation boundary

1. Keep authoritative gameplay state in gameplay systems, never in widgets.
2. Expose a small local presentation model or Viewmodel per local player.
3. Push changes into the UI with delegates, events, or FieldNotify.
4. Let widgets submit semantic intent; let gameplay code validate and execute it.
5. Replicate model state, not widget instances. Create and update UI locally.

Read [`references/architecture-lifecycle.md`](references/architecture-lifecycle.md) and route
network-state design to `$unreal-replication`.

## Build in dependency order

1. Identify local-player ownership, screen layers, and the authority boundary.
2. Establish one root layout and named HUD, menu, modal, and notification layers.
3. Make screens activatable only when they own an input/focus boundary.
4. Define activation, back, input mode, mouse capture, and desired-focus behavior.
5. Build layouts with anchors, containers, DPI scaling, and Safe Zones.
6. Push state changes; avoid Tick and raw property bindings.
7. Virtualize long collections and load expensive, infrequent screens on demand.
8. Test keyboard/mouse, gamepad, touch if supported, split screen, resolutions, safe zones,
   localization expansion, and accessibility settings.
9. Profile with Slate Insights/Unreal Insights before applying invalidation or retainers.

Use [`references/commonui-routing.md`](references/commonui-routing.md),
[`references/input-focus.md`](references/input-focus.md), and
[`references/responsive-accessibility.md`](references/responsive-accessibility.md).

## Required answer format

Return:

1. **Stack choice**: UMG only, UMG + CommonUI, and whether Beta MVVM is justified.
2. **Ownership diagram**: authoritative model, local presentation model, view, and intent path.
3. **Layer/input/focus policy** for every screen type.
4. **Exact implementation actions**: assets, classes, settings, nodes/APIs, and lifecycle hooks.
5. **Responsive and accessibility matrix**.
6. **Performance risks, measurement method, and verification checklist**.

Do not invent property names, plugin maturity, focus behavior, or performance wins.

## Hard rules

- Never store authoritative gameplay state only in a widget.
- Never replicate widgets or use a widget as a client-to-server RPC owner.
- Use an owning `LocalPlayer`/`PlayerController`; prefer `AddToPlayerScreen` for player UI.
- Do not assume `Construct` runs once; use initialization and activation hooks intentionally.
- Do not make every CommonUI widget activatable.
- Every gamepad screen must define a valid initial focus target and a back path.
- Never encode critical information by color alone; support readable text scaling.
- Avoid raw property binding, widget Tick, and nested Canvas Panels in production UI.
- Do not add Invalidation Boxes or Retainer Panels without profiling and change-frequency analysis.

Read [`references/binding-mvvm.md`](references/binding-mvvm.md),
[`references/performance.md`](references/performance.md), and
[`references/patterns-troubleshooting.md`](references/patterns-troubleshooting.md). See
[`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
