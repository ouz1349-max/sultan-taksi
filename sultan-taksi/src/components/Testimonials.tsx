"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const t = useTranslations('testimonials');

  const reviews = [
    { text: t('r1'), author: 'Ahmet Y.', rating: 5 },
    { text: t('r2'), author: 'Mehmet K.', rating: 5 },
    { text: t('r3'), author: 'Ayşe S.', rating: 5 }
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(82,132,184,0.14),transparent_35%)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">{t('badge')}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t('title')}</h2>
          <div className="flex items-center justify-center gap-1 mb-2 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-gold font-bold">4.9/5 - Google Reviews</p>
          <a
            href="https://maps.google.com/?q=Kenan%20Evren%20Sultan%20Taksi%20Adana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-text/90 hover:text-gold transition-colors underline underline-offset-4"
          >
            {t('seeOnGoogle')}
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="p-7 glass-panel rounded-3xl relative text-left"
              initial={{ opacity: 0, scale: 0.92, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <Quote size={38} className="text-gold/25 absolute top-5 right-6" />
              <p className="text-text/86 italic mb-6 leading-relaxed text-lg">&quot;{review.text}&quot;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-sm font-bold">
                    {review.author[0]}
                  </div>
                  <span className="font-bold text-white uppercase tracking-wider text-sm">{review.author}</span>
                </div>
                <div className="text-gold text-sm">{review.rating}.0</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
