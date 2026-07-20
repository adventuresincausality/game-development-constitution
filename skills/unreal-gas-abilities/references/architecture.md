# GAS ability architecture

## Enable and expose GAS

1. Enable the Gameplay Ability System plugin.
2. Add `GameplayAbilities`, `GameplayTags`, and `GameplayTasks` to the relevant module
   dependencies.
3. Give the ability-owning actor access to a `UAbilitySystemComponent` and implement
   `IAbilitySystemInterface` where appropriate.
4. Create the project's `UGameplayAbility` base class for shared failure, input, tag,
   targeting, and cleanup behavior.

## Choose ASC owner and avatar

`OwnerActor` owns the component; `AvatarActor` is the physical actor acting in the world.

| Need | Common layout |
|---|---|
| AI or pawn-local abilities reset with pawn | ASC on Pawn/Character; owner and avatar are that actor |
| Player abilities/cooldowns persist through pawn replacement | ASC on PlayerState; owner is PlayerState, avatar is current Pawn |

For a PlayerState-owned ASC, initialize actor info after server possession and on the owning
client when PlayerState/possession data is available. Reinitialize when the avatar changes.
Do not cache an obsolete avatar inside abilities.

## Granting

- Grant with `GiveAbility`/`FGameplayAbilitySpec` on authority; the Blueprint `Give Ability`
  node is ignored when the actor is not authoritative.
- Persist the returned `FGameplayAbilitySpecHandle` if equipment, loadout, or progression
  later removes/changes the grant.
- Separate the ability class from the grant's level, input binding, and source object.
- Decide whether a passive activates on grant, via effect/event trigger, or through an
  explicit startup pass; define its removal behavior too.

## Cross-skill boundaries

- Costs, cooldown effects, damage, attributes, stacking → `$unreal-gas-attributes-effects`.
- Ability/state/event/input tag taxonomy and query semantics → `$unreal-gameplay-tags`.
- Blueprint component/subsystem communication outside GAS → `$unreal-blueprint-architecture`.
