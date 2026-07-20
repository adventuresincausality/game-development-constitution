# CPU/GPU simulation, collision, and events

## CPU simulation

Choose CPU when required data interfaces, per-particle game-thread interaction, CPU events, or
small counts outweigh the extra CPU cost. Profile many simultaneous system instances, not only one.

## GPU simulation

Choose GPU for large counts and GPU-supported operations. Define fixed bounds or a validated bounds
strategy. Confirm target-platform compute support, data-interface compatibility, collision method,
sort cost, and any CPU readback requirement.

## Collision selection

- Scene/depth-based GPU collision is view-dependent; off-screen or hidden geometry may not exist
  in the collision representation.
- Distance-field or hardware ray-tracing paths have their own platform/project requirements.
- CPU collision can query world collision but costs grow with particles and queries.
- Cheap effects may use analytic planes, kill volumes, or authored timing instead of scene collision.

## Events

Use Niagara events when one simulation layer must react to another and the chosen simulation target
supports the path. For gameplay events, let gameplay own the event and pass Niagara the result.
Event-driven secondary particles can multiply work abruptly; cap spawn counts and test burst storms.

When choosing a custom module, first confirm no built-in module already produces the behavior.
Document execution stage, required attributes, units, coordinate space, and supported simulation target.
