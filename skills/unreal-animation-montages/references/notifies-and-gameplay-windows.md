# Notifies and gameplay windows

## Choose the signal

- **Anim Notify**: one instant, such as a footstep or cosmetic cue.
- **Notify State**: begin/tick/end window, such as trace-active, invulnerability, or input acceptance.
- **Montage Notify / Montage Notify Window**: emits Play Montage proxy notify callbacks.
- **Branching Point timing**: precise synchronous ordering for a gameplay branch; more expensive.
- **Queued timing**: asynchronous and cheaper when minor frame imprecision is acceptable.

`Trigger Weight Threshold`, LOD filtering, dedicated-server firing, follower behavior, trigger chance,
and link method can all change delivery. Choose Relative/Proportional linking when a notify should
follow a moved/scaled montage segment; use Absolute only when timeline position must remain fixed.

## Authority boundary

Use notifies to align presentation and request bounded gameplay transitions. The gameplay owner still
checks current action instance, authority, targets, and idempotence before applying damage or durable
state. Network peers can cross an animation frame at different times; a cosmetic notify is not proof
that the server accepted the action.

For melee, a robust window is:

1. server/predicted ability owns the attack;
2. Notify State begins and enables a trace for that action instance;
3. each target is deduplicated;
4. authoritative hit validation applies effects;
5. Notify State ends or interruption cleanup disables the trace.

Test skipped sections, high play rate, low frame rate, blend-out during a window, and interruption
before both Begin and End.
