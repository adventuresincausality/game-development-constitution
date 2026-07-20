# Destruction, Geometry Collections, and Fields

## Author a bounded collection

1. Create a Geometry Collection from suitable source meshes in Fracture Mode.
2. Fracture only to the piece scale visible/interactive in play.
3. Cluster pieces into hierarchy levels; higher clusters simulate as fewer bodies until broken.
4. Configure collision/size-specific data, damage thresholds, material interiors, and initial state.
5. Anchor structural regions with construction fields or authored support.
6. Trigger external strain/velocity with a bounded transient field.
7. Sleep, disable, remove, or swap settled small debris according to gameplay authority.

Field types:

- **Transient**: execute temporary strain/force/velocity and disappear.
- **Construction**: establish initial persistent structure such as anchors.
- **Persistent**: evaluate every physics tick until removed; scope narrowly because cost persists.

External Strain must exceed the relevant cluster Damage Threshold. `Num Strain Hits` can advance multiple
cluster levels. Sleep pieces can wake from collision; Disabled pieces cannot unless explicitly activated.

Use field metadata/culling to restrict particle state, object type, position, and volume. Unbounded
persistent fields can affect unintended particles and add per-tick work.

Budget unbroken collections, active bodies, contacts, constraints, break events, renderer pieces, Niagara/
audio callbacks, replication, and removal. Cache deterministic cinematic destruction when live interaction
is unnecessary; Chaos Caching and `AChaosCacheManager` are Experimental in UE 5.8.
