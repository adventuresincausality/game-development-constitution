# Build, cook, stage, package, deploy

| Phase | Produces | Diagnose here when |
|---|---|---|
| Build | target binaries/modules | compile, link, module, architecture, or symbol failure |
| Cook | platform-ready assets/registry/shaders | serializer, asset, map, validation, DDC, or inclusion failure |
| Stage | runnable directory assembled from products | missing config, DLL, movie, prerequisite, or wrong file class |
| Package | native distributable/container set | signing, compression, container, store-format failure |
| Deploy | copy/install to device | connection, account, capacity, permission, or install failure |
| Run | launched staged build | startup, default map, runtime dependency, config, or content failure |

The standard packaging pipeline is executed by AutomationTool `BuildCookRun`. Use the editor for a quick
smoke build, Project Launcher for a reviewable profile, and UAT/BuildGraph for CI.

For an isolated cook, Epic documents:

```text
UnrealEditor-Cmd.exe <Project.uproject> -run=cook -targetplatform=<Platform> -map=<MapA>+<MapB>
```

Do not paste a generic release command blindly. Create the intended Project Launcher profile, execute
once, capture its generated `BuildCookRun` command, then parameterize only project, platform, output,
version, and credentials in CI. Query the installed engine with `RunUAT.bat BuildCookRun -Help` before
adding flags.

Archive outside the source tree. Keep stage and archive paths unique per build identity so stale files
cannot satisfy the next build accidentally.
