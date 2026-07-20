# Action selector

| Need | Prefer | Avoid |
|---|---|---|
| Persistent locomotion/mode | State Machine, Blend Space, Motion Matching | long looping Montage as primary locomotion |
| One-shot full-body action | Montage through full-body Slot | state explosion for every action |
| Upper-body action over locomotion | Montage Slot + Layered Blend per Bone | replacing the locomotion base |
| Start-loop-end action | Montage Sections with runtime next-section change | restarting separate assets every loop |
| Contextual animation variant, same timing contract | Child Montage or data-selected Montage | branching gameplay logic inside animation assets |
| GAS-owned ability action | Play Montage and Wait Ability Task | unmanaged montage lifecycle |
| Pure cosmetic one-frame response | short Montage or additive blend by complexity | authoritative gameplay in a cosmetic notify |

Before authoring, write:

- who may start the action;
- when commitment begins;
- which inputs buffer or cancel it;
- whether locomotion continues underneath;
- who owns displacement/collision;
- which outcomes are completed, interrupted, or cancelled.

If those are undefined, additional Montage Sections will conceal rather than solve the design gap.
