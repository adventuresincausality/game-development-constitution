# Automation surface selector

| Task shape | Choose | Notes |
|---|---|---|
| Right-click selected assets/actors | Scripted Action | `AssetActionUtility` or `ActorActionUtility`; Beta |
| Reusable dockable UI with controls/progress | Editor Utility Widget | UMG-based; Beta |
| Action on one placed Actor, possibly shared with runtime | `Call in Editor` | Avoid editor-only nodes in runtime-capable classes |
| Interactive viewport manipulation | Scriptable Tool | Modal, accept/cancel lifecycle; Beta |
| Cross-tool pipeline or large scripted batch | Python | Editor-only; Experimental in 5.8 |
| Deterministic editor extension/API | C++ editor module/plugin | Best for stable shared tooling and native tests |
| Headless repeatable batch | Commandlet or command-line Python | Prefer for CI; prove exit code and report output |
| Asset correctness | Data Validation | `IsDataValid`/`UEditorValidatorBase` |
| Code/system behavior | Automation Test | C++ framework, specs, low-level tests as appropriate |
| Gameplay/map behavior | Functional Test | Actor-based test in a level |
| AI invokes bounded editor functions | Unreal MCP | Experimental 5.8 server; schema-driven tools |

## Architecture

Split every nontrivial tool into:

```text
UI / command / MCP adapter
  -> validated request
  -> discovery and dry-run plan
  -> mutation service
  -> save/source-control boundary
  -> validation and structured report
```

Keep domain logic out of widget graphs and MCP transport handlers. A shared C++/Blueprint
library or Python module should make the same operation callable from UI, CI, or tests without
duplicating behavior.

## Escalation rule

Use the least powerful surface that fits. A one-selection rename does not need a global startup
object; a CI validator does not need a dockable UI; an AI tool should expose one typed intent,
not a general “execute arbitrary Python” endpoint.
