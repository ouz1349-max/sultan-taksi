# Sultan Taksi Index

Bu dosya, proje hafızasının giriş noktasıdır. Sultan Taksi projesinde teknik durum, içerik standartları ve operasyonel kararlar için önce bu dosyaya bakılır.

## Ana Hafıza Dosyaları

1. [project_memory.md](/F:/Belgeler/sultantaksi/project_memory.md)
- Projenin teknik yapısı, sayfa mimarisi, SEO yönü ve sprint durumu.

2. [proje günlüğü.md](/F:/Belgeler/sultantaksi/proje%20günlüğü.md)
- Yapılan değişikliklerin tarihsel kaydı.

3. [codex.md](/F:/Belgeler/sultantaksi/codex.md)
- Daha teknik ve kronolojik implementasyon notları.

4. [i18n_guidelines.md](/F:/Belgeler/sultantaksi/i18n_guidelines.md)
- TR/EN içerik üretim ve güncelleme kuralları.

5. [content_checklist.md](/F:/Belgeler/sultantaksi/content_checklist.md)
- Yeni sayfa, duyuru, SSS ve yasal içerik eklerken kullanılacak kontrol listesi.

6. [sultansss.md](/F:/Belgeler/sultantaksi/sultansss.md)
- Merkezi SSS veritabanı.

## Source Of Truth

- Güncel ürün/proje durumu: [project_memory.md](/F:/Belgeler/sultantaksi/project_memory.md)
- Tarihsel yapılan işler: [proje günlüğü.md](/F:/Belgeler/sultantaksi/proje%20günlüğü.md)
- SSS kaynağı: [sultansss.md](/F:/Belgeler/sultantaksi/sultansss.md)

## Operasyon Kuralı

- Yeni bir karar alındığında önce ilgili içerik veya kod güncellenir.
- Ardından gerekiyorsa `project_memory.md`, `proje günlüğü.md`, `codex.md` ve `sultansss.md` senkronize edilir.
- Eski ama referans değeri olan notlar silinmez; arşiv mantığıyla korunur.

## Şu Anki Öncelikli Alanlar

1. Galeri son cila turu
2. Yeni sayfalar arası görsel tutarlılık
3. Duyurular yapısının ileride arşivlenebilir hale getirilmesi
4. Sprint sonu toplu commit / push / deploy
