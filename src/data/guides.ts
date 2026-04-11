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
    publishedAt: '2026-04-10',
    updatedAt: '2026-04-11',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-01.webp',
    tags: ['Çukurova Havalimanı', 'VIP Transfer', 'Adana Taksi'],
    relatedGuides: ['kenan-evrenden-otogara-taksiyle-nasil-gidilir', 'adanada-taksiyle-gorulebilecek-yerler'],
    tr: {
      categoryLabel: 'Havalimanı Transfer Noktası',
      title: "Kenan Evren'den Yeni Çukurova Havalimanı'na (COV) VIP Konforunda Ulaşım",
      excerpt:
        "Adana Kenan Evren taksi durakları arasında en güvenilir transfer noktası Sultan Taksi ile yeni Çukurova Uluslararası Havalimanı'na (COV) konforlu ve zamanında ulaşımın tüm detaylarını keşfedin.",
      readTime: '5 dk',
      seoDescription:
        "Adana Kenan Evren ve Çukurova bölgesinden yeni Çukurova Uluslararası Havalimanı'na (COV) VIP taksi transferi. En hızlı güzergah, taksi ücreti ve uçuş öncesi planlama rehberi.",
      heroImageAlt: 'Kenan Evren Sultan Taksi VIP aracıyla Adana Çukurova Havalimanı transferi temsil eden profesyonel fotoğraf',
      intro:
        "Adana'nın havacılık kapısı Şakirpaşa'dan Tarsus'taki yeni Çukurova Uluslararası Havalimanı'na (COV) taşındı. Kenan Evren Bulvarı'ndan bu yeni dev komplekse ulaşım artık 10 dakikalık bir sürüşün ötesinde, gerçek bir VIP transfer tecrübesi gerektiriyor. Sultan Taksi olarak Adana'nın en deneyimli şoför kadrosuyla bu önemli yolu sizin için keyifli bir başlangıca dönüştürüyoruz.",
      heroLead:
        "Çukurova ve Güzelyalı mahallelerinden havalimanına yola çıkarken, otoban trafiğini ve gişe yoğunluklarını hesaba katan profesyonel bir taksi hizmeti almak uçuş güvenliğinizin ilk adımıdır.",
      highlight:
        "Yeni havalimanı için eski alışkanlıklarınızı güncelleyin; artık uçuştan en az 2.5 saat önce hazırlığınızı tamamlamış ve Sultan Taksi ile yola çıkmış olmanız uçağa yetişme stresini sıfıra indiren en büyük faktördür.",
      highlights: [
        "Kenan Evren Bulvarı - Çukurova Havalimanı (COV) arası ortalama VIP transfer süresi 45-55 dakikadır.",
        "Otoban kullanımı zorunlu olduğu için araçlarımızın teknik bakımları buna uygun ve tamdır.",
        "Yoğun bagajı olan misafirlerimiz için geniş hacimli sedan araçlarımızı önceliklendiriyoruz."
      ],
      sections: [
        {
          title: "Gişe ve Otoban Yoğunluklarını Yakından İzliyoruz",
          body:
            "Yeni lokasyonumuz Tarsus'un doğu çıkışında kaldığı için, Kenan Evren Bulvarı'ndan otoyol bağlantısına geçiş saatleri çok kritiktir. Özellikle sabah saatlerinde gişe trafiğinde yaşanabilecek anlık yoğunlukları şoförlerimiz dijital sistemlerle takip ederek size en optimal varış süresini garanti eder. Adana taksi kültüründe önceliğimiz hızlı değil, emniyetli ve dakik bir ulaşımdır."
        },
        {
          title: "VIP Transferde Bagaj ve Konfor Standartları",
          body:
            "50 dakikalık bir otoyol seyrinde aracın kliması, koltuk temizliği ve dış ses yalıtımı sıradan bir taksi yolculuğunun çok ötesinde öneme sahiptir. Sultan Taksi filosunda her araç, havalimanı transferleri için düzenli hijyen kontrolünden geçirilir. Ağır valizleriniz, bebek arabalarınız veya özel eşyalarınız için geniş bagaj çözümlemeleriyle sizi kapınızdan asiste ediyoruz."
        }
      ],
      reasonsTitle: "Neden VIP Havalimanı Transferinde Bizi Seçmelisiniz?",
      reasons: [
        "Adana'nın en prestijli şoför ekibi ile saygılı ve seviyeli iletişim modelimiz.",
        "Yeni Çukurova Havalimanı (COV) rotasına tam hâkimiyet ve gişe geçiş önceliği bilinci.",
        "Kredi kartı ile ödeme kolaylığı ve resmi taksimetre güvencesi ile şeffaf fiyatlandırma."
      ],
      faqTitle: "Havalimanı Taksi Transferi Hakkında Sık Sorulan Sorular",
      faqs: [
        {
          question: "Sabit fiyat mı yoksa taksimetre mi geçerli?",
          answer:
            "Adana'da resmi taksi hizmetlerinde taksimetre esastır. Ancak Çukurova Havalimanı transferleri için ortalama ücret bilgisini durağımızdan uçuş gününde talep ederek planlamanızı şeffafça yapabilirsiniz."
        },
        {
          question: "Gece uçuşları için gece tarifesi uygulanıyor mu?",
          answer:
            "Hayır, Adana'da gece-gündüz tarifesi ayrımı kalkmıştır. Günün 24 saati aynı adaletli taksimetre tarifesi ile Kenan Evren mevkisinden havalimanına güvenle gidebilirsiniz."
        },
        {
          question: "Sultan Taksi araçlarında kredi kartı geçiyor mu?",
          answer:
            "Evet, araçlarımızın birçoğunda temassız ödeme yapan pos cihazları bulunmaktadır. Çağrınızı yaparken bu ihtiyacınızı belirtmeniz yeterlidir."
        },
        {
          question: "Bagaj hacmimiz çok fazla, uygun araç yönlendirir misiniz?",
          answer:
            "Kesinlikle. 4 personelin valizini alabilecek geniş bagajlı sedan araçlarımızı havalimanı transferleri için özel olarak saklı tutuyoruz. Çağrınızda bagaj sayınızı belirtmeniz kâfidir."
        },
        {
          question: "Çocuk koltuğu veya evcil hayvan için desteğiniz var mı?",
          answer:
            "Evcil hayvanlarınız taşıma kutusunda olduğu sürece başımızın üstünde yeri var. Çocuk koltuğu ihtiyacı için ise rezervasyonlu çağrılarda müsaitlik durumunu sorgulayabilirsiniz."
        }
      ],
      takeawayTitle: "Kısa Özet",
      takeaway:
        "Adana'daki yeni havacılık çağında, havalimanı ulaşımını sıradan bir yolculuk değil, profesyonel bir taksi transferi olarak görün. Sultan Taksi ile zamanı yönetin, konforun tadını çıkarın.",
      authorRole: "VIP Havalimanı Transfer Operasyon Direktörü",
      ctaTitle: "Kesintisiz Havalimanı Konforu İçin Hemen Arayın",
      ctaBody:
        "Adana Kenan Evren Bulvarı'ndan yeni havalimanına (COV) vaktinde yetişmek için en doğru adrestesiniz. Aracınızı şimdi ayırtın."
    },
    en: {
      categoryLabel: 'Airport Transfer Point',
      title: 'VIP-Level Comfort to the New Çukurova Airport (COV)',
      excerpt:
        'Discover the details of comfortable and timely transportation to the new Çukurova International Airport (COV) with Sultan Taxi, the most reliable transfer point among Adana Kenan Evren taxi stands.',
      readTime: '5 min',
      seoDescription:
        'VIP taxi transfer to the new Çukurova International Airport (COV) from Adana Kenan Evren and Cukurova regions. Fastest route, taxi fare information, and pre-flight planning guide.',
      heroImageAlt: 'Professional photograph representing Adana Cukurova Airport transfer with Kenan Evren Sultan Taxi VIP vehicle',
      intro:
        'Adana\'s aviation gate has moved from Sakirpasa to the brand-new Cukurova International Airport (COV) in Tarsus. Transportation from Kenan Evren Boulevard to this new massive complex now requires a true VIP transfer experience beyond a simple 10-minute drive. As Sultan Taxi, we turn this important route into a pleasant start for you with Adana\'s most experienced driver staff.',
      heroLead:
        'When setting out from the Cukurova and Guzelyali neighborhoods to the airport, receiving professional taxi services that account for highway traffic and toll densities is the first step to your flight safety.',
      highlight:
        'Update your old habits for the new airport; having your preparations completed and setting off with Sultan Taxi at least 2.5 hours before your flight is the biggest factor in eliminating the stress of catching your plane.',
      highlights: [
        'Average VIP transfer time between Kenan Evren Boulevard and COV Airport is 45-55 minutes.',
        'As highway use is mandatory, our vehicles are technically maintained to the highest standards for these speeds.',
        'We prioritize our high-capacity sedan vehicles for guests with heavy luggage.'
      ],
      sections: [
        {
          title: 'Constant Monitoring of Toll and Highway Density',
          body:
            'Since our new location is at the eastern exit of Tarsus, the timing for transitioning from Kenan Evren Boulevard to the motorway connection is critical. Our drivers track real-time congestion via digital systems, especially during morning hours at the toll gates, to guarantee your optimal arrival time. In Adana taxi culture, our priority is not speed, but safe and punctual transportation.'
        },
        {
          title: 'Standardizing Luggage and Comfort in VIP Transfers',
          body:
            'During a 50-minute highway cruise, the vehicle’s A/C performance, seat cleanliness, and external sound insulation are of paramount importance far beyond a standard taxi ride. Every vehicle in the Sultan Taxi fleet undergoes regular hygiene checks specifically for airport transfers. We assist you right from your doorstep with spacious trunk solutions for your heavy suitcases, strollers, or special items.'
        }
      ],
      reasonsTitle: 'Why Choose Us for VIP Airport Transfers?',
      reasons: [
        'Respectful and elevated communication model with Adana\'s most prestigious driver team.',
        'Full mastery of the new Cukurova Airport (COV) route and toll passage priority awareness.',
        'Transparent pricing with official taximeter guarantees and the convenience of credit card payments.'
      ],
      faqTitle: 'Frequently Asked Questions About Airport Taxi Transfers',
      faqs: [
        {
          question: 'Is it a fixed price or a taximeter?',
          answer:
            'Officially, the taximeter is the basis for taxi services in Adana. However, you can request an average fare estimate for Cukurova Airport transfers from our station on your travel day for transparent planning.'
        },
        {
          question: 'Is there a night tariff for late-night flights?',
          answer:
            'No, the distinction between night and day tariffs has been removed in Adana. You can safely travel to the airport from the Kenan Evren area using the same fair taximeter rate 24 hours a day.'
        },
        {
          question: 'Do Sultan Taxi vehicles accept credit cards?',
          answer:
            'Yes, many of our vehicles are equipped with POS terminals for contactless payments. Simply specify this need when making your call.'
        },
        {
          question: 'We have a lot of luggage; can you send a suitable vehicle?',
          answer:
            'Absolutely. We specifically reserve our wide-trunk sedan vehicles for airport transfers, capable of holding suitcases for up to 4 passengers. Mentioning your luggage count when calling is sufficient.'
        },
        {
          question: 'Do you provide support for child seats or pets?',
          answer:
            'Your pets are more than welcome as long as they are in a pet carrier. For child seat needs, please inquire about availability for bookings made in advance.'
        }
      ],
      takeawayTitle: 'Quick Summary',
      takeaway:
        'In the new era of aviation in Adana, view airport transport as a professional taxi transfer rather than just a ride. Manage your time and enjoy the comfort with Sultan Taxi.',
      authorRole: 'VIP Airport Transfer Operations Director',
      ctaTitle: 'Call Now for Seamless Airport Comfort',
      ctaBody:
        'You are at the right address to reach the new Cukurova Airport (COV) from Adana Kenan Evren Boulevard on time. Book your ride now.'
    }
  },
  {
    slug: 'kenan-evrenden-otogara-taksiyle-nasil-gidilir',
    category: 'routes',
    featured: false,
    author: 'Sultan Taksi Operasyon Ekibi',
    publishedAt: '2026-04-10',
    updatedAt: '2026-04-12',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-02.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-dis-cekim-02.webp',
    tags: ['Adana Otogar Taksi', 'Fevzipaşa Otobüs Terminali', 'Güzergâh Planı'],
    relatedGuides: ['kenan-evrenden-havalimanina-taksiyle-ulasim', 'adanada-taksiyle-gorulebilecek-yerler'],
    tr: {
      categoryLabel: 'Merkezi Ulaşım Rehberi',
      title: "Adana Merkez Otogara (Fevzipaşa) Hızlı ve Güvenilir Taksi Ulaşımı",
      excerpt:
        "Kenan Evren Bulvarı'ndan Fevzipaşa Merkez Otogarı'na en kısa sürede, trafik stresine girmeden ulaşmanın yolları. Otobüs kalkış saatinizi riske atmayın.",
      readTime: '4 dk',
      seoDescription:
        "Adana Kenan Evren'den otogara en hızlı taksi güzergahı. Fevzipaşa ulaşım süresi, trafik yoğunluğu ipuçları ve Sultan Taksi bagaj yardımı hizmetleri.",
      heroImageAlt: 'Adana trafiğinde seyreden güvenli ve temiz bir Sultan Taksi aracının dış çekimi',
      intro:
        "Fevzipaşa Mahallesi'nde yer alan Adana Merkez Otogarı, özellikle üniversitelerin tatile girdiği dönemlerde ve bayram önceleri şehrin en yoğun trafik noktalarından biri haline gelir. Kenan Evren Bulvarı'ndan otogara gitmek isteyen yolcularımız için D-400 üzerindeki kilitlenmeleri önceden tahmin eden profesyonel bir yaklaşım sunuyoruz.",
      heroLead:
        "Zamanla yarıştığınız otobüs yolculuklarında, bagaj taşıma yükünü ve trafik endişesini şoförlerimize bırakın; siz sadece yolculuğunuza odaklanın.",
      highlight:
        "Öngörülemeyen D-400 trafiğine takılmamak için otobüs kalkış saatinizden en az 45 dakika önce Sultan Taksi ile yola çıkmış olmanız, risksiz bir ulaşım için altın kuraldır.",
      highlights: [
        "Kenan Evren - Fevzipaşa Otogar arası normal trafik akışında yaklaşık 15-20 dakika sürer.",
        "Öğrenci koli ve valizleri için araçlarımızın bagaj kapasitesi oldukça geniştir.",
        "Yoğun ana arterler yerine alternatif sokak rotalarını ezbere bilen şoför kadromuz hizmetinizdedir."
      ],
      sections: [
        {
          title: "Alternatif Rotalara Tam Hakimiyet",
          body:
            "Adana'nın yerel durağı olarak Fevzipaşa Otogarı'na giden her bir sokağın trafik ritmini biliyoruz. D-400 ana yolu üzerinde bir kaza veya çalışma varsa; Karayolları veya Şakirpaşa içerisinden geçen en hızlı yan yolları kullanarak sizi peronunuza vaktinde yetiştiriyoruz. Zaman kaybettiren gereksiz ışık dalgalarından sizi koruyoruz."
        },
        {
          title: "Ağır Valizler ve Koliler İçin Profesyonel Destek",
          body:
            "Otogar yolculuğu denince akla gelen ilk şey ağır bagajlardır. Sultan Taksi şoförleri, valizlerinizi aracın bagajına yüklerken size bizzat asiste eder; otogara ulaştığınızda ise sizi peronlara en yakın noktada indirerek yürüyüş mesafenizi minimize eder. Konforlu ve saygılı bir karşılamanın ardından güvenle vedalaşırız."
        }
      ],
      reasonsTitle: "Neden Otogar Ulaşımında Bizimle Gitmelisiniz?",
      reasons: [
        "Trafik yoğunluğunu anlık takip eden ve sizi kilitlenmiş bulvarlara sokmayan rota tecrübesi.",
        "Resmi taksimetre kullanımı ve dürüst fiyat politikası ile şeffaf hizmet.",
        "Valiz taşıma asistanlığı ile yolculuğun en zahmetli kısmını üstlenen şoför kadrosu."
      ],
      faqTitle: "Merkez Otogar Yolculukları Hakkında Sıkça Sorulanlar",
      faqs: [
        {
          question: "Otobüs saatine yetişmek için kaç dakika önce çağırmalıyım?",
          answer:
            "Hazırlanma ve yol süresini hesaba katarak en sağlıklı yöntem, otobüs hareket vaktinden 45-50 dakika önce aracınızı talep etmektir."
        },
        {
          question: "Otogar giriş ücreti taksi fiyatına dâhil mi?",
          answer:
            "Adana Merkez Otogarı'na yapılan kısa süreli girişlerde indirme noktaları taksi tarifesi dışında ek bir ücret gerektirmez; taksimatreniz net tutarı belirler."
        },
        {
          question: "Kalabalık bir grubuz, 4 kişi ve 4 büyük valizle sığar mıyız?",
          answer:
            "Evet, sedan araçlarımızın bagajları standart üstü kapasiteye sahip olsa da çok aşırı yük durumunda sizin için en geniş bagajlı aracımızı özel olarak yönlendirebiliriz."
        },
        {
          question: "Sabahın ilk ışıklarında (05:00 gibi) araç bulabilir miyim?",
          answer:
            "Sultan Taksi 7 gün 24 saat kesintisiz hizmet verir. Gecenin en kör vaktinde de sabahın seherinde de bir telefonla kapınızdayız."
        },
        {
          question: "Otogar önünden geri dönüş için çağrı yapabilir miyim?",
          answer:
            "Evet, otogara yeni inen misafirlerimiz için Kenan Evren veya Çukurova bölgesine dönüşlerde telefonla hızlı destek sunmaktayız."
        }
      ],
      takeawayTitle: "Son Karar",
      takeaway:
        "Otobüs yolculuklarında en büyük risk trafiği küçümsemektir. Kenan Evren'in yerel durağı ile risk almayın, vaktinizi profesyonellere bırakın.",
      authorRole: "Kent İçi Rota Planlama Şefi",
      ctaTitle: "Otogara Geç Kalma Stresine Son Verin",
      ctaBody:
        "Hemen arayın, tecrübeli şoförlerimizle Adana Merkez Otogarı'na (Fevzipaşa) konforlu ve güvenli bir şekilde ulaşın."
    },
    en: {
      categoryLabel: 'Central Hub Notes',
      title: 'Fast and Reliable Taxi Transport to Adana Central Bus Station (Fevzipasa)',
      excerpt:
        'Discover the ways to reach Fevzipasa Central Bus Terminal from Kenan Evren Boulevard in the shortest time without any traffic stress. Don\'t risk your departure time.',
      readTime: '4 min',
      seoDescription:
        'Fastest taxi route from Adana Kenan Evren to the terminal. Travel time to Fevzipasa, traffic congestion tips, and Sultan Taxi luggage assistance services.',
      heroImageAlt: 'Exterior shot of a safe and clean Sultan Taxi vehicle cruising through Adana traffic',
      intro:
        'Adana Central Bus Terminal, located in Fevzipasa district, becomes one of the densest traffic points in the city, especially during university holidays and before festive seasons. For our passengers wanting to get to the terminal from Kenan Evren Boulevard, we offer a professional approach that predicts delays on the D-400 highway.',
      heroLead:
        'Leave the baggage load and traffic anxiety to our drivers during those time-sensitive bus journeys; you just focus on your travel.',
      highlight:
        'The golden rule for risk-free transportation is to set off with Sultan Taxi at least 45 minutes before your bus departure to avoid getting stuck in unpredictable D-400 traffic.',
      highlights: [
        'The journey between Kenan Evren and Fevzipasa Terminal takes approximately 15-20 minutes in normal flow.',
        'The trunk capacity of our vehicles is quite spacious for student boxes and suitcases.',
        'Our driver staff, who know alternative street routes by heart to avoid busy main arteries, are at your service.'
      ],
      sections: [
        {
          title: 'Total Mastery of Alternative Routes',
          body:
            'As Adana\'s local hub, we know the traffic rhythm of every single street leading to the Fevzipasa Terminal. If there\'s an accident or roadwork on the D-400 main road, we get you to your platform on time using the fastest side roads passing through Karayollari or Sakirpasa. We protect you from unnecessary time-consuming traffic lights.'
        },
        {
          title: 'Professional Support for Heavy Luggage and Boxes',
          body:
            'When it comes to terminal travel, the first thing that comes to mind is heavy luggage. Sultan Taxi drivers personally assist you while loading your suitcases into the trunk; upon reaching the terminal, they drop you off at the point closest to the platforms to minimize your walking distance. We part ways safely after a comfortable and respectful welcome.'
        }
      ],
      reasonsTitle: 'Why Choose Us for Terminal Transport?',
      reasons: [
        'Route experience that tracks traffic intensity in real-time and doesn\'t lead you into locked boulevards.',
        'Transparent service with official taximeter use and an honest pricing policy.',
        'A driver staff that takes on the most dynamic part of the journey with baggage assistance.'
      ],
      faqTitle: 'Frequently Asked Questions About Bus Terminal Journeys',
      faqs: [
        {
          question: 'How many minutes in advance should I call to catch the bus?',
          answer:
            'Taking preparation and travel time into account, the healthiest method is to request your vehicle 45-50 minutes before the bus departure time.'
        },
        {
          question: 'Is the terminal entry fee included in the taxi price?',
          answer:
            'Short-term entries to Adana Central Bus Station for drop-offs do not require an additional fee outside the taxi fare; your taximeter determines the net amount.'
        },
        {
          question: 'We are a crowded group; will we fit with 4 people and 4 large suitcases?',
          answer:
            'Yes, although our sedan trunks have above-standard capacity, we can specifically direct our widest-trunk vehicle for you in case of extreme loads.'
        },
        {
          question: 'Can I find a car in the early morning at 05:00 AM?',
          answer:
            'Sultan Taxi provides 24/7 non-stop service. We are at your door with one call, even in the middle of the night or the crack of dawn.'
        },
        {
          question: 'Can I call for a return trip from the front of the terminal?',
          answer:
            'Yes, for guests arriving at the bus terminal, we provide rapid support for return trips to the Kenan Evren or Cukurova regions via phone.'
        }
      ],
      takeawayTitle: 'Final Verdict',
      takeaway:
        'The biggest risk in bus journeys is underestimating the traffic. Don\'t take risks with Kenan Evren\'s local hub; leave your time to professionals.',
      authorRole: 'Intra-City Route Planning Chief',
      ctaTitle: 'End Your Stress of Being Late to the Terminal',
      ctaBody:
        'Call now and reach Adana Central Bus Station (Fevzipasa) comfortably and safely with our experienced drivers.'
    }
  },
  {
    slug: 'adanada-taksiyle-gorulebilecek-yerler',
    category: 'local',
    featured: false,
    author: 'Sultan Taksi Kurumsal Şoför Ekibi',
    publishedAt: '2026-04-11',
    updatedAt: '2026-04-12',
    heroImage: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp',
    ogImage: '/images/gallery/adana-kenan-evren-sultan-taksi-genis-aci-01.webp',
    tags: ['Adana Gezilecek Yerler', 'Ziyapaşa Bulvarı', 'Taşköprü', 'VIP Taksi'],
    relatedGuides: ['kenan-evrenden-havalimanina-taksiyle-ulasim', 'kenan-evrenden-otogara-taksiyle-nasil-gidilir'],
    tr: {
      categoryLabel: 'Adana Yerel Keşifleri',
      title: "Şehrin Nabzı: Adana'nın Simgelerine VIP Kalitesinde VIP Yolculuklar",
      excerpt:
        "Tarihi Taşköprü'den Ziyapaşa Bulvarı'nın parıltısına; Adana'yı yerlisi gibi keşfetmek için şoförlü VIP konforunda taksi rotalarımızı inceleyin.",
      readTime: '6 dk',
      seoDescription:
        "Adana yerel taksi turu önerileri. Ziyapaşa, Taşköprü ve Sabancı Camii çevresine konforlu ulaşım. Kenan Evren Sultan Taksi ile şehir içi keşif rehberi.",
      heroImageAlt: 'Adana şehir merkezindeki tarihi dokuyla bütünleşmiş modern bir Sultan Taksi aracı',
      intro:
        "Adana, sadece eşsiz gastronomik lezzetleriyle değil; binlerce yıllık tarihi ve modern bulvarlarıyla da keşfedilmeyi bekleyen bir Akdeniz metropolüdür. Kenan Evren Bulvarı'ndan yola çıktığınızda, kendinizi her köşesi ayrı bir hikaye anlatan bu kadim kentin en seçkin duraklarında bulabilirsiniz.",
      heroLead:
        "Şehri keşfederken sıcak yaz aylarında serin ve temiz bir araçta, Adana'nın trafik dinamiklerine hakim bir şoförle seyahat etmek gezinin tadını ikiye katlar.",
      highlight:
        "Adana'yı tam anlamıyla hissetmek için güzergahınızı 'Ziyapaşa şıklığı' ve 'Tarihi Adana derinliği' olarak ikiye ayırın; Sultan Taksi ile her iki dünyayı da yorulmadan deneyimleyin.",
      highlights: [
        "Adana VIP taksi hizmetimizle şehrin en dar tarihi sokaklarına dahi prestijle ulaşın.",
        "Özellikle akşamüzeri Seyhan Baraj Gölü kıyısındaki esintiyi kaçırmamanızı öneriyoruz.",
        "Müze gezileri veya restoran duraklamaları için 'beklemeli taksi' seçeneklerimizi değerlendirebilirsiniz."
      ],
      sections: [
        {
          title: "Stratejik Gezi Rotaları: Nereden Başlamalı?",
          body:
            "Şoförlerimizin yerel tecrübesine göre en verimli gezi planı: Sabah saatlerinde Büyüksaat ve Kazancılar Çarşısı ile tarihin kokusunu almak, öğle sıcağında Sabancı Merkez Camii'nin ferah peyzajında dinlenmek ve akşamüzeri Ziyapaşa Bulvarı'ndaki seçkin butikleri ziyaret etmektir. Sultan Taksi olarak bu rotayı sizin için en akıcı hale getiriyoruz."
        },
        {
          title: "Adana Sıcağında Kesintisiz VIP Konforu",
          body:
            "Adana'nın meşhur güneşinin altında yürürken yorulabilirsiniz. Arka koltuğa geçtiğiniz anda yüksek performanslı klimalarımız, temiz kabin havamız ve huzurlu sürüş profilimizle aslında sadece bir takside değil, kişisel konfor alanınızdasınızdır. Araçlarımızın tamamı VIP standartlarında ve sigara içilmemiştir."
        }
      ],
      stopsTitle: "Kadim Şehrin En Seçkin 4 Durağı",
      stopsIntro:
        "Adana konaklamanızı unutulmaz kılacak, şoförlerimizin en çok önerdiği o mistik ve modern bölgeler:",
      stops: [
        {
          title: "Tarihi Taşköprü & Sabancı Merkez Camii",
          description:
            "Dünyanın hala kullanılan en eski köprüsü olan Taşköprü'de yürüyüp, hemen karşısındaki görkemli Sabancı Merkez Camii'nin siluetinde harika fotoğraflar çekebilirsiniz."
        },
        {
          title: "Büyüksaat ve Tarihi Kazancılar Çarşısı",
          description:
            "Geleneksel Adana esnafının kalbi burada atar. Baharatçılar, unutulmaya yüz tutmuş zanaatkarlar ve kentin o kendine has dokusu için doğru adres burası."
        },
        {
          title: "Ziyapaşa Bulvarı & Şinasi Efendi",
          description:
            "Eğer şık restoranlar, modern kafeler ve elit bir alışveriş deneyimi arıyorsanız, Adana'nın en 'niş' noktalarında sizi en prestijli şekilde indirmemizi isteyin."
        },
        {
          title: "Adnan Menderes Baraj Gölü Kıyısı",
          description:
            "Şehrin oksijen deposu; sahil yolu boyu uzanan kafeler ve göl esintisi eşliğinde bir akşam sürüşü ruhunuzu dinlendirecektir."
        }
      ],
      reasonsTitle: "Turistik Keşiflerde Neden Sultan Taksi?",
      reasons: [
        "Sadece adrese değil, o sokağın en doğru ve güvenli iniş noktasına rehberlik eden tecrübe.",
        "Ailecek yapılan gezilerde yüksek nezaket ve saygı öncelikli hizmet anlayışı.",
        "Hangi sokağın çıkmaz, hangi bulvarın tıkalı olduğunu bilerek vaktinizi çalmayan yerel zekâ."
      ],
      faqTitle: "Şehir Turu Hakkında Merak Edilenler",
      faqs: [
        {
          question: "Günübirlik şehir turu için araç tahsis edebilir miyim?",
          answer:
            "Evet. Belirlediğiniz saatler arası sadece size hizmet verecek beklemeli araç planlamasını durağımızla önceden koordine edebilirsiniz."
        },
        {
          question: "Şoförlerin yerel restoran tavsiyesi verme becerisi var mı?",
          answer:
            "Kesinlikle. Şoförlerimiz şehrin hem gizli lezzet noktalarına hem de en çok tercih edilen mekanlarına tam hakimdir; sormaktan çekinmeyin."
        },
        {
          question: "Araçlarınızda çocuk koltuğu desteği bulunuyor mu?",
          answer:
            "Seyahat güvenliği için rezervasyonunuz sırasında çocuk koltuğu ihtiyacınızı belirtirseniz, uygun aracımızı sizin için hazırlayabiliriz."
        },
        {
          question: "Yabancı misafirlerimiz için yabancı dil desteği var mı?",
          answer:
            "Bazı şoförlerimiz temel düzeyde İngilizceye hakimdir. Eğer özellikle dil desteği gerekiyorsa, merkezimizdeki operatörlerimiz üzerinden koordine sağlayabiliyoruz."
        },
        {
          question: "Fotoğraf molası vermek istediğimizde bekleyebiliyor musunuz?",
          answer:
            "Şehir turu konseptimizde esneklik esastır. En harika kareyi yakalamanız için uygun noktalarda sizi memnuniyetle bekliyoruz."
        }
      ],
      takeawayTitle: "Kısa Sonuç",
      takeaway:
        "Adana'yı keşfetmek bir sanattır. Bu sanatı konforla birleştirmek için direksiyonu Sultan Taksi'nin profesyonel kadrosuna emanet edin.",
      authorRole: "VIP Şehir Turu Rota Koordinatörü",
      ctaTitle: "Adana'yı Bir de Bizimle Keşfedin",
      ctaBody:
        "VIP konforunda bir şehir turu ve tüm detaylar için durağımızla hemen iletişime geçin. Adana turunuzu biz planlayalım."
    },
    en: {
      categoryLabel: 'Adana Local Discoveries',
      title: 'The Pulse of the City: VIP-Quality Tours to Adana\'s Iconic Landmarks',
      excerpt:
        'From the historical Stone Bridge to the shimmer of Ziyapasa Boulevard; explore our VIP chauffeur-driven taxi routes to discover Adana like a local.',
      readTime: '6 min',
      seoDescription:
        'Adana local taxi tour suggestions. Comfortable transport to Ziyapasa, Stone Bridge, and Sabancı Mosque surroundings. City discovery guide with Sultan Taxi.',
      heroImageAlt: 'A modern Sultan Taxi vehicle integrated with the historical fabric in Adana city center',
      intro:
        'Adana is not just a Mediterranean metropolis famous for its unique gastronomic tastes, but also a city waiting to be discovered for its thousands of years of history and modern boulevards. Setting out from Kenan Evren Boulevard, you will find yourself at the most distinguished stops of this ancient city, each corner telling a different story.',
      heroLead:
        'While exploring the city, traveling in a cool and clean vehicle with a driver who has mastered Adana\'s traffic dynamics, especially during the hot summer months, doubles the pleasure of your tour.',
      highlight:
        'To fully feel Adana, divide your route into "Ziyapasa elegance" and "Historical Adana depth"; experience both worlds effortlessly with Sultan Taxi.',
      highlights: [
        'Reach even the narrowest historical streets of the city with prestige through our Adana VIP taxi service.',
        'We especially recommend that you don\'t miss the evening breeze on the shores of Lake Seyhan.',
        'You can consider our "waiting taxi" options for museum visits or restaurant stops.'
      ],
      sections: [
        {
          title: 'Strategic Sightseeing Routes: Where to Start?',
          body:
            'According to our drivers\' local experience, the most efficient sightseeing plan is to get a scent of history at the Great Clock Tower and Kazancilar Bazaar in the morning, relax in the fresh landscape of Sabancı Central Mosque during the noon heat, and visit the elite boutiques on Ziyapasa Boulevard in the evening. As Sultan Taxi, we normalize this route to the smoothest flow for you.'
        },
        {
          title: 'Uninterrupted VIP Comfort in Adana Heat',
          body:
            'While walking under Adana\'s famous sun, you might get tired. From the moment you move to the back seat, you are not just in a taxi, but in your personal comfort zone with our high-performance air conditioners, clean cabin air, and peaceful driving profile. All of our vehicles are of VIP standards and are non-smoking.'
        }
      ],
      reasonsTitle: 'Why Sultan Taxi for Touristic Discoveries?',
      reasons: [
        'Expertise that guides you not just to an address, but to the most correct and safe drop-off point on that street.',
        'A service understanding prioritized by high courtesy and respect for family trips.',
        'Local intelligence that doesn\'t steal your time by knowing which street is a dead-end or which boulevard is jammed.'
      ],
      faqTitle: 'Curiosities About City Touring',
      faqs: [
        {
          question: 'Can I allocate a vehicle for a daily city tour?',
          answer:
            'Yes. You can pre-coordinate with our dispatch to arrange a vehicle that will serve only you between the hours you specify.'
        },
        {
          question: 'Do the drivers have the skill to recommend local restaurants?',
          answer:
            'Absolutely. Our drivers have full mastery over both the hidden taste spots of the city and the most preferred venues; don\'t hesitate to ask.'
        },
        {
          question: 'Is there child seat support in your vehicles?',
          answer:
            'For travel safety, if you specify your need for a child seat during your reservation, we can prepare the appropriate vehicle for you.'
        },
        {
          question: 'Is there foreign language support for our international guests?',
          answer:
            'Some of our drivers have a basic command of English. If language support is specifically required, our operators at the center can provide coordination.'
        },
        {
          question: 'Can you wait when we want to take a break for photos?',
          answer:
            'Flexibility is paramount in our city tour concept. We gladly wait for you at suitable points so you can capture the perfect shot.'
        }
      ],
      takeawayTitle: 'Final Result',
      takeaway:
        'Discovering Adana is an art. To combine this art with comfort, entrust the wheel to the professional staff of Sultan Taxi.',
      authorRole: 'VIP City Tour Route Coordinator',
      ctaTitle: 'Explore Adana with Us',
      ctaBody:
        'Contact our station immediately for a city tour in VIP comfort and for all the details. Let us plan your Adana tour.'
    }
  }
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
