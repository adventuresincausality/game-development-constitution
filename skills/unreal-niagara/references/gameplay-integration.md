# Gameplay integration

## Ownership contract

Gameplay decides that an event occurred and supplies stable effect inputs. Niagara renders the
response. Do not make particle collision the sole authority for damage or other persistent state.

Typical user parameters:

- world position/normal or source transform;
- color, intensity, size, duration, or normalized charge;
- source/target actor or component for a data interface;
- gameplay-owned seed/event identifier when repeatability matters.

## Spawned burst

1. Gameplay validates the event.
2. Spawn/activate the Niagara System at the authoritative visual location on the relevant clients.
3. Set user parameters before activation when the first frame depends on them.
4. Let finite emitters complete, then release/destroy/pool the component.

## Attached/continuous effect

1. The owning actor/component creates or activates the effect.
2. Attach using the intended transform rule and expose changing values at a bounded frequency.
3. Stop spawning first when a graceful tail is needed; deactivate or destroy when complete.
4. Clean up on owner end play, state exit, cancellation, and network relevancy changes.

Replicate compact gameplay state/events, then spawn cosmetic effects locally. Do not replicate every
particle. Decide whether late joiners need current continuous state, whether unreliable one-shot
events may be dropped, and whether prediction requires a reconciliation/cancellation path.
