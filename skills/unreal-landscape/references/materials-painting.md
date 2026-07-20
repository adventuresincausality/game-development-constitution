# Landscape materials and painting

## Keep three concepts separate

- **Edit Layer**: non-destructive authoring stack for height/weight/visibility edits.
- **Target Layer**: named weightmap channel exposed by the Landscape material and painted/imported in Paint mode.
- **Layer Info asset**: defines storage/blending behavior and can associate a Physical Material with a Target Layer.

Names are case-insensitive in the material system but must remain stable and governed. Renaming one side of the contract can turn a layer weight into zero.

## Blend selector

- Use **weight blending** for mutually normalized base surfaces such as soil/grass/rock.
- Use **alpha/non-weight blending** for an independent overlay whose ordering is intentional.
- Use **height blending** when per-layer height data should influence the transition; verify zero-weight intersections and normal behavior.

Weight-blended layers share a normalized total. Erasing a fully weighted layer cannot reveal a nonexistent underlying weight; paint the desired replacement layer instead.

## Authoring workflow

1. Define a small semantic layer list and required outputs: base color, normal, roughness, displacement, physical surface, grass mask, PCG mask.
2. Build reusable material functions and parameters rather than duplicating graphs per layer.
3. Create matching `LandscapeLayerBlend`, `LandscapeLayerSample`, or custom weight logic.
4. Assign the material to a test Landscape.
5. Create the correct Weight-Blended or Non Weight-Blended Layer Info for each Target Layer.
6. Fill a deliberate base layer before local painting.
7. Paint boundary, full-weight, zero-weight, steep-slope, distant-LOD, and wet/snow overlay cases.
8. Trace/test physical surfaces and derived grass/PCG masks.

## Performance controls

- Every visible component compiles the material permutation needed by the layers used there.
- Use `LandscapeLayerSwitch` to remove operations when a layer contributes zero in a region.
- Share samplers/material functions where correct and watch texture-sampler limits on target feature levels.
- Prefer a few meaningful layers to many nearly identical variants.
- Mobile technically supports multiple layers subject to sampler limits; Epic recommends only three. Treat target measurement as the deciding constraint.
- Use RVT when caching complex terrain shading or terrain/object blending produces a measured benefit, not as mandatory architecture.

## Physical surface validation

Assign Physical Materials through the intended Landscape layer/material path. Test several points per surface, transitions, thin paint, and cooked builds with traces returning physical material. Visual appearance and returned physical surface must agree wherever footsteps, effects, friction, or gameplay depend on it.

## Common failures

- **Black/default Landscape**: material compile error, missing Layer Info, no filled base layer, or unsupported sampler/permutation.
- **Paint layer absent**: name mismatch or material never samples it.
- **Erase seems ineffective**: weight normalization; paint the replacement layer.
- **Wrong footsteps**: dominant layer/Physical Material assignment differs from visual expectation.
- **Shader explosion/hitch**: too many expensive layers/combinations and unbounded permutations.
