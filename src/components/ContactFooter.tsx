"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';

const ContactFooter = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <footer className="bg-bg-primary pt-24 pb-12 border-t border-gold/10 relative overflow-hidden">
      <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black text-gold mb-6 font-display tracking-tight">{t('common.brand')}</h2>
            <p className="text-text/65 max-w-sm mb-8 text-lg font-light leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Kenan%20Evren%20Sultan%20Taksi%20Adana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all text-sm font-semibold"
              >
                <MapPin size={16} />
                Google Maps
              </a>
              <a
                href="https://wa.me/905302227795"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all text-sm font-semibold"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">{t('hero.ctaCall')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text/85 hover:text-gold transition-colors">
                <Phone size={18} className="text-gold" />
                <a href={`tel:${t('common.phone').replace(/\s/g, '')}`} className="text-xl font-bold">
                  {t('common.phone')}
                </a>
              </li>
              <li className="flex items-start gap-3 text-text/70">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span>{t('common.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-text/85 hover:text-gold transition-colors">
                <MessageCircle size={18} className="text-gold" />
                <a href="https://wa.me/905302227795" target="_blank" rel="noopener noreferrer" className="font-semibold">
                  {t('hero.ctaWhatsapp')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">{t('footer.languageTitle')}</h3>
            <div className="flex flex-col gap-3">
              <Link
                href={pathname}
                locale="tr"
                className={`flex items-center gap-2 text-sm font-bold tracking-widest transition-all ${locale === 'tr' ? 'text-gold' : 'text-text/45 hover:text-text/85'}`}
              >
                <div className={`w-2 h-2 rounded-full ${locale === 'tr' ? 'bg-gold' : 'bg-transparent border border-text/20'}`} />
                {t('footer.langTr')}
              </Link>
              <Link
                href={pathname}
                locale="en"
                className={`flex items-center gap-2 text-sm font-bold tracking-widest transition-all ${locale === 'en' ? 'text-gold' : 'text-text/45 hover:text-text/85'}`}
              >
                <div className={`w-2 h-2 rounded-full ${locale === 'en' ? 'bg-gold' : 'bg-transparent border border-text/20'}`} />
                {t('footer.langEn')}
              </Link>
            </div>

            <h3 className="text-white font-bold mt-8 mb-4 uppercase tracking-widest text-sm">{t('footer.legalTitle')}</h3>
            <div className="flex flex-col gap-3">
              <Link href="/duyurular" locale={locale} className="text-sm font-semibold text-text/70 hover:text-gold transition-colors">
                {t('footer.announcements')}
              </Link>
              <Link href="/kvkk" locale={locale} className="text-sm font-semibold text-text/70 hover:text-gold transition-colors">
                {t('footer.kvkk')}
              </Link>
              <Link href="/cerez-politikasi" locale={locale} className="text-sm font-semibold text-text/70 hover:text-gold transition-colors">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex justify-center items-center text-text/45 text-xs tracking-widest uppercase">
          <p>© {new Date().getFullYear()} {t('common.brand')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
