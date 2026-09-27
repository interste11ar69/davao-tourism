# Madayaw Davao: Task matrix

Status: Approved for execution on 2026-09-27. Execute one task at a time after the checkpoint, with a pass/fail verification and checkpoint report.

| ID | Depends on | Files and work | Binary DoD | Verification |
|---|---|---|---|---|
| T01 | None | Audit venues, claims, media; create `docs/SOURCES.md` | Every retained fact has source/date and every retained image has creator, source, license, or is removed | Manual source comparison; `test -f docs/SOURCES.md` |
| T02 | T01 | Revise `src/data/locations.js`; add `src/data/stories.js` | Published places are in Davao City; Pearl Farm excluded; Kadayawan text is sourced | `npm run verify` and manual source/Maps review |
| T03 | T01 | Optimize/replace `assets/images/**`; revise `scripts/fetch-images.py` | Images depict named subject or are labeled context; rights recorded; budget met | Image metadata/size audit and `npm run verify` |
| T03A | T02,T03 | Add taxi-passenger recommendations in `src/data/locations.js` and `docs/SOURCES.md` | First-time, family, tonight, food, and stay each return at least two relevant places; upland trips are labeled | `npm run verify` and manual question-to-place review |
| T04 | T02 | Update `src/utils/maps.js`, `scripts/verify-system.js` | Maps identify places; verifier rejects missing sources, assets, and Samal; its final mode rejects runtime QR code after T09 | `npm run verify`; manual Maps opens; `npm run verify -- --final` after T09 |
| T05 | T02 | Simplify `src/state/app-state.js`; remove `src/utils/qr.js`, `src/components/business-card.js` | No QR generation, URL editor, or flip state remains | `rg 'generateQRCode|targetVercelUrl|renderBusinessCard' src` returns no matches |
| T06 | T02,T03,T03A | Set visual direction; rebuild `src/styles/base.css`, `src/styles/portal.css`, `src/components/hero.js` | Distinct Davao hero/story and question-led shortcuts, readable contrast, responsive layout | Browser checks at 320/390/768/1440 px; contrast check |
| T07 | T02,T04,T05,T06 | Rework `src/components/navbar.js`, `src/components/location-grid.js`, `src/components/modal-detail.js`; minimally wire `src/app.js` for browser verification | Category, search, detail, keyboard, and Maps actions work; typing keeps focus | Manual keyboard/phone flow and `npm run verify` |
| T08 | T02,T04,T06 | Correct `src/components/map-explorer.js`, `src/styles/map.css`; mount from `src/app.js` | Geography labeled honestly; every place has Maps exit | Manual mobile and desktop geographic review |
| T09 | T05,T06,T07,T08 | Rewire `index.html`, `src/app.js`, `vercel.json` | No site QR UI, working links, accurate metadata/routing, visible Lance C. Lastimosa footer credit | Local browser smoke check; `npm run verify` |
| T10 | T06,T09 | Redesign `card.html`, `src/styles/card.css`, `assets/card/**` | Distinct front/back art, static QR for confirmed URL, URL fallback and creator credit, no runtime QR generator | Print CSS at actual size; independent QR decoder on rendered card; physical two-phone proof required before bulk printing |
| T11 | T01-T10 | Update `README.md`, `docs/AUDIT.md`, `package.json` as needed | Instructions, audit, and author metadata credit Lance C. Lastimosa and reflect measured implementation | Follow README locally; `npm run verify` |
| T12 | T11 | Full local QA, Git commit, and owner handoff | Journeys pass, no unsupported claims/stubs, tests and browser/print checks recorded, local commit exists, push instructions documented | `npm run verify -- --final`, browser/print checklist, `git status --short`, `git log -1 --oneline` |

The confirmed production URL is https://davao-tourism.vercel.app/. The project owner will push from VS Code and verify the resulting Vercel production page.

The T04 final-mode QR check runs after T09 because T05/T09 remove the old UI imports. This dependency correction was recorded before implementing T04.
T03A was added after the taxi-driver use case was clarified. It is completed before T04 is closed.
T07 includes minimal app bootstrap wiring so its browser behavior can be verified before T08. T09 remains the final document/footer/routing pass.
T10's physical two-phone proof is a print-production step the project owner must perform with the chosen stock and printer. Engineering verifies print geometry and software decodability; the final audit must say plainly that physical stock was not tested here.

## 2026-09-27 correction: imagery and private print files

The owner's correction authorizes this extension of the approved work. Execute in order and commit locally; the owner pushes from VS Code.

| ID | Depends on | Files and work | Binary DoD | Verification |
|---|---|---|---|---|
| T13 | T12 | Research licensed, accurately identified place/context photos; update `docs/SOURCES.md`, `scripts/fetch-images.py`, `assets/images/**` | Each of 13 places has a documented photo choice and license; new images are under 500 KB | Source/license review; `python3 scripts/fetch-images.py`; file size check |
| T14 | T13 | Map photos in `src/data/locations.js`; update card rendering and `src/app.js` credits; strengthen `scripts/verify-system.js` | All 13 cards show valid images; context is visibly labeled; credits cover every displayed photo | `npm run verify -- --final`; browser image load and phone check |
| T15 | T14 | Move SVG/QR to ignored `owner-card/**`, export PNG faces, remove `card.html`, `src/styles/card.css`, `assets/card/**`; update `.gitignore`, `.vercelignore`, navbar/footer, README | 1050 x 600 PNG fronts/backs and scannable QR exist locally; published tree has no card link or asset | PNG dimensions and QR decode; `git check-ignore`; local site link audit |
| T16 | T15 | Update `docs/AUDIT.md`; final QA and local commit | Final verifier and browser QA pass; owner receives exact private file location and publication caveat | `npm run verify -- --final`; `git status --short`; `git log -1 --oneline` |

