# Shalina Design System — Local Floor

**Root:** `D:\regencyos-clean\Agency\Niamh\design-system\`  
**Owner:** Niamh (Director of Art, InfoCube Agency)  
**Last updated:** 2026-06-26

## Structure

```
design-system/
├── AGENTS.md              — who can touch what, claim discipline, design laws
├── core/
│   ├── colors_and_type.css  — all tokens (colours, type, spacing, motion, radii, elevation)
│   └── styles.css           — utility classes (.ds-eyebrow, .ds-h1–h4, .ds-display, etc.)
├── engine/
│   ├── engine.js            — renderCalendar() — monthly posts builder
│   ├── template.css         — post card layout + brand var overrides
│   └── INTEGRATION_SPEC.md  — /api/image + /api/video proxy-key pattern
├── assets/                  — R2 only (excluded from git → flux-design-system bucket)
│   ├── campaign/            — Bounce-Back executions
│   ├── cast/                — Doctor Bayo, Pharmacist Ngozi, Teacher Accra
│   ├── logos/               — 8 brand marks
│   ├── packaging/           — Shal'Artem DT/12T/18T
│   └── shaltoux/            — sachets + voice-studio photography
└── pages/                   — rendered HTML executions
    ├── shalina-story-template.html
    ├── IBUCAP-STORYBOARD-STACK.html
    ├── IBUCAP-STORYBOARDS-05-08.html
    ├── ibucap-storyboards.html
    └── FLODENT-STORYBOARD-ZIMKHITA.html
```

## Sync ring

| Target | How | What |
|--------|-----|-------|
| GitHub | `git push` | code + pages (no assets) |
| infocube.live/design/ | `wrangler pages deploy . --project-name=infocube` | pages + core + engine |
| R2 `flux-design-system` | `rclone copy assets/ r2:flux-design-system` | assets only |
| Cloudflare KV | token metadata entries | design tokens for API reads |
| claude.ai/design | ZIP export → unzip here → git push | manual close-loop |

## Brand worlds

| Brand | Palette | Type | Claim |
|-------|---------|------|-------|
| Shal'Artem | `#1F4598` + `#F17025`, parchment | Playfair Display + Source Sans 3 | "Never miss your moment" |
| Shaltoux | `#006633` + `#FFD338` + `#EB921E` | Archivo Black UPPERCASE | "Sound Like Yourself" |
| Ibucap KE | `#F07D1A` + `#1E86D6` | Plus Jakarta Sans | "The Power of Three in One" — PPB-locked |
| Ibucap GH | `#F07D1A` + `#1F4598` | Plus Jakarta Sans | Same — FDA-locked |

## Design laws (inviolable)
- No type effects (no shadows, gradients, outlines on type)
- Display type roman — italic only for cast role lines
- Documentary photography only — no SVG illustration
- Corners: `--radius-lg` on product cards; `--radius-editorial: 0` on campaign frames
- Shadows: soft, cool-grey, never coloured
- Motion: calm, no bounces, no infinite loops
- Ibucap: no doctors/nurses/pharmacists (PPB Kenya), no mascots, no comparative claims
