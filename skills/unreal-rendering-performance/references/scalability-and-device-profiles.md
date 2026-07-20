# Scalability and device profiles

## Ownership

- Use scalability groups for player-facing quality families.
- Use device profiles for platform/device defaults, feature support, memory buckets, and overrides.
- Store project overrides in project `Config`, not edited engine base files.
- Treat `Engine/Config/BaseScalability.ini` and platform base device profiles as current reference
  implementations, then override only measured needs.

Core groups include resolution, view distance, anti-aliasing, shadows, global illumination, reflections,
post processing, textures, effects, foliage, and shading. Validate the exact UE 5.8 group contents;
one `sg.*` value can change many CVars.

## Tier workflow

1. Define minimum/recommended target hardware and renderer feature support.
2. Establish Low/Medium/High/Epic intent with a stable gameplay-readability floor.
3. Begin with engine group defaults; measure every target device.
4. Override subsystem controls only when the group misses the budget or quality target.
5. Expose settings whose visual/performance trade is meaningful to players.
6. Restart/reload when a feature path or shader permutation requires it; label settings accordingly.
7. Test saved settings, auto-detection/defaults, upgrades, and unsupported hardware fallback.

Never let a low tier remove enemies, hazards, navigation cues, competitive visibility, or essential
feedback. Scale visual richness and representation, not game rules.
