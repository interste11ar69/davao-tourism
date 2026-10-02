# Delivery audit

Status: Local review build updated 2026-10-02. The changes are not pushed to GitHub or deployed to Vercel. Public release is blocked until reuse rights for the business photos are cleared.

## Product checks

- The guide has 26 Davao City places. The 13 requested businesses appear under Eat or Coffee, with current branch details, concise visitor descriptions, Google Maps searches, and source records.
- The older Daily Dose Juna listing was excluded because it is marked closed. Daily Dose points to the current Maa Coffee Bar listing. Robata's old G Center location at Azuela Cove is no longer selected; the listing points to The Compound after a September 2026 local report said the branch opened there. The exact Robata unit and any future Azuela High Street location still need confirmation.
- Marina Tuna, Bistro Rosario, Purge Coffee Roaster, and Green Coffee Bajada now have photos of their own premises. Across the 17 restaurant and cafe cards, 15 photos show the premises and Robata and Daily Dose use their own menu photos with visible captions. No unrelated street, city, or other-business food photo is used on those cards.
- All 27 optimized WebP files load and are below 500 KB. Ten images retain Creative Commons licenses. The 17 business photos are credited, but their source pages do not state reuse terms. Attribution does not grant permission; replace them with licensed photos or obtain permission before public release.
- All five taxi-passenger shortcuts return at least two places. Eat shows nine restaurants; Coffee shows eight cafes. The existing detail, search, filter, and Maps interactions remain.
- The visitor page has no QR generator or card download. The private card artwork remains in the ignored owner folder, and the site footer credits Lance C. Lastimosa.

## Verification

- `python3 scripts/fetch-images.py --refresh`: completed for all 27 WebP assets; all are below 500 KB and were visually reviewed.
- `npm run verify -- --final`: passed for 26 city places, 17 restaurant/cafe cards, sources, images, photo credits, Maps URLs, no runtime QR, and no public card files. The verifier reports the two menu-item photos and unconfirmed photo reuse rights.
- Playwright with Chrome at 390 and 1440 px: all 26 card images loaded with alt text, no horizontal overflow or page errors, Eat and Coffee filters returned nine and eight places, Robata details showed The Compound, Google Maps actions were present, Escape closed the dialog, and photo credits disclosed reuse status.
- `node --check` passed for the edited JavaScript files; `python3 -m py_compile scripts/fetch-images.py` and `git diff --check` passed.

## Owner handoff

Do not push this local review build yet. Obtain permission or licensed replacements for all 17 business photos first. Then confirm Robata's exact unit in The Compound, replace the two menu photos with premises photos if the owner can provide them, run the final verifier and browser checks again, and publish from VS Code. The physical card still needs a print proof and scans on two phones before bulk printing.
