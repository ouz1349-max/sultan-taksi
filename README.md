# Sultan Taksi

Adana merkezli taksi hizmeti için hazırlanmış, dönüşüm odaklı ve çift dilli (TR/EN) bir Next.js web sitesi.

Canlı alias: [https://sultan-taksi.vercel.app](https://sultan-taksi.vercel.app)

Not: canonical / metadata / robots / sitemap için production host fallback olarak bu alias kullanılmaz. Deploy öncesi `NEXT_PUBLIC_SITE_URL` veya `SITE_URL` ayarlanmalıdır; aksi halde SEO host zinciri güvenli fallback olarak `https://example.invalid` üretir.

## Proje Özeti

- Stack: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, next-intl
- Amaç: Kullanıcıyı hızlı şekilde telefon veya WhatsApp iletişimine yönlendirmek
- Dil: Türkçe (`/tr`) ve İngilizce (`/en`)
- Tasarım: Premium koyu tema, mobil öncelikli dönüşüm yerleşimi

## Özellikler

- Hero alanında güçlü CTA: `Ara` ve `WhatsApp`
- Hizmet avantajları, sayaçlar, müşteri yorumları, SSS
- Hizmet bölgesi + Google Maps gömülü harita
- KVKK Aydınlatma Metni ve Çerez Politikası sayfaları
- Local SEO altyapısı: JSON-LD, robots, sitemap

## URL Yapısı

- Türkçe ana sayfa: `/tr`
- İngilizce ana sayfa: `/en`
- Kök URL `/` -> `/tr` yönlendirmesi
- KVKK: `/tr/kvkk`, `/en/kvkk`
- Çerez Politikası: `/tr/cerez-politikasi`, `/en/cerez-politikasi`

## Proje Yapısı

- `src/app`: App Router sayfaları
- `src/components`: Arayüz bileşenleri
- `src/messages`: TR/EN çeviri dosyaları
- `src/i18n`: locale routing ve request config
- `public`: görseller ve statik dosyalar

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Tarayıcı: [http://localhost:3000](http://localhost:3000)

## Kontrol ve Build

```bash
npm run lint
npm run build
npm run start
```

## Deploy (Vercel)

Production deploy öncesi zorunlu ortam değişkeni:

```bash
NEXT_PUBLIC_SITE_URL=https://gercek-production-domain.example
```

Alternatif olarak `SITE_URL` da kullanılabilir. Bu değer verilmezse canonical, robots ve sitemap doğru production host üretmez.

```bash
npx vercel --prod --yes
```
