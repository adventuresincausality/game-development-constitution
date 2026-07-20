# Database filtering and Choosers

High-level context should remove invalid candidates before low-level pose cost ranks valid ones.

## Pattern

1. Convert gameplay state into stable animation-facing enums/tags/booleans: locomotion mode, stance,
   gait, airborne, carried-object class, injury, or traversal context.
2. Evaluate a Chooser in the Motion Matching node update function.
3. Return only the Pose Search Databases valid for that context.
4. Feed the returned database array to the Motion Matching node.
5. Optionally cache the selected database/tags in a post-selection function for downstream presentation.

The Game Animation Sample uses this pattern to prevent, for example, run data from competing while
the player intends to walk. It also prevents a pivot from being interrupted by misclassifying its
second half as a new start.

Use database partition/filtering for categorical differences. Use schema weights to rank continuous
differences inside a valid candidate set. Use per-segment cost bias for a small preference, not to
override a contradictory gameplay category.

Keep chooser inputs thread-safe and animation-facing. Gameplay owns authoritative state; the AnimBP
copies the minimal values it needs. Define a fallback database when context is unknown and log empty
search sets during development.
