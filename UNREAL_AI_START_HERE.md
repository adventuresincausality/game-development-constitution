# UNREAL ENGINE AI START HERE

Use this file as the entry point for the public Unreal Engine 5.8 operational library.
The library contains 30 modular AI skills and their progressively loaded references. It
contains general Unreal guidance only—no private game, project, or studio material.

## Fast routing

| Need | Start here |
|---|---|
| Choose the correct Unreal subsystem for a task | [`skills/INDEX.md`](skills/INDEX.md) |
| Use one complete skill | The matching `skills/<skill-name>/SKILL.md` |
| Load detailed actions or diagnostics | Only the reference named by that `SKILL.md` |
| Search or ingest the complete skill corpus | `public/data/unreal-skills.json` or `unreal-skills.jsonl` |
| Work offline with every skill | `public/downloads/unreal-engine-5.8-ai-skills.zip` |
| Understand legal/source boundaries | [`UNREAL-ENGINE-NOTICE.md`](UNREAL-ENGINE-NOTICE.md) |
| Make a game-design judgment before implementation | [`AI_START_HERE.md`](AI_START_HERE.md) and the universal principles |

Published URLs:

- `https://adventuresincausality.com/unreal/`
- `https://adventuresincausality.com/data/unreal-skills.json`
- `https://adventuresincausality.com/data/unreal-skills.jsonl`
- `https://adventuresincausality.com/downloads/unreal-engine-5.8-ai-skills.zip`

## Minimal retrieval procedure

1. Classify the request by the action or the first stage where a defect appears.
2. Use the ambiguous-request table in `skills/INDEX.md` to choose one **primary owner**.
3. Read the primary skill's `SKILL.md` completely.
4. Load only the reference file that matches the current action, variable, or symptom.
5. Add no more than two secondary skills, and only when the router or primary skill names
   an explicit ownership seam.
6. State assumptions, exact Unreal actions, parameter direction, failure checks, and a
   target-build verification pass.
7. Stop when the selected files resolve the task. Do not ingest all 30 skills by default.

For an unmeasured performance problem, begin with `unreal-insights-profiling`. For a
build or packaged-only failure, begin with `unreal-packaging-deployment`. For an IK or
retargeting defect, begin with `unreal-control-rig-ik` and isolate the first stage where
the pose becomes wrong.

## Local use

### Clone the complete repository

```bash
git clone https://github.com/adventuresincausality/game-development-constitution.git
```

Give the AI access to the cloned folder and direct it to this file. This preserves the
universal principles, all Unreal skills, source trails, and stable relative links.

### Download only the Unreal library

Download `unreal-engine-5.8-ai-skills.zip` from the website, extract it into a folder the
AI can read, and direct the AI to the included `UNREAL_AI_START_HERE.md`.

### Install as discoverable skills

The folders use the portable `SKILL.md` plus `references/` convention. For agents that
discover skills automatically, copy the individual folders under `skills/` into that
agent's documented skills directory. For other agents, keep the bundle intact and add
this file to the agent's initial context.

Do not paste the entire library into one prompt. Folder access plus narrow retrieval is
more reliable and uses substantially less context.

## Answer contract

- Identify the primary owning subsystem.
- Separate documented UE 5.8 behavior from a recommended implementation pattern.
- Mark Beta or Experimental features and provide a stable fallback when one exists.
- Prefer exact editor paths, properties, nodes, APIs, and console commands.
- State what increasing or decreasing a parameter changes.
- Include multiplayer, performance, cooking, persistence, or platform consequences when relevant.
- Verify against the running editor, packaged target build, trace, or subsystem debugger.
- Link the relevant Epic source page when version-sensitive accuracy matters.

This independent library is not official Epic Games documentation. Unreal Engine changes;
verify high-risk shipping decisions against the current official documentation and target build.
