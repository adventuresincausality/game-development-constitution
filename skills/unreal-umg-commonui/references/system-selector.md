# System selector

## Use UMG only

Choose plain UMG when all are true:

- screen layering is simple;
- mouse/keyboard is primary or gamepad navigation is small;
- input prompts do not need automatic platform/device swapping;
- the team benefits more from a small dependency surface than CommonUI routing.

UMG remains the view layer even when CommonUI is added.

## Add CommonUI

Choose CommonUI when one or more are load-bearing:

- multiple stacked screens or modal layers;
- controller-first focus and cardinal navigation;
- a universal back action;
- platform-specific button glyphs or runtime input-method switching;
- selective input routing between overlapping UI layers.

CommonUI is an extensive paradigm, not a general requirement. Epic specifically identifies
complex multi-layered and cross-platform interfaces as its main use cases.

## Choose the update model

| Need | Preferred mechanism | Note |
|---|---|---|
| Small explicit screen | Delegates/events + widget setters | Stable and easy to trace |
| Reusable presentation model | Viewmodel + FieldNotify | MVVM is Beta in UE 5.8 |
| One-time construction data | Expose-on-spawn/init function | Do not poll it |
| Per-frame visual motion | UMG animation/material/limited Tick | Profile and isolate |

Do not use raw property/function bindings as the default; they poll and can have a large
performance impact. Do not adopt Beta MVVM without documenting fallback and platform testing.

## UE 5.8 input choice

UE 5.8 release notes describe unification of Enhanced Input and Common Input/UI, including
removing duplicate data assets. Prefer Enhanced Input Actions and metadata for new 5.8 work.
Treat older CommonUI action Data Tables as a legacy-compatible path, not the default new design.

## Related Constitution principles

- `GDC-L1-UX-0002`: reveal complexity progressively.
- `GDC-L1-UX-0003`: make the interface communicate.
- `GDC-L1-UX-0006`: build accessibility in early.
- `GDC-L1-ARCH-0003`: decouple cross-system reactions through events.
- `GDC-L1-ARCH-0006`: distinguish authoritative from transient state.
