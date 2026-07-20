# Regression workflow

## Baseline and candidate

1. Freeze scenario, device profile, build settings, camera/input script, warm/cold state, and duration.
2. Run multiple baseline samples; retain raw traces and summary metrics.
3. Apply one change.
4. Run the same number of candidate samples in comparable thermal/background conditions.
5. Compare milliseconds, memory, bandwidth, hitch count, and percentile relevant to the budget.
6. Inspect a representative trace when the aggregate moved unexpectedly.

Minimum report:

| Metric | Baseline | Candidate | Delta | Budget | Result |
|---|---:|---:|---:|---:|---|
| median frame ms | | | | | |
| p95/p99 or worst-frame ms | | | | | |
| bound thread/pass ms | | | | | |
| hitch count over threshold | | | | | |
| memory/load/net metric | | | | | |

Do not call a change a win when it shifts cost outside the sampled interval, trades a rare severe hitch
for a better average, changes image quality/gameplay, or exceeds another budget. Keep a safety margin;
meeting 16.67 ms only in an ideal trace is not a robust 60 fps target.
