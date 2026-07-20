# System selector

| Question | Primary evidence/system |
|---|---|
| Why is this asset loaded? | Reference Viewer/Reference Tree, Asset Manager audit |
| What owns retained CPU memory? | Memory Insights + LLM tags/callstacks |
| What owns GPU memory? | Render Resource Viewer + platform/RHI metrics |
| Why are textures blurry or thrashing? | `stat streaming`, texture accuracy/resolution views |
| Why do virtual textures show low-res tiles? | VT pool stats/visualization and feedback/upload demand |
| Why does entering a region hitch? | Asset Loading Insights, file/loadtime trace, World Partition evidence |
| Why does first rendering hitch? | PSO precache validation and Shader Pipeline Cache hitch stats |
| Why does geometry pop or stream forever? | Nanite stats/pool or World Partition readiness |
| Why did memory grow after repeated action? | marked Memory Insights allocation query |

Do not combine all streaming systems into one “pool.” Each has separate ownership, telemetry, eviction,
and quality behavior.
