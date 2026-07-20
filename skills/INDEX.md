# Unreal Engine 5.8 Skill Library

Operational companion to the L2 Unreal Constitution. Principles answer **what/why**;
skills answer **which Unreal system, which actions, which variables, and how to verify**.

For AI routing and local installation, begin with
[`UNREAL_AI_START_HERE.md`](../UNREAL_AI_START_HERE.md). For trademark, copyright, source,
and independence information, read [`UNREAL-ENGINE-NOTICE.md`](../UNREAL-ENGINE-NOTICE.md).

## Available skills

| Skill | Use for | Entry point |
|---|---|---|
| Unreal Splines | Paths, rails, spline meshes, roads, cables, placement, Landscape Splines, PCG splines | [`unreal-splines/SKILL.md`](unreal-splines/SKILL.md) |
| Unreal Lighting | Lumen, MegaLights, exposure, physical units, lights, atmosphere, lighting recipes and diagnosis | [`unreal-lighting/SKILL.md`](unreal-lighting/SKILL.md) |
| Unreal Animation Blending | Blend Spaces, transitions, sync, layering, additive animation, Montages, locomotion | [`unreal-animation-blending/SKILL.md`](unreal-animation-blending/SKILL.md) |
| Unreal Blueprint Architecture | Actors, components, interfaces, dispatchers, subsystems, data, lifecycle, C++ boundaries | [`unreal-blueprint-architecture/SKILL.md`](unreal-blueprint-architecture/SKILL.md) |
| Unreal GAS Abilities | ASC ownership, granting, activation, costs, cooldowns, tasks, cancellation, prediction | [`unreal-gas-abilities/SKILL.md`](unreal-gas-abilities/SKILL.md) |
| Unreal GAS Attributes and Effects | AttributeSets, base/current values, effects, calculations, stacking, clamping, replication, UI | [`unreal-gas-attributes-effects/SKILL.md`](unreal-gas-attributes-effects/SKILL.md) |
| Unreal Gameplay Tags | Taxonomy, native/config tags, containers, exact/hierarchical queries, events, migration | [`unreal-gameplay-tags/SKILL.md`](unreal-gameplay-tags/SKILL.md) |
| Unreal Character Movement | CMC tuning, jumping, slopes, steps, custom movement, root motion, prediction, correction, smoothing | [`unreal-character-movement/SKILL.md`](unreal-character-movement/SKILL.md) |
| Unreal Enhanced Input | Actions, contexts, triggers, modifiers, ownership, remapping, profiles, buffering, input debugging | [`unreal-enhanced-input/SKILL.md`](unreal-enhanced-input/SKILL.md) |
| Unreal UMG and CommonUI | Widget architecture, layers, input routing, focus, responsive layout, accessibility, MVVM, pooling, UI performance | [`unreal-umg-commonui/SKILL.md`](unreal-umg-commonui/SKILL.md) |
| Unreal Replication | Authority, ownership, properties, RPCs, relevancy, dormancy, subobjects, Fast Arrays, RepGraph, Iris, network debugging | [`unreal-replication/SKILL.md`](unreal-replication/SKILL.md) |
| Unreal PCG | Graph/data architecture, sampling, spawning, parameters, partitioning, runtime generation, GPU execution, manual overrides, diagnostics | [`unreal-pcg/SKILL.md`](unreal-pcg/SKILL.md) |
| Unreal World Partition | Cells, streaming sources, Data Layers, HLOD, OFPA, Level Instances, PCG integration, builders, large-world diagnosis | [`unreal-world-partition/SKILL.md`](unreal-world-partition/SKILL.md) |
| Unreal Landscape | Terrain topology/import, Edit Layers, materials, painting, foliage, splines, RVT, World Partition, Nanite, collision, performance | [`unreal-landscape/SKILL.md`](unreal-landscape/SKILL.md) |
| Unreal Navigation and AI | NavMesh, movement, Behavior Trees, StateTree, perception, EQS, Smart Objects, crowds, debugging | [`unreal-navigation-ai/SKILL.md`](unreal-navigation-ai/SKILL.md) |
| Unreal Data Assets and Tables | Data Assets, tables, stable IDs, soft references, Asset Manager, async loading, registries, cooking, validation | [`unreal-data-assets-tables/SKILL.md`](unreal-data-assets-tables/SKILL.md) |
| Unreal Editor Automation | Editor utilities, Python, safe mutation, commandlets, validation, automation tests, Unreal MCP | [`unreal-editor-automation/SKILL.md`](unreal-editor-automation/SKILL.md) |
| Unreal Control Rig and IK | IK Rig/Retargeter, retarget poses and operations, runtime retargeting, Control Rig, FBIK, contact, baking, diagnosis | [`unreal-control-rig-ik/SKILL.md`](unreal-control-rig-ik/SKILL.md) |
| Unreal Materials | PBR surfaces, instances, functions, layers, Substrate, decals, RVT, material effects, permutations, profiling | [`unreal-materials/SKILL.md`](unreal-materials/SKILL.md) |
| Unreal Niagara | Systems, emitters, modules, CPU/GPU simulation, gameplay integration, Data Channels, scalability, pooling, debugging | [`unreal-niagara/SKILL.md`](unreal-niagara/SKILL.md) |
| Unreal Motion Matching | Pose Search schemas/databases, trajectories, Pose History, Choosers, coverage, cost tuning, warping, debugging | [`unreal-motion-matching/SKILL.md`](unreal-motion-matching/SKILL.md) |
| Unreal Animation Montages | Gameplay actions, Slots, Sections, notifies, combos, cancellation, root motion, GAS, replication | [`unreal-animation-montages/SKILL.md`](unreal-animation-montages/SKILL.md) |
| Unreal MetaSounds | Sources, Patches, Presets, runtime parameters, variation, spatialization, concurrency, modulation, mixing, debugging | [`unreal-metasounds/SKILL.md`](unreal-metasounds/SKILL.md) |
| Unreal Cameras and Cinematics | Gameplay cameras, Spring Arms, CameraManager, transitions, shakes, Cine Cameras, Sequencer, rails, handoff | [`unreal-camera-cinematics/SKILL.md`](unreal-camera-cinematics/SKILL.md) |
| Unreal Insights Profiling | Capture contracts, stat triage, Timing/Memory/Network/Task/Slate Insights, hitches, instrumentation, regression evidence | [`unreal-insights-profiling/SKILL.md`](unreal-insights-profiling/SKILL.md) |
| Unreal Rendering Performance | GPU/render-thread diagnosis, Nanite, Lumen, VSM, MegaLights, TSR, overdraw, culling, scalability, GPU memory | [`unreal-rendering-performance/SKILL.md`](unreal-rendering-performance/SKILL.md) |
| Unreal Memory and Streaming | Residency, reference chains, async loading, texture/VT/Nanite streaming, PSOs, hitches, memory analysis | [`unreal-memory-streaming/SKILL.md`](unreal-memory-streaming/SKILL.md) |
| Unreal Chaos Physics | Collision, bodies, forces, constraints, timestep, network physics, ragdolls, destruction, cloth, Chaos Visual Debugger | [`unreal-chaos-physics/SKILL.md`](unreal-chaos-physics/SKILL.md) |
| Unreal Packaging and Deployment | Builds, cooking, staging, UAT, containers, chunks, patches, plugins, SDKs, symbols, releases | [`unreal-packaging-deployment/SKILL.md`](unreal-packaging-deployment/SKILL.md) |
| Unreal Save and Load | SaveGame schemas, stable IDs, async persistence, actors/world state, migration, recovery, users, cloud, authority | [`unreal-save-load/SKILL.md`](unreal-save-load/SKILL.md) |

