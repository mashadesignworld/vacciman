"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  Stethoscope, 
  HeartPulse, 
  Layers, 
  Search, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  X,
  PhoneCall
} from "lucide-react";

// Structured Product Dataset with Specifications
interface Product {
  id: string;
  name: string;
  category: string;
  model: string;
  description: string;
  image: string;
  specs: string[];
  certification: string;
}

const PRODUCTS: Product[] = [
  {
    id: "hosp-bed",
    name: "3-Function Manual Hospital Bed",
    category: "Hospital Furniture",
    model: "VS-MK-38K",
    description: "Premium manual clinical bed with backrest adjustment, legrest elevation, and whole-bed height adjustment.",
    image: "/hospitalbed.png",
    specs: ["Backrest adjustment: 0° – 75°", "Trendelenburg adjustment", "Collapsible side rails & central braking"],
    certification: "KeBS Compliant"
  },
  {
    id: "ox-con",
    name: "Medical Oxygen Concentrator",
    category: "Home Care & Ward",
    model: "VS-AC-10N",
    description: "High-capacity continuous flow medical oxygen concentrator designed for dependable respiratory support.",
    image: "/oxygen.png",
    specs: ["10 Liters per minute continuous output", "High-purity oxygen concentration level", "Quiet operation with real-time alarms"],
    certification: "ISO 13485 Certified"
  },
  {
    id: "ecg-mac",
    name: "12-Channel ECG Machine",
    category: "Diagnostic Devices",
    model: "VS-ECG-C12B",
    description: "Digital multi-channel electrocardiograph featuring an easy-to-read color display and built-in thermal printing.",
    image: "/ecg.png",
    specs: ["12-channel simultaneous acquisition", "Large high-resolution color screen", "Automated analysis and interpretation"],
    certification: "CE Medical Certified"
  },
  {
    id: "pat-mon",
    name: "Multi-Parameter Patient Monitor",
    category: "Diagnostic Devices",
    model: "AM-9000E",
    description: "Standard clinical vital signs monitor for measuring heart rate, SpO2, blood pressure, and temperature.",
    image: "/monitor.png",
    specs: ["Tracks ECG, SpO2, NIBP, Respiration, Temp", "Clear 12.1-inch color display", "Audible and visual limits alarms"],
    certification: "CE Medical Certified"
  },
  {
    id: "wheel-air",
    name: "Aluminum Wheelchair",
    category: "Mobility & Home Care",
    model: "VS-9560",
    description: "Durable, foldable medical wheelchair built with heavy-duty comfort fabric and reliable safety brakes.",
    image: "/wheelchair.png",
    specs: ["Foldable lightweight aluminum frame", "Comfortable padded armrests", "Safe rear-wheel lock-up system"],
    certification: "KeBS Compliant"
  }
];

const CATEGORIES = [
  { name: "All Solutions", icon: Layers },
  { name: "Hospital Furniture", icon: Layers },
  { name: "Diagnostic Devices", icon: HeartPulse },
  { name: "Home Care & Ward", icon: Activity },
  { name: "Mobility & Home Care", icon: Stethoscope }
];

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState("All Solutions");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  // Filter logic
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "All Solutions" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRequestQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      setSelectedProduct(null);
    }, 2500);
  };

  return (
    <section id="solutions" className="min-h-screen bg-slate-50/50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Elegant Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-vacciman-green font-bold tracking-wider text-xs uppercase px-3 py-1 bg-vacciman-green/10 rounded-full">
            Our Portfolio
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Common Clinical & Medical Supplies
          </h1>
          <p className="text-slate-600 mt-3 text-lg">
            Sourcing standard, certified medical furniture, diagnostics, and respiratory solutions for healthcare facilities and home-care settings across Kenya.
          </p>
        </div>

        {/* Search and Category Filters bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12">
          
          {/* Interactive Category Selector (Classy Pill Layout) */}
          <div className="flex gap-2 overflow-x-auto pb-3 lg:pb-0 w-full lg:w-auto scrollbar-none">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive 
                      ? "bg-slate-900 text-white shadow-md shadow-slate-950/15" 
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-950 border border-slate-200"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products, models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm outline-none focus:border-vacciman-blue focus:ring-1 focus:ring-vacciman-blue transition-all"
            />
          </div>
        </div>

        {/* Dynamic Products Grid with Classy Image Cards */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:border-slate-200/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Area */}
                <div>
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] tracking-wider font-extrabold text-white bg-slate-950/80 px-3 py-1.5 rounded-full uppercase backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 pb-2">
                    <span className="text-xs font-mono font-semibold text-vacciman-green bg-vacciman-green/5 px-2 py-1 rounded">
                      Model: {product.model}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-vacciman-blue transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Highlights Spec Section */}
                    <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                      {product.specs.slice(0, 3).map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-vacciman-green shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive Card Action Button Footer */}
                <div className="p-6 pt-4 flex items-center justify-between border-t border-slate-50 mt-auto bg-slate-50/50">
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-vacciman-green animate-pulse" />
                    {product.certification}
                  </span>
                  
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1 text-xs font-bold text-vacciman-blue hover:text-vacciman-green transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-700">No matching medical supplies found</h3>
            <p className="text-slate-400 text-sm mt-1">Try resetting your filter category or searching for alternate terms.</p>
          </div>
        )}

        {/* Modal Sheet for Interactive Quote Generation */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-end">
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              />

              {/* Slide-out Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="relative w-full max-w-md h-full bg-white shadow-2xl p-8 overflow-y-auto flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2 text-slate-500">
                      <FileText className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Product RFQ Form</span>
                    </div>
                    <button 
                      onClick={() => setSelectedProduct(null)}
                      className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-vacciman-blue font-bold px-2 py-1 bg-vacciman-blue/5 rounded">
                      {selectedProduct.category}
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 mt-3">{selectedProduct.name}</h2>
                    <p className="text-slate-500 text-xs mt-1">Model Variant: {selectedProduct.model}</p>
                  </div>

                  {/* Minimalistic Request Form */}
                  <form onSubmit={handleRequestQuote} className="space-y-4 mt-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Hospital/Institution Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g., Nairobi Hospital" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-vacciman-blue outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Contact Email</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="purchasing@yourhospital.co.ke" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-vacciman-blue outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Primary Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="e.g., 0712 345678" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-vacciman-blue outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Estimated Quantity Needed</label>
                      <input 
                        type="number" 
                        defaultValue="1" 
                        min="1" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-vacciman-blue outline-none transition-colors"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-lg mt-8 hover:bg-slate-850 transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Submit Quote Request
                    </button>
                  </form>
                </div>

                {/* Immediate Success State notification inside sheet */}
                <AnimatePresence>
                  {quoteSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="w-14 h-14 bg-vacciman-green/10 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-vacciman-green" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-950">RFQ Submitted Successfully</h3>
                      <p className="text-slate-500 text-sm mt-2 max-w-[280px]">
                        Our medical solutions desk will compile and send the formal quotation to your inbox within the hour.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}