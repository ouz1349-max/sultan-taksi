# Codex Teknik Kayıt (Kronolojik)

Bu dosya, geliştirme sırasında konuşulan ve `proje günlüğü.md` içinde özet geçilmeyen teknik detayları kronolojik olarak kaydeder.

## 22 Mart 2026

### Başlangıç ve Mimari
- Proje Next.js + `next-intl` yapısında doğrulandı.
- Locale yapısı `tr/en` ve root yönlendirmesi (`/` -> `/tr`) kuruldu.
- Tek sayfa landing akışı netleştirildi:
  - Hero
  - Features
  - Stats
  - Testimonials
  - FAQ
  - Map
  - Footer

### İçerik ve Tasarım Revizyonları
- TR/EN çeviri dosyaları üzerinde metinler temizlendi.
- Premium görsel dil, cam panel kartlar, gradient katmanlar ve CTA efektleri stabilize edildi.
- Mobil aksiyon barı eklendi (Ara + WhatsApp).
- WhatsApp floating butonu masaüstü/mobil ayrımıyla düzenlendi.

### SEO ve Teknik Altyapı
- `LocalBusiness` JSON-LD eklendi/güncellendi.
- `robots.ts` ve `sitemap.ts` üretimi doğrulandı.
- AI taraması için `public/llms.txt` eklendi.

### Deploy
- Vercel üzerinden production yayın alındı.

## 25 Mart 2026

### Hukuki Sayfalar
- KVKK ve Çerez Politikası sayfaları eklendi:
  - `src/app/[locale]/kvkk/page.tsx`
  - `src/app/[locale]/cerez-politikasi/page.tsx`
- Footer'a yasal linkler eklendi.

### İçerik Kalitesi ve Güven Unsurları
- TR/EN metinlerde yazım ve ton iyileştirmesi yapıldı.
- EN tarafında daha doğal kullanım için önemli ifade düzeltmeleri uygulandı.
- Footer'daki genel sosyal medya placeholder linkleri kaldırıldı.
- Yerine daha güvenilir ve dönüşüm odaklı linkler eklendi:
  - Google Maps
  - WhatsApp

### Test/Doğrulama Notu
- `StatsCounter` bölümünde sayılar animasyonlu arttığı için ilk 1-2 saniye düşük değer görülmesi tespit edildi.
- Kısa bekleme sonrası doğru hedef değerlere ulaştığı doğrulandı.

### Repo ve Git Düzeni
- Proje klasörü repo köküne taşındı:
  - Önceki yapı: `F:\Belgeler\sultantaksi\sultan-taksi\...`
  - Yeni yapı: `F:\Belgeler\sultantaksi\...`
- Git taşıma işlemini `rename` olarak algıladı; geçmiş korundu.
- Kök `README.md` proje odaklı içerikle güncellendi.

### 25 Mart Commit Sırası
- `48f61cd` - Add KVKK and cookie policy pages with footer legal links
- `2c2d4ba` - Polish bilingual copy and legal pages readability
- `1305070` - Add root README for repository overview
- `c5a047d` - Move project to repository root and refresh README

### 25 Mart Deploy Notları
- Production alias doğrulandı: `https://sultan-taksi.vercel.app`
- Sayfa linkleri (TR/EN + yasal sayfalar) erişilebilir olarak kontrol edildi.
