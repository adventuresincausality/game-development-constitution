# Diagnostic recipes

| Symptom | First evidence | Bounded next step |
|---|---|---|
| black screen at startup | Game Default Map and runtime log | verify cooked map and staged effective config |
| works in PIE, asset missing packaged | cook root and manifest | trace owning map/Primary Asset/rule; clean target cook |
| plugin module missing | target/module/plugin descriptor and binary | build exact target; remove editor-only/runtime mismatch |
| DLL/shared library missing | staged tree and OS loader log | declare `RuntimeDependencies`; verify architecture/search path |
| wrong config in package | staged effective ini/device profile | identify later hierarchy override; remove generated input |
| cook succeeds, stage fails | UAT phase boundary and staging manifest | inspect non-asset source path, permissions, disk, stale output |
| Shipping behaves unlike Development | logs via Test/diagnostic candidate | compare compiled flags, modules, config, timing, stripped tools |
| package unexpectedly huge | container/chunk/file size report | rank largest additions and duplicate chunk ownership |
| tiny change creates huge patch | retained base/delta manifests | inspect resaves, compression/encryption, shader order, tool changes |
| crash has unreadable callstack | build ID and symbol match | retrieve exact private symbols; never use rebuilt equivalents |
| clean machine will not launch | OS loader/prerequisite/platform log | verify prerequisites and loose runtime dependencies |
| device platform unavailable | SDK/toolchain/platform component status | install supported version and re-run platform validation |

After each fix, rerun the smallest failing phase, then the complete clean artifact and acceptance suite.
