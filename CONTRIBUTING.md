# Contributing

Thank you for helping make the constitution more accurate, useful, and legible.

The most valuable contributions are usually small and specific: a stronger primary source, a corrected claim, a missing exception, a clearer boundary, or evidence that a principle needs a lower confidence score.

## Before opening a change

1. Search existing principles and issues for the same idea.
2. Identify the exact claim that should change.
3. Prefer primary sources, peer-reviewed work, first-party talks, or established books.
4. Explain what the source supports. Do not treat a citation as support for claims it never makes.
5. Keep universal principles engine-agnostic. Keep Unreal skills generally applicable and
   entirely free of private project or studio context.

## Principle requirements

Every principle must retain these sections:

- Statement
- Rationale
- Applies when
- Does not apply / Exceptions
- Implementation
- Disagreement
- Notes

Its front matter must include a stable ID, domain, type, confidence score, status, relationships, source keys, and verification dates.

Use **objective** only for broadly portable guidance. Use **contextual** when audience, genre, scale, or intended experience can change the answer. Use **stylistic** for a defensible philosophy whose opposite can also produce excellent work.

## Source standard

- Link to the exact work, not a search result or a vague category of material.
- Describe only the claims the source actually supports.
- Separate multiple sources when they support different parts of a claim.
- Flag disputed attribution, inaccessible originals, and secondary reporting.
- Never invent page numbers, quotations, dates, talks, or study findings.

For Unreal skill contributions, prefer current Epic documentation, API references, release
notes, engine source available under its applicable license, and first-party samples. Explain
claims in original language and link to the official source. Do not add Epic documentation
prose, screenshots, logos, Engine Code, or assets. Read `UNREAL-ENGINE-NOTICE.md` first.

## Validate locally

```bash
npm install
npm test
```

The build checks IDs, public scope, relationships, source keys, source verification, static routes, exports, sitemap output, and essential metadata.

## Pull requests

Keep each pull request focused. In the description, state:

- what changed;
- why it improves the public resource;
- which source or project evidence supports it; and
- whether it changes meaning, confidence, or only presentation.

By contributing content, you agree that it may be distributed under CC BY 4.0. By contributing software, you agree that it may be distributed under the MIT License.
