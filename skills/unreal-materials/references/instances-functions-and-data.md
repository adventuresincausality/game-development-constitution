# Instances, functions, and parameter data

## Parent and instances

1. Define a bounded family: for example opaque hard surface, foliage, or translucent VFX.
2. Put invariant graph structure in the parent.
3. Convert only intentional art controls to scalar, vector, texture, or static parameters.
4. Group and describe parameters; give safe defaults.
5. Create Material Instances for asset variations.
6. Use dynamic instances only when values must change on that object at runtime.

Static switches remove an inactive branch from a compiled variant but each distinct combination
can create another shader permutation. Use Material Analyzer (Tools -> Audit -> Material Analyzer)
to inspect descendants, static overrides, and opportunities to reparent common configurations.

## Material Functions

- Package repeated calculations, not arbitrary portions of a graph.
- Name and describe every input/output; set meaningful preview defaults cautiously.
- Enable Expose to Library and choose a concise category for team functions.
- Apply/save changes deliberately: edits propagate to loaded callers, and deleted pins break links.
- Duplicate engine/default functions before modifying them.
- Avoid circular function dependencies.

## Parameter ownership

- Material Instance: per material/asset variant.
- Dynamic Material Instance: per runtime material slot/component.
- Custom Primitive Data: per primitive values exposed to a shared material.
- Material Parameter Collection: global or level-wide scalar/vector state.

Do not use a global collection for actor-local state or spawn a dynamic instance for every object
when primitive data or instancing can express the variation.
