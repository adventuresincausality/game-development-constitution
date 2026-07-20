---
name: unreal-navigation-ai
description: Operational Unreal Engine 5.8 guidance for Recast NavMesh generation and agent settings, static/dynamic/invoker/world-partition navigation, areas, modifiers, links, path following, Behavior Trees and Blackboards, StateTree, AI Perception, EQS, Smart Objects, RVO and Detour Crowd avoidance, multiplayer authority, performance, and AI debugging. Use when designing, implementing, optimizing, testing, or diagnosing Unreal navigation and gameplay AI.
---

# Unreal 5.8 Navigation and AI

Separate path data, movement execution, sensing, decision logic, spatial queries, interaction reservation, and local avoidance. Route only the current subsystem's details into context.

## Select systems before building

- Use **NavMesh** for pathfinding over traversable collision. It does not decide goals or execute animations.
- Use **Behavior Tree + Blackboard** for event-driven, priority-ordered reactive decisions with observable aborts.
- Use **StateTree** for explicit hierarchical modes, transitions, sequences, and shared task data.
- Use a small component/enum/timer for trivial behavior; a graph asset is not mandatory.
- Use **AI Perception** for sensed stimuli and memory. Perception is evidence, not omniscient authoritative truth.
- Use **EQS** to generate, filter, and score environmental candidates. Do not run it continuously for facts a direct query already knows.
- Use **Smart Objects** to find and reserve interaction slots. The interactor executes the behavior and must release the claim.
- Use **RVO** or **Detour Crowd**, exclusively, for local avoidance. They complement pathfinding; they do not replace world paths.

Read [system-selector-architecture.md](references/system-selector-architecture.md) first when choosing between these systems.

## Route by task

| Need | Load |
|---|---|
| Choose systems, ownership, update model | [system-selector-architecture.md](references/system-selector-architecture.md) |
| Build NavMesh and tune agents/tiles/resolution | [navmesh-generation-agents.md](references/navmesh-generation-agents.md) |
| Choose static/dynamic/invoker/World Partition navigation | [dynamic-navigation-world-partition.md](references/dynamic-navigation-world-partition.md) |
| Tune MoveTo, areas, filters, modifiers, links, failure recovery | [movement-paths-links.md](references/movement-paths-links.md) |
| Build Behavior Trees, Blackboards, decorators, services, tasks | [behavior-trees.md](references/behavior-trees.md) |
| Build StateTree states, tasks, data, and transitions | [statetree.md](references/statetree.md) |
| Configure AI Perception and EQS | [perception-eqs.md](references/perception-eqs.md) |
| Build reservable interactions and crowd avoidance | [smart-objects-crowds.md](references/smart-objects-crowds.md) |
| Debug, profile, network, and run test gates | [debugging-performance.md](references/debugging-performance.md) |
| Apply common behavior patterns | [patterns.md](references/patterns.md) |
| Verify claims and maturity | [sources.md](references/sources.md) |

## Execute in this order

1. State agent shapes, locomotion abilities, decision latency, maximum population, world/streaming model, network authority, and target hardware.
2. Establish correct collision and supported-agent settings; build the simplest static NavMesh that proves paths.
3. Choose navigation generation mode from actual world changes. Do not default to fully Dynamic.
4. Prove movement, arrival, path failure, off-mesh traversal, interruption, and recovery before decision graphs.
5. Choose one primary decision architecture and define its data contract.
6. Add Perception as event-fed observations; define forgetting and last-known-state semantics.
7. Add EQS only for candidate selection that needs scoring/filtering.
8. Add Smart Objects and crowd avoidance only after single-agent behavior is reliable.
9. Make authoritative AI decisions on the server in networked games; replicate observable gameplay results.
10. Debug selected agents and profile worst-case populations in a cooked target build.

## Hard rules

- NavMesh green coverage does not prove an agent can move: controller, movement component, supported-agent selection, projection, path following, collision, links, and runtime availability must agree.
- Agent radius, height, slope, and step settings are gameplay contracts. Do not shrink them merely to force paths through invalid geometry.
- Do not make NavMesh fully Dynamic when static data, Dynamic Modifiers Only, streamed chunks, or invokers satisfy the requirement.
- World Partition NavMesh is explicitly **Experimental** in UE 5.8.
- Behavior Tree tasks must finish exactly once and clean up latent work when aborted. Use observer aborts deliberately.
- StateTree Tasks on active states run concurrently; the first completing task can trigger completion. Do not model an intended sequence as parallel tasks.
- Current UE 5.8 EQS documentation still describes the system as experimental. Bound query size/frequency and keep a fallback.
- AI Perception expiration is not the same as forgetting unless the project setting and state logic support it.
- Smart Objects contain opportunity/reservation data, not execution logic. Release claims on success, failure, abort, death, unload, or invalidation.
- RVO and Detour Crowd are independent alternatives and should not both control one agent.
- AI does not need to tick every decision every frame. Prefer events, observed data changes, bounded service intervals, and staggered work.

## Answer contract

Return:

1. **Selected systems and assumptions**.
2. **Authority and data ownership** — server/client, controller/pawn, Blackboard/StateTree/context.
3. **Navigation contract** — agents, generation mode, areas/links, movement and failure behavior.
4. **Exact actions and parameter effects**.
5. **Cancellation, unload, death, and invalidation recovery**.
6. **Performance/scaling consequences**.
7. **Verification** — visible debug evidence and target-build pass criteria.

Do not invent universal NavMesh cell sizes, perception ranges, service intervals, or crowd limits. Derive them from agent geometry, level metrics, reaction design, population, and profiling.
