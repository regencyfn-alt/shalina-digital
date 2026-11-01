# Shalina Healthcare — Design System · Agent Primer

> **Read this first.** This file is the single source of truth for any AI agent building on the Shalina Healthcare design system. Read it top-to-bottom before writing a single pixel of UI.

---

## 0 · What this system is

A working design system for **Shalina Healthcare** and its consumer-health brands, built for **digital-first FY2026/27 marketing** across West + East Africa. The system covers two fully-built brand worlds and five brands at portfolio level.

All visual decisions trace back to one law from the Shal'Artem brand guide:
> *"No type effects, ever · Display type roman by default · Documentary photography only · Brand mark mono-knockout at small scale."*
> **"Discipline in colour is discipline in voice."**

---

## 1 · Brand worlds — keep them separate

### 1A · Shal'Artem / Flodent — SERIF · PARCHMENT · BLUE + ORANGE

| Property | Value |
|---|---|
| **Category** | Anti-malarial (Artemether + Lumefantrine) |
| **Big idea** | *"Never miss your moment."* |
| **Claim** | *"Knock out Malaria in 3 Days."* |
| **Endorsement** | NMA (Nigeria) · GMA (Ghana) — always call out as proof |
| **Markets** | Nigeria $30K · Ghana $15K · FY2026/27 |
| **Fonts** | `Playfair Display` (display/headlines) + `Source Sans 3` (body/UI) |
| **Ground** | Parchment `#F7EFE0` |
| **Primary** | Blue `#1F4598` |
| **Accent** | Orange `#F17025` |
| **Campaign gold** | `#C68A1E` — the ONE highlighted word in Bounce-Back headlines |
| **Editorial forest** | `#19281F` — Doctor's Voice cast-plate ground only |

**Tone:** Sincere, credible, warm, documentary. Trust before sell. Never clinical-cold.

### 1B · Shaltoux — GROTESQUE · GREEN · UPPERCASE · VOICE-FIRST

| Property | Value |
|---|---|
| **Category** | Cough & throat lozenges |
| **Big idea** | *"Sound Like Yourself."* |
| **Fonts** | `Archivo Black` (900 weight display, UPPERCASE) + `Archivo` (body) |
| **Ground** | Cream `#F3F5F4` |
| **Primary green** | `#006633` |
| **Yellow** | `#FFD338` |
| **Orange** | `#EB921E` |
| **Moods** | Comfort = green (Honey & Ginger) · Energy = orange · Strong = yellow |
| **Markets** | Nigeria · Ghana · Zambia · Angola |

**Never mix Shal'Artem and Shaltoux styles.** Different fonts, different palettes, different personality — they don't share a single visual element.

### 1C · Ibucap (OTX Pain Relief) — PLUS JAKARTA SANS · ORANGE + BLUE

| Property | Value |
|---|---|
| **Category** | Pain & cold/flu relief (Ibuprofen + Paracetamol + Caffeine) |
| **Only on-art claim** | **"The Power of Three in One."** — nothing else |
| **Markets** | Nigeria (Flagship $30K) · Kenya (Flagship $30K) · Ghana (Anchor $15K) |
| **Fonts** | `Plus Jakarta Sans` (all weights) |
| **Nigeria/Ghana orange** | `#F07D1A` |
| **Nigeria/Ghana blue** | `#1F4598` |
| **Kenya azure** | `#1E86D6` |
| **Grounds** | Always light — never dark |

**Hard claim rules (PPB / NAFDAC — DO NOT BREAK):**
- ❌ No doctors, nurses, pharmacists — real OR animated — in any creative
- ❌ No superheroes or mascots
- ❌ No secondary/comparative claims — only "The Power of Three in One."
- ✅ Product appears incidentally (in a pocket, on a counter)
- Triple action (Ibuprofen + Paracetamol + Caffeine) = regulator context ONLY, never consumer copy

---

## 2 · Token reference

Link `styles.css` (or `colors_and_type.css` directly). All tokens are CSS custom properties. **Never guess a token name — look it up here.**

