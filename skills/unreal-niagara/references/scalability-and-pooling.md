# Scalability, bounds, lifetime, and pooling

## Effect Type policy

Create Effect Types by semantic/cost family, such as impacts, ambient, character, or critical
telegraphs. They centralize system/emitter scalability, significance, cull reactions, update
frequency, validation rules, and performance baselines. Use system overrides only for justified
exceptions.

## Quality plan

For each platform/tier decide:

- maximum system/particle instances;
- distance, visibility, and instance-count culling;
- response when culled: deactivate, pause, or another supported reaction;
- emitter spawn-rate/count scaling;
- renderer/material simplification;
- collision, lights, shadows, sorting, ribbons, and fluids availability.

Gameplay-critical telegraphs need a legible fallback; do not cull their information content merely
because decorative effects are culled.

## Bounds and lifetime

- Visualize and test bounds through the complete motion envelope.
- Overlarge bounds reduce culling efficiency; undersized bounds cause popping/disappearance.
- Enable Auto Deactivate when finite emitters should deactivate after spawning ends.
- Every loop needs a caller-owned stop path and cleanup on owner destruction.

## Pooling

Pool only when repeated component creation is measured and the system resets reliably. Before reuse,
reset user parameters, attachments/transforms, age, loop state, data-interface bindings, and any
persistent emitter state. Test cancellation, rapid reuse, and owner destruction. Lightweight emitters
are another lever for many simple effects; compare them in Niagara Debugger rather than assuming.
