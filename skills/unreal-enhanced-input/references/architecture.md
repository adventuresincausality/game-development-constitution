# Enhanced Input architecture

## Asset model

| Asset/type | Owns |
|---|---|
| `UInputAction` | Semantic intent and value type; optional action-level modifiers/triggers/settings |
| `UInputMappingContext` | Key-to-action mappings for one coherent context plus mapping-level modifiers/triggers |
| `UInputModifier` | Raw value transformation before trigger evaluation |
| `UInputTrigger` | Conditions/timing that decide action state |
| `UEnhancedInputLocalPlayerSubsystem` | Applied contexts and priorities for one local player |
| `UEnhancedInputComponent` | Action-to-delegate bindings in the input stack |
| `UEnhancedInputUserSettings` | Per-user mappable keys, profiles, input/accessibility settings, registration, persistence |

## Ordered setup

1. Ensure Enhanced Input is enabled and the project uses Enhanced Player Input / Enhanced
   Input Component classes where manual project setup requires them.
2. Create Input Actions named for intent: `IA_Move`, `IA_Look`, `IA_Jump`, `IA_Interact`.
3. Choose exact value types. A 2D move action should be Axis2D; a button is usually Boolean.
4. Create small Mapping Contexts by coherent availability/lifecycle: common gameplay, on-foot,
   vehicle, menu/debug, and similar.
5. Add contexts to the owning Local Player subsystem with explicit priority.
6. Bind actions once during the Pawn/Controller input initialization lifecycle.
7. Forward intent into gameplay systems. Input code should not own authoritative outcomes.

## Intent boundary

Input says what the local player requested. The receiver decides whether it is legal:

- Character Movement consumes movement/jump requests;
- GAS attempts ability activation;
- interaction component resolves and validates targets;
- UI routing decides whether gameplay should receive input;
- server validates multiplayer outcomes.

Use Gameplay Tags for semantic input routing only when the project benefits from data-driven
ability/loadout binding. Keep input tags separate from ability identity/state tags; route tag
taxonomy to `$unreal-gameplay-tags`.
