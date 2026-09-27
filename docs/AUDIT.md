# Delivery audit

Status: Local implementation verified and committed. GitHub push is an owner handoff. Updated 2026-09-27.

## Spec reconciliation

- City-only scope: 13 published places; Pearl Farm and other Samal entries removed.
- Visitor questions: first-time, family, tonight, food, and stay shortcuts return at least two relevant places each.
- Maps: every place offers a specific Google Maps query; the area guide avoids estimated drive times.
- QR: no runtime generator or URL editor remains in the visitor site. Card artwork contains a static QR for the confirmed production URL.
- Authorship: site footer, card faces, README, and metadata credit Lance C. Lastimosa.
- Culture: Kadayawan Village copy names the 2025 source and tells visitors to confirm access; no current event timetable is asserted.
- Photos: five Commons photos have creator/source/license records. Other venue imagery was removed.

## Measured so far

- Image directory reduced from about 84 MB to about 604 KB. Each of five retained images is under 500 KB.
- Browser flows passed at 320, 390, 768, and 1440 px without horizontal overflow or page errors.
- Phone flow passed question shortcut, search focus while typing, detail opening, Maps links, and Escape close.
- Printed card CSS computes to 336 by 192 CSS px, equivalent to 3.5 by 2 inches at 96 CSS px per inch.
- A rendered capture of the card-back QR decoded to the confirmed production URL with zxing-cpp.
- Initial phone load at 390 px transferred about 333 KB of local resources in the browser audit, including about 293 KB of images.
- Interactive category, intent, search, dialog, and Maps-link flows passed at 320, 390, 768, and 1440 px. Dialog close restores focus to its invoking button.
- Final-mode `npm run verify -- --final`, SVG XML parse, and `git diff --check` passed.

## Delivery state

- Local implementation commit: `f1a585d` (`Build Davao visitor guide and static QR card`).
- GitHub push was stopped at the owner's request after a failed attempt due to missing workspace authentication. The project owner will push from VS Code.
- The Vercel production page still served the previous title at the last check. The new guide will not be live until the local commits are pushed and Vercel finishes deployment.
- Physical proof print and scans on two phones remain an owner action before bulk printing; software decoding cannot establish how a chosen stock, finish, and printer behave.
