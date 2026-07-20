# Data Channels and data interfaces

## Data interfaces

Use a data interface when the system needs structured access to an object or dataset such as a
Skeletal Mesh, Static Mesh, curve, texture, render target, audio, or scene data. Verify whether the
interface supports CPU, GPU, both, and the required access mode on target platforms.

Prefer passing a stable owning component/object once over updating arrays of equivalent values every
frame. Guard invalid/destroyed references and define a fallback pose/value.

## Niagara Data Channels

NDCs carry a defined payload between gameplay code and Niagara, or between Niagara systems. They are
useful for combining many repeated bursts into a shared listener simulation.

1. Create a Data Channel asset and define the smallest typed payload.
2. Associate the listener system(s).
3. Configure a continuous listener with an intentional lifetime; Epic's pattern uses infinite loop
   behavior plus Complete If Unused for cleanup.
4. Read the channel and spawn particles from received entries.
5. Have Blueprint/C++ publish events with consistent coordinate space and units.
6. Test maximum event rate, island bounds/extents, unused cleanup, and dropped/late events.

Use direct system user parameters for a few long-lived instances. Use NDC when repeated system spawn
overhead and many same-schema events justify a shared simulation. Do not turn the channel into an
unbounded general gameplay message bus.
