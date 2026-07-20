# Tool selector

| Question | Start with | Escalate to |
|---|---|---|
| Which side owns the frame? | `stat unit`, `stat unitgraph` | Timing Insights + GPU events |
| Which CPU scope/thread is slow? | Timing Insights CPU tracks | task/context-switch trace, custom scopes |
| Which GPU pass is slow? | `stat gpu`, `profilegpu` | GPU trace, RenderDoc/platform profiler |
| Why did one frame hitch? | `stat unitgraph`, bookmark | Timing Insights, load/file/GC tracks |
| Why is memory growing? | platform/LLM stats | Memory Insights from process start |
| Which asset loaded or blocked? | async-loading stats | Asset Loading Insights + file/loadtime channels |
| What consumes bandwidth? | `stat net` where applicable | Networking Insights packet/content/stats |
| Are tasks waiting or serialized? | CPU trace | Task Graph + context-switch channels |
| Is UI/Slate expensive? | `stat slate`, `stat ui` | Slate trace/Insights tracks |
| Did a change regress? | repeatable stat/trace capture | exported timer statistics in CI |

Use RenderDoc or a platform graphics debugger for pipeline/resource correctness inside one frame;
use Insights and `profilegpu` to decide which frame/pass deserves that inspection.
