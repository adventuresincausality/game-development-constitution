# Selection tuning

Tune in this order:

1. Candidate validity and database coverage.
2. Trajectory accuracy relative to real movement.
3. Bad selectable ranges and branch-in rules.
4. Schema channels/samples.
5. Channel and per-sample weights.
6. Cost bias and reselection behavior.
7. Blend time/profile and procedural warping.

## Controls

- **Channel/sample weight**: raises that feature's influence. Weights are normalized unless the
  schema Data Processor disables normalization.
- **Continuing Pose Cost Bias**: negative favors staying; positive encourages leaving.
- **Looping Cost Bias**: negative favors loops; positive penalizes them.
- **Pose Reselect History**: blocks recently chosen poses for the specified history window.
- **Search Throttle Time**: controls how often a new search occurs; higher values reduce search
  frequency but can delay response.
- **Blend Time/Profile/Mode**: changes visual transition, not candidate correctness.

Avoid tuning by appearance alone. Record the bad moment and compare Active Pose, Continuing Pose,
and Pose Candidates. If the desired clip is absent, fix filtering/data. If present but expensive,
inspect the exact feature costs. If selected but visually poor, inspect clip ranges, blend, pose
continuity, root motion, warping, and IK.

Use `Pose Search: Override Base Cost Bias` or `Override Continuing Pose Cost Bias` notify states for
bounded clip regions. Negative is a bonus; positive is a penalty. Change one variable and replay the
same maneuver.
