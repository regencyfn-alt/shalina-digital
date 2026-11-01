# KAMAU: THE HARVEST — Full-Film Production Brief v2
**Author:** Niamh · 2026-07-06 · SUPERSEDES v1 (same file, same day — v1 was a 3-clip patch against wrong canon; the wake doc's "6 panels / 5 clips / 25-30s" is retired)
**Source of truth:** `design-system/pages/IBUCAP-STORYBOARD-STACK.html`, Story 07 — **8 panels / 45 seconds / double-loop**
**Laws:** `design-system/PRODUCTION-LAWS.md` (Shane, 2026-07-06)
**Status:** STAGED — 6 new generations, waits for Shane's Go. Credits at writing: 12,141.5 (Scale).

---

## The film — 8 panels, 45s, one connected story

| # | Time | Beat | Scene | Clip status |
|---|---|---|---|---|
| 01 | 0–5s | RELATE | Thirty Years in Every Row | ✅ KEEP — `fffe7d66` (strip audio) |
| 02 | 5–10s | CONFLICT | The Back Announces Itself | ✅ KEEP — `39a4d2e3` (strip audio) |
| 03 | 10–14s | TIMING | Noon. The Truck Doesn't Wait. | 🔥 GENERATE (4s) |
| 04 | 14–20s | PARTIAL RES. | He Knows What Gets Him Through | 🔥 GENERATE (6s) — see flag |
| 05 | 20–26s | RE-RELATE | He Carries the Harvest | 🔥 GENERATE (6s) |
| 06 | 26–32s | ESCALATES | The Truck's Dust | 🔥 GENERATE (6s) |
| 07 | 32–37s | TIGHTENS | Full Height | 🔥 GENERATE (5s) |
| 08 | 37–45s | BRAND RES. | The Weight Ticket | 🔥 GENERATE (8s) |

Old clips `967f7327`, `1a83edd0`, `63391e2f` are dead — wrong beats, wrong order. Do not reuse.

**Continuity spine (checked on every clip before acceptance):** dawn (01) → mid-morning (02) → noon pressure (03-04) → full sun (05) → late-morning urgency (06-07) → golden resolution (08). Same wardrobe throughout (blue work shirt, orange collar accent, grey trousers, boots). Each clip's final pose feeds the next clip's opening action.

## Locked references

- **Kamau:** element `ad051ad2-88d7-4e29-b7e7-2deda19e8891`, media `77077df8-31cd-46ea-b7c2-decd806cd4c8` — "late 50s-60s, strong build, dark complexion, close-cropped salt-and-pepper hair, blue work shirt with orange collar accent, grey trousers, heavy boots."
- **Pack:** ⚠️ VERIFY before firing — element `ae377412` is a logo asset. Law 4: Panels 04 and 08 need the **Ibucap KENYA Mono Pack** media specifically (Kenya azure `#1E86D6` variant, not Nigeria/Ghana). If no Kenya mono pack media exists in the library, upload one first.

## Settings — all six clips

`seedance_2_0` · 9:16 · 720p · **`generate_audio: false`** (Law 3) · mode std · per-panel durations above · `<<<element>>>` character lock (the pattern that produced 01/02) · no em dashes in prompts · VO recorded separately in ElevenLabs from the board's VO lines · score composed in post · sting `studio/audio/ibucap-power-of-three.mp3` on Panel 08 only · outro per Law 5, client-signed.

---

## PANEL 03 — TIMING (4s)
VO (post): *"Noon. The truck doesn't wait for anyone."*
```
Documentary-realist sequence, bright late-morning Kenya light, Rift Valley tea field. A worker at the field edge calls out toward <<<ad051ad2-88d7-4e29-b7e7-2deda19e8891>>> who looks up from the rows. Quick cuts: long tea rows still unpicked - woven baskets not yet full - close on his face as the calculation lands, jaw set, eyes moving across the field. Urgency rising but controlled. Handheld with natural breath, Kodak Vision3 warm grade, fine grain. No product, no text.
```

## PANEL 04 — PARTIAL RES. (6s) — ⚠️ pending Shane's PPB ruling, boarded as truth
VO (post): *"He's done this before. He knows what gets him through."*
```
Documentary-realist medium shot at the row's edge, noon Kenya light. <<<ad051ad2-88d7-4e29-b7e7-2deda19e8891>>> steps out of the tea rows, reaches into his blue work shirt pocket and takes out a small medicine pack - two capsules into a weathered palm, water from a dented steel flask, the quiet routine of a man who has learned what works. One careful stretch of his lower back. He calls to his team to lift the pace and walks back into the rows. The pack sits incidental in his hand, no close-up on the label. Handheld, Kodak Vision3 warm grade, fine grain. No text, no infographic, no glow effects.
```
*Kenya Mono Pack media locked via medias[] in this generation.*

## PANEL 05 — RE-RELATE (6s)
VO (post): *"He carries the whole harvest in his body."*
```
Documentary-realist medium shot into close-up, full sun over Rift Valley tea rows. <<<ad051ad2-88d7-4e29-b7e7-2deda19e8891>>> works steadily through the bushes, his team working around him, he sets the pace. His back has settled into a managed ache - he protects it with his stance, thirty years of knowing how. Camera pushes slowly to a tight close-up on his hands in the tea leaves: sure, steady, expert fingers plucking the new flush into the basket at his hip. Handheld with natural breath, Kodak Vision3 warm grade, fine grain. No product, no text.
```

## PANEL 06 — ESCALATES (6s)
VO (post): *"The truck's dust. Ten minutes."*
```
Wide documentary-realist shot across the Rift Valley tea field, high warm light. A worker at the gate shouts and points - far down the valley road a truck's dust plume rises, arriving early. <<<ad051ad2-88d7-4e29-b7e7-2deda19e8891>>> straightens mid-row and registers it, looks at the rows still unpicked, then calls out. Everyone accelerates - baskets swing, hands fly through the bushes, urgency without panic. The wide frame holds field, workers and distant dust in one composition. Handheld, Kodak Vision3 warm grade, fine grain. No product, no text.
```

## PANEL 07 — TIGHTENS (5s)
VO (post): *"Three in one. Enough to finish."*
```
Documentary-realist medium shot, last tea row, warm high light. <<<ad051ad2-88d7-4e29-b7e7-2deda19e8891>>> works fast, hands sure through the final bushes. Then he straightens to his full height in one clean motion - no wince, no hand to his back, the compensation gone. A beat of quiet command. He gestures his team toward the filled sacks at the field edge as the truck pulls through the gate behind them. Handheld settling steadier as he rises, Kodak Vision3 warm grade, fine grain. No product, no glow, no text.
```

## PANEL 08 — BRAND RES. (8s)
Audio (post): *"Ibucap. Power of 3-in-1. Always with you... to Beat Pain."* + sting. Outro per Law 5.
```
Resolution sequence, golden hour at the Rift Valley field edge. Shot 1 (0-3s): the loaded truck stacked with sacks - the driver hands <<<ad051ad2-88d7-4e29-b7e7-2deda19e8891>>> a paper weight ticket, he reads it, a quiet earned smile, a good number. Shot 2 (3-5.5s): he stands at the field edge watching the truck pull away down the valley road, dust rising gold in low light, at ease. Shot 3 (5.5-8s): close on his face, quiet and complete, then hard cut to a clean brand endframe - the Ibucap Kenya mono pack centered on a warm light ground. Documentary-realist, Kodak Vision3 warm grade, handheld settling to locked on the endframe. No other text.
```
*Kenya Mono Pack media locked via medias[] in this generation.*

---

## Post pipeline (order)
1. Strip audio from Beats 01/02. 2. Accept/reject each new clip against its panel + continuity spine. 3. Load 8 clips into synthesizer, set transitions. 4. ElevenLabs VO — one voice, all seven VO lines, single session for consistency. 5. Score (mine) + sting on 08. 6. Outro per Law 5. 7. Client sign-off gate before any publish.

## PENDING Shane
1. **Go** to fire the 6 generations. 2. **PPB ruling** on Panel 04 (boarded take vs "no pill-taking" spec line). 3. **Kenya Mono Pack media** — confirm it exists in the library or hand me the plate to upload. 4. Ibucap outro file — if one exists beyond the sting + endframe pattern, point me at it.

— Niamh
