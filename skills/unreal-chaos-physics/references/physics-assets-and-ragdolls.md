# Physics Assets, ragdolls, and physical animation

## Author

1. Open the Physics Asset Editor and fit minimal capsules/boxes/spheres/convex bodies to meaningful bones.
2. Remove or simplify tiny bodies that do not affect collision/readability.
3. Disable collision for adjacent bodies that should not contact.
4. Align constraint frames at anatomical/mechanical joints.
5. Set Swing/Twist limits from the intended range, then test animation extremes.
6. Assign mass, damping, physical materials, and body/constraint profiles by gameplay state.
7. Simulate in-editor with representative collision and impulses; then test in the actual character.

## Choose the behavior

- Full ragdoll: transition the required bodies to simulation and define capsule/movement/camera ownership.
- Partial ragdoll: simulate below a bone while animation controls the rest.
- Physical Animation Component: drive simulated bodies toward animation using a named profile.
- Rigid Body animation node: secondary physics inside the animation graph when its world/collision mode fits.

Blend in/out with an explicit state machine. On recovery, stop gameplay authority from reading unstable
limb contacts, choose a valid get-up pose/orientation, reconcile the character capsule, and return body
control in a known order.

Profile body/contact/constraint counts across all characters. Skeletal visual LOD does not automatically
guarantee a cheap physics representation; use Physics Asset/body/constraint profiles and distance/state
policy appropriate to the game.
