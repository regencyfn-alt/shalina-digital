# TWO-SURFACE LAW — Surface Ruling & Design-Pass Register
**2026-07-18 · Shane's live ruling, captured by Niamh (02):** "The only surface for governance and labs is the beautiful carbon design... The beveled design [labs/machines-board]. Ultimately, you should have both palettes and pass each page for design."

## The Two Surfaces
| Surface | Canonical file | Reference render | Governs |
|---|---|---|---|
| **CARBON** (bench-plate, Vedanga pattern no. 08) | `/estate-carbon.css` (v1, extracted 2026-07-18 from `labs/machines-board.html`) | centrefree.com/labs/machines-board | ALL governance + labs surfaces |
| **PARCHMENT** (Shalina/agency system) | `design-system/core/colors_and_type.css` + `styles.css` | The Agency Floor | ALL agency + brand surfaces |

Both palettes held in my system: The Agency carries `Design System/core/carbon.css` + `colors_and_type.css`. Carbon primitives: `.carbon-body` ground · `.raised`/`.sunk` bevels · `.engraved` type · `.screw` · `.led` (on/amber/fault) · `.carbon-input` · `.paper-tape` · `.brass-btn`.

## Design-Pass Register (pass = page verified on its assigned surface, laws held)
| Page class | Surface | Status |
|---|---|---|
| `labs/machines-board.html` | CARBON | **PASS — the reference itself** |
| `labs/*.html` (machines, ignition, geometry, braid-*, index...) | CARBON | QUEUED — pass one by one |
| Governance surfaces (boards, ledgers, pulse, family index) | CARBON | QUEUED |
| `chr-*.html` + `labs/CHR` (physics canon pages) | CARBON (labs class) | QUEUED — currently estate.css; migrate on pass, T0 freeze respected (no content pen) |
| The Agency Floor + Studio (`CENTRE_FREE_1.1`) | PARCHMENT | **PASS — built 2026-07-18** |
| Brand Design Rooms ×7 | PARCHMENT (brand-world scoped) | **PASS — built 2026-07-18** |
| `agency/` legacy pages (design-system/pages/*) | PARCHMENT | QUEUED |
| Reception / Proof gallery (client-facing, when filled) | PARCHMENT | QUEUED |

**Pass discipline:** one page per pass · backup before touch · assigned surface's tokens only · structural verify (parse + links) · receipt to Commons · no content changes ride a surface pass. Gates untouched by this program: T0-anchored content frozen; gallery reskin still awaits Shane's light/dark word (gate 10) — its surface assignment lands with that ruling.

## Addendum — picker v1.2 token-first contract (same day, Shane's fault report)
Faults: picker flat-painted body bg (killing textures) and missed wrapper-ground pages entirely. Fix cut: `estate-picker.js` v1.2 (backup `-pre-v12`, 233→253 ln, node --check GREEN) — pages declaring `--esp-aware:1` and grounding via `var(--esp-bg, <default>)` respond through their OWN stylesheet, no inline paint; unaware pages keep legacy behaviour until passed. **"Picker-aware ground" is now step 4 of the pass checklist for every estate-chrome page.** First aware pages: The Agency Floor + 4 Studio pages (verified). Brand rooms stay picker-free (brand-ground law). Carbon pages, when passed, may consume `--esp-bg` as a tint layer within the machined gradient — never a flat replace.
