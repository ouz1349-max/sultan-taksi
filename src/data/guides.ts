export type GuideSection = {
  title: string;
  body: string;
};

export type GuideStop = {
  title: string;
  description: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideLocaleContent = {
  categoryLabel: string;
  title: string;
  excerpt: string;
  readTime: string;
  seoDescription: string;
  heroImageAlt: string;
  intro: string;
  heroLead: string;
  highlight?: string;
  highlights?: string[];
  sections: GuideSection[];
  stopsTitle?: string;
  stopsIntro?: string;
  stops?: GuideStop[];
  reasonsTitle?: string;
  reasons?: string[];
  faqTitle?: string;
  faqs?: GuideFaq[];
  takeawayTitle?: string;
  takeaway: string;
  authorRole: string;
  reviewedBy?: string;
  businessNote?: string;
  disclaimer?: string;
  ctaTitle: string;
  ctaBody: string;
};

export type GuideEntry = {
  slug: string;
  category: 'routes' | 'local';
  featured: boolean;
  author: string;
  publishedAt: string;
  updatedAt: string;
  heroImage: string;
  ogImage?: string;
  tags: string[];
  relatedGuides: string[];
  tr: GuideLocaleContent;
  en: GuideLocaleContent;
};

export const guides: GuideEntry[] = [
  {
    slug: 'kenan-evrenden-havalimanina-taksiyle-ulasim',
    category: 'routes',
    featured: true,
    author: 'Sultan Taksi Operasyon Ekibi',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp',
    tags: ['Çukurova Havalimanı', 'Havalimanı Transfer', 'Adana Taksi', 'Ulaşım'],
    relatedGuides: [
      'adanada-taksiyle-hastane-otogar-havalimani-yolculugu',
      'adanada-bagajli-cocuklu-evcil-hayvanli-taksi',
    ],
    tr: {
      categoryLabel: 'Rota Rehberi',
      title: "Kenan Evren'den Çukurova Havalimanı'na Taksiyle Nasıl Gidilir?",
      excerpt:
        "Adana'nın yeni havalimanı dinamiğinde yolculuğunuzu stressiz planlayın. Süre, bagaj kapasitesi ve trafik değişkenlerini hesaba katarak doğru taksi çağrısı yapmanın detayları.",
      readTime: '5 dk',
      seoDescription:
        "Adana Kenan Evren'den Çukurova Havalimanı'na taksiyle ulaşım rehberi. Otoyol rotaları, taksimetre işleyişi, bagaj durumu ve uçuş saati planlama tavsiyeleri.",
      heroImageAlt: 'Çukurova Havalimanı yolculuğu için hazırlanan taksi aracı',
      intro:
        "Adana'da havalimanı ulaşım dinamikleri değişti. Şehir merkezindeki eski Şakirpaşa alışkanlığıyla hareket etmek artık doğru değil; yeni Çukurova Havalimanı için mesafe, otoyol bağlantısı, gişe geçişleri, bagaj hazırlığı ve uçuş saati birlikte düşünülmeli. Uçağınızı kaçırma stresi yaşamamak ve kapıda beklenmedik bagaj sorunlarıyla karşılaşmamak için doğru zamanlama, açık iletişim ve gerçekçi beklentiler en önemli kriterlerdir.",
      heroLead:
        'Uçuş günü trafik durumunu ve güvenlik kontrollerini hesaba katarak evden çıkış saatinizi esnek tutmanız yolculuk stresini azaltır.',
      highlight:
        'Yeni havalimanı güzergahında otoyol kullanımı süreyi olumlu etkileyebilir; otoyol ve gişe ücretleri taksimetre tutarına eklenir.',
      highlights: [
        'Çağrı sırasında uçuş kalkış saatinizi ve bagaj sayınızı mutlaka belirtin.',
        'Şoförlerimiz hız sınırlarına ve trafik kurallarına uymakla yükümlüdür; geç çıkılan yolda hız talep edilemez.',
        'Sabah erken uçuşları için bir gece önceden bilgi bırakmak araç planlamasını kolaylaştırır.',
        'Tüm yolculuklarda taksimetre açılması yasal zorunluluktur; sabit veya garantili fiyat uygulamamız yoktur.',
      ],
      sections: [
        {
          title: 'Zamanlama: Ne Zaman Evden Çıkmalı?',
          body:
            "Eski alışkanlıklarla uçuştan sadece bir saat önce çıkmak risklidir. Çukurova Havalimanı'nın şehir merkezine mesafesi, check-in işlemleri ve güvenlik kontrolleri birlikte düşünülmelidir. Sabah 07:30 - 09:00 ve akşam 17:30 - 19:30 arası bağlantı yollarında bekleme süresi artabilir. Uçuş saatinizi paylaştığınızda durağımız trafik yoğunluğunu değerlendirip gerçekçi bir çıkış zamanı önerebilir; nihai planlama sorumluluğu yolcuya aittir.",
        },
        {
          title: 'Bagaj Hacmi ve Doğru Araç Yönlendirmesi',
          body:
            "Havalimanı transferlerinde en sık yaşanan sorunlardan biri bagaj kapasitesidir. Ticari taksilerin bagaj hacmi araç modeline göre değişir. 'Üç büyük valizimiz var' veya 'Dört kişiyiz ve kabin boy çantalarımız var' gibi bilgiler, bagaj hacmi daha uygun aracın yönlendirilmesine yardımcı olur. Eşyaların arka koltuğa alınması hem güvenlik riski oluşturur hem de yolculuk konforunu düşürür.",
        },
        {
          title: 'Güzergah Seçimi ve Taksimetre İşleyişi',
          body:
            "Kenan Evren veya Çukurova bölgesinden havalimanına ulaşımda genellikle otoyol güzergahı veya D-400 alternatifi değerlendirilir. Şoförümüz araca bindiğinizde o anki trafik durumuna göre rota hakkında bilgi verir. Tercih edilen rotanın uzunluğu, trafikte bekleme ve varsa otoyol geçişleri taksimetre tutarını etkiler.",
        },
        {
          title: 'Gece Uçuşları ve Erken Bildirim',
          body:
            '03:00 - 06:00 arasındaki uçuşlarda son dakikada araç bulma telaşı yaşamamak için erken iletişim kurmak değerlidir. Uçuşunuz kesinleştiğinde bir akşam önceden veya birkaç saat önceden WhatsApp hattımıza bilgi bırakabilirsiniz. Bu not, nöbetçi araç planlamasını kolaylaştırır ve anlık yoğunluk kaynaklı gecikme riskini azaltır.',
        },
      ],
      stopsTitle: 'Havalimanı Rotasındaki Önemli Noktalar',
      stopsIntro: 'Seyahatinizin akışını etkileyebilecek ana geçiş bölgeleri:',
      stops: [
        {
          title: 'Otoyol Bağlantı Kavşakları',
          description: 'Şehir içi trafikten sıyrılıp transit geçişe başladığımız ilk noktalar.',
        },
        {
          title: 'D-400 Karayolu Ana Arterleri',
          description:
            'Otoyol tercih edilmediğinde veya alternatif gerektiğinde kullanılan, trafik ışıklarının bulunduğu genel güzergah.',
        },
      ],
      reasonsTitle: 'Havalimanı Ulaşımında Neden Biz?',
      reasons: [
        'Bölgenin trafik dinamiklerini ve alternatif rotalarını bilen deneyimli şoför kadrosu.',
        'Bagaj sayınıza ve yolcu sayınıza göre uygun hacimli aracı yönlendirme çabası.',
        'Tamamen yasal taksimetreye dayalı, sürprizsiz ve şeffaf çalışma prensibi.',
      ],
      faqTitle: 'Havalimanı Ulaşımı Hakkında Sıkça Sorulanlar',
      faqs: [
        {
          question: 'Havalimanına gitmek tam olarak kaç dakika sürer?',
          answer:
            'Kesin süre vermek yanıltıcı olur. Süre; yola çıkış saati, rota, hava durumu ve trafik yoğunluğuna göre değişir. Her zaman tahmini süreden erken yola çıkmanızı öneririz.',
        },
        {
          question: 'Havalimanı için sabit bir fiyatınız var mı?',
          answer:
            'Hayır. Ticari taksi yolculuklarında taksimetre açılması zorunludur. Ücret; kilometre, bekleme süresi ve varsa otoyol geçiş ücretlerine göre belirlenir.',
        },
        {
          question: '5 kişilik bir aileyiz, tek araca binebilir miyiz?',
          answer:
            'Standart ticari taksilerde yolcu kapasitesi şoför hariç en fazla 4 kişidir. Kalabalık gruplar için iki araç talep edilmelidir.',
        },
        {
          question: 'Ödemeyi kredi kartı ile yapabilir miyim?',
          answer:
            'Kartla ödeme ihtiyacınızı çağrı sırasında belirtmenizi rica ederiz. Böylece uygun araç ve cihaz durumu hakkında daha net bilgi verilebilir.',
        },
        {
          question: 'Havalimanından dönüşte sizi arayabilir miyiz?',
          answer:
            'İniş yaptığınızda durağımızla iletişime geçebilirsiniz. Müsait araç varsa yönlendirme yapılır; havalimanı bölgesindeki yolcu alma kuralları geçerlidir.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Çukurova Havalimanı yolculuğu, zamanı doğru yönettiğinizde ve ihtiyaçlarınızı durağımıza açıkça aktardığınızda daha rahat bir deneyime dönüşür. Amacımız sizi kurallara uygun ve güvenli şekilde hedefinize ulaştırmaktır.',
      authorRole: 'Durak Yöneticisi',
      reviewedBy: 'Sultan Taksi Operasyon',
      businessNote:
        'Yolculuk süresi ve taksimetre ücretlendirmesi; trafik yoğunluğu, yol çalışmaları, hava şartları, tercih edilen güzergah ve güncel tarifelere göre farklılık gösterir.',
      disclaimer:
        'Bu rehber planlama amaçlıdır. Kesin varış süresi veya net ücret garantisi verilmez. Şoförlerimiz trafik kurallarına uymakla yükümlüdür.',
      ctaTitle: 'Uçuş saatiniz yaklaşıyor mu?',
      ctaBody:
        'Bagaj durumunuzu ve bulunduğunuz konumu WhatsApp üzerinden paylaşın, müsait araçlarımız arasından uygun olanı adresinize yönlendirelim.',
    },
    en: {
      categoryLabel: 'Route Guide',
      title: 'How to Get to Çukurova Airport from Kenan Evren by Taxi',
      excerpt:
        "Plan your airport ride around Adana's new travel reality, with practical notes on timing, luggage, traffic, highway use, and taximeter rules.",
      readTime: '5 min',
      seoDescription:
        'Guide to taking a taxi from Adana Kenan Evren to Çukurova Airport. Highway routes, taximeter use, luggage handling, and flight-time planning.',
      heroImageAlt: 'Taxi vehicle prepared for a Çukurova Airport journey',
      intro:
        "Airport transportation in Adana has changed. The old Şakirpaşa habit of treating the airport as a short city ride no longer works for Çukurova Airport. Distance, highway access, tolls, luggage, and flight time should be planned together. Clear communication and realistic timing help reduce missed-flight stress and last-minute luggage problems.",
      heroLead:
        'Keeping your departure time flexible by considering traffic and airport security checks will reduce travel stress.',
      highlight:
        'Using the highway can shorten the route, but highway and toll fees are added to the taximeter fare.',
      highlights: [
        'Share your flight departure time and luggage count when calling.',
        'Our drivers must follow speed limits and traffic rules; speeding cannot be requested after a late departure.',
        'For early morning flights, notifying us the night before helps with night-shift planning.',
        'The taximeter is legally required on all taxi journeys; we do not provide guaranteed flat fares.',
      ],
      sections: [
        {
          title: 'Timing: When Should You Leave?',
          body:
            'Leaving only one hour before a flight is risky. The airport distance, check-in, and security checks should be considered together. Morning and evening rush hours can increase waiting around connection roads. If you share your flight time, our dispatch can suggest a realistic departure window, while final timing remains the passenger’s responsibility.',
        },
        {
          title: 'Luggage Volume and Vehicle Dispatch',
          body:
            'Luggage capacity is one of the most common airport-transfer issues. Taxi trunk volume varies by vehicle model. Details such as “three large suitcases” or “four passengers with cabin bags” help us look for a more suitable vehicle. Placing luggage on the back seat may reduce both safety and comfort.',
        },
        {
          title: 'Route Selection and Taximeter Use',
          body:
            'From Kenan Evren or Çukurova, the usual choices are the toll highway or the D-400 route. Your driver can explain route options according to live conditions. Distance, waiting time, and tolls affect the final taximeter amount.',
        },
        {
          title: 'Night Flights and Early Notice',
          body:
            'For flights between 03:00 and 06:00, early notice is helpful. Once your flight is confirmed, you can message or call us the evening before or a few hours in advance. This helps coordinate night-shift availability and reduces the risk of demand-related delays.',
        },
      ],
      stopsTitle: 'Key Points on the Airport Route',
      stopsIntro: 'Main transit areas that can affect the flow of your journey:',
      stops: [
        {
          title: 'Highway Connection Junctions',
          description: 'Initial points where the route leaves city traffic for transit travel.',
        },
        {
          title: 'D-400 Main Arteries',
          description: 'The traffic-light-heavy alternative when the toll road is not preferred or another route is needed.',
        },
      ],
      reasonsTitle: 'Why Us for Airport Transport?',
      reasons: [
        'Experienced local drivers who understand regional traffic and route alternatives.',
        'A careful effort to dispatch a suitable vehicle based on passenger and luggage count.',
        'A transparent working principle based on the legal taximeter.',
      ],
      faqTitle: 'Frequently Asked Questions About Airport Transport',
      faqs: [
        {
          question: 'Exactly how long does it take to get to the airport?',
          answer:
            'Giving an exact time would be misleading. Departure time, route, weather, and traffic can change the travel time. We recommend leaving earlier than the estimated window.',
        },
        {
          question: 'Do you have a fixed airport fare?',
          answer:
            'No. The taximeter is mandatory for commercial taxi journeys. The fare depends on distance, waiting time, and any toll fees.',
        },
        {
          question: 'We are a family of five. Can we use one taxi?',
          answer:
            'Standard commercial taxis can carry up to four passengers excluding the driver. Larger groups need two vehicles.',
        },
        {
          question: 'Can I pay by card?',
          answer:
            'Please mention card payment when calling so we can give clearer information based on suitable vehicle and device availability.',
        },
        {
          question: 'Can we call you for the return from the airport?',
          answer:
            'You can contact our rank after landing. If a vehicle is available, dispatch can be arranged under the airport’s local pickup rules.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'A Çukurova Airport taxi ride becomes easier when timing is realistic and your needs are shared clearly with the rank. Our goal is safe and rule-compliant transport.',
      authorRole: 'Rank Manager',
      reviewedBy: 'Sultan Taxi Operations',
      businessNote:
        'Travel time and taximeter pricing vary by traffic, roadworks, weather, route choice, and current official tariffs.',
      disclaimer:
        'This guide is for planning only. Exact arrival time or fare cannot be guaranteed. Drivers must obey traffic rules.',
      ctaTitle: 'Is your flight approaching?',
      ctaBody:
        'Share your luggage details and location via WhatsApp so we can direct a suitable available vehicle to your address.',
    },
  },
  {
    slug: 'kenan-evrenden-otogara-taksiyle-nasil-gidilir',
    category: 'routes',
    featured: false,
    author: 'Sultan Taksi Operasyon Ekibi',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp',
    tags: ['Adana Otogar', 'Fevzipaşa', 'Taksiyle Ulaşım', 'Seyahat Planlama'],
    relatedGuides: [
      'adanada-taksiyle-hastane-otogar-havalimani-yolculugu',
      'adanada-bagajli-cocuklu-evcil-hayvanli-taksi',
    ],
    tr: {
      categoryLabel: 'Rota Rehberi',
      title: "Kenan Evren'den Adana Merkez Otogarı'na Taksiyle Nasıl Gidilir?",
      excerpt:
        "Otobüs seyahatlerinizde Fevzipaşa'daki Merkez Otogar'a stressiz ulaşımın yolları. Kalkış saati, D-400 trafiği ve bagaj durumuna göre taksi planlaması.",
      readTime: '5 dk',
      seoDescription:
        "Kenan Evren'den Adana Merkez Otogarı'na taksiyle ulaşım rehberi. Otobüs kalkış saati, D-400 trafiği, bagaj bildirimi ve planlama tavsiyeleri.",
      heroImageAlt: 'Adana Fevzipaşa Merkez Otogarı yönüne gitmek üzere hazırlanan taksi aracı',
      intro:
        'Adana Merkez Otogarı, D-400 karayolu üzerindeki konumu ve çevresindeki trafik dinamikleri nedeniyle gerçekçi planlama ister. Kenan Evren veya Çukurova bölgesinden otogara gitmek düz bir rota gibi görünse de sabah mesaisi, akşam iş çıkışı, resmi tatil ve öğrenci hareketliliği sürenin uzamasına neden olabilir. Otobüsünüzü kaçırma endişesi yaşamadan peronunuza ulaşmak için kalkış saatinizi, bagaj durumunuzu ve otogar yoğunluğunu birlikte düşünmelisiniz.',
      heroLead:
        'Otobüs kalkış saatinizi ve trafik yoğunluğunu hesaba katarak erken yola çıkmak, peron ve bagaj süreçlerindeki zaman kayıplarını telafi eder.',
      highlight:
        'Resmi tatiller, üniversite açılış/kapanış dönemleri ve cuma akşamları otogar güzergahında olağan dışı yoğunluk yaşanabilir.',
      highlights: [
        'Bagaj sayınızı belirtmeniz uygun bagaj hacmine sahip aracın yönlendirilmesini kolaylaştırır.',
        'Otogar giriş noktaları ve peronlara yanaşma süreci yoğun günlerde vakit alabilir.',
        'Şoförlerimiz hız sınırlarına uymakla yükümlüdür; geç kalınan durumlarda hız talep edilemez.',
        'Taksimetre araca bindiğinizde açılır ve trafikte bekleme süreleri ücrete yansır.',
      ],
      sections: [
        {
          title: 'Zamanlama ve Çağrı Planlaması',
          body:
            'Otobüs kalkış saatinden hemen önce taksi çağırmak, beklenmedik trafik sıkışıklıkları ve anlık araç müsaitliği nedeniyle risklidir. D-400 üzerindeki kavşaklar günün belirli saatlerinde yoğunlaşır. Normal yolculuk süresine en az 20-30 dakikalık esneklik payı eklemek güvenli olur. Çağrı sırasında adresinizi ve otobüs kalkış saatinizi paylaşırsanız, durağımız tahmini bir çıkış zamanı konusunda yardımcı olabilir.',
        },
        {
          title: 'Bagaj Durumu ve Araç Yönlendirmesi',
          body:
            'Otogar yolculuklarında büyük valiz, koli veya öğrenci eşyası sık görülür. Çağrı sırasında “iki büyük valiz ve bir sırt çantası var” gibi net bilgi vermek, araç yönlendirmesini daha doğru hale getirir. Bagaj hacmi yetersiz bir aracın kapıya gelmesi zaman kaybına neden olabilir.',
        },
        {
          title: 'D-400 Güzergahı ve Trafik Faktörü',
          body:
            'Kenan Evren’den Fevzipaşa’ya gidişte şehir içi ana arterler ve D-400 kullanılır. Bu güzergah çok sayıda ışık ve bağlantı noktası barındırır. Yağmurlu günlerde veya akşamüstü saatlerinde trafik yavaşlayabilir. Şoförümüz mevcut durumu değerlendirip alternatif sunabilir; taksimetre gidilen mesafe ve bekleme süresine göre işler.',
        },
        {
          title: 'Otogar İçi İniş Noktaları',
          body:
            'Otogarda bırakılacağınız nokta genellikle seyahat edeceğiniz firmanın peronuna en yakın güvenli alandır. Bayram, tatil veya öğrenci hareketliliği gibi dönemlerde araçların peronlara kadar yaklaşması sınırlanabilir. Böyle durumlarda şoförümüz en güvenli ve yürüme mesafesi kısa olan noktayı tercih eder.',
        },
      ],
      stopsTitle: 'Otogar Rotasındaki Kritik Noktalar',
      stopsIntro: 'Ulaşım süresini doğrudan etkileyebilen ana geçiş noktaları:',
      stops: [
        {
          title: 'Şehir İçi Ana Arter Kavşakları',
          description: 'Kenan Evren ve Çukurova bölgesinden D-400’e bağlanırken trafiğin ağırlaştığı ilk noktalar.',
        },
        {
          title: 'D-400 Karayolu',
          description: 'Adana’nın doğu-batı aksını bağlayan, otogara ulaşımın temel sağlandığı ana güzergah.',
        },
        {
          title: 'Fevzipaşa Otogar Giriş Noktaları',
          description: 'Özel günlerde kuyruk oluşabilen, otobüs ve ticari araç hareketliliğinin arttığı son aşama.',
        },
      ],
      reasonsTitle: 'Otogar Ulaşımında Neden Biz?',
      reasons: [
        'Bagaj bilgilerinize göre uygun aracı müsaitlik durumuna göre yönlendirme çabası.',
        'Fevzipaşa güzergahındaki trafik alternatiflerini iyi okuyan deneyimli ekip.',
        'Taksimetre kurallarına tam uyumlu, sürprizsiz fiyatlandırma prensibi.',
      ],
      faqTitle: 'Otogar Ulaşımı Hakkında Sıkça Sorulanlar',
      faqs: [
        {
          question: 'Otogara gitmek tam olarak ne kadar sürer?',
          answer:
            'Kesin dakika vermek yanıltıcı olur. Yola çıkış saati, D-400 üzerindeki trafik ve hava şartları varış süresini değiştirir.',
        },
        {
          question: 'Bagajlarım çok fazla, büyük araç isteyebilir miyim?',
          answer:
            'Filomuz standart ticari taksilerden oluşur. Bagaj miktarınızı belirtirseniz, müsait araçlar içinden daha uygun bagaj hacmine sahip olanı yönlendirmeye çalışırız.',
        },
        {
          question: 'Otogar için sabit ücret belirleyebilir miyiz?',
          answer:
            'Hayır. Ticari taksilerde sabit fiyat uygulaması yapılmaz; taksimetre açılması zorunludur.',
        },
        {
          question: 'Otobüsüm gece yarısı, o saatte araç bulabilir miyim?',
          answer:
            'Durağımız gece nöbetçi araç sistemiyle hizmet verir. Gece yolculukları için birkaç saat önceden haber vermeniz planlamayı kolaylaştırır.',
        },
        {
          question: 'Otogar dönüşünde sizi arasak gelip alabilir misiniz?',
          answer:
            'Müsait araç varsa yönlendirme yapılır. Otogar içindeki yolcu alma kurallarına göre buluşma noktası netleştirilir.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Otogar yolculuğunuzun sorunsuz başlaması, doğru zaman yönetimine ve bagaj durumunuzu önceden paylaşmanıza bağlıdır. Amacımız sizi otobüsünüze güvenlik kuralları çerçevesinde ulaştırmaktır.',
      authorRole: 'Operasyon Koordinatörü',
      reviewedBy: 'Sultan Taksi Yönetimi',
      businessNote:
        'Varış süreleri ve taksimetre tutarları anlık trafik, yol çalışmaları ve güncel tarifelere göre değişiklik gösterir.',
      disclaimer:
        'Bu rehber bilgilendirme amaçlıdır. Ulaşım süreleri garanti edilemez. Erken yola çıkma sorumluluğu yolcuya aittir.',
      ctaTitle: 'Otobüs saatiniz yaklaşıyor mu?',
      ctaBody:
        'Bagaj durumunuzu ve bulunduğunuz konumu bize iletin, uygun araçlarımızdan birini adresinize yönlendirelim.',
    },
    en: {
      categoryLabel: 'Route Guide',
      title: 'How to Get to Adana Main Bus Terminal by Taxi from Kenan Evren',
      excerpt:
        'A practical guide to reaching the Fevzipaşa bus terminal from Kenan Evren by taxi, including timing, D-400 traffic, luggage, and platform planning.',
      readTime: '5 min',
      seoDescription:
        'Taxi guide from Kenan Evren to Adana Main Bus Terminal. Bus departure times, D-400 traffic, luggage details, and planning advice.',
      heroImageAlt: 'Taxi vehicle preparing to head toward Adana Fevzipaşa Main Bus Terminal',
      intro:
        'Adana Main Bus Terminal requires realistic planning because of its location near the D-400 and the traffic around Fevzipaşa. From Kenan Evren or Çukurova, the route may look straightforward, but commuting hours, holidays, and student travel periods can extend the trip. To reach your platform without stress, consider departure time, luggage, and terminal density together.',
      heroLead:
        'Leaving early by considering your bus departure time and traffic can compensate for luggage and platform delays.',
      highlight:
        'Public holidays, university travel periods, and Friday evenings can create unusual congestion toward the terminal.',
      highlights: [
        'Sharing luggage count helps us look for a suitable trunk capacity.',
        'Terminal entrance points and platform access can take time on busy days.',
        'Our drivers must obey traffic rules; speeding cannot be requested when running late.',
        'The taximeter starts when you board, and traffic waiting time is reflected legally.',
      ],
      sections: [
        {
          title: 'Timing and Call Planning',
          body:
            'Calling a taxi right before bus departure is risky because of unexpected traffic and vehicle availability. D-400 intersections can become congested at certain hours. Adding at least 20-30 minutes of flexibility to the expected ride time is safer. If you share your address and bus departure time, dispatch can help with a realistic departure suggestion.',
        },
        {
          title: 'Luggage and Vehicle Dispatch',
          body:
            'Terminal rides often involve large suitcases, boxes, or student belongings. Clear information such as “two large suitcases and one backpack” helps dispatch the right vehicle. Sending a vehicle with insufficient trunk space can cause delays.',
        },
        {
          title: 'D-400 Route and Traffic',
          body:
            'The route from Kenan Evren to Fevzipaşa usually uses city arteries and the D-400. It includes many lights and connection points. Rainy days or late afternoon traffic can slow it down. Your driver may offer alternatives, and the taximeter works according to distance and waiting time.',
        },
        {
          title: 'Drop-off Points Inside the Terminal',
          body:
            'Drop-off usually happens at the safe area closest to your bus company’s platform. During holidays or student travel periods, platform access can be limited. In that case, the driver chooses the safest nearby point with a short walking distance.',
        },
      ],
      stopsTitle: 'Critical Points on the Terminal Route',
      stopsIntro: 'Main transit points that can directly affect travel time:',
      stops: [
        {
          title: 'Inner-City Main Artery Intersections',
          description: 'The first points used to connect from Kenan Evren and Çukurova to the D-400.',
        },
        {
          title: 'D-400 Highway',
          description: 'The main east-west artery used for access to the terminal.',
        },
        {
          title: 'Fevzipaşa Terminal Entrance Points',
          description: 'The final stage where commercial and bus activity increases on special days.',
        },
      ],
      reasonsTitle: 'Why Us for Terminal Transport?',
      reasons: [
        'Effort to dispatch a suitable vehicle based on your luggage details and availability.',
        'An experienced team familiar with traffic alternatives toward Fevzipaşa.',
        'Clear pricing based on official taximeter rules.',
      ],
      faqTitle: 'Frequently Asked Questions About Terminal Transport',
      faqs: [
        {
          question: 'Exactly how long does it take to get to the terminal?',
          answer:
            'An exact minute would be misleading. Departure time, D-400 traffic, and weather conditions can change arrival time.',
        },
        {
          question: 'I have a lot of luggage. Can I ask for a larger vehicle?',
          answer:
            'Our fleet consists of standard commercial taxis. If you explain your luggage amount, we try to dispatch the most suitable available vehicle.',
        },
        {
          question: 'Can we agree on a fixed terminal fare?',
          answer:
            'No. Fixed fares are not used in commercial taxis; the taximeter must be turned on.',
        },
        {
          question: 'My bus is at midnight. Can I find a car?',
          answer:
            'Our rank works with night-shift vehicles. Giving notice a few hours in advance helps planning.',
        },
        {
          question: 'Can you pick us up from the terminal on return?',
          answer:
            'If a vehicle is available, dispatch can be arranged. The meeting point is clarified according to terminal pickup rules.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'A smooth terminal ride depends on realistic timing and sharing your luggage details in advance. Our goal is to get you to your bus safely and under traffic rules.',
      authorRole: 'Operations Coordinator',
      reviewedBy: 'Sultan Taxi Management',
      businessNote: 'Arrival times and taximeter fares vary by traffic, roadworks, and current tariffs.',
      disclaimer:
        'This guide is informational. Travel times cannot be guaranteed. The responsibility to leave early belongs to the passenger.',
      ctaTitle: 'Is your bus departure approaching?',
      ctaBody:
        'Share your luggage details and location so we can dispatch a suitable available vehicle efficiently.',
    },
  },
  {
    slug: 'adanada-taksiyle-gorulebilecek-yerler',
    category: 'local',
    featured: false,
    author: 'Sultan Taksi Rehberlik',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-02.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-02.webp',
    tags: ['Adana Turu', 'Şehir İçi Ulaşım', 'Gezilecek Yerler', 'Taksiyle Gezi'],
    relatedGuides: [
      'cukurovada-taksiyle-sehir-ici-ulasim-rehberi',
      'guzelyali-resatbey-cevresinden-taksi-cagirma-rehberi',
    ],
    tr: {
      categoryLabel: 'Yerel Rehber',
      title: "Adana'da Taksiyle Gezilecek Yerler: Kenan Evren'den Pratik Rota",
      excerpt:
        "Adana'nın tarihi ve turistik noktalarını yorulmadan, sıcaklardan etkilenmeden gezmek isteyenler için pratik şehir içi taksi rotaları.",
      readTime: '4 dk',
      seoDescription:
        "Adana'da taksiyle gezilecek yerler. Taşköprü, Sabancı Merkez Camii, Büyüksaat ve Ziyapaşa arası taksi rotaları ve bekleme tarifesi bilgileri.",
      heroImageAlt: 'Adana şehir içi noktalarında hizmet veren taksi',
      intro:
        'Adana tarihi dokusu, lezzet durakları ve Seyhan Nehri çevresindeki güzellikleriyle keşfedilmeyi hak eder. Ancak sıcak hava, yoğun trafik ve sınırlı zaman yürüyerek gezmeyi zorlaştırabilir. Kenan Evren veya Çukurova bölgesinden başlayarak şehrin ikonik noktalarına taksiyle gitmek, park arama derdini azaltır ve klimalı, konforlu bir ulaşım alternatifi sunar.',
      heroLead:
        'Farklı noktaları ziyaret edeceğiniz bir şehir gezisinde kısa duraklar için bekleme tarifesini, uzun ziyaretlerde ise yeni araç çağırmayı değerlendirebilirsiniz.',
      highlight:
        'Büyüksaat ve Kazancılar çevresinde sokaklar dar, yaya alanları fazladır; şoförlerimiz sizi en yakın güvenli yürüme noktasında indirir.',
      highlights: [
        'Şehir içi turistik rotalarda trafik günün saatine göre ciddi değişiklik gösterir.',
        'Kısa fotoğraf molalarında bekleme talep edilebilir; bekleme süresi taksimetreye yansır.',
        'Tarihi bölgelerde tek yön ve yaya alanları nedeniyle haritadaki mesafe ile araç rotası farklı olabilir.',
        'Turistik gezilerde sabit tur paketimiz yoktur; güzergah ve ücret taksimetreye göre oluşur.',
      ],
      sections: [
        {
          title: 'Rotanın Kalbi: Seyhan Nehri Çevresi',
          body:
            'Sabancı Merkez Camii, Merkez Park ve Taşköprü birbirine yakın noktalardır. Kenan Evren’den bu bölgeye yapılacak bir taksi yolculuğu sizi nehir kıyısına doğrudan ulaştırır. Şoförümüz Merkez Park’ın uygun bir kapısında veya Taşköprü’ye yakın güvenli bir noktada indirebilir.',
        },
        {
          title: 'Tarihi Doku: Büyüksaat ve Kazancılar',
          body:
            'Taşköprü’den sonra Büyüksaat ve Kazancılar Çarşısı tercih edilebilir. Bu bölge dar sokaklı ve yoğun yaya hareketliliğine sahiptir. Taksiyle en uygun ana caddeye kadar yaklaşmak, iç kısmı yürüyerek keşfetmek daha doğru olur. Dönüşte bulunduğunuz ana caddeden tekrar araç isteyebilirsiniz.',
        },
        {
          title: 'Modern Adana: Ziyapaşa ve Turgut Özal',
          body:
            'Tarihi noktaların ardından kahve, alışveriş veya yemek molası için Ziyapaşa Bulvarı, Şinasi Efendi veya Turgut Özal tercih edilebilir. Bu bölgelerde park yeri bulmak zor olduğundan taksi kullanmak doğrudan mekanın önünde veya yakınında inmenizi sağlar.',
        },
        {
          title: 'Beklemeli Yolculuklar ve Taksimetre',
          body:
            'Fotoğraf molası gibi kısa duraklarda şoförden beklemesini isteyebilirsiniz. Bekleme süresinde taksimetre yasal bekleme tarifesiyle işlemeye devam eder. Müze, uzun yemek veya kapsamlı gezi gibi durumlarda aracı bekletmek yerine yolculuğu sonlandırıp yeni araç çağırmak genellikle daha ekonomiktir.',
        },
      ],
      stopsTitle: 'Popüler Şehir İçi Duraklar',
      stopsIntro: 'Taksiyle kolayca ulaşabileceğiniz öne çıkan lokasyonlar:',
      stops: [
        {
          title: 'Taşköprü ve Merkez Camii',
          description: 'Şehrin simgeleri. Yaya erişimi kolay, araçla çevresine kadar yaklaşılabilen noktalar.',
        },
        {
          title: 'Seyhan Baraj Gölü Çevresi',
          description: 'Gün batımında tercih edilen manzaralı bulvar. Hafta sonları trafik yavaşlayabilir.',
        },
        {
          title: 'Ziyapaşa ve Şinasi Efendi',
          description: 'Modern kafelerin ve mağazaların bulunduğu, park yeri bulmanın zor olduğu popüler yaşam alanları.',
        },
      ],
      reasonsTitle: 'Şehir İçi Turlarda Neden Biz?',
      reasons: [
        'Adana’nın tek yönlü sokaklarını, yaya alanlarını ve alternatif rotalarını bilen yerel şoför kadrosu.',
        'Yaz sıcağında bakımlı ve klimalı araçlarla daha konforlu seyahat imkanı.',
        'Sabit tur paketi veya gizli ücret yerine yasal taksimetreye dayalı net ücretlendirme.',
      ],
      faqTitle: 'Şehir İçi Gezi Rotaları Hakkında Sıkça Sorulanlar',
      faqs: [
        {
          question: 'Adana turu için sabit paketiniz var mı?',
          answer:
            'Hayır. Ticari taksi olarak sabit ücretli tur paketi veya günlük araç kiralama hizmeti sunmuyoruz. Hizmet güzergaha bağlı ve taksimetre usulüdür.',
        },
        {
          question: 'Araç müzeyi gezerken dışarıda bekleyebilir mi?',
          answer:
            'Kısa beklemeler mümkündür ancak taksimetre bekleme modunda işlemeye devam eder. Uzun ziyaretlerde yeni araç çağırmak daha uygun olabilir.',
        },
        {
          question: 'Şoförler turistik rehberlik yapıyor mu?',
          answer:
            'Şoförlerimiz şehir yollarını ve popüler noktaları bilir, ancak profesyonel turist rehberliği hizmeti vermemektedir.',
        },
        {
          question: 'Baraj gölü etrafında gezip dönmek ne kadar tutar?',
          answer:
            'Ücret başlangıç noktasına, kat edilen mesafeye ve trafikte geçen zamana göre taksimetre tarafından hesaplanır.',
        },
        {
          question: 'Büyüksaat’in tam altına taksiyle girebilir miyiz?',
          answer:
            'Bölgedeki birçok tarihi sokak yaya trafiğine ayrılmıştır. Şoförümüz sizi en yakın güvenli ana caddede indirir.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Adana’yı yorulmadan ve park stresi yaşamadan keşfetmek için taksi pratik bir çözümdür. Rota sizin ihtiyacınıza göre şekillenir, ödeme taksimetre sistemiyle yapılır.',
      authorRole: 'Müşteri İlişkileri Temsilcisi',
      reviewedBy: 'Sultan Taksi Operasyon',
      businessNote:
        'Lokasyonlar arası seyahat süreleri; günün saati, bölgedeki etkinlikler ve yol çalışmalarına göre değişebilir.',
      disclaimer:
        'Bu içerik rota fikri vermek amacıyla hazırlanmıştır. Kesin süre, tur bütçesi veya sabit ücret garantisi içermez.',
      ctaTitle: 'Şehri keşfetmeye hazır mısınız?',
      ctaBody:
        'Bulunduğunuz konumu paylaşın, müsait araçlarımızdan biri sizi Adana’nın güzelliklerine doğru güvenle yola çıkarsın.',
    },
    en: {
      categoryLabel: 'Local Guide',
      title: 'Places to Visit by Taxi in Adana: Practical Routes from Kenan Evren',
      excerpt:
        'Practical city taxi routes for exploring Adana’s historical and touristic spots without heat, parking, or walking stress.',
      readTime: '4 min',
      seoDescription:
        'Places to visit by taxi in Adana. Taxi routes between Taşköprü, Sabancı Central Mosque, Büyüksaat, Ziyapaşa, and waiting tariff notes.',
      heroImageAlt: 'Taxi serving inner-city points of Adana',
      intro:
        'Adana deserves to be explored with its history, food, and Seyhan River scenery. But heat, traffic, and limited time can make walking difficult. Starting from Kenan Evren or Çukurova, using a taxi to reach iconic spots reduces parking stress and offers an air-conditioned option.',
      heroLead:
        'For a city route with multiple stops, consider waiting fare for short breaks and calling a new vehicle for longer visits.',
      highlight:
        'Around Büyüksaat and Kazancılar, streets are narrow and pedestrian zones are common; drivers drop you at the nearest safe walking point.',
      highlights: [
        'Traffic on touristic city routes changes significantly by time of day.',
        'Short photo breaks can be discussed, but waiting time is reflected on the taximeter.',
        'In historic areas, one-way streets and pedestrian zones may make the driving route longer than the map distance.',
        'We do not offer fixed tour packages; route and fare are based on the taximeter.',
      ],
      sections: [
        {
          title: 'The Heart of the Route: Seyhan River Area',
          body:
            'Sabancı Central Mosque, Merkez Park, and Taşköprü are close to each other. A taxi ride from Kenan Evren takes you directly to the riverside. Your driver can drop you at a suitable park gate or a safe point near Taşköprü.',
        },
        {
          title: 'Historical Texture: Büyüksaat and Kazancılar',
          body:
            'After Taşköprü, Büyüksaat and Kazancılar Bazaar are common choices. The area has narrow streets and heavy pedestrian movement. It is better to approach by taxi to a suitable main street, then explore on foot.',
        },
        {
          title: 'Modern Adana: Ziyapaşa and Turgut Özal',
          body:
            'For coffee, shopping, or dining after the historic route, Ziyapaşa Boulevard, Şinasi Efendi, or Turgut Özal can be preferred. Parking is difficult in these areas, so taxi use lets you get off close to the venue.',
        },
        {
          title: 'Waiting Trips and the Taximeter',
          body:
            'You can ask the driver to wait for short photo stops. During waiting time, the taximeter continues with the legal waiting tariff. For museums, long meals, or extended visits, ending the ride and calling another vehicle is usually more economical.',
        },
      ],
      stopsTitle: 'Popular Inner-City Stops',
      stopsIntro: 'Prominent locations you can easily reach by taxi:',
      stops: [
        {
          title: 'Taşköprü and Central Mosque',
          description: 'City symbols with easy pedestrian access and convenient nearby drop-off points.',
        },
        {
          title: 'Seyhan Dam Lake Area',
          description: 'A scenic boulevard preferred around sunset. Weekend traffic can be slow.',
        },
        {
          title: 'Ziyapaşa and Şinasi Efendi',
          description: 'Popular living areas with cafes and shops where parking is difficult.',
        },
      ],
      reasonsTitle: 'Why Us for City Routes?',
      reasons: [
        'Local drivers who know one-way streets, pedestrian zones, and alternatives.',
        'More comfortable travel in hot weather with maintained, air-conditioned vehicles.',
        'Clear pricing based on the legal taximeter, not hidden tour fees.',
      ],
      faqTitle: 'Frequently Asked Questions About City Routes',
      faqs: [
        {
          question: 'Do you offer a fixed Adana tour package?',
          answer:
            'No. As a commercial taxi rank, we do not offer fixed-price tour packages or daily rentals. Service is route-based and metered.',
        },
        {
          question: 'Can the vehicle wait while we visit a museum?',
          answer:
            'Short waiting is possible, but the taximeter continues in waiting mode. For long visits, calling a new vehicle afterward may be more practical.',
        },
        {
          question: 'Do drivers provide tourist guiding?',
          answer:
            'Drivers know the city’s roads and popular points, but they do not provide professional tourist guide service.',
        },
        {
          question: 'How much is a dam lake ride and return?',
          answer:
            'The fare depends on your starting point, distance covered, and traffic time, and is calculated by the taximeter.',
        },
        {
          question: 'Can a taxi go right under Büyüksaat?',
          answer:
            'Many historic streets are pedestrian-only. The driver drops you at the nearest safe main street.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'A taxi is a practical way to explore Adana without heat and parking stress. The route follows your needs, and payment is based on the taximeter.',
      authorRole: 'Customer Relations Representative',
      reviewedBy: 'Sultan Taxi Operations',
      businessNote: 'Travel times between locations vary by time of day, events, and roadworks.',
      disclaimer:
        'This content is a route idea. It does not guarantee exact travel time, tour budget, or fixed fare.',
      ctaTitle: 'Ready to explore the city?',
      ctaBody:
        'Share your location and let an available vehicle take you safely toward Adana’s landmarks.',
    },
  },
  {
    slug: 'kenan-evrende-gece-taksi-cagirirken-dikkat-edilecekler',
    category: 'local',
    featured: false,
    author: 'Sultan Taksi Nöbet Ekibi',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-02.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-02.webp',
    tags: ['Gece Ulaşımı', 'Nöbetçi Taksi', 'Güvenli Ulaşım', 'Adana Kenan Evren'],
    relatedGuides: [
      'guzelyali-resatbey-cevresinden-taksi-cagirma-rehberi',
      'kenan-evren-kisa-mesafe-taksi-rehberi',
    ],
    tr: {
      categoryLabel: 'Yerel Rehber',
      title: "Kenan Evren'de Gece Taksi Çağırırken Nelere Dikkat Edilmeli?",
      excerpt:
        'Gece geç saatlerde güvenli ve sorunsuz araç bulmanın yolları. Açık adres paylaşımı, nöbetçi araç durumu ve bekleme süreleri hakkında operasyonel bilgiler.',
      readTime: '4 dk',
      seoDescription:
        "Adana Kenan Evren'de gece taksi çağırma rehberi. Nöbetçi taksi, güvenli iletişim, gece ulaşımı planlama ve taksimetre bilgilendirmeleri.",
      heroImageAlt: 'Gece saatlerinde aydınlatılmış sokakta bekleyen Sultan Taksi aracı',
      intro:
        'Adana’da yaşam gün batımıyla bitmez; ancak gece ulaşımı gündüze göre farklı çalışır. Kenan Evren, Çukurova veya Turgut Özal çevresinde gece mesaisinden çıkarken, etkinlikten dönerken veya acil bir ulaşım ihtiyacı olduğunda sokaktaki araç sirkülasyonu daha sınırlı olabilir. Gece kapıda uzun süre beklememek ve adres karışıklığı yaşamamak için net konum paylaşımı ve gerçekçi bekleme süresi önemlidir.',
      heroLead:
        'Gece çağrılarında WhatsApp üzerinden tam konumunuzu veya apartman/site adınızı paylaşmak şoförümüzün sizi daha hızlı bulmasını sağlar.',
      highlight:
        'Türkiye genelinde gece/gündüz tarifesi ayrımı kaldırılmıştır; taksimetre günün 24 saati aynı standart tarife üzerinden çalışır.',
      highlights: [
        'Nöbetçi araç sayısı özellikle 01:00 - 06:00 arasında gündüze göre daha sınırlı olabilir.',
        'Aydınlatması zayıf sokaklarda belirgin bir noktada beklemek buluşmayı kolaylaştırır.',
        'Araç kapasitesini aşan kalabalık binişler sürüş güvenliği ve yasal sınırlar nedeniyle kabul edilemez.',
        'Planlı gece yolculuklarında akşamdan bilgi bırakmak araç yönlendirmesini kolaylaştırır.',
      ],
      sections: [
        {
          title: 'Nöbetçi Araç Sistemi ve Bekleme Süreleri',
          body:
            'Gece saatlerinde duraklar nöbetçi araç sistemiyle çalışır. Bir aracın o an başka yolculukta veya uzak bir noktada olması mümkündür. Bu nedenle aradığınızda çağrı merkezimizin bildireceği tahmini süreyi dikkate almak gerekir. Araç müsaitliği sınırlıysa durum şeffaf şekilde paylaşılır.',
        },
        {
          title: 'Net Adres ve Konum Paylaşımı',
          body:
            'Karanlıkta bina numarası, sokak tabelası veya site yan kapısını bulmak zorlaşabilir. “PTT civarındayım” gibi genel tarifler yerine WhatsApp konumu, apartman adı, dış cephe rengi veya açık olan bir işletme referansı vermek operasyonu hızlandırır.',
        },
        {
          title: 'Güvenlik ve Kurallar Çerçevesinde Seyahat',
          body:
            'Gece yolculuklarında da hız sınırları ve trafik kuralları geçerlidir. Yolun boş olması hız yapılacağı anlamına gelmez. Ayrıca standart ticari taksilerde şoför hariç 4 yolcu sınırı vardır. Kalabalık gruplar için iki araç talep edilmelidir.',
        },
        {
          title: 'Gece İletişimi ve Ödeme',
          body:
            'Gece saatlerinde nakit bozdurmak zor olabilir. Kartla ödeme ihtiyacınız varsa çağrı sırasında belirtmeniz daha doğru araç yönlendirmesine yardımcı olur. Böylece ödeme aşamasında zaman kaybı ve yanlış beklenti azalır.',
        },
      ],
      stopsTitle: 'Gece Ulaşımında Sık Görülen Durumlar',
      stopsIntro: 'Gece saatlerinde en sık hizmet verdiğimiz rota ve ihtiyaçlar:',
      stops: [
        {
          title: 'Hastane ve Acil Servis Dönüşleri',
          description: 'Gece sağlık kurumu dönüşlerinde sakin ve kurallara uygun yolculuk ihtiyacı.',
        },
        {
          title: 'Mekan ve Restoran Çıkışları',
          description: 'Turgut Özal, Ziyapaşa ve çevresinden eve dönüşlerde konum doğrulamasının önemli olduğu çağrılar.',
        },
        {
          title: 'Erken Saat Otogar/Havalimanı Seferleri',
          description: 'Sabaha karşı yapılan planlı yolculuklarda önceden haber vermek operasyonu rahatlatır.',
        },
      ],
      reasonsTitle: 'Gece Ulaşımında Neden Biz?',
      reasons: [
        'Bölgeyi tanıyan ve gece sürüş tecrübesi olan nöbetçi şoförlerle çalışma.',
        'WhatsApp üzerinden konum ve araç bilgisi paylaşımıyla daha net iletişim.',
        'Ekstra gece zammı olmadan resmi taksimetre tarifesiyle hizmet.',
      ],
      faqTitle: 'Gece Taksi Çağrıları Hakkında Sıkça Sorulanlar',
      faqs: [
        {
          question: 'Gece ücretleri gündüze göre daha mı pahalıdır?',
          answer:
            'Hayır. Türkiye’de gece/gündüz tarifesi ayrımı yoktur. Taksimetre aynı standart tarife üzerinden çalışır.',
        },
        {
          question: 'Gecenin 3’ünde kesin araç bulabilir miyim?',
          answer:
            'Nöbetçi araçlarımız hizmet verir, ancak anlık yoğunluğa bağlı olarak bekleme oluşabilir. Müsaitlik size dürüstçe bildirilir.',
        },
        {
          question: 'Tek başıma yolculuk edeceğim, plaka bilgisi alabilir miyim?',
          answer:
            'Evet. WhatsApp üzerinden araç talep ettiğinizde yönlendirilen aracın bilgisi ve tahmini varış süresi paylaşılabilir.',
        },
        {
          question: 'Site güvenliği aracı içeri almıyorsa ne olur?',
          answer:
            'Şoförümüz ana nizamiyede veya kapıda bekler. Bu durumu çağrı sırasında iletmeniz karşılıklı bekleme süresini azaltır.',
        },
        {
          question: 'Gece yollar boşken daha hızlı gidilebilir mi?',
          answer:
            'Hayır. Trafik kuralları her saatte geçerlidir; hız talep edilemez.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Gece taksi kullanırken net konum paylaşmak, bekleme süresinde gerçekçi olmak ve iletişimi açık tutmak yolculuğun sorunsuz başlamasını sağlar.',
      authorRole: 'Nöbetçi Operasyon Sorumlusu',
      reviewedBy: 'Sultan Taksi Yönetimi',
      businessNote:
        'Gece araç müsaitliği; günün yoğunluğu, hava şartları ve devam eden çağrılara göre anlık olarak değişebilir.',
      disclaimer:
        'Bu rehber bilgilendirme amaçlıdır. Anlık araç tahsisi veya kesin varış süresi garantisi verilmez.',
      ctaTitle: 'Gece güvenli bir ulaşıma mı ihtiyacınız var?',
      ctaBody:
        'WhatsApp üzerinden konumunuzu paylaşın, bölgedeki müsait nöbetçi aracımızı size yönlendirelim.',
    },
    en: {
      categoryLabel: 'Local Guide',
      title: 'What to Consider When Calling a Night Taxi in Kenan Evren',
      excerpt:
        'How to find a safer, smoother ride late at night, with notes on clear location sharing, night-shift vehicles, and waiting times.',
      readTime: '4 min',
      seoDescription:
        'Guide to calling a night taxi in Adana Kenan Evren. Night-shift taxis, safe communication, night transport planning, and taximeter notes.',
      heroImageAlt: 'Sultan Taxi vehicle waiting on an illuminated street at night',
      intro:
        'Adana does not stop after sunset, but night transport works differently from daytime. Around Kenan Evren, Çukurova, or Turgut Özal, street taxi circulation can be more limited when returning from work, venues, or urgent trips. To avoid long outdoor waits and address confusion, clear location sharing and realistic waiting expectations matter.',
      heroLead:
        'Sharing your exact WhatsApp location or apartment/complex name helps the driver find you faster at night.',
      highlight:
        'The day/night tariff distinction has been removed in Turkey; the taximeter works on the same standard tariff 24 hours a day.',
      highlights: [
        'Night-shift vehicle numbers may be more limited, especially between 01:00 and 06:00.',
        'Waiting at a visible, well-lit point helps the driver spot you.',
        'Boarding above legal vehicle capacity is not accepted for safety and legal reasons.',
        'For planned night trips, informing us the evening before helps dispatch planning.',
      ],
      sections: [
        {
          title: 'Night-Shift Vehicles and Waiting Times',
          body:
            'At night, taxi ranks work with a night-shift system. A vehicle may be on another trip or returning from a distant point. Instead of expecting instant arrival, it is best to consider the estimated time shared by dispatch. If availability is limited, we communicate it clearly.',
        },
        {
          title: 'Clear Address and Location Sharing',
          body:
            'Building numbers, street signs, or side gates can be harder to find in the dark. Instead of broad descriptions, send a WhatsApp location or describe the apartment name, building color, or a visible open business nearby.',
        },
        {
          title: 'Safety and Rules at Night',
          body:
            'Speed limits and traffic rules apply at night as well. Empty roads do not allow speeding. Standard commercial taxis can carry up to four passengers excluding the driver; larger groups need two vehicles.',
        },
        {
          title: 'Night Communication and Payment',
          body:
            'Getting change can be difficult late at night. If you need card payment, mention it during the call so dispatch can give clearer guidance and reduce payment-stage surprises.',
        },
      ],
      stopsTitle: 'Common Night Transport Situations',
      stopsIntro: 'Routes and needs we frequently serve during night hours:',
      stops: [
        {
          title: 'Hospital and Emergency Department Returns',
          description: 'Quiet, rule-compliant rides after night health visits.',
        },
        {
          title: 'Venue and Restaurant Exits',
          description: 'Calls from Turgut Özal, Ziyapaşa, and nearby areas where location confirmation is important.',
        },
        {
          title: 'Early Airport or Terminal Trips',
          description: 'Planned early-morning trips where prior notice helps operations.',
        },
      ],
      reasonsTitle: 'Why Us for Night Transport?',
      reasons: [
        'Night-shift drivers familiar with the region.',
        'Clear WhatsApp communication for location and vehicle information.',
        'Official taximeter pricing without an extra night surcharge.',
      ],
      faqTitle: 'Frequently Asked Questions About Night Taxi Calls',
      faqs: [
        {
          question: 'Are night fares more expensive?',
          answer:
            'No. Turkey does not use a separate night tariff for taxis; the taximeter uses the same standard tariff.',
        },
        {
          question: 'Can I definitely find a car at 3 AM?',
          answer:
            'Night-shift vehicles operate, but waiting may occur depending on demand. Availability is communicated honestly.',
        },
        {
          question: 'Can I get the license plate before traveling alone?',
          answer:
            'Yes. When requesting through WhatsApp, the dispatched vehicle information and estimated arrival can be shared.',
        },
        {
          question: 'What if my complex security does not let taxis in?',
          answer:
            'The driver can wait at the main gate. Mentioning this during the call reduces mutual waiting time.',
        },
        {
          question: 'Can you drive faster because roads are empty?',
          answer:
            'No. Traffic rules apply at all hours; speeding cannot be requested.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'Clear location sharing, realistic waiting expectations, and open communication make night taxi trips smoother.',
      authorRole: 'Night-Shift Operations Manager',
      reviewedBy: 'Sultan Taxi Management',
      businessNote: 'Night vehicle availability changes with demand, weather, and active calls.',
      disclaimer: 'This guide is informational. Instant vehicle allocation or exact arrival times cannot be guaranteed.',
      ctaTitle: 'Do you need a safe ride tonight?',
      ctaBody:
        'Share your location via WhatsApp and we will direct an available night-shift vehicle in the area.',
    },
  },
  {
    slug: 'guzelyali-resatbey-cevresinden-taksi-cagirma-rehberi',
    category: 'local',
    featured: false,
    author: 'Sultan Taksi Bölge Ekibi',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-03.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-03.webp',
    tags: ['Güzelyalı Taksi', 'Reşatbey Ulaşım', 'Kısa Mesafe', 'Adana Şehir İçi'],
    relatedGuides: [
      'kenan-evren-kisa-mesafe-taksi-rehberi',
      'cukurovada-taksiyle-sehir-ici-ulasim-rehberi',
    ],
    tr: {
      categoryLabel: 'Yerel Rehber',
      title: 'Güzelyalı ve Reşatbey Çevresinden Taksi Çağırma Rehberi',
      excerpt:
        'Adana’nın işlek mahallelerinde zaman kaybetmeden araç bulmanın ipuçları. Site çıkışları, kafe buluşmaları ve yoğun saatlerde yönlendirme dinamikleri.',
      readTime: '4 dk',
      seoDescription:
        'Adana Güzelyalı ve Reşatbey bölgesinde taksi çağırma rehberi. Açık adres, kafe/restoran çıkışları, yoğun saatler ve kısa mesafe bilgileri.',
      heroImageAlt: 'Güzelyalı ve Reşatbey bölgesinde hizmet veren Sultan Taksi aracı',
      intro:
        'Güzelyalı ve Reşatbey, Adana’nın hem konut hem sosyal yaşam açısından en hareketli bölgelerindendir. Turgut Özal Bulvarı, stadyum çevresi, kafeler, restoranlar ve geniş siteler ulaşım trafiğini gün boyu canlı tutar. Kenan Evren merkezli bir durak olarak bu bölgelere yakınız; ancak aracın size hızlı ulaşması, konum bilgisinin netliğine ve anlık trafik akışına bağlıdır.',
      heroLead:
        'Bulunduğunuz mekanın adını veya sitenizin ana girişini net tarif etmek, ara sokaklarda yaşanacak zaman kaybını azaltır.',
      highlight:
        'Güzelyalı ve Reşatbey’deki çok katlı sitelerin farklı sokaklara açılan birden fazla kapısı olabilir; çağrı yaparken ana kapıyı belirtmeniz önemlidir.',
      highlights: [
        '17:00 - 19:30 arasında iş çıkışı trafiği nedeniyle aracın size ulaşması normalden uzun sürebilir.',
        '“Turgut Özal üzerindeyim” yerine “X kafenin yanındayım” demek şoförün sizi hızlı fark etmesini sağlar.',
        'Yağmurlu günlerde talep artar; kapıya inmeden tahmini süre almak daha rahat olur.',
        'Birkaç sokaklık yolculuklar için de araç talep edebilirsiniz; kısa mesafede resmi minimum ücret geçerlidir.',
      ],
      sections: [
        {
          title: 'Mahalle ve Site Dinamikleri',
          body:
            'Güzelyalı ve Reşatbey büyük konut projelerinin ve çok girişli sitelerin yoğun olduğu bölgelerdir. Sadece site adını söylemek bazen yeterli olmaz; A kapısı başka caddede, B kapısı ters yönde olabilir. “Güvenlik girişindeyim” veya “A kapısına gelsin” gibi net tarifler aracı doğru noktaya getirir.',
        },
        {
          title: 'Kafe ve Restoran Çıkışları',
          body:
            'Turgut Özal ve çevresindeki mekanlarda aynı noktada birden fazla kişi taksi bekleyebilir. Karışıklığı önlemek için kıyafet rengi, mekanın hangi tarafında beklediğiniz veya WhatsApp konumu gibi bilgiler faydalıdır. Araca binmeden önce plaka bilgisini kontrol etmek güvenli bir alışkanlıktır.',
        },
        {
          title: 'Yoğun Saatler ve Trafik Faktörü',
          body:
            'Sabah 07:30 - 09:00 arası okul/iş başlangıcı, akşam 17:30 - 19:00 arası iş çıkışı yoğunluğu belirgindir. Bu saatlerde Kenan Evren’den çıkan aracın size ulaşması öğle saatine göre daha uzun sürebilir. Araç varış süresini teyit etmeden dışarıda beklemeye başlamamanız daha konforludur.',
        },
        {
          title: 'Kısa Mesafe ve Minimum Ücret',
          body:
            'Reşatbey’den Güzelyalı’ya veya birkaç sokak ötedeki bir markete gitmek için taksi çağırabilirsiniz. Kısa mesafede taksimetre açılır; tutar resmi minimum ücretin altında kalırsa minimum ücret uygulanır. Bu şoför inisiyatifi değil, resmi tarife uygulamasıdır.',
        },
      ],
      stopsTitle: 'Bölgenin Kritik Bekleme Noktaları',
      stopsIntro: 'Güzelyalı ve Reşatbey’de taksi yönlendirmesini etkileyen konum tipleri:',
      stops: [
        {
          title: 'Turgut Özal Bulvarı Üzeri Mekanlar',
          description: 'Ana cadde üzerinde uzun beklemenin zor olduğu hızlı yolcu alma noktaları.',
        },
        {
          title: 'Çok Girişli Geniş Siteler',
          description: 'Buluşma noktasının güvenlik kapısı veya belirli blok olarak netleşmesi gereken adresler.',
        },
        {
          title: 'Stadyum Çevresi',
          description: 'Etkinlik günlerinde yolların kapanabildiği, alternatif buluşma noktası gerektiren alanlar.',
        },
      ],
      reasonsTitle: 'Bu Bölgede Neden Bizi Aramalısınız?',
      reasons: [
        'Kenan Evren’deki merkezi konumumuz sayesinde bölgeye pratik erişim.',
        'Kafe ve site çıkışlarındaki karmaşayı azaltan net WhatsApp konum kullanımı.',
        'Kısa veya uzun çağrılara aynı profesyonellikle yaklaşan şoför kadrosu.',
      ],
      faqTitle: 'Bölgedeki Çağrılar Hakkında Sıkça Sorulanlar',
      faqs: [
        {
          question: 'Turgut Özal yoğunluğunda araç beni nerede bekler?',
          answer:
            'Bulvar üzerinde uzun süre beklemek uygun değildir. Şoförümüz güvenli şekilde yanaşır ve kısa süreli yolcu alımı yapar.',
        },
        {
          question: 'Güzelyalı’dan sadece 2 sokak öteye gideceğim, araç gelir mi?',
          answer:
            'Evet. Mesafenin kısa olması hizmete engel değildir; resmi minimum ücret tarifesi uygulanır.',
        },
        {
          question: 'Yağmurlu günlerde Reşatbey’de taksi bulmak neden zorlaşır?',
          answer:
            'Yağmurda talep aynı anda yükselir. Bu da araçların dolmasına ve bekleme süresinin artmasına neden olur.',
        },
        {
          question: 'WhatsApp konumundan beni bulabilir misiniz?',
          answer:
            'Evet. Mevcut konum göndermeniz şoförün sizi daha doğru noktada bulmasına yardımcı olur.',
        },
        {
          question: 'Site içine girişte güvenlik işlemi zaman alır mı?',
          answer:
            'Bazı sitelerde ticari araç giriş prosedürleri olabilir. Aracı güvenlik kapısına istemek süreci hızlandırabilir.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Güzelyalı ve Reşatbey’de iyi bir taksi deneyimi için net adres tarifi ve yoğun saatleri hesaba katan esnek planlama önemlidir.',
      authorRole: 'Bölge Yönlendirme Uzmanı',
      reviewedBy: 'Sultan Taksi Operasyon',
      businessNote:
        'Tahmini varış süreleri bölgedeki anlık sirkülasyon, mekan yoğunluğu, yol ve hava durumuna göre değişebilir.',
      disclaimer:
        'Bu rehber hizmet süreçlerini kolaylaştırmak için hazırlanmıştır. Anlık araç veya kesin süre garantisi verilmez.',
      ctaTitle: 'Güzelyalı veya Reşatbey’de araç mı bekliyorsunuz?',
      ctaBody:
        'Bulunduğunuz mekanın veya sitenin konumunu WhatsApp’tan iletin, uygun aracımızı yönlendirelim.',
    },
    en: {
      categoryLabel: 'Local Guide',
      title: 'Guide to Calling a Taxi from Güzelyalı and Reşatbey',
      excerpt:
        'Tips for finding a taxi more smoothly in Adana’s busy neighborhoods, including complex exits, cafe pickups, and peak-hour dynamics.',
      readTime: '4 min',
      seoDescription:
        'Guide to calling a taxi in Adana Güzelyalı and Reşatbey. Clear address sharing, cafe exits, peak hours, and short-distance fare notes.',
      heroImageAlt: 'Sultan Taxi vehicle serving the Güzelyalı and Reşatbey area',
      intro:
        'Güzelyalı and Reşatbey are among Adana’s liveliest residential and social areas. Turgut Özal Boulevard, the stadium area, cafes, restaurants, and large complexes keep traffic active throughout the day. As a Kenan Evren-based rank, we are close to these areas, but quick arrival depends on clear location details and live traffic.',
      heroLead:
        'Clearly describing your venue or main complex entrance helps reduce time lost in side streets.',
      highlight:
        'Large complexes in Güzelyalı and Reşatbey may have several gates opening to different streets; specify the main gate when calling.',
      highlights: [
        'Between 17:00 and 19:30, rush-hour traffic may increase arrival time.',
        'A description like “next to X cafe” is more useful than “on Turgut Özal”.',
        'Rainy days increase demand; asking for an estimated time before going outside is more comfortable.',
        'You can request a taxi even for a few streets; the official minimum fare applies.',
      ],
      sections: [
        {
          title: 'Neighborhood and Complex Dynamics',
          body:
            'Güzelyalı and Reşatbey contain many large residential complexes with multiple entrances. Saying only the complex name may not be enough. Clear descriptions such as “security entrance” or “Gate A” help the vehicle reach the correct point.',
        },
        {
          title: 'Cafe and Restaurant Exits',
          body:
            'Several people may wait for taxis at the same venue. Sharing clothing color, your exact waiting side, or a WhatsApp location helps avoid confusion. Checking the license plate before boarding is a safe habit.',
        },
        {
          title: 'Peak Hours and Traffic',
          body:
            'Morning school/work traffic and evening rush hours are noticeable. A vehicle leaving Kenan Evren may need more time than it would at noon. Confirming arrival time before waiting outside is more comfortable.',
        },
        {
          title: 'Short Distance and Minimum Fare',
          body:
            'You can call a taxi for a few streets. The taximeter is used on short distances as well; if the amount stays below the official minimum, the minimum fare applies.',
        },
      ],
      stopsTitle: 'Critical Waiting Points in the Area',
      stopsIntro: 'Location types that affect taxi dispatch in Güzelyalı and Reşatbey:',
      stops: [
        {
          title: 'Venues on Turgut Özal Boulevard',
          description: 'Fast pickup areas where long waiting on the main street is difficult.',
        },
        {
          title: 'Large Multi-Entrance Complexes',
          description: 'Addresses where the meeting point should be clarified as a gate or block.',
        },
        {
          title: 'Stadium Area',
          description: 'Event days may bring road closures and require alternative meeting points.',
        },
      ],
      reasonsTitle: 'Why Call Us in This Area?',
      reasons: [
        'Practical access thanks to our central Kenan Evren location.',
        'Clear WhatsApp location use to reduce cafe and complex pickup confusion.',
        'Professional service for both short and long calls.',
      ],
      faqTitle: 'Frequently Asked Questions About Calls in This Area',
      faqs: [
        {
          question: 'Where can the car wait on Turgut Özal Boulevard?',
          answer:
            'Long waiting on the boulevard is not suitable. The driver pulls over safely for a short pickup.',
        },
        {
          question: 'Will a taxi come if I am going only two streets?',
          answer:
            'Yes. Short distance is not an obstacle; the official minimum fare applies.',
        },
        {
          question: 'Why is it harder to find a taxi in Reşatbey on rainy days?',
          answer:
            'Rain increases demand at the same time, so vehicles become occupied and waiting times rise.',
        },
        {
          question: 'Can you find me with a WhatsApp location?',
          answer:
            'Yes. Sending your current location helps the driver find the correct pickup point.',
        },
        {
          question: 'Can complex security procedures take time?',
          answer:
            'Some complexes have commercial vehicle entry procedures. Meeting at the security gate can speed things up.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'In lively areas like Güzelyalı and Reşatbey, clear address sharing and flexible peak-hour planning improve the taxi experience.',
      authorRole: 'Regional Dispatch Specialist',
      reviewedBy: 'Sultan Taxi Operations',
      businessNote: 'Estimated arrival times vary by local circulation, venue density, road, and weather conditions.',
      disclaimer: 'This guide supports smoother service. Instant vehicle or exact time guarantees are not provided.',
      ctaTitle: 'Waiting for a taxi in Güzelyalı or Reşatbey?',
      ctaBody:
        'Send your venue or complex location via WhatsApp and we will direct a suitable available vehicle.',
    },
  },
  {
    slug: 'adanada-taksiyle-hastane-otogar-havalimani-yolculugu',
    category: 'routes',
    featured: false,
    author: 'Sultan Taksi Planlama Ekibi',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-arac-ici-01.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-arac-ici-01.webp',
    tags: ['Seyahat Planlama', 'Hastane Ulaşımı', 'Kritik Yolculuklar', 'Zaman Yönetimi'],
    relatedGuides: [
      'kenan-evrenden-havalimanina-taksiyle-ulasim',
      'kenan-evrenden-otogara-taksiyle-nasil-gidilir',
    ],
    tr: {
      categoryLabel: 'Rota Rehberi',
      title: 'Adana’da Taksiyle Hastane, Otogar ve Havalimanı Yolculuğu Nasıl Planlanır?',
      excerpt:
        'Randevularınıza veya seferlerinize geç kalmamanız için kritik yolculuk planlama rehberi. Zamanlama, refakatçi durumu ve erken çağrının önemi.',
      readTime: '5 dk',
      seoDescription:
        'Adana’da hastane, otogar ve havalimanına taksi yolculuğu planlama rehberi. Uçuş, otobüs veya doktor randevu saatine göre doğru taksi çağırma zamanlaması.',
      heroImageAlt: 'Hastane ve havalimanı gibi kritik hedeflere doğru yola çıkan taksi aracı',
      intro:
        'Günlük şehir içi ulaşımda birkaç dakikalık gecikme tolere edilebilir; ancak hastane randevusu, otobüs seferi veya uçuş söz konusu olduğunda zaman yönetimi kritik hale gelir. Adana’da Şehir Hastanesi, Balcalı, Fevzipaşa Otogarı veya Çukurova Havalimanı gibi noktalara yapılacak yolculuklar son dakikaya bırakılmamalıdır. Durağımız bu yolculuklarda deneyimiyle destek olur; doğru ön bilgi ve gerçekçi hareket saati ise yolcunun planlamasının temelidir.',
      heroLead:
        'Kritik yolculuklarda çağrı yaparken sadece gideceğiniz yeri değil, randevu, uçuş veya otobüs saatinizi de paylaşın.',
      highlight:
        'Ticari taksilerin geçiş üstünlüğü yoktur. Hastane yolculuklarında dahi araçlarımız ambulans statüsünde değildir; trafik kuralları ihlal edilemez.',
      highlights: [
        'Havalimanı ve otogar için valiz sayınızı, hastane için varsa tekerlekli sandalye veya refakatçi durumunu belirtin.',
        'Hedef varış saatinden önce trafik ve kampüs içi yürüyüş payı bırakın.',
        'Planlı gece uçuşu veya sabah erken randevu için önceki akşamdan bilgi vermek en sağlıklı yöntemdir.',
        'Gecikme yaşandığında şoförden hız yapmasını istemek yasal olarak mümkün değildir.',
      ],
      sections: [
        {
          title: 'Hastane Randevuları ve Refakatçi İhtiyaçları',
          body:
            'Balcalı, Şehir Hastanesi veya Seyhan Devlet gibi kurumlarda kampüs içi girişler ve poliklinik bulma süresi hesaba katılmalıdır. Yürüme güçlüğü olan hasta, refakatçi, katlanabilir tekerlekli sandalye veya ekstra bagaj varsa çağrı sırasında belirtmek doğru araç yönlendirmesine yardımcı olur.',
        },
        {
          title: 'Havalimanı ve Otoyol Değişkenleri',
          body:
            'Çukurova Havalimanı şehir içi kısa mesafe gibi düşünülmemelidir. Otoyol, gişe ve uzun mesafe planlaması gerekir. Uçuş saatinizle birlikte bagaj durumunuzu ve varış beklentinizi paylaşmanız, çıkış saatini daha gerçekçi belirlemenizi sağlar.',
        },
        {
          title: 'Otogar Seferleri ve Kalabalık Grup Durumu',
          body:
            'Otobüs yolculukları çoğu zaman valiz ve kalabalık uğurlama ile birlikte başlar. Standart ticari taksilerde şoför hariç 4 yolcu sınırı vardır. Daha kalabalık gruplar tek araca binmeye çalışmak yerine iki araç talep etmelidir.',
        },
        {
          title: 'Erken Bildirim ve Planlama Notu',
          body:
            'Duraklarımız klasik anlamda garantili rezervasyon sistemiyle çalışmasa da, özellikle sabah çok erken saatlerdeki uçuş veya randevular için önceden bilgi notu bırakabilirsiniz. Bu not, nöbetçi araç planlamasını kolaylaştırır; kesin dakika garantisi anlamına gelmez.',
        },
      ],
      stopsTitle: 'Yolculukları Etkileyen Ana Faktörler',
      stopsIntro: 'Kritik hedeflere ulaşımda zamanı belirleyen değişkenler:',
      stops: [
        {
          title: 'D-400 ve Otoyol Bağlantıları',
          description: 'Hastane, otogar ve havalimanı rotalarında trafiğin yoğunlaşabildiği arterler.',
        },
        {
          title: 'Kampüs ve Terminal İçi Yaya Mesafesi',
          description: 'Araçtan indikten sonra poliklinik, peron veya check-in noktasına yürüme süreleri.',
        },
        {
          title: 'Hava Şartları',
          description: 'Yağmurlu veya aşırı sıcak günlerde Adana trafiğinin genel akışı yavaşlayabilir.',
        },
      ],
      reasonsTitle: 'Kritik Yolculuklarda Neden Bize Güvenmelisiniz?',
      reasons: [
        'Zamanın önemini bilen, sakin ve pratik rotaları değerlendiren şoförler.',
        'Tekerlekli sandalye, refakatçi veya aşırı bagaj gibi durumları dikkate alma çabası.',
        'Fırsatçılığa yer vermeyen şeffaf taksimetre prensibi.',
      ],
      faqTitle: 'Sıkça Sorulan Sorular',
      faqs: [
        {
          question: 'Hastamız var, taksi kırmızı ışıkta geçebilir mi?',
          answer:
            'Hayır. Ticari taksilerin geçiş üstünlüğü yoktur. Hayati tehlike varsa 112 Ambulans aranmalıdır.',
        },
        {
          question: 'Sabah 06:00 havalimanı için araç ayırabilir misiniz?',
          answer:
            'Bir akşam önceden bilgi verirseniz planlama yapılır; ancak anlık trafik, arıza veya yoğunluk nedeniyle kesin dakika garantisi verilemez.',
        },
        {
          question: 'Hastane dönüşü kapıya gelir misiniz?',
          answer:
            'Muayeneniz bittiğinde arayabilirsiniz. Müsait araç varsa hastanenin uygun giriş noktasına yönlendirme yapılır.',
        },
        {
          question: '6 kişi otogara tek taksiyle gidebilir miyiz?',
          answer:
            'Hayır. Yasal kapasite şoför hariç 4 yolcudur. 6 kişi için iki araç gerekir.',
        },
        {
          question: 'Uçağıma az kaldı, taksi hızlı gider mi?',
          answer:
            'Hayır. Şoförlerimiz hız sınırlarını aşamaz. Erken yola çıkma sorumluluğu yolcuya aittir.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Kritik yolculuklarda stresi azaltmanın anahtarı gerçekçi zamanlama, erken iletişim ve doğru bilgi paylaşımıdır.',
      authorRole: 'Operasyon Planlama Uzmanı',
      reviewedBy: 'Sultan Taksi Yönetimi',
      businessNote:
        'Sağlık kurumları, havalimanı veya otogar seferlerinde süre ve ücretler anlık trafik ve resmi taksimetre tarifesine bağlıdır.',
      disclaimer:
        'Taksi acil durum veya ambulans aracı değildir. Uçuş, otobüs veya randevu kaçırma durumlarında durak veya şoför sorumlu tutulamaz.',
      ctaTitle: 'Kritik yolculuğunuzun saati belli mi?',
      ctaBody:
        'Hareket saatinizi, bagaj veya refakatçi durumunuzu WhatsApp üzerinden iletin, zaman planlamanızı birlikte netleştirelim.',
    },
    en: {
      categoryLabel: 'Route Guide',
      title: 'How to Plan Taxi Trips to Hospitals, Terminals, and the Airport in Adana',
      excerpt:
        'A planning guide for time-sensitive taxi trips, including appointments, flights, bus departures, companions, luggage, and early calls.',
      readTime: '5 min',
      seoDescription:
        'Guide to planning taxi trips to hospitals, the bus terminal, and the airport in Adana according to appointment, flight, or bus time.',
      heroImageAlt: 'Taxi vehicle heading toward critical destinations such as a hospital or airport',
      intro:
        'A few minutes of delay may be tolerable in daily city travel, but hospital appointments, bus departures, and flights make timing critical. Trips to City Hospital, Balcalı, Fevzipaşa Terminal, or Çukurova Airport should not be left to the last minute. Our rank can support planning with experience, but accurate information and realistic departure time are essential.',
      heroLead:
        'When calling for critical trips, share not only the destination but also your appointment, flight, or bus time.',
      highlight:
        'Commercial taxis do not have right of way. Even hospital trips are not ambulance trips; traffic rules cannot be violated.',
      highlights: [
        'Share luggage count for airport/terminal trips and wheelchair or companion details for hospital trips.',
        'Leave time for traffic and walking inside campuses or terminals.',
        'For planned night flights or early appointments, notifying us the evening before is helpful.',
        'When delayed, asking the driver to speed is not legally possible.',
      ],
      sections: [
        {
          title: 'Hospital Appointments and Companion Needs',
          body:
            'Large hospitals may require time after drop-off to find the correct entrance or clinic. If there is a patient with walking difficulty, a companion, a foldable wheelchair, or extra luggage, mention it during the call so dispatch can consider vehicle suitability.',
        },
        {
          title: 'Airport and Highway Variables',
          body:
            'Çukurova Airport should not be treated as a short city ride. Highway, toll, and long-distance planning are involved. Sharing your flight time and luggage details helps define a more realistic departure window.',
        },
        {
          title: 'Terminal Trips and Large Groups',
          body:
            'Bus trips often involve luggage and family farewells. Standard commercial taxis can carry up to four passengers excluding the driver. Larger groups should request two vehicles instead of trying to fit into one.',
        },
        {
          title: 'Early Notice and Planning Notes',
          body:
            'Although our rank does not offer guaranteed minute-by-minute reservations, you can leave a planning note for very early flights or appointments. This helps night-shift planning but does not guarantee an exact minute.',
        },
      ],
      stopsTitle: 'Main Factors Affecting Travel',
      stopsIntro: 'Variables that determine timing for critical destinations:',
      stops: [
        {
          title: 'D-400 and Highway Connections',
          description: 'Arteries where traffic may become dense on hospital, terminal, and airport routes.',
        },
        {
          title: 'Campus and Terminal Walking Distance',
          description: 'Walking time from drop-off to clinic, platform, or check-in.',
        },
        {
          title: 'Weather Conditions',
          description: 'Rainy or very hot days can slow the general traffic flow in Adana.',
        },
      ],
      reasonsTitle: 'Why Trust Us for Critical Trips?',
      reasons: [
        'Drivers who understand timing pressure and evaluate practical routes calmly.',
        'Effort to consider wheelchairs, companions, or excess luggage.',
        'Transparent taximeter principle without opportunistic pricing.',
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'We have a patient. Can the taxi run a red light?',
          answer:
            'No. Commercial taxis have no right of way. For life-threatening emergencies, call 112 Ambulance.',
        },
        {
          question: 'Can you reserve a car for the airport at 06:00?',
          answer:
            'If you notify us the evening before, planning can be made, but exact minute guarantees cannot be given.',
        },
        {
          question: 'Will you come to the hospital entrance for return?',
          answer:
            'You can call when your visit is finished. If a vehicle is available, it can be directed to a suitable entrance.',
        },
        {
          question: 'Can six people go to the terminal in one taxi?',
          answer:
            'No. Legal capacity is four passengers excluding the driver. Six people require two vehicles.',
        },
        {
          question: 'Can the taxi go faster if I am late for a flight?',
          answer:
            'No. Drivers cannot exceed speed limits. Leaving early is the passenger’s responsibility.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'For critical trips, realistic timing, early communication, and accurate information are the key to reducing stress.',
      authorRole: 'Operations Planning Specialist',
      reviewedBy: 'Sultan Taxi Management',
      businessNote: 'Travel times and fares depend on live traffic and the official taximeter tariff.',
      disclaimer:
        'A taxi is not an emergency or ambulance vehicle. The rank or driver cannot be held responsible for missed flights, buses, or appointments.',
      ctaTitle: 'Is your critical trip time set?',
      ctaBody:
        'Send your departure time, luggage, or companion details via WhatsApp so we can help with timing.',
    },
  },
  {
    slug: 'kenan-evren-kisa-mesafe-taksi-rehberi',
    category: 'local',
    featured: false,
    author: 'Sultan Taksi Mahalle Ekibi',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-arac-ici-02.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-arac-ici-02.webp',
    tags: ['Kısa Mesafe', 'İndi-Bindi', 'Şehir İçi', 'Adana Kenan Evren'],
    relatedGuides: [
      'guzelyali-resatbey-cevresinden-taksi-cagirma-rehberi',
      'cukurovada-taksiyle-sehir-ici-ulasim-rehberi',
    ],
    tr: {
      categoryLabel: 'Yerel Rehber',
      title: 'Kenan Evren Çevresinde Kısa Mesafe Taksi Kullanırken Bilinmesi Gerekenler',
      excerpt:
        'Market alışverişi, yağmurlu havalar veya mahalle içi ulaşımlarda kısa mesafe taksi çağırmanın kuralları. Minimum ücret ve net adres bildiriminin önemi.',
      readTime: '3 dk',
      seoDescription:
        'Adana Kenan Evren’de kısa mesafe taksi kullanım rehberi. Minimum ücret işleyişi, mahalle içi çağrı süreçleri ve dikkat edilecekler.',
      heroImageAlt: 'Kenan Evren Bulvarı üzerinde kısa mesafe yolculuğa hazırlanan taksi',
      intro:
        'Bazen yürümek için hava çok sıcak veya yağmurlu olabilir; bazen de ağır market poşetleriyle sadece iki sokak ötedeki eve gitmek istersiniz. Kısa mesafe yolculuklar, “Gelirler mi?” sorusunun en çok sorulduğu konulardan biridir. Sultan Taksi olarak mesafenin kısa veya uzun olmasına göre yolcu ayrımı yapmıyoruz; ancak kısa mesafede resmi minimum ücret ve doğru konum paylaşımı bilinmelidir.',
      heroLead:
        'Kısa mesafelerde de taksimetre açılır; tutar resmi minimum ücretin altında kalırsa minimum ücret uygulanır.',
      highlight:
        'Aşırı yağışlı günlerde tüm araçlarda doluluk artabilir; yürüyerek kısa mesafe bile olsa aracın ulaşması hava şartları nedeniyle zaman alabilir.',
      highlights: [
        '“Sadece bir alt sokağa geçeceğim” bilgisini vermek operasyon ekibinin doğru beklenti oluşturmasını sağlar.',
        'Taksimetredeki tutar minimum ücretin altındaysa resmi minimum ücret talep edilir.',
        'Apartman adı veya köşedeki belirgin dükkan tarifleri aracı hızlandırır.',
        'Kartla ödeme veya bozuk para ihtiyacınızı baştan belirtmek ödeme aşamasını pratikleştirir.',
      ],
      sections: [
        {
          title: 'Kısa Mesafe Çekingenliği ve Hizmet Politikamız',
          body:
            '“Yakın mesafe, çağırmak ayıp olur mu?” düşüncesi yaygındır. Ticari taksi ihtiyacın olduğu her mesafede hizmet verir. Yaşlılık, yorgunluk, eşya taşıma, sıcak veya yağmur gibi durumlarda birkaç yüz metre için de araç çağırabilirsiniz.',
        },
        {
          title: 'Minimum Ücret Tarifesi Nedir?',
          body:
            'Taksi işletmeciliğinde aracın adrese yönlendirilmesi, yakıt ve zaman maliyeti nedeniyle resmi minimum ücret uygulanır. Araca bindiğinizde taksimetre açılır; varışta ekrandaki tutar minimum sınırın altında kalırsa minimum ücret tahsil edilir. Bu şoför inisiyatifi değil, tarife kuralıdır.',
        },
        {
          title: 'Mahalle Arası Adres Tarifi',
          body:
            'Kenan Evren’e bağlı ara sokaklar birbirine benzeyebilir. Kısa mesafe çağrılarda yolculuktan çok aracın sizi bulması zaman alabilir. WhatsApp konumu, apartman adı veya yakındaki belirgin bir işletme aracı doğru noktaya getirir.',
        },
        {
          title: 'Hava Şartları ve Anlık Yoğunluk',
          body:
            'Yaz sıcağında öğle saatleri veya ani sağanaklarda kısa mesafe talepleri artar. Bu anlarda tüm araçlar yolda olabilir. Bekleme süresi yakın mesafe olduğunuz için değil, gerçek araç doluluğu nedeniyle uzayabilir.',
        },
      ],
      stopsTitle: 'Sık Karşılaşılan Kısa Mesafe Senaryoları',
      stopsIntro: 'En çok kısa mesafe çağrısı aldığımız durumlar:',
      stops: [
        {
          title: 'Semt Pazarı veya Market Çıkışları',
          description: 'Ağır poşetler, pazar arabası veya bagaj ihtiyacı olan dönüşler.',
        },
        {
          title: 'Mahalle İçi Okul Dönüşleri',
          description: 'Yağmurlu günlerde çocuklarıyla yürümek istemeyen ebeveynlerin talepleri.',
        },
        {
          title: 'Yakın Akraba veya Misafir Ziyaretleri',
          description: 'Akşam karanlığında birkaç sokak ötedeki adrese güvenli geçiş ihtiyacı.',
        },
      ],
      reasonsTitle: 'Neden Kısa Mesafede de Biz?',
      reasons: [
        'Mesafe ayrımı yapmadan her yolcuya aynı saygıyla yaklaşan durak kültürü.',
        'Minimum ücret konusunda sürpriz yaratmayan şeffaf bilgilendirme.',
        'Mahalle aralarını bilen, konumla hızlı buluşan yerel şoför kadrosu.',
      ],
      faqTitle: 'Kısa Mesafe Taksi Kullanımı Hakkında Sıkça Sorulanlar',
      faqs: [
        {
          question: 'Taksici yakın mesafe diye gitmek istemeyebilir mi?',
          answer:
            'Kurumsal çatımız altında çalışan şoförlerimiz mesafenin kısalığını gerekçe göstererek yolcu reddedemez.',
        },
        {
          question: 'Minimum ücret taksimetrede yazmazsa yine de ödenir mi?',
          answer:
            'Evet. Taksimetre mesafeyi hesaplar; tutar resmi minimum ücretin altındaysa minimum ücret uygulanır.',
        },
        {
          question: 'Market poşetlerim araca sığar mı?',
          answer:
            'Normal günlük alışveriş poşetleri bagaja veya uygun alana yerleştirilebilir. Şoförümüz yükleme konusunda yardımcı olur.',
        },
        {
          question: '500 metre için taksimetre açmadan sabit ödeme yapılabilir mi?',
          answer:
            'Hayır. Taksimetresiz yolculuk yasal değildir. Her yolculukta taksimetre açılır.',
        },
        {
          question: 'Yağmur başladı, hemen gelir misiniz?',
          answer:
            'Yağmurda talep yoğunlaşır. Çağrı aldığımızda tahmini ulaşım süresi ve müsaitlik durumu paylaşılır.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Kenan Evren çevresinde kısa mesafe için çekinmeden araç talep edebilirsiniz. Net konum ve minimum ücret farkındalığı süreci daha rahat hale getirir.',
      authorRole: 'Müşteri Deneyimi Uzmanı',
      reviewedBy: 'Sultan Taksi Yönetimi',
      businessNote:
        'Minimum ücret, yetkili kurumların güncel resmi tarifelerine dayanır ve durak inisiyatifinde değildir.',
      disclaimer:
        'Bu rehber bilgilendirme amaçlıdır. Hava ve yol durumuna göre tahmini varış süreleri değişebilir.',
      ctaTitle: 'Sadece birkaç sokak öteye mi gideceksiniz?',
      ctaBody:
        'Mesafeyi dert etmeyin. WhatsApp’tan konumunuzu paylaşın, en yakın uygun aracımızı yönlendirelim.',
    },
    en: {
      categoryLabel: 'Local Guide',
      title: 'What to Know When Using Short-Distance Taxis Around Kenan Evren',
      excerpt:
        'Rules and practical notes for short-distance taxi calls around Kenan Evren, including grocery trips, rainy days, minimum fare, and clear address sharing.',
      readTime: '3 min',
      seoDescription:
        'Guide to short-distance taxi use in Adana Kenan Evren. Minimum fare, neighborhood calls, and practical tips.',
      heroImageAlt: 'Taxi preparing for a short-distance ride on Kenan Evren Boulevard',
      intro:
        'Sometimes it is too hot or rainy to walk; sometimes you only need to get home two streets away with heavy bags. Short-distance rides often create hesitation: “Will they come?” At Sultan Taxi, we do not discriminate by distance, but passengers should understand the official minimum fare and the importance of clear location sharing.',
      heroLead:
        'The taximeter is used on short distances as well; if the fare remains below the official minimum, the minimum fare applies.',
      highlight:
        'On heavy-rain days, vehicle occupancy rises. Even for a short walking distance, vehicle arrival may take longer.',
      highlights: [
        'Mentioning that it is a short-distance ride helps set correct expectations.',
        'If the taximeter amount is below the minimum fare, the official minimum fare applies.',
        'Apartment names and visible nearby shops help the driver find you faster.',
        'Mention card payment or change needs early for smoother payment.',
      ],
      sections: [
        {
          title: 'Short-Distance Hesitation and Our Policy',
          body:
            'Many passengers wonder whether it is awkward to call for a very short ride. Commercial taxis serve needed trips at all distances. You can call even for a few hundred meters due to age, fatigue, items, heat, or rain.',
        },
        {
          title: 'What Is the Minimum Fare?',
          body:
            'Taxi service includes dispatch, fuel, and time costs, so an official minimum fare applies. The taximeter is turned on when you board; if the final amount is below the minimum, the minimum fare is charged.',
        },
        {
          title: 'Neighborhood Address Descriptions',
          body:
            'Side streets around Kenan Evren can look similar. For short calls, finding the pickup point can take longer than the ride. A WhatsApp location, apartment name, or visible nearby shop helps.',
        },
        {
          title: 'Weather and Momentary Demand',
          body:
            'Short-distance requests rise sharply during summer heat or sudden rain. Waiting time may increase because all nearby vehicles are occupied, not because the distance is short.',
        },
      ],
      stopsTitle: 'Common Short-Distance Scenarios',
      stopsIntro: 'Situations where short-distance calls are common:',
      stops: [
        {
          title: 'Market or Bazaar Exits',
          description: 'Returns with heavy bags, carts, or trunk needs.',
        },
        {
          title: 'Neighborhood School Returns',
          description: 'Parents who do not want to walk with children on rainy days.',
        },
        {
          title: 'Nearby Visits',
          description: 'Safe evening rides to an address a few streets away.',
        },
      ],
      reasonsTitle: 'Why Us for Short Distances?',
      reasons: [
        'A rank culture that treats every passenger respectfully regardless of distance.',
        'Transparent minimum-fare information without surprises.',
        'Local drivers who know neighborhood streets and use location sharing efficiently.',
      ],
      faqTitle: 'Frequently Asked Questions About Short-Distance Taxis',
      faqs: [
        {
          question: 'Can a driver refuse because the distance is short?',
          answer:
            'Our drivers cannot reject a passenger under our rank policy because the distance is short.',
        },
        {
          question: 'If the minimum fare does not appear on the taximeter, do I still pay it?',
          answer:
            'Yes. The taximeter calculates distance, but if the amount is below the official minimum, the minimum fare applies.',
        },
        {
          question: 'Will grocery bags fit?',
          answer:
            'Normal daily shopping bags can usually be placed in the trunk or suitable area. The driver can help with loading.',
        },
        {
          question: 'Can we skip the taximeter for 500 meters?',
          answer:
            'No. Traveling without a taximeter is not legal. The taximeter is used for every trip.',
        },
        {
          question: 'It started raining. Can you come immediately?',
          answer:
            'Rain increases demand. We share estimated arrival and availability when the call is received.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'You can request a taxi for short distances around Kenan Evren without hesitation. Clear location and minimum-fare awareness make the process smoother.',
      authorRole: 'Customer Experience Specialist',
      reviewedBy: 'Sultan Taxi Management',
      businessNote: 'Minimum fare is based on official current tariffs and is not set by the rank.',
      disclaimer: 'This guide is informational. Estimated arrival times may change with weather and road conditions.',
      ctaTitle: 'Only going a few streets away?',
      ctaBody:
        'Do not worry about the distance. Share your location via WhatsApp and we will direct the nearest suitable vehicle.',
    },
  },
  {
    slug: 'adanada-bagajli-cocuklu-evcil-hayvanli-taksi',
    category: 'local',
    featured: false,
    author: 'Sultan Taksi Müşteri Deneyimi',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-04.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-04.webp',
    tags: ['Özel İhtiyaçlar', 'Bagaj Kapasitesi', 'Evcil Hayvan Ulaşımı', 'Aile Yolculuğu'],
    relatedGuides: [
      'adanada-taksiyle-hastane-otogar-havalimani-yolculugu',
      'kenan-evrenden-havalimanina-taksiyle-ulasim',
    ],
    tr: {
      categoryLabel: 'Yerel Rehber',
      title: 'Adana’da Bagajlı, Çocuklu veya Evcil Hayvanlı Taksi Yolculuğu Nasıl Planlanır?',
      excerpt:
        'Bebek arabası, fazla valiz, evcil hayvan taşıma kutusu ve yolcu kapasitesi kuralları hakkında bilmeniz gerekenler.',
      readTime: '5 dk',
      seoDescription:
        'Adana’da bagajlı, bebek arabalı ve evcil hayvanlı taksi kullanımı. Taşıma kapasiteleri, kedi/köpek taşıma çantası kuralı ve araç yönlendirme.',
      heroImageAlt: 'Evcil hayvan taşıma çantası ve valizlerle güvenli yolculuğa hazırlanan Sultan Taksi',
      intro:
        'Standart bir taksi yolculuğunda adres söylemek yeterli olabilir; fakat fazla valiz, bebek arabası, evcil hayvan veya kalabalık aile olduğunda operasyon değişir. Ticari taksilerin iç hacmi ve bagaj kapasitesi sınırlıdır. Yasal yolcu sınırı, hijyen ve sürüş güvenliği kuralları nedeniyle özel ihtiyaçlar çağrı sırasında açıkça paylaşılmalıdır.',
      heroLead:
        'Aşırı bagaj, evcil hayvan veya çocuklu yolculuk gibi özel durumları çağrı anında belirtmek, daha uygun aracın yönlendirilmesini sağlar.',
      highlight:
        'Güvenlik ve hijyen politikamız gereği evcil hayvanların taşıma çantası veya kafes içinde seyahat etmesi gerekir.',
      highlights: [
        'Ticari taksilerde çocuk koltuğu standart donanım değildir; gerekiyorsa kendi ekipmanınızı getirmeniz gerekir.',
        'Şoför hariç maksimum 4 yolcu sınırı yasal zorunluluktur; çocuklar da bu sayıya dahildir.',
        'Bazı araçlarda bagaj hacmi daha sınırlı olabilir; büyük valiz veya bebek arabası varsa önceden bilgi verin.',
        'Araç içini kirletebilecek, koku yapabilecek veya sızıntı oluşturabilecek eşyalar için şoför değerlendirmesi önemlidir.',
      ],
      sections: [
        {
          title: 'Aşırı Bagaj ve Bebek Arabası',
          body:
            'Havalimanı ve tatil dönüşlerinde bagaj hacmi en sık yaşanan konudur. Yanınızda birkaç büyük valiz, katlanması zor bebek arabası veya spor ekipmanı varsa çağrı sırasında belirtin. Eşyalar binek araca sığmayacak kadar büyükse taksi yerine nakliye aracı gerekir.',
        },
        {
          title: 'Evcil Hayvan Taşıma Kuralları',
          body:
            'Evcil hayvanların taşıma çantası veya kafes içinde olması sürüş güvenliği, hijyen ve sonraki yolcuların hassasiyetleri açısından gereklidir. Taşıma kutusu olmayan hayvanlar ani fren sırasında risk oluşturabilir ve koltukların kirlenmesine neden olabilir.',
        },
        {
          title: 'Çocuklu ve Kalabalık Aile Yolculukları',
          body:
            'Standart ticari taksiler şoför hariç 4 yolcu kapasitesine sahiptir. Bebek ve çocuklar da bu sayıya dahildir. 5 kişi tek araca binmek yasal kapasiteyi aşar; kalabalık gruplar iki araç istemelidir. Çocuk koltuğu ihtiyacınız varsa kendi ekipmanınızı kullanabilirsiniz.',
        },
        {
          title: 'Araç İçi Hijyen ve Konfor',
          body:
            'Açık içecek, eriyen gıda veya sızıntı yapabilecek paketler araç döşemelerine zarar verebilir. Taksiler ortak kullanım alanıdır; araç temizliğine özen göstermek hem sizin hem sonraki yolcuların konforu için önemlidir.',
        },
      ],
      stopsTitle: 'Özel Durum Bildirimleri',
      stopsIntro: 'Hangi durumlarda bizi önceden bilgilendirmelisiniz?',
      stops: [
        {
          title: 'Büyük Çaplı Eşyalar',
          description: 'Katlanamayan bebek arabaları, tekerlekli sandalyeler, müzik enstrümanları veya spor ekipmanları.',
        },
        {
          title: 'Evcil Hayvan Kutuları',
          description: 'Özellikle büyük taşıma kutularının bagaja veya araç içine uygunluğunun değerlendirilmesi.',
        },
        {
          title: '4 Yolcudan Fazla Gruplar',
          description: 'Tek araç kapasitesinin aşıldığı, iki araca bölünmesi gereken yolculuklar.',
        },
      ],
      reasonsTitle: 'Özel İhtiyaçlarınızda Neden Biz?',
      reasons: [
        'Çağrı sırasında ihtiyaçlarınızı dikkatle dinleyip doğru yönlendirme yapma çabası.',
        'Araç iç hacmi ve bagaj durumu hakkında net bilgi vererek sürprizleri azaltma yaklaşımı.',
        'Kurallara uymak şartıyla çocuklarınızı ve evcil dostlarınızı güvenle taşıma hassasiyeti.',
      ],
      faqTitle: 'Özel Yolculuklar Hakkında Sıkça Sorulanlar',
      faqs: [
        {
          question: 'Köpeğim kucağımda, taşıma kutusu olmadan binebilir miyiz?',
          answer:
            'Genel olarak hayır. Sürüş güvenliği, ani fren riski ve hijyen nedeniyle evcil hayvanların taşıma çantası veya kafes içinde olması gerekir.',
        },
        {
          question: 'Sığmayan valizleri kucağımıza alabilir miyiz?',
          answer:
            'Büyük valizleri kucakta veya ayak altında taşımak güvenli değildir. Eşyalar bagaja sığmıyorsa ikinci araç veya farklı taşıma çözümü gerekir.',
        },
        {
          question: 'Araçlarınızda çocuk güvenlik koltuğu var mı?',
          answer:
            'Ticari taksilerde standart çocuk koltuğu bulunmaz. Kendi ana kucağınızı veya çocuk koltuğunuzu kullanabilirsiniz.',
        },
        {
          question: 'Bebek arabası için ekstra ücret öder miyim?',
          answer:
            'Hayır. Bagaja konulan kişisel eşyalar için taksimetre tutarı dışında ekstra bagaj ücreti talep edilmez.',
        },
        {
          question: 'Taksiyle eşya taşıtabilir miyim?',
          answer:
            'Taksi yolcu taşıma aracıdır. TV, buzdolabı veya büyük ev eşyası gibi nakliye malzemeleri taşınamaz.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Çocuk, evcil hayvan veya fazla valizle yapılacak yolculuklarda en önemli konu açık iletişimdir. Durumu baştan net aktarmak uygun araç ve daha konforlu yolculuk sağlar.',
      authorRole: 'Müşteri İlişkileri Koordinatörü',
      reviewedBy: 'Sultan Taksi Yönetimi',
      businessNote:
        'Yolcu kapasitesi sınırları trafik kurallarıyla belirlenmiştir. Evcil hayvan prosedürleri durak hijyen ve güvenlik politikasına dayanır.',
      disclaimer:
        'Şoförlerimiz taşıma çantası olmayan evcil hayvan, araca sığmayacak eşya veya 4 kişiden fazla yolcu taleplerini reddetme hakkına ve yükümlülüğüne sahiptir.',
      ctaTitle: 'Özel durumunuza uygun araç mı arıyorsunuz?',
      ctaBody:
        'Bagaj miktarınızı, refakatçi durumunuzu veya evcil hayvan bilginizi WhatsApp üzerinden iletin, uygun aracımızı yönlendirelim.',
    },
    en: {
      categoryLabel: 'Local Guide',
      title: 'Guide to Taxi Travel with Luggage, Children, or Pets in Adana',
      excerpt:
        'What to know about strollers, excess luggage, pet carriers, legal passenger capacity, and suitable vehicle dispatch.',
      readTime: '5 min',
      seoDescription:
        'Using taxis with luggage, strollers, and pets in Adana. Carrying capacity, pet carrier rules, and vehicle dispatch details.',
      heroImageAlt: 'Sultan Taxi prepared for a safe journey with a pet carrier and suitcases',
      intro:
        'For a standard taxi ride, stating the address may be enough. With excess luggage, a stroller, a pet, or a crowded family, the operation changes. Commercial taxis have limited interior and trunk space. Legal passenger capacity, hygiene, and driving safety rules make it important to share special needs during the call.',
      heroLead:
        'Mentioning excess luggage, pets, or child-related needs during the call helps dispatch a more suitable vehicle.',
      highlight:
        'For safety and hygiene, pets must travel in a carrier or cage under our service policy.',
      highlights: [
        'Child seats are not standard equipment in commercial taxis; bring your own if needed.',
        'The maximum capacity is four passengers excluding the driver; children count within this limit.',
        'Some vehicles have more limited trunk space; inform us in advance about large luggage or strollers.',
        'Items that may dirty, smell, or leak inside the vehicle require driver evaluation.',
      ],
      sections: [
        {
          title: 'Excess Luggage and Strollers',
          body:
            'Airport trips and holiday returns often raise trunk-capacity issues. If you have several large suitcases, a hard-to-fold stroller, or sports equipment, mention it during the call. If items are too large for a passenger car, a moving vehicle is required instead of a taxi.',
        },
        {
          title: 'Pet Transport Rules',
          body:
            'Pets should be in a carrier or cage for driving safety, hygiene, and the comfort of later passengers. Pets without a carrier can be at risk during sudden braking and may soil the seats.',
        },
        {
          title: 'Children and Large Families',
          body:
            'Standard commercial taxis carry up to four passengers excluding the driver. Babies and children are included. Five passengers in one vehicle exceeds legal capacity; larger groups should request two vehicles. You may use your own child seat.',
        },
        {
          title: 'Vehicle Hygiene and Comfort',
          body:
            'Open drinks, melting food, or leaking packages can damage upholstery. Taxis are shared public-service vehicles, so keeping the vehicle clean matters for both you and later passengers.',
        },
      ],
      stopsTitle: 'Special Situation Notifications',
      stopsIntro: 'When should you inform us in advance?',
      stops: [
        {
          title: 'Large Items',
          description: 'Non-folding strollers, wheelchairs, musical instruments, or sports equipment.',
        },
        {
          title: 'Pet Carriers',
          description: 'Especially large carriers that may need trunk or cabin suitability checks.',
        },
        {
          title: 'Groups Over Four Passengers',
          description: 'Trips that exceed one taxi’s legal capacity and need two vehicles.',
        },
      ],
      reasonsTitle: 'Why Us for Special Needs?',
      reasons: [
        'Careful listening during the call and effort to dispatch correctly.',
        'Clear information about vehicle and trunk suitability to reduce surprises.',
        'A safety-focused approach to children and pets when rules are followed.',
      ],
      faqTitle: 'Frequently Asked Questions About Special Trips',
      faqs: [
        {
          question: 'Can my dog ride on my lap without a carrier?',
          answer:
            'Generally no. For safety, sudden braking risks, and hygiene, pets should travel in a carrier or cage.',
        },
        {
          question: 'Can we hold luggage that does not fit in the trunk?',
          answer:
            'Large luggage on laps or under feet is not safe. If items do not fit, a second vehicle or different transport solution is needed.',
        },
        {
          question: 'Do your cars have child safety seats?',
          answer:
            'Commercial taxis do not carry child seats as standard. You can use your own baby carrier or child seat.',
        },
        {
          question: 'Do I pay extra for a stroller?',
          answer:
            'No. Personal items placed in the trunk do not create an extra luggage fee beyond the taximeter fare.',
        },
        {
          question: 'Can a taxi carry household goods?',
          answer:
            'A taxi is a passenger transport vehicle. Large household items such as TVs or refrigerators cannot be carried.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'For trips with children, pets, or many suitcases, communication is everything. Explaining the situation early helps dispatch a suitable vehicle.',
      authorRole: 'Customer Relations Coordinator',
      reviewedBy: 'Sultan Taxi Management',
      businessNote: 'Passenger capacity is determined by traffic rules. Pet procedures are based on rank hygiene and safety policy.',
      disclaimer:
        'Drivers have the right and obligation to refuse pets without carriers, items too large for the vehicle, or more than four passengers.',
      ctaTitle: 'Looking for a vehicle suitable for your needs?',
      ctaBody:
        'Send luggage, companion, or pet details via WhatsApp and we will direct a suitable available vehicle.',
    },
  },
  {
    slug: 'cukurovada-taksiyle-sehir-ici-ulasim-rehberi',
    category: 'local',
    featured: false,
    author: 'Sultan Taksi Şehir İçi Ekibi',
    publishedAt: '2026-05-07',
    updatedAt: '2026-05-07',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp',
    tags: ['Çukurova Ulaşım', 'Turgut Özal Bulvarı', 'Günlük Ulaşım', 'Şehir İçi Taksi'],
    relatedGuides: [
      'guzelyali-resatbey-cevresinden-taksi-cagirma-rehberi',
      'kenan-evren-kisa-mesafe-taksi-rehberi',
    ],
    tr: {
      categoryLabel: 'Yerel Rehber',
      title: 'Çukurova’da Taksiyle Güvenli ve Rahat Şehir İçi Ulaşım Rehberi',
      excerpt:
        'Turgut Özal, Süleyman Demirel ve Kenan Evren bulvarları üçgeninde günlük taksi ulaşımı. Yoğun saatlerde planlama ve şeffaf yolculuk ipuçları.',
      readTime: '4 dk',
      seoDescription:
        'Adana Çukurova ilçesinde taksi ulaşım rehberi. Turgut Özal, Kenan Evren, şehir içi trafik, iş/okul rotaları ve günlük taksi kullanımı.',
      heroImageAlt: 'Çukurova bölgesinde bulvar üzerinde seyir halinde olan taksi',
      intro:
        'Çukurova; alışveriş merkezleri, okulları, hastaneleri ve kafe/restoran kültürüyle günün her saati kendi trafiğini üretir. Turgut Özal, Süleyman Demirel ve Kenan Evren bulvarları arasında günlük işlerinizi halletmek, okula yetişmek veya sosyal buluşmaya gitmek özel araçla park stresi yaratabilir. Sultan Taksi olarak bölgenin merkezinde olmanın getirdiği yerel deneyimle günlük rotalarınıza destek oluyoruz.',
      heroLead:
        'Bulvar trafiğine kendi aracınızla girmek istemediğinizde taksi kullanmak, otopark arama stresini azaltır ve hedefe daha doğrudan ulaşmanızı sağlar.',
      highlight:
        'Bulvarlar arasındaki ara sokaklar navigasyonun gösterdiğinden daha hızlı veya daha yavaş olabilir; yerel sürücülerin anlık rota değerlendirmesi değerlidir.',
      highlights: [
        'Sabah okul saatlerinde site çıkışlarında yoğunluk olur; çağrınızı biraz erken yapmak faydalıdır.',
        'Turgut Özal’da şoförünüz mekanın tam önü yerine güvenli bir cebe yanaşmak zorunda kalabilir.',
        'Araçta unutulan eşya için bindiğiniz saat ve güzergah bilgisini paylaşmanız aracı tespit etmeyi kolaylaştırır.',
        'Kısa işlerde araç bekleyecekse taksimetrenin bekleme tarifesiyle işlemeye devam edeceğini unutmayın.',
      ],
      sections: [
        {
          title: 'Günlük Rotalar ve İş/Okul Trafiği',
          body:
            'Çukurova’da yerleşim, okul, iş ve sosyal alanlar iç içedir. Sabah Kenan Evren’den Süleyman Demirel veya Turgut Özal yönüne okul servisi ve çalışan trafiği olur. Taksi çağırırken bu saatleri hesaba katmak, geç kalma stresini azaltır.',
        },
        {
          title: 'Kafe/Restoran Kültürü ve Park Sorunu',
          body:
            'Turgut Özal ve çevresi Adana’nın sosyal merkezlerinden biridir. Akşam yemeği veya kahvaltı için özel araçla gitmek, park aramak anlamına gelebilir. Taksi kullanımı bu stresi azaltır ve dönüşte daha pratik bir seçenek sunar.',
        },
        {
          title: 'Şeffaf İletişim ve Yerel Güzergahlar',
          body:
            'Adana şoförleri ara sokakları iyi bilir. Ana bulvarda yoğunluk varsa şoförünüz alternatif önerebilir. Bu değişiklik yolu uzatmak için değil, trafiği azaltmak içindir. Taksimetre gidilen mesafe ve bekleme süresine göre işler.',
        },
        {
          title: 'Ödeme ve Günlük Kullanım Kolaylığı',
          body:
            'Günlük telaşta yanınızda nakit olmayabilir. Kartla ödeme ihtiyacınızı çağrı sırasında veya araca bindiğinizde belirtmeniz, uygun araç ve cihaz durumu hakkında netlik sağlar ve ödeme aşamasını hızlandırır.',
        },
      ],
      stopsTitle: 'Çukurova İçindeki Yoğun Ulaşım Aksları',
      stopsIntro: 'Günlük hayatın en çok aktığı ve trafik dinamiklerinin değiştiği yerler:',
      stops: [
        {
          title: 'Turgut Özal Bulvarı',
          description: 'Akşam saatlerinde kafe, restoran ve park kaynaklı yoğunluğun arttığı ana yaşam aksı.',
        },
        {
          title: 'Süleyman Demirel Bulvarı',
          description: 'Okul ve kamu kurumları nedeniyle gündüz hareketli, geniş ve hızlı akan güzergah.',
        },
        {
          title: 'Kenan Evren Bulvarı',
          description: 'Durağımızın bulunduğu, büyük bulvarları birbirine bağlayan kritik geçiş bölgesi.',
        },
      ],
      reasonsTitle: 'Çukurova’da Neden Sultan Taksi?',
      reasons: [
        'Kenan Evren’deki konumumuz sayesinde bölgenin bulvarlarına pratik erişim.',
        'Kayıp eşya veya fatura talebi gibi konularda ulaşılabilir kurumsal muhatap.',
        'Bölgenin tek yönlerini, okul saatlerini ve kafe yoğunluklarını bilen yerel şoför kadrosu.',
      ],
      faqTitle: 'Çukurova Şehir İçi Ulaşım Hakkında Sıkça Sorulanlar',
      faqs: [
        {
          question: 'Turgut Özal’dan Kenan Evren’e gidiş ne kadar tutar?',
          answer:
            'Çukurova içi mesafeler kısa olabilir ancak ücret trafik ve bekleme süresine göre taksimetreyle belirlenir.',
        },
        {
          question: 'Araçta unuttuğum eşyayı nasıl geri alabilirim?',
          answer:
            'Bindiğiniz tarih, saat ve güzergahı bize iletin. Şoförle iletişime geçilip araç kontrol edilir.',
        },
        {
          question: 'Okul çıkış saatinde taksi geç gelir mi?',
          answer:
            'Okul bölgelerinde 15:00 - 16:30 arası yoğunluk yaşanabilir. Erken plan yapmak önemlidir.',
        },
        {
          question: 'Bankada işim var, araç 10 dakika bekler mi?',
          answer:
            'Bekleyebilir; ancak taksimetre bekleme tarifesiyle işlemeye devam eder. Süre uzayacaksa yeni araç çağırmak daha ekonomik olabilir.',
        },
        {
          question: 'Kartla ödeme yapabilir miyim?',
          answer:
            'Kartla ödeme ihtiyacınızı çağrı sırasında belirtirseniz uygun araç ve cihaz durumu hakkında daha net bilgi verilebilir.',
        },
      ],
      takeawayTitle: 'Özetle',
      takeaway:
        'Çukurova’nın hareketli günlük yaşamında zaman kazanmanın yolu, bölgeyi bilen yerel bir durakla çalışmaktır. Kısa mesafe, okul, iş veya sosyal dönüşlerde bize ulaşabilirsiniz.',
      authorRole: 'Bölge Ulaşım Danışmanı',
      reviewedBy: 'Sultan Taksi Operasyon',
      businessNote:
        'Güzergah tercihleri ve varış süreleri anlık yol çalışmaları, okul ve iş çıkışı saatlerine göre değişiklik gösterir.',
      disclaimer:
        'Bu rehber günlük ulaşım alışkanlıklarını iyileştirmek için hazırlanmıştır. Taksimetre ücretleri güzergah ve bekleme süresine göre hesaplanır.',
      ctaTitle: 'Çukurova içinde bir yere mi gideceksiniz?',
      ctaBody:
        'Konumunuzu WhatsApp üzerinden gönderin, müsait aracımızla sizi hedefinize ulaştıralım.',
    },
    en: {
      categoryLabel: 'Local Guide',
      title: 'Guide to Safe and Comfortable Inner-City Taxi Transport in Çukurova',
      excerpt:
        'Daily taxi travel in the Turgut Özal, Süleyman Demirel, and Kenan Evren boulevard triangle, with planning and transparent-trip tips.',
      readTime: '4 min',
      seoDescription:
        'Taxi transport guide in Adana Çukurova. Turgut Özal, Kenan Evren, city traffic, work/school routes, and daily taxi use.',
      heroImageAlt: 'Taxi cruising on a boulevard in the Çukurova area',
      intro:
        'Çukurova creates its own traffic all day with shopping centers, schools, hospitals, and cafe/restaurant culture. Between Turgut Özal, Süleyman Demirel, and Kenan Evren boulevards, daily errands or social plans can become parking stress with a private car. As a local rank in the area, Sultan Taxi supports daily routes with regional experience.',
      heroLead:
        'Using a taxi when you do not want to enter boulevard traffic with your own car reduces parking stress and helps you reach the destination more directly.',
      highlight:
        'Side streets between boulevards may be faster or slower than navigation suggests; local driver evaluation matters.',
      highlights: [
        'Morning school hours create congestion at complex exits; calling a little early helps.',
        'On Turgut Özal, the driver may need to stop at a safe pocket instead of directly in front of the venue.',
        'For lost items, sharing boarding time and route helps identify the vehicle.',
        'If the vehicle waits during short errands, the taximeter continues with the waiting tariff.',
      ],
      sections: [
        {
          title: 'Daily Routes and Work/School Traffic',
          body:
            'Residential, school, work, and social areas are intertwined in Çukurova. Morning traffic from Kenan Evren toward Süleyman Demirel or Turgut Özal can be dense. Considering these hours when calling a taxi reduces lateness stress.',
        },
        {
          title: 'Cafe/Restaurant Culture and Parking',
          body:
            'Turgut Özal and nearby areas are social centers of Adana. Going there by private car often means looking for parking. Taxi use reduces that stress and offers a practical return option.',
        },
        {
          title: 'Transparent Communication and Local Routes',
          body:
            'Adana drivers know side streets well. If the main boulevard is busy, your driver may suggest an alternative. This is not to lengthen the route, but to reduce traffic exposure. The taximeter works by distance and waiting time.',
        },
        {
          title: 'Payment and Daily Convenience',
          body:
            'You may not carry cash in the daily rush. Mention card payment during the call or when boarding so dispatch and the driver can give clearer information.',
        },
      ],
      stopsTitle: 'Busy Transportation Axes in Çukurova',
      stopsIntro: 'Places where daily life flows and traffic dynamics change:',
      stops: [
        {
          title: 'Turgut Özal Boulevard',
          description: 'A main lifestyle axis where evening cafe, restaurant, and parking density rises.',
        },
        {
          title: 'Süleyman Demirel Boulevard',
          description: 'A wide, active route with daytime movement from schools and public institutions.',
        },
        {
          title: 'Kenan Evren Boulevard',
          description: 'The critical transit area connecting major boulevards and hosting our rank.',
        },
      ],
      reasonsTitle: 'Why Sultan Taxi in Çukurova?',
      reasons: [
        'Practical access to regional boulevards thanks to our Kenan Evren location.',
        'A reachable business contact for lost items or invoice requests.',
        'Local drivers familiar with one-way streets, school hours, and cafe density.',
      ],
      faqTitle: 'Frequently Asked Questions About Çukurova City Transport',
      faqs: [
        {
          question: 'How much does Turgut Özal to Kenan Evren cost?',
          answer:
            'Distances within Çukurova may be short, but the fare is calculated by taximeter according to traffic and waiting time.',
        },
        {
          question: 'How can I recover an item left in the car?',
          answer:
            'Share the date, time, and route. We contact the driver and check the vehicle.',
        },
        {
          question: 'Can taxis arrive late around school dismissal?',
          answer:
            'School areas can be busy between 15:00 and 16:30. Planning early is important.',
        },
        {
          question: 'Will the taxi wait 10 minutes while I am at the bank?',
          answer:
            'It can wait, but the taximeter continues with the waiting tariff. If it will take longer, calling a new taxi may be more economical.',
        },
        {
          question: 'Can I pay by card?',
          answer:
            'Mention card payment during the call so clearer information can be given based on suitable vehicle and device availability.',
        },
      ],
      takeawayTitle: 'In Summary',
      takeaway:
        'In Çukurova’s active daily life, working with a local rank that knows the area helps save time on short rides, school/work routes, and social returns.',
      authorRole: 'Regional Transport Consultant',
      reviewedBy: 'Sultan Taxi Operations',
      businessNote: 'Route preferences and arrival times vary by roadworks and school/work peak hours.',
      disclaimer:
        'This guide helps improve daily transport habits. Taximeter fares are calculated by route and waiting time.',
      ctaTitle: 'Going somewhere in Çukurova?',
      ctaBody:
        'Send your location via WhatsApp and we will take you toward your destination with an available vehicle.',
    },
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(slug: string) {
  const guide = getGuideBySlug(slug);
  if (!guide) return [];
  return guide.relatedGuides
    .map((relatedSlug) => getGuideBySlug(relatedSlug))
    .filter((item): item is GuideEntry => Boolean(item));
}

export function formatGuideDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'tr' ? 'tr-TR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}
