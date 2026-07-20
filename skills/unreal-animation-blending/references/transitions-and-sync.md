# Transitions, sync, and inertialization

## Standard state transition

1. Build one directional transition for each allowed direction.
2. Base the rule on stable gameplay/movement variables.
3. Set Priority Order when multiple transitions can be true; smaller number wins.
4. Choose Duration and curve from the visible motion, then test interruptions.
5. Use Blend Profile when body regions should settle at different rates.
6. Use shared transition/crossfade settings only when editing one should intentionally
   change all users.
7. Do not enable Bidirectional; UE 5.8 documentation marks it unsupported.

For non-looping exit:

- Use relevant animation time remaining or Automatic Rule Based on Sequence Player.
- Mark unrelated players `Ignore for Relevancy Test` when they would corrupt the query.
- Test with altered play rate.

## Sync Groups

Use for animations representing the same cyclical action at different rates.

1. Give compatible nodes the same Group Name.
2. Set Method to Sync Group, or Graph when sync is propagated by graph structure.
3. Choose Group Role deliberately; highest-weight animation is leader by default.
4. Ensure clips begin with compatible body phase.
5. Avoid drastic clip-length differences that create play-rate pops.

## Marker-based sync

1. Add shared markers such as `LeftFootDown` and `RightFootDown` to every gait clip.
2. Put animations in the same Sync Group.
3. Ensure marker spelling and order match.
4. Remember: only markers common to all animations in the group are used.
5. If no matching markers exist, UE falls back to length-based syncing.
6. Set start/stop clips as leader where they must control the transition phase.

## Inertialization

Setup:

1. Set compatible transition/blend node Transition Type to Inertialization.
2. Add one Inertialization node after all request sources it should serve.
3. Place it near Output Pose to consolidate requests where appropriate.
4. Apply before final IK in the common whole-body path.
5. Keep requested blend under 0.4 seconds and test shorter first.

Use when:

- outgoing pose is still moving;
- poses are reasonably compatible;
- rapid natural settling is desired;
- source clip no longer needs evaluation.

Avoid when:

- poses are extremely different;
- source Notifies must still fire after transition begins;
- continuous interruptions degrade quality;
- exact crossfade sampling is required.

When multiple requests occur, UE uses the minimum requested duration.

## Dead Blending

Dead Blending predicts outgoing motion and may handle large differences better, but UE
5.8 labels the node experimental and does not recommend shipping projects that depend
on it. Use only for evaluation with an explicit Inertialization/standard-blend fallback.
