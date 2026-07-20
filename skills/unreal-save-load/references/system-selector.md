# System selector

| State | Prefer |
|---|---|
| playthrough/profile/world progress | custom `USaveGame` schema and coordinator |
| per-local-player data with lifecycle/version helpers | `ULocalPlayerSaveGame` |
| resolution/window/scalability | `UGameUserSettings` |
| Enhanced Input key profiles | Enhanced Input User Settings or integrated custom serialization |
| immutable item/quest/ability definitions | Data Asset/Table/Registry; save stable ID only |
| map-travel-only runtime state | GameInstance/subsystem/player state, not necessarily disk |
| server-owned persistent world/account | authoritative backend/database; client save is cache/UI only |
| interoperable/external data format | explicit custom format plus validation/versioning |

Choose one coordinator, commonly a GameInstance Subsystem, to own slot/user policy, snapshot requests,
operation serialization, migration registry, callbacks, and telemetry. Individual actors contribute
records; they do not independently race writes to the same slot.
