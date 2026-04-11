# Codex Technical Log (Chronological)

This file stores chronological implementation notes that are more detailed than `proje g?nl???.md`.

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
  - `proje g?nl???.md`
  - `codex.md`

## 2026-03-26

- Service-area messaging aligned to approx. 2 km radius around station.
- Brand emphasis upgraded to `Kenan Evren Sultan Taksi` / `Kenan Evren Sultan Taxi` across key surfaces.
- SEO/metadata alignment updates:
  - `src/app/layout.tsx`
  - `src/app/[locale]/page.tsx`
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`
  - `public/llms.txt`
- Announcements feature introduced with dedicated route and FAQ.
- Mobile CTA density reduced.
- Favicon updated.
- FAQ registry added in `sultansss.md`.

## 2026-04-08

- Sprint-based restructuring started with AnkaVet-inspired documentation discipline.
- New documentation spine added:
  - `sultan_index.md`
  - `project_memory.md`
  - `i18n_guidelines.md`
  - `content_checklist.md`
- `start-local.cmd` added.
- New routes introduced:
  - `src/app/[locale]/galeri/page.tsx`
  - `src/app/[locale]/hakkimizda/page.tsx`
  - `src/app/[locale]/rehberler/page.tsx`
  - `src/app/[locale]/rehberler/[slug]/page.tsx`
- `src/data/guides.ts` introduced as guide content source.
- Gallery media moved under `public/images/gallery/*`.
- Header and footer expanded for the new multi-page structure.

## 2026-04-10

### Next 16 upgrade
- Next.js upgraded from `15.5.14` to `16.1.1` without deploy or commit.
- `next lint` removal handled by switching the lint script to ESLint CLI.
- UTF-8 no-BOM cleanup applied to JSON content files required by Turbopack.

### SEO host cleanup
- SEO host generation centralized in `src/lib/site-url.ts`.
- No verified custom production domain exists in the repo.
- Safe fallback intentionally set to `https://example.invalid`.
- Production rule documented: `NEXT_PUBLIC_SITE_URL` or `SITE_URL` must be set before deploy.

### Quality sprint lessons
- A first inner-page quality sprint was rejected by user.
- Main failure reasons:
  - Turkish characters broke in visible UI
  - inner pages became denser instead of lighter
  - ?more professional? was interpreted as ?more panels, more meta, more helper strips?
- A second corrective sprint focused on reducing panel dependence and repairing encoding-sensitive files.

### Current technical reality
- Build is green.
- Lint is green.
- TypeScript is green.
- UTF-8/mojibake scanning has become a required verification step, not an optional cleanup step.

## 2026-04-11 (Antigravity)

### Guides Editorial Modernization
- **Structural Overhaul:** Refactored `src/app/[locale]/rehberler/[slug]/page.tsx` into a high-end editorial layout.
- **Sticky Sidebar:** Relocated secondary metadata, `GuideTrustStrip`, and `Highlights` to a floating sticky sidebar. This prioritizes the main content and eliminates the obstructive "dashboard" feel.
- **Typography Scale-down:** Corrected over-sized elements. H1 was tuned to `md:text-5xl` for a balance of authority and elegance. Intro text was moved directly under the title at `text-lg` with `text-balance` for better flow.
- **Layout Flow:** Optimized the visual path so readers see the content immediately after the hero image, improving both UX and SEO crawlability.

### Content & SEO/GEO Expansion
- **Rich Data:** Updated `src/data/guides.ts` with 5 high-quality, meaningful FAQs per guide in both Turkish and English.
- **Local SEO (GEO):** Rewrote all 3 existing guides to incorporate high-value local keywords (Kenan Evren, Adana Taksi, VIP Transfer, Çukurova Havalimanı, Fevzipaşa Otogar).
- **English Quality Pass:** Performed an editorial-grade translation for the English versions, ensuring a premium brand voice.
- **Dynamic Sitemap:** Verified that `src/app/sitemap.ts` correctly and automatically maps all guides from the data source.

### Maintenance
- **Encoding Repair:** Performed a manual cleanup of `proje günlüğü.md` to fix broken Turkish characters (mojibake) caused by heterogeneous editing environments.

## Current known product issues

1. Guides index page (listing) is the next candidate for the same "editorial softening" applied to the detail pages.
2. Gallery could still benefit from a "negative space" audit to ensure photos dominate the layout even more.
3. Encoding safety remains a high-priority operational risk during multi-agent sessions; all logs must be verified for UTF-8 integrity.
