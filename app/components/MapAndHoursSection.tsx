"use client";

import { MapPin, Clock, ShieldCheck } from "lucide-react";

export default function MapAndHoursSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Head Office Info card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex gap-4">
  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
    <MapPin className="w-5 h-5 text-slate-500" />
  </div>
  <div>
    <h4 className="font-bold text-slate-800 text-sm">Head Office Location</h4>
    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
      Ntashart Plaza, Elgeyo Marakwet Road, off Ngong Road, Nairobi, Kenya.
    </p>
  </div>
</div>
        {/* Operating Hours card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex gap-4">
          <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-slate-500" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Operational Schedule</h4>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
              Monday to Friday: 8:00 AM – 5:00 PM<br />
              Saturday Support: Emergency dispatch only.
            </p>
          </div>
        </div>

        {/* Regional Network card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex gap-4">
          <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-slate-500" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Regional Footprint</h4>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
              Supplying critical equipment across Kenya, Tanzania, Zambia, and South Sudan.
            </p>
          </div>
        </div>

      </div>

      {/* Embedded Map Frame for Local Realism */}
      <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-96 relative bg-slate-200">
        <iframe 
          title="Vacciman Head Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.892404068306!2d37.0016024!3d-1.2343212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1704ea117bd9%3A0x6b643b17be1f09c!2sViken%20Thirty%20Industrial%20Park!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>
    </section>
  );
}