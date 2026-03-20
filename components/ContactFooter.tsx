"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ContactFooter() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    const path = pathname.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`;
    return path === '/tr' ? '/' : path;
  };

  return (
    <footer className="bg-secondary-bg pt-24 pb-8 px-4 border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Logo & Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-primary tracking-tighter">SULTAN TAKSİ</h2>
            <p className="text-text/60 leading-relaxed font-sans max-w-sm">
              Adana'nın her noktasına 7/24 güvenli, konforlu ve lüks transfer hizmeti sağlıyoruz. 
              Müşteri memnuniyeti odaklı profesyonel ekibimizle her zaman yanınızdayız.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-8">
            <h3 className="text-xl font-serif text-accent">{t("ctaTitle")}</h3>
            <div className="space-y-4">
              <a 
                href="tel:05302227795" 
                className="flex items-center gap-4 text-2xl font-serif text-primary hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                0530 222 77 95
              </a>
              <div className="flex items-start gap-4 text-text/60 font-sans">
                <div className="w-12 h-12 flex-shrink-0 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <p className="pt-2">{t("address")}</p>
              </div>
            </div>
          </div>

          {/* Language & Settings */}
          <div className="space-y-8">
            <h3 className="text-xl font-serif text-accent">Dil Seçimi / Language</h3>
            <div className="flex gap-4">
              <Link 
                href={pathname.replace(`/${locale}`, '/tr') === '' ? '/' : pathname.replace(`/${locale}`, '/tr')} 
                locale="tr"
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${locale === 'tr' ? 'bg-primary border-primary text-black font-bold' : 'border-primary/30 text-primary hover:bg-primary/10'}`}
              >
                TR
              </Link>
              <Link 
                href={`/en${pathname === '/' ? '' : pathname.replace('/tr', '')}`}
                locale="en"
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${locale === 'en' ? 'bg-primary border-primary text-black font-bold' : 'border-primary/30 text-primary hover:bg-primary/10'}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-text/40 text-sm font-sans">
          <p>{t("copy")}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">KVKK</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
