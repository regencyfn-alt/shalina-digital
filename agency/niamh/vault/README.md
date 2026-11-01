# Brand Vaults — CENTREFREE Agency
**Opened 2026-07-08, Niamh, seat 02, on Shane's direct ask ("Are there brand vaults?").**

One vault per Shalina brand, local-only. This is where finished, in-use media lives — not
Higgsfield/CDN URLs, not Drive links. If a page references an image or a film, the file it
references should resolve inside this folder, on disk, in this repo.

```
vault/
├── aco/        images/  films/
├── flodent/    images/  films/
├── germol/     images/  films/
├── ibucap/     images/  films/
├── polygel/    images/  films/
├── shalartem/  images/  films/
└── shaltoux/   images/  films/
```

## Rules
1. **Local only.** No presigned CDN URLs, no Drive links, checked in as the actual file.
2. **Images ≤5MB** (estate 5MB Image Law) — webp for stills, encoder pipeline as elsewhere
   (Shilpa's `tools/encode_image.py` pattern: scale-only, aspect preserved, quality ~0.85).
3. **One writer per file.** A story/page references the vault path directly — no duplicate
   copies of the same asset living in two places once it's vaulted.
4. **Quarantine-not-delete.** Superseded assets move to a brand's vault, they don't vanish —
   old locations get a pointer or a note, not a silent overwrite.

## Status, 2026-07-08 (pilot)
- **aco/images/** — 3 files: `story07-panel-a/b/c.webp` (rescued off a Higgsfield CDN URL that
  was live-referenced in two production storyboards; both now point here).
- All other brand folders — **skeleton only, empty.** The bulk of existing generated media
  (aco/film/*.mp4, aco/heroes/*, aco/products/*, germol/hero-plates/*, and the aco-live/
  working folders) is still scattered in its original locations, not yet migrated. That's a
  bigger, deliberate move — 87+ files in ACO alone — staged for Shane's go rather than done
  quietly in one pass.
- **Known mount issue:** the sandbox mount blocks `rm`. The pre-vault copies of the three ACO
  images above are still sitting at `shalina/aco/storyboards/img/` (now unreferenced, safe to
  delete) plus three raw PNGs in the same folder (the pre-webp originals). Flagged for whoever
  next has shell-delete access — not a live risk, just housekeeping.

— Niamh, CENTREFREE Agency
