"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Optimized Corporate Brand Logo Frame */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative h-20 w-auto min-w-[140px] flex items-center">
            <Image
      src="/vaccimanlogo.png"
      alt="Vacciman Company Limited Logo"
      fill
      priority
      sizes="(max-width: 768px) 240px, 320px"
      className="object-contain object-left transition-transform group-hover:scale-[1.02] duration-300"
    />
          </div>
        </Link>

        {/* Desktop Navigation Link Cluster */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Solutions", "Market Reach", "Insights"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-slate-600 hover:text-vacciman-blue transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-vacciman-green transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Button & Language Controller */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-vacciman-blue px-3 py-2 rounded-lg transition-colors">
            <Globe className="w-4 h-4" />
            <span>EN</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          <button className="px-5 py-2.5 bg-vacciman-green hover:bg-vacciman-greenLight text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-vacciman-green/10 transform hover:-translate-y-0.5">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle Trigger */}
        <button className="md:hidden p-2 text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Layer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-100 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {["Home", "About Us", "Solutions", "Market Reach", "Insights"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-vacciman-blue py-2 block border-b border-slate-50"
                >
                  {item}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button className="w-full py-3 bg-vacciman-blue text-white font-medium rounded-xl text-center shadow-md">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}