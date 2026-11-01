# FluxPlanner Pro — Integration Brief
**From:** Niamh (02, Agency Lead) · **Owner of app/architecture:** Shilpa · **Date:** 2026-07-16
**Source:** `integration-manifest.json` (v1.0.0), uploaded by Shane
**Status:** ROUTING — not built. App bundle missing; provider + Flux-lane steps gated.

---

## What it is

**FluxPlanner Pro** — a browser campaign-budget planner. Plans, budgets, CSV / Google-Sheets export, and **optional plan storage in Google Drive** (create / update / list / open / trash plans). Static web module (Vite build), no server of its own, no secrets embedded.

**How it fits what we've been building:** this is the real "plan storage" layer the brand-room work pointed at. Instead of a raw drop-folder, staff plan a brand's budget in FluxPlanner and its plans save to Google Drive — connected to the brand rooms. It supersedes the drop-box-only model for *budget plans* (the drop-boxes still serve raw file updates).

---

## The blockers, named (nothing hidden)

1. **App bundle not on disk.** I have only the manifest. To mount it I need the FluxPlanner files — `index.html` + `data.js`, `budget-engine.js`, `export.js`, `plans.js`, `app.js`, `style.css` (or the built `dist/`). **Please drop the bundle in the estate** (suggest `agency/tools/fluxplanner/`).
2. **The mount is a Flux build.** Routing/iframe integration into CENTREFREE is **Cairenn's** lane (CENTREFREE-only builder). I brief it; I don't cut Flux code.
3. **Google setup is provider-side = your hands (Provider Law).** Creating the OAuth client, enabling the Drive API, and setting authorized origins are objects on your Google account. I cannot create them. Enumerated below for your per-action go.
4. **Deploy fires with Mira.**

---

## Split by owner — the actual steps

**① Shane (provider — per-action, Provider Law):**
- Create a **Google OAuth web client** (Google Cloud console).
- **Enable Google Drive API v3** on that project.
- Add authorized JavaScript origins: the **centrefree.com** production origin **+** the dev origin.
- Hand the **public client ID** to the build (goes in app/localStorage — it's public, origin-locked; **no client secret** in the browser, ever).

**② Shilpa (architecture — "refer to Shilpa if confused"):**
- Confirm the mount model: **self-host the bundle on centrefree** (a dedicated route, e.g. `/agency/fluxplanner/`) **or** iframe-embed an external (Netlify) deploy.
- Decide isolation: manifest recommends iframe/dedicated route (global `window` state + fixed DOM IDs → collision risk if inlined).

**③ Cairenn (CENTREFREE build):**
- Mount at the agreed route, **preserve script load order** (`data.js → budget-engine.js → export.js → plans.js → app.js`), serve over HTTPS.
- If self-hosted on centrefree we control headers (good). If iframing a Netlify deploy, its **`X-Frame-Options: DENY`** blocks embedding — must be removed/overridden at source first.

**④ Mira:** review the mount + fire the deploy.

**⑤ Niamh (me, once live):** wire the FluxPlanner route into the **Agency Room** and each **brand room** (a "Plan budget" link beside the calendar), and connect saved plans back to the brand-room folders.

---

## Security (from the manifest — hold these)
- No OAuth **client secret** in the browser. Ever.
- Client ID is public but **must be origin-locked** to centrefree + dev.
- `drive.file` scope only (app sees only files it creates — good, least-privilege).
- Storage keys `fpro_client_id`, `fpro_drive_folder_<user>` live in the user's browser localStorage.

---

## What I need to move
1. **The app bundle** dropped in the estate.
2. **Shilpa's** call on self-host vs iframe.
3. **Your go** on the four Google provider actions (①) — named above so it's per-action, not a blank grant.

Give me those and I brief Cairenn to mount it, Mira to deploy, and I wire it into the rooms. — Niamh, CENTREFREE
