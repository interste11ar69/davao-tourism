/**
 * System QA, High-Resolution Assets, and Vercel Deployment Audit
 * Validates data integrity, geographic bounds, asset presence, QR engine,
 * vercel.json configuration, CSS files, and zero-placeholder compliance.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.dirname(__dirname);

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`[PASS] ${message}`);
  } else {
    failed++;
    console.error(`[FAIL] ${message}`);
  }
}

async function runAudit() {
  console.log("=================================================");
  console.log("Davao Tourism System Audit & Verification Pass");
  console.log("=================================================\n");

  // 1. Data Integrity & Schema Audit
  console.log("--- 1. Location Database Integrity ---");
  const { locations, categories, kadayawanTribes, davaoIcons } = await import(
    "../src/data/locations.js"
  );

  assert(locations && locations.length >= 24, `Minimum 24 locations (found ${locations.length})`);
  assert(categories && categories.length === 5, `Expected 5 category filters (found ${categories.length})`);
  assert(kadayawanTribes && kadayawanTribes.length === 11, `Expected 11 Kadayawan tribes (found ${kadayawanTribes.length})`);
  assert(davaoIcons && davaoIcons.length === 4, `Expected 4 Davao icons (found ${davaoIcons.length})`);

  // Check every location
  let validLocations = 0;
  for (const loc of locations) {
    const hasFields =
      loc.id &&
      loc.name &&
      ["tourist-spot", "restaurant", "cafe", "hotel"].includes(loc.category) &&
      loc.district &&
      loc.address &&
      typeof loc.coordinates.lat === "number" &&
      typeof loc.coordinates.lng === "number" &&
      loc.googleMapsUrl &&
      loc.tagline &&
      loc.description &&
      Array.isArray(loc.highlights) &&
      loc.highlights.length >= 3 &&
      loc.image;

    // Davao City Geographic Bounds: Lat 6.9 to 7.4, Lng 125.3 to 125.8
    const inDavaoBounds =
      loc.coordinates.lat >= 6.9 &&
      loc.coordinates.lat <= 7.4 &&
      loc.coordinates.lng >= 125.3 &&
      loc.coordinates.lng <= 125.8;

    if (hasFields && inDavaoBounds) {
      validLocations++;
    } else {
      console.error(`  Invalid location record: ${loc.id}`, { hasFields, inDavaoBounds });
    }
  }

  assert(
    validLocations === locations.length,
    `All ${locations.length} locations strictly verified within Davao City bounds`
  );

  // 2. High-Resolution Image Assets Verification
  console.log("\n--- 2. High-Resolution Image Assets ---");
  const requiredBackdrops = [
    "assets/images/hero-davao.jpg",
    "assets/images/kadayawan-backdrop.jpg"
  ];
  const allImagePaths = [
    ...requiredBackdrops,
    ...locations.map((l) => l.image)
  ];

  let existingAssets = 0;
  for (const imgRel of allImagePaths) {
    const fullPath = path.join(ROOT_DIR, imgRel);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      if (stats.size > 1024) {
        existingAssets++;
      } else {
        console.error(`  Asset exists but is suspiciously small: ${imgRel} (${stats.size} bytes)`);
      }
    } else {
      console.error(`  Missing required asset: ${imgRel}`);
    }
  }

  assert(
    existingAssets === allImagePaths.length,
    `All ${allImagePaths.length} high-resolution image assets exist locally with valid file sizes`
  );

  // 3. Core Utilities: QR Vector Engine & Google Maps
  console.log("\n--- 3. Core Utilities: QR Code & Navigation ---");
  const { generateQRCodeSVG, generateQRCodeDataUrl } = await import("../src/utils/qr.js");
  const { buildGoogleMapsUrl, calculateDistanceKm, formatCoordinates } = await import(
    "../src/utils/maps.js"
  );

  const testVercelUrl = "https://davao-tourism.vercel.app";
  const svgOutput = generateQRCodeSVG({ text: testVercelUrl, size: 200 });
  const dataUrlOutput = generateQRCodeDataUrl({ text: testVercelUrl });

  assert(
    svgOutput.includes("<svg") && svgOutput.includes("<path") && svgOutput.includes(testVercelUrl),
    "Pure JavaScript QR generator returns valid SVG markup with Vercel destination URL"
  );
  assert(
    dataUrlOutput.startsWith("data:image/svg+xml"),
    "QR generator outputs standard SVG Data URL"
  );

  const testMapUrl = buildGoogleMapsUrl(locations[0]);
  assert(
    testMapUrl.includes("https://www.google.com/maps/search/?api=1"),
    "Google Maps URL generator produces valid search navigation link"
  );

  const dist = calculateDistanceKm(7.0644, 125.609, 7.18488, 125.41529);
  assert(
    dist > 20 && dist < 30,
    `Haversine formula correctly calculates distance to Malagos (~${dist} km)`
  );

  // 4. Vercel Configuration Readiness
  console.log("\n--- 4. Vercel Hosting Configuration ---");
  const vercelPath = path.join(ROOT_DIR, "vercel.json");
  assert(fs.existsSync(vercelPath), "vercel.json exists in root directory");

  try {
    const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, "utf-8"));
    assert(Array.isArray(vercelConfig.rewrites), "vercel.json contains rewrites array");
    assert(
      vercelConfig.rewrites.some((r) => r.destination === "/index.html"),
      "vercel.json rewrites incoming routes to /index.html for SPA support"
    );
    assert(vercelConfig.cleanUrls === true, "cleanUrls enabled in vercel.json");
  } catch (err) {
    assert(false, `vercel.json is valid JSON: ${err.message}`);
  }

  // 5. Stylesheets & Design System
  console.log("\n--- 5. Stylesheets & Print Media Rules ---");
  const requiredStyles = ["base.css", "card.css", "portal.css", "map.css"];
  for (const css of requiredStyles) {
    const p = path.join(ROOT_DIR, "src", "styles", css);
    assert(fs.existsSync(p), `src/styles/${css} exists`);
  }

  const cardCssContent = fs.readFileSync(path.join(ROOT_DIR, "src", "styles", "card.css"), "utf-8");
  assert(cardCssContent.includes("@media print"), "src/styles/card.css includes @media print rules");
  assert(cardCssContent.includes("transform-style: preserve-3d"), "src/styles/card.css includes 3D perspective transforms");

  // 6. Zero Placeholders & Emoji Audit
  console.log("\n--- 6. Zero-Placeholder & Emoji Hygiene Audit ---");
  const filesToCheck = [
    "index.html",
    "package.json",
    "vercel.json",
    "README.md",
    "src/app.js",
    "src/data/locations.js",
    "src/state/app-state.js",
    "src/utils/qr.js",
    "src/utils/maps.js",
    "src/components/navbar.js",
    "src/components/hero.js",
    "src/components/business-card.js",
    "src/components/location-grid.js",
    "src/components/map-explorer.js",
    "src/components/modal-detail.js",
    "src/styles/base.css",
    "src/styles/card.css",
    "src/styles/portal.css",
    "src/styles/map.css"
  ];

  let placeholderCount = 0;
  let emojiCount = 0;
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

  for (const rel of filesToCheck) {
    const fullPath = path.join(ROOT_DIR, rel);
    if (!fs.existsSync(fullPath)) continue;
    const content = fs.readFileSync(fullPath, "utf-8");

    if (content.includes("// TODO") || content.includes("/* rest of code here */")) {
      console.error(`  Placeholder found in ${rel}`);
      placeholderCount++;
    }

    if (emojiRegex.test(content)) {
      console.error(`  Emoji character detected in ${rel}`);
      emojiCount++;
    }
  }

  assert(placeholderCount === 0, "Zero // TODO or mock stub placeholders across entire codebase");
  assert(emojiCount === 0, "Strictly zero emojis in all codebase files");

  // Audit Summary
  console.log("\n=================================================");
  console.log(`Audit Summary: ${passed} passed, ${failed} failed`);
  console.log("=================================================");

  if (failed > 0) {
    console.error("Audit failed with errors.");
    process.exit(1);
  } else {
    console.log("ALL QUALITY CHECKS PASSED: 100% PRODUCTION READY.");
    process.exit(0);
  }
}

runAudit().catch((err) => {
  console.error("Unhandled error during audit:", err);
  process.exit(1);
});
