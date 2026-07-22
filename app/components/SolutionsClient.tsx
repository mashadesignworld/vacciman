"use client";

import { useState  } from "react";
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
  PhoneCall,
  Scissors,
  Syringe,
  MessageSquare
} from "lucide-react";

// Imported strict-typed schema helper function
import { generateMedicalProductsSchema } from "@/lib/schema";
import { PRODUCTS } from "../../data/products";
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




const CATEGORIES = [
  { name: "All Solutions", icon: Layers },
  { name: "Operating Theatre & ICU", icon: HeartPulse },
  { name: "Diagnostic Devices", icon: Activity },
  { name: "Ward & Treatment Equipment", icon: Syringe },
  { name: "Surgical Instruments", icon: Scissors },
  { name: "Hospital Furniture", icon: Layers },
  { name: "Home Care & Ward", icon: Stethoscope },
  { name: "Sterilization & Laboratory", icon: FileText }
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

  const [isSubmitting, setIsSubmitting] = useState(false);

const handleRequestQuote = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const payload = {
    productName: selectedProduct?.name,
    productModel: selectedProduct?.model,
    productCategory: selectedProduct?.category,
    hospital: formData.get('hospital'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    quantity: formData.get('quantity'),
  };

  try {
    const res = await fetch('/api/rfq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setQuoteSuccess(true);
      setTimeout(() => {
        setQuoteSuccess(false);
        setSelectedProduct(null);
      }, 3500);
    } else {
      alert('Something went wrong submitting your request. Please try WhatsApp instead.');
    }
  } catch (err) {
    console.error(err);
    alert('Network error. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
  e.preventDefault();
  if (!selectedProduct) return;

  // Change to your official business phone number (international format without + or spaces)
  const phoneNumber = "254727206387"; 

  const textMessage = `Hello Vacciman Team,\n\nI would like to inquire about the following equipment:\n` +
    `• Product: ${selectedProduct.name}\n` +
    `• Model: ${selectedProduct.model}\n` +
    `• Category: ${selectedProduct.category}\n\n` +
    `Please share pricing and availability details.`;

  const encodedMessage = encodeURIComponent(textMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

 // Compute the JSON-LD schema
  const medicalProductsSchemaJson = generateMedicalProductsSchema(PRODUCTS);

  
  return (
    <main>
    
      
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProductsSchemaJson) }}
      />
      
      
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
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-slate-500">
              <FileText className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Product Request</span>
            </div>
            <button 
              onClick={() => setSelectedProduct(null)}
              className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Product Details Header */}
          <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-vacciman-blue font-bold px-2 py-0.5 bg-vacciman-blue/10 rounded">
              {selectedProduct.category}
            </span>
            <h2 className="text-xl font-black text-slate-900 mt-2">{selectedProduct.name}</h2>
            <p className="text-slate-500 text-xs mt-1 font-mono">Model: {selectedProduct.model}</p>
          </div>

          {/* Instant WhatsApp Inquiry Option */}
          <div className="mb-6">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2.5 group"
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Inquire via WhatsApp Instant</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-1.5">
              Connect directly with our sales desk on WhatsApp
            </p>
          </div>

          {/* Visual Divider */}
          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Or Request Formal RFQ
            </span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Email / Institutional Request Form */}
          <form onSubmit={handleRequestQuote} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Hospital / Institution
              </label>
              <input 
                required 
                name="hospital"
                type="text" 
                placeholder="e.g., Nairobi Hospital" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-vacciman-blue outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Contact Email
              </label>
              <input 
                required 
                name="email"
                type="email" 
                placeholder="purchasing@yourhospital.co.ke" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-vacciman-blue outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Phone Number
              </label>
              <input 
                required 
                name="phone"
                type="tel" 
                placeholder="e.g., 0712 345678" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-vacciman-blue outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Estimated Quantity
              </label>
              <input 
                name="quantity"
                type="number" 
                defaultValue="1" 
                min="1" 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-vacciman-blue outline-none transition-colors"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-lg mt-6 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              {isSubmitting ? 'Sending Request...' : 'Submit Written RFQ'}
              Submit Written RFQ
            </button>
          </form>
        </div>

        {/* Success State Overlay */}
        <AnimatePresence>
          {quoteSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">RFQ Submitted Successfully</h3>
              <p className="text-slate-500 text-sm mt-2 max-w-[280px]">
                Our medical solutions desk will compile and send the formal quotation to your inbox shortly.
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
    </main>
  );
}