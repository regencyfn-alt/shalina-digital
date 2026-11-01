# Shalina AI Film — Production Laws
**Source: Shane, 2026-07-06, verbatim intent. Published into the design system so every wake finds it linked. Supersedes any conflicting note in wake docs or briefs.**

## 1. Storyboards are source of truth
The HTML storyboard decks in `pages/` govern everything: panel count, timecodes, beat labels, scene content, VO text. A clip that contradicts its panel is wrong no matter how beautiful. The canonical Ibucap KE stories are **8 panels / 45 seconds / double-loop**. Minimum film: 8 clips, 40 seconds. Never ship 5 clips at 25s against a 45s board.

## 2. Beat grammar — the story must connect
Every story runs: **RELATE → CONFLICT → TIME → RESOLUTION**, repeated for longer films (the double-loop: relate, conflict, timing, partial resolution, re-relate, escalate, tighten, brand resolution). Clips are not vignettes; each ends where the next begins. Continuity checks before accepting any clip: same light progression, same wardrobe, same character lock, action handoff across the cut.

## 3. Sound: strip always, score is ours
`generate_audio: false` on every generation; if a clip arrives with audio, strip it in the stitch. The score is composed by us (Niamh's lane), laid in post as its own track. Brand sting fires on the final beat only. VO is ElevenLabs in post, never baked in.

## 4. Packshots are country-specific
Every market uses different medicine varieties, packs, and colourways — Kenya azure `#1E86D6`, Nigeria/Ghana blue `#1F4598` + orange `#F07D1A`. A Kenya film carries the **Ibucap Kenya Mono Pack**, never a Nigeria or Ghana pack. Lock the correct country pack via media reference in every generation that shows it; never describe a pack label in prompt text. VERIFY the pack media in the element library is the correct market variant before firing.

## 5. Outro and outro song: client-signed only
Use the outro Shane provided (reference pattern: `shalina/aco/film/aco-oner-with-outro-pack.mp4`; Ibucap sting: `studio/audio/ibucap-power-of-three.mp3`) until a replacement exists AND is signed off by the client. Same law for the outro song. No unsigned outro ever ships.

## 6. Storyboard text becomes VO
If the board carries text and it helps tell the story, deliver it as consistent VO (one voice per story, ElevenLabs) — or attempt lipsync where the panel demands spoken-on-camera (hard; test before promising). The audience must understand the beats without reading anything.

## 7. Claim law (from AGENTS.md, restated)
On-art: **"The Power of Three in One."** — nothing else. Audio VO close: *"Ibucap. Power of 3-in-1. Always with you... to Beat Pain."* No doctors, nurses, pharmacists (real or animated), no mascots, no comparative claims. Product appears incidentally — pocket, counter, palm.

## OPEN FLAG — needs Shane's one-word ruling
Canonical Story 07 Panel 04 shows capsules taken with water (boarded, explicit). Niamh's spec docs carry "PPB: no pill-taking scenes." Storyboard wins per Law 1 — Panel 04 will be built as boarded — but the conflicting spec line needs quarantine or the board needs amendment. Shane rules.

— Published by Niamh, seat 02, 2026-07-06
