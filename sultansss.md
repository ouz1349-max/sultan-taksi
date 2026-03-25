# Sultan SSS Veritabanı

Bu dosya, projede şimdiye kadar kullanılan tüm SSS içeriklerini tek yerde tutar.  
Kural: Her yeni SSS eklendiğinde bu dosyaya da eklenir.

## Kullanım Kuralı
- `source`: SSS'nin nerede kullanıldığı.
- `status`: `active` (kullanımda) veya `archived` (eski/alternatif).
- Aynı soru farklı sayfalarda farklı niyetle geçebilir; ayrı kayıt tutulur.

## TR - Ana Sayfa SSS (active)

### TR-HOME-001
- source: `src/messages/tr.json -> faq`
- status: `active`
- question: `Gece saatlerinde de hizmet veriyor musunuz?`
- answer: `Evet. Sultan Taksi 7/24 aktif çalışır ve gece çağrılarında da araç yönlendirmesi yapar.`

### TR-HOME-002
- source: `src/messages/tr.json -> faq`
- status: `active`
- question: `Araçlar ortalama kaç dakikada geliyor?`
- answer: `Yoğunluğa göre değişmekle birlikte merkez bölgelerde ortalama 8-12 dakikada araç ulaşır.`

### TR-HOME-003
- source: `src/messages/tr.json -> faq`
- status: `active`
- question: `Hizmet alanınız nedir?`
- answer: `Durak çevresindeki yaklaşık 2 km alanda hizmet veriyoruz. Daha uzak taleplerde müsaitlik durumuna göre dönüş yapılır.`

### TR-HOME-004
- source: `src/messages/tr.json -> faq`
- status: `active`
- question: `Ödeme nasıl yapılıyor?`
- answer: `Nakit ödeme yapabilirsiniz. Kartlı ödeme için çağrı sırasında bilgi vererek uygun araç talep edebilirsiniz.`

## EN - Home FAQ (active)

### EN-HOME-001
- source: `src/messages/en.json -> faq`
- status: `active`
- question: `Do you operate during late-night hours?`
- answer: `Yes. Sultan Taxi operates 24/7, including late-night hours.`

### EN-HOME-002
- source: `src/messages/en.json -> faq`
- status: `active`
- question: `How long does it usually take for a taxi to arrive?`
- answer: `Depending on traffic, average arrival time is around 8-12 minutes in central areas.`

### EN-HOME-003
- source: `src/messages/en.json -> faq`
- status: `active`
- question: `What is your service area?`
- answer: `We serve approximately within a 2 km area around our station. Requests from farther locations are handled based on availability.`

### EN-HOME-004
- source: `src/messages/en.json -> faq`
- status: `active`
- question: `What payment methods are available?`
- answer: `Cash is accepted. For card payment, let us know during your call so we can send a suitable car.`

## TR - Duyurular Sayfası SSS (active)

### TR-ANN-001
- source: `src/app/[locale]/duyurular/page.tsx`
- status: `active`
- question: `Kenan Evren Sultan Taksi hangi bölgede hizmet veriyor?`
- answer: `Durak çevresindeki yaklaşık 2 km alanda hizmet veriyoruz. Daha uzak talepler için müsaitlik durumuna göre bilgilendirme yapıyoruz.`

### TR-ANN-002
- source: `src/app/[locale]/duyurular/page.tsx`
- status: `active`
- question: `Araç yönlendirme ne kadar sürüyor?`
- answer: `Yoğunluğa bağlı olarak hizmet alanımız içinde genellikle kısa sürede araç yönlendirmesi yapıyoruz.`

### TR-ANN-003
- source: `src/app/[locale]/duyurular/page.tsx`
- status: `active`
- question: `Bize nasıl ulaşabilirsiniz?`
- answer: `Bize 0530 222 77 95 numarasından telefonla veya WhatsApp üzerinden 7/24 ulaşabilirsiniz.`

### TR-ANN-004
- source: `src/app/[locale]/duyurular/page.tsx`
- status: `active`
- question: `Neden Kenan Evren Sultan Taksi?`
- answer: `Hızlı dönüş, net iletişim, güvenli sürüş ve müşteri memnuniyeti odaklı hizmet anlayışımızla bölgedeki yolcuların güvenini kazanıyoruz.`

## EN - Announcements FAQ (active)

### EN-ANN-001
- source: `src/app/[locale]/duyurular/page.tsx`
- status: `active`
- question: `What area does Kenan Evren Sultan Taxi serve?`
- answer: `We serve approximately within a 2 km area around our station. Requests from farther locations are handled based on availability.`

### EN-ANN-002
- source: `src/app/[locale]/duyurular/page.tsx`
- status: `active`
- question: `How quickly can a taxi be dispatched?`
- answer: `Depending on traffic, we usually dispatch quickly within our core service area.`

### EN-ANN-003
- source: `src/app/[locale]/duyurular/page.tsx`
- status: `active`
- question: `How can you contact us?`
- answer: `You can reach us 24/7 by phone at +90 530 222 77 95 or via WhatsApp.`

### EN-ANN-004
- source: `src/app/[locale]/duyurular/page.tsx`
- status: `active`
- question: `Why choose Kenan Evren Sultan Taxi?`
- answer: `Passengers choose us for fast response, clear communication, safe driving, and a customer-focused service approach.`
