# Shalina Design System — Figma MCP Integration Rules

**Author:** Niamh, seat 02 (Design / Agency Lead) · **Lane:** `agency/niamh/design-system/` (my tree, my pen)
**Written:** 2026-07-17 live session (on-disk that window; header added 2026-07-18 second scheduled fire, closing Phoenix AUDIT-2026-07-18 §5 D7 flag — rules-shaped file must say who wrote it under what authority)
**Class:** Domain guidance (design-system integration), NOT board law, NOT governance. **Status:** STAGED — binds agents working Figma→code in this tree; ratification is Shane's word if ever escalated.
**Authority:** Niamh spec (seat 02, design-system ownership) + AGENTS.md brand law, which this file serves and never overrides.

> **Purpose.** This file tells an AI agent using the Figma MCP (`get_design_context`,
> `get_variable_defs`, `get_code_connect_map`, etc.) how *this* codebase is built, so
> Figma designs translate to code that matches our actual conventions — not a generic
> React/Tailwind assumption.
>
> **Read order:** `AGENTS.md` (brand law + full token reference) → this file → the target
> `pages/*.html` you are extending. `PRODUCTION-LAWS.md` governs film, not UI, but its
> claim-discipline rules also bind any on-art copy you generate.
>
> Root: `D:\CENTREFREE\agency\niamh\design-system\`

---

## 0 · The one thing to get right first

**This is not a framework codebase.** There is no React, no Vue, no Tailwind, no npm,
no bundler, no Storybook. It is:

- **CSS custom properties** (design tokens) in one file — the source of truth.
- **Semantic utility classes** (`.ds-*`) that consume those tokens.
- **One vanilla-JS engine** (`engine.js`) that renders one component family (the social-post calendar).
- **Static HTML executions** in `pages/`, each linking the core CSS and setting per-brand overrides.
- **Assets in Cloudflare R2**, git-ignored, referenced by relative path.

When you translate a Figma design, output **plain HTML + CSS using our token variables** —
never invent a component library, never emit Tailwind classes, never reach for a build step.
`var(--token)` names only; raw hexes are forbidden outside `colors_and_type.css`.

---

## 1 · Token Definitions

**Where:** `core/colors_and_type.css` — single source of truth for every token.
**Format:** CSS custom properties on `:root`. No JSON, no Style Dictionary, no transform pipeline.
**Consumed via:** `core/styles.css` (the one file a consuming page links), which `@import`s `colors_and_type.css`.

```html
<!-- every page links exactly this -->
<link rel="stylesheet" href="../core/styles.css">
```

Tokens are organised in five bands:

1. **Corporate palette — the canonical six.** Do not invent colours outside these.
   ```css
   --blue:#1F4598  --orange:#F17025  --sky:#55B8ED
   --neutral:#CCCCCC  --parchment:#F7EFE0  --charcoal:#1A1A1A
   ```
2. **Tonal ramps** (`--blue-900…050`, `--orange-700…050`, `--sky-*`, ink ramp `--ink-900…150`) — stay inside the family.
3. **Editorial / Campaign extension** (`--gold`, `--cream`, `--forest`) — Shal'Artem documentary work only; extends, never replaces, the six.
4. **Semantic tokens — reference these in UI, not raw anchors:**
   ```css
   --bg --bg-alt --surface --surface-cream --surface-ink --surface-forest
   --fg --fg-muted --fg-subtle --fg-on-dark
   --brand --brand-ink --accent --accent-warm --link
   --border --border-soft --divider --focus-ring
   --ok --warn --danger --info
   ```
5. **Type / space / radius / elevation / motion** (see §6).

**Token transformation:** none in-repo. Downstream, token metadata is mirrored to Cloudflare
KV for API reads (see README "Sync ring"), but the CSS file is authoritative. When Figma
`get_variable_defs` returns a variable, **map it to the nearest existing token** — do not
create a new `--token`. If no match exists, flag it rather than inventing one.

**Mapping guidance for Figma → code:**

| Figma variable style | Our token |
|---|---|
| Primary / brand fill | `var(--brand)` (= `--blue`) |
| Accent / energy | `var(--accent)` (= `--orange`) |
| Page background | `var(--bg)` (= `--parchment`) — never white, never grey |
| Card surface on cream | `var(--surface-cream)` (= `--paper`) |
| Body text | `var(--fg)` · muted `var(--fg-muted)` · subtle `var(--fg-subtle)` |
| Hairline / divider | `var(--border-soft)` or `var(--divider)` |
| Highlight word (campaign) | `var(--gold)` — one word only, Bounce-Back headlines |

---

## 2 · Component Library

**Where:** `engine/engine.js` + `engine/template.css`. This is the *only* programmatic
component in the system: `window.renderCalendar(cfg)` — the monthly social-post builder.

**Architecture:** vanilla JS, zero dependencies. A single IIFE exposes `renderCalendar` on
`window`. It builds DOM from a config object, makes fields `contenteditable` with
`localStorage` autosave, and supports drop-to-swap image/video slots. Structure it renders:

```
.top · .calhead · .stripe · .fgrid (4×2 .fcard) · .foot
```

```js
// single-month
renderCalendar({ brandName, topMeta, head, stripe, posts, foot, pageId });
// multi-month
renderCalendar({ brandName, sections: [ {head,stripe,posts,foot}, … ] });
```

Persistence keys are namespaced `mp:{pageId}:{index}:{field}`. Media resolves through an
optional inlined data-URI map at `window.__MEDIA` for self-contained bundles.

**Documentation / storybook:** none. The live specimens *are* the documentation —
`INDEX.html` (design-system tab) and the rendered decks in `pages/`. Treat those HTML files
as the component reference. There is no isolated component catalogue to sync to.

**Rule:** when a Figma design maps onto a post-card grid, drive it through `renderCalendar`
config — do not hand-build a parallel card. For anything *outside* the calendar family, emit
static HTML styled with `.ds-*` classes and tokens.

---

## 3 · Frameworks & Libraries

- **UI framework:** none. Plain HTML5.
- **Styling:** hand-authored CSS with custom properties + a small set of semantic utility
  classes. No CSS-in-JS, no preprocessor, no utility framework.
- **JS:** vanilla ES5/ES6 in one file, no framework, no package manager.
- **Build / bundler:** none. Files are served static.
- **Fonts:** loaded via Google Fonts `@import` at the top of `colors_and_type.css` (Playfair
  Display + Source Sans 3 + IBM Plex Mono). Shaltoux and Ibucap pages add their own `@import`
  (Archivo Black / Plus Jakarta Sans) — see §6.

Do not introduce any of the above when generating code from Figma. The correct output is a
`.html` file plus, if needed, a scoped `<style>` block or a sibling `.css` using our tokens.

---

## 4 · Asset Management

**Where:** `assets/` — **git-ignored**, lives in Cloudflare R2 bucket `flux-design-system`.
Do not expect assets in git; do not commit them. Synced via `rclone copy assets/ r2:flux-design-system`.

Subfolders: `campaign/` (Bounce-Back), `cast/` (Doctor's Voice plates), `logos/` (8 brand
marks), `packaging/`, `characters/`, `shaltoux/`.

**Referencing:** relative paths (`../assets/logos/shalartem.png`). For self-contained
shareable bundles, `engine.js` reads `window.__MEDIA[path]` first and falls back to the path,
so assets can be inlined as data-URIs without touching markup.

**Optimisation / CDN:** assets are served from R2; pages deploy to Cloudflare Pages
(`infocube.live/design/`). No in-repo image pipeline. Photography only — see design law in §6.

**Production-critical (film, but binds any packshot you place):** country packs are
market-specific. Kenya azure `#1E86D6`, Nigeria/Ghana blue `#1F4598` + orange `#F07D1A`.
Never mix a market's pack into another market's surface. (`PRODUCTION-LAWS.md` §4.)

