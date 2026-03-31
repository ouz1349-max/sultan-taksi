"use client";

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, ShieldCheck, Clock3, Star } from 'lucide-react';

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-primary">
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] scale-100 md:scale-105 max-md:object-[72%_52%]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero.webp"
        aria-hidden="true"
      >
        <source src="/videos/sultanvideo.mp4?v=20260331-025729" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#04060bc2] via-[#05070c70] to-[#090b1099]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_36%,rgba(3,5,9,0.04),rgba(3,5,9,0.32)_56%,rgba(3,5,9,0.56)_100%)]" />

      <div className="absolute -left-8 -top-14 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
      <div className="absolute -right-14 top-24 h-72 w-72 rounded-full bg-sky-500/14 blur-3xl" />

      <div className="container relative z-10 mx-auto -mt-10 px-6 pt-24 md:-mt-14 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: 'easeOut' }}
          className="mx-auto max-w-[62rem] text-center"
        >
          <motion.p
            className="section-kicker mb-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            {t('badge')}
          </motion.p>

          <h1 className="mb-7 font-black leading-[0.9] tracking-[-0.06em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="block text-[3.55rem] md:text-[6.4rem] lg:text-[7rem]">{t('title1')}</span>
            <span className={`block text-[4.15rem] md:text-[7.4rem] lg:text-[8.2rem] ${locale === 'tr' ? 'text-gold' : 'text-gold-gradient'} -mt-1 md:-mt-2`}>
              {t('title2')}
            </span>
          </h1>

          <motion.p
            className="mx-auto mb-11 max-w-[36rem] text-[1rem] font-light leading-[1.8] text-text/90 md:text-[1.38rem]"
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
              className="shine-button flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-gold px-10 py-4 text-base font-bold text-black shadow-[0_14px_36px_rgba(215,176,91,0.38)] transition-all duration-300 hover:bg-gold-light sm:w-auto"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Phone size={20} />
              {t('ctaCall')}
            </motion.a>

            <motion.a
              href="https://wa.me/905302227795"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[58px] w-full items-center justify-center gap-3 rounded-full border border-white/12 bg-black/18 px-10 py-4 text-base font-semibold text-text/88 backdrop-blur-md transition-all duration-300 hover:border-gold/30 hover:text-gold sm:flex sm:w-auto"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageSquare size={20} />
              {t('ctaWhatsapp')}
            </motion.a>
          </motion.div>

          <div className="mx-auto max-w-5xl border-y border-gold/12 py-5 md:py-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
              <div className="px-3 text-center md:px-6">
                <div className="mb-1.5 flex items-center justify-center gap-2 text-[0.94rem] font-semibold text-gold"><ShieldCheck size={17} /> {t('trust1Title')}</div>
                <p className="text-[0.92rem] leading-7 text-text/74">{t('trust1Desc')}</p>
              </div>
              <div className="px-3 text-center md:border-l md:border-r md:border-gold/12 md:px-6">
                <div className="mb-1.5 flex items-center justify-center gap-2 text-[0.94rem] font-semibold text-gold"><Clock3 size={17} /> {t('trust2Title')}</div>
                <p className="text-[0.92rem] leading-7 text-text/74">{t('trust2Desc')}</p>
              </div>
              <div className="px-3 text-center md:px-6">
                <div className="mb-1.5 flex items-center justify-center gap-2 text-[0.94rem] font-semibold text-gold"><Star size={17} /> {t('trust3Title')}</div>
                <p className="text-[0.92rem] leading-7 text-text/74">{t('trust3Desc')}</p>
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

