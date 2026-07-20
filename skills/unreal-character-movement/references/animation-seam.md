# Movement and animation seam

## Ownership

- CMC/capsule owns authoritative collision, position, velocity, acceleration, movement mode,
  and floor state for code-driven locomotion.
- Animation Blueprint reads those values and presents them.
- Montage root motion may temporarily drive movement when deliberately enabled.
- Mesh offsets, leaning, stride warping, and smoothing are presentation; do not move the
  authoritative capsule through arbitrary Anim Blueprint logic.

## In-place locomotion

1. Derive speed from CMC velocity, using horizontal or local-space components as the graph
   requires.
2. Derive direction from velocity relative to character/control rotation.
3. Read falling, acceleration, crouch, and movement mode from the Character/CMC.
4. Match animation play rate/stride warping to approved physical speed.
5. Keep gait thresholds derived from movement states/data, not duplicated magic values.

## Root motion

- Animation asset must contain root-bone motion and have root motion enabled.
- Animation Blueprint root-motion mode controls extraction/application.
- Epic warns that extracting root motion from everything moves Animation Graph work to the
  Game Thread; prefer the narrowest mode that satisfies the project, especially in networked
  gameplay.
- While Walking/Falling, Character physics still constrains vertical root motion; Flying
  applies full root motion.
- Root motion takes precedence over standard movement physics.

## Troubleshooting seam

If feet slide but capsule trajectory is correct, fix animation stride/play rate/warping. If
capsule trajectory is wrong, fix movement. If both systems rotate or translate the actor,
select one owner before tuning either.