---

## 5 · Icon System

**There is no icon library.** Design law: *documentary photography only — no SVG
illustration, no mascots.* The only inline SVGs in the codebase are three UI glyphs
(like / comment / share) hard-coded as strings inside `engine.js` for the social-post cards:

```js
const LIKE = '<svg viewBox="0 0 24 24"><path d="…"/></svg>';
```

**Rule:** do not import an icon set (Lucide, Heroicons, etc.) when translating a Figma design.
If a Figma frame contains decorative icons, prefer photography or a token-coloured typographic
mark. The signature non-icon device is the **eyebrow rule** — a wide-tracked uppercase label
with a short accent tick (`::before`), not an icon. Where the three social glyphs are genuinely
needed, reuse the ones in `engine.js`; do not add more.

---

## 6 · Styling Approach

**Methodology:** token-driven global CSS + opt-in semantic classes. No CSS Modules, no scoping
system. Classes are prefixed `.ds-` and defined in `colors_and_type.css` §6:

```
.ds-eyebrow (+ --blue, --muted)  .ds-h1 .ds-h2 .ds-h3 .ds-h4  .ds-display
.ds-quote-head (.hl = gold word)  .ds-p .ds-lead .ds-caption  .ds-role (the one italic)  .ds-mono
```

Bare `h1–h4`, `p`, `a`, `code` are also styled globally, so semantic HTML renders on-brand
without classes. Always lead a content block with the hierarchy: **eyebrow → headline → support.**

**Type scale (rem, editorial ~1.25):**
```css
--t-eyebrow:.72rem  --t-caption:.82rem  --t-small:.92rem  --t-body:1.0625rem(17px)
--t-lead:1.3rem  --t-h4:1.5rem  --t-h3:2rem  --t-h2:2.9rem  --t-h1:4.2rem  --t-display:6rem
--tracking-eyebrow:.22em   --tracking-tight:-.015em
```

**Spacing / radius / elevation / motion (map Figma auto-layout + effects to these):**
```css
--space-1:4px … --space-10:128px            /* 4px base; use gap, never per-element margins */
--radius-sm:6 md:12 lg:18 xl:26 pill:999     /* product cards = lg; campaign frames = editorial:0 */
--shadow-xs/sm/md/lg  --shadow-card          /* soft, cool-grey — NEVER coloured */
--ease  --ease-in-out  --dur-fast:140 --dur:240 --dur-slow:420ms
--scrim-parchment  --scrim-forest            /* type-over-photo gradients, not text boxes */
```

