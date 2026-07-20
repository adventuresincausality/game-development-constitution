# System selector

| Need | Prefer |
|---|---|
| detect without physical response | query/overlap or trace with explicit channel |
| block/move kinematically | collision component + swept movement |
| free simulated prop | simple/convex rigid body |
| hinge, slider, tether, suspension | Physics Constraint Component/constraint profile |
| skeletal collision/ragdoll | Physics Asset |
| animation with localized physical response | Physical Animation Component/profile |
| breakable authored object | Geometry Collection + clustering/fields |
| region-based force/strain/state | transient/construction/persistent Chaos Field |
| deforming garment | Chaos Cloth Asset/solver |
| repeatable cinematic heavy simulation | authored/cache playback, noting Chaos Caching is Experimental |
| server-authoritative interactive physics | Predictive Interpolation or Resimulation by interaction needs |

Decision questions:

1. Must the result affect authoritative movement, damage, cover, or navigation?
2. Is continuous collision response required, or only a query/event?
3. What is the smallest collision representation preserving the gameplay silhouette?
4. What frame-rate/latency/piece/contact worst case must remain stable?
5. Can distant/settled results sleep, disable, remove, swap representation, or play a cache?
