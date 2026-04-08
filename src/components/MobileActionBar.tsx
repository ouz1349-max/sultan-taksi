"use client";

import { Phone, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';

const MobileActionBar = () => {
  const t = useTranslations('hero');
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-[#080a10] to-transparent">
      <div className="grid grid-cols-2 gap-3 rounded-2xl glass-panel p-2">
        <a
          href="tel:05302227795"
          className="flex items-center justify-center gap-2 rounded-xl bg-gold text-black font-bold py-3 text-sm"
        >
          <Phone size={17} />
          {t('ctaCall')}
        </a>
        <a
          href="https://wa.me/905302227795"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-gold/35 text-gold font-bold py-3 text-sm bg-[#111723]/70"
        >
          <MessageCircle size={17} />
          {t('ctaWhatsapp')}
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
