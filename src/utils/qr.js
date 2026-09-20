/**
 * Self-contained Pure JavaScript Vector QR Code Generator
 * Conforms to ISO/IEC 18004 QR Code specification.
 * Zero external dependencies, pure ES Module.
 */

// Galois Field (GF 256) tables with primitive polynomial 0x11D (285)
const EXP_TABLE = new Uint8Array(256);
const LOG_TABLE = new Uint8Array(256);

(function initGaloisField() {
  let val = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = val;
    LOG_TABLE[val] = i;
    val <<= 1;
    if (val & 0x100) {
      val ^= 0x11d;
    }
  }
  for (let i = 255; i < 512; i++) {
    // Wrap around for convenience
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
})();

function gfMul(x, y) {
  if (x === 0 || y === 0) return 0;
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
}

// Reed-Solomon generator polynomial computation
function rsComputeGeneratorPoly(degree) {
  let poly = [1];
  for (let i = 0; i < degree; i++) {
    const factor = [1, EXP_TABLE[i]];
    const nextPoly = new Array(poly.length + 1).fill(0);
    for (let j = 0; j < poly.length; j++) {
      nextPoly[j] ^= gfMul(poly[j], factor[0]);
      nextPoly[j + 1] ^= gfMul(poly[j], factor[1]);
    }
    poly = nextPoly;
  }
  return poly;
}

function rsComputeRemainder(data, ecCount) {
  const gen = rsComputeGeneratorPoly(ecCount);
  const result = new Array(ecCount).fill(0);
  for (let i = 0; i < data.length; i++) {
    const factor = data[i] ^ result.shift();
    result.push(0);
    for (let j = 0; j < ecCount; j++) {
      result[j] ^= gfMul(gen[j + 1], factor);
    }
  }
  return result;
}

// Version table parameters for Error Correction Level M (Medium - 15% recovery)
// [version, totalCodewords, ecCodewordsPerBlock, numBlocksGroup1, dataCodewordsGroup1, numBlocksGroup2, dataCodewordsGroup2]
const VERSION_PARAMS_M = [
  null,
  { version: 1, totalData: 16, ecPerBlock: 10, g1Blocks: 1, g1Data: 16, g2Blocks: 0, g2Data: 0, size: 21 },
  { version: 2, totalData: 28, ecPerBlock: 16, g1Blocks: 1, g1Data: 28, g2Blocks: 0, g2Data: 0, size: 25 },
  { version: 3, totalData: 44, ecPerBlock: 26, g1Blocks: 1, g1Data: 44, g2Blocks: 0, g2Data: 0, size: 29 },
  { version: 4, totalData: 64, ecPerBlock: 18, g1Blocks: 2, g1Data: 32, g2Blocks: 0, g2Data: 0, size: 33 },
  { version: 5, totalData: 86, ecPerBlock: 24, g1Blocks: 2, g1Data: 43, g2Blocks: 0, g2Data: 0, size: 37 },
  { version: 6, totalData: 108, ecPerBlock: 16, g1Blocks: 4, g1Data: 27, g2Blocks: 0, g2Data: 0, size: 41 }
];

// Alignment pattern centers per version
const ALIGNMENT_LOCATIONS = [
  [],
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34]
];

// Format info bits for Error Correction Level M (00) and Mask patterns 0..7
const FORMAT_INFO_M = [
  0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0
];

/**
 * Encodes string data into QR Version bytes.
 */
function encodeData(text, versionInfo) {
  const encoder = new TextEncoder();
  const utf8Bytes = encoder.encode(text);
  const bitstream = [];

  function pushBits(val, len) {
    for (let i = len - 1; i >= 0; i--) {
      bitstream.push((val >> i) & 1);
    }
  }

  // Byte mode indicator: 0100
  pushBits(0b0100, 4);

  // Character count indicator (8 bits for versions 1-9)
  pushBits(utf8Bytes.length, 8);

  // Data payload
  for (let i = 0; i < utf8Bytes.length; i++) {
    pushBits(utf8Bytes[i], 8);
  }

  // Terminator (up to 4 bits)
  const maxBits = versionInfo.totalData * 8;
  const termLen = Math.min(4, maxBits - bitstream.length);
  pushBits(0, termLen);

  // Pad to whole byte
  while (bitstream.length % 8 !== 0) {
    bitstream.push(0);
  }

  // Pad bytes (0xEC, 0x11 alternating)
  const padBytes = [0xec, 0x11];
  let padIdx = 0;
  while (bitstream.length < maxBits) {
    pushBits(padBytes[padIdx % 2], 8);
    padIdx++;
  }

  // Convert bitstream to bytes
  const codewords = [];
  for (let i = 0; i < bitstream.length; i += 8) {
    let byteVal = 0;
    for (let j = 0; j < 8; j++) {
      byteVal = (byteVal << 1) | bitstream[i + j];
    }
    codewords.push(byteVal);
  }

  return codewords;
}

