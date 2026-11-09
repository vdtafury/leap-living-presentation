#!/usr/bin/env python3
"""Optimise the Figma exports into web-ready JPEGs for the presentation site."""
from PIL import Image
import os

SRC = "/home/vdta/Desktop/figma"
OUT = "/home/vdta/Desktop/leap-presentation/assets/screens"
os.makedirs(OUT, exist_ok=True)

FILES = {
    "LEAP LIVING — Homepage/Desktop.png": "home-desktop",
    "Home — Mobile.png": "home-mobile",
    "02 — About Page/Desktop.png": "about-desktop",
    "About — Mobile.png": "about-mobile",
    "03 — Buy Page/Desktop.png": "buy-desktop",
    "03 — Buy Page/Tablet.png": "buy-tablet",
    "03 — Buy Page/Mobile.png": "buy-mobile",
    "Rent — Desktop.png": "rent-desktop",
    "Rent — Mobile.png": "rent-mobile",
    "Sell — Desktop.png": "sell-desktop",
    "Sell — Mobile.png": "sell-mobile",
    "Contact — Desktop.png": "contact-desktop",
    "Contact — Mobile.png": "contact-mobile",
    "Advanced filters/Expanded options & USD state.png": "state-filters-advanced",
    "Rent — Expanded lease filters and monthly pricing.png": "state-filters-lease",
    "Rent — Private tour drawer.png": "state-tour-drawer",
    "Rent — Private tour drawer/Mobile.png": "state-tour-drawer-mobile",
    "Sell — Confidential owner details.png": "state-owner-details",
    "Sell — Confidential owner details/Mobile.png": "state-owner-details-mobile",
    "Sell — Sale timeline and privacy.png": "state-sale-timeline",
    "Sell — Sale timeline and privacy/Mobile.png": "state-sale-timeline-mobile",
    "Sell — Submission and confirmation.png": "state-submission",
    "Contact — Validation, loading and confirmation.png": "state-contact-validation",
    "Buyer enquiry/Private dossier drawer.png": "state-dossier-drawer",
    "NDA & Buyer Profile/Private portfolio access.png": "state-nda-access",
    "Buy catalogue/No matching properties.png": "state-buy-empty",
}

# Per-breakpoint width caps (never upscale).
CAPS = {"desktop": 1440, "tablet": 900, "mobile": 900, "state": 1200}

total_before = total_after = 0
for src, slug in FILES.items():
    path = os.path.join(SRC, src)
    img = Image.open(path).convert("RGB")
    w, h = img.size
    cap = CAPS["mobile"] if "mobile" in slug else CAPS["tablet"] if "tablet" in slug else CAPS["state"] if slug.startswith("state") else CAPS["desktop"]
    if w > cap:
        img = img.resize((cap, round(h * cap / w)), Image.LANCZOS)
    out = os.path.join(OUT, slug + ".webp")
    img.save(out, "WEBP", quality=84, method=6)
    b, a = os.path.getsize(path), os.path.getsize(out)
    total_before += b
    total_after += a
    print(f"{slug:32s} {w}x{h} -> {img.size[0]}x{img.size[1]}  {b//1024}K -> {a//1024}K")

print(f"\nTOTAL {total_before//1024//1024}MB -> {total_after//1024//1024}MB ({total_after*100//total_before}%)")
