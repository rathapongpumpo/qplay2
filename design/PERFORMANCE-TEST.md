# Production performance check — 2026-10-05

Live URL: https://kriton.vercel.app/

Optimized source commit: `b9563938f5e6bb47882d6dadda182c00bd9b68b5`.

## What was measured

The original page loaded 14 font files and requested the hero at quality 90. The initial HTML was already served from Vercel's edge cache; one direct request returned its first byte in 0.185 seconds. This supports reducing initial assets rather than moving servers or adding application infrastructure.

## Change

- Keep the Noto Sans Thai and Outfit families, using three variable WOFF2 subsets instead of separate files for every font weight.
- Preload these local fonts with `next/font/local` and keep `font-display: swap`.
- Use hero quality 75 with responsive sizes, preload, and `fetchPriority="high"`.
- Preserve content, layout, contact links, and the supplied/generated artwork.

## Before and after on the actual Vercel URL

Both runs used Lighthouse CLI, headless Chrome, the default mobile profile and simulated throttling. Each is one laboratory run, not a field-data percentile or a promise about every user's network.

| Metric | Before | After |
| --- | ---: | ---: |
| First Contentful Paint | 1.70 s | 0.97 s |
| Largest Contentful Paint | 2.95 s | 2.41 s |
| Initial transferred data | 602,439 bytes | 497,721 bytes |
| Font requests | 14 | 3 |
| Font transfer | 157,038 bytes | 90,947 bytes |
| Mobile hero transfer (750px) | 88,871 bytes | 50,881 bytes |
| Total Blocking Time | 24.5 ms | 45 ms |
| Cumulative Layout Shift | 0.0054 | 0 |
| Lighthouse performance score | 94 | 94 |

Initial content appeared approximately 43% sooner; LCP improved approximately 18%. Transferred bytes fell approximately 17%. The aggregate score remained 94; the change improves loading metrics rather than every individual metric. Total Blocking Time remained low in both runs.

## Verification

- ESLint, TypeScript and production build passed; production dependency audit found 0 vulnerabilities.
- Local browser validation confirmed three loaded font faces/preloads, hero quality 75 and high fetch priority, and no missing images.
- Tested widths 320, 390, 768, 976 and 1440px without horizontal overflow.
- Mobile menu opened and selecting contact closed it and navigated to `#contact`.
- After the Git push, Vercel deployment `qplay2-86bls0l07-ppoptimus-projects.vercel.app` reached Ready and was assigned to `kriton.vercel.app`.
- Actual production browser verification confirmed three font preloads, quality-75 hero, all 15 images loaded, exact LINE and phone URIs, and no browser console errors.
- `performance-preview.jpg` is a screenshot of the updated live production page, inspected against the preceding implementation screenshot.

The earlier `RUNTIME-TEST.md` records the initial implementation before this optimization.
