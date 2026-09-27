#!/usr/bin/env python3
"""Download and resize credited Wikimedia Commons images used by the guide.

Each source and license is recorded in docs/SOURCES.md. Requires Pillow.
"""
from io import BytesIO
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import quote
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'assets' / 'images'
IMAGES = {
    'hero-davao.webp': ('https://upload.wikimedia.org/wikipedia/commons/2/23/Davao_Bajada-Buhangin_skyline_Shrine_Hills_%28Davao_City%3B_04-19-2024%29.jpg', 1600),
    'kadayawan.webp': ('https://upload.wikimedia.org/wikipedia/commons/3/36/Indak-indak_sa_Kadalanan_06.JPG', 1200),
    'peoples-park.webp': ('https://upload.wikimedia.org/wikipedia/commons/6/67/People%27s_Park%2C_Davao_City%2C_Philippines_%281_May_2010%29.jpg', 1000),
    'roxas-night-market.webp': ('https://upload.wikimedia.org/wikipedia/commons/a/a6/Roxas_Ave_Night_Market_001.jpg', 1000),
    'crocodile-park.webp': ('https://upload.wikimedia.org/wikipedia/commons/1/1e/Pangil_at_Davao_Crocodile_Park.jpg', 1000),
}
COMMONS_FILES = {
    'philippine-eagle-center.webp': 'Philippine Eagle at the Philippine Eagle Center 003.jpg',
    'eden-nature-park.webp': 'Eden Nature Park panorama.jpg',
    'jacks-ridge.webp': 'Davao.JPG',
    'marina-tuna-context.webp': 'Fresh Seafood at davao city.jpg',
    'bistro-rosario-context.webp': 'Davao Bajada top view F. Torres (Davao City; 04-21-2024).jpg',
    'purge-coffee-context.webp': 'Davao MacArthur Highway, Matina with Mount Apo view (Davao City; 04-21-2024).jpg',
    'green-coffee-context.webp': 'National Road, Davao JP Laurel Avenue Bajada (Davao City; 04-22-2024).jpg',
    'apo-view-context.webp': 'Davao Poblacion CM Recto skyline Mesatierra (Davao City; 04-22-2024).jpg',
    'dusit-context.webp': 'Shrine Hills view from SM Lanang - panoramio.jpg',
}

def main():
    DEST.mkdir(parents=True, exist_ok=True)
    targets = dict(IMAGES)
    targets.update({filename: (f'https://commons.wikimedia.org/wiki/Special:Redirect/file/{quote(title.replace(" ", "_"))}?width=1200', 1000) for filename, title in COMMONS_FILES.items()})
    for filename, (url, max_width) in targets.items():
        request = Request(url, headers={'User-Agent': 'MadayawDavaoStudentGuide/1.0 (image attribution in docs/SOURCES.md)'})
        with urlopen(request, timeout=30) as response:
            raw = response.read()
        with Image.open(BytesIO(raw)) as opened:
            image = ImageOps.exif_transpose(opened).convert('RGB')
            if image.width > max_width:
                image.thumbnail((max_width, 10000), Image.Resampling.LANCZOS)
            out = DEST / filename
            image.save(out, 'WEBP', quality=76, method=6)
            print(f'{filename}: {image.width}x{image.height}, {out.stat().st_size:,} bytes')

if __name__ == '__main__':
    main()
