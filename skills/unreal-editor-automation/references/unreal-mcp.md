# Unreal MCP in UE 5.8

## Status and boundary

Unreal MCP is new and **Experimental** in Unreal Engine 5.8. Its engine/plugin identifier is
`ModelContextProtocol`; the Plugin Browser name is **Unreal MCP**. Features, APIs, and data formats
may change. Tool implementations come from toolset plugins; Epic's overview identifies
**AllToolsets** as the plugin used to enable the supplied tools.

Use MCP for small typed editor operations, inspection, and test invocation. Do not expose
arbitrary Python/shell execution as a general tool.

## Setup facts

1. Enable **Unreal MCP** and restart.
2. In **Editor Preferences > General > Model Context Protocol**, use Auto Start or start on demand:

```text
ModelContextProtocol.StartServer 8000
```

3. Default endpoint: `http://127.0.0.1:8000/mcp`.
4. Generate a supported client config from the editor console, for example:

```text
ModelContextProtocol.GenerateClientConfig Codex
```

Generate from the project/workspace root expected by the client. Epic notes that JSON configs are
merged, while the Codex CLI TOML configuration is write-once and will not overwrite an existing
file; inspect and reconcile stale configuration deliberately.

## Connection and execution guardrails

- Keep the listener loopback-only. There is no authentication layer and Epic says it is unsafe
  beyond the local machine.
- Do not issue overlapping tool calls. MCP synchronizes external requests by running invocations
  serially on the game thread.
- Time-bound expensive work and return progress/job IDs instead of monopolizing the game thread.
- Discover the current tool schema. Default tool-search mode advertises `list_toolsets`,
  `describe_toolset`, and `call_tool` rather than every tool eagerly.
- Validate all paths, classes, object counts, enums, and ranges inside the Unreal tool even when
  the MCP schema also validates types.

## AI mutation contract

For tools that change content:

1. Separate `inspect/plan` from `apply`.
2. Return exact affected objects and irreversible consequences in the plan.
3. Require explicit user authorization for delete, overwrite, project-wide, source-control, or
   difficult-to-reverse operations.
4. Enforce scope server-side; never trust the model to preserve a path boundary.
5. Use Unreal transactions/editor APIs where applicable.
6. Save only named packages after successful validation.
7. Return structured changed/skipped/failed results and validation evidence.

Prefer narrow tools such as `set_light_intensity(actor_path, value)` over generic property or
script executors. Make calls idempotent where possible and include a dry-run flag for batch tools.

## Known 5.8 limitations

- HTTP and Server-Sent Events are supported; `stdio` and WebSocket are not.
- Shipping toolsets do not advertise MCP Resources or Prompts.
- The Toolset Registry adapter is editor-only; runtime-hosted tools require direct registration.
- Live Coding does not propagate new tool `UFUNCTION` declarations; restart the editor.
