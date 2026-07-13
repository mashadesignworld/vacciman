"use client";

import React from "react";
import { Layers, Activity, Truck, HeartHandshake, ShieldCheck, DollarSign } from "lucide-react";

export default function Capabilities() {
  const capacities = [
    {
      title: "Bulk Sourcing & Delivery",
      description: "Proven capacity to procure and deliver medical supplies in high volume within strict, required institutional timelines.",
      icon: Layers,
    },
    {
      title: "Reliable Supplier Networks",
      description: "Direct partnerships with certified global manufacturers to maintain consistent stock availability for the regional market.",
      icon: Activity,
    },
    {
      title: "Urgent & Emergency Response",
      description: "A fast-tracked logistical protocol specifically equipped to handle critical, real-time emergency medical supply requests.",
      icon: Truck,
    },
    {
      title: "Comprehensive Support",
      description: "Dedicated after-sales support and clinical product guidance to ensure institutions maximize equipment efficiency.",
      icon: HeartHandshake,
    },
  ];

  const advantages = [
    { title: "Responsive Supply Chain", icon: ShieldCheck },
    { title: "Competitive & Transparent Pricing", icon: DollarSign },
    { title: "Strict International Compliance", icon: ShieldCheck },
    { title: "Experienced Management Team", icon: HeartHandshake },
  ];

  return (
    <section id="solutions" className="w-full py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold text-vacciman-blue uppercase tracking-widest block">
              Capacity & Execution
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-vacciman-slate tracking-tight">
              Institutional Strength. Operational Reliability.
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
            Headquartered in Nairobi, Kenya, Vacciman Company Ltd leverages robust global logistics pipelines to ensure seamless healthcare supply fulfillment across East Africa.
          </p>
        </div>

        {/* 4-Column Capacity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capacities.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-vacciman-blue group-hover:bg-vacciman-blue group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-bold text-vacciman-slate tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitive Advantage Bar */}
        <div className="bg-vacciman-blue rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl shadow-vacciman-blue/10">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white rounded-full blur-2xl" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left space-y-1">
              <h4 className="text-lg font-bold tracking-tight">The Vacciman Advantage</h4>
              <p className="text-blue-200 text-xs">Why healthcare institutions trust us as their baseline supply partner.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              {advantages.map((adv, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center text-center border border-white/10"
                >
                  <span className="text-[11px] font-bold tracking-wide leading-tight">
                    {adv.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}