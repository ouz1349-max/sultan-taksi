# Codex Technical Log (Chronological)

This file stores chronological implementation notes that are more detailed than `proje gunlugu.md`.

## 2026-03-22

- Project baseline verified on Next.js + next-intl.
- Locale routing settled as `/tr` and `/en`, root redirect to `/tr`.
- Main landing composition stabilized: Hero, Features, Stats, Testimonials, FAQ, Map, Footer.
- First production deployments completed on Vercel.

## 2026-03-25

- Legal pages added and refined:
  - `src/app/[locale]/kvkk/page.tsx`
  - `src/app/[locale]/cerez-politikasi/page.tsx`
- Footer legal links added.
- Bilingual copy polish completed (TR/EN).
- Visual polish and symmetry pass completed for Hero and section layouts.
- Repository moved to root path and README reworked for GitHub landing page.
- Central project memory files introduced and updated:
  - `proje gunlugu.md`
  - `codex.md`

## 2026-03-26

- Service-area messaging aligned to approx. 2 km radius around station.
- Brand emphasis upgraded to "Kenan Evren Sultan Taksi" / "Kenan Evren Sultan Taxi" across key surfaces.
- SEO/metadata alignment updates:
  - `src/app/layout.tsx`
  - `src/app/[locale]/page.tsx` (JSON-LD)
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`
  - `public/llms.txt`
- Announcements feature introduced:
  - top navigation link
  - footer link
  - route: `src/app/[locale]/duyurular/page.tsx`
- Announcement page includes dedicated FAQ block.
- Homepage FAQ restored to original content set to avoid duplicate FAQ intent.
- Mobile CTA density reduced:
  - header WhatsApp hidden on mobile
  - hero secondary WhatsApp CTA hidden on mobile
- Favicon set to selected design:
  - active icon: `public/favicon.svg` (from `favicon-taxi-minimal.svg`)
  - wired via metadata in `src/app/layout.tsx`
- FAQ registry added for future anti-duplication workflow:
  - `sultansss.md`

## Recent commits (latest first)

- `abd300a` Set minimal taxi favicon as site icon
- `6088539` Fix announcements encoding and add centralized FAQ registry
- `6824666` Reduce mobile CTA clutter in header and hero
- `9b7aba8` Restore homepage FAQ content while keeping announcements FAQ
- `3fa287c` Add FAQ block inside announcements page
- `8938d8a` Add announcements page, top nav link, and bilingual FAQ refresh
- `e9243fa` Align service area to 2km and strengthen Kenan Evren branding
