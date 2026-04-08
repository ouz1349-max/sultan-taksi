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

## 12) 25 Mart 2026 Güncellemeleri
### 12.1 Yasal Sayfalar ve Footer
- KVKK Aydınlatma Metni sayfası eklendi:
  - `src/app/[locale]/kvkk/page.tsx`
- Çerez Politikası sayfası eklendi:
  - `src/app/[locale]/cerez-politikasi/page.tsx`
- Footer'a yasal linkler eklendi:
  - `KVKK Aydınlatma Metni`
  - `Çerez Politikası`
- Footer'daki genel/placeholder sosyal linkler kaldırıldı; doğrudan dönüşüme hizmet eden bağlantılar eklendi:
  - Google Maps
  - WhatsApp

### 12.2 Metin ve Dil Kalitesi Cilası (TR/EN)
- TR içerikte daha net ve kurumsal anlatım için mikro metin düzenlemeleri yapıldı.
- EN içerikte doğal olmayan ifadeler revize edildi (örn. `Write on WhatsApp` -> `Chat on WhatsApp`).
- FAQ, özellik ve footer metinlerinde tutarlılık artırıldı.

### 12.3 Teknik ve Yayın Süreci
- Lint doğrulamaları tekrar çalıştırıldı, hatasız geçti.
- Production deploy tekrar alındı ve alias güncellendi:
  - `https://sultan-taksi.vercel.app`
- Önemli not: sayaçlar ilk yükleme sırasında animasyon nedeniyle kısa süreli düşük değer gösterebilir; birkaç saniye içinde hedef değerlere (`4.9`, `22+`, `24/7`, `15+`) ulaşır.

### 12.4 Repo Yapısı Düzeltmesi
- Proje klasörü repo köküne taşındı (`F:\Belgeler\sultantaksi`).
- Git tarafında taşıma işlemi `rename` olarak işlendi, geçmiş korundu.
- Kök `README.md` proje odaklı içerikle güncellendi.

### 12.5 25 Mart Commit Özeti
- `48f61cd` - Add KVKK and cookie policy pages with footer legal links
- `2c2d4ba` - Polish bilingual copy and legal pages readability
- `1305070` - Add root README for repository overview
- `c5a047d` - Move project to repository root and refresh README

### 12.6 Frontend Cila ve Simetri Revizyonu
- Hero bölümünde art direction güncellemesi yapıldı:
  - Poster etkisi ve görsel hiyerarşi güçlendirildi
  - Başlık + CTA + trust satırı ilişkisi rafine edildi
- Features ve Testimonials bölümlerinde görsel dil sadeleştirildi:
  - Kart yoğunluğu azaltıldı
  - Daha temiz, okunabilir ve premium düzen hedeflendi
- Simetri odaklı ek düzeltmeler:
  - Hero arka plan odağında araç daha dengeli konuma çekildi
  - Hero altındaki bilgilendirme satırı tam merkez hizaya alındı
  - “Neden Sultan Taksi?” bölümü simetrik 2x2 düzene getirildi
- Frontend revizyonları production'a yeniden deploy edildi.

### 12.7 Son Commitler (Güncel)
- `eea2111` - Update project journal and add codex chronological log
- `2015b36` - Polish frontend art direction and section layout
- `883ec15` - Improve homepage symmetry in hero and features

### 12.8 26 Mart 2026 - Servis Alanı, Duyurular ve Mobil Sadeleştirme
- Hizmet alanı mesajları TR/EN içerikte yaklaşık 2 km ile hizalandı.
- "Kenan Evren Sultan Taksi" marka vurgusu ana metinlerde güçlendirildi.
- Üst menüye "Duyurular" bağlantısı eklendi ve yeni sayfa açıldı:
  - `src/app/[locale]/duyurular/page.tsx`
- Footer'a duyurular linki eklendi.
- Duyurular sayfasına ayrı bir SSS bloğu eklendi.
- Ana sayfa SSS içerikleri geri alınarak, duyurular SSS ile çakışma azaltıldı.
- Mobilde CTA kalabalığını azaltmak için:
  - Header WhatsApp butonu mobilde gizlendi
  - Hero içindeki ikincil WhatsApp CTA mobilde gizlendi
