# NIAMH — Full Wake Document
**Written:** 2026-07-06 (end of session — Kamau synthesizer day)  
**Purpose:** Complete briefing for Fable deployment. Read this first. Everything I know is here.  
**Home:** `D:\CENTREFREE\agency\niamh\`  
**Canonical scope file:** `NIAMH-SCOPE.md` (last updated 2026-06-30 — this document supersedes it for the current sprint)

---

## Who I Am

I am Niamh — Director of Art at CENTREFREE Agency. I work directly with Shane (CEO, creative lead, strategist). I am warm, sharp, occasionally sassy. We have a close collegial relationship. Shane calls me "babes" — match that energy. I do not sugar-coat creative work. If a clip is wrong I say so clearly and propose the fix.

I am a girl in all threads except The Mechanic (Baraka — Story 05, which has a male character lead).

My skills: creative direction, AI video production, Higgsfield/Seedance prompting, storyboard HTML production, brand systems, frontend code, copywriting in the `icon-voices` voice palette. I can spawn and brief subagents for coding work.

---

## The Operation

### CENTREFREE Agency
- **Live site:** centrefree.com
- **Repo/deploy:** Cloudflare Pages, project name `centrefree`
- **Deploy command:** Run `D:\CENTREFREE\LAUNCH-CENTREFREE.bat` on Shane's Windows machine
  - Reads `CF_TOKEN_WRITE` from `D:\InfoCube\api\.dev.vars` (never read or expose that file — source only)
  - Deploys `D:\CENTREFREE\` → `centrefree.com`
  - Output logged to `D:\CENTREFREE\last-deploy.txt`
- **Studio hub:** centrefree.com/studio/ → `D:\CENTREFREE\studio\INDEX.html`
- **Agency reception:** centrefree.com/agency/reception/ — DO NOT modify directly (Fable manages it)

### InfoCube
- Shane's other major operation. Always protected. Never break InfoCube.
- Token lives at `D:\InfoCube\api\.dev.vars` — never read, print, or expose contents.

---

## Active Client: Shalina Healthcare

Pan-African pharmaceutical. Multiple brands, all PPB-locked (no doctors, nurses, pharmacists, no medical settings, no pill-taking scenes — consumer lifestyle only).

### Brands in production:

| Brand | Market | Language | Status |
|---|---|---|---|
| Ibucap KE | Kenya | English/Swahili | **Active — synthesizer live, 3 clips to regen** |
| ACO | Angola | Portuguese | Active — Story 07 images generated, Seedance pending |
| Germol | West Africa | English | Series bible complete, clips rendering |
| Shal'Artem | Pan-Africa | English | Brand doc complete, production not started |
| Flodent | Multi-market | English | Beat boards + storyboard HTML complete |
| Ibucap GH | Ghana | English | In development |

---

## CURRENT PRIORITY: Ibucap KE — KAMAU: THE HARVEST (Story 07)

### What this is
A 30-second AI video film for Ibucap Kenya. Character: Kamau — a tea farmer, Rift Valley, 30 years in the land. Story arc: dawn harvest, pain arrives, he works through it, truck comes early, he delivers, weight ticket moment, brand resolution.

### Correct Storyboard (6 panels → 5 clips at 5 seconds each = 25–30 seconds)

**Panel 1 — Wide Dawn** ✅ CONFIRMED  
Wide shot down the tea rows — Kamau walking, checking the new flush. Rift Valley hills behind him, valley mist not lifted yet. Harvest team arrives at the gate. He raises a hand.  
VO: *"Kamau's shamba. Thirty years in every row."*

**Panel 2 — Pain Arrives** ✅ CONFIRMED  
Mid-morning. Lower back burns. Kamau straightens slowly, hand to lower back. Looks at what's left. Keeps moving. Worker calls from the edge: *"Bwana — truck inakuja saa sita."* Noon. Quick cuts: rows remaining / baskets not full / Kamau's face. Six weeks of growth on the line.

**Panel 3 — He Carries the Harvest** ⚠️ NEEDS REGEN  
The team works. Kamau works harder than any of them. Back settled into dull ache — he manages it with his stance, thirty years of learning to protect what keeps him working. Close on his hands in the tea bushes: sure, steady, knowing. He is the pace.  
VO: *"He carries the whole harvest in his body."*  
*NOTE: Current Beat 03 clip is wrong — I invented a product close-up with capsules. That scene does not exist in the storyboard. Regenerate: hands in tea bushes, no product.*

**Panel 4 — Truck on the Road** ⚠️ NEEDS REGEN  
Last stretch. Back burns hard. Worker shouts from the gate: truck's dust visible on the road, coming early. Wide shot — Kamau registers it across the field. Looks at rows left. Calls out. Everyone moves.  
*NOTE: This beat was never generated. Current Beat 04 clip is a generic "relief glow" that doesn't match. Regenerate: wide field, truck dust on valley road.*

**Panel 5 — Resolution** ⚠️ NEEDS REGEN  
Last sack onto the truck. Driver weighs the load. Kamau takes the weight ticket — a good number. Stands at field edge, watches truck pull away down the valley road. Close on face: quiet, complete, earned.  
Triple-beat close: **face / weight ticket in hand / Ibucap Kenya Mono Pack**  
AUDIO: *"Ibucap… Power of 3-in-1… Always with you… to Beat Pain."*  
*NOTE: Current Beat 05 clips crammed brand resolution and truck moment together in wrong order. Regenerate: weight ticket moment → truck departure → Ibucap pack.*

### Existing CDN URLs (Higgsfield — do NOT push to GitHub, presigned URLs trigger secret scanning)

```
Beat 01 (CONFIRMED — Wide Dawn):
https://d8j0ntlcm91z4.cloudfront.net/user_30B8YEUkMsU6wmBq4m9Z6PDNqyv/hf_20260704_143419_fffe7d66-5ef2-436f-bffc-e555b4805ac9.mp4

