# Rebinding and user settings

Use UE 5.8 `UEnhancedInputUserSettings` and player-mappable key profiles for shipping remapping.

## Authoring

1. Enable Enhanced Input user settings in Enhanced Input developer/project settings.
2. Mark each remappable action mapping with Player Mappable Key Settings at the mapping or
   referenced Input Action according to its Setting Behavior.
3. Assign a stable unique mapping `Name`, localized `DisplayName`, display category, supported
   profiles, and optional metadata.
4. Use mapping slots for multiple bindings to the same semantic row, such as primary and
   secondary.
5. Register every relevant Input Mapping Context with user settings, including unloaded plugin
   contexts through the intended registration point.

Do not use localized labels or asset display names as persistent identity.

## Runtime remap

1. Obtain user settings from the correct Enhanced Input subsystem/local player.
2. Query the current key profile and mapping row/slot.
3. Capture the new `FKey`.
4. Query/report collisions according to project policy before mapping.
5. Build `FMapPlayerKeyArgs` with stable mapping name, slot, new key, and hardware/profile data
   required by the current API.
6. Call `MapPlayerKey` and inspect the returned failure-reason tag container.
7. Apply settings/rebuild UI as required.
8. Save settings asynchronously for ordinary UX unless the project has a reason to block.

Provide reset-row, reset-profile, clear-slot, cancel, and restore-default operations. Surface
failure reasons instead of silently failing.

## Conflict policy

Choose and communicate one:

- reject duplicate;
- ask to swap;
- replace old binding;
- allow duplicates only across mutually exclusive contexts;
- allow duplicates for accessibility.

Check device family, context overlap, action consumption/priority, and profile slot—not only
whether the raw key appears anywhere.

## Persistence tests

- relaunch and load;
- different local users/profiles;
- primary/secondary slots;
- keyboard, mouse, gamepad, and accessibility devices;
- changed/removed mapping assets after an update;
- plugin context registered while not loaded;
- reset to defaults;
- corrupted/missing save fallback;
- localized UI does not alter stable mapping identity.
