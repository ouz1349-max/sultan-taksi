"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, MapPin, UserCheck, ArrowUpRight } from 'lucide-react';

const Features = () => {
  const t = useTranslations('features');
  const common = useTranslations('common');

  const featureList = [
    { icon: <Clock className="text-gold" size={22} />, key: 'f1' },
    { icon: <ShieldCheck className="text-gold" size={22} />, key: 'f2' },
    { icon: <MapPin className="text-gold" size={22} />, key: 'f3' },
    { icon: <UserCheck className="text-gold" size={22} />, key: 'f4' }
  ];

  const titleLines = t.raw('titleLines') as string[];
  const supportPoints = t.raw('supportPoints') as string[];

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(58,82,116,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,17,0)_0%,rgba(8,11,17,0.06)_48%,rgba(8,11,17,0.18)_100%)]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pr-10"
          >
            <p className="section-kicker mb-4">{common('fullName')}</p>
            <h2 className="max-w-[12ch] text-4xl font-black leading-[0.98] tracking-[-0.05em] text-white md:text-[3.9rem]">
              {titleLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-text/74 md:text-lg">
              {t('lead')}
            </p>

            <div className="mt-8 space-y-3">
              {supportPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-gold/10 pb-3 text-sm text-text/72 md:text-base">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                  <span className="leading-7">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {featureList.map((item, index) => (
              <motion.div
                key={item.key}
                className="group rounded-[1.7rem] border border-gold/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.012))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:border-gold/18 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.016))] md:p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-90px' }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[1.5rem] leading-none text-gold/34">
                      0{index + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/18 bg-gold/8">
                      {item.icon}
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-gold/35 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold/76">
                    {t(`${item.key}.eyebrow`)}
                  </p>
                  <h3 className="mt-3 text-[1.5rem] font-bold leading-tight tracking-[-0.03em] text-white md:text-[1.9rem]">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-text/72">
                    {t(`${item.key}.desc`)}
                  </p>
                  <p className="mt-4 border-t border-gold/10 pt-4 text-sm leading-7 text-text/56">
                    {t(`${item.key}.detail`)}
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
