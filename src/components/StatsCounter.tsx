"use client";

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, Users, Clock3, MapPin } from 'lucide-react';

const StatsCounter = () => {
  const t = useTranslations('stats');
  const common = useTranslations('common');
  const locale = useLocale();

  const serviceValue = locale === 'tr' ? '7/24' : '24/7';

  const supportStats = [
    { icon: <Users size={18} className="text-gold" />, value: '22+', label: t('reviews'), desc: t('d2') },
    { icon: <Clock3 size={18} className="text-gold" />, value: serviceValue, label: t('service'), desc: t('d3') },
    { icon: <MapPin size={18} className="text-gold" />, value: '2 km', label: t('coverage'), desc: t('d4') }
  ];

  return (
    <section className="relative bg-bg-primary py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] border border-gold/12 bg-[linear-gradient(155deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-gold/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12"
            >
              <p className="section-kicker mb-4">{common('fullName')}</p>
              <div className="flex items-end gap-4 md:gap-5">
                <div className="font-display text-[4.4rem] font-bold leading-none tracking-[-0.08em] text-white md:text-[6.6rem]">
                  4.9
                </div>
                <div className="pb-3 text-gold">
                  <Star size={26} fill="currentColor" />
                </div>
              </div>
              <h2 className="mt-4 max-w-md font-display text-[2rem] font-bold leading-tight tracking-[-0.04em] text-white md:text-[2.75rem]">
                {t('googleScore')}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-text/72 md:text-lg">
                {t('d1')}
              </p>
            </motion.div>

            <div className="space-y-5">
              {supportStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start justify-between gap-5 border-b border-gold/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-gold/15 bg-gold/8">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold/76">
                        {stat.label}
                      </p>
                      <p className="mt-2 max-w-[17rem] text-sm leading-7 text-text/66 md:text-base">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                  <div className="font-display text-[2.2rem] font-bold leading-none tracking-[-0.05em] text-white md:text-[2.7rem]">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
