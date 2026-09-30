"""Crop alumni photos into square, face-centred portraits.

Reads from src/assets/alumni/original/ and writes 400x400 PNGs to src/assets/alumni/.
Run from the SIBA folder:  python scripts/crop-alumni.py

To add a new alumnus, put their photo in the original/ folder and add a line to FACES:
  "file.png": (face_x, face_y, size)
  - face_x, face_y: where the middle of the face is, in pixels of the original photo
  - size: width of the square crop in pixels (bigger = more shoulders, smaller = tighter on the face)
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "src" / "assets" / "alumni"
SOURCE = ROOT / "original"
OUTPUT_SIZE = 400
# The face sits slightly above the middle of the crop so the shoulders show below it.
FACE_HEIGHT_IN_CROP = 0.42

FACES = {
    "ahtasham.png": (100, 78, 190),
    "aqdass.png": (180, 118, 240),
    "habibullah.png": (110, 90, 230),
    "hasnain.png": (126, 75, 230),
    "luqman.png": (180, 122, 240),
    "roshan.png": (141, 85, 225),
    "rubab.png": (125, 128, 280),
    "shoukat.png": (136, 75, 225),
    "waqas.png": (202, 160, 320),
}


def crop_square(image, face_x, face_y, size):
    width, height = image.size
    size = min(size, width, height)
    left = face_x - size / 2
    top = face_y - size * FACE_HEIGHT_IN_CROP
    # Keep the square inside the photo.
    left = max(0, min(left, width - size))
    top = max(0, min(top, height - size))
    return image.crop((round(left), round(top), round(left + size), round(top + size)))


for name, (face_x, face_y, size) in FACES.items():
    image = Image.open(SOURCE / name).convert("RGB")
    portrait = crop_square(image, face_x, face_y, size).resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.LANCZOS)
    portrait.save(ROOT / name, optimize=True)
    print(f"cropped {name}")
