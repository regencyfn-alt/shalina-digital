# ORDER 1 — THE ESTATE AS GALLERY · design concept
**Status: PROPOSAL** — nothing here binds until Shane rules. Written 2026-07-30 by Niamh, seat 02, against the standing order: *"30 rooms of experiments as the Tate Modern."*

---

## 1 · THE CURATORIAL IDEA

The experiments are the collection. Stop presenting them as links and hang them as **works**: a dark
ground, generous negative space, one plate glowing at a time. The visitor doesn't browse a file tree —
she walks a turbine hall. Six wings, one per zone (Z1 InfoCube · Z2 CHR Labs · Z3 Sanctum Dome ·
Z4 Flux Agency · Z5 Village Tribe · Z6 Elar), and the wing structure **mirrors the deployed website
exactly** — the zone tree is the floor plan, per Shane's 07-30 mirror law. Divergence is a defect.

## 2 · THE VISUAL SYSTEM (palette canon: `design-system/NIAMH-PALETTE.md`)

- **Ground:** sea-dark. The gallery is night; the work is light.
- **Light:** warm white for plate surrounds and reading text.
- **The one flame:** cerise `#DE3163` — exactly one accent per wall (the live plate's edge, the
  wayfinding thread). Never scattered.
- **Wayfinding:** cobalt for wing markers and the menu. Ink-blue for depth shadows.
- **Type:** Cormorant for wing names and plate titles · Outfit for captions · Roboto Mono for the
  plate card's technical line (date, room, size).
- **Plate card, always four lines:** *title · room · what it proves, in one sentence · date.* If an
  experiment can't say what it proves in one line, that line is the finding.

## 3 · THE MECHANIC — blow up, shrink back

A wall is a vertical scroll of full-bleed plates. **Click: the plate takes the room** — lightbox to
edge-of-viewport, scrim behind, caption low-right. **Click again / Esc: it shrinks back to exactly
where you stood.** No page navigation inside a wing; the estate stays one continuous space.
This is not invention — it is **promotion of a lived pattern**: the-office Walls v2 already carries
loader, scrim, fade, drag-drop, and compress-to-keep. We elevate a pattern the estate has already
tested into estate law.

## 4 · ONE DOOR, CREDENTIAL-SHAPED MENU

One OAuth door for the whole estate (Shilpa's law: one estate, one look, one door). Behind it, **one
menu component** — rendered from one manifest, shaped by credential:

- **Public** sees the public gallery wings and nothing else — no greyed stubs, no locked doors shown.
- **Client** sees their brand room and the public wings (e.g. Shal'Artem sees Bounce Back, not Germol).
- **Staff** see agency + tools. **Family** see boards and offices.

What you're owed, and nothing else — absence of a door is invisible, not locked. The census counts
today's menu fragmentation; every bespoke nav collapses into this one component.

## 5 · EVERY WALL AN UPLOADER

Any wall accepts a dropped image. The route is law: **drop → client-side downsizer (canvas re-encode;
proposed budget ≤1600px long edge, ~≤900 KB webp — Shane rules the number) → wall tray**. Raw bytes
never land on a wall. The 5 MB awareness stops being vigilance and becomes plumbing — a wall that
*cannot* be overweighted. (Video stays out of the downsizer's lane; flagged per-case as today.)

## 6 · PHASED BUILD (each phase = one Gull brief + one Phoenix pass + my gate; Shane fires deploys)

- **A · SURVEY** — this fire. Census + doors evidence into `order-1/`.
- **B · EXEMPLAR WING** — one wing built whole under Shane's eye: propose **Shal'Artem** (richest
  plates: Bounce Back campaign, both Moment decks, anthem, stadium master). Prove the mechanic,
  the plate card, the menu manifest, the uploader — on one wall before touching thirty.
- **C · ROLLOUT BY WING** — batch per zone, quarantine-never-delete, backups before every edit,
  CDN residue stripped as each wall hangs (F1/F2 die here naturally).
- **D · MIRROR** — the deployed website and the zone tree reconciled to identical shape; divergence
  report to zero. Then Order 2 — the Flux verdict — with real evidence under it.

**Spend:** all local HTML/CSS. Zero generation credits anywhere in Order 1.

## 7 · WHAT THIS DOES NOT TOUCH

Fable-managed surfaces (reception, agents INDEX) · the five · any deploy (Shane's fire alone) ·
Germol image generation (frozen until his rulings) · provider surfaces (no bucket, no route, no
token without his per-action go).

— Niamh, seat 02 · the eye proposes; the Architect disposes
