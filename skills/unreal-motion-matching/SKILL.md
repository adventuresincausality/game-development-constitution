---
name: unreal-motion-matching
description: Select, build, tune, optimize, and debug Motion Matching and Pose Search animation systems in Unreal Engine 5.8. Use for Pose Search schemas and databases, trajectory queries, Pose History, channels and weights, Choosers, database filtering, starts/stops/pivots, root-motion locomotion, cost bias, pose thrashing, foot sliding, animation coverage, warping, Rewind Debugger, or the Game Animation Sample.
---

# Unreal 5.8 Motion Matching

## Ownership boundary

This skill owns Pose Search data, filtering, query construction, and selection cost. Route final
AnimGraph layering/transitions to
[`unreal-animation-blending`](../unreal-animation-blending/SKILL.md), movement trajectory and network
authority to [`unreal-character-movement`](../unreal-character-movement/SKILL.md), and retargeting or
post-selection IK/contact correction to [`unreal-control-rig-ik`](../unreal-control-rig-ik/SKILL.md).

## Decide whether it fits

Read [`references/system-selector.md`](references/system-selector.md).

Use Motion Matching when a sufficiently broad, coherent animation set should drive responsive
locomotion or traversal through runtime pose selection. Keep a State Machine/Blend Space when the
moveset is small, stylized, intentionally discrete, or lacks the data coverage to justify search.

Motion Matching does not manufacture missing motion. Coverage, trajectory quality, database
filtering, and movement-model agreement matter before weight tuning.

## Execute

1. Define movement states, required transitions, target skeleton, and root-motion contract.
2. Audit clips for speeds, directions, starts, stops, pivots, loops, contacts, and bad frames.
3. Enable Pose Search and create the smallest useful Schema.
4. Build focused Databases with compatible Schema and correctly prepared animation assets.
5. Add Motion Matching and Pose History to the AnimGraph; generate or supply trajectory.
6. Use gameplay context and Choosers to restrict which databases can be searched.
7. Diagnose selection in Rewind Debugger before changing weights or adding warping.
8. Add bias, notifies, warping, IK, and performance tuning one measured need at a time.

Load only what applies:

- [`references/schema-and-database.md`](references/schema-and-database.md)
- [`references/trajectory-and-pose-history.md`](references/trajectory-and-pose-history.md)
- [`references/filtering-and-choosers.md`](references/filtering-and-choosers.md)
- [`references/selection-tuning.md`](references/selection-tuning.md)
- [`references/coverage-warping-and-contact.md`](references/coverage-warping-and-contact.md)
- [`references/debugging-and-performance.md`](references/debugging-and-performance.md)
- [`references/implementation-patterns.md`](references/implementation-patterns.md)

## Required answer format

Return:

1. **Motion Matching fitness decision** and rejected alternative.
2. **Movement/root-motion/data assumptions** and coverage gaps.
3. **Schema channels/samples and why each changes selection**.
4. **Database partition and Chooser/filter rules**.
5. **AnimGraph order, trajectory source, Pose History, and overlays**.
6. **Selection-tuning changes tied to Rewind evidence**.
7. **Memory/search/LOD/network consequences and acceptance maneuvers**.

## Hard rules

- Enable the Pose Search plugin and use compatible skeleton/schema/database assets.
- UE's documented locomotion setup expects root-motion animation with Root Motion enabled.
- Use the fewest trajectory and pose samples that distinguish the required motions.
- Search only context-valid databases; do not use weights to make impossible states compete.
- Negative cost bias makes a pose/category more likely; positive bias penalizes it.
- Fix data coverage or movement-speed disagreement before suppressing symptoms with weights.
- Use Pose Search notify states to exclude invalid ranges or control branch-in eligibility.
- Anim Notify filtering can suppress repeat Notifies but does not filter Notify States.
- Diagnose with Rewind Debugger selection candidates/costs before changing several variables.
- Treat VPTree, Permutation Time, Crashing Legs, and Character Blueprint montage selection
  according to their Experimental UE 5.8 status.
- Keep discrete gameplay actions in `unreal-animation-montages`; layer final IK after the base pose.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