### Corporate palette (Shal'Artem · always use these, never invent)

```css
--blue:        #1F4598   /* brand anchor — headlines, CTA, mark */
--orange:      #F17025   /* accent & energy */
--sky:         #55B8ED   /* supporting tone, backgrounds */
--neutral:     #CCCCCC   /* borders, dividers, disabled */
--parchment:   #F7EFE0   /* surface base */
--charcoal:    #1A1A1A   /* body copy, captions, UI */
```

### Tonal ramps (stay inside the family)
```css
--blue-900: #15306B  --blue-700: #1F4598  --blue-500: #2F5BBE
--blue-200: #B9C8E8  --blue-050: #EAF0FB
--orange-700: #C9531A  --orange-500: #F17025
--orange-200: #FBD3BB  --orange-050: #FDEDE2
```

### Editorial / Campaign extension (Shal'Artem documentary only)
```css
--gold:    #C68A1E   /* one highlighted word in Bounce-Back headlines */
--cream:   #F3E8C8   /* cast name-plate text on forest */
--forest:  #19281F   /* Doctor's Voice plate ground */
```

### Type
```css
--font-display: 'Playfair Display', Georgia, serif        /* headlines */
--font-text:    'Source Sans 3', Calibri, sans-serif      /* body / UI */
--font-mono:    'IBM Plex Mono', monospace

/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

/* For Shaltoux */
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;600;700&display=swap');

/* For Ibucap */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
```

### Type scale
```css
--t-eyebrow: 0.72rem   /* wide-tracked UPPERCASE labels */
--t-caption: 0.82rem
--t-small:   0.92rem
--t-body:    1.0625rem  /* 17px base */
--t-lead:    1.3rem
--t-h4:      1.5rem
--t-h3:      2rem
--t-h2:      2.9rem
--t-h1:      4.2rem
--t-display: 6rem

--tracking-eyebrow: 0.22em   /* the signature wide-tracked label */
--tracking-tight:  -0.015em
```

### Spacing (4px base)
```css
--space-1: 4px   --space-2: 8px    --space-3: 12px  --space-4: 16px
--space-5: 24px  --space-6: 32px   --space-7: 48px  --space-8: 64px
--space-9: 96px  --space-10: 128px
```

### Radii
```css
--radius-sm: 6px   --radius-md: 12px  --radius-lg: 18px  --radius-xl: 26px
--radius-pill: 999px
--radius-editorial: 0px   /* campaign / full-bleed frames are SQUARE */
```

### Elevation
```css
--shadow-xs:   0 1px 2px rgba(26,26,26,.06)
--shadow-sm:   0 2px 6px rgba(26,26,26,.07)
--shadow-md:   0 8px 22px rgba(26,26,26,.10)
--shadow-lg:   0 18px 48px rgba(26,26,26,.14)
--shadow-card: 0 10px 30px rgba(31,48,107,.10)   /* product cards — faint blue cast */
```

### Motion
```css
--ease:     cubic-bezier(.22,.61,.36,1)     /* calm ease-out — no bounces */
--dur-fast: 140ms   --dur: 240ms   --dur-slow: 420ms
```

### Scrims
```css
/* Bounce-Back posts: type floats over photo on left */
--scrim-parchment: linear-gradient(90deg, rgba(247,239,224,.97) 0%, rgba(247,239,224,.88) 34%, rgba(247,239,224,0) 70%);
/* Doctor's Voice cast plates: forest bottom-up */
--scrim-forest: linear-gradient(0deg, rgba(15,22,17,.94) 0%, rgba(20,32,24,.62) 38%, rgba(20,32,24,0) 70%);
```

---

## 3 · Utility classes (from colors_and_type.css)

