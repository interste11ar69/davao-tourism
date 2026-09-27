# Delivery audit

Status: Final verification in progress. Updated 2026-09-27.

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

## Pending final audit

- Full final-mode automated verification and placeholder audit.
- Git commit, GitHub push, and Vercel production check.
- Physical proof print and scans on two phones remain an owner action before bulk printing; software decoding cannot establish how a chosen stock, finish, and printer behave.
