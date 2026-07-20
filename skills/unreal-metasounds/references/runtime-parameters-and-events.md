# Runtime parameters and events

## Spawned/owned Audio Component

1. Create or spawn an Audio Component with the MetaSound Source assigned.
2. Set all first-block-critical parameters before calling Play.
3. Send later values through matching Audio Component parameter setters.
4. Send Trigger inputs for discrete audio events such as release, reroll, or next layer.
5. Retain component ownership when later updates/stops are required.
6. Stop/fade and release the component on owner destruction, state exit, or cancellation.

Parameter names and types must exactly match graph Inputs. If a value appears ignored, confirm the
component is the playing instance, the input is not a constructor-only pin, and a later graph node is
not overwriting/masking it.

## Variables are not runtime API

MetaSound Variables support internal Get/Set flow. They cannot be accessed by Blueprint, and changing
them externally while a sound plays is not the live-control path. Use Inputs for caller-driven state.
Use Get Delayed Variable only when a one-block delay is intentional, commonly to break a graph cycle.

## Network boundary

Replicate the compact gameplay event/state when other machines need to hear it, then create/update
local Audio Components. Do not replicate DSP samples or every modulation value. Define whether a
one-shot may be dropped, whether a loop must reconstruct for late relevance, and whether predicted
audio must be cancelled or deduplicated after server response.
