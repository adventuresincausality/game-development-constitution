---
id: GDC-L1-UX-0006
title: Treat accessibility as design — and build it in early
layer: L1
domain: UX
subdomain: accessibility
type: contextual
confidence: 4
status: canonical
tags:
  - ux
  - accessibility
  - inclusion
  - player-respect
  - options
related:
  - GDC-L1-FEEL-0006
  - GDC-L1-PROG-0004
  - GDC-L1-UX-0003
depends_on: []
conflicts_with: []
supersedes: []
sources:
  - S-game-accessibility
first_added: 2026-07-14
last_verified: 2026-07-14
---

## Statement
> Build accessibility in from the start, not as a late patch: remappable controls, scalable
> text, colorblind-safe visuals (never encode information in color alone), subtitles and
> captions, difficulty/assist options, and toggles for effects like screen shake.
> Accessibility widens your audience and usually makes the game better for everyone.
> Plan for it early so core UI, input, audio, and visual systems can support it.

## Rationale
A large number of players have disabilities — visual, auditory, motor, cognitive — and small,
well-known features remove barriers that exclude them [S-game-accessibility]. Common high-impact
needs include control remapping, scalable text, colorblind-safe information, and strong subtitle
presentation. These are architectural design concerns, not a charity add-on: no color-only
encoding, scalable UI, and a remappable input layer are easier to support when the underlying
systems anticipate them. Accessibility features also routinely help *everyone*
(the "curb-cut effect"): subtitles help players in noisy rooms, remapping helps everyone find
a comfortable layout, a screen-shake toggle helps the motion-sensitive and the easily-nauseated
alike (FEEL-0006). It's an extension of respecting the player (PROG-0004).

## Applies when
From the earliest UI, input, audio, and visual-design decisions onward.

## Does not apply / Exceptions
Not every accessibility feature fits every game, and some interact with core design (a
difficulty/assist mode can conflict with a game whose identity *is* its difficulty — a real
and much-debated tension). Tiny-scope or experimental projects may implement only a focused
set of high-impact essentials. The principle is to *design so accessibility is possible*,
not that every option must ship in every game.

## Implementation (kept separate from the principle)
Plan high-impact basics from day one: full input remapping, scalable/high-contrast
text, no color-only information (add shape/icon/text), subtitles with size and contrast
controls, and effect toggles (screen shake — FEEL-0006). Add difficulty/assist options and
pause-anywhere where they fit. Consult established guidelines and test with players who have
relevant needs. Treat "can everyone who wants to play, play?" as a design question.

## Disagreement
The live debate is narrow but real: **difficulty/assist options** — do they belong in every
game, or does a deliberately punishing game have the right to its difficulty as an
inseparable part of its identity? (The rest of accessibility — remapping, text, color,
captions — enjoys broad consensus.) Even there, most argue assist options rarely harm the
players who ignore them.

## Notes
The inclusion-and-respect principle of UX; directly connects to FEEL-0006 (screen-shake
toggle) and PROG-0004 (respect the player), with a clear ethics/wellbeing dimension.
Confidence 4.
