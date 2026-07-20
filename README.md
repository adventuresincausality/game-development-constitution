# The Game Development Constitution

> **Using this repository with AI?** Start with
> [`AI_START_HERE.md`](AI_START_HERE.md) for task routing and minimal retrieval, then
> use [`AI-USAGE.md`](AI-USAGE.md) for the operating rules.

**A searchable, evidence-tagged field guide for people and AI making games.**

[Read the public edition](https://adventuresincausality.com/) · [Explore all principles](https://adventuresincausality.com/explore/) · [Open the Unreal 5.8 field manual](https://adventuresincausality.com/unreal/) · [Use it with AI](https://adventuresincausality.com/for-ai/)

The Game Development Constitution turns scattered craft knowledge into 143 bounded, engine-agnostic principles. Each principle explains what to do, why it works, when it applies, when it does not, how it can be implemented, and where credible practitioners disagree.

The universal principles remain engine-agnostic. A separate Unreal Engine 5.8 library provides
implementation guidance through 30 portable AI skills. The entire public repository intentionally
excludes private game, project, and studio material.

## What is inside

- 143 principles across 24 game-development domains
- stable IDs and YAML front matter for durable references
- explicit type, confidence, scope, exceptions, and disagreement
- a reviewed source registry with direct links
- Markdown, JSON, JSONL, and a versioned manifest for AI workflows
- a designed PDF and Word field guide for offline reading
- 30 Unreal Engine 5.8 subsystem skills with focused references and primary-source trails
- a searchable human Unreal field manual plus JSON, JSONL, and a one-click local AI bundle

## Read it your way

For people, the website provides search, filters, cross-links, source records, and a compact field guide.

For AI systems, the generated corpus is available as:

- [`principles.json`](https://adventuresincausality.com/data/principles.json)
- [`principles.jsonl`](https://adventuresincausality.com/data/principles.jsonl)
- [`manifest.json`](https://adventuresincausality.com/data/manifest.json)
- canonical Markdown in [`content/principles`](content/principles)

See [AI-USAGE.md](AI-USAGE.md) before using the corpus for retrieval or decision support.

For Unreal Engine work:

- start with [`UNREAL_AI_START_HERE.md`](UNREAL_AI_START_HERE.md);
- browse [`skills/INDEX.md`](skills/INDEX.md) or the [human field manual](https://adventuresincausality.com/unreal/);
- download the complete local bundle from [`unreal-engine-5.8-ai-skills.zip`](https://adventuresincausality.com/downloads/unreal-engine-5.8-ai-skills.zip);
- use [`unreal-skills.json`](https://adventuresincausality.com/data/unreal-skills.json) or [`unreal-skills.jsonl`](https://adventuresincausality.com/data/unreal-skills.jsonl) for machine retrieval.

## A principle is bounded advice

The constitution is not a list of absolute rules. Every entry distinguishes among:

- **objective** guidance that tends to hold across styles;
- **contextual** guidance that depends on genre, audience, scope, or intent; and
- **stylistic** guidance where excellent developers can reasonably choose opposite approaches.

Confidence scores describe the strength of support, not certainty. Project evidence and player experience outrank the document.

## Contributing

Corrections, stronger sources, clearer exceptions, and new principles are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md). Source-backed corrections are especially valuable.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Run the complete validation and static build with:

```bash
npm test
```

The content generator validates public scope, references, source records, and export integrity before each build.

## Stewardship and attribution

Created and maintained by **Sontlux Sukhavachana** ([@adventuresincausality](https://github.com/adventuresincausality)), with development assistance from Claude and Codex.

Content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Website code and generation scripts are licensed under the MIT License. See [LICENSE](LICENSE) for details and [CITATION.cff](CITATION.cff) for a ready-to-use citation.

Unreal Engine and Unreal are trademarks or registered trademarks of Epic Games, Inc. This
independent resource is not affiliated with or endorsed by Epic Games. See
[`UNREAL-ENGINE-NOTICE.md`](UNREAL-ENGINE-NOTICE.md).
