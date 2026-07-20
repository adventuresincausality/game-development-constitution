# Slots, users, platforms, and cloud

## Slot taxonomy

Use explicit namespaces, for example:

- global machine/user settings;
- account/profile unlocks;
- manual playthrough slots;
- autosave/checkpoint ring;
- optional per-world/server cache.

Store display metadata in a small header/index that can be read without loading the entire world payload
when the platform permits. Rebuild a cacheable index from authoritative slots when it is missing.

`UserIndex` identifies the platform user but is ignored on some platforms. `ULocalPlayerSaveGame` binds a
SaveGame to a Local Player and supplies load/create, version, pre/post-save, and async helper lifecycle.
Use it for per-local-player state; keep machine-wide settings separate.

The lower-level `ISaveGameSystem` exposes platform capabilities including multiple-user support, native
UI, async operations, and save-name enumeration. Enumeration is not possible on every platform. Query
capability rather than assuming desktop behavior.

## Cloud/backend

The Online Services User File Interface is **Beta** in UE 5.8. If used, treat local and remote copies as
two versioned replicas with account identity, revision/generation, timestamp, and conflict policy. Time
alone is not enough when clocks differ.

Offer keep-local/keep-cloud/manual resolution when merging is unsafe. Never upload before validating the
account, schema, payload, and entitlement. Test offline creation, reconnect, concurrent devices, sign-out,
account switching, deletion, quota, and interrupted transfer.
