# Hero clip shortlist, Phase 6

**Date:** 9 November 2026
**Direction:** Monograph, hero composition in `docs/DESIGN_SYSTEM.md`
**Outcome:** a free clip passed the checklist and was chosen. No paid clip was bought. The fallback (poster plus particle field alone) was not needed.

## How the shortlist was built

1. Coverr was checked first, by search. No Coverr clip was returned that matched the brief (abstract technical visualisation, slow, dark, no neon colour), so the search moved to Pexels, the next source in the order set by the design system.
2. Nine Pexels stills in `docs/06-clip-candidates/thumbs/` were inspected. Three of them had already been downloaded as full clips by a previous partial attempt, with frames at 1, 5, and 9 seconds in `docs/06-clip-candidates/frames/`. Those three were verified in full. The other six were judged from their 500px thumbs only, and their duration and resolution are not stated here because they were not downloaded and must not be guessed.
3. Every frame checked for the three full clips showed no face, no hoodie, no dark room, no skull, no mask, no lock icon, no readable code, and no visible brand.
4. Brightness was measured, not guessed. Luminance (0 to 255) was computed on the extracted frames with Python and Pillow. The scrim test uses the flat scrim `rgba(23, 22, 20, 0.62)` from the design system, composited over the brightest frame, then contrast of paper text `#F3EFE5` against the scrimmed frame.

## Ranked candidates

### 1. CHOSEN, Pexels 34992134, Dynamic abstract molecular structure

- **Source URL:** https://www.pexels.com/video/dynamic-abstract-molecular-structure-34992134/
- **Author:** Nicola Narracci, on Pexels
- **Licence:** Pexels Licence, free commercial and personal use, no attribution required, modification allowed. The licence page https://www.pexels.com/license/ was read on 9 November 2026 and states free use on a website. The clip pages for the two sibling clips by the same author (35002501 and 35004655, same series, same upload date 1 December 2025) show the licence label "Free". See the licence gap note below.
- **Duration:** 10 seconds (inside the 8 to 15 second brief)
- **Resolution:** source 1920 by 1080, 30 fps. Shipped graded at 1280 by 720, 30 fps.
- **File size:** source 4,334,687 bytes (4.2 MB). Shipped MP4 798,832 bytes (781 KB). Shipped WebM 1,071,516 bytes (1.1 MB). Both under the 3 MB budget, MP4 under the 2 MB preference.
- **Why it fits:** the darkest of the three full clips, so it is the safest under the scrim. Slow rotating grey molecular network on a near black ground, muted, no colour that fights the Monograph palette. After grading (saturation 0.45, brightness minus 0.06, contrast 0.95, warm colour balance, blue reduced) the navy tint is gone and the nodes read warm grey. The left half of the poster frame is almost empty dark ground, which is where the copy block sits (columns 1 to 7). The structure sits centre right, behind the challenge panel area, and it echoes the particle field that Phase 7 draws on top.
- **Scrim contrast test:** graded clip, one frame per second, mean luminance 9.9 to 12.9, 99th percentile 83 to 101. Brightest frame (t=4s) 99th percentile 101. Poster frame at t=5s: mean luminance 13.0, 90th percentile 72. Compositing the scrim over the brightest measured grey (121 on the ungraded frame) gives a scrimmed grey of about 60, and paper text `#F3EFE5` against that grey is 9.61:1, which passes AAA for normal text (7:1) and AA (4.5:1) with margin. On the poster alone the same test gives 13.35:1 at the 90th percentile grey. Headline text stays readable on the poster alone and on the brightest frame. Note: ink text `#1C1A17` would fail on this dark hero (about 1.1:1), which is correct, because hero copy is paper text, not ink.
- **Trade-offs, honestly:** the clip is not a pixel perfect seamless loop. First frame mean luminance 10.8, last frame 11.2, mean absolute frame difference 6.2 out of 255. The jump at the loop point is small because the motion is slow and the image is dark, but a careful viewer may notice the structure reset. The footage is also a familiar Pexels molecular render, used widely, so it is not unique. The grading and the owned particle field on top are what make it feel owned, not the clip alone. The source is 1080p, so the 720p ship is a downscale, not a native 720p master.
- **Shipped as:** `public/video/hero-loop.mp4`, `public/video/hero-loop.webm`, poster `public/images/hero-poster.webp` (frame at t=5s, 1920 by 1080, 100,850 bytes, inside the 80 to 150 KB poster budget).

### 2. Runner-up, Pexels 35004655, Abstract 3D network structure

- **Source URL:** https://www.pexels.com/video/abstract-3d-network-structure-animation-35004655/
- **Author:** Nicola Narracci, on Pexels
- **Licence:** Pexels Licence, free commercial and personal use, no attribution required. Clip page read 9 November 2026, licence label shown as "Free", dimensions 1920 by 1080, duration 0:10, date 1 December 2025, 30 fps.
- **Duration:** 10 seconds
- **Resolution:** source 1920 by 1080, 30 fps
- **File size:** source 6,889,473 bytes (6.6 MB, over budget before encoding). Graded 720p test encode (same grade as the chosen clip, H.264 CRF 30, slow preset) was 925,922 bytes (906 KB), which would have passed the budget after encoding.
- **Why it fits, and why it lost:** same grey molecular family, no face, no brand, no readable code, slow motion. Mean luminance 15.1 to 17.2, close to the chosen clip. It lost on brightness at the highlights: 99th percentile 143 to 152, against 111 to 121 for the chosen clip, so its brightest nodes are visibly hotter and the scrim margin is thinner. Its graded encode was also larger (906 KB against 781 KB). It is a sound backup if the chosen clip ever needs replacing.

