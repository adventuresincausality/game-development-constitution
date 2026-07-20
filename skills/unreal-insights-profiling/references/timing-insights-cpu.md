# Timing Insights and CPU

## Capture

Launch with a narrow set such as:

```text
-trace=default,cpu,frame,bookmark
```

Or start a file capture at runtime:

```text
Trace.File PerfCase.utrace cpu,frame,bookmark
Trace.Bookmark WarmupComplete
Trace.Bookmark TestBegin
Trace.Bookmark TestEnd
Trace.Stop
```

Without an explicit path, trace files go under `Saved/Profiling`. Check active channels with
`Trace.Status`. Use `Trace.Enable`, `Trace.Disable`, `Trace.Pause`, and `Trace.Resume` to reduce
unwanted data, but do not expect late-enabled channels to reconstruct prior events.

## Analyze

1. Select only the marked test interval.
2. Inspect Game, Render, RHI, worker, and named threads; do not rank timers across unrelated frames.
3. Sort timer aggregation by inclusive time to find large subtrees, then exclusive time to find the
   scope itself. High inclusive/low exclusive cost means the children own the time.
4. Inspect call count. A small scope called thousands of times may need structural batching.
5. Open a slow frame and follow the critical dependency path, waits, task prerequisites, and long
   serial regions.
6. Compare median/typical frames separately from worst hitches.

## Common CPU shapes

- Long Game-thread scope -> gameplay/Blueprint/tick/AI/physics/GC work.
- Render-thread submissions -> primitive count, material sections, visibility, shadow/light setup.
- Worker tasks complete after parent waits -> imbalance, insufficient parallel work, dependency chain.
- Large gaps/waits -> synchronization, IO, locks, frame cap, or starvation; not necessarily "free CPU."
- Thousands of tiny events -> per-object/tick architecture, dispatch overhead, or trace over-detail.
