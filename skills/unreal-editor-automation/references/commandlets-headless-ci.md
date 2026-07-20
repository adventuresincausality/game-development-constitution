# Commandlets and headless CI

## Choose headless execution

Use `UnrealEditor-Cmd.exe` for commandlets and unattended automation. Quote the `.uproject` and
output paths. Capture stdout/stderr, process exit code, engine version, project revision, and
report artifacts.

Verified 5.8 examples:

```text
UnrealEditor-Cmd.exe Project.uproject -run=DataValidation

UnrealEditor-Cmd.exe Project.uproject -run=pythonscript -script="C:\Path\job.py"

UnrealEditor-Cmd.exe Project.uproject \
  -ExecCmds="Automation RunTest Project.Suite;Quit" \
  -ReportExportPath="C:\Reports\Automation"
```

Use `-ExecutePythonScript="..."` instead when the job needs the full editor and default startup
level loaded. The Python commandlet does not load a level automatically; load the required level
explicitly through `LevelEditorSubsystem`.

## CI contract

Each job must define:

- required plugins and build target;
- isolated workspace and writable Derived Data/Intermediate/Saved paths;
- timeout and hung-process policy;
- exact success/failure exit conditions;
- machine-readable report location;
- artifact retention for logs, screenshots, and diffs.

Never parse only a “completed” log line. Fail when the process exits nonzero, the report is absent
or malformed, tests fail, validation errors occur, or the expected output count differs.

## High-risk commandlets

`ResavePackages`, redirector cleanup, mass import, and migration rewrite many packages. Run on a
clean branch/workspace, narrow scope when supported, dry-run through discovery first, and inspect
the resulting diff. Epic's documented redirector cleanup example uses `ResavePackages` with
`-fixupredirects`; source-control flags can automatically check out files, so do not add them
without deliberate authorization.

## Determinism

Sort inputs, avoid current selection/editor UI state, seed random operations, use stable output
paths, and make retries idempotent. Record the command line with secrets removed.
