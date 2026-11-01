# EP03 Weekly Pack — "It's Reading Your Thumb"

**Episode:** EP03 · **Character:** @Abbii (lock: trained token, per ABBII preset) · **Date:** 2026-07-17
**Format:** 9:16 vertical · 5 scenes · 7 image gens + 5 motion · draft tier (2K images, Seedance fast/720p)
**Wardrobe mode:** Social Confidence (EP02 mode) — midnight-blue velvet cropped couture blazer, sharp sculptural shoulders, black satin high-neck camisole, high-waisted black wide-leg trousers, slim black patent ankle boots, silver ear cuffs, thin silver chain belt.
**Lane:** FUNWORK / abbii — studio-prompt-engine. Not client, not website.

---

## Niamh's review flags — resolve before any render

1. **`generate_audio` → set FALSE on all five motion prompts.** VO is post (ElevenLabs) and every
   shot is "no lip-sync." Seedance-generated audio is garbage you'd strip anyway — it wastes credit
   on every clip. Estate practice: strip always, score/VO laid in post. (Confirm studio rule if it
   genuinely differs; default is false.)
2. **Scene 03 carries a whole week on one tap + the edit.** Consider promoting Scene 03 to a
   start/end pair (tap → feed visibly warming) so "one week" reads visually, not only in VO.
   Costs one extra generation; buys the premise.
3. **Confirm @Abbii trained token is live on the current account** before firing. The entire pack
   assumes it. Non-negotiable.

---

## Approved beat board

| Scene | Beat | VO line |
| :-: | :-- | :-- |
| 01 | Mid-doomscroll, blue glow, blank face | "Everyone thinks the algorithm decides…" |
| 02 | Thumb freezes — deliberate pause | "You do — every pause… is a vote" |
| 03 | Intentional tap, autoplay dismissed | "One week voting on purpose" |
| 04 | Feed shifts cold → warm, she smiles | "By day three… by day seven it got good" |
| 05 | CTA, warm face-to-camera, phone lowered | "It's reading your thumb" |

---

## EP03_SCENE_01_SHOT_A (single still + motion)

**Image prompt:** A cinematic photograph of @Abbii slumped low on a modern charcoal sofa in a dim Tokyo apartment at night, her face lit only by cold blue phone glow. She wears her midnight-blue velvet cropped couture blazer with sharp sculptural shoulders, black satin high-neck camisole, high-waisted black wide-leg trousers, slim black patent ankle boots, silver ear cuffs, and thin silver chain belt. Preserve @Abbii's trained face, hairstyle, body line, and screen presence — her established short stylish close-cropped pixie-cut silhouette visible. Background: darkened apartment, city bokeh through a rain-flecked window, no other people. Her expression is blank, eyes fixed downward at the phone, posture collapsed but still unmistakably her. The phone screen shows only a soft abstract scrolling glow, no readable text. Lighting: single cold blue key from the screen, faint warm rim from distant city light. Canon R5, 50mm, f/1.4, soft edge diffusion, fine skin texture. No readable text, no captions, no speech bubbles, no celebrity likeness.
**Fields:** aspect_ratio 9:16 · resolution 2K · num_images 1 · seed: reuse EP02 seed

**Motion prompt (EP03_SCENE_01_MOTION):** Camera slow push-in. @Abbii's thumb flicks upward in a steady scrolling rhythm, her eyes unblinking, the blue screen glow flickering softly across her face. Rain streaks slide down the window behind her. No lip-sync, no direct talking to camera.
**Fields:** image_url: SCENE_01_SHOT_A · resolution 720p · duration auto · generate_audio **false** *(was true — see flag 1)*

---

## EP03_SCENE_02 (start/end pair + motion)

**SHOT_A (start):** A cinematic photograph of @Abbii on the same charcoal sofa in the dim Tokyo apartment at night, now sitting slightly more upright, thumb mid-swipe above the phone. She wears her midnight-blue velvet cropped couture blazer with sharp sculptural shoulders, black satin high-neck camisole, high-waisted black wide-leg trousers, slim black patent ankle boots, silver ear cuffs, and thin silver chain belt. Preserve @Abbii's trained face, hairstyle, body line, and screen presence. Background: darkened apartment, city bokeh, no other people. Phone screen: soft abstract glow, no readable text. Lighting: cold blue screen key beginning to steady. Canon R5, 50mm, f/1.4, fine skin texture. No readable text, no captions, no speech bubbles, no celebrity likeness.
**Fields:** aspect_ratio 9:16 · resolution 2K · seed: reuse EP02 seed

**SHOT_B (end):** Same scene, same full outfit restated: midnight-blue velvet cropped couture blazer with sharp sculptural shoulders, black satin high-neck camisole, high-waisted black wide-leg trousers, slim black patent ankle boots, silver ear cuffs, thin silver chain belt. Preserve @Abbii's trained face, hairstyle, body line, and screen presence. Her thumb is frozen, hovering a centimetre above the screen; her eyes have narrowed with sharp intent, chin lifted slightly — the moment of realisation. Phone screen: soft abstract glow, no readable text. Lighting unchanged. Canon R5, 50mm, f/1.4. No readable text, no captions, no speech bubbles, no celebrity likeness.
**Fields:** aspect_ratio 9:16 · resolution 2K · seed: reuse EP02 seed

**Motion prompt (EP03_SCENE_02_MOTION):** Camera holds steady. @Abbii's scrolling thumb slows, then stops and hovers just above the screen. Her eyes narrow, her chin lifts slightly. The screen glow steadies from flicker to constant. No lip-sync, no direct talking to camera.
**Fields:** image_url: SHOT_A · end_image_url: SHOT_B · resolution 720p · duration auto · generate_audio **false**