## Execution checkpoints

- T01 complete: docs/SOURCES.md created; ten candidate venues have city/operator sources and five retained images have creator, source, and license. Verification: `test -f docs/SOURCES.md` passed. Next: T02.
- T02 complete: `src/data/locations.js` now has ten sourced city places and `src/data/stories.js` has one sourced cultural story. Verification: data import check passed. The old verifier is replaced in T04. Next: T03.
- T03 complete: five credited photos converted to WebP; unrelated JPGs removed; image pipeline now reproduces the kept assets. Verification: five valid images, each under 500 KB; folder 604 KB. Next: T04.
- T03A complete: added Philippine Eagle Center, Eden Nature Park, and Jack's Ridge plus intent and area tags. Verification: all five passenger questions return at least two places; 13 city places pass verifier. Next: T04.
- T04 complete: Maps links now use place identity; verifier checks sources, scope, assets, and intent coverage. Verification: `npm run verify` and three sample Maps query checks passed. Final-mode QR check waits until T09. Next: T05.
- T05 complete: simplified `src/state/app-state.js`; removed runtime QR and business-card components. Verification: old symbols absent from src and `npm run verify` passed. `src/app.js` and `card.html` are rewired in T09/T10. Next: T06.
- T06 complete: field-guide visual direction, skyline hero, taxi-question shortcuts, Kadayawan story, and responsive base/portal CSS. Verification: JS syntax and CSS presence passed; viewport checks are repeated after T09 wiring. Next: T07.
- T07 complete: navigation, stable search, results, detail dialog, source display, and Maps actions. Verification: Playwright phone flow passed question shortcut, search focus, place detail, two Maps links, Escape, and no page errors; `npm run verify` passed. Next: T08.
- T08 complete: replaced faux map with four honest city-area groups and Maps handoffs. Verification: Playwright at 390 and 1440 px found four groups, 13 Maps links, and no horizontal overflow. Next: T09.
- T09 complete: final visitor document, metadata, Lance C. Lastimosa footer credit, photo credits, story ordering, and Vercel static config. Verification: Playwright at 320/390/768/1440 px found no page errors or overflow; `npm run verify` passed. Next: T10.
- T10 complete for digital artwork: two 3.5 x 2 inch SVG faces, embedded static QR, readable address, and Lance C. Lastimosa credit. Verification: browser print rectangles 336 x 192 CSS px, phone layout passed, zxing-cpp decoded rendered card QR to the confirmed URL. Physical two-phone proof remains a pre-bulk-print owner step. Next: T11.
- T11 complete: README, package author/license metadata, and evidence-based audit updated. Verification: local server procedure used throughout; `npm run verify -- --final` passed. Next: T12.
- T12 complete for the approved local scope: QA passed and changes are committed locally. GitHub push and live Vercel check were reassigned to the project owner at the owner's request.
- T13 complete: nine additional Commons photos were source and license checked, downloaded, resized, and registered. The 14-image folder contains a unique photo for each place plus the hero. Verification: fetch script reproduced every image; all are below 500 KB. Next: T14.
- T14 complete: all 13 location records now require images, contextual scenes have visible captions, and the public credits include every added creator. Verification: `npm run verify -- --final` passed. Browser loading is checked during T16. Next: T15.
- T15 complete: moved print SVGs and QR into local `owner-card/`, rendered 1050 x 600 PNG faces at 300 ppi, removed public card page/assets/navigation, and added Git/Vercel ignore rules. Verification: PNG geometry and zxing QR decode passed; `git check-ignore` matched owner files; visitor DOM has no card links. Next: T16.
- T16 complete: final verifier, four viewport browser image checks, local owner preview, QR decoding, ignore checks, and diff validation passed. Correction is ready for a local Git commit and owner publication from VS Code.

## 2026-09-27 correction: property-specific stay photos

| ID | Depends on | Files and work | Binary DoD | Verification |
|---|---|---|---|---|
| T17 | T16 | Confirm current Davao hotel alternatives and Commons photo licenses; update `docs/SOURCES.md` and `scripts/fetch-images.py` | Two Stay recommendations have active operator pages and reusable photos depicting the named hotels | Operator and Commons source review; `python3 scripts/fetch-images.py` |
| T18 | T17 | Replace stay records and image credits; simplify context captions; update `scripts/verify-system.js` | Stay cards show their hotels, caption copy describes the real scene, no stale Dusit image remains | `npm run verify -- --final`; browser photo and copy inspection |
| T19 | T18 | Update `README.md`, `docs/AUDIT.md`; complete QA and commit locally | Source register, browser, verifier, and Git commit reflect the corrected stay cards | Browser at 390/1440 px; `npm run verify -- --final`; `git diff --check`; `git log -1 --oneline` |

- T17 complete: current operator evidence and reusable Commons photos were confirmed for Seda Abreeza and Park Inn by Radisson Davao. Both photos visibly show their named hotels; the old context assets were removed. Verification: source/license review, visual inspection, and `python3 scripts/fetch-images.py` passed. Next: T18.
- T18 complete: Stay records now use Seda Abreeza and Park Inn building photos, credits were updated, context captions name their actual scenes, and the verifier requires property photos for Stay. Verification: `npm run verify -- --final` passed; browser at 390 and 1440 px loaded both hotel photos with no Stay caption, overflow, or page error. Next: T19.
- T19 complete: README and audit describe the corrected images and owner publication boundary. Verification: `npm run verify -- --final`, browser checks at 390 and 1440 px for all 13 images and five factual captions, `git diff --check`, and local Git commit passed. GitHub push remains with the owner.
