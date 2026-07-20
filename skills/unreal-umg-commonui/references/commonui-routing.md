# CommonUI routing and layers

## Project setup

1. Enable CommonUI and Enhanced Input.
2. Set the Game Viewport Client Class to `CommonGameViewportClient`, or derive the custom
   viewport client from it.
3. In UE 5.8, enable/use the unified Enhanced Input support and attach CommonUI metadata to UI
   Input Actions as required by the project.
4. Define default Accept and Back actions and controller/input glyph data.
5. Build one root layout with explicit named layers.

## Recommended layers

| Layer | Typical content | Container |
|---|---|---|
| HUD | persistent nonmodal gameplay display | persistent root/content |
| Game menu | inventory, map, pause | activatable stack |
| Modal | confirmations, blocking dialogs | higher-priority activatable stack |
| Notification | toasts, rewards, transient messages | queue or nonblocking overlay |

Use a `UCommonActivatableWidgetStack` when only the top screen should be displayed and active.
Use a queue for sequential transient presentation. Do not drive layer priority with scattered
viewport Z-orders once the UI has a layer system.

## Activatable widget rule

Make a screen activatable when it is a meaningful node in the input hierarchy, needs an
activation lifetime, or owns Back behavior. Keep leaf controls and passive display widgets as
`UCommonUserWidget` or regular `UUserWidget`.

On activation:

1. Apply the screen's input configuration/mapping context.
2. Bind activation-scoped model events.
3. Establish the desired focus target.
4. Start entrance presentation after valid data exists.

On deactivation:

1. Stop screen-owned async work and animation callbacks.
2. Unbind activation-scoped events.
3. Remove screen-owned input contexts/configuration.
4. Let the stack restore the preceding active screen.

## Routing mental model

CommonUI routes input through the active Activatable Widget tree. The viewport hands input to
the action router, which begins at the topmost painted active root and recursively checks active
nodes/bindings. Deactivated widgets are not routing nodes.

## Back handling

- Define one universal Back action.
- The topmost dismissible activatable screen handles it.
- A modal closes before the menu under it.
- Root screens either decline Back or route it to an intentional product action.
- Never bind independent Escape/Gamepad-Face-Right handlers throughout the tree.

## Verification

- Open two nested screens and a modal; Back must unwind in exact reverse order.
- Switch mouse to gamepad at runtime; prompts and focus must update without a click.
- Deactivate a screen; it must no longer consume input.
- Reopen repeatedly; bindings and mapping contexts must not accumulate.
