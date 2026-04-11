# Project Memory

Bu dosya, Sultan Taksi projesinin g?ncel teknik ve i?erik haf?zas?n? tutar.

## 1. Proje Kimli?i

- Proje ad?: `sultan-taksi`
- Marka: `Kenan Evren Sultan Taksi`
- Lokasyon: Adana
- Ama?: Telefon ve WhatsApp d?n???m?ne odakl?, ?ift dilli, premium g?r?n?ml? k???k ama g?ven veren bir yerel marka sitesi
- Canl? alias: [https://sultan-taksi.vercel.app](https://sultan-taksi.vercel.app)

## 2. G?ncel Teknoloji Y???n?

- Framework: Next.js `16.1.1`
- UI: React `19.2.5`
- Dil: TypeScript
- Stil: Tailwind CSS v4
- i18n: `next-intl`
- Animasyon: Framer Motion
- Deploy: Vercel

## 3. URL ve Locale Yap?s?

- T?rk?e: `/tr`
- ?ngilizce: `/en`
- K?k `/` kal?c? olarak `/tr` adresine y?nlenir
- ?ift dil i?in ayr? URL ve canonical yap?s? korunur

## 4. Sayfa Mimarisi

Ana sayfa ak???:
1. `Hero`
2. `AnnouncementTeaser`
3. `Features`
4. `StatsCounter`
5. `Testimonials`
6. `FAQ`
7. `MapSection`
8. `ContactFooter`

?? sayfalar:
- `/[locale]/galeri`
- `/[locale]/rehberler`
- `/[locale]/rehberler/[slug]`
- `/[locale]/hakkimizda`
- `/[locale]/duyurular`
- `/[locale]/kvkk`
- `/[locale]/cerez-politikasi`

## 5. Marka ve ??erik Kurallar?

- Birincil marka y?zeyi: `Kenan Evren Sultan Taksi`
- Hizmet alan? dili yakla??k `2 km` ?evre ile s?n?rl? tutulur
- Yan?lt?c? geni? servis alan? iddias? kullan?lmaz
- D?n???m aksiyonlar?:
  - Telefon
  - WhatsApp
  - Harita / konum
- ??erik tonu:
  - g?ven veren
  - yerel
  - profesyonel
  - abart?s?z

## 6. SEO ve Host Kural?

- `src/lib/site-url.ts` merkezi host ?retim kayna??d?r
- Host ?ncelik s?ras?:
  1. `NEXT_PUBLIC_SITE_URL`
  2. `SITE_URL`
  3. g?venli fallback: `https://example.invalid`
- Bu yakla??m?n amac?, env eksik oldu?unda yanl??l?kla preview domain veya uydurma production canonical ?retmemektir

Deploy ?ncesi zorunlu kural:
- `NEXT_PUBLIC_SITE_URL` veya `SITE_URL` set edilmelidir
- aksi halde canonical, metadata, robots, sitemap ve JSON-LD do?ru production host ?retmez

## 7. Structured Data ve Metadata Durumu

Korunan / ?al??an yap?:
- `layout.tsx` metadataBase
- canonical / alternates zinciri
- `robots.ts`
- `sitemap.ts`
- ana sayfa `LocalBusiness` JSON-LD
- rehber detaylar?nda `BlogPosting` JSON-LD
- g?r?n?r SSS olan rehberlerde `FAQPage` JSON-LD

## 8. Rehber Sistemi Durumu

Rehber veri modeli art?k sadece k?sa i?erik de?il, yay?n kayd? ta??yacak kadar geni?tir.

Mevcut alanlar:
- `author`
- `authorRole`
- `publishedAt`
- `updatedAt`
- `heroImage`
- `heroImageAlt`
- `tags`
- `relatedGuides`
- `reviewedBy`
- `businessNote`
- `disclaimer`
- `ctaTitle`
- `ctaBody`

Not:
- Veri modeli zenginle?ti, ama g?r?n?mde her alan? g?stermek do?ru de?ildir
- temel ilke: ?elde daha fazla bilgi olabilir, ekranda varsay?lan olarak daha az? g?r?nmelidir?

## 9. 2026-04 Kalite Sprintleri Sonras? Durum

Tamamlananlar:
- Next 16.1.1 kontroll? upgrade
- SEO host zincirinin merkezi helper?a ta??nmas?
- Rehberler / galeri / hakk?nda / duyurular ?ok sayfal? yap?s?n?n kurulmas?
- Rehber detail i?in article tabanl? i?erik ?at?s?
- Galeri lightbox ak???
- ?? sayfalarda ilk sadele?tirme turu
- T?rk?e karakter bozulmalar? i?in tekrar eden kontrol ak??? kurulmas?

Hen?z tam kapanmayanlar:
1. Rehber liste sayfas? h?l? tam anlam?yla ?editoryal yay?n merkezi? seviyesinde de?il
2. Rehber detail sayfalar? ?nceki s?r?me g?re daha hafif olsa da h?l? fazla kontroll? his verebiliyor
3. Galeri sayfas?nda baz? b?l?mler h?l? foto?raflardan ?ok d?zen sistemini hissettiriyor
4. Hakk?m?zda sayfas? daha temiz durumda ama marka karakteri ve anlat? g?c? daha da y?kseltilebilir
5. ?? sayfalar ile ana sayfa aras?nda kalite fark? azald? ama tamamen kapanm?? de?il

## 10. Kritik Sorunlu Alanlar

### A. Encoding k?r?lganl???
Bu proje i?in en hassas teknik alanlardan biri budur.

Sorun:
- T?rk?e karakterler ge?mi? turlarda birka? kez `?` veya mojibake sembollerine d?n??t?
- Sorun sadece terminal g?r?nt?s? de?il, baz? dosyalarda ger?ek i?erik bozulmas?na d?n??t?

Neden ?nemli:
- G?ven alg?s?n? do?rudan bozar
- Rehberler ve hakk?m?zda gibi metin yo?un sayfalar? amat?r g?sterir
- Build ge?se bile ?r?n kalitesi d??er

Kal?c? kural:
- `.ts`, `.tsx`, `.json`, `.md` dosyalar? UTF-8 no-BOM kalmal?
- yeni editlerden sonra metin bozulmas? taranmal?

### B. ?? sayfalarda panel ba??ml?l???
Sorun:
- Rehberler, galeri ve hakk?nda sayfalar? baz? turlarda ?daha profesyonel? olmak yerine ?daha kutulu ve daha b?rokratik? hale geldi

Neden ?nemli:
- Premium his yerine kurall? ama s?k???k bir kurumsall?k ?retiyor
- Ana sayfan?n g??l? ferahl??? ile ?eli?iyor

Do?ru y?n:
- daha az panel
- daha az ?izgi
- daha g??l? tipografi
- daha se?ici vurgu
- daha a??k y?zey

### C. Rehber sistemi i?erik olarak g??l?, sunum olarak tam olgun de?il
Sorun:
- Veri modeli b?y?d? ama g?r?n?m her zaman ayn? olgunlukta de?il
- Liste sayfas? zaman zaman ?kart ar?ivi?, detail sayfas? zaman zaman ?fazla kontroll? servis a??klamas?? gibi hissedebiliyor

Neden ?nemli:
- Kullan?c?n?n zihninde yay?n sistemi g?veni kurmak i?in sadece veri de?il, ritim de g??l? olmal?

### D. Galeri sayfas?nda ?er?eve / foto?raf dengesi
Sorun:
- Galeri malzemesi g??l? olmas?na ra?men baz? versiyonlarda foto?raftan ?nce ?er?eve dili hissedildi

Neden ?nemli:
- Kullan?c? ?nce arac?n ve ?evrenin kendisini g?rmeli
- fazla framing, galeriyi mod?l gibi g?sterir

### E. Hakk?m?zda sayfas?nda karakter eksikli?i
Sorun:
- Temiz ama zaman zaman fazla temkinli bir anlat? olu?uyor

Neden ?nemli:
- Hakk?m?zda sayfas? yaln?zca bilgi veren yer de?il, g?ven merkezidir
- fazla d?z kald???nda marka haf?zas? zay?f kal?r

## 11. Operasyonel Dersler

- ?Daha profesyonel? ifadesi asla ?daha ?ok meta sat?r?, daha ?ok trust strip, daha ?ok panel? olarak yorumlanmamal?
- Rehber i?erik modeli b?y?rken, g?r?n?r UI sade kalmal?
- Tasar?m problemi varsa ?nce blok say?s? azalt?lmal?, sonra spacing art?r?lmal?
- Encoding temizli?i bitmeden g?rsel cila turuna ge?ilmemeli

## 12. ?u Anki ?ncelikler

1. Rehberler liste ve detail sayfalar?nda bir tur daha editoryal sadele?tirme
2. Galeri sayfas?nda foto?raf? daha bask?n hale getiren son kompozisyon cilas?
3. Hakk?m?zda sayfas?nda daha karakterli ama sade bir anlat? iyile?tirmesi
4. Haf?za dosyalar?n?n ve i?erik standartlar?n?n bu derslerle senkron tutulmas?
