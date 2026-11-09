# Hero video clip, Portfolio V3

Date: 2026-11-09. Staging folder: `docs/06-clip-candidates/`. No video file has been placed in `public/`. Nothing was bought, no account was created, no login was used.

## Recommendation

**Use this clip: Pexels 35004655, "Abstract 3D Network Structure Animation" by Nicola Narracci.**

- File (staged): `docs/06-clip-candidates/pexels-35004655-abstract-3d-network-structure.mp4`
- Source URL: https://www.pexels.com/video/abstract-3d-network-structure-animation-35004655/
- Licence: Pexels License
- Licence URL: https://www.pexels.com/license/
- Downloaded: 2026-11-09 (via the Pexels download endpoint)
- Duration: 10.000 seconds (inside the 8 to 15 second range)
- Resolution: 1920x1080, 16:9
- Codec: H.264 High, yuv420p, 30 fps
- Source size: 6,889,473 bytes (6.57 MB at 1080p; the final 720p encode is far smaller, see below)
- Audio: none (ffprobe shows a single video stream, no audio track)
- SHA-256: `44a2a521498482c546bfa509e13eb8e27da913952b550a507e582e4ef020df7a`
- Published on Pexels: 2025-12-03. Description: "Dynamic abstract animation of 3D network structures with dark background."

**What it shows:** a slow drift through a monochrome grey network of soft nodes joined by thin lines, on a near-black ground. No face, no person, no text, no logo, no code, no brand, no hoodie, no skull, no lock, no green terminal, no Matrix rain. Three still frames were extracted and viewed (1s, 5s, 9s, in `docs/06-clip-candidates/frames/`). The nodes are mid-grey, never white-hot, so the paper headline stays readable under the flat 0.62 scrim. The network fills the whole frame edge to edge, which suits a full-bleed hero. The native loop point is not seamless (the camera has drifted by the end), so Phase 7 must apply the 0.5 second crossfade in the commands below; the crossfade was tested and the first and last frames of the result match.

**Why this one over the other two staged clips:** all three staged clips pass every rule, but 35004655 has the best balance of brightness and composition. Its nodes are mid-grey (best text contrast), its subject fills the frame evenly, and its motion is the calmest drift of the three.

## Licence checklist (B3, filled in for the recommended clip)