```css
.ds-eyebrow          /* wide-tracked uppercase label in orange */
.ds-eyebrow--blue    /* same in blue */
.ds-eyebrow--muted   /* same in ink-300 */
.ds-h1 / h1          /* Playfair Display 800, t-h1, brand-ink */
.ds-h2 / h2          /* Playfair Display 700, t-h2 */
.ds-h3 / h3          /* Playfair Display 600, t-h3 */
.ds-h4 / h4          /* Source Sans 3 700, t-h4 */
.ds-display          /* Playfair Display 800, t-display, 0.98 lh */
.ds-quote-head       /* Bounce-Back headline: serif 800, t-h1 */
.ds-quote-head .hl   /* the gold highlighted word */
.ds-lead             /* Source Sans 3 400, t-lead, muted */
.ds-caption          /* t-caption, fg-subtle */
.ds-role             /* italic serif 500, cream — cast plates only */
.ds-mono             /* IBM Plex Mono */
```

---

## 4 · Asset inventory

All assets live in `assets/` (copy into your project — never reference cross-project paths in HTML).

### Logos (`assets/logos/`)
| File | Brand |
|---|---|
| `shalina-corp.png` | Shalina Healthcare master mark (blue oval) |
| `shalartem.png` | Shal'Artem product wordmark |
| `shaltoux.png` | Shaltoux lozenge/wordmark |
| `ibucap.png` | Ibucap wordmark |
| `flodent.png` | Flodent wordmark |
| `germol.png` | Germol wordmark |
| `polygel.png` | Polygel wordmark |
| `aco.png` | ACO wordmark |

### Packaging (`assets/packaging/`)
| File | Description |
|---|---|
| `shalartem-dt.png` | Shal'Artem dispersible tablet pack |
| `shalartem-12t.png` | 12-tablet pack |
| `shalartem-18t.png` | 18-tablet pack |

### Campaign photography (`assets/campaign/`)
| File | Description |
|---|---|
| `bounce-back-firststeps.png` | Baby first steps — Bounce Back post |
| `bounce-back-stadium.png` | Stadium moment — Bounce Back post |
| `bounce-back-graduation.png` | Graduation — Bounce Back post |

### Cast (`assets/cast/`)
| File | Description |
|---|---|
| `doctor-bayo.png` | Dr. Bayo — Doctor's Voice cast plate |
| `pharmacist-ngozi.png` | Pharm. Ngozi — Doctor's Voice cast plate |
| `gh-teacher.png` | Ghanaian schoolteacher cast |

### Shaltoux (`assets/shaltoux/`)
- Sachet photography: green (Honey & Ginger), orange, honey variants
- Voice-studio photography (sound booth, vocalist, audience)

---

## 5 · Content & copy rules

### Shal'Artem
- **Promise (repeat verbatim):** *"Knock out Malaria in 3 Days."*
- **Campaign line:** *"Never miss your moment."*
- **Endorsement proof:** "NMA-endorsed" (NG) / "GMA-endorsed" (GH) — always use as proof
- **Eyebrows are wide-tracked UPPERCASE:** `C O N T E N T   P I L L A R S` at `letter-spacing: 0.22em`
- **Tone:** trust before sell · protect the moment, don't push the pill · plain and neighbourly
- **No emoji** in clinical/corporate copy. Emoji OK in WhatsApp/UGC/social mechanics only.

### Ibucap
- **Only on-art claim:** *"The Power of Three in One."* Nothing else.
- **Triple action** (Ibuprofen + Paracetamol + Caffeine) = regulator / internal rationale only
- **Heritage line:** "Always with you to beat pain." (25+ years)
- **No doctors, nurses, pharmacists, superheroes, mascots** — ever

### Shaltoux
- **Line:** *"Sound Like Yourself."*
- **Sub:** "Inspired by Nature, Backed by Science."
- **UPPERCASE everything** in display/headline contexts
- Moods drive colour: Comfort = green · Energy = orange · Strong = yellow

---

## 6 · Layout principles

