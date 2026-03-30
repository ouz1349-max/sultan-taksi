"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShieldCheck, Clock3, Star } from 'lucide-react';

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-primary">
      <div
        className="hero-bg-image absolute inset-0 z-0 bg-no-repeat scale-100 md:scale-105"
        style={{
          backgroundImage: 'linear-gradient(112deg, rgba(4,7,12,0.68) 8%, rgba(8,10,18,0.38) 52%, rgba(4,7,12,0.72) 100%), url("/images/hero.webp")'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#05070c66] via-[#05070c66] to-[#090b1090]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_38%,rgba(3,5,9,0.06),rgba(3,5,9,0.36)_56%,rgba(3,5,9,0.52)_100%)]" />

      <div className="absolute -left-8 -top-14 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
      <div className="absolute -right-14 top-24 h-72 w-72 rounded-full bg-sky-500/18 blur-3xl" />
      <div className="absolute bottom-16 left-[12%] h-36 w-36 rounded-full border border-gold/20" />

      <div className="container relative z-10 mx-auto px-6 pt-24 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            className="section-kicker mb-7"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            {t('badge')}
          </motion.p>

          <h1 className="mb-6 text-5xl font-black leading-[0.98] tracking-[-0.05em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] md:text-[6.8rem]">
            <span className="block">{t('title1')}</span>
            <span className={`block ${locale === 'tr' ? 'mt-2 text-gold md:mt-3' : 'mt-1 text-gold-gradient'}`}>{t('title2')}</span>
          </h1>

          <motion.p
            className="mx-auto mb-10 max-w-xl text-[1.05rem] font-light leading-[1.75] text-text/92 md:text-[1.45rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.8 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
          >
            <motion.a
              href="tel:05302227795"
              className="shine-button flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-gold px-10 py-4 text-base font-bold text-black shadow-[0_12px_30px_rgba(215,176,91,0.35)] transition-all duration-300 hover:bg-gold-light sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Phone size={20} />
              {t('ctaCall')}
            </motion.a>

            <motion.a
              href="https://wa.me/905302227795"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button hidden min-h-[56px] w-full items-center justify-center gap-3 rounded-full border border-gold/25 bg-white/[0.04] px-10 py-4 text-base font-bold text-gold transition-all duration-300 hover:border-gold/40 sm:flex sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageSquare size={20} />
              {t('ctaWhatsapp')}
            </motion.a>
          </motion.div>

          <div className="mx-auto max-w-4xl border-y border-gold/12 py-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="px-3 text-center">
                <div className="mb-2 flex items-center justify-center gap-2 text-[0.94rem] font-semibold text-gold"><ShieldCheck size={17} /> {t('trust1Title')}</div>
                <p className="text-[0.92rem] leading-7 text-text/78">{t('trust1Desc')}</p>
              </div>
              <div className="px-3 text-center sm:border-l sm:border-r sm:border-gold/12 sm:px-5">
                <div className="mb-2 flex items-center justify-center gap-2 text-[0.94rem] font-semibold text-gold"><Clock3 size={17} /> {t('trust2Title')}</div>
                <p className="text-[0.92rem] leading-7 text-text/78">{t('trust2Desc')}</p>
              </div>
              <div className="px-3 text-center">
                <div className="mb-2 flex items-center justify-center gap-2 text-[0.94rem] font-semibold text-gold"><Star size={17} /> {t('trust3Title')}</div>
                <p className="text-[0.92rem] leading-7 text-text/78">{t('trust3Desc')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-[#090b10] to-transparent" />
    </section>
  );
};

export default Hero;