## Routing rule

1. Use an L1/L2 principle when deciding whether an approach fits the game.
2. Choose one **primary owner** for implementation or for the first observed failure.
3. Add no more than two secondary skills, and only for an explicit ownership seam below or
   a boundary named by the primary skill. Do not scan several skills merely because terms overlap.
4. Load the primary `SKILL.md`, then only the reference file needed for the use case in each
   selected skill.
5. Return exact actions, assumptions, parameter effects, failure checks, validation, and the
   ownership split when more than one system participates.
6. Keep user- or project-specific assumptions separate from this general Unreal guidance.

## Ambiguous-request routing

Match the action or the **first stage where the defect appears**, not every noun in the prompt.

| Request or symptom | Primary owner | Add only when |
|---|---|---|
| Locomotion/action blend pops | Animation Blending | Animation Montages for bounded-action lifecycle; Motion Matching for pose selection; Control Rig and IK when the first bad pose is retargeting/IK |
| Attack, reload, combo, or cancel window | Animation Montages | GAS Abilities for ability lifecycle; Character Movement for authoritative displacement/root motion; Replication for general Actor/RPC ownership |
| Pose-search locomotion chooses the wrong clip | Motion Matching | Animation Blending for final composition; Control Rig and IK for post-selection contact repair |
| IK-retargeted animation is distorted, offset, or sliding | Control Rig and IK | Animation Blending only when the retargeted preview/export is correct and the final AnimGraph is wrong |
| Dash or root-motion move is wrong online | Character Movement | Animation Montages for authored section/action playback; GAS for an ability-owned move; Replication only for general authority/state transport |
| Road, rail, cable, path, or spline placement | Splines | Landscape when terrain is deformed/painted; PCG when the spline drives procedural population; World Partition when generated output must stream by cell |
| Terrain sculpt, paint, or heightfield road | Landscape | Splines for generic path math; PCG for generated population; World Partition for cells/HLOD/streaming |
| Procedural biome, fence, road population, or runtime generation | PCG | Splines/Landscape for source geometry; World Partition for cell ownership, Data Layers, and HLOD |
| Open-world content pops, streams late, or loads the wrong variant | World Partition | Memory and Streaming for asset readiness/residency; PCG for generated-output ownership |
| Lighting is slow, noisy, or unexpectedly expensive | Unreal Insights Profiling when unmeasured; otherwise Rendering Performance | Lighting for artistic light/exposure configuration; Materials for shader/surface cause; Memory for residency/pool pressure |
| RVT, texture, Nanite, PSO, or asset readiness problem | Memory and Streaming | Landscape/Materials for the producer; Rendering Performance for a measured GPU bound |
| Asset exists in editor but is missing from a package | Packaging and Deployment | Data Assets and Tables for discovery/cook ownership; Memory and Streaming only when the cooked asset exists but runtime request timing fails |
| Menu or asset definition loads too much content | Memory and Streaming | Data Assets and Tables for schema/reference design; UMG and CommonUI for widget lifecycle |
| Save/load loses an item or breaks after a patch | Save and Load | Data Assets and Tables for stable definition IDs/redirects; Packaging for release compatibility and artifact contents |
| Input rebinding or control settings | Enhanced Input | UMG and CommonUI for screens/focus/input routing; Save and Load only for a broader custom persistence policy |
| Networked rigid body, ragdoll, or destruction | Chaos Physics | Replication for general Actor ownership/RPCs; Character Movement when the authoritative object is a Character capsule |
| Ability damage, cooldown, tag gate, and montage | GAS Abilities for lifecycle | GAS Attributes and Effects for numeric state/effects; Gameplay Tags for taxonomy; Animation Montages for authored playback |
| Build, CI, commandlet, or content validation | Packaging and Deployment for the shippable artifact | Editor Automation for tools/tests/safe mutation; subsystem skill for its builder semantics |
| Performance problem with no trusted trace | Unreal Insights Profiling | Route to the measured subsystem only after the bottleneck is classified |

## Skill format

Every subsystem skill contains:

- `SKILL.md`: triggers, system selector, workflow, hard rules, answer contract;
- `references/`: specific action patterns, parameter effects, use cases, diagnostics,
  and primary UE 5.8 sources;
- `agents/openai.yaml`: discovery metadata.

Avoid background explanation that does not change an action or decision. Preserve:

- prerequisites and assumptions;
- editor path, Blueprint node, C++ API, property, or console command;
- what increasing/decreasing a parameter does;
- version and experimental-status warnings;
- multiplayer, performance, and packaging consequences;
- verification and failure recovery.

## Expansion roadmap

### Priority 3 — visual, animation, and audio craft

Priority 3 is complete.

### Priority 4 — shipping and performance

Priority 4 is complete.

## Source policy

1. Prefer UE 5.8 Epic documentation, API references, release notes, engine source, and
   Epic sample projects.
2. Record exact version and feature maturity.
3. Use tutorials only to identify missing use cases; verify actions against primary
   sources or direct engine behavior before making them canonical.
4. Never preserve a tutorial's narrative when a concise action pattern suffices.
