"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, ChevronDown, MessageSquare } from "lucide-react";

export default function ContactFormSection() {
  const [activeTab, setActiveTab] = useState<string>("general");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is your typical turnaround time for hospital quotes?",
      a: "Our procurement experts typically compile detailed quotes with certified technical spec sheets within 24 to 48 hours depending on scope."
    },
    {
      q: "Do you supply medical equipment under SLA maintenance?",
      a: "Yes. We offer customizable Preventive Maintenance contracts (PPM) quarterly or biannually, keeping all machines calibrated and warranted."
    },
    {
      q: "Are all pharmaceuticals and devices properly registered?",
      a: "100%. All of our supply catalogs strictly adhere to the Pharmacy and Poisons Board regulations and PPRA standards in Kenya."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Hand: Live Support & Interactive FAQs (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageSquare className="text-vacciman-green w-5 h-5" />
              Direct Communication
            </h2>
            
            <div className="space-y-6">
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
      <Phone className="w-5 h-5 text-vacciman-green" />
    </div>
    <div>
      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Call Our Office</p>
      <p className="text-slate-800 font-bold mt-1">+254 727 206 387</p>
      <p className="text-xs text-slate-500 mt-0.5">Mon - Fri: 8:00 AM - 5:00 PM</p>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
      <Mail className="w-5 h-5 text-vacciman-blue" />
    </div>
    <div>
      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Sourcing Desk</p>
      <p className="text-slate-800 font-bold mt-1">vacciman@gmail.com</p>
      <p className="text-xs text-slate-500 mt-0.5">Responds within 24 business hours</p>
    </div>
  </div>
</div>
          </div>

          {/* Dynamic Accordion FAQs */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Answers</h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-100 pb-3 last:border-none last:pb-0">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left py-2 text-slate-700 hover:text-vacciman-green font-medium text-sm transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-slate-500 leading-relaxed mt-2 pt-1 border-t border-slate-50">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Hand: The Catchy Form (7 Columns) */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
            
            {/* Sourcing Category Tabs */}
            <div className="flex border-b border-slate-100 pb-4 mb-8 overflow-x-auto gap-2 scrollbar-none">
              {[
                { id: "general", label: "General Sourcing" },
                { id: "technical", label: "Equipments & SLAs" },
                { id: "partnership", label: "Pharma Distribution" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeTab === tab.id 
                      ? "bg-vacciman-green/10 text-vacciman-green border border-vacciman-green/30" 
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Dr. Jane Kamau"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vacciman-green focus:bg-white transition-all text-sm text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Facility / Company Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. St. Mary Hospital"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vacciman-green focus:bg-white transition-all text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Official Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. procurement@stmary.org"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vacciman-green focus:bg-white transition-all text-sm text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. +254 700 000000"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vacciman-green focus:bg-white transition-all text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How can our procurement desk assist you?</label>
                  <textarea 
                    rows={5}
                    required
                    placeholder={
                      activeTab === "technical" 
                      ? "List any medical machines requiring calibration, repair, or planned preventive maintenance (PPM)..."
                      : activeTab === "partnership"
                      ? "Describe your distribution or pharmaceutical sourcing needs..."
                      : "Briefly outline your medical supply list or general questions..."
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vacciman-green focus:bg-white transition-all text-sm text-slate-800 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-vacciman-green hover:bg-vacciman-greenLight text-white font-bold rounded-xl shadow-lg shadow-vacciman-green/10 transition-all transform hover:-translate-y-0.5 text-sm"
                >
                  Submit Secure Inquiry
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-50 text-vacciman-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Logged Securely!</h3>
                <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
                  Thank you for reaching out to Vacciman. One of our regional medical specialists will contact you shortly with catalog materials.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 px-6 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}