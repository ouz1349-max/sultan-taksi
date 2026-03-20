"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href="https://wa.me/905302227795"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative block w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow gold-glow overflow-hidden"
      >
        <MessageCircle size={32} />
        
        {/* Continuous Pulse Animation */}
        <motion.div 
          className="absolute inset-0 bg-white/20 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.a>
      
      {/* Decorative Aura */}
      <div className="absolute -inset-2 bg-primary/20 blur-lg rounded-full animate-pulse -z-10" />
    </div>
  );
}