/**
 * Builds data blocks and computes Reed-Solomon error correction codewords.
 */
function buildCodewordsWithEC(dataCodewords, versionInfo) {
  const { g1Blocks, g1Data, g2Blocks, g2Data, ecPerBlock } = versionInfo;
  const blocks = [];
  let offset = 0;

  for (let i = 0; i < g1Blocks; i++) {
    const slice = dataCodewords.slice(offset, offset + g1Data);
    blocks.push({ data: slice, ec: rsComputeRemainder(slice, ecPerBlock) });
    offset += g1Data;
  }
  for (let i = 0; i < g2Blocks; i++) {
    const slice = dataCodewords.slice(offset, offset + g2Data);
    blocks.push({ data: slice, ec: rsComputeRemainder(slice, ecPerBlock) });
    offset += g2Data;
  }

  // Interleave data codewords
  const interleaved = [];
  const maxDataLen = Math.max(g1Data, g2Data);
  for (let d = 0; d < maxDataLen; d++) {
    for (let b = 0; b < blocks.length; b++) {
      if (d < blocks[b].data.length) {
        interleaved.push(blocks[b].data[d]);
      }
    }
  }

  // Interleave error correction codewords
  for (let e = 0; e < ecPerBlock; e++) {
    for (let b = 0; b < blocks.length; b++) {
      interleaved.push(blocks[b].ec[e]);
    }
  }

  return interleaved;
}

/**
 * Creates QR Matrix and renders functional and data modules.
 */