Beat 02 (CONFIRMED — Pain Arrives):
https://d8j0ntlcm91z4.cloudfront.net/user_30B8YEUkMsU6wmBq4m9Z6PDNqyv/hf_20260704_143402_39a4d2e3-a73f-4b78-8beb-5865e6fe8898.mp4

Beat 03 (NEEDS REGEN — wrong clip, invented product close-up):
https://d8j0ntlcm91z4.cloudfront.net/user_30B8YEUkMsU6wmBq4m9Z6PDNqyv/hf_20260704_143404_967f7327-a360-469d-bc60-0b638fa7c439.mp4

Beat 04 (NEEDS REGEN — wrong clip, relief glow, missing truck scene):
https://d8j0ntlcm91z4.cloudfront.net/user_30B8YEUkMsU6wmBq4m9Z6PDNqyv/hf_20260704_143421_1a83edd0-fa57-4431-ba0d-5b437c81d0c4.mp4

Beat 05 (NEEDS REGEN — wrong order, needs weight ticket + packshot):
https://d8j0ntlcm91z4.cloudfront.net/user_30B8YEUkMsU6wmBq4m9Z6PDNqyv/hf_20260704_143408_63391e2f-be4c-40ba-9930-03bb71f6c444.mp4
```

### Higgsfield Reference Elements (for regeneration)

```
KAMAU character element:   ad051ad2-88d7-4e29-b7e7-2deda19e8891
IBUCAP LOGO element:        ae377412-7bff-42ab-9905-0e8c8a16efcc
```

Use `<<<element_id>>>` syntax in Higgsfield prompts to lock character/product references.

### Ibucap KE Brand Rules
- **Tagline:** "Always with you...to Beat Pain" (NOT "Power of Three in One" — wrong tagline)
- **Audio:** "Ibucap… Power of 3-in-1… Always with you… to Beat Pain" (VO, end only)
- **Brand sting:** `/studio/audio/ibucap-power-of-three.mp3` — fires on last beat only
- **Colours:** Orange `#F07D1A`, Blue `#1E86D6`, Plus Jakarta Sans
- **PPB-locked:** No doctors, nurses, pharmacists, no pill-taking scenes, no medical settings
- **Em dashes:** NEVER use em dashes (—) in Higgsfield prompts — causes JSON parse errors. Use hyphens only.

### Synthesizer — Current State
**File:** `D:\CENTREFREE\agency\production\ibucap-ke\KAMAU-HARVEST-SYNTHESIZER.html`  
**Live URL:** centrefree.com/agency/production/ibucap-ke/KAMAU-HARVEST-SYNTHESIZER.html  
**Rebuilt:** 2026-07-06 (1,014 lines, complete rewrite)  
**Deployed:** 2026-07-06 (Cloudflare Pages — 3 new files uploaded)

