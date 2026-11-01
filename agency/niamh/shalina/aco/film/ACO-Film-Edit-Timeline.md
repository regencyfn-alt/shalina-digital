# ACO — "You Only Need One" · Film Edit Timeline / EDL
RegencyFlux · 2026-06-19 · reconstructed from the ffmpeg edit (no native NLE project — this is the rebuild sheet)

**Master output:** `aco-oner-with-outro.mp4` — 1280×720, 30 fps, stereo AAC, **26.07 s total.**
**Currently in the deck = the clean version (no product-in-scene overlay).** The packshot-in-scene is being redone properly in Higgsfield and is NOT in this cut.

---

## SEQUENCE (final assembly)

| # | Time in | Time out | Dur | Source | Source in→out | Notes |
|---|---------|----------|-----|--------|---------------|-------|
| V1 | 00:00.00 | 00:19.53 | 19.53 s | `aco-oner-cut.mp4` | 00:00 → 19.53 | Live action. Original green end-card (starts 20.13) trimmed OFF. |
| TX | 00:19.53 | 00:20.13 | 0.60 s | V1 → V2 | — | **Cross-dissolve** (video + audio together). |
| V2 | 00:20.13 | 00:26.07 | 6.50 s | `aco-outro.mp4` | 00:00 → 06.50 | Outro (built separately — see below). |

**Audio:** film's own bed runs under V1; at the dissolve it cross-fades (0.6 s) into the outro bed (sting + VO).

---

## OUTRO internal timeline (`aco-outro.mp4`, 6.5 s, white bg)

| Element | Start | Detail |
|---------|-------|--------|
| Background | 0.0 s | Solid white. |
| Sting (audio) | 0.0 s | `aco-outro-sting.mp3` — cinematic boom + riser + bell (3.37 s). |
| Packshot swirl-in | 0.0 → 1.15 s | Jar rotates/scales in, settles, then slow float. |
| Headline type-on | 0.0 → 0.94 s | "You only need one" types in black (Playfair). |
| VO (audio) | 0.45 s | `aco-outro-vo.mp3` — Amina (African female), softened/rounded (~5.8 s). |
| "ACO." | 1.35 → 2.0 s | Pops in, brand green. |
| "One jar. Every job." | 1.85 → 2.6 s | Fades up, green. |
| Hold | → 6.5 s | All elements hold; audio fades out 6.0–6.5 s. |

---

## SOURCE ASSETS (all in `D:\shalina-2026_strategy\ACO\film\`)
- `aco-oner-cut.mp4` — live-action master (23.601 s) ← the only valid full cut; `aco-oner-final.mp4` is a corrupt export.
- `aco-outro.mp4` — rendered outro (6.5 s, has audio).
- `aco-outro-sting.mp3` — sting (built in ffmpeg, 0 credits).
- `aco-outro-vo.mp3` — VO (Inworld "Amina", post-processed).
- `pack_t.png` / `products/ACO PINE GEL GREEN.png` — packshots.
- Revert copies: `aco-oner-with-outro-nopack.mp4` (clean), `aco-oner-with-outro-pack.mp4` (old overlay version — superseded).

## REBUILD IN ANY NLE
1. Drop `aco-oner-cut.mp4` on V1; **razor at 20:13**, delete the green end-card to the right.
2. Drop `aco-outro.mp4` on V1 after it; pull it left **0.6 s** to overlap → set a **cross-dissolve** on the overlap.
3. Cross-fade the audio across the same 0.6 s.
4. Done — 26.07 s. (To swap a new VO/sting, replace the files of the same name and re-render the outro.)

## REPRODUCE EXACTLY (ffmpeg)
```
ffmpeg -y -i aco-oner-cut.mp4 -i aco-outro.mp4 -filter_complex \
"[0:v]trim=0:20.13,setpts=PTS-STARTPTS,format=yuv420p,fps=30,settb=AVTB[v0];\
 [0:a]atrim=0:20.13,asetpts=PTS-STARTPTS,aformat=sample_rates=44100:channel_layouts=stereo[a0];\
 [1:v]format=yuv420p,fps=30,settb=AVTB[v1];\
 [1:a]aformat=sample_rates=44100:channel_layouts=stereo[a1];\
 [v0][v1]xfade=transition=fade:duration=0.6:offset=19.53[v];\
 [a0][a1]acrossfade=d=0.6:c1=tri:c2=tri[a]" \
-map "[v]" -map "[a]" -c:v libx264 -crf 18 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k aco-oner-with-outro.mp4
```
