---
name: unreal-gameplay-tags
description: Design, govern, implement, query, replicate, and debug Gameplay Tags in Unreal Engine 5.8. Use for tag taxonomies, native or config tags, tag containers, exact versus hierarchical matching, Gameplay Tag Queries, restricted tags, state and identity tags, GAS gating, gameplay events, UI categories, migration from booleans or enums, or failures caused by missing, redirected, or mismatched tags.
---

# Unreal 5.8 Gameplay Tags

## Design the vocabulary first

Read [`references/taxonomy.md`](references/taxonomy.md).

1. State what each root means and who owns it.
2. Separate semantic roles, for example `State.*`, `Ability.*`, `Event.*`, `InputTag.*`,
   `Item.*`, `Damage.*`, and `UI.*`.
3. Use one canonical tag for one concept. Add redirects for renames; do not leave synonyms.
4. Declare stable code-facing tags natively. Use config sources for designer-managed sets.
5. Restrict editing of core roots on teams that need ownership enforcement.

## Select the operation

Read [`references/operations.md`](references/operations.md).

- Use `FGameplayTag` for one registered tag.
- Use `FGameplayTagContainer` for a set; it tracks explicitly added tags and their parents.
- Use hierarchical matching when a broad rule should include descendants.
- Use exact matching when only the literal tag is valid.
- Use `FGameplayTagQuery` for authored combinations of any/all/none expressions.
- Use a Gameplay Event tag for an occurrence with payload; use a state tag for a condition
  that remains true.

## Execute

1. Register tags before use through native definitions, config, Project Settings, or a
   Data Table source.
2. Store containers, not arrays of tag strings.
3. Choose exact or hierarchical semantics explicitly at every comparison.
4. Apply and remove runtime tags through the system that owns their lifetime—often an ASC
   effect or ability—rather than unrelated objects editing a loose container.
5. Keep input routing tags separate from gameplay state and ability identity.
6. Test parent/child direction, empty containers/queries, tag removal, redirects, cooked
   builds, replication, and save migration.

Read [`references/patterns.md`](references/patterns.md) for state, gating, events, identity,
and UI examples. Read [`references/migration-troubleshooting.md`](references/migration-troubleshooting.md)
when converting bools/enums or diagnosing invalid and non-matching tags.

## Required answer format

Return:

1. **Proposed taxonomy**, owners, and definitions.
2. **Storage type** and exact/hierarchical/query semantics.
3. **Ordered Blueprint nodes or C++ calls** using verified UE names.
4. **Lifetime and authority** for every runtime tag.
5. **Rename/save/replication consequences**.
6. **Truth-table tests** covering parent, child, exact, absent, and empty cases.

Do not invent tags, APIs, editor paths, or GAS behavior.

## Hard rules

- Never compare tag text manually.
- Never assume matching is symmetric: `A.B` matches query `A`, but `A` does not match
  query `A.B`.
- Never use exact matching accidentally when parent semantics are intended, or vice versa.
- Never use tags as an ungoverned replacement for every bool, enum, identifier, or value.
- Never make a gameplay event tag double as persistent state.
- Never rename a shipped tag without a redirect and save/content migration plan.

See [`references/sources.md`](references/sources.md) for the UE 5.8 source trail.
