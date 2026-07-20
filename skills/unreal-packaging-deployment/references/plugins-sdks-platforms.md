# Plugins, SDKs, and target platforms

## Plugins and modules

For each enabled plugin, verify:

- supported target platforms and architectures;
- runtime versus editor/developer module type and loading phase;
- source availability or matching prebuilt binaries;
- `CanContainContent` and cook inclusion when content is required;
- dependencies declared in `.uproject`, `.uplugin`, and module rules;
- third-party libraries staged through `RuntimeDependencies`;
- Shipping compile and startup with editor-only code excluded.

Disable unused plugins before the release branch stabilizes, then recook and run the full suite. A plugin
that loads in Editor can still lack a target binary, include an editor-only dependency, or omit content.

## Platform readiness

Pin the engine-supported SDK, compiler/toolchain, platform extension, architecture, signing identity,
entitlements/capabilities, device OS, and store tooling. Validate with the platform's setup checker and
restricted documentation. Some platforms require additional SDKs/components; console packaging requires
a source engine build according to Epic's public UE 5.8 packaging guide.

Do not publish restricted platform paths, flags, certification rules, or keys into a general skill.
Route them to the authorized platform documentation and record only the verified outcome in private CI.
