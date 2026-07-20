# Cine Camera Actor and lens

Cine Camera Actor adds filmback, lens, aperture, focus, and look-at tools suited to cinematics.

## Physical controls

- **Filmback/sensor** affects field of view for a given focal length and establishes aspect framing.
- **Current Focal Length**: longer narrows FOV/compresses framing; shorter widens FOV and exaggerates
  spatial perspective when camera position changes to preserve subject size.
- **Aperture (f-stop)**: lower f-number increases aperture and shallow depth-of-field potential;
  higher f-number deepens focus. Exposure interaction depends on project/camera settings.
- **Focus Method / Manual Focus Distance / Tracking**: defines focal plane behavior.
- **Post Process Blend Weight**: blends the camera's post-process overrides.

## Setup

1. Choose delivery aspect/resolution and filmback before composing.
2. Place the camera for perspective; then choose focal length for framing.
3. Set focus method and visualize focus plane/debug focus.
4. Tune aperture/DOF only after subject blocking and focus distance are stable.
5. Lock exposure behavior with the lighting/cinematic plan; avoid compensating lens mistakes with
   arbitrary post process.
6. Test camera motion for focus pumping, clipping, motion blur, and temporal artifacts.

Depth of field can obscure gameplay-critical information and increases rendering cost. For in-game
cinematics, preserve subtitles, skip prompts, UI safe area, and accessibility requirements.
