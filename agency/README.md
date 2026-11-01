# CENTREFREE Agency — Design System & Portal

InfoCube · Regency Flux · CENTREFREE  
Shalina Healthcare FY2026/27 · Built by Niamh (AI Director of Art)

---

## What this is

A static HTML agency portal covering the full Shalina brand system. No framework. No build step. No npm. Pure HTML/CSS. Open any `INDEX.html` in a browser and it works.

---

## Structure

```
agency/
├── INDEX.html                          ← Agency front door
├── README.md                           ← This file
├── agents/
│   └── INDEX.html                      ← Director roster (7 humans + Niamh)
├── design-system/
│   ├── INDEX.html                      ← Full design system UI
│   ├── core/
│   │   └── colors_and_type.css         ← 107 CSS tokens (source of truth)
│   ├── assets/
│   │   ├── logos/                      ← All brand logos (.png)
│   │   ├── packaging/                  ← Product packshots
│   │   ├── cast/                       ← Cast photography
│   │   ├── campaign/                   ← Campaign photography
│   │   └── shaltoux/                   ← Shaltoux sachet photography
│   └── AGENTS.md                       ← AI agent primer — read this first
├── design-rooms/                       ← (in progress) Brand workrooms
└── production/                         ← (in progress) Live asset manifests
```

---

## Deploy to GitHub Pages (10 minutes, free)

1. **Create a GitHub repo** — `centrefree-agency` (public or private)

2. **Push this folder:**
   ```bash
   cd path/to/agency
   git init
   git add .
   git commit -m "Initial agency portal"
   git remote add origin https://github.com/YOUR_ORG/centrefree-agency.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
   - Save

4. **Done.** Live at `https://YOUR_ORG.github.io/centrefree-agency/`

---

## Deploy to Cloudflare Pages (faster CDN, also free)

1. Push to GitHub as above
2. cloudflare.com → Pages → Create a project → Connect to Git
3. Select the repo
4. Build settings: **leave all blank** (no build command, no output directory)
5. Deploy

Live at `centrefree-agency.pages.dev` (custom domain optional)

---

## Local development

No server needed for most pages. Just open `INDEX.html` in Chrome/Firefox.

If you want live-reload during editing:
```bash
npx serve .
# or
python -m http.server 8000
```
Then open `http://localhost:8000`

---

## Editing guide for directors

**Adding an agent to the roster:**  
Open `agents/INDEX.html` → copy any `.agent-card` block → update name, avatar letter, role, brief.

**Updating a brand brief:**  
Open `design-system/INDEX.html` → find the brand card or brand world section → edit inline.

**Adding a design room:**  
Create a new folder under `design-rooms/[brand-name]/` → add `INDEX.html` → link it from `design-rooms/INDEX.html`.

**Adding a token:**  
Edit `design-system/core/colors_and_type.css` → add your `--token-name: value;` to the `:root {}` block → update `design-system/INDEX.html` tokens table.

---

## Rules (don't break these)

- Never use raw hex in CSS. Always `var(--token-name)`.
- No type effects (shadows, gradients on text, strokes).
- Square corners on all campaign/editorial frames (`border-radius: 0`).
- All motion uses `--ease` and stays between 140–420ms. No bounces.
- Documentary photography only. No illustration. No mascots.
- Ibucap: no doctors, nurses, pharmacists, or mascots in any asset.

Full rules: `design-system/AGENTS.md`

---

*CENTREFREE · InfoCube · vouch4us@gmail.com*
