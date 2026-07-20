# Instrumentation and exports

Use built-in trace events before inventing a custom event stream.

## C++ instrumentation

- Wrap important CPU scopes with the `TRACE_CPUPROFILER_EVENT_SCOPE_*` macro family.
- Emit `TRACE_BOOKMARK` for infrequent state transitions such as entering a boss phase or opening a
  menu.
- Use trace counters for quantities that change frequently: active enemies, queued requests, bytes,
  or pool occupancy.
- Use `LLM_SCOPE` tags for memory categories that should appear in LLM and allocation traces.

Do not emit per-object bookmarks every frame. Excess instrumentation changes the workload and can
make traces too large to analyze.

## Export for repeatable analysis

Unreal Insights supports headless analysis and response commands. A representative invocation is:

```text
UnrealInsights.exe -OpenTraceFile=path/file.utrace -AutoQuit -NoUI -ExecOnAnalysisCompleteCmd="@=D:\Tests\export.rsp"
```

Use `TimingInsights.ExportTimerStatistics` in the response workflow to export aggregate timer data for
named regions. Store the response file, capture contract, and threshold logic beside the test. Keep
raw `.utrace` files for regressions that require timeline inspection; CSV summaries cannot explain
dependencies or wait chains by themselves.
