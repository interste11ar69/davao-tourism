# Madayaw Davao: Visitor guide refresh specification

Status: Approved for execution on 2026-09-27. This supersedes the previous QR generator scope.

## Problem and target users

A person receiving the physical card needs a fast, trustworthy Davao City guide on a phone. The current site has useful categories but includes a Samal venue under a city-only promise, unrelated venue photos, 84 MB of images, unsupported "official" and "verified" claims, and a QR generator that visitors do not need. Users are first-time visitors, hotel guests, event visitors, and local hosts distributing cards.

## Core journeys

1. A visitor scans the physical card and lands on the public guide. The first screen identifies Davao City and offers Explore, Eat, Coffee, and Stay.
2. The visitor chooses a category, reads concise place details, and opens the correct place in Google Maps. Search stays usable while typing.
3. The visitor reads a short, sourced introduction to Kadayawan and Davao culture without mistaking historical context for this year's schedule.
4. A host obtains distinctive card artwork with a static QR for the confirmed production URL, prints a proof, and scans it before distribution.
5. A professor viewing the site or physical card can identify Lance C. Lastimosa as the project creator without confusing that credit with government endorsement.
6. A taxi passenger asks "Where should I go in Davao?" or "Where should I stay?" The driver hands over the card, and the passenger taps a question-led shortcut for a short list with clear reasons and a Maps handoff.

## Goals

- A spacious, visually distinctive, mobile-first Davao City guide with purposeful imagery, typography, color, and motion.
- Four categories and a curated number of city destinations. Accuracy matters more than preserving 27 entries.
- First-time, family, tonight, food, and stay shortcuts answer common taxi passenger questions; distant trips are distinguished from downtown stops without invented drive times.
- Every place has a verified city location, relevant or honestly labeled contextual image, source record, and working Maps action.
- Remove the website's QR generator, URL editor, QR utility, and QR-related state.
- Provide front/back card artwork with a static QR for https://davao-tourism.vercel.app/ plus a readable URL fallback. QR creation occurs during asset preparation, never in the shipped website.
- Display clear credit to Lance C. Lastimosa in the site footer and on the card; align README and metadata.
- Optimize images, interaction, accessibility, and phone layouts; update docs and verification.
- Commit the completed changes locally after QA. The project owner will push from VS Code and check the resulting Vercel production page.
- Give every published place card a real, licensed photograph. Use an image of the named place where verifiable; otherwise use a clearly captioned Davao contextual scene. Do not repeat one context photo across unrelated businesses as if it depicts them.
- Supply 3.5 by 2 inch, 300 ppi PNG files for both physical card faces, alongside editable SVG masters.
- Keep the print card and QR files in a local owner folder excluded from Git and Vercel. Remove public site links and the public card page. Visitors only need the guide that the card opens.

## Anti-goals

Booking, payments, accounts, live hours, live event schedules, an embedded map SDK, government affiliation claims, an on-site QR generator, and Samal destinations labeled as Davao City.

## Constraints

- Retain static HTML, CSS, ES modules, and Vercel deployment unless a clear need appears.
- No API key, secret, paid dependency, fake function, stub, or emoji.
- Work at 320 px and up with visible keyboard focus, readable contrast, reduced motion, and usable touch controls.
- Record creator, source page, license, and attribution requirement for every retained third-party image. Remove images without adequate rights.
- Source and date-check venue facts. Do not imply hours, prices, or availability are current without verification.

## Binary completion criteria

- Shipped pages contain no QR generation or URL editing. Printed card artwork has a static QR encoding https://davao-tourism.vercel.app/ and a readable address fallback.
- Site footer, card, README, and metadata credit Lance C. Lastimosa; no official-status claim remains.
- Every shown destination passes city-boundary and Maps-link review; Pearl Farm is excluded.
- Venue photos show the named venue or carry an explicit contextual caption.
- Initial mobile transfer is measured and targeted below 1 MB; no single guide image exceeds 500 KB without documented reason.
- Category selection, search focus, details, Maps actions, keyboard use, and phone layouts pass browser checks.
- The physical card is proof printed and scanned on two phones before bulk printing. The confirmed URL is used for the final static QR asset.
- Every published location renders a loadable photograph, with a visible contextual caption whenever the photograph does not depict the named place.
- Both card-face PNGs exist at 1050 x 600 pixels and their rendered QR decodes to the production root.
- No card preview, download, or QR file is served from the visitor site after the owner's next deployment; the local owner files are ignored by Git and Vercel. Existing Git history may still contain earlier public artwork and cannot be made private by these changes alone.
- Full local verification passes and a Git commit exists. GitHub push and Vercel publication are an owner handoff.

## Source starting points

- Davao City Tourism: https://tourism.davaocity.gov.ph/
- People's Park: https://tourism.davaocity.gov.ph/explore-the-city/attractions/man-made-nature-parks/peoples-park/
- City report on Kadayawan Village: https://davaocity.gov.ph/tourism/kadayawan-village-remains-open-to-public-says-ctoo/
- Maps URL specification: https://developers.google.com/maps/documentation/urls/get-started

These are starting evidence, not blanket verification of the current directory.
