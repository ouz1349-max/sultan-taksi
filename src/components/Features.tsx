"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, MapPin, UserCheck } from 'lucide-react';

const Features = () => {
  const t = useTranslations('features');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
  };

  const featureList = [
    { icon: <Clock className="text-gold" size={34} />, key: 'f1' },
    { icon: <ShieldCheck className="text-gold" size={34} />, key: 'f2' },
    { icon: <MapPin className="text-gold" size={34} />, key: 'f3' },
    { icon: <UserCheck className="text-gold" size={34} />, key: 'f4' }
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(215,176,91,0.12),transparent_33%)]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="section-kicker mb-4">Sultan Taksi</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t('title')}</h2>
          <p className="max-w-2xl mx-auto text-text/80">{t('lead')}</p>
        </motion.div>

        <div className="section-divider mb-10" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9 rail-list pl-6 md:pl-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featureList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rail-item group"
              whileHover={{ x: 4 }}
            >
              <div className="mb-4 bg-gold/10 w-12 h-12 flex items-center justify-center rounded-xl group-hover:bg-gold/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {t(`${item.key}.title`)}
              </h3>
              <p className="text-text/75 leading-relaxed max-w-md">
                {t(`${item.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
