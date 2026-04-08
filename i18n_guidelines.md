# i18n Guidelines

Bu dosya, Sultan Taksi projesinde TR/EN içerik üretimi ve güncellemesi için temel kuralları tanımlar.

## 1. Temel İlke

- Türkçe ve İngilizce içerikler anlam, ton ve aksiyon bakımından birbiriyle hizalı olmalıdır.
- İngilizce metinler kelime kelime çeviri gibi değil, doğal kullanım gibi görünmelidir.
- Türkçe taraf ana içerik dili olsa da İngilizce sürüm eksik veya geçici hissi vermemelidir.

## 2. Locale Yapısı

- Türkçe: `tr`
- İngilizce: `en`
- Ana çeviri dosyaları:
  - `src/messages/tr.json`
  - `src/messages/en.json`

## 3. Güncelleme Kuralı

Bir metin değiştiğinde:
1. TR güncellenir
2. EN karşılığı güncellenir
3. Gerekirse bileşen başlık/spacing etkisi kontrol edilir
4. Locale parity bozulmamalıdır

## 4. Ton Kuralları

### Türkçe
- Net
- Güven veren
- Samimi ama amatör olmayan
- Kısa ve okunur

### İngilizce
- Doğal
- Basit
- Yerel işletme sitesi tonuna uygun
- Aşırı pazarlama dili kullanılmadan güven odaklı

## 5. Marka Kullanımı

- TR: `Kenan Evren Sultan Taksi`
- EN: ana marka gerektiğinde `Kenan Evren Sultan Taxi`
- Marka adı keyfi varyasyonlarla çoğaltılmaz

## 6. Hizmet Alanı ve Operasyon Dili

- Hizmet alanı yaklaşık `2 km` çevre olarak ifade edilir
- Yanıltıcı geniş alan iddiaları yazılmaz
- Uygunluk dışı talepler için:
  - TR: müsaitlik durumuna göre bilgilendirme
  - EN: handled based on availability

## 7. CTA Standardı

### Türkçe
- `Hemen Ara`
- `WhatsApp'tan Yaz`
- `Duyuruları İncele`
- `Haritada Aç`

### İngilizce
- `Call Now`
- `Chat on WhatsApp`
- `View Announcements`
- `Open in Maps`

## 8. SSS ve Duyuru Senkronu

- Duyurularda geçen bilgiler, gerekiyorsa SSS'ye taşınabilir.
- Ancak ana sayfa SSS ile duyuru SSS aynı metne dönüşmemelidir.
- Her yeni SSS kaydı ayrıca `sultansss.md` dosyasına eklenir.

## 9. Metadata ve Yardımcı Metinler

- Hero
- Announcement teaser
- Features
- FAQ
- Footer

Bu bloklarda iki dil arasında yoğunluk farkı aşırı açılmamalıdır.

## 10. Yasaklı Durumlar

- TR güncellenip EN'in unutulması
- İngilizceye Türkçe cümle yapısının direkt taşınması
- Hizmet alanı ya da fiyat gibi kritik detaylarda locale farkı oluşması
- JSON içinde anahtar kırılması veya eksik alan bırakılması

