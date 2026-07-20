# Asset, Sections, and Slots

## Create

Create via Content Browser -> Animation -> Animation Montage and choose the Skeleton, or right-click
an Animation Sequence -> Create -> Create AnimMontage. Add sequences to the Slot track.

## Sections

Create named Sections at semantic boundaries, for example `Start`, `Loop`, `Release`, `Recovery`,
or combo stages. A Section must begin at montage time zero. In the Sections panel, define the default
next section and preview each path. Keep names stable because Blueprint/C++ and GAS may reference them.

Use `Montage Set Next Section` to relink what follows the current section, such as changing
`Start -> Loop -> Loop` into `Loop -> End`. Use an immediate jump only when skipping the remaining
current-section motion is intended.

## Slots and Slot Groups

Add Slot nodes to the AnimGraph at the point where actions should enter. A Montage exclusively plays
through its Slot; a missing or bypassed node yields no visible pose. Use separate Slot Groups/body
regions only when simultaneous actions are intended, then layer them explicitly.

Avoid overlapping sequence segments on one Slot. When multiple Slot tracks represent variants, align
their end-to-end timing and Section boundaries so runtime section calls mean the same thing.

Typical regional order: locomotion base -> upper-body Slot -> Layered Blend per Bone/mask ->
inertialization if used -> final IK. Full-body actions may use a Slot after locomotion and replace it.
