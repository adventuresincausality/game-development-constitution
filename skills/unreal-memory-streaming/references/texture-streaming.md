# Texture streaming

## Diagnose before changing the pool

1. Build texture streaming data: Build dropdown -> Build Texture Streaming.
2. Use Primitive Distance, Mesh UV Density, Material Texture Scales, and Required Texture Resolution
   accuracy/view modes to find bad bounds, UV density, scale analysis, or insufficient residency.
3. Run `stat streaming` and record Texture, Streaming, Wanted, budget, over-budget, and update time.
4. Reproduce the target camera path and distinguish temporary cached mips from sustained demand.

## Controls

| CVar | Effect/tradeoff |
|---|---|
| `r.Streaming.PoolSize` | texture-pool MB; larger reduces pressure but consumes target memory |
| `r.Streaming.FramesForFullUpdate` | larger lowers streamer CPU work but reacts more slowly |
| `r.Streaming.MaxTempMemoryAllowed` | more staging may improve throughput but raises transient memory |
| `r.Streaming.MipBias` | larger bias reduces wanted resolution and quality |
| `r.Streaming.UsePerTextureBias` | applies bias selectively to fit the pool rather than degrading every wanted mip |
| `r.Streaming.LimitPoolSizeToVRAM` | caps pool against available GPU memory where supported |

`r.TextureStreaming 0`, `r.Streaming.PoolSize 0`, `r.Streaming.UseAllMips`, and
`r.Streaming.FullyLoadUsedTextures` are diagnostic/showcase controls, not default shipping fixes.

For a controlled wanted-resolution test, `r.Streaming.DropMips 2` removes cached/hidden mips so the
Required Texture Resolution view reflects visible demand; restore it before final measurement.

Fix stale material-instance streaming data, wrong mesh UV density, oversized bounds, forced residency,
incorrect texture groups, and excessive source resolution before buying a larger pool.
