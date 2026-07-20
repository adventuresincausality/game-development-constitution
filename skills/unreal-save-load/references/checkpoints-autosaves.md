# Checkpoints and autosaves

## Checkpoint contract

Define whether a checkpoint restores exact simulation, strategic progress, or a curated restart state.
Exact physics/AI/projectile snapshots are expensive and often unstable; prefer authoritative semantic
state plus deterministic reset rules when the design allows it.

Trigger only after an atomic gameplay milestone: encounter settled, inventory transaction committed,
streaming destination ready, and no incompatible transition in progress. Freeze or snapshot through the
coordinator so systems agree on one logical time.

## Autosave queue

- debounce bursts and coalesce redundant requests;
- never run two writes whose completion order could regress the slot;
- preserve the newest dirty generation until a successful write includes it;
- show a saving indicator and prevent unsafe quit/slot deletion while required;
- rate-limit storage writes and platform UI;
- retry only classified transient failures with a bounded policy;
- keep manual and autosave histories distinct when overwriting would surprise the player.

Save before risky transitions and periodically at safe moments. Shutdown/suspend callbacks may provide
little or no time; they are a last chance, not the primary design.

For roguelike/anti-save-scum constraints, enforce design rules through commit points and authoritative
state. Do not corrupt reliability or hide failed writes to manufacture permanence.
