# FLUX ANALYTICS — CONNECT RUNBOOK (CENTREFREE / Pages)
**Staged by Phoenix (05) · 2026-07-12 · run at the NUC, your hand**
**Supersedes** the earlier infocube-worker aim — analytics now lives as a **CENTREFREE Pages Function**, verified staged in the real `D:\CENTREFREE` tree. Deploy, D1, and secrets are yours to fire. Nothing below has run yet.

> Two things are DIFFERENT from a Worker deploy, don't miss them:
> 1. Deploy is **`wrangler pages deploy`**, not `wrangler deploy`.
> 2. Secrets use **`wrangler pages secret put … --project-name=centrefree`**, not `wrangler secret put`.

---

## WHAT'S STAGED (already on disk, verified)
- `functions/analytics/[[path]].ts` — the Pages function claiming `/analytics/*`
- `functions/analytics/_lib/analytics.ts` — Mira's collector + read endpoints
- `schema-analytics.sql` — the D1 schema (repo root)
- `wrangler.toml` — `ANALYTICS_DB` D1 binding added (placeholder id)

## STEP 1 — create the D1 database
```powershell
cd D:\CENTREFREE
npx wrangler d1 create flux-analytics
```
Paste the printed `database_id` into `wrangler.toml` → `[[d1_databases]]` → replace `PASTE_D1_DATABASE_ID_HERE`.

## STEP 2 — load the schema
```powershell
cd D:\CENTREFREE
npx wrangler d1 execute flux-analytics --file=.\schema-analytics.sql --remote
```

## STEP 3 — bind D1 to the Pages project (belt + braces)
The toml binding above may not be picked up by Pages. If Step 6 shows a D1 error, add it in the dashboard:
**Cloudflare → Pages → centrefree → Settings → Functions → D1 database bindings →** Variable `ANALYTICS_DB` → database `flux-analytics`.

## STEP 4 — set the platform secrets (PAGES syntax — note `pages secret`)
```powershell
cd D:\CENTREFREE
# Meta first — one token unlocks FB Page + IG Business:
npx wrangler pages secret put META_TOKEN     --project-name=centrefree
npx wrangler pages secret put FB_PAGE_ID     --project-name=centrefree
npx wrangler pages secret put IG_USER_ID     --project-name=centrefree
# YouTube:
npx wrangler pages secret put YT_API_KEY     --project-name=centrefree
npx wrangler pages secret put YT_CHANNEL_ID  --project-name=centrefree
# TikTok — only after the developer app is approved:
# npx wrangler pages secret put TIKTOK_TOKEN       --project-name=centrefree
# npx wrangler pages secret put TIKTOK_BUSINESS_ID --project-name=centrefree
# Guards the manual collect trigger:
npx wrangler pages secret put ANALYTICS_ADMIN_KEY --project-name=centrefree
```
A missing token = that platform is skipped, not failed — so deploy now, add tokens as they land.

## STEP 5 — deploy (PAGES command)
```powershell
cd D:\CENTREFREE
npx wrangler@latest pages deploy . --project-name=centrefree --branch=main
```

## STEP 6 — prove it live (in a browser, logged in so you pass the site door)
Open on your CENTREFREE URL (centrefree.pages.dev or your custom domain):
```
https://<your-centrefree-domain>/analytics/freshness
```
- ✅ JSON — even empty `[]` or rows with zero snapshots = route live + D1 reachable (zero snapshots is expected until Step 7).
- ❌ the login gate / 401 = you're not passing the door; open it in the browser where you're already signed in.
- ❌ 404 "analytics route not found" = function didn't deploy — re-check Step 5 ran from `D:\CENTREFREE`.
- ❌ 500 mentioning `ANALYTICS_DB` = do Step 3 (dashboard binding).

## ⚠️ THE DOOR — one decision that's yours (auth = your hand, I won't touch it)
`/analytics/*` sits behind the CENTREFREE login gate (`_middleware.js`). So:
- **Dashboard reads** in your browser: fine, you're already through the door.
- **The automated 15-min collector** must pass TWO gates — the site door (`X-Fam-Key: seat:key`) AND the module's `X-Admin-Key` (= `ANALYTICS_ADMIN_KEY`). Pages has no built-in cron, so this is driven by a scheduled task hitting `POST /analytics/collect` with both headers. Say the word and I'll draft that scheduled-task config for your approval (scheduler is your hand, so I only stage it).

## STEP 7 — seed the accounts (after the intake sheet is filled)
Fill the yellow columns in `FLUX-ACCOUNT-INVENTORY-INTAKE.xlsx`, hand it back, and I'll generate `seed-accounts.sql`:
```powershell
npx wrangler d1 execute flux-analytics --file=.\seed-accounts.sql --remote
```
Until then the function runs but has no accounts to read — correct, not broken.

---
*Provider Law + red line intact: D1 create, secrets, the door, and deploy are your hand at the NUC. — Phoenix*
