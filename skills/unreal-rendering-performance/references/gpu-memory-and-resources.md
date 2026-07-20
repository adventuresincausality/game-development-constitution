# GPU memory and render resources

Open Tools -> Render Resource Viewer. It is a snapshot taken when opened; press Refresh for a new
snapshot. Sort/filter by size, type, owner, resident, streaming, transient, and other flags.

## Audit

1. Record platform GPU-memory budget and current resident/allocated metrics.
2. Capture the representative map/camera after expected streaming settles.
3. Sort the largest resources and map each to an owning asset/LOD.
4. Separate persistent/resident allocations from transient aliased render-graph resources.
5. Compare before/after at the same location and streaming state.

Common actions:

- reduce texture resolution/format or correct texture groups/mips;
- correct non-streaming or always-resident resources that do not require it;
- reduce oversized render targets, history buffers, shadow pools, or feature buffers only after
  identifying their owner and quality effect;
- review Nanite streaming pool versus cache-thrashing tradeoff;
- remove duplicate/unused assets and unexpectedly loaded references;
- set per-platform LOD/texture/device-profile limits.

GPU resource allocation is not the same as process RAM, package size, or streaming pool occupancy.
Track each budget with the appropriate tool and avoid summing overlapping categories.
