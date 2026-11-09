# Hero video licence record

**Clip:** Dynamic abstract molecular structure, Pexels video 34992134
**Author:** Nicola Narracci
**Source URL:** https://www.pexels.com/video/dynamic-abstract-molecular-structure-34992134/
**Licence:** Pexels Licence
**Download date:** 9 November 2026 (source files in `docs/06-clip-candidates/`, graded and shipped the same day)
**Files shipped:**
- `public/video/hero-loop.mp4` (798,832 bytes, 1280 by 720, 10 seconds, 30 fps, H.264, no audio track)
- `public/video/hero-loop.webm` (1,071,516 bytes, 1280 by 720, 10 seconds, 30 fps, VP9, no audio track)
- `public/images/hero-poster.webp` (100,850 bytes, 1920 by 1080, frame at t=5s from the graded clip)

## Licence terms, as read

Pexels Licence, read at https://www.pexels.com/license/ on 9 November 2026, and summarised in `docs/02-ux-video-research.md` section B3: free commercial and personal use, no attribution required, clips may be modified. The clip may not be sold unaltered, redistributed as-is on another stock platform, used as part of a trademark or business name, or used to imply a person or brand endorses the product. All Pexels videos are published without audio. Attribution is not required, so no credit line is needed on the site. Credit is recorded here for the record: video by Nicola Narracci on Pexels.

## Checklist result (section B3 of `docs/02-ux-video-research.md`)

1. Licence page for the specific clip: confirmed directly on 9 November 2026. The clip page was fetched in full and shows "Free download" and the licence label "Free", video by Nicola Narracci, 1920x1080, 16:9, duration 0:10, 30 fps, dated Nov 30, 2025, description "Animated abstract molecular structure with elegant movement and flow." The earlier fetch timeout in the clip worker's pass is superseded by this direct read. No further re-check needed before shipping.
2. Commercial use allowed, modification allowed, no attribution required: yes.
3. Free Licence, not Restricted, not AI generated: Pexels clip, no AI generated label shown on the sibling pages in the same series.
4. Frame check: frames at 1, 5, and 9 seconds checked. No recognisable face, no readable logo or trademark, no readable screen, no private location.
5. Record saved beside the file: this file.
6. Not hotlinked: downloaded, graded, and stored in the project.

## Grade applied

Filter chain: `scale=1280:720` (video) or `scale=1920:1080` (poster), `eq=brightness=-0.06:saturation=0.45:contrast=0.95`, `colorbalance=rs=0.06:bs=-0.10`. Encode: MP4 H.264, slow preset, CRF 30, 30 fps, no audio track, faststart. WebM VP9, CRF 38, 30 fps, no audio track. Poster: WebP quality 100 at t=5s.

## Verification

ffprobe on the shipped files, 9 November 2026: MP4 duration 10.000000 seconds, 1280 by 720, 30 fps, one video stream only, no audio stream, 798,832 bytes, bit rate 639,065. WebM duration 10.000000 seconds, 1280 by 720, 30 fps, one video stream only, no audio stream, 1,071,516 bytes, bit rate 857,212. Poster 1920 by 1080 WebP, 100,850 bytes.

SHA-256:
- hero-loop.mp4: 6faade6387b9427947d4a8374ad16a060136a5e5e8a4a5f1cb9644c10ed888a1
- hero-loop.webm: 77abab0ac07dafbf7a4b486ad6a68d9d5651d539ef2be4024ca54302a626299c
- hero-poster.webp: 93440660a14bb02e05cbfd3c004213570bb869ecbf525d4c946096fdfafbf6c5

## Scrim contrast test

Flat scrim `rgba(23, 22, 20, 0.62)`, paper text `#F3EFE5`. Graded clip, one frame per second: mean luminance 9.9 to 12.9, 99th percentile 83 to 101. Brightest frame scrimmed gives paper text contrast 9.61:1, poster alone 13.35:1 at the 90th percentile grey. Both pass AAA for normal text. Full detail in `docs/06-clip-candidates/CLIP_SHORTLIST.md`.
