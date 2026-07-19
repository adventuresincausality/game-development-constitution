# AI START HERE

This is the entry point for AI systems and AI-assisted workflows using the **public,
engine-agnostic** Game Development Constitution. The corpus contains 143 bounded
principles across 24 game-development domains.

Do not begin by ingesting the README, website HTML, PDF, or entire repository. Use the
structured corpus and retrieve the smallest set of complete principles that answers the
current question.

## Fast routing

| Need | Use |
|---|---|
| Confirm version, counts, schema, license, and corpus hash | [`public/data/manifest.json`](public/data/manifest.json) |
| Retrieve or stream individual records | [`public/data/principles.jsonl`](public/data/principles.jsonl) |
| Filter or search the complete corpus locally | [`public/data/principles.json`](public/data/principles.json) |
| Read or cite canonical Markdown | [`content/principles/`](content/principles/) |
| Resolve source keys and citations | [`public/data/sources.json`](public/data/sources.json) |
| Learn the usage rules and suggested system instruction | [`AI-USAGE.md`](AI-USAGE.md) |
| Propose a correction or contribution | [`CONTRIBUTING.md`](CONTRIBUTING.md) |

Published data URLs:

- `https://adventuresincausality.com/data/manifest.json`
- `https://adventuresincausality.com/data/principles.jsonl`
- `https://adventuresincausality.com/data/principles.json`
- `https://adventuresincausality.com/data/sources.json`

## Minimal retrieval procedure

1. Read `manifest.json` to identify the corpus version and integrity hash.
2. Translate the user's problem into concrete search terms and one or more likely
   domains.
3. Search record `title`, `statement`, `tags`, `domain`, `subdomain`, and `searchText`.
4. Select the smallest useful set, normally **1–5 records**.
5. Read every selected record completely. Do not use only `statement`; inspect:
   - `type`, `confidence`, and `status`;
   - `sections["Applies when"]`;
   - `sections["Does not apply / Exceptions"]`;
   - `sections["Disagreement"]`, when present;
   - `depends_on` and `conflicts_with`.
6. Expand through `depends_on` when required for reasoning. Expand through
   `conflicts_with` when the decision involves a tradeoff. Use `related` sparingly.
7. Resolve `sources` through `sources.json` only when evidence, attribution, or further
   reading is requested.
8. Stop when the chosen records explain the recommendation, its conditions, and its
   important countercase.

## Answer contract

When using the corpus:

- cite the relevant permanent principle IDs and public-edition version;
- distinguish objective, contextual, and stylistic guidance;
- treat confidence as evidence strength, not certainty;
- apply scope and exceptions before making a recommendation;
- surface recorded disagreement instead of flattening it;
- separate durable principles from adaptable implementation suggestions;
- say explicitly when project evidence or user constraints should override the corpus.

The constitution is decision support, not an oracle. It intentionally excludes Unreal
Engine guidance and private project/studio material.

## Do not use these as retrieval sources

- The PDF and DOCX are condensed reading experiences for humans.
- The website is a human exploration interface.
- The README explains the project and repository.
- Generated site code is presentation logic.

For machine retrieval, prefer JSONL or JSON. For exact wording and durable citations,
use the corresponding canonical Markdown record.
