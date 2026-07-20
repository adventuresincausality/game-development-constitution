# Combos, loops, and variants

## Combo sections

Create one Section per committed stage and explicit recovery/exit. During an input window, gameplay
buffers the next action. After validation, call `Montage Set Next Section` for the current stage to
link to the next. If no valid input arrives, retain or relink to recovery. Do not jump based solely on
the input press; use the action's legal cancel/chain window.

Protect against stale input by tagging the buffered request with the current action/stage instance.
Clear it on consumption, interruption, cancellation, owner change, and timeout.

## Start-loop-end

Default graph: `Start -> Loop`, `Loop -> Loop`, `End -> complete`. When gameplay ends the held action,
relink `Loop -> End`. Define behavior when release happens during Start, after the loop boundary, or
while blending out.

## Child Montages

Use a Child Montage to replace animation segments while inheriting the parent's section/notify/slot
contract. Unreal adjusts replacement playback to the parent's time range, so visually inspect speed,
contacts, root motion, and notify alignment. Child Montages cannot parent another child.

Use separate parent Montages when variants have different gameplay timing or topology. Do not force
substantially different attacks into one inherited timing contract merely to reuse code.

## Concurrent actions

Slots in the same group can interrupt each other. Separate groups allow concurrency but can create
conflicting bone ownership, root motion, or gameplay lifecycles. Define precedence explicitly and
test reload+hit reaction, aim+fire, and action+death cases.