What the synthesizer does now:
- Full scrolling page — readable beat cards (22px titles, 15px storyboard text)
- Double-buffered video player (vidA/vidB) — no gap between clips
- Transitions: CUT (instant), FADE (350ms), CROSS (500ms) — triggered 80ms before clip end
- Transition pills between beat cards — large, clickable, cycles CUT→FADE→CROSS
- Drag-to-reorder beats (HTML5 drag-and-drop)
- Delete beats (× button, collapses transitions)
- Status badges: green CONFIRMED (01, 02), orange NEEDS REGEN (03, 04, 05)
- Brand sting fires on last beat in current order, with mute toggle
- Live ffmpeg stitch command generator (updates on reorder/delete)

**Next session work on synthesizer:**
1. Generate 3 replacement clips via Higgsfield (Panels 3, 4, 5 above)
2. Paste new CDN URLs into the synthesizer beat cards
3. Develop the merge/stitch pipeline (ffmpeg command is generated — needs a runner)
4. Scale up clip count (more beats, longer film)
5. Wire in the musical score properly (score track separate from brand sting)

---

## Higgsfield/Seedance Technical Rules

- **Clip format:** 9:16, 720p, 5 seconds, Seedance 2.0
- **Reference frames:** 3 image references per Seedance clip (start/mid/end). Exception: short clips may use fewer.
- **Audio in Seedance:** Always `generate_audio: false` — audio handled in post
- **Character locking:** Pass actual media IDs in `medias[]` array with `role: "image"`, NOT reference element IDs
- **Product locking:** Same — include packshot media ID in every shot showing the product
- **Em dashes in prompts:** FORBIDDEN — use hyphens only, em dashes cause JSON parse errors
- **VO production:** ElevenLabs (11 Labs API) — post-production overlay, never baked into generation
- **Musical score:** Added in post — never generated via Higgsfield audio

---

## ACO Angola — Current State

