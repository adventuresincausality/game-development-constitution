# Replication and UI

## Authority

The server owns final gameplay state. Clients may predict supported GAS changes, but every
effect and calculation must still be designed for rejection/correction.

## Attribute replication

For replicated attributes in native AttributeSets:

1. Mark the attribute property for replication with a RepNotify function.
2. Add it to `GetLifetimeReplicatedProps` with the chosen replication condition/notification.
3. In the RepNotify function, invoke `GAMEPLAYATTRIBUTE_REPNOTIFY` for that AttributeSet,
   attribute, and old value.
4. Verify simulated proxies and the owning client receive expected changes and prediction
   corrections.

Follow the exact current engine macro/API signature in the 5.8 headers or Epic sample code.

## UI update pattern

1. Widget/view model obtains the correct ASC for the represented actor.
2. Read initial value once.
3. Subscribe to `GetGameplayAttributeValueChangeDelegate(Attribute)` or the project wrapper.
4. On callback, format current/max values and update presentation.
5. Unsubscribe/rebind when the represented actor or ASC changes.

Do not poll attributes each frame. Do not make the widget authoritative or apply gameplay
effects from display logic.

## Useful diagnostics

Log or inspect:

- source and target ASC owner/avatar;
- effect class, spec level, context/instigator;
- SetByCaller keys and values;
- active effect handle, duration, period, and stack count;
- old/new base and current values where available;
- server and client roles;
- attribute delegate and RepNotify execution.

Test initial join, late join, respawn, possession swap, effect expiry, effect removal,
prediction rejection, and UI rebind.
