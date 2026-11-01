# Launch Readiness — CENTREFREE Agency Portal
**Date:** 2026-07-04 · **Auditor:** Niamh (AI Director of Art) · **Scope:** portal integrity, not deploy execution

## VERDICT: READY WITH FIXES
81 hyperlink/src references + 4 CSS url() references checked across 25 HTML pages.
**2 broken references fixed this sweep. 4 remain — all point at the not-yet-built `design-rooms/` and the missing `production/INDEX.html`.** Nothing else is broken. No file exceeds the Cloudflare 25 MiB per-file limit.

---

## ✅ READY

- [x] **`INDEX.html` (front door)** — hero, stats, CTAs to Agents / Reception / Design System all resolve. Google Fonts only external dep.
- [x] **`agents/INDEX.html`** — roster renders, nav back-links resolve. ACO Story 07 gateway link **fixed** (was `../shalina/aco/storyboards/` — wrong path AND a bare directory, which never serves on static hosting; now points at `../niamh/shalina/aco/storyboards/ACO-STORY-07-THE-SHOPPING-TRIP-EN.html`).
- [x] **`design-system/INDEX.html` (redirect shim)** — **fixed.** Was a root-absolute redirect to `/agency/niamh/design-system/INDEX.html`, which only worked if the site was mounted at exactly `/agency/`. It broke on file://, on GitHub Pages (repo-subpath), and on any standalone deploy. Now relative (`../niamh/design-system/INDEX.html`) — works in every deploy scenario.
- [x] **`niamh/design-system/INDEX.html` (the real design system, 71 KB)** — every asset reference (logos, packaging, cast, campaign, shaltoux, characters) and every storyboard link verified on disk. Back-link to portal resolves. Zero broken refs.
- [x] **`reception/INDEX.html`** — all three outbound links resolve (design system, agents, external centrefree.com/studio).
- [x] **`production/ibucap-ke/KAMAU-HARVEST-SYNTHESIZER.html`** — modified today, self-contained (Google Fonts only), no broken refs. Working tool. Currently **orphaned** — no page links to it (see BROKEN #2).
- [x] **Assets audit** — no empty folders, no missing files, none over 25 MiB:

  | `niamh/design-system/assets/` | files | notes |
  |---|---|---|
  | logos/ | 8 | all 8 brand marks present |
  | packaging/ | 3 | shalartem 12t/18t/dt |
  | cast/ | 3 | doctor-bayo, pharmacist-ngozi, teacher-accra |
  | campaign/ | 3 | bounce-back ×3 |
  | shaltoux/ | 5 | 3 sachets + 2 voice-studio |
  | characters/aco/ | 4 | ana/gloria refs, stills, end slate |

- [x] **Cloudflare per-file limit** — largest file is `niamh/Shalina Design System (1).zip` at 22.8 MiB: *under* the 25 MiB limit but the closest call. It is referenced by no page — exclude it from deploy (see weight note below).

## 🔧 BROKEN — remaining fixes (all judgment calls, listed not rewritten)

1. **`INDEX.html` line 113** → `design-rooms/INDEX.html` — **target does not exist.** `design-rooms/` was never created (0 files).
   *Fix options:* (a) delete the Layer 03 `<a class="section-card">` block (lines 113–119), or (b) create a one-page `design-rooms/INDEX.html` stub ("Rooms opening FY26/27") linking each brand's storyboards under `../niamh/shalina/{brand}/storyboards/`. Option (b) preserves the 4-layer story the front door tells.
2. **`INDEX.html` line 121** → `production/INDEX.html` — **missing.** `production/` is real (KAMAU synthesizer lives there, updated today) but has no index, so the Layer 04 card 404s and the synthesizer is unreachable from the portal.
   *Fix:* create a minimal `production/INDEX.html` listing the one live tool:
   ```html
   <a href="ibucap-ke/KAMAU-HARVEST-SYNTHESIZER.html">KAMAU — The Harvest · Ibucap KE Synthesizer</a>
   ```
   (styled with the portal's dark palette; 20-line page). This kills the 404 AND de-orphans today's work.
3. **`agents/INDEX.html` line 97** (top nav) → `../design-rooms/INDEX.html` — same missing target as #1. Remove the nav item or create the stub.
4. **`agents/INDEX.html` line 135** (Niamh gateway links) → `../design-rooms/INDEX.html` — same. Remove or retarget to `../niamh/design-system/INDEX.html`.

**Rule of thumb: fix #1/#3/#4 together** — either design-rooms gets a stub (one new file, three links start working) or all three links get removed. Do not ship with them live.

## 📦 Completeness — "(in progress)" folders, actual state today

- **`design-rooms/`** — does not exist. Not a folder-in-progress; it was never started. Portal **can launch without it** once the 3 links above are stubbed or removed.
- **`production/`** — one real, working, self-contained tool (KAMAU synthesizer, 31 KB, touched today 2026-07-04). Needs only the index stub in fix #2 to be launch-worthy. **Portal can launch with it** — don't hide it.
- **`niamh/`** — working directory containing ~250 MB of source media (film .mp4s, .wavs, the 22.8 MiB zip, the 13.9 MB Hustler Board HTML, aco-live). **None of it is referenced by any portal page** except `niamh/design-system/**` and `niamh/shalina/**/storyboards/*.html` + `shalartem/SHALARTEM-FY2627-STRATEGY.html`. Safe to exclude the rest from deploy.

## 🚀 Recommended launch path: (a) ship inside the parent `centrefree` Cloudflare Pages deploy at `/agency/`

**Why (a), not GitHub Pages:**
1. **Zero new infra** — no new repo, no new Pages project, no DNS, no second deploy surface to forget. Minimum steps, which is what Shane asked for.
2. **Aoife is already auditing the `centrefree` project** — one deploy pipeline, one audit, one truth.
3. **Every internal link is now relative** (after today's redirect fix), so the portal is mount-point agnostic — it works at `/agency/` today and can still be lifted out to its own project later with zero edits.
4. **GitHub Pages costs steps** — new repo + push + Pages settings, and Pages on a *private* repo requires a paid plan. The README's GH path was written before the parent deploy existed.
5. **Limits are comfortable** — 147 files / 273 MB total (well under Pages' 20,000-file cap), largest file 22.8 MiB < 25 MiB. Excluding unreferenced `niamh/` media drops the payload to roughly 60–70 MB.

**Exact steps for Shane (after fixes #1–#4 land):**
```powershell
cd D:\CENTREFREE
git pull                                  # if the parent repo is git-managed
# Deploy the parent project with agency/ inside it:
npx wrangler@latest pages deploy . --project-name=centrefree --branch=main
# Verify:
#   https://<centrefree-pages-domain>/agency/INDEX.html
#   https://<centrefree-pages-domain>/agency/design-system/INDEX.html   (redirect → real design system)
#   https://<centrefree-pages-domain>/agency/reception/INDEX.html
```
Confirm the exact parent deploy root and project name with Aoife's audit before firing — if the parent deploys a subfolder rather than `D:\CENTREFREE` root, `agency/` must sit inside that deploy root.

**Optional weight trim (recommended, not blocking):** before deploy, exclude unreferenced working media from upload — `niamh/Shalina Design System (1).zip`, `niamh/Ibucap Kenya Hustler Board (shareable) 2.html`, `niamh/Niamh.png`, `niamh/shalina/aco/film/`, `niamh/shalina/aco/aco-live/`, `niamh/shalina/aco/products/`, `niamh/shalina/aco/heroes/`. Cloudflare Pages honours a `.cfignore`-style exclusion only via directory structure, so either move these to a sibling `agency-src/` folder or accept the extra ~200 MB (uploads are deduped after first deploy; not a blocker either way).

---

## Changes made this sweep (2 files, minimal diffs)
1. `design-system/INDEX.html` — root-absolute redirect → relative (`../niamh/design-system/INDEX.html`), meta-refresh + anchor.
2. `agents/INDEX.html` — ACO Story 07 gateway link retargeted from broken bare-directory path to `../niamh/shalina/aco/storyboards/ACO-STORY-07-THE-SHOPPING-TRIP-EN.html`.

No other HTML touched. Fixes #1–#4 above left for a deliberate stub-or-remove decision.

*Niamh · CENTREFREE · InfoCube · Regency Flux*
