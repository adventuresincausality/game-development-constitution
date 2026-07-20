# Troubleshooting

| Symptom | Likely cause | Action |
|---|---|---|
| Feet double-step during blend | Gait clips out of phase | Add matching Sync Group and foot markers |
| Feet slide at steady speed | Sample authored speed differs from movement speed | Place sample at measured speed; use stride/play-rate solution deliberately |
| Pop entering state | Pose discontinuity, zero/short blend, bad reference pose | Inspect source/target poses; tune crossfade/profile or use compatible inertialization |
| Inertialization logs runtime error | Request exists without downstream node | Add Inertialization after request source |
| Important source Notify never fires | Inertialization stops source evaluation | Use standard blend or move gameplay event ownership |
| Inertial blend looks stiff/broken | Poses too different or repeated interruptions | Use standard/custom blend; reduce interruptions |
| Upper body action moves legs | Branch root too high/low or wrong Blend Mask | Inspect affected hierarchy and blend depth/mask |
| Shoulder/spine twists | Local-space regional rotation composition | Test mesh-space rotation blend; fix additive/reference setup |
| Aim Offset explodes at extremes | Samples not mesh-space additive or bad axis/wrap | Correct additive setup; clamp/wrap inputs; inspect corner samples |
| Montage does not appear | Slot node absent/wrong Slot or Slot Group conflict | Add matching Slot to AnimGraph; inspect competing Montages |
| Montage cancels another action | Same Slot Group owns both | Separate ownership/Slots or define priority/cancel policy |
| Transition chooses wrong path | Competing true rules / priority | Set explicit Priority Order and simplify state truth |
| Time Remaining is wrong | Multiple relevant players | Enable Ignore for Relevancy Test on unrelated players |
| Notifies fire from tiny blend weight | Trigger Weight Threshold too low | Raise threshold and test blend edges |
| Network root motion diverges | Montage/RPC/authority mismatch | Make gameplay authoritative; replicate montage trigger and verify correction |
| Returning state resumes midway | `Always Reset on Entry` disabled | Enable when restart is intended; leave disabled only for resume behavior |

## Debug sequence

1. Inspect live Animation Blueprint and active state weights.
2. Display relevant variables: speed, local direction, movement mode, action state.
3. Preview Blend Space at actual runtime coordinates.
4. Inspect Sync Group leader/follower and marker names.
5. Temporarily bypass overlays to isolate base locomotion.
6. Re-enable Slot, additive, regional blend, and IK one stage at a time.
7. Inspect Montage instance, Slot Group, Sections, and blend weights.
8. Test interruption at start, midpoint, and blend out.
9. Test low frame rate and network latency where applicable.

## Acceptance checks

- Phase remains stable across gait blends.
- No visible pop at normal or interrupted transitions.
- Regional actions affect only intended bones.
- Gameplay events fire exactly once at the intended authority.
- Root motion and capsule remain aligned.
- Graph remains understandable and does not duplicate persistent gameplay truth.
