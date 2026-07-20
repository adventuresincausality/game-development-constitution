# Tag operations

## Types

- `FGameplayTag`: one registered hierarchical name.
- `FGameplayTagContainer`: explicit tags plus cached parent relationships.
- `FGameplayTagQuery`: serialized any/all/none expression tree evaluated against a container.

Use containers instead of `TArray<FGameplayTag>` for tag-set behavior.

## Matching direction

Given stored tag `State.Movement.Sprinting`:

| Test | Result |
|---|---|
| hierarchical `HasTag(State.Movement)` | true |
| exact `HasTagExact(State.Movement)` | false |
| hierarchical query for `State.Movement.Sprinting.Fast` | false |
| exact query for `State.Movement.Sprinting` | true |

Matching is directional. A child satisfies a parent query; a parent does not satisfy a more
specific child query.

For individual tags, `MatchesTag` includes parent matching and `MatchesTagExact` requires the
literal tag. For containers, use `HasTag`, `HasAny`, and `HasAll` or their `Exact` variants.

## Empty semantics

Epic documents that an empty input container returns false for HasTag/Any-style tests, while
All-style tests return true because no required tag is missing. Empty query expressions have
similar logical identities. Test empty authored queries; a missing requirement can otherwise
silently allow everything.

## Query selection

Use direct container operations for simple code-owned checks. Use `FGameplayTagQuery` when:

- designers author nested any/all/none logic;
- the rule is stored in a Data Asset/Table;
- multiple systems evaluate the same serialized rule.

Example prerequisite:

`ALL(ANY(State.Weapon.Rifle, State.Weapon.Pistol), NONE(State.Disabled, State.Dead))`

Keep queries named/documented. Dense anonymous query trees become difficult to debug.

## Blueprint implementation

Use Gameplay Tag and Gameplay Tag Container variable types and the Gameplay Tags Blueprint
library functions shown by the context menu. Confirm exact versus non-exact node choice in
UE 5.8; do not compare `ToString` output.
