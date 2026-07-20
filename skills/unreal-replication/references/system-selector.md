# Replication-system selector

## Generic Replication

Use by default. It supports replicated actors, properties, RPCs, relevancy, priority, update
frequency, dormancy, components, and subobjects. Most UE networking documentation assumes it.

Remain on Generic Replication when actor/connection counts fit the server budget and its model
meets the game's filtering needs. Tune content and dormancy before replacing the driver.

## Replication Graph

Evaluate when the server must repeatedly build per-connection replication lists for large actor
and connection counts. RepGraph keeps persistent graph nodes/lists that share work across frames
and connections.

Adoption gate:

- a Network Insights/server trace shows replication-list gathering or per-connection actor
  evaluation is a material bottleneck;
- actor categories have clear spatial, always-relevant, owner-only, team, or dormancy rules;
- the team can implement and test custom graph nodes;
- the project accepts Beta maturity;
- console split screen is not required, because Epic documents that limitation.

## Iris

Iris is compiled into UE but is not the default replication system. UE 5.8 marks it
**Experimental**. It changes relevancy into filtering and priority into Iris prioritization,
shares quantized replicated state work, and aims for stronger scalability/concurrency.

Adoption gate:

- a specific Iris capability or measured scale need justifies Experimental risk;
- all plugins/subsystems and custom serializers are compatibility-tested;
- replicated subobjects use the registered subobject list;
- migration differences are documented and both network correctness and performance are tested;
- rollback to Generic Replication is planned until the shipping gate is passed.

Do not select Iris because it is newer. Do not assume Generic settings map unchanged: consult the
5.8 migration guide.

## Selection output

Return:

| Candidate | Measured need | Maturity/constraint | Decision |
|---|---|---|---|
| Generic | baseline | default/stable path | use/reject |
| RepGraph | large actor x connection filtering cost | Beta; console split-screen limitation | use/reject |
| Iris | specific filtering/prioritization/scalability need | Experimental; migration work | use/reject |

No selection is complete without a representative server trace and target-player-count test.
