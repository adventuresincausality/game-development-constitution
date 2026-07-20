# Playback and lifecycle

## Choose playback API

- **AnimInstance Montage functions**: direct control for systems already owning the AnimInstance.
- **Play Montage proxy node**: exposes Completed, Blend Out, Interrupted, Notify Begin, and Notify End.
- **Play Anim Montage**: simpler Character convenience function, without the same proxy notify outputs.
- **GAS Play Montage and Wait**: action lifecycle owned by a Gameplay Ability.

## Ordered lifecycle

1. Gameplay verifies eligibility and commits the action at the intended point.
2. Set required state/parameters before playback.
3. Play the Montage at rate/start section or time.
4. Treat a failed/zero-length play result as failure and unwind state.
5. React to notify windows and section changes without assuming completion.
6. On Blend Out, stop spawning new action work if visual recovery has begun.
7. On Completed, perform normal cleanup/completion.
8. On Interrupted or Cancelled, perform interruption cleanup and rollback only what is reversible.
9. Clean up when owner/ability ends even if no expected callback arrives.

Do not bind a second action to stale callbacks from the first. When using delegates in C++, bind them
to the specific montage instance/lifecycle and unbind on cleanup.

Stopping with blend time does not mean the action remains gameplay-active for that blend. Define
whether commitment ends at cancel request, blend-out start, notify end, or montage completion.
