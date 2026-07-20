# Movement system selector

| Need | Use | Reason / warning |
|---|---|---|
| Standard humanoid capsule movement and mature multiplayer support | `ACharacter` + `UCharacterMovementComponent` | Walking/falling/swimming/flying/custom modes, prediction, correction, smoothing |
| A special mode integrated with normal Character movement | CMC `MOVE_Custom` + custom sub-mode | Standard physics are suspended while custom physics run; custom state may need saved-move serialization |
| Short deterministic/programmatic ability movement | Root Motion Source or GAS root-motion Ability Task | Participates in Character root-motion networking when used correctly |
| Animation-authored committed movement | Montage root motion | Root motion takes priority over normal movement physics; gameplay must synchronize montage execution |
| Modular mode/layered-move architecture and willingness to carry experimental risk | Mover | Epic labels Mover Experimental in UE 5.8 |
| Vehicle, rolling body, non-capsule creature, or unconventional physics | Purpose-built Pawn/movement system | Character and CMC are designed together around Character movement assumptions |

## Selection procedure

1. Define collision shape and whether the entity must use `ACharacter`.
2. List movement modes and which may overlap as temporary layered moves.
3. State single-player/multiplayer, authority, prediction, and rollback requirements.
4. State whether motion is code-driven, animation-driven, or selected per action.
5. Choose the most mature framework that satisfies the requirements.
6. If choosing Mover, record experimental status, engine-version lock, fallback cost, and a
   packaged multiplayer prototype milestone before committing production content.

Do not migrate from CMC merely because custom movement requires C++. The deciding question is
whether CMC's Character/capsule/mode/network model still fits the game.
