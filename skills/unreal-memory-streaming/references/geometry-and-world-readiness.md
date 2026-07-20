# Geometry and world readiness

## Nanite

Nanite streams fine-grained geometry pages. `r.Nanite.Streaming.StreamingPoolSize` trades memory for
fewer IO/decompression requests; too small a pool can thrash even in a static view. Use Nanite Streaming
Geometry visualization and `NaniteStats` before changing it. Validate package/storage cost separately.

## Conventional meshes and skeletal content

Per-platform LODs reduce render cost and may reduce memory when higher LODs are stripped or excluded by
platform policy. Confirm which LOD/render resources are resident in Render Resource Viewer. Do not assume
an unseen mesh releases while a component, asset, or streaming handle still owns it.

## World Partition readiness

World Partition cell loading is only one layer. Ready-to-enter must include:

- required cell activated/loaded state;
- collision and navigation ready;
- required assets and bundles loaded;
- texture/Nanite/VT quality above the declared floor;
- render/physics components registered;
- PSOs required for first visible use compiled;
- gameplay initialization complete.

Derive preload lead distance from maximum approach speed × worst measured readiness latency plus look-
ahead and safety margin. For teleports, use a temporary destination streaming source and wait on the
World Partition subsystem, then apply the broader readiness gate. Avoid globally inflating loading range
to solve one path; it raises residency and concurrent IO everywhere.
