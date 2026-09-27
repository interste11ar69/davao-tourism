# Madayaw Davao: Visitor guide architecture

Status: Approved for execution on 2026-09-27.

## Ownership and control flow

The physical card's QR opens the stable public production root. Vercel serves `index.html`; `src/app.js` mounts static data and components. Category, search, and selected-place state live in memory. Place actions open Google Maps. There is no backend, account, analytics, or persistent visitor data. Card production is separate: encode https://davao-tourism.vercel.app/ as a static QR during asset preparation, place it in print artwork, proof print, and scan.

- `src/data/locations.js`: curated city-only places and categories.
- `src/data/stories.js`: sourced Kadayawan and local context.
- `src/state/app-state.js`: category, search, selected place, and mobile navigation state.
- `src/utils/maps.js`: specific Google Maps search and directions URLs.
- `src/components/navbar.js`: phone navigation and categories.
- `src/components/hero.js`: Davao introduction and cultural story.
- `src/components/location-grid.js`: results and stable search input.
- `src/components/modal-detail.js`: accessible details and Maps exit.
- `src/components/map-explorer.js`: accurately labeled geographic view or place list.
- `src/app.js`: mounting and footer; no QR or card state.
- `card.html`, `src/styles/card.css`, `assets/card/**`: print artwork and instructions without runtime QR generation.
- `scripts/verify-system.js`: schema, city, media, source, and architecture checks.
- `scripts/fetch-images.py`: documented acquisition and optimization.

## Contracts

`Location = {id, name, category: 'spot'|'restaurant'|'cafe'|'hotel', district, address, city: 'Davao City', area: 'downtown'|'south'|'north'|'uplands', intents: string[], coordinates?, mapsQuery, placeId?, description, bestFor?, image?: {path, alt, depictsVenue, creditId}, sources: [{url, checkedAt, supports}], status}`. Only published records render. A coordinate alone does not identify a business.

`Story = {id, title, body, image?, sources:[{url,checkedAt,supports}], dated?}`. Current schedules need a current official source or are omitted.

`AppState = {activeCategory, activeIntent, searchQuery, selectedLocationId, mobileNavOpen}`. No QR, URL, or flip fields. Question-led shortcuts apply an intent filter and scroll to results.

`buildGoogleMapsUrl(location): string` and `buildGoogleDirectionsUrl(location): string` use documented Google Maps URL forms, with a verified Place ID when available. State changes preserve search focus and scroll position.

## Complete tracked file layout

```text
README.md                       Run, editorial maintenance, and card instructions
package.json                    Local commands and verification
vercel.json                     Static routing and headers
index.html                      Visitor guide shell and metadata
card.html                       Card preview, static QR, creator credit, and print instructions
docs/SPEC.md                    Outcomes and acceptance criteria
docs/ARCHITECTURE.md            Modules, contracts, and risks
docs/TASKS.md                   Ordered implementation matrix
docs/AUDIT.md                   Evidence-based final QA report
docs/SOURCES.md                 Place/story sources and image attributions
assets/images/**                Optimized, licensed guide images
assets/card/**                  Print artwork and static QR for confirmed production URL
scripts/fetch-images.py         Reproducible media workflow
scripts/verify-system.js        Automated checks
src/app.js                      Bootstrap and footer
src/data/locations.js           Published place records
src/data/stories.js             Cultural content
src/state/app-state.js          Interaction state
src/utils/maps.js               Maps links
src/components/navbar.js        Header and filters
src/components/hero.js          Intro and stories
src/components/location-grid.js Results and search
src/components/map-explorer.js   Geographic/list presentation
src/components/modal-detail.js  Accessible detail
src/styles/base.css             Tokens, type, focus, and reset
src/styles/portal.css           Hero, stories, results, and detail
src/styles/map.css              Geographic/list styles
src/styles/card.css             Print card styles
```

`src/components/business-card.js` and `src/utils/qr.js` are removed. Unsuitable media are removed, not retained to satisfy a count. The footer, card, README, and metadata credit Lance C. Lastimosa.

## Technology choices

Native HTML/CSS/ES modules retain the existing simple static deployment. Local JS records suit a small editorial directory. Google Maps URLs avoid API keys and hand off to phone navigation. SVG/CSS card artwork gives scalable print geometry without runtime QR code. Node checks plus browser inspection cover both data integrity and real interaction.

## Visual direction

Identity: a driver's compact Davao field guide, with real city photography rather than generic travel art. Palette: paper white #FFFFFF, deep rainforest #12382F, leaf #28644B, harvest gold #E8AF2A, near-black #15251E, muted stone #65746A. Type: Barlow Condensed for large destination headlines and system sans for functional copy. Layout: a single strong skyline hero, a question-led strip immediately after it, open editorial place rows with varied image/text composition, and one Kadayawan feature. The heavy type and large photography carry energy; cards and controls remain quiet. Do not imitate tribal patterns.

## Risks and mitigations

Venue facts change: keep source and checked date, omit unsourced live claims. Images can misrepresent venues or violate licenses: keep attribution and replace or label context images. Cultural copy can oversimplify: use city sources and respectful language, avoid invented motifs. QR can encode a wrong or private URL: wait for the exact production address and scan a proof. Images can slow phones: compress, size responsively, lazy load, measure transfer. Search rerenders and HTML interpolation can break typing or inject markup: keep input stable and escape user strings. Maps can point to the wrong business: verify Place ID or name and address manually. Remove unsupported official-status language.

## Coverage

Journey 1 maps to card artwork, `index.html`, hero, and navbar. Journey 2 maps to place data, grid, detail, Maps, and state. Journey 3 maps to stories, hero, and sources. Journey 4 maps to `card.html`, card assets/styles, README, and proof verification. Journey 5 maps to footer, card, README, and package metadata. Journey 6 maps to intent-tagged places, hero shortcuts, grid filtering, and Maps. Every goal has a component and task.
