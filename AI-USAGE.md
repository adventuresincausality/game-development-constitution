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

## Unreal Engine 5.8 skills

For a concrete Unreal task, begin with `UNREAL_AI_START_HERE.md` and `skills/INDEX.md`.
Choose one primary subsystem skill, read its complete `SKILL.md`, and load only the focused
reference needed for the current action or symptom. Add a secondary skill only when the
router names an explicit ownership seam.

Available formats:

- `skills/*/SKILL.md`: canonical portable skill entry points
- `skills/*/references/*.md`: progressively loaded operational detail
- `public/data/unreal-skills.jsonl`: one complete skill and its references per line
- `public/data/unreal-skills.json`: complete structured Unreal corpus
- `public/downloads/unreal-engine-5.8-ai-skills.zip`: offline bundle with router and notices

Do not ingest all skills into one prompt. Give the AI folder access, start at the router,
and retrieve narrowly.

The generated files are published by the website and created during `npm run generate`.
