# Automation and Functional Tests

## Select the test level

- **Low-Level Test**: pure code with minimal engine environment.
- **Automation unit/feature test**: API or system behavior using Unreal services.
- **Automation Spec**: behavior-driven organization and latent/asynchronous steps.
- **Functional Test**: Actor-based gameplay/map scenario, Blueprint-friendly.
- **Screenshot Comparison**: controlled rendering regression.
- **Content stress test**: loading/compiling broad content to find crashes or invalid assets.

The Automation Framework is C++-based and relies on engine systems, so Epic does not recommend
it for truly pure unit testing; use Low-Level Tests for that boundary.

## Test design

1. Put tests in a project/plugin test module with deliberate build availability.
2. Give names a stable hierarchy such as `Project.System.Behavior`.
3. Create and tear down all state the test owns.
4. Use latent commands/spec continuations for async engine work; do not block the game thread.
5. Assert observable outcomes and include diagnostic context.
6. Isolate files, maps, network roles, random seeds, and timing.

Only mark a test **Smoke** when it satisfies Epic's speed promise: intended to run at every
startup and complete within one second. Do not label slow map/content tests Smoke.

## Run and report

Interactive: enable required test plugins, then use **Tools > Test Automation**.

Command line:

```text
-ExecCmds="Automation RunTest Project.System;Quit"
-ReportExportPath="<output path>"
```

The report path produces JSON with related HTML files. Fail CI for failed tests, missing reports,
engine crashes, or timeouts.

## Functional Tests

Place/configure a Functional Test Actor in a dedicated deterministic test map. Begin only after
required actors/assets are ready; call the framework's success/failure completion path on every
branch. Keep test-only content out of production cook/chunks unless the target execution needs it.
