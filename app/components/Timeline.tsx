"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, ShieldAlert, Truck, Building2 } from "lucide-react";

interface TimelineStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Timeline() {
  const steps: TimelineStep[] = [
    {
      title: "Global Procurement & Verification",
      subtitle: "Stage 01",
      description: "Direct validation of regulatory parameters and sourcing verification with authorized international medical device and vaccine manufacturer networks.",
      icon: ClipboardCheck,
    },
    {
      title: "Pristine Cold Chain Reception",
      subtitle: "Stage 02",
      description: "Immediate transfer to specialized climate-controlled containment fields matching GDP temperature profiles strictly.",
      icon: ShieldAlert,
    },
    {
      title: "Real-Time Monitored Logistics",
      subtitle: "Stage 03",
      description: "Cross-border transit handled via telemetry-mapped distribution units tracking interior environment status continuously.",
      icon: Truck,
    },
    {
      title: "Last-Mile Health Center Integration",
      subtitle: "Stage 04",
      description: "Safe offloading and deployment directly to partner hospital hubs, clinics, and critical health storage nodes.",
      icon: Building2,
    },
  ];

  return (
    <section id="market-reach" className="py-24 bg-vacciman-bgLight relative overflow-hidden">
      {/* Background Accent Spline */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-vacciman-green/5 rounded-full filter blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-vacciman-blue tracking-widest uppercase block mb-3">Integrity Pipeline</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Secure Distribution Flow
          </h2>
          <p className="text-slate-600 mt-4">
            How Vacciman maintains complete quality dominance over complex cross-border medical distribution lines.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Vertical Track Spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Spacer Point */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-vacciman-blue shadow transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-vacciman-green" />
                  </div>

                  {/* Content Block */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm inline-block w-full hover:shadow-md transition-shadow">
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : ""}`}>
                        <div className="w-10 h-10 rounded-xl bg-vacciman-bgLight flex items-center justify-center text-vacciman-blue">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-black text-vacciman-green uppercase tracking-wider">{step.subtitle}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Dummy placeholder panel to balance grid axis on desktop view */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}