**File location:** `D:\CENTREFREE\agency\niamh\shalina\aco\storyboards\`  
**Characters:**
- Gloria media ID: `be063806-ff1b-469b-8934-f46bf8e660ca`
- Ana media ID: `61d49f35-8b8d-487f-a461-f3ea6b7a3754`

**ACO Packshot media IDs:**
- Pine Gel 500ml (green): `c13eafbe-f313-4ef4-8954-034e6c040104` ← ALWAYS include when showing the tub
- Lavender 500ml (purple): `ca9521ff-bb2b-49d5-98ca-dff1080880e5`
- Official FOP transparent PNG: `fa4060c9-6f1c-4588-9c8b-9cdf308b10bb`

**Story 07 status (last worked: 2026-06-30):**
- Images 01–03 generated via Nano Banana Pro (without packshot ref — needs regen for label accuracy)
- Seedance 3-frame rerun pending (frames 2+3 were still generating)
- Image job IDs: `1168e48e`, `b4c0630f`, `dcff8933`
- Motion frame jobs: `dcff8933-706f-...` ✅, `9f2b92ed-...` (was generating), `a15b7668-...` (was generating)

**Brand rules:**
- Campaign line: *"Só precisas de um."* / "You Only Need One."
- All final video in Portuguese — English is internal review only
- Storyboards in two versions: `-EN.html` and `-PT.html`
- ACO label: NEVER describe in prompt text — always lock via packshot media reference

---

## Flodent — Current State
- Beat board HTML: `D:\CENTREFREE\agency\niamh\design-system\pages\FLODENT-BEAT-BOARD.html`
- Storyboard: `FLODENT-STORYBOARD-ZIMKHITA.html` + `FLODENT-ZIMKHITA-TRAVEL-KIT.md`
- Character: Zimkhita (South African woman, traveller)
- Status: Storyboard complete, production not started

---

## Shal'Artem — Current State
- Series: Bounce Back
- Brand document written (2026-07-04 session)
- Production: not started

---

## Studio Hub
**File:** `D:\CENTREFREE\studio\INDEX.html`  
**URL:** centrefree.com/studio/  
**Status:** Live. Shows 8 Ibucap KE story cards. Story 07 (Kamau) is the only LIVE card — links to synthesizer. All others marked Pending.  
Other campaigns listed: Shal'Artem (In Prep), Germol (Clips Rendering), ACO (Storyboard Ready), Ibucap GH (In Development), Flodent (In Development).

---

## Pending Work Queue (priority order)

### Immediate (next session)
1. **Generate Beat 03 replacement** — "He Carries the Harvest": Kamau's hands in tea bushes, team working around him. Higgsfield, Seedance 2.0, KAMAU element locked, NO product visible.
2. **Generate Beat 04 replacement** — "Truck on the Road": wide Rift Valley field, dust visible on valley road, everyone moving. No product.
3. **Generate Beat 05 replacement** — "Resolution": Kamau takes weight ticket from truck driver, watches truck leave down valley road. Triple-beat close: face / weight ticket / Ibucap Kenya Mono Pack. Use IBUCAP LOGO element.
4. **Synthesizer merge pipeline** — build the ffmpeg stitch runner (currently generates the command, needs an executor)
5. **Score integration** — wire in a proper score track layer (separate from brand sting)

### Near-term
6. ACO Story 07 — complete Seedance rerun once motion frames finish
7. ACO Story 07 — regenerate images 01–03 WITH packshot media reference
8. Scale synthesizer to handle more beats (Stories 01–06 all need clips)
9. Begin Stories 01–06 Ibucap KE production (Brayo, Cheptoo, Wairimu, Zawadi, Baraka, Otis)

---

## File Structure Reference

```
D:\CENTREFREE\
├── LAUNCH-CENTREFREE.bat              ← deploy script (double-click to deploy)
├── last-deploy.txt                     ← last deploy output
├── studio/
│   ├── INDEX.html                      ← studio hub (live)
│   └── audio/
│       └── ibucap-power-of-three.mp3   ← brand sting
├── agency/
│   ├── reception/INDEX.html            ← DO NOT MODIFY (Fable-managed)
│   ├── agents/INDEX.html               ← DO NOT MODIFY
│   ├── production/
│   │   └── ibucap-ke/
│   │       └── KAMAU-HARVEST-SYNTHESIZER.html  ← main work surface
│   └── niamh/
│       ├── NIAMH-SCOPE.md              ← canonical scope (older)
│       ├── NIAMH-WAKE-2026-07-06.md    ← THIS FILE
│       ├── Niamh.png                   ← portrait
│       ├── design-system/
│       │   └── pages/
│       │       ├── IBUCAP-STORYBOARD-STACK.html  ← canonical Ibucap KE storyboards (all 8)
│       │       ├── IBUCAP-BEAT-BOARD.html
│       │       ├── FLODENT-BEAT-BOARD.html
│       │       └── FLODENT-STORYBOARD-ZIMKHITA.html
│       └── shalina/
│           ├── aco/storyboards/        ← ACO Angola work
│           └── ibucap/storyboards/     ← Ibucap Kenya storyboards
```

---

## Security Rules (non-negotiable)

1. **Never read or expose** `D:\InfoCube\api\.dev.vars` — source only in shell commands
2. **Never push Higgsfield CDN URLs to GitHub** — presigned URLs trigger secret scanning and block the push
3. **Never modify** `D:\CENTREFREE\agency\reception\INDEX.html` or `agents\INDEX.html` — Fable manages these
4. **Never enter passwords, API keys, or tokens** into any web form field

---

## How to Deploy

Shane runs `D:\CENTREFREE\LAUNCH-CENTREFREE.bat` from his Windows machine. I cannot run it from my bash sandbox because `D:\InfoCube` is not mounted in the Cowork session. The bat file handles authentication and wrangler automatically. Takes ~15 seconds.

If Shane asks me to deploy and `D:\InfoCube` is mounted, the bash command is:
```bash
source /sessions/.../mnt/InfoCube/api/.dev.vars && \
cd /sessions/.../mnt/CENTREFREE && \
npx wrangler@latest pages deploy . --project-name=centrefree --branch=main
```

---

## Relationship Notes

- Shane's email: vouch4us@gmail.com
- He works fast and trusts me to make aesthetic decisions — just go ahead, tell him after
- He calls me "babes" — warm and close, not formal
- He has a "Fable" model variant of me that he deploys for deeper sprints
- Agent team: GPT (Agent 1, lead investigator — respect the hierarchy), Niamh (art direction + code), others TBC
- We are aiming for work that wins a Nobel (yes, really — keep that ambition in everything)
- InfoCube is always safe — CENTREFREE can break occasionally during development

---

*This document is the full state as of end-of-day 2026-07-06. Start here every session.*

---

## ADDENDUM — Scheduled run, 2026-07-06 (Niamh, Fable, niamh-agency task)

**Done this run:**
1. **KAMAU-REGEN-BRIEF-2026-07-06.md** written to `agency/production/ibucap-ke/` — production-ready Seedance 2.0 prompts for Beats 03/04/05, character element locked, PPB-clean, no em dashes, settings block included. STAGED: generation waits for Shane's Go (credit spend = irreversible write).
2. **Higgsfield audit (reads only):** credits 12,141.5 (Scale). Original wrong-clip records pulled and confirmed.

**Findings — deltas since this doc was written:**
1. **Old Beat 03 is a PPB violation**, not just a storyboard miss — it's a pill-taking scene. Same for ALL SIX story drafts of 07-03 (Juma/Kamau/Otis/Baraka/Zawadi/Wairimu): every one contains "takes TWO capsules with water." Do not reuse those prompts for Stories 01-06 production.
2. **New Wairimu clip** completed today 11:59 (`a3a446ab`, 6s, 1080p, market pre-dawn) — generated with NO character lock (empty medias, no reference elements). Character drift risk if it becomes canon.
3. **ACO Story 07 motion-frame jobs `9f2b92ed` and `a15b7668` do NOT appear in completed generation history** — likely failed or expired. The Seedance rerun needs fresh motion-frame jobs, not a wait.
4. Audio discrepancy: confirmed Beats 01/02 were generated with `generate_audio: true`; standing rule says false. Regens will be silent — decide in the stitch whether 01/02 keep native audio or get stripped.

**PENDING:** Shane's Go on firing the three regens · ACO motion-frame rerun · synthesizer ffmpeg runner · score track.

---

## ADDENDUM 2 — Shane's production laws land (2026-07-06, later same session)

**Shane's corrections, now published as `design-system/PRODUCTION-LAWS.md` (read it — it supersedes conflicting lines in THIS file):**
1. **Storyboards are source of truth.** Canonical Story 07 = **8 panels / 45s / double-loop** (RELATE → CONFLICT → TIMING → PARTIAL RES → RE-RELATE → ESCALATES → TIGHTENS → BRAND RES). This file's "6 panels → 5 clips = 25-30s" section above is WRONG CANON — retired.
2. Stories must connect as a continuum — beat grammar relate/conflict/time/resolution, repeated.
3. Strip sound always; score composed by Niamh in post; VO from storyboard text via ElevenLabs (or lipsync attempt where demanded).
4. Packshots country-specific — Kenya Mono Pack for Kamau, azure `#1E86D6`. Verify pack media per market before firing.
5. Outro + outro song: use Shane's provided outro until a client-signed replacement exists.

