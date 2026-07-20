# Memory Insights

Allocation tracing must be enabled from process start. For a packaged project, use Development mode.

```text
MyGame.exe -trace=default,memory
MyGame.exe -trace=default,memory,metadata,assetmetadata
```

The metadata channels enable asset/class filtering but add trace cost and volume. Select them only
when the question requires attribution at that level.

## Query patterns

| Question | Comparison/query |
|---|---|
| What is live at time T? | live allocations at T, grouped by tag/callstack |
| What grew during action A? | allocations between pre-A and post-A markers still live afterward |
| Is it a leak? | repeat A several times; inspect monotonic retained growth after cleanup |
| What churns? | high allocation/free event rate with limited net growth |
| Which asset/class owns memory? | metadata/assetmetadata grouping and callstacks |

Correlate detailed allocation graphs, LLM tag tracks, modules, and Timing events. Distinguish:

- committed/resident/platform memory from traced allocations;
- CPU memory from GPU memory;
- cache growth that stabilizes from unbounded retained growth;
- expected streaming residency from leaked ownership.

Capture startup when startup allocations matter. Late connect cannot reconstruct allocations made
before the memory channel was active.
