# Symbols, logs, and crash reporting

## Packaging failure

Preserve the full Output Log/UAT log and exit code. Search backward from the final AutomationTool summary
for the first specific compiler, cooker, staging, signing, or platform error. Later “Unknown Error” and
cascade failures are usually not causal.

Record command, phase, asset/module/file, target, and the smallest rerun that reproduces it. Delete only
phase-appropriate generated output after preserving evidence; do not begin by deleting every cache.

## Runtime failure

Use a Development/Test packaged build with logs, symbols, and the same content/config as Shipping. Capture:

- project runtime log and platform/device log;
- command line, map, account, locale, hardware, driver/OS;
- crash GUID, callstacks, minidump/context, and build identity;
- exact executable/modules and matching symbols.

Shipping symbols can be produced and retained without publicly staging them. Symbolicate against the
exact binary; symbols from a rebuild of the same source are not guaranteed to match.

Packaged games do not automatically send reports to Epic. Include/configure Crash Reporter only when a
privacy-reviewed collection endpoint and consent policy exist. Test offline, unattended, user-decline,
upload failure, rate/size limits, PII redaction, and server symbolication.
