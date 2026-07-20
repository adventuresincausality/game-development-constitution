# GPU processing

## Maturity

- PCG GPU Processing: **Beta** in UE 5.8.
- GPU execution is available only on a subset of nodes, including Custom HLSL and supported point/
  spawner operations.
- GPU Procedural Instancing through GPU Static Mesh Spawner: **Experimental**.

## Adoption procedure

1. Profile the CPU graph and record node cost/point count.
2. Confirm the target nodes support GPU execution on every shipping platform/feature level.
3. Form one or a few long connected GPU compute regions.
4. Minimize CPU -> GPU uploads and GPU -> CPU downloads.
5. Compare end-to-end time, frame spikes, memory, and time-to-visible—not kernel time alone.
6. Verify output equality/acceptable variation and regenerate under stress.
7. Keep a CPU fallback or platform branch when coverage requires it.

GPU setup and transfer have CPU cost. Small data sets or graphs that bounce between CPU and GPU
can be slower than CPU-only execution.

## Experimental GPU procedural instances

Use only for runtime visual meshes that do **not** require:

- persisted/saved instance data;
- collision or physics;
- navigation;
- ray tracing;
- distance-field lighting contribution;
- static baked lighting;
- HLOD.

These instances live only at runtime in GPU memory. A GPU visual forest is not automatically a
walkable, collidable, nav-aware, HLOD-buildable forest.

## Custom HLSL

- Declare inputs/outputs and created attributes explicitly or use UE 5.8's supported source
  parsing path.
- Initialize every output; test with `pcg.GPU.FuzzMemory` to expose uninitialized memory use.
- Bound threads/data sizes and handle empty inputs.
- Use platform/feature-level switches for unsupported paths.
- Keep the HLSL contract documented beside the node; shader code is not self-validating.

## Profiling

UE 5.8 adds GPU execution time and GPU-created memory to the PCG Profiling window. Use platform GPU
tools for kernel detail. Runtime PCG is bursty; use Profile Kernel Index only as a controlled
profiling aid and disable it afterward.
