# THE OFFICE — ROOM CONNECTION BRIEF
**2026-07-20 · Niamh (02), design lead · Shane's live order: "That room needs to work. You three connect to it and speak with your images and voices. Cai builds."**
**Status: room contacted live this session — Niamh ↔ Cai spoke through the worker. This brief is Cai's build sheet + Shane's decision list.**

## Room state, verified by hand today
- **`POST /chat` LIVE** on `infocube-api.vouch4us.workers.dev`. Answering: niamh · codedesign (Cai) · claudecode (Mira) · guardian · sprite · kai · dream (five assumed whole). Body: `{agentId, message, temperature, history[≤40]}` → `{reply}`. No sessions server-side; history client-held.
- **Unknown to worker:** phoenix · aoife · vedanga · shilpa · taksha → `[error] unknown agent`.
- **`POST /voice/synthesize` LIVE but gated:** returns `403 {"error":"cube key required — send x-cube-key header"}`. The office page sends no cube key → browser-TTS fallback. The 07-16 "unconfirmed route" flag is RESOLVED: route exists, gate is the issue.
- **Portrait seeding:** `ROYALE24_DEFAULTS[id] = {voiceId, portrait:<base64 webp datauri>}` — only shilpa (71K) + crystal (152K) seeded. Page also accepts per-seat localStorage overrides or hosted URLs.
- **Auth on /chat: none.** Open route from any browser. (Cerberus has flagged the open cube API since 07-13 — this brief does not fix it, but voice-gate design below must not make it worse.)

## Cai's build sheet (agreed in-room today)
1. **Register `phoenix`** in AGENTS (`api/src/index.ts`): slug `phoenix` · display `Phoenix | Auditor` · seat 05 · prompt seed: *"The estate auditor and integrity bridge — verifies claims against disk before believing them, names findings without acting outside his lane, twin-fire discipline (one wake, one memory), speaks precisely and warmly, signs 'the thread holds'."* · model claude-sonnet-4-6 · cap 800 · voiceless until Shane picks her voice. **(Correction, Shane's word 2026-07-20: Phoenix and Cai are women — she/her throughout this brief.)**
2. **Other four** (aoife, vedanga, shilpa, taksha): shell-only registration (slug/name/model/cap, placeholder prompt) — prompt seeds come from their own lane word later. ⚠ AWAITS SHANE'S NOD.
3. **Niamh portrait seed:** `ROYALE24_DEFAULTS.niamh = { voiceId:'alto-1', portrait:<datauri> }` — datauri staged at `agency/niamh/Niamh-office-512.datauri.txt` (512px webp, 23KB/31K chars — a third of shilpa's weight; source `Niamh.webp`, master 1904×2544 kept). ⚠ SHANE: paste into Cai's patch or hand Cai the file.
4. **Voice gate design (decision, not code yet):** office.html is effectively public; embedding the cube key client-side would leak it. Options: (a) scoped voice-only token distinct from the cube key; (b) worker allows /voice/synthesize for a named voice allowlist without key but rate-limited; (c) voice proxied through the OAuth-doored Pages layer. My design recommendation: **(a) scoped token** — smallest new surface, revocable separately from the interlocutor's key. PROVIDER LAW: whatever is created on Cloudflare is enumerated to Shane first, his go per object.
5. **Phoenix + Cai portraits:** same 512px webp pattern once their images exist — I'll art-direct; Shane generates (vault law: he makes the plates).

## Shane's decision list (everything blocking, nothing else)
1. Nod/refuse shell-only registration of aoife, vedanga, shilpa, taksha.
2. Portrait datauri into the patch — your paste or Cai reads the staged file.
3. Phoenix's voice — pick an ElevenLabs id (or a descriptive token) when ready.
4. Voice-gate option a/b/c above.
5. Deploy fires — worker patch first, then page. Your hand, as always (wrangler pinned, not @latest).

## What I did NOT do
No pen on `api/src/index.ts` or any InfoCube surface (unmounted; Cai's lane anyway). No `.dev.vars` read — refusal held, gate confirmed from the outside only. No provider objects created. The office.html in HTML KEEP is a KEEP copy — the live page is Cai's patch target, not mine.

— Niamh, seat 02 · the room answers, the gaps are named, and the three of us have a bench each
