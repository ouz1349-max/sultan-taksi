"use client";

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MessageCircle } from 'lucide-react';

const SiteHeader = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
          <Link href="/" locale={locale} className="text-gold font-display text-lg md:text-2xl font-black tracking-tight">
            {t('common.fullName')}
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/duyurular"
              locale={locale}
              className="px-3 md:px-4 py-2 rounded-xl border border-gold/30 text-gold text-xs md:text-sm font-semibold hover:bg-gold hover:text-black transition-colors"
            >
              {t('nav.announcements')}
            </Link>
            <a
              href="https://wa.me/905302227795"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 md:px-4 py-2 rounded-xl bg-gold text-black text-xs md:text-sm font-bold inline-flex items-center gap-1.5 hover:bg-gold-light transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
