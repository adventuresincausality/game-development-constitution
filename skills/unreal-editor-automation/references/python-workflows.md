# Python editor workflows

## Enable and version

Enable **Python Editor Script Plugin** and usually **Editor Scripting Utilities**, then restart.
Unreal 5.8 embeds Python 3.11.8. Epic labels Python Editor scripting Experimental.

Python is available only in the editor—not PIE, Standalone Game, or cooked executables. Put
project modules in `Content/Python`; `init_unreal.py` in a configured Python path runs when the
editor detects it. Keep automatic initialization lightweight.

## Execution selector

- Output Log Python mode: exploration and one-line inspection.
- **File > Execute Python Script**: manual repeatable script.
- `-ExecutePythonScript="path"`: full editor, startup level loaded, then script.
- `-run=pythonscript -script="path"`: faster commandlet/headless path; levels are not loaded
  automatically.
- Startup Scripts: run after the default startup level loads.

Epic warns against putting `py ...` inside startup `-ExecCmd`; it can execute before the editor
environment is ready.

## API pattern

```python
import unreal

assets = unreal.get_editor_subsystem(unreal.EditorAssetSubsystem)
actors = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
```

Inspect the generated 5.8 Python API for the exact subsystem/method available in the enabled
plugins. The reflected `unreal` module changes with plugins and project C++ exposure.

Use `get_editor_property()` and `set_editor_property()` for reflected editor fields. The setter
triggers pre/post-edit behavior that direct Python attribute assignment may skip.

## Batch shape

Implement `discover -> plan -> apply -> save -> validate -> report`. Take explicit paths/filters
as arguments; do not depend on current selection in unattended jobs. Return a nonzero process
status or raise on hard failure so CI cannot misread a partial batch as success.

Use `unreal.ScopedSlowTask` for long interactive batches and honor cancellation. Use structured
logs with object path, operation, status, and diagnostic.
