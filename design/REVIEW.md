# Design and verification — 2026-10-05

## Source and working concept

User reference: `reference.jpg` (original retained at `C:/Projects/qplay/theme01.jpg`). Working Image Gen concept: `concept.png`, 976 × 1612 pixels. The supplied reference is the visual authority; the generated concept was used as an implementation guide, not a separate user-approved specification.

Visual system: deep navy `#061c49`, royal blue, cyan borders `#33d9ff`, lime accents `#b3fa22`, white header, green LINE actions, orange promotion surface. Thai Noto Sans Thai 400–800, English Outfit 500–800. Desktop max content width 1180px; 6/3/2 game columns at desktop/tablet/mobile. Header → hero → service rail → games → digital cards and promotion → contact with QR → footer.

## Verification

- `npm run lint`, `npm run typecheck`, `npm run build`: passed.
- Production `next start` served the page at `http://127.0.0.1:3000/`.
- Used Codex In-app Browser for visual review, DOM checks and clicks. No external Playwright fallback.
- Tested widths 320, 390, 768, 976 and 1440px: no horizontal document overflow.
- Captured the concept-native viewport at 976 × 1612 and inspected the complete native-width render in `native.jpg` with `view_image` alongside `concept.png`. Also inspected `preview.jpg` (1440 × 960 desktop viewport) and `mobile.jpg` (390px mobile full page). Scrollbars account for the screenshot's content width being slightly smaller than the requested viewport.
- Confirmed all 15 content images loaded after network completion. Early lazy-loading observations were not treated as final image failures.
- Opened/closed the mobile menu, selected the gift-card menu entry and verified its `#cards` destination and menu dismissal.
- Clicked the hero LINE link and observed a new browser tab at `https://line.me/R/ti/p/@901mvpnu?oat_content=qr` with the Add LINE friend page.
- Verified the phone link's exact URI `tel:0982341377`; an actual phone call was not placed.
- Every external product/contact link points to the verified LINE URL and has `noopener noreferrer`.
- QR decoding and HTTP redirects confirmed both user-supplied QR sources lead to `@901mvpnu`.

## Visual comparison ledger

| Comparison | Reference/concept | Final render and action |
| --- | --- | --- |
| Header and brand | White header, navy brand, navigation, green LINE | Preserved composition; exact requested `Kriton LtD.` overrides generated wordmark. Mobile has a functioning menu. |
| Hero hierarchy | Left Thai headline, blue/yellow emphasis, green CTA, game characters right | Preserved hierarchy and palette. Generated standalone hero art; adjusted desktop crop to preserve hair and faces. |
| Copy | Thai headings, LINE ordering | Hero copy and CTAs match the working brief. Replaced speculative service claims with direct contact language. |
| Game catalogue | Six illustrated cards with titles and top-up CTA | Preserved order and imagery from supplied reference. Live HTML links and accessible product names. |
| Digital cards | Six brand tiles in 3 × 2 grid | Replaced rough typographic/SVG substitutes with original product artwork; live inquiry links under each tile. |
| Promotion | Orange chest/diamond art beside cards | Generated independent matching art; no invented prices, discounts or percentages. |
| Contact | Phone + LINE + QR on navy | Exact phone and verified OA, original official QR. Removed floating chat control that could overlap QR/content. |
| Responsive | Desktop layout adapted to touch screens | Six, three and two game columns; stacked offers and contact on mobile; readable typography and no horizontal overflow. |

The final implementation was visually checked against the supplied reference and working concept for layout, copy, typography, palette, imagery and responsive behavior. It is an adaptation, rather than a pixel-identical copy: new hero/promotion artwork, additional whitespace, exact user brand, native inquiry labels, a simpler contact background, and icons from Lucide. No remaining functional or clipping issues were observed in the checked browser sizes. Human approval and production deployment have not occurred.

Above-the-fold copy review: requested brand is exact; headline, subtitle and hero actions match the working brief. Service rail label intentionally reads `สอบถามได้โดยตรง` instead of the generated concept's unverified `สอบถามได้ตลอด`. No business hours, legal certification, guaranteed instant service or automatic-fulfillment claims were carried over.

## Generated assets

Built-in Image Gen used, no API key or CLI generation. Final project assets: `public/images/hero.webp` and `public/images/promo.webp`; working concept: `design/concept.png`. Game and card thumbnails are prepared from the user's supplied reference. Text, navigation and actions are HTML, not a screenshot masquerading as a page.

Hero generation prompt:

> High quality 3D anime game fantasy marketing banner artwork, ultra wide horizontal landscape composition 1920x960. Intended standalone HERO ART for navy Thai online gaming top-up landing page. Very dark deep navy blue empty atmospheric left 42 percent to hold real HTML headline and buttons (do not render text). Heroic handsome spiky blond young adult male warrior in shiny black and electric blue armor central-right, pink haired young adult cat-ear anime heroine immediately beside him with detailed expressive face and violet-black costume, mysterious dark helmeted battle royale soldier far right. Three characters visible from waist up, action poses, high quality game key visual rendering, dramatic cyan blue rim light, luminous electric blue crystalline diamonds floating in foreground with a few polished gold game coins, dynamic blue energy slashes, small lime green angled racing accent near outer edge, dark cobalt cinematic environment, nuanced gradients, electric blue particles, strong depth, bright character faces, sophisticated composition rather than clutter. Artwork fills whole canvas, full bleed; leave left side dark and quiet. No smartphone, no words, no logo, no interface, no watermark. Preserve characters sharp and highly detailed, not generic stock. Match vibrant blue/lime/orange gaming aesthetic in reference.

Promotion generation prompt:

> Standalone polished fantasy game promotional artwork, horizontal 3:2 composition. An open luxurious gold treasure chest overflowing with luminous blue diamond crystals at lower center-left, a few floating golden coins and a single purple gift box with golden ribbon at lower right. Vivid deep orange background fading darker burgundy at upper left, golden light streaks, nuanced rich cinematic lighting, high quality stylized 3D game render, sharp luminous cyan diamonds. Composition leaves top 35 percent and right upper area empty quiet orange for real HTML Thai heading and green LINE button. No text, no percentage symbol, no logos, no watermark, no interface. Match electric blue/lime/orange Thai gaming top up reference artwork. Intended asset for rectangular website promotional section, orange full bleed surface with chest art in bottom half.