### 3. Rejected on contrast, Pexels 35002501, Abstract molecular structure

- **Source URL:** https://www.pexels.com/video/abstract-molecular-structure-35002501/
- **Author:** Nicola Narracci, on Pexels
- **Licence:** Pexels Licence, free commercial and personal use, no attribution required. Clip page read 9 November 2026, licence label shown as "Free", dimensions 1920 by 1080, duration 0:10, date 1 December 2025, 30 fps.
- **Duration:** 10 seconds
- **Resolution:** source 1920 by 1080, 30 fps
- **File size:** source 3,177,146 bytes (3.1 MB, over budget before encoding)
- **Why it fails:** the brightest of the three by a wide margin. Mean luminance 33.7 to 39.1, 99th percentile 249 to 250, with clipped white hotspots in the centre of several nodes. Even after grading and darkening, those hotspots would sit directly behind the headline and the challenge panel, and the scrim would have to darken further to keep the same margin as the chosen clip. The composition is also the most spread out of the three, with bright nodes at the frame edges, so there is no quiet dark area for the copy block. Rejected, not encoded for shipping.

## Other stills inspected, rejected from the thumb alone

These six were not downloaded, so no duration, resolution, or file size is claimed for them. Each was rejected on art direction from its 500px thumb, which is enough to rule it out without a download.

- **Pexels 33248294:** pink and violet neon network on purple ground. Violet and neon are both refused by the Monograph palette. Rejected.
- **Pexels 34992913:** purple and pink spheres with green neon lines. Neon colour, purple ground. Rejected.
- **Pexels 34996641:** blue and violet glowing molecular structure. Violet and blue neon. Rejected.
- **Pexels 35002190:** teal and cyan glowing network, bright lines across the whole frame. The colour fights the warm paper palette and the bright lines leave no quiet area for copy. Rejected.
- **Pexels 35002915:** portrait orientation (500 by 889 thumb), bright white hotspots, same bright family as 35002501. Portrait fails the full width hero plate. Rejected.
- **Pexels 35160268:** portrait orientation (500 by 889 thumb), gold network with a bright central hotspot. Portrait fails the full width hero plate, and the hotspot sits where the headline would go. Rejected.

## Licence checklist result (B3, per clip, for the chosen clip)

1. Clip page opened: confirmed directly by the coordinator on 9 November 2026. The page was fetched in full and shows "Free download" and the licence label "Free", video by Nicola Narracci, 1920x1080, 16:9, duration 0:10, 30 fps, dated Nov 30, 2025. The earlier fetch timeout in this pass is superseded. No further re-check needed before shipping.
2. Commercial use allowed, modification allowed, no attribution required: yes, per the Pexels Licence as read on https://www.pexels.com/license/ and per the research in `docs/02-ux-video-research.md` section B3.
3. Not Mixkit, not AI generated: not applicable. This is a Pexels clip, and no AI generated label is shown on the sibling pages in the same series.
4. Every frame checked for a recognisable face, readable logo or trademark, readable screen, or private location: checked on frames at 1, 5, and 9 seconds, plus the graded poster frame. None present. No model or property release is needed for this abstract render, and no release is passed by Pexels in any case.
5. Record saved beside the file: `public/video/LICENSE.md`.
6. Not hotlinked: the file was downloaded, graded, and stored in the project, served from the site's own hosting.

## Licence gap, stated plainly

**Licence gap, closed 9 November 2026:** the specific clip page for 34992134 was fetched in full by the coordinator and shows the licence label "Free" (see checklist item 1 above). No replacement needed. Runner-up 35004655 remains the fallback only if the licence ever changes.

## Fallback, not needed

The fallback (poster plus particle field alone, or a paid Artgrid clip as a cost decision for the user) was not needed, because a free clip passed. Nothing was bought. No Artgrid clip was downloaded or licensed.

## Grade applied to the shipped files

Filter chain, identical for MP4, WebM, and poster: `scale=1280:720` (video) or `scale=1920:1080` (poster), `eq=brightness=-0.06:saturation=0.45:contrast=0.95`, `colorbalance=rs=0.06:bs=-0.10`. This desaturates the navy tint, warms the grey toward the Monograph paper ground, and darkens slightly for the scrim. Encode: MP4 H.264, slow preset, CRF 30, 30 fps, no audio track, faststart. WebM VP9, CRF 38, 30 fps, no audio track. Poster: WebP quality 100 at t=5s, chosen because quality 75 gave only 22 KB and quality 100 gave 100,850 bytes, inside the 80 to 150 KB poster budget. The poster is a frame of the chosen clip, never a separate stock still.
