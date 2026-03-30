"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') }
  ];

  return (
    <section className="relative overflow-hidden bg-bg-secondary py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(215,176,91,0.12),transparent_36%)]" />
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="section-kicker mb-4">{t('badge')}</p>
            <h2 className="max-w-md text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-[3.4rem]">
              {t('title')}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-text/72 md:text-lg">
              {t('intro')}
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="overflow-hidden rounded-[26px] border border-gold/14 bg-white/[0.03]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6"
                    type="button"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-display text-2xl leading-none text-gold/35">0{index + 1}</span>
                      <span className="text-base font-semibold leading-7 text-white md:text-lg">{item.q}</span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`mt-1 flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <p className="px-5 pb-6 pl-14 text-base leading-8 text-text/82 md:px-6 md:pb-6 md:pl-[4.6rem]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

