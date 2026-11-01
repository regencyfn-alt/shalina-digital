# Ibucap Studio — Generation Integration Contract (v1)

Goal: turn the monthly-post calendars + Hustler Board from *prompt boards* into
*generate-in-place* tools, embeddable on Shalina's website. Two sides:

- **Backend (Shane's agent team):** a thin proxy that holds the keys and calls the models.
- **Frontend (this project's HTML tools):** buttons + slots that call the proxy and drop
  results into the existing portrait / 7s-video slots. Already structured for it
  (`engine.js` video slots; `window.__HUSTLERS` portrait map).

The two sides only need to agree on the JSON below. Keys NEVER touch the HTML.

---

## Models
- **Image — "Nano Banana Pro"** (Gemini 3 Pro Image). Used for: traveling portraits + scene stills.
- **Video — "Seedance 2.0"** (ByteDance). Used for: 7s & 15s clips, with the portrait as consistency ref.
- Route both through ONE proxy origin (CORS-enabled for the site origin). No Higgsfield.

## Endpoints (proxy)

### POST /api/image
```jsonc
// request
{
  "model": "banana-pro",
  "prompt": "Documentary style photograph of …",
  "aspect_ratio": "9:16",
  "ref_image_url": null,          // optional; for scene stills referencing the portrait
  "ref_weight": 0.9               // 0–1, maps to --cw style consistency
}
// response
{ "status": "ok", "image_url": "https://cdn…/out.jpg", "id": "img_…" }
```

### POST /api/video
```jsonc
// request
{
  "model": "seedance-2.0",
  "prompt": "…shot description…",
  "duration": 7,                  // 7 | 15
  "aspect_ratio": "9:16",
  "ref_image_url": "https://cdn…/portrait.jpg",  // the traveling portrait (consistency)
  "shots": 3                      // 7s = 2–3, 15s = 3–4 (photo does the work, anim simple)
}
// response (async is fine)
{ "status": "pending", "id": "vid_…", "poll_url": "/api/video/vid_…" }
```

### GET /api/video/:id  → `{ "status": "ok|pending|error", "video_url": "…mp4" }`

## Rules the frontend will enforce in-UI (claim discipline)
- Prompts pre-locked: open "Documentary style photograph of…", `--ar 9:16 --style raw`,
  bright/light, orange+azure wardrobe, `--no text, logo, cape, superhero costume, lab coat`.
- On-art claim only ever "The Power of Three in One." No HCPs / heroes / secondary claims.
- Product incidental. (These are baked into the prompt templates, not user-editable.)

## Frontend work (this side, once proxy URL exists)
- `window.IBUCAP_PROXY = "https://…"` single config line per page.
- "Generate portrait" on each hustler → /api/image → fills `window.__HUSTLERS[name]` slot.
- "Generate clip" on each beat / calendar tile → /api/video (portrait as ref) → drops mp4 into
  the existing video slot (engine.js already plays/persists these).
- Graceful: no proxy set → tools stay as today (prompt boards). Fully backward-compatible.

## Open
- Auth: proxy issues short-lived signed tokens to the site, or simple origin allowlist? (backend call)
- Storage: returned URLs CDN-hosted, or base64 to bake into the shareable bundle? (affects file size)