function createQRMatrix(text) {
  const encoder = new TextEncoder();
  const utf8Len = encoder.encode(text).length;

  let versionInfo = null;
  for (let v = 1; v < VERSION_PARAMS_M.length; v++) {
    // 3 bytes overhead for mode and length
    if (VERSION_PARAMS_M[v].totalData >= utf8Len + 3) {
      versionInfo = VERSION_PARAMS_M[v];
      break;
    }
  }

  if (!versionInfo) {
    versionInfo = VERSION_PARAMS_M[VERSION_PARAMS_M.length - 1];
  }

  const { size, version } = versionInfo;
  const matrix = Array.from({ length: size }, () => new Array(size).fill(null));
  const isFunction = Array.from({ length: size }, () => new Array(size).fill(false));

  function setModule(r, c, val, func = true) {
    if (r >= 0 && r < size && c >= 0 && c < size) {
      matrix[r][c] = val;
      if (func) isFunction[r][c] = true;
    }
  }

  // 1. Finder patterns (7x7) + separators at (0,0), (size-7, 0), (0, size-7)
  const finderPositions = [
    [0, 0],
    [size - 7, 0],
    [0, size - 7]
  ];

  for (const [row, col] of finderPositions) {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const mr = row + r;
        const mc = col + c;
        if (mr >= 0 && mr < size && mc >= 0 && mc < size) {
          if (r >= 0 && r <= 6 && c >= 0 && c <= 6) {
            const isBorder = r === 0 || r === 6 || c === 0 || c === 6;
            const isCenter = r >= 2 && r <= 4 && c >= 2 && c <= 4;
            setModule(mr, mc, isBorder || isCenter ? 1 : 0);
          } else {
            setModule(mr, mc, 0); // Separator
          }
        }
      }
    }
  }

  // 2. Alignment patterns
  const alignCoords = ALIGNMENT_LOCATIONS[version] || [];
  for (const ar of alignCoords) {
    for (const ac of alignCoords) {
      if (isFunction[ar][ac]) continue;
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          const isOuter = Math.abs(r) === 2 || Math.abs(c) === 2;
          const isCenter = r === 0 && c === 0;
          setModule(ar + r, ac + c, isOuter || isCenter ? 1 : 0);
        }
      }
    }
  }

  // 3. Timing patterns
  for (let i = 8; i < size - 8; i++) {
    if (matrix[6][i] === null) setModule(6, i, i % 2 === 0 ? 1 : 0);
    if (matrix[i][6] === null) setModule(i, 6, i % 2 === 0 ? 1 : 0);
  }

  // 4. Dark module
  setModule(size - 8, 8, 1);

  // Reserve format info area
  for (let i = 0; i < 9; i++) {
    if (matrix[8][i] === null) matrix[8][i] = 0;
    if (matrix[i][8] === null) matrix[i][8] = 0;
    isFunction[8][i] = true;
    isFunction[i][8] = true;
  }
  for (let i = 0; i < 8; i++) {
    isFunction[8][size - 1 - i] = true;
    isFunction[size - 1 - i][8] = true;
  }

  // 5. Data placement
  const rawData = encodeData(text, versionInfo);
  const finalCodewords = buildCodewordsWithEC(rawData, versionInfo);

  const bitArray = [];
  for (const byte of finalCodewords) {
    for (let i = 7; i >= 0; i--) {
      bitArray.push((byte >> i) & 1);
    }
  }

  let bitIdx = 0;
  let dir = -1; // Going up
  let col = size - 1;

  while (col > 0) {
    if (col === 6) col--; // Skip vertical timing column
    const rows = dir === -1
      ? Array.from({ length: size }, (_, i) => size - 1 - i)
      : Array.from({ length: size }, (_, i) => i);

    for (const row of rows) {
      for (const c of [col, col - 1]) {
        if (!isFunction[row][c]) {
          matrix[row][c] = bitIdx < bitArray.length ? bitArray[bitIdx++] : 0;
        }
      }
    }
    dir = -dir;
    col -= 2;
  }

  // 6. Select Mask Pattern (Pattern 0: (row + col) % 2 == 0)
  const maskPattern = 0;
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!isFunction[r][c]) {
        if ((r + c) % 2 === 0) {
          matrix[r][c] ^= 1;
        }
      }
    }
  }

  // 7. Write format information bits for mask 0
  const formatBits = FORMAT_INFO_M[maskPattern];
  for (let i = 0; i < 15; i++) {
    const bit = (formatBits >> i) & 1;
    // Top-left
    if (i < 6) setModule(i, 8, bit);
    else if (i === 6) setModule(7, 8, bit);
    else if (i === 7) setModule(8, 8, bit);
    else if (i === 8) setModule(8, 7, bit);
    else setModule(8, 14 - i, bit);

    // Split bottom-left and top-right
    if (i < 8) setModule(size - 1 - i, 8, bit);
    else setModule(8, size - 15 + i, bit);
  }

  return { matrix, size };
}

/**
 * Generates an SVG string representation of a QR Code.
 */
export function generateQRCodeSVG({
  text = "https://davao-tourism.vercel.app",
  size = 220,
  darkColor = "#0F172A",
  lightColor = "#FFFFFF",
  quietZone = 4
}) {
  const { matrix, size: matrixSize } = createQRMatrix(text);
  const totalModules = matrixSize + quietZone * 2;
  const svgParts = [];

  svgParts.push(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalModules} ${totalModules}" width="${size}" height="${size}" shape-rendering="crispEdges" aria-label="QR Code link to ${text}">`
  );

  // Background
  svgParts.push(`<rect width="100%" height="100%" fill="${lightColor}" />`);

  // Path of dark modules
  let pathData = "";
  for (let r = 0; r < matrixSize; r++) {
    for (let c = 0; c < matrixSize; c++) {
      if (matrix[r][c] === 1) {
        const x = c + quietZone;
        const y = r + quietZone;
        pathData += `M${x},${y}h1v1h-1z `;
      }
    }
  }

  svgParts.push(`<path d="${pathData.trim()}" fill="${darkColor}" />`);
  svgParts.push(`</svg>`);

  return svgParts.join("");
}

/**
 * Returns a base64 Data URL for the QR Code SVG.
 */
export function generateQRCodeDataUrl(options) {
  const svg = generateQRCodeSVG(options);
  const encoded = encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
}
