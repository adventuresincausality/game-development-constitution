# Networking and prediction

## Policy selector

| Policy | Use |
|---|---|
| Local Only | Purely local behavior that must not execute on server |
| Local Predicted | Responsive locally controlled ability with server validation and GAS-supported reconciliation |
| Server Initiated | Server starts it and clients receive replicated execution |
| Server Only | Authoritative server behavior with no predicted local activation |

Choose explicitly. The correct choice depends on ownership, responsiveness, cheating risk,
and whether every side effect participates in GAS prediction.

## Prediction-safe design

- Keep the server authoritative for target legality and gameplay results.
- Use GAS effects and ability mechanisms with prediction support where appropriate.
- Treat instant attribute/tag changes, arbitrary RPCs, external object mutation, and spawned
  Actors as separate rollback problems; do not assume GAS reverses them.
- Separate predicted presentation from authoritative hit/damage confirmation.
- Do not grant abilities from clients.

## Target data

1. Client may collect responsive aim/target data for a locally controlled ability.
2. Send through the supported GAS targeting/event path.
3. Server validates range, line of sight if required, source transform, team/target rules,
   cooldown/cost, and timing.
4. Server applies authoritative results.

## Multiplayer verification matrix

Test in editor and packaged Development builds with dedicated server where relevant:

- owning client with artificial latency and packet loss;
- listen server player;
- simulated proxy observing the ability;
- activation rejected by server;
- cancel before and after commit;
- avatar death/respawn during execution;
- target disappears during targeting;
- duplicate input press/release;
- montage interruption and late event;
- ability grant/removal during possession change.

Log role, owner/avatar, prediction key where available, spec handle, activation result,
failure tags, commit result, and termination reason.
