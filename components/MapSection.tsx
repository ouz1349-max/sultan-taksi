"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MapSection() {
  const t = useTranslations("Map");

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            className="text-text/60 font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <motion.div 
          className="w-full h-[500px] rounded-3xl overflow-hidden border border-primary/20 gold-glow grayscale contrast-[0.9] invert-[0.9] opacity-80"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Dark Mode styled Google Maps Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1594.1328400000002!2d35.3188402!3d36.9926403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f6a9e064903%3A0x73b879da2afc4635!2sKenan%20Evren%20Sultan%20Taksi!5e0!3m2!1str!2str!4v1711200000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
