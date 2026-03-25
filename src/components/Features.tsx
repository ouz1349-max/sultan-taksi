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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Sultan Taksi</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t('title')}</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featureList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-7 glass-panel rounded-3xl transition-all duration-300 group"
              whileHover={{ y: -10, rotateX: 3, boxShadow: '0 14px 35px -8px rgba(215,176,91,0.25)' }}
            >
              <div className="mb-6 bg-gold/10 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-gold/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {t(`${item.key}.title`)}
              </h3>
              <p className="text-text/75 leading-relaxed font-light">
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
