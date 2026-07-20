# Hard references, soft references, and load ownership

## Choose the edge

Use a hard `TObjectPtr<T>`/class reference when the target must be resident whenever its
owner is resident and the dependency is acceptably small.

Use `TSoftObjectPtr<T>`, `TSoftClassPtr<T>`, or `FSoftObjectPath` when the target should not
load with the owner, content is optional, or a large catalog must remain unloaded.

Soft does not mean free:

- callers must load before dereference;
- failure, cancellation, and race behavior must be defined;
- a path does not keep the object resident after loading;
- cook inclusion still needs a discoverable rule.

## Async load pattern

1. Gather soft paths or Primary Asset IDs before the transition that needs them.
2. Request asynchronous loading through Asset Manager or a suitable Streamable Manager.
3. Retain the `FStreamableHandle` when cancellation, progress, combined requests, or
   explicit residency management matters.
4. In completion, verify the handle/request and every required asset.
5. Transfer loaded objects into a hard owner for their use lifetime, or keep the handle
   alive according to the chosen API.
6. Release the owner/handle at the explicit unload boundary.

Never call a synchronous load in a latency-sensitive path merely because the soft pointer
API offers it. Small editor utilities and controlled loading screens may accept blocking;
gameplay and streaming paths normally should not.

## Reference audit

Use **Reference Viewer** and **Size Map/Asset Audit** to find accidental hard dependency
chains. A lightweight definition that hard-references one Blueprint can pull in that
Blueprint's complete dependency graph.

For a suspect asset, report:

- why it is loaded;
- which edge is hard;
- what the correct load boundary is;
- whether converting the edge to soft changes cook rules;
- how residency will be proven on target hardware.
