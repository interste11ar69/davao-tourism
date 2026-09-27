# Madayaw Davao

A phone-first Davao City visitor guide created by Lance C. Lastimosa. It is designed for the questions a taxi passenger might ask: where to go, where to eat, where to get coffee, and where to stay. The site is an independent student project, not a government tourism service.

## Run locally

Requirements: Python 3 for the local static server, Node.js for checks. The server listens only on this computer.

```sh
npm run dev
```

Open the local address printed by the server. Run the checks with:

```sh
npm run verify
npm run verify -- --final
```

The site uses static HTML, CSS, JavaScript modules, and local WebP photos. Vercel serves it without a build step.

## Visitor guide

The first screen asks five common visitor questions. Each shortcut filters a small, sourced city-only directory. Every place has a Google Maps search and directions handoff, a district, and a reason to consider it. Upland outings are labeled so they are not confused with quick downtown stops. Hours, prices, and availability are intentionally omitted; visitors should check them before leaving.

The place data is in `src/data/locations.js`; the Kadayawan introduction is in `src/data/stories.js`. Sources and photo credits are recorded in `docs/SOURCES.md`. Check facts again before changing recommendations. A latitude/longitude bounding box does not prove that an address is inside Davao City; review the address against the source and Maps.

## Physical card

The card is an owner print asset in the local, Git-ignored `owner-card/` folder. Open `owner-card/preview.html` on this computer. Use `card-front.png` and `card-back.png` there for printing; each is 1050 x 600 pixels at 300 ppi, or 3.5 by 2 inches. The SVG files are editable masters. The static QR encodes `https://davao-tourism.vercel.app/`. The public guide contains no card downloads or QR generator.

Print at 3.5 by 2 inches and 100% scale. Ask the print shop about bleed, trim, and safe area. Make one physical proof on the chosen stock and scan it with two different phones before ordering a batch. Keep the QR's white margin clear and use the printed URL as a fallback.

If the production address ever changes, create a new static QR and replace both the QR-only asset and the embedded QR in the back artwork before printing new cards. Already printed cards will keep pointing at the old address. The local `owner-card/render-png.py` recreates the PNG faces from SVG masters using Chrome and ImageMagick.

## Images and rights

Fourteen resized Commons images are used, with creator and license attribution in the site footer and `docs/SOURCES.md`. They retain their respective Creative Commons licenses. The project's package metadata does not grant rights to relicense those photos. Every place card has a photo. Both Stay cards show the named hotel. Four restaurant and cafe cards use distinct Davao context photos, labeled with the scene they show.

To restore missing source images, install Pillow and run `python3 scripts/fetch-images.py`. Add `--refresh` to download and rebuild existing images. Wikimedia Commons may rate limit bulk refreshes; wait before retrying. Review license and subject before adding any new photograph.

## Deployment

The configured GitHub origin is connected to the existing Vercel project. Production address: `https://davao-tourism.vercel.app/`. Use the production domain for printed QR codes; individual preview deployment addresses are not card destinations. Confirm the public page after each production update.

To publish later from VS Code, push the local `main` branch to `origin`. Then wait for the Vercel production deployment and confirm that the visitor guide and Lance C. Lastimosa credit are visible. Confirm that `/card` and the old `/assets/card/` paths return 404. The card files are ignored by Git and Vercel, so send them to the owner privately if they are needed on another computer. Older card SVGs remain in Git history if the repository is public. Do not order physical cards until the live check and a two-phone print proof pass.
