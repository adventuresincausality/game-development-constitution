# Memory profiling

## Memory Insights

Start allocation tracing with the process:

```text
MyGame.exe -trace=default,memory
MyGame.exe -trace=default,memory,metadata,assetmetadata
```

Use marked A/B timestamps to query allocations live at a point, retained across an action, freed during
an interval, or monotonically growing across repetitions. Metadata improves asset/class attribution but
increases trace volume. Late connect cannot reconstruct allocations made before tracing began.

## Low-Level Memory Tracker

Launch with `-LLM` for tagged totals or `-LLMCSV` for periodic CSV under `Saved/Profiling/LLM`.
Inspect `stat LLM`, `stat LLMFULL`, `stat LLMPlatform`, and `stat LLMOverhead` where available. Default
tracker allocations are a subset of platform tracker totals; do not add them together.

Asset/AssetClass tag sets are Experimental and add memory/runtime overhead. Use them only for targeted
diagnosis and record that overhead.

## Interpretation

- growth that stabilizes may be an intentional cache; prove its cap and eviction;
- repeated retained growth after teardown suggests surviving ownership;
- high alloc/free rate with stable total is churn, not a leak;
- LLM category attribution and detailed allocation callstacks answer different questions;
- GPU resources, driver memory, mapped files, and platform allocations may not equal UObject estimates.