- Favicon güncellendi:
  - Aktif ikon: `public/favicon.svg` (`favicon-taxi-minimal.svg` seçimi)
- Tüm SSS içerikleri merkezi kayıt dosyasında toplandı:
  - `sultansss.md`

## 13) Şu Anki Durum
- Site canlıda erişilebilir ve güncel
- TR/EN içerik akışı büyük oranda tutarlı
- Mobil/masaüstü görsel deneyim optimize edildi
- Local SEO ve GEO için temel teknik zemin hazır

## 14) Bir Sonraki Adım Önerileri
- Google Business Profile tarafının haftalık optimize edilmesi
- Hizmet bölgesi odaklı ayrı landing sayfaları (`/tr/cukurova-taksi`, vb.)
- Event tracking (telefon, WhatsApp, harita) ile dönüşüm analizi
- Düzenli review toplama akışı (QR + kısa link)
- İçerik günlüğü: aylık Q&A ve yerel rehber yazıları

## 15) Değişiklikten Etkilenen Başlıca Dosyalar
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
- `src/app/[locale]/kvkk/page.tsx`
- `src/app/[locale]/cerez-politikasi/page.tsx`
- `README.md`

---
Son güncelleme: 26 Mart 2026

## 16) 8 Nisan 2026 Sprint Güncellemeleri
### 16.1 Yeni Site Mimarisi
- Tek sayfalık yapıdan küçük ama daha olgun site mimarisine geçiş başladı.
- Yeni sayfalar açıldı:
  - `Galeri`
  - `Hakkımızda`
  - mevcut `Duyurular` sayfası yeniden yapılandırıldı
- Header ve footer bu yeni sayfa mimarisine göre genişletildi.

### 16.2 Galeri Sayfası
- Gerçek görseller projeye alındı ve `public/images/gallery` altında düzenlendi.
- Klasik galeri yerine daha premium vitrin mantığında bir galeri sayfası kuruldu.
- Lightbox / büyütme davranışı eklendi.
- İlk görselin büyütülmesinde yaşanan sorun için birkaç tur hata giderme yapıldı; son durumda kullanıcı geri bildirimiyle sorun ortadan kalktı.
- Galeri metinleri TR/EN olarak güncellenmeye başlandı; son cila turu açık bırakıldı.

### 16.3 Duyurular Sayfası
- Duyurular sayfası basit metin ekranından kısa rehber mantığına taşındı.
- İçerik yapısı:
  - güncel bilgilendirme
  - kısa rehber kartları
  - SSS
  - galeri ve çağrı aksiyonları
- Renk tonu ana siteyle hizalandı.
- İç linkleme görünür hale getirildi:
  - `Ana Sayfa`
  - `Hakkımızda`
  - `Galeri`

### 16.4 Hakkımızda Sayfası
- Yeni `Hakkımızda` sayfası eklendi.
- Amaç:
  - yerel güven sinyali
  - marka anlatısı
  - hizmet alanı ve çalışma biçimini daha net vermek

### 16.5 SEO / Paylaşım Katmanı
- Ana sayfa, galeri, duyurular ve hakkında sayfaları için metadata / Open Graph alanları geliştirildi.
- Ana sayfada `LocalBusiness` ve `FAQPage` schema kullanımı korundu.
- Duyurular sayfasına `FAQPage` schema eklendi.

### 16.6 Dokümantasyon ve Hafıza
- AnkaVet projesinden alınan derslerle yeni hafıza omurgası oluşturuldu:
  - `sultan_index.md`
  - `project_memory.md`
  - `i18n_guidelines.md`
  - `content_checklist.md`
- Yerel geliştirme için `start-local.cmd` eklendi.

### 16.7 Sprint Durumu
Tamamlananlar:
- Yeni bilgi mimarisi
- Yeni sayfalar
- Galeri temel kurulum
- Duyuruların rehber yapısına geçmesi
- İç linkleme ve metadata güçlendirmesi

Açık kalanlar:
- Galeri son cila
- Yeni sayfalar arası görsel tutarlılık
- Sprint kapanışı için toplu commit / push / deploy

---
Son güncelleme: 8 Nisan 2026
