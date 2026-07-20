# Troubleshooting

## Ability will not activate

- Confirm the ability is granted on server and present in the ASC spec list.
- Confirm `InitAbilityActorInfo` has valid owner/avatar on this machine.
- Inspect activation required/blocked tags, cooldown tags, cost attributes, and custom checks.
- Capture failure tags and log role, ownership, and local control.
- Confirm the request uses `TryActivateAbility`/supported trigger.

## Activates on server but not owning client

- Check ASC replication and its owner chain.
- Reinitialize actor info when PlayerState and Pawn become available client-side.
- Check net execution policy and local ownership.

## Activates twice

- Ensure input is not routed both through numeric input binding and tag/event routing.
- Check duplicate grants and repeated bindings after respawn.
- Check whether both input press and gameplay event activate the same spec.

## Cost or cooldown missing

- Confirm `CommitAbility` executes and succeeds.
- Confirm cost/cooldown effects are configured and their attributes/tags exist.
- Confirm the commit point is reached on the correct authority/prediction path.
- Inspect active Gameplay Effects and cooldown tags on the ASC.

## Ability never ends

- Trace every task output and early-return branch to `EndAbility`.
- Handle montage completed, blend out, interrupted, and canceled outputs.
- Confirm custom Ability Tasks broadcast terminal delegates or end.
- Add one guarded termination helper in the project base ability.

## Cancel does not clean up

- Put persistent modifiers in effects that can be removed deterministically.
- Retain handles for spawned helpers/listeners/effects owned by the run.
- Remove manual movement/input locks during cancellation.
- Do not depend on a cosmetic Gameplay Cue to restore gameplay state.

## Client predicts a hit the server rejects

- Separate predicted feedback from confirmed damage.
- Validate target data on server.
- Check that non-GAS side effects are not assumed to roll back.
- Test under latency; log prediction and server result together.