---

## EP03_SCENE_03_SHOT_A (single still + motion)

**Image prompt:** A cinematic photograph of @Abbii seated upright at a small black lacquered table in the Tokyo apartment, morning light now entering, phone lying flat on the table as she taps it once with one deliberate finger. She wears her midnight-blue velvet cropped couture blazer with sharp sculptural shoulders, black satin high-neck camisole, high-waisted black wide-leg trousers, slim black patent ankle boots, silver ear cuffs, and thin silver chain belt. Preserve @Abbii's trained face, hairstyle, body line, and screen presence. Her posture is precise and self-possessed, a faint wry half-smile of control. Background: clean apartment, espresso cup, no other people. Phone screen: soft abstract interface glow, no readable text. Lighting: cool daylight key, warm interior fill. Canon R5, 50mm, f/1.4, fine skin texture. No readable text, no captions, no speech bubbles, no celebrity likeness.
**Fields:** aspect_ratio 9:16 · resolution 2K · seed: reuse EP02 seed

**Motion prompt (EP03_SCENE_03_MOTION):** Camera gentle track left. @Abbii taps the phone once, withdraws her hand, and leans back with deliberate composure. Steam rises from the espresso cup. No lip-sync, no direct talking to camera.
**Fields:** image_url: SCENE_03_SHOT_A · resolution 720p · duration auto · generate_audio **false**
*(See flag 2: consider start/end pair to sell the week.)*

---

## EP03_SCENE_04 (start/end pair + motion)

**SHOT_A (start):** A cinematic photograph of @Abbii in the Tokyo apartment at dusk, holding her phone at chest height, its glow cold blue on her face, her expression flat and evaluating. Full outfit restated: midnight-blue velvet cropped couture blazer with sharp sculptural shoulders, black satin high-neck camisole, high-waisted black wide-leg trousers, slim black patent ankle boots, silver ear cuffs, thin silver chain belt. Preserve @Abbii's trained face, hairstyle, body line, and screen presence. Background: apartment at blue hour, city lights waking. Phone screen: cold abstract glow, no readable text. Canon R5, 50mm, f/1.4. No readable text, no captions, no speech bubbles, no celebrity likeness.
**Fields:** aspect_ratio 9:16 · resolution 2K · seed: reuse EP02 seed

**SHOT_B (end):** Same framing, same full outfit restated: midnight-blue velvet cropped couture blazer with sharp sculptural shoulders, black satin high-neck camisole, high-waisted black wide-leg trousers, slim black patent ankle boots, silver ear cuffs, thin silver chain belt. Preserve @Abbii's trained face, hairstyle, body line, and screen presence. The phone glow has shifted to warm amber, and her expression has softened into a genuine knowing smile. Background unchanged, city lights now fully on. Phone screen: warm abstract glow, no readable text. Canon R5, 50mm, f/1.4. No readable text, no captions, no speech bubbles, no celebrity likeness.
**Fields:** aspect_ratio 9:16 · resolution 2K · seed: reuse EP02 seed

**Motion prompt (EP03_SCENE_04_MOTION):** Camera holds steady. The phone glow on @Abbii's face shifts gradually from cold blue to warm amber. Her flat expression softens into a slow, knowing smile; her shoulders ease down. City lights brighten in the background. No lip-sync, no direct talking to camera.
**Fields:** image_url: SHOT_A · end_image_url: SHOT_B · resolution 720p · duration auto · generate_audio **false**

---

## EP03_SCENE_05_SHOT_A (single still + motion — CTA)

**Image prompt:** A cinematic photograph of @Abbii standing in the warm-lit Tokyo apartment, facing camera warmly, phone lowered in one relaxed hand at her side. She wears her midnight-blue velvet cropped couture blazer with sharp sculptural shoulders, black satin high-neck camisole, high-waisted black wide-leg trousers, slim black patent ankle boots, silver ear cuffs, and thin silver chain belt. Preserve @Abbii's trained face, hairstyle, body line, and screen presence. Her expression is warm, sharp, lightly ironic — an invitation, not a lecture. Background: warm apartment lamps, city glitter through the window, no other people. Lighting: warm key, soft practical fills. Canon R5, 50mm, f/1.4, fine skin texture. No readable text, no captions, no speech bubbles, no celebrity likeness.
**Fields:** aspect_ratio 9:16 · resolution 2K · seed: reuse EP02 seed

**Motion prompt (EP03_SCENE_05_MOTION):** Camera slow gentle push-in. @Abbii lowers the phone fully, tilts her head slightly, and holds a warm, lightly ironic gaze toward camera. One eyebrow lifts a fraction. No lip-sync, no direct talking to camera.
**Fields:** image_url: SCENE_05_SHOT_A · resolution 720p · duration auto · generate_audio **false**

---

## Credit estimate

| Tier | Images | Video | Notes |
| :-- | :-- | :-- | :-- |
| **Draft (this pack)** | 7 × 2K | 5 × fast/720p | Approve drafts before any final renders |
| Final (on "final render" only) | approved stills re-rendered at 4K (~2× image cost) | 5 × standard/1080p | Only for shipped scenes |

## Open questions / pending approvals

- Confirm @Abbii trained token is live on the current account (flag 3).
- Scene 03 "week" carried by edit, not generation — accept as one shot, or promote to start/end pair (flag 2)?
- Gate 3 complete. No generation calls made — prompts only, per skill rules.
- **Niamh amendment:** all `generate_audio` set to **false** (flag 1); original pack had them true.
