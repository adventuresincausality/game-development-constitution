# Project Launcher, UAT, and CI

## Project Launcher

Create named custom profiles for repeatable build, cook, package, deploy, and run choices. Record:

- project and target platform/device;
- build configuration and target;
- By-the-Book versus On-the-Fly cook;
- maps/cultures/chunks/DLC/release version;
- package/archive/deploy method;
- command-line arguments and launch map.

Use its Output Log to capture the generated UAT command. Treat the profile as a reviewed specification,
not the only record; engine/profile changes can alter generated flags.

## CI record

Persist for every candidate:

```text
engine version + source changelist
project commit and dirty-state policy
UAT command/profile export and environment
SDK/toolchain/plugin versions
full UTF-8 log and exit code
cook/stage/container manifests and warnings
artifact hashes, sizes, build ID, symbols
test results and promotion decision
```

Fail on missing expected artifacts and selected warnings, not only a nonzero exit. Make credentials
ephemeral and redact logs. Keep DDC/cache state observable: warm caches may change duration, never the
intended output contract.

Promote an immutable artifact through QA/store lanes. Rebuilding “the same commit” can change toolchain,
SDK, generated data, timestamps, or dependencies.