1. **Flex/grid with `gap` always** — never inline flow or per-element margins for sibling UI elements
2. **Parchment ground** (`#F7EFE0`) for Shal'Artem editorial pages — not white, not grey
3. **Square corners on campaign/documentary frames** (`border-radius: 0`) — only product cards round at `18px`
4. **Shadows are soft, cool-grey** — `--shadow-card` has a faint blue cast; never coloured shadows
5. **Type never has effects** — no text-shadow, no gradient text, no outlines on type
6. **Scrims not capsules** — type over photo = gradient scrim, not a rounded text box
7. **Eyebrow → Headline → Support** — always this hierarchy; wide-tracked orange/blue eyebrow at top
8. **Motion is calm** — ease-out only, 140–420ms, no bounces, no infinite loops

---

## 7 · Key files in this project

```
styles.css                          ← link this; it imports colors_and_type.css
colors_and_type.css                 ← all 107 tokens
assets/logos/                       ← 8 brand marks (PNG)
assets/campaign/                    ← Bounce Back photography
assets/packaging/                   ← Shal'Artem packs
assets/cast/                        ← Doctor's Voice cast plates
assets/shaltoux/                    ← Shaltoux sachets + photography
ui_kits/shalartem/                  ← ★ Full Shal'Artem brand site (React/JSX)
ui_kits/shaltoux/                   ← ★ "A Shaltoux Day" brand plan page (HTML)
monthly-posts/template.css          ← Monthly social post calendar engine styles
monthly-posts/engine.js             ← Calendar render engine (renderCalendar())
monthly-posts/                      ← All brand monthly calendars (Shaltoux, Flodent, Ibucap NG/KE/GH)
export/scrolling/                   ← Full-screen scrolling brand plans (Shal'Artem, Shaltoux)
monthly-posts/share/                ← Self-contained shareable bundles (offline-ready)
monthly-posts/media/hustler-media.js← Kenya hustler portraits (base64, window.__HUSTLERS)
monthly-posts/INTEGRATION_SPEC.md  ← Nano Banana Pro / Seedance 2.0 API contract
```

---

## 8 · Monthly post calendar engine

`renderCalendar(cfg)` in `engine.js` builds editable social post calendars.

```js
renderCalendar({
  pageId: 'my-brand-jun',    // localStorage namespace
  brandName: 'Brand Name',
  avatarChar: 'B',
  topMeta: ['Jun 2026', 'TikTok · IG · FB'],
  sections: [{
    head: 'June 2026',
    stripe: '#F07D1A',       // header colour
    posts: [{
      beat: 'Beat label',
      scene: 'Scene description',
      date: 'Tue 02 Jun',
      platforms: ['TikTok','IG'],
      budget: '$150',
      script: 'Post copy here',
      poster: 'media/image.jpg'   // or window.__MEDIA key
    }],
    foot: 'Footer text'
  }]
});
```

**Every text field is click-to-edit and autosaves to localStorage.** Video slots accept drag-drop `.mp4`.

---

## 9 · Ibucap generation integration

`monthly-posts/INTEGRATION_SPEC.md` defines the JSON contract for AI image/video generation:

```
POST /api/image   → Nano Banana Pro (Gemini 3 Pro Image) — portraits/stills
POST /api/video   → Seedance 2.0 (ByteDance) — 7s/15s clips
```

**Never put API keys in HTML.** When `window.IBUCAP_PROXY` is not set, pages run as a prompt board only.

---

## 10 · Quick-start checklist for agents

When building a new surface for any Shalina brand:

- [ ] Which brand? → Use the correct brand world (§1A/B/C)
- [ ] Link `styles.css` and the right Google Fonts (§2)
- [ ] Use token `var(--*)` names only — never raw hexes outside this doc
- [ ] Copy required assets from `assets/` into the working project
- [ ] Eyebrow → headline → support hierarchy on every content block
- [ ] Parchment ground for Shal'Artem editorial; cream for Shaltoux; light for Ibucap
- [ ] No emoji in corporate/clinical copy
- [ ] Ibucap: check all three claim rules before writing any copy (§1C)
- [ ] Shadows: `--shadow-card` for products, `--shadow-md` for panels — never coloured
- [ ] Motion: `--ease` + `--dur` only — no bounce, no infinite loop

---

*Last updated: June 2026 · Shalina Healthcare FY2026/27 · Built by Regency Flux*
