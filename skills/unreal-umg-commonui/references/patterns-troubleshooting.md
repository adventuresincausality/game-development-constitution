# Patterns and troubleshooting

## HUD from replicated health

1. Server owns and mutates health.
2. Health replicates with RepNotify or GAS attribute delegates.
3. Local presenter subscribes for the owning player.
4. Presenter emits normalized value and formatted text.
5. HUD updates progress/text once per change.

Route GAS-owned health to `$unreal-gas-attributes-effects` and replication to
`$unreal-replication`.

## Pause/inventory screen

1. Push an activatable screen onto the game-menu stack.
2. Apply the screen input config and UI Mapping Context.
3. Populate data before selecting desired focus.
4. Back deactivates the top screen.
5. Deactivation removes context/subscriptions and restores prior focus.

Remember that a local pause does not automatically pause an authoritative multiplayer server.

## Inventory list

- Store inventory entries as item data/UObjects, not entry widgets.
- Use `ListView` or `TileView` virtualization.
- In entry initialization/assignment, overwrite every visual field and selection state.
- Preserve selection by stable item identity across refresh.
- Submit move/equip/drop intent to authoritative gameplay; wait for replicated confirmation.

## Modal confirmation

- Push to the modal layer above menus.
- Give it an explicit default focus and cancel/Back route.
- Disable duplicate submission after accept.
- Return a semantic result callback; do not let the modal mutate distant gameplay state directly.

## Diagnostic table

| Symptom | Likely cause | First check |
|---|---|---|
| UI only works for host | wrong local-player ownership or client lacks presentation hookup | remote client + owning player |
| Event fires repeatedly after reopen | duplicate Construct/activation binding | symmetric unbind and guard |
| Controller cannot enter screen | no focusable desired target | activation focus path |
| Back leaks to gameplay | inactive/mis-layered screen or duplicate actions | action router and contexts |
| List rows show stale data | pooled entry not fully reset | item-assignment handler |
| Screen hitches on first open | synchronous construction/asset load | trace load and split/preload |
| Static screen costs every frame | Tick/raw bindings/invalidations | Slate Insights and compiler rules |
| UI claims action succeeded early | local widget mutated canonical state | authoritative confirmation path |

## Shipping gate

- All screens operable with every supported input device.
- Deterministic focus and Back behavior at every layer.
- Split-screen/local-player isolation verified if supported.
- Resolution, DPI, safe-zone, localization, and maximum-text-scale matrix passes.
- Remote-client state matches authoritative gameplay under latency and packet loss.
- UI trace meets target budget with no growing widget/delegate count.
