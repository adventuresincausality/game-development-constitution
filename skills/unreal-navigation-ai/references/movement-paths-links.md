# Movement, paths, areas, filters, and links

## Move request contract

Define for every move:

- actor target versus location target;
- pathfinding required and partial paths allowed/forbidden;
- destination projection policy and failure if projection fails;
- acceptance radius and whether agent/goal radii contribute;
- strafing/focus/rotation ownership;
- timeout or stuck policy;
- response to target movement, new priority, damage, death, unload, or possession change;
- completion result handling: success, blocked, off-path, invalid, aborted.

An acceptance radius is design tolerance, not a patch for bad reachability. Verify actual interaction range and animation alignment.

## Areas and filters

Nav Areas assign traversal cost or exclusion to polygons.

- High cost means “avoid if a cheaper path exists,” not “forbidden.”
- Use `NavArea_Null` for impassable space.
- Use query filters to vary cost/permissions by agent or decision without rebuilding world geometry.
- Keep area costs positive, bounded, named semantically, and tested against path length tradeoffs.

Use modifiers for mud, danger, crouch zones, doors, temporary hazards, or preferred lanes only when the cost model represents gameplay intent.

## Nav Links

Use `NavLinkProxy` to connect disconnected NavMesh regions such as drops, jumps, ladders, doors, lifts, or teleport transitions.

- Simple links express a connection and direction.
- Smart links allow runtime/custom traversal handling.
- Link endpoints must touch/project to compatible navigation.
- Direction, agent support, area/cost, enable state, capacity, and traversal behavior must agree.

For custom traversal:

1. Pause/hand off normal path following at the smart link.
2. Execute the movement/animation/gameplay action with authority and cancellation.
3. Validate landing/exit position and collision.
4. Resume/finish path following exactly once.
5. Recover on interruption, link disable, moving endpoint, or streamed destination loss.

## Stuck recovery ladder

1. Confirm a valid path and correct NavData/agent.
2. Confirm movement mode, collision, root motion, speed/acceleration, and controller ownership.
3. Repath when the target or relevant navigation changed.
4. Use a bounded retry with backoff or alternate candidate.
5. Abort to a higher-level decision; do not loop MoveTo every frame.
6. Teleport only when the design explicitly permits it and destination collision/navigation is ready.

## Verification

Draw the path, areas, links, and agent corridor; log request/result identifiers and timing. Test successful, unreachable, partial, invalid, aborted, moving-target, link, and streamed-boundary cases.