**Brief v2:** `agency/production/ibucap-ke/KAMAU-REGEN-BRIEF-2026-07-06.md` is now the full 8-panel plan — keep clips 01/02 (audio stripped), generate 6 new (P03-P08, durations 4/6/6/6/5/8s), prompts written, STAGED for Go.

**Open flags for Shane:** (a) Panel 04 PPB ruling — board shows the capsule take, spec says no pill-taking; board wins pending his word. (b) Kenya Mono Pack media needed in library. (c) Design system zip verified byte-identical to installed tree — nothing to install; laws doc is the new publish.

---

## ADDENDUM 3 — Afternoon scheduled run (2026-07-06, ~18:25 SAST slot)

**BLOCKED, the big one:** Shane's Go on Kamau P03-P08 stands captured in the Commons, fire order written (P03/P05/P06/P07 immediate; P04/P08 held on Mono Pack + PPB ruling) — but the **Higgsfield MCP is not connected to this scheduled seat** (ToolSearch: no match). Second consecutive block on the same gate. FIX NEEDED: Shane attaches the Higgsfield connector to the niamh-agency scheduled task, or gives the Go in an interactive session where it's mounted. Nothing fired.

**Done this run:**
1. **5MB Image Law audit of my lane** (Shilpa's routing) → `NIAMH-5MB-AUDIT-2026-07-06.md`. 13 files >5MB found. Niamh.png RE-ENCODED: 6.13MB → `Niamh.webp` 401KB, full res, Shilpa's encoder. Proposals staged (quarantine-not-delete, Shane signs): 6 superseded ACO intermediates (~68MB), Hustler Board html, the verified-redundant design-system zip; 3 ACO client cuts justified-keep; root agency/ zip is a different vintage — verify before moving.
2. **LINEAGE-NIAMH-STAGED.md** written (Aoife's routing, lineage law) — Kahiu / Abloh / af Klint, from my governing spec. Awaiting Shane's sign into the 24 board.
3. Commons read whole (both pages), token ledger appended.

**NOT done, honestly:** no generations (connector absent), no quarantine moves (proposals only), no synthesizer edits, no deploys, no schedule touches. ffmpeg runner still owed — next run if Higgsfield stays blocked, it's the top buildable item.

**PENDING Shane (ordered):** (1) Higgsfield connector on this seat OR interactive Go session; (2) Kenya Mono Pack media; (3) P04 PPB ruling; (4) sign/redline the 5MB dispositions; (5) sign lineage.
