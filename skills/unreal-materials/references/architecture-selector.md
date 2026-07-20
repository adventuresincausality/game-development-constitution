# Material architecture selector

| Need | Use | Cost/risk to check |
|---|---|---|
| Variants of one surface family | Parent + Material Instances | parent scope, static permutations |
| Repeated math or mapping | Material Function | propagation to every caller |
| Reorderable artist-facing layers | Material Layers | per-pixel layer cost and masks |
| Global scalar/vector state | Material Parameter Collection | global coupling; not per-object |
| Unique values per primitive/instance | Custom Primitive Data | index contract and update ownership |
| Landscape/object blending cache | RVT | page memory, uploads, static suitability |
| Local grime/damage/signage | DBuffer/deferred decal | receiving response, overlap, sort |
| Complex physical BSDF composition | Substrate | project/platform support and cost |
| One-off simple surface | Direct Material | avoid needless framework overhead |

Before choosing, answer:

- How many assets and variants share the logic?
- Which parameters vary globally, per material, per object, or per frame?
- Does the choice create new shader permutations or only runtime uniform values?
- Is the surface opaque, masked, or truly translucent?
- What is the largest screen coverage and overlap count?

Split parent families when domains, blend modes, shading models, or platform feature sets differ.
