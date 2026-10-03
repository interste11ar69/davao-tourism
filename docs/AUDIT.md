# Delivery audit

Status: Local review build extended 2026-10-03. This hotel/image extension remains uncommitted and unpushed. Public release is blocked until reuse rights for the business and added hotel photos are cleared.

## Product checks

- The guide has 35 Davao City places. The 13 requested businesses appear under Eat or Coffee. All nine requested stays were added alongside the two existing hotels, for 11 Stay records, with address evidence, visitor descriptions, Maps searches, and source records checked 2026-10-03. Dusit uses the Davao City Residence property; Aeon uses the active Aeon Suites Staycation operator; Inspiria explicitly describes separately managed condo units.
- The older Daily Dose Juna listing was excluded because it is marked closed. Daily Dose points to the current Maa Coffee Bar listing. Robata's old G Center location at Azuela Cove is no longer selected; the listing points to The Compound after a September 2026 local report said the branch opened there. The exact Robata unit and any future Azuela High Street location still need confirmation.
- Marina Tuna, Bistro Rosario, Purge Coffee Roaster, and Green Coffee Bajada now have photos of their own premises. Across the 17 restaurant and cafe cards, 15 photos show the premises and Robata and Daily Dose use their own menu photos with visible captions. No unrelated street, city, or other-business food photo is used on those cards.
- All 36 optimized WebP files are below 500 KB. Nine retain Creative Commons licenses; 26 business/hotel photos are credited with unconfirmed reuse permission. The Eagle Center photo now shows the supplied entrance arch; the old eagle image attribution was removed. The remote acquisition script preserves the supplied replacement, including in refresh mode. Hotel photos show the actual building, lobby, or suite. Inspiria architectural renderings were rejected in favor of a real building photo. The Apo View photo's pool foreground is not a claim of current pool availability.
- All five taxi-passenger shortcuts return at least two places. Eat shows nine restaurants; Coffee shows eight cafes. The existing detail, search, filter, and Maps interactions remain.
- The visitor page has no QR generator or card download. The private card artwork remains in the ignored owner folder, and the site footer credits Lance C. Lastimosa.

## Verification

- Nine hotel photos were downloaded from registered sources, decoded, optimized, and visually reviewed; the supplied Eagle Center photo was converted to WebP. `python3 scripts/fetch-images.py` passed with all assets present and the supplied file preserved. Python script compilation and JavaScript syntax checks passed.
- `npm run verify -- --final`: passed for 35 city places, 11 Stay recommendations, 17 restaurant/cafe cards, sources, images, photo credits, Maps URLs, no runtime QR, and no public card files. The verifier also checks the requested hotel IDs and Inspiria's condo guidance.
- Playwright with Chrome at 390 and 1440 px passed: all 35 card images loaded with alt text, Stay returned 11 cards, searches for Dusit/Inspiria/Aeon returned the matching hotel, details exposed both Maps actions, and Escape closed the dialog. The expanded photo credits correctly show the supplied Eagle Center attribution without a fabricated link. No horizontal overflow or page errors occurred. Rendered hotel and Eagle Center cards were visually inspected.
- `git diff --check` passed. The extension is saved as local working-tree changes; no commit, push, or deployment was performed during this task.

## Owner handoff

Obtain permission or licensed replacements for the 26 third-party business/hotel photos before release. Then confirm Robata's exact unit in The Compound, replace the two menu photos with premises photos if the owner can provide them, run the final verifier and browser checks again, and publish from VS Code. The physical card still needs a print proof and scans on two phones before bulk printing.
