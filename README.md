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

Every one of the 35 place cards has a local WebP image. The 17 restaurant and cafe cards use photos associated with their own business. Fifteen show the named premises; Robata and Daily Dose use menu-item photos with captions that identify the business. The unrelated seafood and street scenes previously shown on Marina Tuna, Bistro Rosario, Purge Coffee, and Green Coffee were replaced with photos of those venues. All 11 Stay cards show the actual property, including an Aeon Suites room and the Blue Lotus and Pinnacle lobbies. Inspiria is described as a condo stay with separately managed units.

Nine retained images use Creative Commons licenses. The 17 restaurant/cafe and nine added hotel photos come from sources that do not state reuse terms. `docs/SOURCES.md` and the footer record the source and permission status. Credit does not grant permission, so this local review build must not be pushed or deployed until the owner obtains permission or replaces those files with licensed photos. The Philippine Eagle Center entrance photo was supplied by the owner with an instruction to use it; no photographer or external license was supplied. Robata's photo shows dishes from the business, not the newly selected branch interior; its listing points to The Compound while that branch's exact unit still needs confirmation.

To restore missing source images, install Pillow and run `python3 scripts/fetch-images.py`. Add `--refresh` to download and rebuild existing remote images. The script preserves the owner-supplied Eagle Center image. If it is missing, restore its WebP from Git or optimize the original supplied attachment before running the script. Review each source's current reuse terms and photo subject before release.

## Deployment

The configured GitHub origin is connected to the existing Vercel project. Production address: `https://davao-tourism.vercel.app/`. Use the production domain for printed QR codes; individual preview deployment addresses are not card destinations. Confirm the public page after each production update.

These changes remain local and unpushed, as requested. After image reuse rights and the Robata branch pin are resolved, push the local `main` branch from VS Code, wait for the Vercel production deployment, and confirm the visitor guide and Lance C. Lastimosa credit. Confirm that `/card` and the old `/assets/card/` paths return 404. The card files are ignored by Git and Vercel, so send them to the owner privately if needed on another computer. Older card SVGs remain in Git history if the repository is public. Do not order physical cards until the live check and a two-phone print proof pass.
