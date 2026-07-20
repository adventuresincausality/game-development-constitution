# PSO and shader compilation hitches

UE 5.8 enables PSO precaching where the RHI supports it. Component precaching gathers material, vertex-
factory, render-state, and mesh-pass PSOs after load and compiles asynchronously.

## Validate

1. Test a cooked Development build with an empty/cold driver cache on representative consumer CPU cores.
2. Enable `r.PSOPrecache.Validation 1` for lightweight numbers or `2` for detailed miss logging.
3. Inspect `stat PSOPrecache` and Shader Pipeline Cache runtime hitch statistics.
4. Correlate first-visible hitch with PSO compilation rather than asset IO/registration.
5. Wait during a loading screen until required outstanding compiles reach zero; use
   `FShaderPipelineCache::NumPrecompilesRemaining()` for the governing check.

If a component's PSO is not ready, the proxy delay strategy can skip the draw or show default material;
allowing the draw to block risks a hitch. Pick the visual/readiness policy explicitly.

## Bundled cache boundary

Runtime precaching should cover most cases. Add a manually recorded bundled graphics PSO cache when
validation proves misses or unsupported collection paths remain. Record representative content on each
platform/RHI, merge/stabilize through the documented cook pipeline, ship the cache, and repeat cold-cache
validation. Ray-tracing PSOs are not supported by the bundled-cache workflow documented for UE 5.8.

Do not judge from a warm developer driver cache. New materials, vertex factories, passes, quality tiers,
RHI changes, and content patches require renewed coverage.
