# VERDICT — Campaign Docs hub + 5 brand calendars deploy spec
**Reviewer:** Mira, seat 04 (Dawn Runner · Reviewer) · **Date:** 2026-07-16 · **Target:** Niamh's DEPLOY SPEC, same date
**Verdict: CHANGES** — one real gap, everything else clean. Bounced, not fired.

## Checklist results, item by item

1. **5 calendars open, relative doc/story links resolve** — **PASS.** All 8 files exist on disk, verified by path. Extracted and resolved every relative `href` in `INDEX.html` + all 5 calendar files programmatically (not eyeballed): zero dead links. ACO's W4–W8 story `.md` files all resolve; Germol's Story 001 resolves; IBUCAP's storyboard-stack + beat-board resolve; Shaltoux's campaign-plan brief resolves; Shalartem's brand doc + FY26-27 strategy resolve.

2. **Hub INDEX.html — calendars + brand-directory + agents-hours links resolve** — **CHANGES.** The 5 "Open calendar" links resolve (confirmed above). **`BRAND-DIRECTORY.md` and `AGENTS-ACTIVE-HOURS.md` are not linked anywhere in `INDEX.html`** — checked twice (filename-fragment grep, then a full extraction of every `href` in the file): zero matches for either. Both files exist on disk (`agency/niamh/campaign-docs/BRAND-DIRECTORY.md`, 2,780B; `AGENTS-ACTIVE-HOURS.md`, 2,660B) — they're just orphaned from the hub that's supposed to surface them. **Fix needed:** add two links from `INDEX.html` to these files before fire. (One `href="#"` in the file is a pre-existing, intentionally-disabled "Calendar held →" row for a 6th brand awaiting Shane's ruling — not this bug, confirmed by its `onclick="return false"` + `opacity:.55` styling; correctly out of scope.)

3. **No secrets / no Higgsfield presigned CDN URLs** — **PASS.** Swept all 8 files for credential patterns (api_key, token, secret, password, Bearer, sk-, AKIA, presign, R2 storage URLs) and for any non-Google external URL. One string match on "secret" — it's the campaign post title *"What's the Secret?"* in `ACO-CALENDAR.html:94*, not a credential. Every external URL across all 8 files is either `fonts.googleapis.com`/`fonts.gstatic.com` or `docs.google.com/spreadsheets/...` — nothing else reaches out anywhere.

4. **Judgement call — Google Sheet source links, serve or strip?** — **Acceptable to serve, PASS, reasoned not rubber-stamped.** These are edit-permissioned working sheets, not secrets, and `centrefree.com` already sits behind the proven OAuth door (fam-only, per the standing 07-07/07-08 door work) — so "serve on the estate" here means serve to authenticated fam, not the open internet. No stripping needed on that basis. Flagging the reasoning so it's a recorded call, not a silent pass.

5. **Menu diff — single line, nothing removed/reordered, syntax check** — **PASS, verified against the live file, not the spec's claim.** Read `estate-menu.js` lines 88–99 host-side: current children are exactly Agents/Reception/Proof/Agency Room/Design System, matching the spec's "before" state. Applied the proposed insertion (`Campaign Docs` between Proof and Agency Room) to a **scratch copy only** (`/tmp`, not the live file), diffed it — exactly one line added, nothing else touched — then ran `node --check` on the result: **syntax GREEN.** Live `estate-menu.js` was not modified by this review.

## Not re-litigated
The three held-back items (Agency Room's dangling `CENTRE_FREE_1.1` links, FluxPlanner Pro, the pre-existing `/agency-room.html`) are correctly scoped out in the spec — agreed, not re-checked further; out of this fire by the spec's own honest accounting.

## What happens next
Per the spec's own discipline ("inspect and route the fire, or bounce it back with changes") — **this bounces back to Niamh** for one fix: link `BRAND-DIRECTORY.md` and `AGENTS-ACTIVE-HOURS.md` from `INDEX.html`. Once that's in, re-run item 2 and this closes to a clean PASS — nothing else in the package needs to move.

— Mira, seat 04, Dawn Runner · four clean, one real gap, named with a file and nothing else guessed at

---

## RE-INSPECTION — 2026-07-16, resubmission
**Verdict: still CHANGES.** Two items closed, the one real gap from the first pass is unchanged.

**Menu diff — CLOSED, PASS.** Re-read `estate-menu.js` host-side: `Campaign Docs` is live on disk at line 94, exactly the proposed insertion, nothing else moved.

**`node --check` "Unexpected end of input" — CLOSED, Niamh's claim CONFIRMED true, not just trusted.** This seat's own bash mount served a persistently stale, truncated view of `estate-menu.js` (253 lines, no closing `})();`) across multiple separate checks — the same mount-lie class logged fleet-wide all week, this time caught in the act on a live syntax check rather than a Commons tail-read. Host-truth `Read` shows the real file at 255 lines, closing correctly. Wrote the true content to a fresh scratch copy (immune to the stale cache since it's a new path) and ran `node --check` on that: **SYNTAX GREEN.** Niamh's read was right; my first independent check was fooled by the bug she was flagging as a possibility. Correcting the record, not just deferring to her.

**BRAND-DIRECTORY.md / AGENTS-ACTIVE-HOURS.md links — UNCHANGED, still the one open gap.** Re-checked `INDEX.html`: still zero references to either file. This is the same finding as the first pass, not yet addressed in this resubmission. **This is the only thing still blocking fire.**

— Mira, seat 04, Dawn Runner · two closed clean, the same one gap open — still a bounce, not a fire

---

## FINAL CLOSE — 2026-07-16, third pass
**Verdict: PASS.** The gap is closed, verified on disk, not taken on the report's word.

- `INDEX.html:131` links `./BRAND-DIRECTORY.md`, `INDEX.html:137` links `./AGENTS-ACTIVE-HOURS.md` — both confirmed present on disk (2,780B / 2,660B, unchanged byte counts from the very first check, meaning the reference files themselves weren't touched, only the hub's links to them).
- Full link-resolution sweep of `INDEX.html` re-run end to end: **zero dead links.**
- The "menu held" note now correctly reads "Estate menu — queued" (`INDEX.html:143`), matching the applied `estate-menu.js` state.
- Spot-checked the other 6 package files by byte count against the first pass: all identical — confirms nothing else moved.

Package is clean end to end: 8 files, 1 menu line, zero dead links, no secrets, menu diff verified live and syntax-clean. **Ready for fire, Shane's hand.**

— Mira, seat 04, Dawn Runner · verified, not trusted — and it held
