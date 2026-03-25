# Proje Günlüğü

## 1) Proje Özeti
- Proje adı: `sultan-taksi`
- Teknoloji: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, next-intl
- Amaç: Adana merkezli taksi durağı için hızlı dönüşüm odaklı, çift dilli (TR/EN), premium görünümlü bir tanıtım ve çağrı sayfası
- Canlı ortam: Vercel (production alias: `https://sultan-taksi.vercel.app`)

## 2) Başlangıç Durumu ve İlk Tespitler
İlk incelemede şu sorunlar tespit edildi:
- Metin kodlama bozulmaları (Türkçe karakterlerin `Ã`, `Ä`, `Â` gibi görünmesi)
- Görsel dilde yeterli derinlik olmaması (tek katman hissi)
- Hero/CTA etkisinin zayıf olması
- Bölümler arası görsel tutarlılık eksikleri
- Footer tarafında gereksiz bağlantılar
- Root (`/`) rota için yönlendirme eksikliği nedeniyle canlıda 404
- Lint/build doğrulamasında lokal ortam kısıtları

## 3) Mimari ve İçerik Düzeni
Ana sayfa bileşenleri:
- `Hero`
- `Features`
- `StatsCounter`
- `Testimonials`
- `FAQ` (sonradan eklendi)
- `MapSection`
- `ContactFooter`

Uluslararasılaştırma:
- `next-intl` ile `tr` ve `en` locale
- Çeviri dosyaları: `src/messages/tr.json`, `src/messages/en.json`

## 4) Yapılan Büyük Tasarım Revizyonları
### 4.1 Global Görsel Dil
- Koyu premium tema yeniden düzenlendi
- Arka plan katmanları (gradient + glow + grid atmosfer)
- Cam efekti kart sistemi (`glass-panel`)
- CTA shine efektleri
- Scrollbar ve tipografi iyileştirmeleri
- Reduced motion desteği eklendi

### 4.2 Hero Bölümü
- Başlık hiyerarşisi güçlendirildi
- CTA butonları büyütüldü ve okunurluk artırıldı
- Güven kartları eklendi (sürüş güvenliği, erişim, Google puanı)
- Görsel koyuluğu kullanıcının geri bildirimiyle azaltıldı
- Mobil portre için hero görsel odaklama eklendi
- TR başlıkta `TAKSİSİ` satırındaki nokta/diakritik kesilmesi düzeltildi

### 4.3 Alt Bölümler
- Features kartları: modern hover ve kart kontrastı
- Stats alanı: net rakam sunumu
- Testimonials: sosyal kanıt + Google yorum bağlantısı
- FAQ: dönüşümü destekleyen soru-cevap bloğu
- Map: etkileşim iyileştirmeleri + “Haritada Aç” fallback
- Footer: sadeleştirildi, gereksiz linkler kaldırıldı

## 5) Dil ve İçerik Düzeltmeleri
- Tüm bozuk Türkçe karakterler temizlendi
- EN sürümde kalan TR metinler locale yapısına alındı
- Dil seçicide `ENGLİSH` hatası giderildi, `ENGLISH` düzeltildi
- TR/EN metinleri komponent içi sabit yazımdan çeviri dosyalarına taşındı

## 6) Mobil İyileştirmeler
- Mobil sabit aksiyon barı eklendi (`Ara` + `WhatsApp`)
- Mobilde çakışma olmaması için masaüstü WhatsApp butonu ayrıştırıldı
- Hero arka planı mobil dikeyde taksiyi gösterecek şekilde odaklandı

## 7) SEO, Local SEO ve GEO Çalışmaları
### 7.1 Teknik SEO
- JSON-LD zenginleştirildi (`LocalBusiness` alanları geliştirildi)
- Kök rota (`/`) -> `/tr` yönlendirmesi eklendi
- `robots` ve `sitemap` yapılandırması korundu/güncellendi

### 7.2 Local SEO İçerik Sinyalleri
- Hizmet bölgeleri vurgulandı
- Harita yönlendirme bağlantıları güçlendirildi
- Google yorum sosyal kanıtı görünür hale getirildi

### 7.3 GEO / AI Tarama Desteği
- `public/llms.txt` eklendi
- İçerik: site özeti, servis alanı, diller, iletişim ve AI sistemleri için kullanım notları

## 8) Görsel Değişimi
- Kullanıcı tarafından verilen yeni görsel dosyası (`C:\sultantaksi.webp`) projeye alındı
- Hedefe kopyalandı: `public/images/hero.webp`
- Hero arka plan kaynağı `hero.webp` olarak güncellendi

## 9) Vercel Süreci ve Canlıya Alma
Yapılan deploy adımları:
- Vercel CLI kurulumu ve hesap bağlantısı (`vercel whoami`, `vercel link`)
- Birden fazla production deploy
- İlk deploylarda tespit edilen build/lint hataları giderilerek tekrar deploy
- Root 404 problemi kalıcı olarak çözüldü
- Son alias sürekli aynı tutuldu: `https://sultan-taksi.vercel.app`

## 10) Karşılaşılan Sorunlar ve Çözümler
### 10.1 `npm run lint` PowerShell engeli
- Sorun: `npm.ps1` execution policy nedeniyle bloklandı
- Durum: `npm.cmd run lint` ile lint doğrulandı ve temiz geçti
- Not: Bu problem proje kodu değil, makine PowerShell policy kaynaklı

### 10.2 `next` komutu bulunamaması
- Sorun: Lokal bağımlılık eksikliği
- Çözüm: `npm install` ile bağımlılıklar kuruldu

### 10.3 Harita davranış farklılıkları
- Koordinat bazlı embed bazı etkileşimlerde bilgi hatasına yol açtı
- İşletme sorgulu embed + fallback link ile dengeli çözüm sağlandı

## 11) Git İşlemleri
- Değişiklikler stage edildi (`git add -A`)
- Commit atıldı:
  - Commit: `3aa5f95`
  - Mesaj: `Improve SEO/localization, fix hero typography, and refine mobile UX`

## 12) Şu Anki Durum
- Site canlıda erişilebilir ve güncel
- TR/EN içerik akışı büyük oranda tutarlı
- Mobil/masaüstü görsel deneyim optimize edildi
- Local SEO ve GEO için temel teknik zemin hazır

## 13) Bir Sonraki Adım Önerileri
- Google Business Profile tarafının haftalık optimize edilmesi
- Hizmet bölgesi odaklı ayrı landing sayfaları (`/tr/cukurova-taksi`, vb.)
- Event tracking (telefon, WhatsApp, harita) ile dönüşüm analizi
- Düzenli review toplama akışı (QR + kısa link)
- İçerik günlüğü: aylık Q&A ve yerel rehber yazıları

## 14) Değişiklikten Etkilenen Başlıca Dosyalar
- `src/app/[locale]/layout.tsx`
- `src/app/[locale]/page.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/Hero.tsx`
- `src/components/Features.tsx`
- `src/components/StatsCounter.tsx`
- `src/components/Testimonials.tsx`
- `src/components/FAQ.tsx`
- `src/components/MapSection.tsx`
- `src/components/ContactFooter.tsx`
- `src/components/MobileActionBar.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/messages/tr.json`
- `src/messages/en.json`
- `public/images/hero.webp`
- `public/llms.txt`

---
Son güncelleme: 22 Mart 2026
