"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Clock, ShieldCheck, MapPin, UserCheck } from "lucide-react";

export default function Features() {
  const t = useTranslations("Features");

  const features = [
    {
      icon: Clock,
      title: t("service724.title"),
      description: t("service724.description"),
    },
    {
      icon: ShieldCheck,
      title: t("safe.title"),
      description: t("safe.description"),
    },
    {
      icon: MapPin,
      title: t("allAdana.title"),
      description: t("allAdana.description"),
    },
    {
      icon: UserCheck,
      title: t("experienced.title"),
      description: t("experienced.description"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-4 bg-secondary-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t("title")}
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-background border border-primary/10 rounded-2xl hover:border-primary/40 transition-colors group gold-glow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif mb-4 text-accent">{feature.title}</h3>
              <p className="text-text/60 font-sans leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
