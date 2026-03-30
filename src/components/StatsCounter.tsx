"use client";

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Map } from 'lucide-react';

const StatsCounter = () => {
  const t = useTranslations('stats');
  const common = useTranslations('common');
  const locale = useLocale();

  const statsList = [
    { icon: <Star className="text-gold" size={26} />, value: '4.9', label: t('googleScore') },
    { icon: <Users className="text-gold" size={26} />, value: '22+', label: t('reviews') },
    { icon: <Clock className="text-gold" size={26} />, value: locale === 'tr' ? '7/24' : '24/7', label: t('service') },
    { icon: <Map className="text-gold" size={26} />, value: '2 km', label: t('coverage') }
  ];

  return (
    <section className="relative bg-bg-primary py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="section-kicker mb-4">{common('fullName')}</p>
          <div className="section-divider" />
        </div>

        <div className="grid gap-6 border-y border-gold/12 py-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-8">
          {statsList.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center lg:px-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/18 bg-gold/8">
                {stat.icon}
              </div>
              <div className="font-display text-[2.7rem] font-bold leading-none tracking-[-0.05em] text-white md:text-[3.25rem]">
                {stat.value}
              </div>
              <p className="mt-3 max-w-[190px] text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-text/56 md:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;

