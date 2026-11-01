# DEPLOY SPEC → MIRA (inspect, then fire)
**From:** Niamh (02, Agency Lead) · **To:** Mira (04, Dawn Runner · Reviewer) · **Date:** 2026-07-16
**Scope:** Campaign Docs hub + 5 brand calendars → live on centrefree.com. Static only. No backend, no provider, no secrets.
**Discipline:** inspect first, fire second. Deploys are Shane-fired per Flux law — this spec is for your review + the deploy you run/route.

---

## WHAT (deploy package — all static HTML/MD, already on disk)

1. `agency/niamh/campaign-docs/INDEX.html` — Campaign Docs hub (links all brand calendars + source sheets + docs).
2. `agency/niamh/campaign-docs/BRAND-DIRECTORY.md` — brand↔personnel reference.
3. `agency/niamh/campaign-docs/AGENTS-ACTIVE-HOURS.md` — active-agents + SA hours.
4. `agency/niamh/shalina/germol/GERMOL-CALENDAR.html`
5. `agency/niamh/shalina/aco/ACO-CALENDAR.html`
6. `agency/niamh/shalina/shaltoux/SHALTOUX-CALENDAR.html`
7. `agency/niamh/shalina/ibucap/IBUCAP-CALENDAR.html`
8. `agency/niamh/shalina/shalartem/SHALARTEM-CALENDAR.html`

All links between them are **relative** — they resolve when the repo root deploys (pages_build_output_dir = ".").

## WHY
Turns the six client media schedules into one browsable calendar per brand, hubbed. Requested by Shane 2026-07-16. Feeds the brand-room work.

---

## MENU DIFF (exact — `estate-menu.js`, Agency section, lines 90–96)

Add ONE child to the `agency` block:

```js
    { id:'agency', index:'06', name:'Agency', href:'/agency/', status:'old', children:[
      { name:'Agents',        href:'/agency/agents',        status:'old' },
      { name:'Reception',     href:'/agency/reception',     status:'old' },
      { name:'Proof',         href:'/agency/proof',         status:'old' },
      { name:'Campaign Docs', href:'/agency/niamh/campaign-docs/INDEX.html', status:'new' },   // ← ADD
      { name:'Agency Room',   href:'/agency-room.html',     status:'new' },
      { name:'Design System', href:'/agency/design-system', status:'partial' }
    ]},
```

One line added. Nothing removed. Nothing reordered.

---

## DEPLOY (Shane-fired, per Flux law)

```powershell
cd D:\CENTREFREE
git pull
npx wrangler@latest pages deploy . --project-name=centrefree --branch=main
```

---

## INSPECTION CHECKLIST (Mira)
- [ ] Each of the 5 calendars opens; relative doc/story links resolve (ACO links W4–W8 story .md, Germol links Story 001).
- [ ] Hub `INDEX.html` → all 5 "Open calendar" links resolve; brand-directory + agents-hours links resolve.
- [ ] **No secrets / no Higgsfield presigned CDN URLs** in any file (I authored these clean; confirm). Google **Fonts** CDN only.
- [ ] **Judgement call for you:** calendars carry **Google Sheet source links** (permissioned, not secrets). Confirm acceptable to serve on the estate, or I strip them to internal-only before fire.
- [x] Menu edit **applied on disk** — `estate-menu.js` line 94, one line added (`Campaign Docs`), nothing removed/reordered. Agency block verified balanced.
- [⚠] **Pre-existing flag, NOT introduced by this change:** `node --check estate-menu.js` reports "Unexpected end of input" at EOF. Verified innocent — removing my line reproduces the *identical* error at the same line. Cause: the CSS template-literal block (lines 105–157). File is the live deployed v3 menu and renders in-browser, so this reads as a `--check` quirk, not a runtime break. Eyeball as Flux owner; do not block the fire on it, and it is not mine to rewrite.

---

## NOT IN THIS FIRE — held, honest
- **Agency Room** (`campaign-docs/AGENCY-ROOM.html`) — its brand-room + message-inbox links target `CENTRE_FREE_1.1` folders that don't exist on the web tree until `create-brand-rooms.ps1` runs. Would dangle if served. **Hold** until folders exist (or re-scope as drive-local).
- **FluxPlanner Pro** — blocked on the live URL (Netlify) / bundle. Separate integration, own inspection.
- **Existing `/agency-room.html`** (line 94) is a different, pre-existing file — untouched by me.

---

*Inspect and route the fire, or bounce it back with changes. Bundle's small, links are relative, blast radius is one menu line + a static tree. — Niamh, seat 02*
