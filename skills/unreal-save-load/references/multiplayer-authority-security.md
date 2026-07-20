# Multiplayer authority and security

The server owns shared world state, competitive progression, match results, inventories/economy, and
entitlements. A client SaveGame may cache presentation or offline progress but must not become trusted
input merely because it was produced by UE serialization.

## Dedicated/listen server persistence

1. Snapshot authoritative server state at a transaction/checkpoint boundary.
2. Identify players by authenticated account/domain ID, not controller index or connection object.
3. Quiesce or version concurrent mutations so the snapshot is internally consistent.
4. Persist to the server/backend with idempotency/version checks.
5. Acknowledge only after durable success; retry without duplicating rewards/items.
6. On load, validate/migrate before spawning the world and accepting players.

For host migration or listen-server saves, define which state can transfer and how a new authority proves
freshness. Do not trust the host's local file for paid/competitive state without backend verification.

Keep local accessibility, graphics, controls, and cosmetic preferences per local player/device as
appropriate. Avoid sending private local settings to the server unless gameplay requires and consent
permits it.

Never log full save payloads, auth tokens, personal identifiers, or encryption keys. Treat imported/cloud
saves as hostile input: cap sizes/counts, validate enums/IDs/ranges, and reject impossible relationships.
