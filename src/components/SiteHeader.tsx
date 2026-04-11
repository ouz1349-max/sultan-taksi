"use client";

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MessageCircle, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SiteHeader = () => {
  const common = useTranslations('common');
  const nav = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const navClass = (href: string) => {
    const target = href === '/' ? `/${locale}` : `/${locale}${href}`;
    const active = href === '/' ? pathname === target : pathname === target || pathname.startsWith(`${target}/`);

    return `text-sm font-semibold transition-colors ${active ? 'text-gold' : 'text-text/78 hover:text-gold'}`;
  };

  const menuItems = [
    { href: '/', label: nav('home') },
    { href: '/galeri', label: nav('gallery') },
    { href: '/rehberler', label: nav('guides') },
    { href: '/hakkimizda', label: nav('about') },
    { href: '/duyurular', label: nav('announcements') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 md:px-6">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              locale={locale} 
              className="font-display text-lg font-bold tracking-[-0.03em] text-gold md:text-[1.75rem]"
              onClick={() => setIsMenuOpen(false)}
            >
              {common('fullName')}
            </Link>

            <nav className="hidden items-center gap-5 md:flex">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} locale={locale} className={navClass(item.href)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/905302227795"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[42px] items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-gold-light md:inline-flex"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/16 bg-white/[0.03] text-gold transition-colors hover:bg-gold/10 md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl" />
            <div className="relative flex h-full flex-col px-8 pt-32 pb-12">
              <nav className="flex flex-col gap-6">
                {menuItems.map((item, index) => {
                  const target = item.href === '/' ? `/${locale}` : `/${locale}${item.href}`;
                  const active = item.href === '/' ? pathname === target : pathname === target || pathname.startsWith(`${target}/`);
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        locale={locale}
                        className={`text-3xl font-bold tracking-tight ${active ? 'text-gold' : 'text-text/60'}`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto">
                <a
                  href="https://wa.me/905302227795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gold py-5 text-lg font-bold text-black shadow-[0_12px_40px_rgba(215,176,91,0.25)]"
                >
                  <MessageCircle size={22} />
                  WhatsApp Destek
                </a>
                <p className="mt-6 text-center text-sm text-text/40 italic">
                  7/24 Kesintisiz Hizmet
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
