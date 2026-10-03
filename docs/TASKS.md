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

## 2026-10-02 extension: named restaurant and cafe venues

The owner explicitly requested all 13 named businesses and supplied screenshots showing that captions do not correct unrelated venue photos. Branch decisions are recorded in `docs/SOURCES.md`; additions use a verified active branch for each brand.

| ID | Depends on | Files and work | Binary DoD | Verification |
|---|---|---|---|---|
| T20 | T19 | Confirm one active Davao branch and concise supported description for each of the 13 requested businesses; update `docs/SOURCES.md` | Thirteen current business pins are documented, including branch choices and any retired/ambiguous names | Manual source review; exact name/address checked in operator, city, delivery, or current map listing |
| T21 | T20 | Find actual business photos for the 13 additions and replace Marina Tuna, Bistro Rosario, Purge Coffee, and Green Coffee context photos; update image acquisition, register, and credits | Each of 17 food/cafe cards shows its own premises or a real menu item from that business; menu photos are captioned. Source, creator, stated license or unconfirmed status, and attribution are recorded. Unconfirmed rights block public release. | Visual review of all 17 images; `python3 scripts/fetch-images.py`; image-size check; review rights status |
| T22 | T20,T21 | Add the 13 location records and guide tags; strengthen `scripts/verify-system.js` | Site has 26 sourced Davao places; food/cafe photos depict the business premises or that business's own menu; five passenger shortcuts still return at least two places | `npm run verify -- --final`; source/category/Maps review |
| T23 | T22 | Update README and audit; full phone/desktop QA; commit locally | All cards and images load; search, filters, details and Maps still work; rights caveats are in the owner handoff; project has a clean local commit; GitHub remains unpushed | Browser at 390/1440 px; `npm run verify -- --final`; `git diff --check`; `git status -sb`; `git log -1 --oneline` |

- T20 complete: branch choices and supported short descriptions for all 13 additions are recorded in `docs/SOURCES.md` with source pages and the 2026-10-02 check date. Daily Dose points to the current Maa Coffee Bar, not the closed Juna listing. A fresh September 2026 local report showed the Azuela G Center lease ended and a Robata branch opened at The Compound; the selected Maps target now points to that complex, while an exact unit and any Azuela High Street plan remain unconfirmed. Verification: source-by-source branch/address review completed; next: T21.
- T21 complete for local review: all 13 new image files were added and the four mismatched food/cafe images were replaced with the named businesses. Fifteen business cards show the premises; Robata and Daily Dose use their own menu photos with captions. Sources, attribution, and unconfirmed reuse status are recorded. Verification: full refresh completed, all 27 WebP assets are below 500 KB, and all 17 food/cafe photos were visually reviewed. Public release remains blocked by unconfirmed image rights. Next: T22.
- T22 complete: added 13 sourced Davao records, categories, areas, and passenger-guide tags; the guide now contains 26 places. Verifier checks the exact requested IDs, 17 restaurant/cafe cards, photo credits, city scope, Maps URLs, passenger shortcuts, and the corrected Robata/Daily Dose branch selections. Verification: `npm run verify -- --final` passed. Browser review follows in T23.
- T23 complete: updated README and audit; browser QA at 390 and 1440 px confirmed all images load, all cards have alt text, filters and search work, Robata details/Maps point to The Compound complex, Escape closes details, credits disclose rights status, and no horizontal overflow or page errors occur. `npm run verify -- --final`, JavaScript checks, image-pipeline check, and `git diff --check` passed. Local commit created; GitHub remains unpushed. Photo permissions and Robata's exact unit remain release blockers.

### Image-rights decision, 2026-10-02

Several authentic venue photos are publicly visible on business pages, city tourism pages, and local editorial pages, but those pages do not state a reuse license. Record each source and creator status honestly; do not imply that credit grants permission. This work is a local review build. Any photo with unconfirmed reuse rights is a public-release blocker until the owner obtains permission or supplies a licensed replacement. Menu-item photographs must be labeled as menu-item images and must not be described as photographs of the venue itself.

## 2026-10-03 extension: nine stays and supplied Eagle Center photo

Execution continues under the owner's existing approval and explicit continuation request. GitHub push remains canceled.

| ID | Depends on | Files and work | Binary DoD | Verification |
|---|---|---|---|---|
| T24 | T23 | Verify hotel identities, addresses, actual property photos, and image provenance in `docs/SOURCES.md` | All nine requested stays have address evidence and a property photo source; Inspiria's condo status is explicit | Operator/city/source review and visual image comparison |
| T25 | T24 | Add optimized hotel photos and acquisition URLs; replace Eagle Center WebP, alt, and credit; register footer credits | All nine hotel files and supplied entrance image load below 500 KB; remote refresh cannot overwrite supplied photo | Image decode/size review; image script syntax check |
| T26 | T25 | Add hotel records and guide tags; update verifier | 35 places and 11 stays, requested hotel IDs present, correct category/area/intent and Maps data | `npm run verify -- --final` |
| T27 | T26 | Update README and audit; phone/desktop QA | Stay filter shows 11 cards, images/search/details/Maps work, no overflow or page errors, source status documented | Browser at 390/1440 px; final verifier; `git diff --check`; `git status -sb` |

- T24 complete: all nine hotel identities and Davao City addresses were reviewed against operator, city, property, and listing sources. Actual property photos were visually checked; Inspiria renderings were excluded. Source/creator/reuse status and the supplied Eagle Center photo provenance are in `docs/SOURCES.md`. Next: T25.
- T25 complete: added nine visually reviewed hotel WebPs, updated acquisition URLs and footer credits, and replaced Eagle Center with the owner's entrance photograph and matching alt text. The supplied credit has no fabricated external link or license; remote refresh preserves this image and reports a missing supplied file. Verification: all ten changed images decode below 500 KB and image script compilation passed. Next: T26.
- T26 complete: added nine hotel records with dated sources, exact property Maps searches, stay tags, and north/south/downtown areas. Verifier now requires 35 places, 11 stays, the requested hotel IDs, condo guidance, and preservation of the supplied image. Verification: final verifier, JavaScript syntax checks, and the image-script preservation pass completed successfully. Next: T27.
- T27 complete for local review: README and audit reflect 35 places, 11 stays, 36 WebP assets, and supplied-photo provenance. Browser QA at 390/1440 px passed all image loading, hotel filtering/search/details/Maps, Escape, expanded photo credits, overflow, and page-error checks. The first browser assertion read a collapsed credit as visible text; expanding the disclosure corrected the test, with no application defect. Final verifier and `git diff --check` passed. The extension remains uncommitted and unpushed; source permissions remain an owner release step.
