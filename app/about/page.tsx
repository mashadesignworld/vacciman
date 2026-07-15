"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Activity, 
  Award, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  HeartHandshake, 
  Globe, 
  Layers
} from "lucide-react";

export default function AboutPage() {
  
  const coreValues = [
    {
      title: "Integrity & Transparency",
      description: "We build lasting institutional trust through absolute honesty and clear operations in every transaction.",
      icon: ShieldCheck,
    },
    {
      title: "Quality & Safety Standards",
      description: "Strict adherence to national and international compliance levels to guarantee absolute patient protection.",
      icon: Award,
    },
    {
      title: "Customer Satisfaction",
      description: "We are committed to medical service excellence, acting as true operational partners to healthcare clinics.",
      icon: HeartHandshake,
    },
    {
      title: "Efficiency & Reliability",
      description: "Streamlined logistics pipelines designed to deliver vital healthcare infrastructure precisely when it is needed.",
      icon: Clock,
    },
    {
      title: "Continuous Innovation",
      description: "Constantly upgrading our supply-chain intelligence to simplify complex medical procurement challenges.",
      icon: TrendingUp,
    },
  ];

  const targetClients = [
    "Public & Private Hospitals",
    "Specialized Clinics & Health Centers",
    "Pharmacies & Regional Distributors",
    "Government Institutions & Agencies",
    "Non-Governmental Organizations (NGOs)"
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-28">
      
      {/* 1. Classy Hero Header */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="bg-vacciman-blue rounded-[2.5rem] relative overflow-hidden text-white py-16 md:py-24 px-8 md:px-16 shadow-xl shadow-vacciman-blue/5">
          {/* Background Ambient Polish */}
          <div className="absolute inset-0 bg-gradient-to-br from-vacciman-blue via-slate-900 to-vacciman-blue/90" />
          <div className="absolute -right-10 -bottom-10 w-96 h-96 rounded-full border-[30px] border-white/5 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-vacciman-green uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
              Established June 2023 • Nairobi, Kenya
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Redefining Healthcare <br />
              <span className="text-vacciman-green">Supply & Logistics Integrity</span> in East Africa.
            </h1>
            <p className="text-blue-100/80 text-base md:text-lg max-w-xl font-medium pt-2 leading-relaxed">
              Vacciman Company Limited bridges the gap between global medical innovations and regional healthcare delivery with certified, high-quality solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Brand Overview & Mission/Vision Split Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Detailed Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-vacciman-green uppercase tracking-wider">Company Profile</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-vacciman-slate tracking-tight">
                WHO WE ARE
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Vacciman Company Ltd is a duly registered and incorporated enterprise headquartered in Nairobi, Kenya. We specialize in the end-to-end procurement, supply, and distribution of state-of-the-art medical devices, critical surgical equipment, and complex pharmaceutical products.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Driven by our commitment to delivering high-quality, safe, and fully compliant healthcare components, we strictly adhere to both national and global clinical regulations to protect and improve patient experiences.
            </p>
          </div>

          {/* Right Column: Mission & Vision Glassmorphic Box */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {/* Vision Card */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden group hover:border-vacciman-blue/20 transition-all duration-300">
              <div className="space-y-3">
                <div className="inline-flex p-3 bg-vacciman-blue/5 rounded-2xl text-vacciman-blue">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-vacciman-slate uppercase tracking-wider">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be the leading and most trusted partner-supplier of life-saving medical systems, advanced diagnostic layouts, and pharma logistics in Kenya and the greater East African region.
                </p>
                <div className="pt-2 flex gap-2">
                  <span className="text-[10px] font-bold text-vacciman-blue uppercase bg-white px-2.5 py-1 rounded-md border border-slate-200">Reliable</span>
                  <span className="text-[10px] font-bold text-vacciman-blue uppercase bg-white px-2.5 py-1 rounded-md border border-slate-200">High Quality</span>
                  <span className="text-[10px] font-bold text-vacciman-blue uppercase bg-white px-2.5 py-1 rounded-md border border-slate-200">Effective Delivery</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden group hover:border-vacciman-blue/20 transition-all duration-300">
              <div className="space-y-3">
                <div className="inline-flex p-3 bg-vacciman-blue/5 rounded-2xl text-vacciman-blue">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-vacciman-slate uppercase tracking-wider">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To continuously provide reliable, top-tier medical and pharmaceutical solutions that empower modern clinicians, elevate treatment standards, and secure community safety.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Elegantly Structured History Timeline */}
      <section className="bg-slate-50 py-20 px-6 md:px-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-12 space-y-2">
            <span className="text-xs font-extrabold text-vacciman-green uppercase tracking-wider">Our Journey</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-vacciman-slate">COMPANY MILESTONES & EXPANSION</h2>
            <p className="text-slate-500 text-sm">How we built robust global pathways to solve local infrastructure bottlenecks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="text-2xl font-black text-vacciman-blue">June 2023</div>
              <h4 className="text-lg font-bold text-slate-800">Founding & Strategic Partnerships</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vacciman Company Ltd was established with a clear mandate: to secure clinical pipelines across Nairobi. We focused on laying structural foundations and creating direct partnership agreements with global manufacturers to secure dynamic, certified medical and drug lines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="text-2xl font-black text-vacciman-blue">Expansion Phase</div>
              <h4 className="text-lg font-bold text-slate-800">Becoming a Comprehensive One-Stop Supplier</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                As medical needs shifted, we expanded our physical assets, logistics lines, and diagnostic solutions. Moving beyond pure distribution, we integrated highly customized surgical tools and diagnostics to supply facilities ranging from local private clinics to national referral systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities & Target Client Segment */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Capabilities Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-vacciman-green uppercase tracking-wider">Strategic Performance</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-vacciman-slate">CAPACITY & CAPABILITIES</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-vacciman-slate uppercase tracking-wider">Bulk Sourcing & Logistics</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Highly coordinated volume orders handled and delivered precisely within critical institution lead times.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-vacciman-slate uppercase tracking-wider">Reliable Supplier Networks</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Secured supplier commitments guarantee constant item stock availability, insulating you from market deficits.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-vacciman-slate uppercase tracking-wider">Emergency Supply Care</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Rapid operational pathways allow us to process critical supply requests during emergency healthcare environments.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-vacciman-slate uppercase tracking-wider">After-Sales Engineering</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Dedicated expert support, specialized handling advice, and comprehensive hardware operation guidance.</p>
              </div>
            </div>
          </div>

          {/* Target Audiences Block */}
          <div className="lg:col-span-5 bg-vacciman-blue rounded-[2rem] text-white p-8 md:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full border-8 border-white/5 -translate-y-8 translate-x-8 pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <h3 className="text-xl font-extrabold uppercase tracking-wide text-vacciman-green">WHO WE SERVE</h3>
              <p className="text-sm text-blue-100 leading-relaxed">Our clinical supplies are structured, packaged, and optimized to meet the high standards of:</p>
              
              <ul className="space-y-3.5">
                {targetClients.map((client, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-vacciman-green shrink-0" />
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Values & Compliance Standards Grid */}
      <section className="bg-slate-50 py-24 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Values Header */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-vacciman-green uppercase tracking-wider">Our Ethics</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-vacciman-slate">OUR CORE VALUES</h2>
            <p className="text-slate-500 text-sm">The pillars that define our daily choices and customer relations.</p>
          </div>

          {/* Values Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="inline-flex p-3 bg-vacciman-blue/5 text-vacciman-blue rounded-2xl">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-vacciman-slate uppercase tracking-wider">{value.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>

          {/* Compliance Overlay Bar */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="space-y-2 text-center md:text-left max-w-lg">
              <span className="text-xs font-bold tracking-widest text-vacciman-green uppercase bg-slate-50 px-3 py-1 rounded-md border border-slate-100">Quality Assurance</span>
              <h3 className="text-lg font-bold text-vacciman-slate uppercase tracking-wider">COMPLIANCE & STATUTORY STANDARDS</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Vacciman Ltd operates in full alignment with the regulatory bodies of Kenya. We adhere to statutory laws, maintain registrations, source solely from certified global production hubs, and observe rigorous quality assurance routines.
              </p>
            </div>
            <Link 
              href="#home" 
              className="px-8 py-3.5 bg-vacciman-blue hover:bg-vacciman-green text-white hover:text-vacciman-slate text-sm font-bold rounded-xl transition-all shadow-md shrink-0 whitespace-nowrap"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}