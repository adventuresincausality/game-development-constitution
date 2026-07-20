# Corruption, failure, and recovery

Classify results instead of collapsing them into “no save”:

- absent slot/new user;
- unsupported/newer version;
- corrupt/truncated/wrong class;
- migration or validation failure;
- missing content/definition;
- permission, quota, storage, account, native UI, or platform failure;
- canceled/stale request.

## Recovery policy

1. Never apply partial or unvalidated state.
2. Preserve the original bytes/slot when policy and privacy permit.
3. Try a known-good backup/history only after validating its identity/version.
4. Surface which progress may be lost and require confirmation before reset/delete.
5. Record non-sensitive result code, schema/build, stage, size, duration, and recovery outcome.

Do not claim `SaveGameToSlot` is atomic across every platform. If robust replacement is required, use the
target platform's documented transaction/container behavior or implement a validated generation scheme
with multiple slots: write candidate generation, confirm success/readability, then advance a small index
or choose the highest valid generation. Test power loss at each boundary on real hardware.

Checksums detect accidental corruption; they do not make client data trustworthy. Encryption without
secure key ownership does not create server authority.
