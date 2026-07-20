# StateTree

## Execution model

StateTree combines hierarchical state-machine transitions with tree-based state selection.

- Selection evaluates Enter Conditions from the target/root path toward a selectable leaf.
- The selected leaf and all parent states on its active path become active.
- Tasks on all active states start and run concurrently.
- The first completing Task can trigger completion-based transition evaluation.
- Transitions are the only way to change the selected state.

Do not place sequential actions as sibling Tasks in one state. Use child states and `Next` transitions for ordered steps.

## Data roles

- **Parameters**: configured per asset/instance inputs.
- **Context/External Data**: required owner, actor, subsystem, or component data supplied by the schema/runtime.
- **Evaluators**: expose/update data used by states, tasks, conditions, and transitions.
- **Tasks**: perform bounded work while their state is active.
- **Conditions**: gate state entry or transitions.

Choose the correct schema for the owner, such as an Actor/Component-oriented schema. Fail early when required external data is absent.

## Authoring workflow

1. Define top-level modes with mutually understandable ownership: Idle, Patrol, Alert, Combat, Disabled.
2. Put shared always-active responsibilities on parent states only when concurrency is intended.
3. Decompose ordered behavior into child states and success/failure/`Next` transitions.
4. Make transition priority and destination explicit.
5. Expose typed data once and bind deliberately; avoid long invisible binding chains.
6. Define enter/exit/cancel cleanup for moves, delegates, abilities, animation, and Smart Object claims.
7. Use linked/subtrees only when their interface is stable and reuse is real.

## Common failure patterns

- **Sequence completes instantly/wrong action wins**: sibling tasks ran concurrently and one finished first.
- **No state selected**: Enter Conditions reject every path or required context is missing.
- **Transition loop**: a condition remains true on entry and immediately selects again.
- **Stale data**: evaluator/binding lifetime differs from the assumed update moment.
- **Action survives state exit**: task failed to cancel latent work or release resources.

## Debugging

Use the StateTree Debugger (`Window > Debugger` in the asset editor), instance selection, traces, state/task breakpoints, and recorded transitions. The debugger can consume Trace Analyzer data from Editor, Client, and Dedicated Server processes.

Acceptance requires the active state path, task lifetimes, data values, transition cause, and cleanup to match the authored contract under interruption and failure.