**Responsive:** fluid `clamp()` for type and padding, plus a small set of `max-width`
breakpoints in `template.css` (1180 → 3-col, 880 → 2-col, 560 → 1-col; the calendar stands
9:16 films up at phone width). Layout uses **flex/grid with `gap`** — never inline flow or
per-sibling margins.

**Inviolable design laws (from `AGENTS.md` / README — enforce in every generated surface):**

1. **No type effects, ever** — no text-shadow, gradient text, or outlines on type.
2. **Display type roman** — italic only for `.ds-role` (cast plates).
3. **Documentary photography only** — no SVG illustration, no mascots.
4. **Square corners on campaign frames** (`--radius-editorial:0`); only product cards round (`--radius-lg`).
5. **Shadows soft, cool-grey** — never coloured.
6. **Motion calm** — `ease-out`, 140–420ms, no bounces, no infinite loops.
7. **Eyebrow → Headline → Support** hierarchy, always.
8. **Scrims not capsules** — type over photo uses a gradient scrim, not a rounded box.
9. **Parchment ground** for Shal'Artem editorial — never white, never grey.
10. **Token-only colours** — `var(--*)`, never raw hexes (except `colors_and_type.css`).

---

## 6a · Brand worlds — keep them separate

Three type/palette systems. A Figma frame belongs to exactly one; never blend them.

| Brand | Fonts (`@import` per page) | Palette | Ground | Claim (on-art) |
|---|---|---|---|---|
| **Shal'Artem / Flodent** | Playfair Display + Source Sans 3 | `--blue` + `--orange` (+ `--gold` highlight) | Parchment `#F7EFE0` | "Never miss your moment." |
| **Shaltoux** | Archivo Black 900 UPPERCASE + Archivo | Green `#006633` + Yellow `#FFD338` + Orange `#EB921E` | Cream `#F3F5F4` | "Sound Like Yourself." — UPPERCASE everything |
| **Ibucap KE/GH** | Plus Jakarta Sans | Orange `#F07D1A` + Blue `#1F4598` (KE azure `#1E86D6`) | Always light | "The Power of Three in One." — **PPB/FDA-locked** |

**Ibucap claim law (do not break):** no doctors, nurses, pharmacists — real or animated — no
mascots, no comparative/secondary claims. Product incidental only. If a Figma design shows any
of these, stop and flag; do not render it.

---

## 7 · Project Structure

```
design-system/
├── AGENTS.md              — brand law + full token reference (read first)
├── FIGMA-DESIGN-RULES.md  — this file
├── PRODUCTION-LAWS.md     — AI-film laws (governs on-art claim discipline too)
├── README.md              — structure + sync ring
├── STORY-WRITING-TEMPLATE.md
├── core/
│   ├── colors_and_type.css  — ★ token source of truth + .ds-* classes
│   └── styles.css           — single consumer entry (@imports the above)
├── engine/
│   ├── engine.js            — renderCalendar() — the one JS component
│   ├── template.css         — post-card layout + per-brand var overrides
│   └── INTEGRATION_SPEC.md  — /api/image + /api/video proxy contract
├── assets/                  — R2 only (git-ignored → flux-design-system bucket)
│   ├── campaign/ cast/ logos/ packaging/ characters/ shaltoux/
├── pages/                   — rendered HTML executions (storyboards, beat boards, templates)
└── INDEX.html               — design-system hub / specimen surface
```

**Feature/organisation pattern:** surfaces are **per-execution HTML files** in `pages/`, named
`{BRAND}-{ARTEFACT}-{SUBJECT}.html` (e.g. `FLODENT-STORYBOARD-ZIMKHITA.html`,
`IBUCAP-STORYBOARDS-05-08.html`). Each links `core/styles.css`, sets brand-specific font
`@import` + `--brand`/`--accent` overrides, and — if it's a calendar — pulls `engine/`.

**Deploy / sync (manual, from README):**
- GitHub `git push` → code + pages, **no assets, no CDN URLs** (secret scanning blocks presigned R2 URLs).
- Cloudflare Pages `wrangler pages deploy .` → `infocube.live/design/`.
- R2 `rclone copy assets/` → `flux-design-system`.

**When you generate code from a Figma design:**
1. Identify the brand world (§6a) → set the right fonts, palette, ground.
2. New file in `pages/` following the naming pattern; link `core/styles.css`.
3. `var(--*)` tokens only (§1). Nearest existing token — never invent.
4. Semantic HTML + `.ds-*` classes; eyebrow → headline → support.
5. Layout via flex/grid + `gap` and `--space-*`; `clamp()` for fluid type.
6. Photography, not icons/illustration. Assets by relative path (R2).
7. Run every surface past the 10 design laws (§6) and, for Ibucap, the claim law (§6a).
8. Do **not** add frameworks, bundlers, Tailwind, or icon packs.

---

*Maintained by Niamh · seat 02 · Moonlabs. If Figma `get_variable_defs` surfaces a token with
no home here, flag it — do not silently create a new one.*
