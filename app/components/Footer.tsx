"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, ArrowUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-vacciman-slate border-t border-slate-800 text-slate-400 font-sans relative overflow-hidden pt-20 pb-8">
      {/* Dynamic Geometric Backing (Matching your Hero theme) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border-[30px] border-white -translate-x-20 translate-y-20" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-vacciman-green rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Column 1: Brand Info Box (4 Spans) */}
          <div className="lg:col-span-4 space-y-6">
           <div className="inline-flex items-center h-16 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
                <Image
                src="/vaccimanlogo.png"
                alt="Vacciman Company Limited"
                width={140}   // Adjust this number up or down to make the actual logo bigger or smaller
                height={48}   // Controls the max vertical space inside the 16 (64px) container
                priority
                className="object-contain h-12 w-auto" 
                />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Duly registered and headquartered in Nairobi, Kenya. Committed to delivering high-quality, safe, and compliant medical devices, instruments, and pharmaceuticals across the East African region.
            </p>
            {/* Quick Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vacciman-green/10 text-vacciman-green text-xs font-bold border border-vacciman-green/20">
              <span className="w-2 h-2 rounded-full bg-vacciman-green animate-pulse" />
              Est. June 2023
            </div>
          </div>

          {/* Column 2: Quick Links Navigation (2 Spans) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Corporate</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Solutions", "Market Reach", "Insights"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-vacciman-green transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-vacciman-green" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Operations (3 Spans) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Core Operations</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vacciman-blue" /> Medical & Diagnostic Equipment
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vacciman-blue" /> Surgical Instruments
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vacciman-blue" /> Pharmaceutical Logistics
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vacciman-blue" /> Personal Protective Equipment
              </li>
            </ul>
          </div>

          {/* Column 4: Official Verified Contact Coordinates (3 Spans) */}
          <div className="lg:col-span-3 space-y-5" id="contact">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Contact Matrix</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-vacciman-green shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  Ntashart Plaza,<br />
                  Elgeyo Marakwet Road, off Ngong Road.<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="space-y-1">
                <div className="flex items-center gap-3 text-slate-300 hover:text-vacciman-green transition-colors">
                  <Phone className="w-4 h-4 text-vacciman-green" />
                  <a href="tel:+254722008649">+254 727 206 387</a>
                </div>
                
              </li>
              <li>
                <a href="mailto:vacciman@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-vacciman-green transition-colors group">
                  <Mail className="w-4 h-4 text-vacciman-green" />
                  <span className="break-all">vacciman@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.vacciman.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-vacciman-green transition-colors">
                  <Globe className="w-4 h-4 text-vacciman-green" />
                  <span>www.vacciman.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: License and Scroll Up Assembly */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-2 gap-4">
          <div className="text-xs tracking-wide text-slate-500 text-center sm:text-left space-y-1">
            <p>&copy; {currentYear} Vacciman Company Limited. All Rights Reserved.</p>
            <p className="text-slate-600">Delivering quality, safety, and operational excellence to regional healthcare channels.</p>
          </div>
          
          {/* Scroll Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="p-3 bg-slate-800 hover:bg-vacciman-green text-white hover:text-vacciman-slate rounded-xl transition-all duration-300 shadow-lg group"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}