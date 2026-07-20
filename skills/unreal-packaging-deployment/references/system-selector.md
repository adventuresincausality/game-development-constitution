# System selector

| Need | Primary surface |
|---|---|
| quick local packaged smoke test | Platforms menu -> Package Project |
| repeatable multi-step/device profile | Project Launcher custom launch profile |
| unattended CI/release artifact | AutomationTool `BuildCookRun` or BuildGraph |
| isolate content conversion | Cook commandlet |
| validate selected assets/maps during cook | cook validation flags plus validation reports |
| content ownership/chunk assignment | Asset Manager/Primary Asset Labels |
| inspect staged non-assets/config | staging manifest and archive tree |
| deploy/run on device | Project Launcher/AutomationTool plus platform tools |
| symbolicate packaged crash | exact executable, symbols, build identity, crash context |
| patch/DLC | retained base release plus platform delivery workflow |

Before acting, ask which phase produced the observed failure. “Packaging” is not a phase-specific
diagnosis.
