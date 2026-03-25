"use client";

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/905302227795"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-16 h-16 bg-gold text-black rounded-full shadow-[0_14px_32px_rgba(215,176,91,0.45)] hover:bg-gold-light transition-colors duration-300 animate-pulse-gold group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={30} />
      <span className="absolute right-full mr-3 bg-[#111723] text-[#F5F5F0] px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gold/50">
        WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
