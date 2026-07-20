# GAS and networking

## GAS

Use `Play Montage and Wait` when the Gameplay Ability owns the action. Supply Montage, rate, optional
start Section/time, root-motion translation scale, and `Stop when Ability Ends` deliberately.

Handle every output:

- **On Completed**: normal montage completion.
- **On Blend Out**: visual blend-out began; not identical to completion.
- **On Interrupted**: another montage/action displaced it.
- **On Cancelled**: task/ability cancellation.
- **On Blended In**: optional point when full action pose is established.

The task always stops on explicit ability cancellation. If Stop When Ability Ends is true, normal
ability end also aborts it. End/cancel the ability and clean gameplay windows on all terminal paths.
Custom projects often combine montage waiting with Gameplay Events; keep event tags and action
instance validation explicit.

## Network contract

Starting a Montage on one machine does not by itself start equivalent gameplay on every peer. The
server validates the action; the owning client may predict if the system supports it; simulated peers
receive replicated gameplay state/cues or an appropriate multicast/ability path and play presentation.

Epic's Montage documentation notes that an RPC must carry the Play Montage trigger; only root-motion
replication/correction is carried by the root-motion movement path. Notifies, Sections, hit results,
and arbitrary gameplay state are not automatically replicated by root-motion correction.

Test authority, autonomous proxy, simulated proxy, dedicated server, latency/loss, correction during
root motion, cancellation, relevancy loss, and replay/late state. Deduplicate predicted cosmetic cues
when confirmed events arrive.
