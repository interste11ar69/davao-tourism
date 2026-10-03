#!/usr/bin/env python3
"""Download and resize source-registered photos used by the guide.

Each image source and reuse status is recorded in docs/SOURCES.md. Requires Pillow.
"""
from io import BytesIO
from pathlib import Path
import sys
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
    'eden-nature-park.webp': 'Eden Nature Park panorama.jpg',
    'jacks-ridge.webp': 'Davao.JPG',
    'seda-abreeza.webp': 'Seda Hotel Davao - panoramio (2).jpg',
    'park-inn.webp': 'SM Lanang Premier Fountain Court and Park Inn Davao - panoramio.jpg',
}
VENUE_IMAGES = {
    'dusit-thani.webp': ('https://www.dusit.com/dusitthani-residencedavao/wp-content/uploads/sites/20/2026/04/dusit-thani-residence-davao-exterior-scaled.jpg', 1200),
    'acacia-hotel.webp': ('https://acaciahotelsdavao-com.b-cdn.net/wp-content/uploads/2024/09/FACADE-PORTRAIT-1.jpg', 1000),
    'grand-regal.webp': ('https://tourism.davaocity.gov.ph/wp-content/uploads/2022/05/GRAND-REGAL.jpg', 1000),
    'aeon-suites.webp': ('https://bookandlink-webku-assets.s3.ap-southeast-1.amazonaws.com/webku/listing/6aa8fcd192bae_1789459665.jpg', 1000),
    'waterfront-insular.webp': ('https://www.waterfronthotels.com.ph/wp-content/uploads/2018/06/facade_hm3.jpg', 1200),
    'inspiria-abreeza.webp': ('https://cf.bstatic.com/xdata/images/hotel/max1024x768/440922290.jpg?hp=1&k=b26836ccb1097d08726c2e76cbe72582e141c7a2f3ef98ef6b50e40579cb243d&o=', 1000),
    'blue-lotus.webp': ('https://www.bluelotushotel.com/wp-content/uploads/2021/09/lobby-header-03sep2021.jpg', 1200),
    'pinnacle-hotel.webp': ('https://assets.cdn.filesafe.space/FO8welDwwCmHOf7i4Qab/media/69d78202d7871cddf7c02f7f.jpg', 1200),
    'apo-view.webp': ('https://tourism.davaocity.gov.ph/wp-content/uploads/2022/05/APO-VIEW.jpg', 1000),
    'marina-tuna.webp': ('https://tourism.davaocity.gov.ph/wp-content/uploads/2019/09/MARINA.jpg', 1000),
    'bistro-rosario.webp': ('https://tourism.davaocity.gov.ph/wp-content/uploads/2022/06/ROS.jpg', 1000),
    'purge-coffee.webp': ('https://tourism.davaocity.gov.ph/wp-content/uploads/2022/05/purge.jpg', 1000),
    'green-coffee.webp': ('https://tourism.davaocity.gov.ph/wp-content/uploads/2019/08/56.jpg', 1200),
    'davao-famous.webp': ('https://static.wixstatic.com/media/982a2d_03557b791cbf47589b7c88fe45604305~mv2.jpg', 1200),
    'totsys.webp': ('https://eatsmejax.com/wp-content/uploads/2024/05/20240428_125428.jpg?w=1024', 1000),
    'barok.webp': ('https://live.staticflickr.com/65535/54410663340_ec58372f10_w.jpg', 800, 'https://www.davaofoodtrips.com/'),
    'capris.webp': ('https://cf-images.assettype.com/sunstar/2025-07-12/x76hog74/RJL10-1.jpg?auto=format%2Ccompress&w=1024', 1000),
    'la-flee.webp': ('https://eatsmejax.com/wp-content/uploads/2025/04/20250404_211054.jpg?w=1024', 1000),
    'atcurbside.webp': ('https://i0.wp.com/kapediaries.com/wp-content/uploads/2023/09/ATCURBSIDE.jpg?resize=748%2C748&ssl=1', 900),
    'robata.webp': ('https://i0.wp.com/davaofoodtographer.com/wp-content/uploads/2023/01/Robata-Davao-scaled.jpg?fit=1200%2C900&ssl=1', 1100),
    'tiny-kitchen.webp': ('https://www.wheninmanila.com/wp-content/uploads/2014/04/Tiny-Kitchen-and-Dulce-Vida-Where-Spanish-Cuisine-and-Delectable-Dessert-Creations-make-a-Delightful-Davao-City-Getaway-Facade.jpg', 1000),
    'black-scoop.webp': ('https://ak-d.tripcdn.com/images/1mi58224x8txrs1uh0027_W_640_0_R5_Q80.jpg?proc=source%2Ftrip', 800),
    'lara-mia.webp': ('https://static.where-e.com/Philippines/Davao_Region/Talomo/Lara-Mia-Caf-Bistro_8b8a37ca43fc5cb37ac4981355ca1dbf.jpg', 1000),
    'blarneys.webp': ('https://eatsmejax.com/wp-content/uploads/2025/11/copyofcopyofcopyofgratefulbread_20251110_114909_0000.png?w=1024', 1000),
    'hygge-coffee.webp': ('https://live.staticflickr.com/65535/54776320669_b885c88e2e_w.jpg', 800, 'https://www.davaofoodtrips.com/'),
    'daily-dose.webp': ('https://images.deliveryhero.io/image/fd-ph/Products/50945864.jpg?height=900&width=900', 900),
}

def main():
    DEST.mkdir(parents=True, exist_ok=True)
    supplied = DEST / 'philippine-eagle-center.webp'
    if not supplied.is_file():
        raise SystemExit('Restore the owner-supplied philippine-eagle-center.webp from Git or the original attachment before fetching images.')
    print('philippine-eagle-center.webp: preserving owner-supplied photo')
    targets = dict(IMAGES)
    targets.update({filename: (f'https://commons.wikimedia.org/wiki/Special:Redirect/file/{quote(title.replace(" ", "_"))}?width=1200', 1000) for filename, title in COMMONS_FILES.items()})
    targets.update(VENUE_IMAGES)
    for filename, details in targets.items():
        url, max_width, *referer = details
        out = DEST / filename
        if out.exists() and '--refresh' not in sys.argv:
            print(f'{filename}: already present')
            continue
        headers = {'User-Agent': 'MadayawDavaoStudentGuide/1.0 (image attribution in docs/SOURCES.md)'}
        if referer:
            headers['Referer'] = referer[0]
        request = Request(url, headers=headers)
        with urlopen(request, timeout=30) as response:
            raw = response.read()
        with Image.open(BytesIO(raw)) as opened:
            image = ImageOps.exif_transpose(opened).convert('RGB')
            if image.width > max_width:
                image.thumbnail((max_width, 10000), Image.Resampling.LANCZOS)
            image.save(out, 'WEBP', quality=76, method=6)
            print(f'{filename}: {image.width}x{image.height}, {out.stat().st_size:,} bytes')

if __name__ == '__main__':
    main()
