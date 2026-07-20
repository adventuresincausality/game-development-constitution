# Trajectory and Pose History

## Minimal AnimGraph

1. Add a Motion Matching node and assign its searchable Database(s).
2. Feed its pose through a Pose History node to Output Pose.
3. On Pose History, enable Generate Trajectory for the simplest documented setup, or supply the
   project's explicit query trajectory.
4. Add every schema-sampled bone to Collected Bones.
5. Compile, then visualize current and predicted trajectory during PIE.

Pose History caches prior pose samples and supplies trajectory/query history used by Pose Search.
If the schema asks for a bone that Pose History does not collect, the query contract is incomplete.

## Trajectory contract

Past samples describe actual recent motion; future samples describe movement intent/model prediction.
Positive sample offsets look forward and negative offsets look backward. Build prediction from the
same acceleration, braking, facing, and movement constraints the character will actually obey.

Symptom mapping:

- Starts selected too late -> future trajectory does not anticipate acceleration/input.
- Stops never selected -> prediction continues motion too long or stop data is filtered out.
- Wrong turn direction -> facing basis/coordinate space or future heading is wrong.
- Correct query but wrong pose -> database coverage, schema weights, bias, or candidate filtering.
- Query jumps after teleport -> reset history/state when the node becomes newly relevant or movement
  discontinuity invalidates previous samples.

Do not smooth trajectory until it looks plausible but sluggish. Compare raw intent, predicted path,
capsule movement, and selected animation in the same recording.
