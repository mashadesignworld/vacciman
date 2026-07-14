"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, X, Send } from "lucide-react";

export default function Hero() {
  const backgroundImages = [
    "/hero1.jpg", 
    "/hero2.jpg", 
    "/hero3.jpg", 
  ];

  const [currentBg, setCurrentBg] = useState(0);
  
  // Modal State Management
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
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const solutions = [
    {
      title: "Medical & Diagnostic Devices",
      description: "Procurement and supply of certified digital diagnostic frameworks and advanced hospital machinery.",
      imageSrc: "/prod1.jpg",
    },
    {
      title: "Surgical Instruments",
      description: "Premium grade surgical tools and critical hospital consumables engineered for operating efficiency.",
      imageSrc: "/prod2.jpg",
    },
    {
      title: "Pharmaceutical Distribution",
      description: "Safe delivery of both prescription and over-the-counter medical solutions across regional networks.",
      imageSrc: "/prod3.jpg",
    },
    {
      title: "Protective Infrastructure (PPE)",
      description: "Bulk distribution of compliant certified personal protective gear for frontline defense layers.",
      imageSrc: "/prod4.jpg",
    },
  ];

  // Opens modal and dynamically presets the selected medical category
  const handleOpenQuoteModal = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsOpen(true);
  };

  // Pre-populates the WhatsApp API redirect link
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "254727206387"; // Primary Vacciman sales contact
    const introduction = `Hello Vacciman Team, I would like to request a quote.`;
    const details = `*Category:* ${selectedProduct}\n*Name:* ${formData.name}\n*Facility:* ${formData.facility}\n*Estimated Quantity:* ${formData.quantity}\n*Additional Notes:* ${formData.notes}`;
    
    const encodedMessage = encodeURIComponent(`${introduction}\n\n${details}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in a fresh window tab
    window.open(whatsappUrl, "_blank");
    setIsOpen(false); // Reset modal
  };

  return (
    <div id="home" className="w-full pt-28 bg-white relative">
      
      {/* 1. Brand Header Canvas Zone */}
      <div className="mx-4 md:mx-6 rounded-[2.5rem] bg-vacciman-blue relative overflow-hidden text-white py-20 px-8 md:px-16 min-h-[520px] flex items-center shadow-xl shadow-vacciman-blue/10">
        
        {/* Dynamic Image Background Layer Container */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((imgUrl, index) => (
            <div
              key={imgUrl}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentBg ? "opacity-100 scale-100" : "opacity-0 scale-105"
              } transform transition-transform duration-[5000ms]`}
            >
              <Image
                src={imgUrl}
                alt="Vacciman Operational Environment"
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-vacciman-blue via-vacciman-blue/90 to-vacciman-blue/70 mix-blend-multiply" />
        </div>

        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full border-[40px] border-white -translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-vacciman-green rounded-full blur-2xl" />
        </div>

        {/* Content Framework */}
        <div className="max-w-3xl relative z-10 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
            BUILDING A HEALTHIER WORLD,<br />
            <span className="text-vacciman-green">ONE COMPREHENSIVE MEDICAL SOLUTION</span> AT A TIME.
          </h1>
          
          <p className="text-blue-100 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Explore our world-class medical equipment networks and precision dark cold-chain distribution pipelines tailored for healthcare dominance.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link 
              href="#solutions" 
              className="inline-block px-8 py-3.5 bg-vacciman-green hover:bg-vacciman-greenLight text-vacciman-slate text-sm font-bold rounded-xl shadow-lg shadow-vacciman-green/20 transition-all transform hover:-translate-y-0.5"
            >
              Learn More
            </Link>
            
            <div className="flex gap-2 ml-4">
              {backgroundImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentBg(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentBg ? "w-6 bg-vacciman-green" : "w-1.5 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Four-Quadrant Solution Grid */}
      <div id="solutions" className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, idx) => {
            return (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px] group relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Text Description Block */}
                  <div className="space-y-2 max-w-[70%]">
                    <h3 className="text-lg font-bold text-vacciman-slate tracking-tight uppercase group-hover:text-vacciman-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Thumbnail Image Box */}
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 overflow-hidden flex items-center justify-center border border-slate-100 group-hover:border-vacciman-green/30 transition-all shrink-0 p-1 shadow-inner relative">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Micro CTA Container: Anchored beautifully on bottom row */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex justify-start">
                  <button
                    onClick={() => handleOpenQuoteModal(item.title)}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-slate-50 hover:bg-vacciman-green hover:text-vacciman-slate text-slate-600 hover:shadow-md rounded-xl text-xs font-bold transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Interactive WhatsApp Portal Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 transform scale-100 transition-transform">
            
            {/* Modal Header */}
            <div className="bg-vacciman-blue text-white px-6 py-5 flex items-center justify-between relative">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold tracking-widest text-vacciman-green uppercase">Instant Quote</span>
                <h4 className="text-base font-bold truncate pr-4">{selectedProduct}</h4>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Content */}
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
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-vacciman-blue text-center"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1.5">Specific Demands</label>
                  <input
                    type="text"
                    placeholder="e.g., Portable, 10L capacity"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-vacciman-blue"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/10 transition-all hover:-translate-y-0.5"
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