# Delivery audit

Status: Local correction verified on 2026-09-27. GitHub push and Vercel publication remain with the project owner.

## Product checks

- The directory has 13 published Davao City places across Explore, Eat, Coffee, and Stay. Every card has a loadable photo. Six business cards and the Kadayawan Village card have visible captions that distinguish contextual scenes from the named venue.
- Fourteen resized Commons photos, including the hero, have creator, source, and license records in `docs/SOURCES.md` and credits in the site footer. Each WebP is under 500 KB. The image directory is about 1.7 MB; below-fold cards lazy load.
- All five taxi-passenger shortcuts return at least two places. Search, category filters, detail dialogs, and Maps handoffs remain in place.
- The visitor header and footer contain no card link. The old public `card.html`, `assets/card/`, and card stylesheet were removed. `.gitignore` and `.vercelignore` exclude the local `owner-card/` folder.
- The owner folder contains front and back SVG masters, 1050 x 600 pixel PNG faces at 300 ppi, a separate QR, a local preview, and print instructions. The rendered back PNG and QR PNG both decode to the production root.
- The site footer and card artwork credit Lance C. Lastimosa.

## Verification

- `npm run verify -- --final`: passed for all 13 places, sources, images, Maps URLs, no runtime QR, and no public card files.
- Playwright with Chrome at 320, 390, 768, and 1440 px: all 13 card images decoded; seven context captions rendered; no JavaScript errors, horizontal overflow, or public card links.
- PNG dimensions and metadata: both faces are 1050 x 600 pixels at 300 ppi. Independent zxing-cpp decode of the rendered back PNG returned `https://davao-tourism.vercel.app/`.
- `git check-ignore`: private card files matched the `owner-card/` rule.

## Owner handoff

The current Vercel deployment will still show the earlier public card until the owner pushes this local commit and Vercel redeploys. After deployment, confirm `/card` and the old `/assets/card/` paths return 404. The private card files are local only and must be transferred privately if needed on another computer. Earlier committed SVG artwork can still be found in public Git history; the new PNG exports were never committed. A physical print proof and scans on two phones are required before bulk printing.
