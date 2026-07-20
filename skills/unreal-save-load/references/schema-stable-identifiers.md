# Schema and stable identifiers

## Split definition from state

```text
Definition: Primary Asset ID / row ID / tag -> display, class, tuning, soft assets
Save record: stable instance ID -> definition ID + minimal mutable values
Runtime: resolved definition + validated mutable record + transient caches
```

Use value structs/arrays/maps in the SaveGame object. Avoid world pointers, components, delegates, latent
actions, timers, UI objects, replicated caches, and derived presentation data.

## Header fields

Include at least:

- format magic/product namespace when using a custom envelope;
- save schema version and optional subsystem versions;
- build/content compatibility identifier;
- slot/profile ID and platform-user binding policy;
- creation/update time for display only, not authority;
- map/checkpoint identity and playtime if needed;
- payload validation/checksum metadata when your format provides it.

## Identity

- placed persistent actor: authored stable GUID/domain ID stored with the actor;
- runtime-spawned actor: generated persistent instance ID plus definition ID and spawn record;
- item/quest/ability: stable domain/Primary Asset ID, never display text or array index;
- map: soft world/Primary Asset identity or governed map ID;
- destroyed/consumed placed actor: tombstone/state record keyed by stable actor ID.

Validate uniqueness in editor/CI. Duplication workflows must generate or deliberately preserve IDs based
on semantic identity; accidental duplicate GUIDs make load order decide state.
