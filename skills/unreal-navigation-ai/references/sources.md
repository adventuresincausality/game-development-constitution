# UE 5.8 primary sources

Checked against Epic's Unreal Engine 5.8 documentation on 2026-07-19.

## Navigation

- [Navigation System](https://dev.epicgames.com/documentation/en-us/unreal-engine/navigation-system-in-unreal-engine)
- [Basic Navigation](https://dev.epicgames.com/documentation/unreal-engine/basic-navigation-in-unreal-engine?lang=en-US)
- [Navigation Mesh Settings](https://dev.epicgames.com/documentation/unreal-engine/navigation-mesh-settings-in-the-unreal-engine-project-settings?lang=en-US)
- [Navigation Mesh Resolutions](https://dev.epicgames.com/documentation/unreal-engine/navigation-mesh-resolutions-user-guide?lang=en-US)
- [Modifying the Navigation Mesh](https://dev.epicgames.com/documentation/unreal-engine/overview-of-how-to-modify-the-navigation-mesh-in-unreal-engine?lang=en-US)
- [Optimizing NavMesh Generation](https://dev.epicgames.com/documentation/unreal-engine/optimizing-navigation-mesh-generation-speed-in-unreal-engine)
- [Navigation Invokers](https://dev.epicgames.com/documentation/unreal-engine/using-navigation-invokers-in-unreal-engine?lang=en-US)
- [World Partitioned Navigation Mesh](https://dev.epicgames.com/documentation/unreal-engine/world-partitioned-navigation-mesh?lang=en-US)

## Decisions and queries

- [Behavior Tree Overview](https://dev.epicgames.com/documentation/unreal-engine/behavior-tree-in-unreal-engine---overview?lang=en-US)
- [Behavior Tree User Guide](https://dev.epicgames.com/documentation/unreal-engine/behavior-tree-in-unreal-engine---user-guide)
- [Behavior Tree Decorators](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-behavior-tree-node-reference-decorators)
- [Behavior Tree Services](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-behavior-tree-node-reference-services)
- [StateTree Overview](https://dev.epicgames.com/documentation/unreal-engine/overview-of-state-tree-in-unreal-engine?lang=en-US)
- [StateTree Debugger](https://dev.epicgames.com/documentation/unreal-engine/statetree-debugger-quick-start-guide)
- [AI Perception](https://dev.epicgames.com/documentation/unreal-engine/ai-perception-in-unreal-engine?lang=en-US)
- [Environment Query System](https://dev.epicgames.com/documentation/en-us/unreal-engine/environment-query-system-in-unreal-engine)
- [EQS Testing Pawn](https://dev.epicgames.com/documentation/en-us/unreal-engine/environment-query-testing-pawn-in-unreal-engine)

## Interaction, crowds, and diagnosis

- [Smart Objects Overview](https://dev.epicgames.com/documentation/en-us/unreal-engine/smart-objects-in-unreal-engine---overview)
- [Avoidance with the Navigation System](https://dev.epicgames.com/documentation/unreal-engine/using-avoidance-with-the-navigation-system-in-unreal-engine)
- [Crowd Manager Settings](https://dev.epicgames.com/documentation/en-us/unreal-engine/crowd-manager-settings-in-the-the-unreal-engine-project-settings)
- [AI Debugging](https://dev.epicgames.com/documentation/unreal-engine/ai-debugging-in-unreal-engine?lang=en-US)
- [Gameplay Debugger](https://dev.epicgames.com/documentation/unreal-engine/using-the-gameplay-debugger-in-unreal-engine)

## Maturity notes

- Core Recast NavMesh, Behavior Trees, StateTree, AI Perception, Smart Objects, and avoidance workflows have current 5.8 documentation.
- World Partitioned Navigation Mesh is explicitly Experimental.
- The current EQS Testing Pawn guide still refers to the experimental nature of EQS; keep EQS bounded and validated.
- Do not infer that all AI systems replicate or run on clients. Authoritative gameplay AI remains a project/network architecture decision.

Prefer the 5.8 page, installed engine source, console help, and working sample behavior over remembered earlier-version defaults.
