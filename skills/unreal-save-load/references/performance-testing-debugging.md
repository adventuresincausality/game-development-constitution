# Performance, testing, and debugging

## Measure stages

Bookmark and time separately:

- snapshot gathering and lock/quiesce time;
- SaveGame object construction and validation;
- game-thread serialization;
- worker/platform write and callback latency;
- read latency;
- game-thread object creation/deserialization;
- migration, asset resolution, world travel, actor apply, and post-load rebuilds;
- payload bytes and record counts by subsystem.

Async persistence prevents the device IO from blocking the game thread, but UE 5.8 still serializes/
creates SaveGame objects on the game thread. Use Unreal Insights and packaged target builds to enforce a
snapshot/serialization hitch budget.

## Test matrix

- first boot, new profile, overwrite, manual/autosave rotation, delete;
- every supported released schema and a multi-version skip upgrade;
- newer/unknown, wrong class, truncated, bit-corrupt, zero-byte, oversized, duplicate-ID saves;
- removed/renamed definition, missing optional content, changed map/actor class;
- disk/quota full, read-only, permission/native UI denial, unplug/suspend/kill at each boundary;
- rapid requests, save during load, travel, death, logout, and stale callbacks;
- multiple local/platform users, account switch, split screen, offline/cloud conflict;
- dedicated/listen server authority, disconnect/reconnect, idempotent backend retry;
- Development/Test/Shipping packaged builds and every target platform.

Never ship migration code without immutable real-world fixtures and expected post-migration assertions.
Keep a diagnostic command/UI to report slot metadata and result codes without exposing payload secrets.
