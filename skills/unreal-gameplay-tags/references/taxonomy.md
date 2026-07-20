# Gameplay Tag taxonomy

## Root design

Define roots by semantic role, not by whichever feature first needs a tag.

| Root example | Meaning |
|---|---|
| `State.*` | Condition currently true on an entity |
| `Ability.*` | Ability identity/family |
| `Event.*` | Occurrence or request carrying an event payload |
| `InputTag.*` | Semantic input routing identifier |
| `Item.*` | Item identity/category |
| `Damage.*` | Damage type/category |
| `GameplayCue.*` | Cosmetic cue identity used by GAS |
| `UI.*` | UI layer/action/category identity |

Do not mix these roles. `InputTag.Ability.Primary` may activate `Ability.Weapon.Fire`, but
neither should be used as `State.Firing` unless that is genuinely the same semantic fact.

## Naming rules

- Use PascalCase or the project's chosen stable convention consistently per segment.
- Make parent meaning include all descendants.
- Prefer nouns/categories for identity and adjectives/conditions for state where readable.
- Avoid synonyms: choose `State.Stunned` or `Status.Stunned`, not both.
- Avoid implementation names such as a Blueprint class path in the taxonomy.
- Add developer comments describing ownership and lifetime for non-obvious tags.

## Definition method

- Native tags: stable tags referenced from C++; use Epic's native declaration/definition
  macros and inspect Lyra's tag files for the 5.8 pattern.
- Config tags: designer-managed dictionary, optionally separated into `Config/Tags` sources
  for ownership and merge clarity.
- Data Table tags: useful when an external table workflow is deliberate.
- Project Settings: convenient management UI over configured sources.

## Governance

1. Assign an owner for every root.
2. Review new parents because their semantics affect all descendants.
3. Use restricted tag settings for protected roots when team scale requires it.
4. Add redirects for renames and remove obsolete references through a migration pass.
5. Validate assets and saves before deleting the redirect.

The taxonomy is an API. Version it with the same care as function names and serialized IDs.
