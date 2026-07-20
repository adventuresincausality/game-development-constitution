# AI Perception and EQS

## AI Perception setup

Place `AIPerceptionComponent` on the authoritative AI owner, commonly the AIController. Add only required sense configs and select a Dominant Sense when location resolution needs it.

### Sight

- `Sight Radius`: range at which an unseen target can begin perception.
- `Lose Sight Radius`: hysteresis range for losing an already seen target; keep it at least as large as Sight Radius.
- `Peripheral Vision Half Angle Degrees`: angle from the forward vector, not total cone width.
- `Auto Success Range from Last Seen Location`: retains sight within a local region; use only if it matches the fiction.
- Affiliation is fully defined through team interfaces/C++; Blueprint-only projects commonly detect neutrals and filter through tags/team logic.

### Hearing

Configure range/affiliation and emit explicit `Report Noise Event` data with location, loudness, instigator, and tag as required. Audio playback alone is not automatically a gameplay hearing stimulus.

### Memory

`Max Age` controls stimulus aging; `0` means it never expires. To actually forget stale actors through the Perception system, enable `Project Settings > Engine > AI System > Forget Stale Actors`. Keep last-known position/time and “currently sensed” as distinct state.

Use `AIPerceptionStimuliSourceComponent` or registration APIs for designated sources. Unregister runtime sources when their lifetime ends.

## Perception event pattern

1. Receive `OnTargetPerceptionUpdated`/appropriate batched event.
2. Validate actor and stimulus sense/success.
3. Update observation data and timestamp.
4. Let decision logic choose whether the actor becomes a threat/target.
5. On loss/expiration, preserve or clear last-known state according to design.
6. Rate-limit expensive follow-up queries across populations.

## EQS boundary

EQS generates candidate Actors/locations, then Tests filter and score them relative to Contexts. Use it for “best valid option,” not for direct known facts.

Workflow:

1. Define the smallest candidate Generator/domain.
2. Supply explicit Contexts: querier, target, squad, objective, custom location.
3. Apply hard invalidity as filters.
4. Score surviving candidates with named, normalized design criteria.
5. Select a deliberate run mode: best, random from top 5%, random from top 25%, or all matching.
6. Handle no-result and stale-result cases.
7. Cache/reuse only while inputs remain valid.

Current UE 5.8 documentation still calls EQS experimental. Bound candidate count, trace/path tests, query frequency, and simultaneous agents. Use an `EQSTestingPawn` for editor visualization, but clear its Query Template while editing expensive queries to avoid continuous heavy updates.

## Debugging

- Gameplay Debugger: apostrophe, Perception on Numpad `4`; EQS category when executing.
- EQS Testing Pawn: blue failed/filtered candidates; green-to-red scored desirability.
- Record query template, owner, contexts, named parameters, run mode, candidate counts, duration, result, and failure reason.

Perception/EQS do not replicate internal truth automatically. Run authoritative decisions on the server and replicate resulting gameplay state.
