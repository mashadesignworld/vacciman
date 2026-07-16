"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, X, Send, ArrowUpRight } from "lucide-react";

export default function Hero() {
  // Master array linking background ambiance, featured product details, and localized imaging data
  const dynamicSlides = [
    {
      bgImage: "/hero1.jpg",
      prodTitle: "Digital Diagnostics",
      prodDesc: "Certified digital frameworks & imaging units.",
      prodImage: "/prod1.jpg",
    },
    {
      bgImage: "/hero2.jpg",
      prodTitle: "Precision Surgical",
      prodDesc: "Premium grade tools for high-efficiency theatres.",
      prodImage: "/prod2.jpg",
    },
    {
      bgImage: "/hero3.jpg",
      prodTitle: "Cold-Chain Pharma",
      prodDesc: "Temperature-secure wholesale regional delivery.",
      prodImage: "/prod3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Modal Control States
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    facility: "",
    quantity: "1",
    notes: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dynamicSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dynamicSlides.length]);

  const solutions = [
    {
      title: "Medical & Diagnostic Devices",
      description: "Procurement and supply of certified digital diagnostic frameworks, imaging equipment, and advanced hospital machinery.",
      imageSrc: "/prod1.jpg",
    },
    {
      title: "Surgical Instruments",
      description: "Premium grade surgical tools, forceps, retractors, and critical operating consumables engineered for absolute precision.",
      imageSrc: "/prod2.jpg",
    },
    {
      title: "Pharmaceutical Distribution",
      description: "Safe, GDP-compliant delivery of both prescription and over-the-counter medical solutions across robust regional networks.",
      imageSrc: "/prod3.jpg",
    },
    {
      title: "Protective Infrastructure (PPE)",
      description: "Bulk distribution of fully compliant, certified personal protective gear, face protection, and frontline defense layers.",
      imageSrc: "/prod4.jpg",
    },
  ];

  const handleOpenQuoteModal = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsOpen(true);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "254722008649"; 
    const introduction = `Hello Vacciman Team, I would like to request a quote.`;
    const details = `*Category:* ${selectedProduct}\n*Name:* ${formData.name}\n*Facility:* ${formData.facility}\n*Estimated Quantity:* ${formData.quantity}\n*Additional Notes:* ${formData.notes}`;
    
    const encodedMessage = encodeURIComponent(`${introduction}\n\n${details}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div id="home" className="w-full pt-24 bg-white relative">
      
      {/* 1. Main Hero Stage Canvas */}
      <div className="mx-4 md:mx-6 rounded-[2.5rem] bg-vacciman-blue relative overflow-hidden text-white py-12 md:py-20 px-6 sm:px-8 md:px-16 min-h-[600px] flex items-center shadow-xl shadow-vacciman-blue/10">
        
        {/* Absolute Background Ambient Slider Core */}
        <div className="absolute inset-0 z-0">
          {dynamicSlides.map((slide, index) => (
            <div
              key={slide.bgImage}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              } transform`}
            >
              <Image
                src={slide.bgImage}
                alt="Vacciman Supply Network"
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-vacciman-blue via-vacciman-blue/95 to-vacciman-blue/80 lg:to-transparent lg:bg-gradient-to-tr" />
          <div className="absolute inset-0 bg-slate-950/40 lg:hidden" />
        </div>

        {/* Dynamic Glassmorphic Decorative Rings */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full border-[40px] border-white -translate-x-20 -translate-y-20" />
        </div>

        {/* Responsive Content Columns Wrapper */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              VACCIMAN LTD,<br />
              <span className="text-vacciman-green">MEDICAL EQUIPMENT SUPPLIERS</span> NAIROBI KENYA
            </h1>
            
            <p className="text-blue-100/90 text-sm sm:text-base md:text-lg max-w-xl font-medium leading-relaxed">
Headquartered in Nairobi, Kenya, Vacciman Company Limited is a trusted regional gateway for certified medical devices, surgical systems, and GDP-compliant pharmaceuticals. We bridge the gap between global innovations and local healthcare facilities with secure, precision cold-chain distribution across East Africa.            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link 
                href="/solutions" 
                className="px-8 py-3.5 bg-vacciman-green hover:bg-vacciman-greenLight text-vacciman-slate text-sm font-bold rounded-xl shadow-lg shadow-vacciman-green/20 transition-all transform hover:-translate-y-0.5"
              >
                View Products
              </Link>
              
              <div className="flex gap-2 sm:ml-4">
                {dynamicSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? "w-6 bg-vacciman-green" : "w-1.5 bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Product Card Column Block */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              
              {/* Image Frame Wrapper */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-white/5 relative overflow-hidden border border-white/5">
                {dynamicSlides.map((slide, index) => (
                  <div
                    key={slide.prodImage}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <Image
                      src={slide.prodImage}
                      alt={slide.prodTitle}
                      fill
                      sizes="(max-w-sm) 100vw, 350px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="absolute top-3 left-3 bg-vacciman-blue/80 backdrop-blur-md text-[10px] text-vacciman-green font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg border border-white/10">
                  On Offer
                </div>
              </div>

              {/* Dynamic Bottom Label Strip */}
              <div className="mt-4 px-1 min-h-[64px] flex items-center justify-between gap-4">
                <div className="relative w-full h-12 overflow-hidden">
                  {dynamicSlides.map((slide, index) => (
                    <div
                      key={slide.prodTitle}
                      className={`absolute inset-0 transition-all duration-500 flex flex-col justify-center ${
                        index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      <h4 className="text-sm font-bold tracking-tight text-white">{slide.prodTitle}</h4>
                      <p className="text-xs text-blue-200/80 truncate max-w-[240px]">{slide.prodDesc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenQuoteModal(dynamicSlides[currentSlide].prodTitle)}
                  className="bg-white/10 hover:bg-vacciman-green p-3 rounded-xl transition-all border border-white/10 hover:border-transparent group-hover:scale-105 text-white hover:text-vacciman-slate shrink-0"
                  aria-label="Request quote for active item"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 2. Brand New: Full-Cover 2-Column, 2-Row Elegant Product Card Grid */}
      <div id="solutions" className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden group"
            >
              
              {/* Card Image Cover (Full Width Top Half) */}
              <div className="w-full aspect-[16/10] bg-slate-50 relative overflow-hidden border-b border-slate-100">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-w-md) 100vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Visual Glass Overlay Tag on Image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] text-vacciman-blue font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-xl shadow-sm border border-slate-100">
                  Category {idx + 1}
                </div>
              </div>

              {/* Card Content (Lower Half) */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-vacciman-slate tracking-tight uppercase group-hover:text-vacciman-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA Element */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenQuoteModal(item.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-vacciman-blue text-white hover:bg-vacciman-green hover:text-vacciman-slate rounded-xl text-xs font-bold transition-all shadow-md shadow-vacciman-blue/10 hover:shadow-vacciman-green/10 transform active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Get Instant Quote
                  </button>
                  
                  {/* Elegant decorative link indicator */}
                  <span className="text-xs text-slate-400 font-medium group-hover:text-vacciman-blue group-hover:translate-x-1 transition-all duration-300 flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 3. Global Modal Integration Frame */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100">
            <div className="bg-vacciman-blue text-white px-6 py-5 flex items-center justify-between relative">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold tracking-widest text-vacciman-green uppercase">Instant Quote</span>
                <h4 className="text-base font-bold truncate pr-4">{selectedProduct}</h4>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/80">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Dr. John Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-vacciman-blue"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Facility / Institution *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Nairobi Referral Hospital"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-vacciman-blue"
                  value={formData.facility}
                  onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Est. Qty</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none text-center"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Specific Demands</label>
                  <input
                    type="text"
                    placeholder="e.g., Portable unit"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                Submit and Chat on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}