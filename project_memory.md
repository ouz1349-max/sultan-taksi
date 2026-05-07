# Project Memory

Bu dosya Sultan Taksi projesinin güncel teknik, içerik ve kalite hafızasını tutar.

## 1. Proje Kimliği

- Proje adı: `sultan-taksi`
- Marka: `Kenan Evren Sultan Taksi`
- Lokasyon: Adana
- Amaç: Telefon ve WhatsApp dönüşümüne odaklı, çift dilli, koyu premium görünümlü ve güven veren yerel taksi sitesi
- Canlı alias: [https://sultan-taksi.vercel.app](https://sultan-taksi.vercel.app)

## 2. Teknoloji Yığını

- Framework: Next.js `16.1.1`
- UI: React `19.2.5`
- Dil: TypeScript
- Stil: Tailwind CSS v4
- i18n: `next-intl`
- Animasyon: Framer Motion
- Deploy: Vercel

## 3. URL ve Locale Yapısı

- Türkçe: `/tr`
- İngilizce: `/en`
- Kök `/` kalıcı olarak `/tr` adresine yönlenir
- Canonical ve alternate zinciri TR/EN için karşılıklı korunmalıdır

## 4. Sayfa Mimarisi

Ana sayfa akışı:
1. `Hero`
2. `AnnouncementTeaser`
3. `Features`
4. `StatsCounter`
5. `Testimonials`
6. `FAQ`
7. `MapSection`
8. `ContactFooter`

İç sayfalar:
- `/[locale]/galeri`
- `/[locale]/rehberler`
- `/[locale]/rehberler/[slug]`
- `/[locale]/hakkimizda`
- `/[locale]/duyurular`
- `/[locale]/kvkk`
- `/[locale]/cerez-politikasi`

## 5. Marka ve İçerik Kuralları

- Birincil marka yüzeyi: `Kenan Evren Sultan Taksi`
- Hizmet alanı dili yaklaşık `2 km` çevreyle sınırlı tutulur
- Yanıltıcı geniş servis alanı, kesin süre veya kesin ücret iddiası kullanılmaz
- Dönüşüm aksiyonları: telefon, WhatsApp ve harita/konum
- Ton: güven veren, yerel, profesyonel, sade ve abartısız

## 6. SEO ve Host Kuralı

- `src/lib/site-url.ts` merkezi host üretim kaynağıdır
- Host önceliği: `NEXT_PUBLIC_SITE_URL`, sonra `SITE_URL`
- Güvenli fallback: `https://example.invalid`
- Vercel production deploy sırasında `NEXT_PUBLIC_SITE_URL` veya `SITE_URL` zorunludur
- Env eksikse production deploy durmalı; local build ise güvenli fallback ile çalışabilir

## 7. Structured Data ve Metadata

Korunan yapı:
- `layout.tsx` metadataBase
- canonical / alternates zinciri
- sade `robots.ts`
- rehberleri `guides.ts` üzerinden üreten `sitemap.ts`
- ana sayfa `LocalBusiness` JSON-LD
- rehber detaylarında `BlogPosting` ve görünür SSS varsa `FAQPage` JSON-LD

## 8. Rehber Sistemi Standartları

Rehberler taksi sitesi için yerel rota ve hizmet deneyimi otoritesi kurmalıdır:

- Başlık gerçek arama niyetine yakın olmalı
- Giriş ilk 10 saniyede kullanıcının sorununu tarif etmeli
- Süre ve ücret için garanti dili yerine taksimetre, trafik ve müsaitlik değişkenleri anlatılmalı
- Kenan Evren, Reşatbey, Güzelyalı, Çukurova, Fevzipaşa Otogar ve Çukurova Havalimanı gibi gerçek yerel bağlamlar doğal geçmeli
- Her rehberde pratik bölümler, kısa özet, 3-5 SSS ve net CTA bulunmalı
- İlgili rehberler, galeri, konum ve iletişim aksiyonları doğal şekilde bağlanmalı

## 9. Tasarım Dersleri

- Daha profesyonel görünüm daha fazla panel anlamına gelmez
- Rehber liste sayfası kart arşivi değil, editoryal yayın yüzeyi gibi hissettirmeli
- Galeri sayfasında fotoğraf, çerçeveden ve sistem hissinden daha baskın olmalı
- Ana sayfada marka, telefon ve WhatsApp dönüşümü ilk ekranda net kalmalı
- Koyu premium tema korunabilir; kutu, çizgi ve trust-strip yoğunluğu kontrollü tutulmalı

## 10. Kalite Kapısı

Her değişiklikten sonra:
1. Mojibake taraması
2. `npm run lint`
3. `npm run build`
4. Mümkünse yerel görsel kontrol

Commit veya deploy bu kapılar geçmeden yapılmamalıdır.
