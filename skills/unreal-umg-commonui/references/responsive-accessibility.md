# Responsive layout and accessibility

## Layout procedure

1. Choose one design resolution and author screens consistently at it.
2. Configure the project DPI Scale Rule and curve; shortest-side is the common default, not a
   universal law.
3. Use anchors for edge/corner/center relationships.
4. Prefer Vertical/Horizontal/Grid/Overlay containers to absolute Canvas positioning.
5. Put critical edge UI under a Safe Zone.
6. Constrain text and dynamic content deliberately; test expansion rather than clipping it.
7. Preview device profiles, aspect ratios, DPI scales, and portrait/landscape when applicable.

## Accessibility baseline

- User-adjustable text/UI scale; UE 5.8 also adds `CommonUI.TextGlobalScaling` for CommonUI text.
- Critical state encoded with text, icon/shape, or pattern in addition to color.
- High-contrast focus state and readable selected/disabled states.
- Remappable semantic inputs and device-correct prompts.
- Captions/subtitles with size and contrast options when the game uses speech or critical sound.
- Toggle or scale screen shake, flashes, motion-heavy UI, and auto-advancing text where relevant.
- Avoid time-limited menu interactions unless the design truly requires them.

## Test matrix

Test at minimum:

- smallest and largest supported resolution;
- 16:9, ultrawide, and supported narrow aspect ratios;
- platform safe zones and mobile notches if applicable;
- 100%, larger, and maximum supported UI/text scale;
- keyboard/mouse, generic gamepad, and supported touch flow;
- longest localized strings and right-to-left layout if supported;
- color-vision simulation and grayscale readability;
- focus-only operation without a pointer.

## Failure recovery

- Edge content clipped: verify Safe Zone placement and anchors before adding offsets.
- Layout drifts by resolution: remove fixed pixel positioning and inspect DPI rule/curve.
- Large text overlaps: allow content-driven sizing/wrapping and define overflow behavior.
- Input glyph missing: verify active input type, platform Controller Data/metadata, and exact
  gamepad identifiers.
