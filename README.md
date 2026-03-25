# Sultan Taksi Web Projesi

Adana merkezli taksi hizmeti için hazırlanmış, dönüşüm odaklı ve çift dilli (TR/EN) bir web sitesi projesidir.

Canlı adres: [https://sultan-taksi.vercel.app](https://sultan-taksi.vercel.app)

## Proje Özeti

- Teknoloji: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, next-intl
- Amaç: Kullanıcıyı hızlıca `Ara` veya `WhatsApp` aksiyonuna yönlendirmek
- Dil yapısı: Türkçe ve İngilizce locale desteği (`/tr`, `/en`)
- Tema: Koyu premium görünüm, mobil uyumlu, hızlı erişim odaklı

## Öne Çıkan Özellikler

- Hero + güçlü CTA (Telefon ve WhatsApp)
- Hizmet özellikleri ve sosyal kanıt alanları
- Sayaçlar, yorumlar, SSS bölümü
- Harita ve hizmet bölgesi sunumu
- KVKK Aydınlatma Metni ve Çerez Politikası sayfaları
- Local SEO temeli (JSON-LD, robots, sitemap)

## URL Yapısı

- Türkçe ana sayfa: `/tr`
- İngilizce ana sayfa: `/en`
- Kök URL `/` otomatik olarak `/tr` yönlendirmesi yapar
- KVKK: `/tr/kvkk`, `/en/kvkk`
- Çerez Politikası: `/tr/cerez-politikasi`, `/en/cerez-politikasi`

## Klasör Yapısı

Repo kökü:

- `sultan-taksi/`: Uygulama kaynak kodu (Next.js projesi)

Uygulama ana dizinleri:

- `sultan-taksi/src/app`: App Router sayfaları
- `sultan-taksi/src/components`: UI bileşenleri
- `sultan-taksi/src/messages`: TR/EN çeviri içerikleri
- `sultan-taksi/public`: statik varlıklar

## Lokal Çalıştırma

```bash
cd sultan-taksi
npm install
npm run dev
```

Tarayıcı: `http://localhost:3000`

## Build ve Kontroller

```bash
cd sultan-taksi
npm run lint
npm run build
npm run start
```

## Dağıtım

Proje Vercel üzerinde yayınlanır:

```bash
cd sultan-taksi
npx vercel --prod --yes
```

## Not

Bu repository'de uygulama alt klasörde (`sultan-taksi/`) yer alır. GitHub ana sayfasında proje bilgilerini görünür yapmak için bu kök `README.md` dosyası eklenmiştir.
