"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShieldCheck, Clock3, Star } from 'lucide-react';

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
      <div
        className="absolute inset-0 z-0 bg-no-repeat hero-bg-image scale-100 md:scale-105"
        style={{
          backgroundImage: 'linear-gradient(112deg, rgba(4,7,12,0.68) 8%, rgba(8,10,18,0.38) 52%, rgba(4,7,12,0.72) 100%), url("/images/hero.webp")'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#05070c66] via-[#05070c66] to-[#090b1090]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_38%,rgba(3,5,9,0.06),rgba(3,5,9,0.36)_56%,rgba(3,5,9,0.52)_100%)]" />

      <div className="absolute -top-14 -left-8 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
      <div className="absolute top-24 -right-14 h-72 w-72 rounded-full bg-sky-500/18 blur-3xl" />
      <div className="absolute bottom-16 left-[12%] h-36 w-36 rounded-full border border-gold/20" />

      <div className="container mx-auto px-6 relative z-10 pt-8 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.p
            className="section-kicker mb-7"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            {t('badge')}
          </motion.p>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.03] drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <span className="block">{t('title1')}</span>
            <span className={`block ${locale === 'tr' ? 'text-gold mt-2 md:mt-3' : 'text-gold-gradient mt-1'}`}>{t('title2')}</span>
          </h1>

          <motion.p
            className="text-[1.08rem] md:text-2xl text-text/95 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.8 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
          >
            <motion.a
              href="tel:05302227795"
              className="shine-button flex items-center gap-3 px-10 py-4 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all duration-300 w-full sm:w-auto justify-center shadow-[0_12px_30px_rgba(215,176,91,0.35)] text-base min-h-[56px]"
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
              className="shine-button flex items-center gap-3 px-10 py-4 glass-panel text-gold font-bold rounded-full hover:border-gold/40 transition-all duration-300 w-full sm:w-auto justify-center text-base min-h-[56px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageSquare size={20} />
              {t('ctaWhatsapp')}
            </motion.a>
          </motion.div>

          <div className="max-w-4xl mx-auto border-y border-gold/15 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="text-left">
                <div className="flex items-center gap-2 text-gold mb-1"><ShieldCheck size={17} /> {t('trust1Title')}</div>
                <p className="text-[14px] text-text/85 leading-relaxed">{t('trust1Desc')}</p>
              </div>
              <div className="text-left sm:border-l sm:border-r sm:border-gold/15 sm:px-5">
                <div className="flex items-center gap-2 text-gold mb-1"><Clock3 size={17} /> {t('trust2Title')}</div>
                <p className="text-[14px] text-text/85 leading-relaxed">{t('trust2Desc')}</p>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 text-gold mb-1"><Star size={17} /> {t('trust3Title')}</div>
                <p className="text-[14px] text-text/85 leading-relaxed">{t('trust3Desc')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#090b10] to-transparent z-10" />
    </section>
  );
};

export default Hero;
