"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, CarTaxiFront, Plane } from 'lucide-react';

const MapSection = () => {
  const t = useTranslations('map');

  return (
    <section className="py-24 bg-bg-primary overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(215,176,91,0.12),transparent_42%)]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p className="section-kicker mb-4">{t('badge')}</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t('title')}</h2>
            <p className="text-xl text-text/90 mb-8 max-w-lg leading-relaxed">{t('desc')}</p>
            <div className="space-y-5 rail-list pl-5">
              <div className="flex items-center gap-4 text-gold font-bold text-lg rail-item">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                {t('area1')}
              </div>
              <div className="flex items-center gap-4 text-gold font-bold text-lg rail-item">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <CarTaxiFront size={18} />
                </div>
                {t('area2')}
              </div>
              <div className="flex items-center gap-4 text-gold font-bold text-lg rail-item">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <Plane size={18} />
                </div>
                {t('area3')}
              </div>
            </div>
            <p className="mt-6 text-sm text-text/80">
              {t('locationLabel')}: 36.99596464522967, 35.31295965406494
            </p>
            <a
              href="https://maps.google.com/?q=Kenan%20Evren%20Sultan%20Taksi%20Adana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 items-center gap-2 px-5 py-3 rounded-xl bg-gold text-black font-semibold hover:bg-gold-light transition-colors"
            >
              {t('openMap')}
            </a>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 h-[420px] rounded-3xl overflow-hidden border border-gold/25 shadow-[0_24px_50px_rgba(0,0,0,0.45)] relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <iframe
              src="https://www.google.com/maps?q=Kenan%20Evren%20Sultan%20Taksi%20Adana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Kenan Evren Sultan Taksi Haritası"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0e17]/45 via-transparent to-[#0a0e17]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
