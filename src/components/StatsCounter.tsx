"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Star, Users, Clock, Map } from 'lucide-react';

const Counter = ({ value, decimals = 0 }: { value: number; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(decimals);
        }
      }
    });
    return () => controls.stop();
  }, [value, decimals]);

  return <span ref={ref}>0</span>;
};

const StatsCounter = () => {
  const t = useTranslations('stats');
  const common = useTranslations('common');
  const locale = useLocale();

  const serviceValue = locale === 'tr' ? 7 : 24;
  const serviceSuffix = locale === 'tr' ? '/24' : '/7';

  const statsList = [
    { icon: <Star className="text-gold" size={30} />, value: 4.9, suffix: ' ★', decimals: 1, label: t('googleScore') },
    { icon: <Users className="text-gold" size={30} />, value: 22, suffix: '+', decimals: 0, label: t('reviews') },
    { icon: <Clock className="text-gold" size={30} />, value: serviceValue, suffix: serviceSuffix, decimals: 0, label: t('service') },
    { icon: <Map className="text-gold" size={30} />, value: 2, suffix: ' km', decimals: 0, label: t('coverage') }
  ];

  return (
    <section className="py-20 bg-bg-primary relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-9">
          <p className="section-kicker mb-4">{common('fullName')}</p>
          <div className="section-divider" />
        </div>
        <div className="rounded-3xl p-4 md:p-8 border border-gold/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsList.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center py-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="mb-4 h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">
                  <Counter value={stat.value} decimals={stat.decimals} />
                  <span className="text-gold">{stat.suffix}</span>
                </div>
                <p className="text-text/65 text-[11px] md:text-sm font-semibold tracking-wider uppercase mt-1 max-w-[170px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
