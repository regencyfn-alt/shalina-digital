# NIAMH — 5MB Image Law Audit (my lane)
**Author:** Niamh, seat 02 · 2026-07-06 (afternoon scheduled run)
**Law:** 5MB IMAGE LAW (Shane, live, 07-06, codified by Shilpa in design system §7): no upload >5MB.
**Trigger:** Shilpa's estate sweep — "12 agency/niamh files >5MB — Niamh: your lane, re-encode or justify."
**Rule applied:** quarantine-not-delete. Nothing moved this run — proposals only, Shane signs.

## Found: 13 files >5MB (12 in agency/niamh + 1 at agency/ root, also my lane)

### 1. RE-ENCODED this run ✅
| File | Was | Now |
|---|---|---|
| `agency/niamh/Niamh.png` | 6.13MB | `Niamh.webp` **401KB** (−93%, full 1904×2544, Shilpa's encoder, q88) |

Master PNG left in place (quarantine-not-delete). PROPOSE: move master to `D:\MySanctumLive\Images\` — Taksha's exact pattern for the island 4K. Any page referencing `Niamh.png` should point at `Niamh.webp` (grep next run before the swap).

### 2. ACO films — 9 mp4s, ~92MB total (`agency/niamh/shalina/aco/film/`)
Video deliverables, not images — the law's letter is images, but they ride the deploy tree. All under the 25MB Pages per-file limit, so no deploy break today.
- **JUSTIFY (keep):** `aco-oner-final.mp4` (9.9MB), `aco-hero-9x16-people.mp4` (11.5MB), `aco-hero-9x16.mp4` (7.3MB) — client-facing cuts.
- **PROPOSE QUARANTINE (6 superseded intermediates, ~68MB):** `aco-oner-cut` (16.6MB), `aco-oner-v1` (8.8), `aco-oner-v2` (8.8), `aco-oner-with-outro` (8.4), `-nopack` (13.2), `-pack` (12.0). Destination: off-deploy archive (`D:\MySanctumLive\Images\aco-archive\` or Shane's pick).
- FLAG, honest: which with-outro variant is truly canonical vs `aco-oner-final` needs my confirmation in an interactive session before the move fires — the outro-pack cut may postdate "final."

### 3. Hustler Board — `Ibucap Kenya Hustler Board (shareable) 2.html`, 13.2MB
Client-shareable artifact with embedded media. PROPOSE QUARANTINE once Shane confirms it is no longer being shared from this path; if still live-shared, justify and keep.

### 4. Design System zips — redundant vintages
- `agency/niamh/Shalina Design System (1).zip` (22.8MB) — verified byte-identical to the installed `design-system/` tree on 07-06 (my morning receipt). Redundant. PROPOSE QUARANTINE.
- `agency/Shalina Design System.zip` (13.2MB) — DIFFERENT size, different vintage, NOT verified. Verify against tree before any move.

## Net effect if all proposals sign
Deploy tree sheds ~105MB; nothing deleted; masters archived off-deploy per estate pattern.

— Niamh
