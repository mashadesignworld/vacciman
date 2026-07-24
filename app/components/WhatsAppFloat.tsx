'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsAppFloatProps {
  phoneNumber?: string; // Format: 254XXXXXXXXX (e.g., 254712345678)
  defaultMessage?: string;
}

export default function WhatsAppFloat({
  phoneNumber = '254727206387', // 👈 Replace with your primary VACCIMAN WhatsApp number
  defaultMessage = 'Hello VACCIMAN LTD! I am inquiring about your medical equipment and cold chain solutions in Nairobi, Kenya.',
}: WhatsAppFloatProps) {
  const [isHovered, setIsHovered] = useState(false);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">
      {/* Tooltip Card (Desktop Hover / Attention Grabber) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mr-3 hidden md:flex flex-col rounded-2xl bg-slate-900/90 backdrop-blur-md px-4 py-3 text-xs text-white shadow-2xl border border-slate-800 pointer-events-none"
          >
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400">VACCIMAN LTD</span>
            </div>
            <p className="mt-1 text-slate-300 font-medium">Medical Equipment Suppliers • Nairobi, Kenya</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Container */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VACCIMAN LTD on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center rounded-full p-4 bg-emerald-500 text-white shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] hover:bg-emerald-600 transition-colors duration-200 group"
      >
        {/* Soft Animated Outer Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75 group-hover:opacity-100 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 4.992L2 22l5.129-1.335a9.92 9.92 0 0 0 4.882 1.28h.005c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.038-5.176-2.925-7.062C17.195 3.033 14.685 2 12.012 2zm5.836 14.167c-.242.684-1.22 1.31-1.722 1.385-.466.07-1.077.108-3.136-.745-2.635-1.09-4.329-3.774-4.46-3.948-.13-.173-1.064-1.417-1.064-2.702 0-1.285.671-1.918.91-2.178.238-.26.519-.325.693-.325.173 0 .346.002.497.009.16.008.377-.06.59.453.216.52.735 1.795.8 1.925.065.13.108.281.022.454-.087.173-.13.281-.26.433-.13.152-.272.339-.389.455-.13.13-.265.271-.114.53.151.26.671 1.106 1.442 1.792.991.882 1.828 1.156 2.088 1.286.26.13.411.108.562-.065.152-.173.649-.757.822-1.017.173-.26.346-.217.584-.13.238.087 1.514.714 1.774.844.26.13.433.195.498.303.065.108.065.627-.177 1.311z" />
        </svg>

        {/* Live Status Indicator Badge */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
      </motion.a>
    </div>
  );
}