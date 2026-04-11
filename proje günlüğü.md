# Proje Günlüğü

## 1) Proje Özeti
- Proje adı: `sultan-taksi`
- Teknoloji: Next.js 16.1.1, React 19, TypeScript, Tailwind CSS v4, Framer Motion, next-intl
- Amaç: Adana merkezli taksi durağı için hızlı dönüşüm odaklı, çift dilli, premium görünümlü ama sade bir marka sitesi
- Canlı alias: [https://sultan-taksi.vercel.app](https://sultan-taksi.vercel.app)

## 2) Son Büyük Gelişmeler

### 2.1 Next 16 yükseltmesi
- Proje kontrollü şekilde Next.js `16.1.1` sürümüne yükseltildi.
- `eslint-config-next` ve ilgili paketler hizalandı.
- Build ve lint zinciri yeni sürümde doğrulandı.

### 2.2 SEO host zinciri temizliği
- `layout.tsx`, `robots.ts`, `sitemap.ts` ve ana sayfa JSON-LD host üretimi merkezi helper'a bağlandı.
- Preview alias'a yanlış canonical üretme riski kaldırıldı.
- Deploy öncesi zorunlu env kuralı netleştirildi:
  - `NEXT_PUBLIC_SITE_URL` veya `SITE_URL`

### 2.3 Çok sayfalı yapı ve rehber sistemi
- `Galeri`, `Hakkımızda`, `Duyurular`, `Rehberler` ve rehber detay sayfaları kuruldu.
- `src/data/guides.ts` ile rehber veri modeli yayın sistemi gibi genişletildi.
- Rehber liste ve detail sayfaları için article / metadata / JSON-LD temeli kuruldu.

### 2.4 Kalite sprintleri ve geri dönüşler
- İlk iç sayfa kalite sprint'i kabul edilmedi.
- Kullanıcı geri bildirimi:
  - Türkçe karakterler bozuldu
  - İç sayfalar ferahlamak yerine yoğunlaştı
  - Rehberler ve galeri fazla kutulu kaldı
  - Daha profesyonel hedefi yanlış yorumlandı
- İkinci düzeltme sprint'i ile öncelik sırası değiştirildi:
  1. UTF-8 ve karakter bozulması temizliği
  2. Rehber detail sadeleştirme
  3. Rehber liste hafifletme
  4. Galeri çerçeve yoğunluğunu azaltma
  5. Hakkında sayfasını daha karakterli ama daha sade tutma

### 2.5 Editoryal Modernizasyon ve SEO/GEO Zenginleştirmesi (Antigravity - 11 Nisan 2026)
- **Rehber Detay Sayfası Modernizasyonu:** Sayfa yapısı kökten değiştirilerek "dashboard" hissi yerine "premium dergi" estetiği getirildi.
- **Sticky Sidebar:** Yardımcı metinler ve güven kutuları sağ tarafa sabitlenen bir sidebar'a taşınarak ana metnin önü açıldı.
- **Tipografi Ayarı:** Başlıklar ve metinler "bağıran" dev puntolardan kurtarılıp, insani ve okunaklı boyutlara (H1 md:text-5xl) çekildi.
- **Genişletilmiş İçerik:** Her rehber yazısı SEO/GEO odaklı zenginleştirildi; 5'er adet Türkçe ve İngilizce SSS (FAQ) eklendi.
- **Dinamik Sitemap:** İçerik eklendikçe sitemap'in otomatik güncellendiği doğrulandı.

## 3) Şu An Hâlâ Sorunlu Olan Noktalar

### 3.1 Encoding kırılganlığı
Sorun:
- Türkçe karakterler birkaç turda gerçek source dosyalarında bozuldu.

Neden ciddi:
- Bu durum görsel kaliteyi anında amatörleştirir.
- Build geçse bile ürün başarısız sayılır.

Not:
- Antigravity tarafından proje günlüğü üzerindeki karakter bozulmaları giderildi. Ancak Windows tabanlı editörlerde risk devam etmektedir.

### 3.2 Rehberler sayfası
Sorun:
- Önceki sürümlere göre daha iyi olsa da hâlâ tam olarak 'yayın vitrini' hissine ulaşmış değil.
- Kart mantığı gevşetildi, ama hâlâ biraz kontrollü ve sistem kokan bir düzen baskın.

Neden sorun:
- Kullanıcı burada bir içerik merkezi görmeli, bir bileşen arşivi değil.

### 3.3 Rehber detail sayfaları
Sorun:
- Dashboard hissi ciddi ölçüde azaltıldı, fakat ritim hâlâ tamamen editoryal değil.
- Bazı bölümlerde yapı hissi içerikten önce gelebiliyor.

Neden sorun:
- Rehber detay sayfası 'yardımcı servis açıklaması' gibi değil, gerçek makale gibi hissettirmeli.

### 3.4 Galeri sayfası
Sorun:
- Fotoğraf baskınlığı artırıldı ama bazı bloklarda hâlâ layout hissi fotoğrafın önüne geçebiliyor.

Neden sorun:
- Galeride önce çerçeve değil, araç ve çevre görülmeli.

### 3.5 Hakkımızda sayfası
Sorun:
- Düzlük problemi azaldı ama marka karakteri hâlâ tam güçte değil.
- Fazla panel kullanmadan daha güçlü bir anlatı gerekiyor.

Neden sorun:
- Bu sayfa güven merkezi olmalı; sadece temiz açıklama metni olmak yetmez.

## 4) Kalıcı Dersler
- 'Daha profesyonel' demek daha çok panel, daha çok border ve daha çok meta satırı demek değildir.
- Veri modeli zengin olabilir; görünüm sade kalmalıdır.
- Tasarımı hafifletmek için önce blok sayısı azaltılmalı, sonra spacing ayarlanmalıdır.
- UTF-8 kontrolü içerik sprintlerinin sonunda değil, sırasında da yapılmalıdır.
- Kullanıcıya 'Yazı nerede?' dedirtmeyecek, içeriği en tepeye taşıyan layout'lar daima kazanır.

## 5) Güncel Doğrulama Durumu
- `npm run lint`: geçiyor
- `npx tsc --noEmit`: geçiyor
- `npm run build`: geçiyor
- Son UTF-8 / mojibake taraması: temiz

## 6) Şu Anki Öncelik Sırası
1. Rehber detail sayfalarında bir tur daha editoryal yumuşatma
2. Rehberler liste sayfasını daha yayın merkezine yaklaştırma
3. Galeride fotoğraf baskınlığını bir kademe daha artırma
4. Hakkımızda sayfasında daha karakterli anlatı kurgusu

---
Son güncelleme: 11 Nisan 2026 (Antigravity)
