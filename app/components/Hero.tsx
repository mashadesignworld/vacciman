"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const backgroundImages = [
    "/hero1.jpg", 
    "/hero2.jpg", 
    "/hero3.jpg", 
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Swapped the 'icon' property out for raw public image asset paths
  const solutions = [
    {
      title: "Medical & Diagnostic Devices",
      description: "Procurement and supply of certified digital diagnostic frameworks and advanced hospital machinery.",
      imageSrc: "/prod1.jpg", // e.g., Patient Monitor / Ultrasound machine thumbnail
    },
    {
      title: "Surgical Instruments",
      description: "Premium grade surgical tools and critical hospital consumables engineered for operating efficiency.",
      imageSrc: "/prod2.jpg", // e.g., Surgical tray / forceps thumbnail
    },
    {
      title: "Pharmaceutical Distribution",
      description: "Safe delivery of both prescription and over-the-counter medical solutions across regional networks.",
      imageSrc: "/prod3.jpg", // e.g., Vaccine vial / medicine packaging thumbnail
    },
    {
      title: "Protective Infrastructure (PPE)",
      description: "Bulk distribution of compliant certified personal protective gear for frontline defense layers.",
      imageSrc: "/prod4.jpg", // e.g., Medical box of masks / nitrile gloves thumbnail
    },
  ];

  return (
    <div id="home" className="w-full pt-28 bg-white">
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

      {/* 2. Four-Quadrant Solution Grid (Unchanged Structure, Upgraded Visuals) */}
      <div id="solutions" className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, idx) => {
            return (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between gap-6 group"
              >
                {/* Left Side Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-vacciman-slate tracking-tight uppercase group-hover:text-vacciman-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>

                {/* Right Side Upgraded Equipment Thumbnail Box */}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}