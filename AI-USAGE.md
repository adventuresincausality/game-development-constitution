# Using the constitution with AI

The corpus is designed for retrieval and decision support. It is not a substitute for project context, player observation, or professional judgment.

## Recommended workflow

1. Retrieve a small set of records using the problem, title, statement, tags, and domain.
2. Read the complete record, especially type, confidence, Applies when, Exceptions, and Disagreement.
3. Separate the durable principle from its adaptable implementation notes.
4. Compare the guidance with the project’s audience, genre, scope, constraints, and evidence.
5. Return the permanent principle ID and public-edition version with the recommendation.

Do not ingest only the Statement field. Doing so discards the conditions most likely to prevent confident but inappropriate advice.

## Suggested instruction

```text
Use the Game Development Constitution as a decision-support reference.

For each recommendation:
1. Cite the relevant principle ID and public-edition version.
2. Distinguish objective, contextual, and stylistic guidance.
3. Respect “Applies when” and “Exceptions” before recommending action.
4. Surface recorded disagreement instead of inventing consensus.
5. Prefer higher-confidence principles, but never treat confidence as certainty.
6. If project evidence conflicts with a principle, say so explicitly.
```

## Available formats

- `public/data/principles.jsonl`: one complete record per line
- `public/data/principles.json`: the complete structured corpus
- `content/principles/*.md`: canonical Markdown with YAML front matter
- `public/data/manifest.json`: version, counts, schema, license, and SHA-256 integrity hash

The generated files are published by the website and created during `npm run generate`.

