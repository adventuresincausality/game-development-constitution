# Debugging and recovery

## Symptom routing

| Symptom | Check first |
|---|---|
| Blueprint editor node missing | Editor-only parent/module, plugin enabled, restart required |
| Scripted Action absent | Correct utility base, Call in Editor, Supported Classes, compiled/saved |
| Python class/function absent | UE 5.8 API, plugin/module enabled, reflected exposure, editor restart |
| Python commandlet sees no actors | No level auto-loaded; load intended level explicitly |
| Property changed but UI/derived state stale | Used direct assignment instead of `set_editor_property`/setter |
| Undo does nothing | Operation is not undoable or object was not transaction-aware |
| Asset exists but did not save | Package not dirty, wrong package selected, save failed/read-only |
| Automation passes locally only | Selection/UI dependence, race, machine path, missing plugin/report |
| MCP cannot connect | Server status, loopback endpoint/port, client launched from config root |
| MCP new tool missing | Toolset enabled/schema discovery, Live Coding limitation, restart |
| Editor freezes during batch | Work on game thread, no progress/cancel, scope too broad |

## Partial failure recovery

Stop on the first failure when continuing could compound damage. Preserve:

- ordered operation log;
- objects changed before failure;
- packages saved versus only dirty;
- source-control state;
- validation/test output;
- whether transaction undo is available.

If all changes are undoable and unsaved, perform and verify undo. Otherwise use source control or
the prepared backup to restore named packages. Do not improvise filesystem replacement while the
editor has packages loaded.

After recovery, restart/reload as needed, requery objects from the editor rather than trusting
stale Python references, run validation, and inspect the diff before retrying.

## Tool hardening checklist

- Rerun on already-processed content.
- Cancel halfway through.
- Inject a read-only asset and one invalid input.
- Test zero, one, and many candidates.
- Test name/path collisions.
- Test unrelated dirty packages.
- Test headless mode without selection or an open level.
- Test packaged/cook impact when runtime content changes.
