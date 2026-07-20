# Debugging patterns

## Isolation ladder

1. Confirm the Skeletal Mesh uses the expected AnimBP and Skeleton.
2. Play the Montage in its editor and preview the intended Section path/Slot.
3. Confirm the matching Slot node lies on the evaluated AnimGraph path.
4. Play without layering; then restore Layered Blend per Bone/masks.
5. Log play return, active montage/instance, current Section, position, weight, and callbacks.
6. Disable root motion and notifies separately to isolate pose versus gameplay/movement faults.
7. Test standalone, listen server, owning client, simulated client, and dedicated server.

| Symptom | First check |
|---|---|
| Montage reports playing but invisible | missing/bypassed Slot node, wrong Slot/Group |
| Upper body affects legs | layer branch bone/mask and mesh skeleton |
| Stops unexpectedly | competing montage in same Slot Group, ability cancel |
| Combo never advances | Section names, current Section, next-section relink timing |
| Loop never exits | wrong `From Section`, relink after boundary, stale input |
| Notify callback absent | playback node type, Montage Notify type, Slot/link/filter settings |
| End event missing | interruption/cancel path not handled |
| Mesh snaps to capsule | root motion disabled/mode mismatch/root lock |
| Server/client differ | playback trigger and gameplay state not replicated/predicted coherently |
| Works at normal rate only | notify window/section boundary tied to frames rather than semantics |

Acceptance suite: early/late cancel, overlapping action request, same-group interruption, death/stun,
owner destruction, extreme play rate, low FPS, root-motion obstacle, network latency/loss, and every
terminal callback.
