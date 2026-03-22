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
  const locale = useLocale();

  const serviceValue = locale === 'tr' ? 7 : 24;
  const serviceSuffix = locale === 'tr' ? '/24' : '/7';

  const statsList = [
    { icon: <Star className="text-gold" size={30} />, value: 4.9, suffix: ' ★', decimals: 1, label: t('googleScore') },
    { icon: <Users className="text-gold" size={30} />, value: 22, suffix: '+', decimals: 0, label: t('reviews') },
    { icon: <Clock className="text-gold" size={30} />, value: serviceValue, suffix: serviceSuffix, decimals: 0, label: t('service') },
    { icon: <Map className="text-gold" size={30} />, value: 15, suffix: '+', decimals: 0, label: t('coverage') }
  ];

  return (
    <section className="py-20 bg-bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border-gold/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsList.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="mb-4 h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">
                  <Counter value={stat.value} decimals={stat.decimals} />
                  <span className="text-gold">{stat.suffix}</span>
                </div>
                <p className="text-text/65 text-xs md:text-sm font-semibold tracking-wider uppercase mt-1">
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
