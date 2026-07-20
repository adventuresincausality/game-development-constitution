# Streaming and runtime virtual texturing

Use Streaming Virtual Texturing (SVT) for large cooked textures/UDIMs when tile-level residency beats
whole-mip streaming. Use Runtime Virtual Texturing (RVT) for GPU-generated/cacheable surface data such
as landscape blending. Do not convert content solely because conventional texture streaming is poorly
configured.

## Physical pools

- Page-table memory grows on demand and generally remains until all related content is released.
- Each VT physical pool is a fixed-size LRU cache matched by format/tile configuration.
- Configure serialized pools under Project Settings -> Engine -> Virtual Texture Pool.
- Transient auto-grown pools exist only for the editor session; copy validated estimates into Fixed
  Pools for cooked builds.
- If visible tiles exceed a matching pool, continual eviction produces low-resolution/flickering tiles.

Use `stat virtualtexturing` for update/upload cost and page-table counters; use
`stat virtualtexturememory` for pool memory. Inspect each format/layer pool independently.

Larger pools reduce eviction but permanently reserve more GPU memory. Increasing upload limits/feedback
resolution can reduce latency while increasing CPU/GPU/upload work. Tune a repeatable traversal and test
camera cuts, fast motion, multiple views, and every device profile.

RVT low mips for large worlds may require far-away actors to remain resident. Bake/stream low mips when
that trades runtime generation and residency for acceptable disk/streaming cost.
