# Migration and troubleshooting

## Bool to tag

Convert a bool when the state is cross-system, needs GAS gating, has multiple sources, or is
part of a growing family.

1. Define the canonical tag and its owner/lifetime.
2. Replace writers with owned add/remove behavior.
3. Replace readers with exact or hierarchical queries.
4. Add source-count/lifetime handling if multiple systems can grant the state; do not let one
   source remove another source's truth.
5. Remove the bool after tests prove parity.

Keep a private, local, performance-critical bool when a global vocabulary adds no value.

## Enum to tags

Keep an enum for one mutually exclusive closed state machine. Use tags when categories are
open-ended, hierarchical, or multiple values can coexist. If converting:

1. state whether exclusivity still applies;
2. enforce removal of sibling state tags centrally;
3. migrate serialized enum values;
4. test no-state and invalid multi-state cases.

## Tag is invalid

- Confirm it exists in the registered dictionary in the cooked build.
- Confirm the config/tag source is included and plugin/module loads when expected.
- For native request APIs, do not suppress a missing critical tag without logging.
- Avoid constructing/comparing raw strings.

## Parent query fails

- Check direction: stored child can satisfy queried parent, not the reverse.
- Confirm exact variant was not used.
- Inspect explicit container tags and expected parents.
- Confirm both tags are valid and registered.

## Tag remains after state ends

- Identify the granting source: loose ASC tag, active effect, ability-owned tag, or custom
  container.
- Pair lifetime with that source and remove by effect/ability handle when possible.
- Check multiple grants/stacks; one removal may correctly leave another source active.

## Rename breaks content or saves

- Add a Gameplay Tag redirect from old to new.
- Resave/migrate dependent assets and serialized data.
- Audit text/config/Data Tables and native constants.
- Remove the redirect only after all supported content/save versions are migrated.

## Query permits everything

- Inspect empty All/No expressions and empty containers.
- Build truth-table tests for required present, required absent, blocker present, no tags,
  parent only, and child only.
