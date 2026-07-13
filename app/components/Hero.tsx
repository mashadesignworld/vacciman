"use client";

import React from "react";
import Link from "next/link";
import { Activity, ShieldCheck, Stethoscope, HeartPulse } from "lucide-react";

export default function Hero() {
  // Change your array inside components/Hero.tsx to this:
const solutions = [
  {
    title: "Medical & Diagnostic Devices",
    description: "Procurement and supply of certified digital diagnostic frameworks and advanced hospital machinery.",
    icon: Activity,
  },
  {
    title: "Surgical Instruments",
    description: "Premium grade surgical tools and critical hospital consumables engineered for operating efficiency.",
    icon: ShieldCheck,
  },
  {
    title: "Pharmaceutical Distribution",
    description: "Safe delivery of both prescription and over-the-counter medical solutions across regional networks.",
    icon: Stethoscope,
  },
  {
    title: "Protective Infrastructure (PPE)",
    description: "Bulk distribution of compliant certified personal protective gear for frontline defense layers.",
    icon: HeartPulse,
  },
];

  return (
    <div id="home" className="w-full pt-28 bg-white">
      {/* 1. Brand Header Canvas Zone */}
      <div className="mx-4 md:mx-6 rounded-[2.5rem] bg-vacciman-blue relative overflow-hidden text-white py-20 px-8 md:px-16 min-h-[480px] flex items-center shadow-xl shadow-vacciman-blue/10">
        
        {/* Dynamic Abstract Geometric Overlays (Matching Image Patterns) */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full border-[40px] border-white -translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-vacciman-green rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-10 w-96 h-[2px] bg-white transform rotate-45" />
          <div className="absolute top-1/3 right-12 w-96 h-[2px] bg-white transform rotate-45 translate-y-4" />
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

          <div className="pt-2">
            <Link 
              href="#solutions" 
              className="inline-block px-8 py-3.5 bg-vacciman-green hover:bg-vacciman-greenLight text-vacciman-slate text-sm font-bold rounded-xl shadow-lg shadow-vacciman-green/20 transition-all transform hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Four-Quadrant Solution Grid (Nesting over white viewport section) */}
      <div id="solutions" className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between gap-6 group"
              >
                {/* Left Side text detailing solutions block */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-vacciman-slate tracking-tight uppercase group-hover:text-vacciman-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>

                {/* Right Side Adaptive Branding Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 text-vacciman-green group-hover:bg-vacciman-green/10 transition-colors shrink-0">
                  <IconComponent className="w-8 h-8 stroke-[1.75]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}