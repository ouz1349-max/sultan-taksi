"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, MapPin, UserCheck } from 'lucide-react';

const Features = () => {
  const t = useTranslations('features');
  const common = useTranslations('common');

  const featureList = [
    { icon: <Clock className="text-gold" size={28} />, key: 'f1' },
    { icon: <ShieldCheck className="text-gold" size={28} />, key: 'f2' },
    { icon: <MapPin className="text-gold" size={28} />, key: 'f3' },
    { icon: <UserCheck className="text-gold" size={28} />, key: 'f4' }
  ];

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(215,176,91,0.12),transparent_33%)]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pr-10"
          >
            <p className="section-kicker mb-4">{common('fullName')}</p>
            <h2 className="max-w-md text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-[3.6rem]">
              {t('title')}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-text/74 md:text-lg">
              {t('lead')}
            </p>
          </motion.div>

          <div className="border-t border-gold/12">
            {featureList.map((item, index) => (
              <motion.div
                key={item.key}
                className="grid gap-5 border-b border-gold/12 py-7 md:grid-cols-[80px_1fr]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="flex items-center gap-4 md:block">
                  <span className="font-display text-[2rem] leading-none text-gold/35">
                    0{index + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/18 bg-gold/8">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.65rem] font-bold tracking-[-0.03em] text-white md:text-[2rem]">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-8 text-text/72">
                    {t(`${item.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