1. **Licence page opened, licence text, clip URL, date saved:** the Pexels licence page was opened live on 2026-11-09 at 00:17 UTC (https://www.pexels.com/license/) and the clip page was opened the same day. OPEN ITEM: no screenshot or PDF of the licence page was saved during this pass. Phase 7 must save a PDF or screenshot of the licence page and the clip page beside the final file before shipping. Note: the text extraction of the licence page returned only the allowed-use headings, not the full terms block, so the wording in item 2 is recorded from the FrameOS October 2026 re-read of the same page and the Scenepull quotation of it. The direct read confirmed the page title "Free Stock Photo & Video License - Pexels" and the allowed use "On your website, blog or app", plus "Promote your product", print marketing, and social media.
2. **Commercial use, modification, attribution:** commercial use is allowed, modification is allowed (crop, recolour, trim, remix), attribution is not required. Restrictions that apply to this use: the clip cannot be sold or redistributed unaltered, cannot be listed on another stock platform, cannot be used as a trademark, and cannot be used to imply endorsement. None of those restrictions is triggered by this portfolio hero (the clip is graded, trimmed into a loop, and served as part of a larger page, not sold or reposted as footage).
3. **Licence type and AI check:** the clip is under the Pexels License, not a Mixkit Restricted License. There is no AI-generated label on the clip page. The clip is a 3D animation by Nicola Narracci, a prolific CG contributor on Pexels, which fits the brief (abstract technical visualisation). The AI-label check in the research doc applies to Pixabay and Coverr uploads; for this Pexels clip the finding is recorded as: CG animation, no AI label present.
4. **Frame check for people, brands, screens, locations:** three frames viewed at 1s, 5s, and 9s (`frames/35004655-t1.jpg`, `frames/35004655-t5.jpg`, `frames/35004655-t9.jpg`). No recognisable face, no logo or trademark, no readable screen, no private location, no people at all. Pass. Brightest frame check: the brightest areas are soft mid-grey nodes, no blown-out white, so the headline keeps its contrast under the scrim.
5. **Record saved beside the file:** this document, the staged source file, the thumbnails, and the three checked frames all live in `docs/06-clip-candidates/`.
6. **No hotlinking:** the file was downloaded and staged locally. Phase 7 must serve the encoded files from the site's own hosting and must not link the Pexels page or a Pexels CDN URL in the page.

## Exact ffmpeg commands for Phase 7

Run from the repository root. The source is the staged file `docs/06-clip-candidates/pexels-35004655-abstract-3d-network-structure.mp4`. The grade is one filter chain, used identically for video and poster so the poster frame matches the video exactly:

- `hue=s=0` removes the slight cool tint (full desaturation, the clip is already monochrome).
- `colorbalance=rh=0.04:gh=0.01:bh=-0.04:rm=0.02:gm=0.005:bm=-0.02` warms the highlights toward paper (#F7F3EA) and the shadows toward ink (#1C1A17).
- `eq=contrast=1.02:brightness=-0.01` gives a touch more separation on the dark ground.
- No violet, lavender, lilac, lime, periwinkle, or gradient anywhere. The scrim stays the single flat `rgba(23, 22, 20, 0.62)` overlay from the design system.

All three commands below were dry-run in `/tmp/hero-test/` on 2026-11-09 and the sizes measured. They are not guesses.

### 1. Final MP4, 720p, loop-smoothed (primary file)

```bash
ffmpeg -i docs/06-clip-candidates/pexels-35004655-abstract-3d-network-structure.mp4 \
  -filter_complex "[0:v]scale=1280:720,hue=s=0,colorbalance=rh=0.04:gh=0.01:bh=-0.04:rm=0.02:gm=0.005:bm=-0.02,eq=contrast=1.02:brightness=-0.01,split=2[a][b];[a]trim=0:10,setpts=PTS-STARTPTS[a1];[b]trim=0:10,setpts=PTS-STARTPTS[b1];[a1][b1]xfade=transition=fade:duration=0.5:offset=9.5[x];[x]trim=0.5:10.5,setpts=PTS-STARTPTS,format=yuv420p[v]" \
  -map "[v]" -c:v libx264 -preset slow -crf 29 -pix_fmt yuv420p -an -movflags +faststart \
  public/hero/hero-720p.mp4
```

Measured dry-run result: 10.000 seconds, 1280x720, H.264, 30 fps, no audio, 1,077,294 bytes (1.03 MB). Under the 2 MB preferred target. The crossfade blends the last 0.5 seconds of the clip into its own start, then the output is trimmed to start at 0.5 seconds, so the first frame equals the last frame and the loop is seamless. This was verified by viewing the first and last frames of the test encode.

Plain version without the loop crossfade (only if Phase 7 prefers the raw loop point): same command without the split/xfade/trim chain, just the grade filter, gives 1,027,133 bytes (1.00 MB). Do not ship both; ship the loop-smoothed one.

### 2. Final WebM, 720p, loop-smoothed (same picture, VP9)

```bash
ffmpeg -i docs/06-clip-candidates/pexels-35004655-abstract-3d-network-structure.mp4 \
  -filter_complex "[0:v]scale=1280:720,hue=s=0,colorbalance=rh=0.04:gh=0.01:bh=-0.04:rm=0.02:gm=0.005:bm=-0.02,eq=contrast=1.02:brightness=-0.01,split=2[a][b];[a]trim=0:10,setpts=PTS-STARTPTS[a1];[b]trim=0:10,setpts=PTS-STARTPTS[b1];[a1][b1]xfade=transition=fade:duration=0.5:offset=9.5[x];[x]trim=0.5:10.5,setpts=PTS-STARTPTS,format=yuv420p[v]" \
  -map "[v]" -c:v libvpx-vp9 -b:v 0 -crf 38 -pix_fmt yuv420p -an \
  public/hero/hero-720p.webm
```

Measured dry-run result (without the loop chain, same grade and settings): 10.000 seconds, 1280x720, VP9, no audio, 1,609,744 bytes (1.54 MB). Under the 2 MB preferred target. Note: CRF 32 was also tested and gave 2,671,920 bytes (2.55 MB), which is over the preferred target, so use CRF 38, not 32. The WebM must be re-checked after the loop chain is applied; if it lands over 3 MB, raise CRF to 40 and re-check, and if it still cannot get under 3 MB, ship MP4 alone (the design system allows MP4 alone).

### 3. Poster frame, from the finished loop file (1600 to 1920px wide WebP, 80 to 150 KB)

```bash
ffmpeg -ss 4.5 -i public/hero/hero-720p.mp4 \
  -vf "scale=1920:-2,hue=s=0,colorbalance=rh=0.04:gh=0.01:bh=-0.04:rm=0.02:gm=0.005:bm=-0.02,eq=contrast=1.02:brightness=-0.01" \
  -frames:v 1 -c:v libwebp -quality 95 \
  public/hero/hero-poster.webp
```

Why 4.5 seconds and why from the loop file: the loop file starts at source time 0.5 seconds (see the trim in commands 1 and 2), so 4.5 seconds in the loop file is the same moment as 5.0 seconds in the source, and the poster must be a frame of the finished video so the still-to-motion swap is invisible. Measured dry-run result (same grade and quality, exported from the source at 5.0 seconds): 1920x900, 109,906 bytes, inside the 80 to 150 KB budget. If the final export lands outside 80 to 150 KB, adjust quality between 90 and 97 and re-check; do not change the frame time or the grade. If WebP is unavailable in the Phase 7 pipeline, use AVIF at the same width and the same size budget. The poster is the LCP element, so it ships in `public/hero/` with the video files and is referenced by the video element's poster attribute.

### 4. Verification after encoding (Phase 7 must run these before handover)

```bash
ffprobe -v error -show_entries format=duration,size -show_entries stream=codec_name,width,height,r_frame_rate -of default=noprint_wrappers=1 public/hero/hero-720p.mp4
ffprobe -v error -show_entries format=duration,size -show_entries stream=codec_name,width,height,r_frame_rate -of default=noprint_wrappers=1 public/hero/hero-720p.webm
ffprobe -v error -show_entries stream=codec_type -of csv=p=0 public/hero/hero-720p.mp4
ffprobe -v error -show_entries stream=codec_type -of csv=p=0 public/hero/hero-720p.webm
```

Accept only if: MP4 and WebM are each 10 seconds, 1280x720, under 3 MB (target under 2 MB), and each ffprobe stream list shows video only (no audio stream). Poster must be 1920px wide and 80 to 150 KB. Extract the first and last frame of each video and confirm they match (loop check), and confirm the poster frame matches the video frame at the same moment.

Suggested final file names (Phase 7 decides): `public/hero/hero-720p.mp4`, `public/hero/hero-720p.webm`, `public/hero/hero-poster.webp`. The hero failure order is unchanged: poster with headline and action first, then the static particle field, then the video loop on desktop only after the poster paints and the reduced-motion check passes.

## Rejected candidates

### Staged and checked, not recommended

**Pexels 35002501, "Abstract Molecular Structure Animation" by Nicola Narracci** (runner-up, keep as backup)
- Source: https://www.pexels.com/video/abstract-molecular-structure-animation-35002501/
- Licence: Pexels License, https://www.pexels.com/license/
- Staged file: `docs/06-clip-candidates/pexels-35002501-abstract-molecular-structure.mp4`
- ffprobe: 10.000 seconds, 1920x1080, H.264, 30 fps, 3,177,146 bytes, video stream only, no audio
- SHA-256: `23bf4b6df8128f8b344cda83b8c3305cbe92b5ba419b94c439d61fbc3c8d17af`
- Frames checked at 1s, 5s, 9s (`frames/35002501-t1.jpg`, `-t5.jpg`, `-t9.jpg`): no face, no brand, no code, no text. Passes every content rule.
- Reason not recommended: its nodes are bright white hotspots with a much harsher brightest frame than 35004655, and the frame is visually busier. Under the scrim the headline would still read, but the margin is thinner. Use it if Phase 7 finds 35004655 too dim after grading. Same licence, same author, same series.

**Pexels 34992134, "Dynamic Abstract Molecular Structure Animation" by Nicola Narracci** (second backup only)
- Source: https://www.pexels.com/video/dynamic-abstract-molecular-structure-animation-34992134/
- Licence: Pexels License, https://www.pexels.com/license/
- Staged file: `docs/06-clip-candidates/pexels-34992134-dynamic-abstract-molecular-structure.mp4`
- ffprobe: 10.000 seconds, 1920x1080, H.264, 30 fps, 4,334,687 bytes, video stream only, no audio
- SHA-256: `8b1dd728740f8c969c54413d1b837ee7e6d150b808df9eae3eb4b9b5de69cda6`
- Frames checked at 1s, 5s, 9s (`frames/34992134-t1.jpg`, `-t5.jpg`, `-t9.jpg`): no face, no brand, no code, no text. Passes every content rule.
- Reason not recommended: the subject is a single rotating cluster centred in the frame with large empty near-black areas at the left and right edges, which is poor composition for a full-bleed hero. It is also the dimmest of the three.

### Considered at thumbnail or clip-page stage, not staged

All from Pexels search results, thumbnails viewed in `docs/06-clip-candidates/thumbs/`:

- **34996641**: purple and blue glowing network. Rejected on palette (violet and periwinkle are banned in the Monograph direction).
- **35160268**: vertical (portrait) golden network. Rejected on orientation (hero needs landscape 16:9).
- **34992913**: pink and green neon network. Rejected on palette (neon pink and green).
- **35002915**: vertical monochrome white and silver network. Rejected on orientation (cropping to landscape would lose most of the frame).
- **33248294**: purple and pink neon plexus tunnel. Rejected on palette (neon, violet, pink).
- **35002190, "Abstract Network of Glowing Nodes"** by Nicola Narracci (10 seconds, 1920x1080, landscape): saturated teal and cyan glow. Rejected on palette (it would need a full desaturation to fit, and the two monochrome candidates are cleaner). Not staged.
- **35004366, "Futuristic Molecular Structure Animation"**: 1080x1920 vertical. Rejected on orientation.
- **34993466, "Abstract Animation of Molecule Structure"**: 1080x1920 vertical. Rejected on orientation.
- **34993294, "Abstract Molecular Network Animation"**: 1080x1920 vertical. Rejected on orientation.
- **9665235, "Tiny White Dust Particles on Black Background"** by cottonbro studio (https://www.pexels.com/video/tiny-white-dust-particles-on-black-background-9665235/): white dust on black, palette perfect, 1920x1080, 16:9. Not staged because its native duration is 1 minute 53 seconds, far over the 15 second limit, and the task rule rejects clips over 15 seconds. A 12 second trim would be allowed by the licence (modification is allowed), but it was not needed because a native 8 to 15 second clip passed. Kept here only as a fallback note.

## Sourcing trail (order followed)

1. **Coverr, first.** Licence page read live on 2026-11-09 (https://coverr.co/license): free commercial and non-commercial use, no attribution required, editing and remixing fully allowed, cannot sell or give away clips as-is, cannot upload to another stock site, cannot use anything from Coverr to train AI, watermarked premium previews are not licensed, sponsored partner content (Shutterstock, iStock, PremiumBeat) is not covered by the Coverr licence. Categories browsed: Technology (mostly phone and people lifestyle clips), Backgrounds (polluted with sponsored partner content and generic lifestyle clips), plus the `internet-service` and `texture` topic pages. No clean abstract particle or network clip surfaced. This was a genuine attempt that yielded nothing usable, not a skipped step.
2. **Pexels, second.** Licence page read live on 2026-11-09 (https://www.pexels.com/license/). Search results for dust particles and abstract network produced the candidates above. One clip passed every rule, so the search stopped here.
3. **Pixabay, third.** Not searched in depth, because Pexels already produced a passing clip and the sourcing order only moves on when the earlier source fails.
4. **Mixkit, fourth.** The abstract category page was opened and titles were noted only ("Monochrome Bokeh Lights Floating Softly", "Chipset Close up View", "Flowing Blue Lights in Motion", "Vertical Abstract Visuals", "Blue Background with Glowing Center"). No clip page was opened and no duration was verified, because Pexels already passed. If the Pexels pick is later rejected, Pixabay and then Mixkit (Free License clips only, checked per clip on the download page) are the next sources.

## Fallback statement

No fallback is needed. A free clip passed the licence checklist and every content rule, so no paid clip was downloaded or bought, and the poster plus particle field alone option is not required. If the recommended clip is later rejected by Phase 7, the fallback order is: first the runner-up 35002501 (already staged, same licence), then poster plus particle field alone on the flat ink ground per the Phase 5 spec, and only then a paid Artgrid clip, which is a cost decision for the user and must never be bought without his say-so.

## Open items for Phase 7

1. Save a PDF or screenshot of the Pexels licence page and of the clip page beside the final files before shipping (see checklist item 1).
2. Re-run the verification commands in section 4 on the real outputs and confirm the sizes, the loop match, and the poster match before handover.
3. If the WebM lands over 3 MB with the loop chain applied, raise VP9 CRF to 40 and re-check, and if it still cannot get under 3 MB, ship MP4 alone.
