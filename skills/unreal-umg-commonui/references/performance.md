# UI performance

## Measure first

Profile a representative screen on target hardware with Unreal Insights and Slate Insights.
Record CPU time, paint/layout invalidations, widget count, construction hitches, draw elements,
and memory. Apply one optimization, then re-profile.

## Highest-value actions

1. Replace raw property bindings and widget Tick with events/delegates/FieldNotify.
2. Remove unused children; hidden children are still loaded and constructed.
3. Split huge screens into always-ready, preload, and asynchronously loaded sections.
4. Use `ListView`/`TileView`/`TreeView` for large collections. They virtualize entries and create
   only enough entry widgets for the visible region.
5. Reuse/pool dynamic widgets when churn is measured; clear all item state on reuse.
6. Reduce nested Canvas Panels and rich text where simpler containers/text suffice.
7. Avoid overlapping layers that create unnecessary Slate layer/draw cost.

## Invalidation selector

- **Global Invalidation**: evaluate for broad mostly-static UI; measure project-wide behavior.
- **Invalidation Box**: cache a mostly-static subtree whose geometry/paint rarely changes.
- **Volatile widget**: isolate a widget that changes every frame inside an invalidated tree.
- **Retainer Panel**: flatten a subtree to a texture, optionally reducing render frequency or
  applying an effect; costs render-target memory and can add latency/artifacts.

Do not wrap constantly changing trees in invalidation and repeatedly destroy the cache benefit.
Do not use a Retainer Panel as a generic speed button.

## Construction strategy

| Screen type | Strategy |
|---|---|
| Always-visible HUD | create once; push small updates |
| Frequent critical menu | preload or keep pooled/hidden if memory permits |
| Rare expensive menu | async load and release when dismissed |
| Long inventory | virtualized list; item objects separate from entries |
| Transient notifications | queue + bounded pool |

## Regression checks

- Open/close the screen 50 times: widget and delegate counts must stabilize.
- Scroll thousands of items: entry count should track visible rows, not item count.
- Change one field: confirm the entire tree is not invalidated unnecessarily.
- Profile editor and packaged target build; trust the representative target result.
