# Project Memory

Bu dosya, Sultan Taksi projesinin teknik ve içeriksel hafıza özetidir.

## 1. Proje Kimliği

- Proje adı: `sultan-taksi`
- Marka: `Kenan Evren Sultan Taksi`
- Lokasyon: Adana
- Amaç: Telefon ve WhatsApp dönüşümüne odaklı, premium görünümlü, çift dilli küçük site yapısı
- Canlı: [https://sultan-taksi.vercel.app](https://sultan-taksi.vercel.app)

## 2. Teknoloji Yığını

- Framework: Next.js 15 App Router
- UI: React 19
- Dil: TypeScript
- Stil: Tailwind CSS v4
- Hareket: Framer Motion
- i18n: `next-intl`
- Deploy: Vercel

## 3. URL ve Locale Yapısı

- Türkçe: `/tr`
- İngilizce: `/en`
- Kök `/` kalıcı olarak `/tr` adresine yönlenir
- Türkçe kanonik rota: `/tr`
- İngilizce kanonik rota: `/en`

## 4. Güncel Sayfa Mimarisi

Ana sayfa bileşen akışı:
1. `Hero`
2. `AnnouncementTeaser`
3. `Features`
4. `StatsCounter`
5. `Testimonials`
6. `FAQ`
7. `MapSection`
8. `ContactFooter`

Ek sayfalar:
- `/[locale]/galeri`
- `/[locale]/hakkimizda`
- `/[locale]/duyurular`
- `/[locale]/kvkk`
- `/[locale]/cerez-politikasi`

## 5. İçerik ve Marka Kuralları

- Marka adı yüzeylerde öncelikli olarak `Kenan Evren Sultan Taksi` şeklinde geçer.
- Hizmet alanı ifadesi yaklaşık `2 km` çevre ile sınırlıdır.
- Yanıltıcı geniş servis alanı iddiaları kullanılmaz.
- Dönüşüm aksiyonları:
  - Telefon
  - WhatsApp
  - Google Maps

## 6. Tasarım Yönü

- Koyu premium zemin
- Altın aksan
- Serif + sans kombinasyonu
- İlk ekran güçlü marka sunumu
- Mobilde CTA yoğunluğu kontrollü tutulur
- Gereksiz efekt, autoplay ses, aşırı glassmorphism kullanılmaz

## 7. SEO ve Yapısal Katman

- `robots.ts`
- `sitemap.ts`
- Ana sayfada `LocalBusiness` + `FAQPage` JSON-LD
- Duyurular sayfasında `FAQPage` JSON-LD
- Sayfa bazlı `openGraph` / `twitter` / metadata geliştirmeleri
- `public/llms.txt`

Mevcut SEO yaklaşımı:
- Çift dil için ayrı URL
- Tutarlı kanonik yapı
- Harita, yorum ve hizmet alanı sinyalleri görünür
- Duyurular, SSS ve galeri ile sorgu kapsamı büyütülüyor

## 8. İçerik Büyütme Modeli

Sitede klasik blog zorunlu değildir. Öncelikli yapı:
1. Ana sayfa
2. Galeri
3. Duyurular / kısa rehberler
4. Hakkımızda
5. SSS genişletmesi

Not:
- `Duyurular` sayfası saf haber akışı değil, kısa rehber mantığı da taşıyabilir.
- Galeri klasik grid değil, premium vitrin mantığıyla ilerlemelidir.

## 9. SSS Politikası

- Merkezi kaynak: [sultansss.md](/F:/Belgeler/sultantaksi/sultansss.md)
- Aynı soru farklı niyetle tekrar edebilir; ama bilinçsiz tekrar yapılmaz.
- Ana sayfa SSS ile duyurular SSS birebir kopya olmamalıdır.

## 10. İçerik Kaynakları

- TR/EN metin kaynağı:
  - `src/messages/tr.json`
  - `src/messages/en.json`
- Bileşen bazlı sabit içerik minimumda tutulur.
- Yeni duyuru veya yeni içerik eklenirken locale parity korunur.

## 11. Sprint 2026-04 Durumu

Tamamlananlar:
- `Galeri` sayfası açıldı ve gerçek görseller projeye alındı
- `Hakkımızda` sayfası açıldı
- `Duyurular` sayfası daha rehber yapısına çekildi
- Header / footer yeni sayfa mimarisine göre büyütüldü
- Ana sayfa teaser alanından `Galeri` ve `Duyurular` geçişleri güçlendirildi
- Sayfa bazlı metadata / OG iyileştirmeleri yapıldı
- Yerel geliştirme için `start-local.cmd` eklendi
- Hafıza ve standart dosyaları kuruldu

Açık işler:
1. Galeri metin ve kompozisyon son cilası
2. Yeni sayfalar arasında spacing / ton birliği
3. Duyurular için ileride arşiv / son 5 mantığı
4. Hafıza dosyalarının sprint kapanışında tekrar senkronu
5. Toplu commit / push / deploy

## 12. Operasyonel Dersler

- Encoding bozulması riski vardır; JSON ve Markdown dosyaları UTF-8 korunmalıdır.
- Windows terminal çıktısı gerçek dosya bozulmasıyla karıştırılmamalıdır.
- Görsel cila turlarında tüm siteyi aynı anda değiştirmek yerine hedefli ilerlemek daha sağlıklıdır.
- Interaction bug'larında tasarım yaması yerine doğrudan mekanik sadeleştirme tercih edilmelidir.
- Yeni sayfalar açıldığında sadece header/footer değil, içerik içi linkleme de düşünülmelidir.

## 13. Gelecek İçin Açık Alanlar

1. Duyurular arşivi standardı
2. İçerik kalite kontrol akışının oturtulması
3. SEO kararlarının daha merkezi dokümantasyonu
4. Galeri metin ve medya standardı
5. Event tracking ve dönüşüm ölçümü
