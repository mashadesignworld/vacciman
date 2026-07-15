"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-vacciman-blue text-white py-20 px-6">
      {/* Decorative Grid Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold tracking-widest uppercase bg-vacciman-green/20 text-vacciman-green px-4 py-1.5 rounded-full border border-vacciman-green/30"
        >
          Get in Touch
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold mt-6 tracking-tight"
        >
          Let’s Talk About Your <br className="hidden md:inline"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vacciman-green to-teal-300">Healthcare Solutions</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 max-w-2xl mx-auto mt-6 text-lg"
        >
          Whether you are equipping an ICU, sourcing certified pharmaceuticals, or looking for preventive maintenance contracts, our team is ready to step in.
        </motion.p>
      </div>
    </div>
  );
}