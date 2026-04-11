"use client";

import { useTranslations } from 'next-intl';
import Accordion from './Accordion';

const FAQ = () => {
  const t = useTranslations('faq');

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

          <div>
            <Accordion 
              items={items.map(item => ({ question: item.q, answer: item.a }))} 
              showNumbers 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

