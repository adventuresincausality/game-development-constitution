# Event-driven binding and MVVM

## Default: explicit push updates

1. Gameplay model exposes a typed change delegate/event.
2. Local presenter subscribes and converts raw state into display state.
3. Presenter calls a small widget setter such as `SetHealth(Current, Max)`.
4. Widget updates only the affected controls.
5. Unbind in the matching lifecycle hook.

This keeps gameplay independent of widget classes and avoids per-frame polling.

## MVVM path

Use the UMG Viewmodel plugin when reusable view state and declarative bindings justify a Beta
dependency.

1. Enable UMG Viewmodel.
2. Create a `UMVVMViewModelBase` subclass or implement `INotifyFieldValueChanged` in C++.
3. Expose display fields with `FieldNotify`.
4. Keep fields private/protected and mutate through setters that broadcast only on change.
5. Prefer one-way-to-widget for authoritative/display state.
6. Use two-way binding only for genuine editable form state; submit validated intent separately.
7. Test cooked builds and reassignment paths. Epic documents a current binding-invalidity caveat
   when a designer-bound Viewmodel is reassigned in the Details panel.

Record that MVVM is **Beta in UE 5.8** in the technical-risk register.

## Replicated state to UI

```text
server changes replicated property
  -> client RepNotify/delegate
  -> local presenter or Viewmodel setter
  -> FieldNotify/delegate
  -> widget update
```

Do not poll the replicated actor from a widget binding. Do not play irreversible one-shot VFX
solely because initial replication invoked a state OnRep; distinguish current state from a newly
observed event.

## Rules

- Raw UMG property/function binding is not the event-driven MVVM path.
- Directly setting a widget property can break a classic property binding.
- A Viewmodel formats and exposes presentation state; it does not become gameplay authority.
- Keep async asset/data readiness explicit with loading, ready, empty, and error states.
- Store list item identity in data objects, not recycled entry-widget instances.
