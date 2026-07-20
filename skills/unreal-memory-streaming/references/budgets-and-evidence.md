# Budgets and evidence

Record before analysis:

| Dimension | Required context |
|---|---|
| Hardware | platform, RAM/VRAM/unified memory, storage, driver/OS |
| Build | commit, configuration, cooked/PIE, device profile |
| Workload | map, path, speed, camera, content counts, duration |
| Cache state | cold process/OS/driver/DDC versus warmed state |
| Budgets | peak/resident memory by pool, ready latency, hitch threshold, quality floor |
| Capture | trace channels/stats, markers, start/end, sampling overhead |

Measure separately:

- process/platform committed and resident memory;
- engine/LLM allocation categories;
- UObject/assets and retained ownership;
- GPU resource allocations;
- conventional texture streaming pool;
- each virtual-texture physical pool and page-table memory;
- Nanite streaming pool;
- transient load/decompression/PSO compile peaks;
- package/install size.

Do not sum overlapping counters. Define whether each value is reserved, allocated, resident, wanted,
budgeted, or transient. Compare cold and warm runs when the player can experience both.
