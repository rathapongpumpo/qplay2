# Runtime test before GitHub push — 2026-10-05

Result: **PASS** for the landing page's implemented functionality.

Tested the real production page at `http://127.0.0.1:3000/` with Codex In-app Browser, using a new browser tab to isolate console output.

| Check | Result |
| --- | --- |
| ESLint | PASS |
| TypeScript | PASS |
| Production build | PASS, static landing page generated |
| Production dependency audit | PASS, 0 vulnerabilities with `npm audit --omit=dev` |
| Home HTTP response | 200 |
| Optimized hero image, quality 90 | 200 |
| Official LINE QR image | 200 |
| Unknown route | 404 |
| Rendered content | Correct title, one H1, six game links, six gift-card links |
| Internal anchor targets | All targets exist |
| Desktop navigation | Clicked เติมเกม; destination `#games` |
| Mobile navigation | Menu opens with `aria-expanded=true`; choosing ติดต่อเรา reaches `#contact` and closes the menu |
| Responsive widths | 320, 390, 768, 976, 1440px; no horizontal overflow |
| Images | All 15 images completed loading with nonzero natural width |
| External links | All 19 product/contact links use the verified LINE URL |
| LINE click | Hero CTA opens Add LINE friend at `https://line.me/R/ti/p/@901mvpnu?oat_content=qr` |
| Phone URI | Exact `tel:0982341377` |
| Browser console | No warning or error entries in the isolated test tab |

Fresh desktop screenshot: `design/preview.jpg`. Mobile and full-page visual evidence from the completed implementation: `design/mobile.jpg`, `design/native.jpg`.

No message was sent to LINE and no actual phone call was placed. This is local production-runtime verification; Vercel deployment and physical-device review are separate and have not been performed. The ESLint development dependency advisory remains documented in the project README.
