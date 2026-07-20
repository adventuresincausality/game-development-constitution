# Build configurations and targets

## State configuration

| Configuration | Use | Important behavior |
|---|---|---|
| Debug | engine and game debugging | no optimization; slow; source engine context |
| DebugGame | game-module debugging | game code unoptimized; engine remains optimized |
| Development | daily packaged testing and profiling | most optimization; console/tools available |
| Test | shipping-like QA with selected stats/profiling | Shipping base with some diagnostic tools |
| Shipping | distribution candidate | full optimization; end-user console/stats stripped |

Shipping can still produce symbols. Store them securely rather than assuming an optimized build is
unsymbolicatable.

## Target type

- **Game**: standalone executable requiring cooked target content.
- **Editor**: editor executable/module target; never a runtime distribution artifact.
- **Client**: multiplayer client target when `<Project>Client.Target.cs` exists.
- **Server**: dedicated server target when `<Project>Server.Target.cs` exists.

Record both dimensions, for example `Development Game`, `Test Client`, or `Shipping Server`. Do not
compare performance, config, modules, or cook output across unlike targets and call it an A/B test.

Use Development first to retain logs/console/profile access, then repeat the release suite in Test and
Shipping. Verify exit UI and recovery paths that relied on a console during development.
