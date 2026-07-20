# Versioning and migrations

Use a monotonic save schema version independent of marketing/build version. Add subsystem/record versions
when they can migrate independently.

## Migration pipeline

```text
read version N
validate minimum header
N -> N+1 pure data transform
validate invariants
repeat to Current
resolve current definitions
write upgraded copy only after full success and player/platform policy
```

Migration functions must be deterministic, idempotent at their declared boundary, and unable to mutate
the live world. Preserve fixtures for every supported released version. Never maintain only “current-1”
if players may skip multiple releases.

Use safe defaults for added fields. For removed/renamed IDs, maintain explicit old-to-new maps, Gameplay
Tag/Primary Asset redirects where applicable, and domain migrations. Asset redirectors do not migrate
arbitrary saved strings or external keys.

For custom UObject serialization, register a GUID with `FCustomVersionRegistration`, call
`FArchive::UsingCustomVersion`, and branch on `CustomVer`. Do not change an existing serialized layout
without advancing its version. Keep custom archive logic narrow and test both save and load.

If the file version is newer than the running game, reject it read-only with an actionable message. Do
not downgrade or overwrite it.
