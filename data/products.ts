// data/products.ts
export interface MedicalProduct {
  id: string;
  name: string;
  category: string;
  model: string;
  description: string;
  image: string;
  specs: string[];
  certification: string;
}

export const PRODUCTS: MedicalProduct[] = [
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
  },
  {
    id: "anes-mac",
    name: "Advanced Anesthesia Machine",
    category: "Operating Theatre & ICU",
    model: "VS-AN-500XP",
    description: "High-precision anesthesia workstation integrated with advanced ventilation modes and accurate gas delivery systems.",
    image: "/anesthesia.jpg",
    specs: ["Integrated multi-mode ventilator", "Precise pneumatic electronic flowmeters", "Adult, pediatric, and neonatal compatibility"],
    certification: "CE Medical Certified"
  },
  {
    id: "vent-mac",
    name: "ICU Ventilator Machine",
    category: "Operating Theatre & ICU",
    model: "VS-VENT-800",
    description: "Critical care medical ventilator providing invasive and non-invasive respiratory support with comprehensive monitoring.",
    image: "/ventilator.jpg",
    specs: ["15-inch color touchscreen interface", "Advanced lung protective ventilation strategies", "Intelligent parameter tracking & loops"],
    certification: "ISO 13485 Certified"
  },
  {
    id: "ot-table",
    name: "Universal Operating Theatre Table",
    category: "Operating Theatre & ICU",
    model: "VS-OT-300E",
    description: "Electro-hydraulic surgical table designed to handle diverse surgical positions with stability and multi-angle articulation.",
    image: "/ot-table.jpg",
    specs: ["Heavy-duty load capacity with stable base", "Radiolucent tabletop for C-arm compatibility", "Ergonomic multi-directional adjustment control"],
    certification: "KeBS Compliant"
  },
  {
    id: "crash-cart",
    name: "Emergency Crash Cart",
    category: "Hospital Furniture",
    model: "VS-CC-75",
    description: "Premium ABS mobile emergency trolley equipped with dedicated drawers, IV pole, and defibrillator shelf.",
    image: "/crashcart.jpg",
    specs: ["Secure centralized locking system", "Defibrillator shelf, oxygen tank holder & CPR board", "Smooth-rolling anti-static casters with brakes"],
    certification: "KeBS Compliant"
  },
  {
    id: "defib",
    name: "Biphasic Defibrillator Monitor",
    category: "Operating Theatre & ICU",
    model: "VS-DF-400B",
    description: "Professional emergency biphasic defibrillator with manual and AED modes, pacing, and integrated monitoring.",
    image: "/defibrillator.jpg",
    specs: ["Advanced biphasic current technology", "Rapid charging loop for critical interventions", "High-contrast thermal printer built-in"],
    certification: "CE Medical Certified"
  },
  {
    id: "ot-light",
    name: "Portable LED Operating Light",
    category: "Operating Theatre & ICU",
    model: "VS-LED-12P",
    description: "Mobile surgical light with battery backup, delivering cool shadowless illumination for minor and major procedures.",
    image: "/ot-light.jpg",
    specs: ["High-efficiency shadowless LED technology", "Adjustable light intensity and spot focus", "Robust mobile stand with durable battery backup"],
    certification: "CE Medical Certified"
  },
  {
    id: "surg-sets",
    name: "General Surgical Instrument Set",
    category: "Surgical Instruments",
    model: "VS-SS-GEN",
    description: "Premium grade stainless steel surgical sets containing instruments forged for precision, durability, and standard theatre use.",
    image: "/surgicalsets.jpg",
    specs: ["High-grade medical autoclave-safe stainless steel", "Comprehensive kit for general or specific surgeries", "Ergonomic layout inside heavy-duty sterilization box"],
    certification: "ISO 9001 Certified"
  },
  {
    id: "inf-pump",
    name: "Dual-Channel Infusion & Syringe Pump",
    category: "Ward & Treatment Equipment",
    model: "VS-SP-20X",
    description: "Intelligent medical volumetric infusion and micro-syringe pump setup delivering micro-dose accuracy for critical medication.",
    image: "/pumps.jpg",
    specs: ["Ultra-precise fluid and drug delivery rates", "Compatible with all major standard IV/Syringe brands", "Comprehensive anti-bolus and occlusion safety system"],
    certification: "CE Medical Certified"
  },
  {
    id: "diathermy",
    name: "Electrosurgical Diathermy Machine",
    category: "Operating Theatre & ICU",
    model: "VS-DI-400W",
    description: "High-frequency electrosurgical unit featuring monopole and bipole outputs for precise tissue cutting and coagulation.",
    image: "/diathermy.jpg",
    specs: ["Monopolar cutting/coagulation & Bipolar modes", "Intelligent feedback system to prevent skin burns", "Adjustable digital power panel for surgeon control"],
    certification: "CE Medical Certified"
  },
  {
    id: "theatre-foot",
    name: "Anti-Static Theatre Footwear",
    category: "Hospital Furniture",
    model: "VS-TF-MED",
    description: "Autoclavable, comfortable anti-static surgical clogs designed specifically for safety and hygiene inside sterile environments.",
    image: "/footwear.jpg",
    specs: ["Highly durable, slip-resistant, and anti-static", "Fully autoclavable for premium contamination control", "Ergonomic ventilation holes to reduce foot fatigue"],
    certification: "KeBS Compliant"
  },
  {
    id: "suction-mac",
    name: "High-Vacuum Suction Machine",
    category: "Ward & Treatment Equipment",
    model: "VS-SU-20L",
    description: "Heavy-duty electric aspirator designed for continuous negative pressure extraction of surgical fluids and mucus.",
    image: "/suction.jpg",
    specs: ["High-flow negative vacuum pump system", "Dual collection jars with safe overflow protection", "Quiet heavy-duty design with simple foot switch control"],
    certification: "ISO 13485 Certified"
  },
  {
    id: "bp-mac",
    name: "Automatic Blood Pressure Machine",
    category: "Diagnostic Devices",
    model: "VS-BP-A10",
    description: "Accurate, easy-to-use digital blood pressure monitor with clear display and irregular heartbeat detection.",
    image: "/bpmachine.jpg",
    specs: ["Clinically validated accuracy", "Large back-lit LCD display", "Memory storage for multiple users"],
    certification: "KeBS Compliant"
  },
  {
    id: "glucometer",
    name: "Blood Sugar Monitor",
    category: "Home Care & Ward",
    model: "VS-GL-G20",
    description: "Compact glucometer for quick and precise blood glucose measurements at home or in clinical settings.",
    image: "/glucometer.jpg",
    specs: ["Small sample volume required", "Fast test results (< 5 seconds)", "Large memory capacity"],
    certification: "ISO 13485 Certified"
  },
  {
    id: "nebulizer",
    name: "Medical Compressor Nebulizer",
    category: "Home Care & Ward",
    model: "VS-NB-C30",
    description: "Effective aerosol therapy device for respiratory conditions, ensuring efficient medication delivery.",
    image: "/nebulizer.jpg",
    specs: ["Fine particle size nebulization", "Quiet operation", "Suitable for all ages"],
    certification: "CE Medical Certified"
  },
  {
    id: "waste-bins",
    name: "Medical Waste Bins",
    category: "Hospital Furniture",
    model: "VS-WB-B40",
    description: "Durable and hands-free foot-operated bins for safe and hygienic disposal of medical waste.",
    image: "/wastebins.jpg",
    specs: ["Color-coded for waste segregation", "Sealing lids to prevent odors", "Easy to clean"],
    certification: "KeBS Compliant"
  },
  {
    id: "weighing-scale",
    name: "Digital Weighing Scale",
    category: "Home Care & Ward",
    model: "VS-WS-D50",
    description: "High-precision electronic scale for accurate body weight measurements in homes and clinics.",
    image: "/weighingscale.jpg",
    specs: ["Large digital display", "Auto-on/off function", "Anti-slip surface"],
    certification: "KeBS Compliant"
  },
  {
    id: "hb-machine",
    name: "Hemoglobin Meter (HB Machine)",
    category: "Diagnostic Devices",
    model: "VS-HB-M60",
    description: "Portable device for quick hemoglobin level determinations, useful for anemia screening.",
    image: "/hbmachine.jpg",
    specs: ["Fast results (less than 15 seconds)", "Requires small blood sample", "Large memory"],
    certification: "ISO 13485 Certified"
  },
  {
    id: "autoclave",
    name: "Vertical Autoclave Sterilizer",
    category: "Sterilization & Laboratory",
    model: "VS-AC-V70",
    description: "Efficient steam sterilizer for medical instruments, ensuring complete sterilization in hospital settings.",
    image: "/autoclave.jpg",
    specs: ["High-temperature sterilization", "Over-pressure protection", "Easy to operate"],
    certification: "CE Medical Certified"
  },
  {
    id: "baby-scale",
    name: "Baby Weighing Scale",
    category: "Home Care & Ward",
    model: "VS-BS-B80",
    description: "Sensitive digital scale for accurate monitoring of an infant's weight gain, with comfortable tray.",
    image: "/babyscale.jpg",
    specs: ["High precision", "Hold function for wiggly babies", "Large easy-to-read screen"],
    certification: "CE Medical Certified"
  },
  {
    id: "stethoscope",
    name: "Acoustic Stethoscope",
    category: "Diagnostic Devices",
    model: "VS-ST-A90",
    description: "High-quality stethoscope for clear heart and lung sound auscultation by healthcare professionals.",
    image: "/stethoscope.jpg",
    specs: ["Excellent acoustic performance", "Comfortable eartips", "Durable construction"],
    certification: "CE Medical Certified"
  },
  {
    id: "sterilizing-drum",
    name: "Sterilizing Drum",
    category: "Sterilization & Laboratory",
    model: "VS-SD-D100",
    description: "Durable stainless steel container for sterilizing instruments and dressings, with ventilation slots.",
    image: "/sterilizingdrum.jpg",
    specs: ["High-grade stainless steel", "Vents can be opened/closed", "Autoclave safe"],
    certification: "ISO 9001 Certified"
  },
  {
    id: "exam-couch",
    name: "Examination Couch",
    category: "Hospital Furniture",
    model: "VS-EC-C110",
    description: "Comfortable and durable couch for patient examinations, with adjustable headrest and thick padding.",
    image: "/examinationcouch.jpg",
    specs: ["Adjustable headrest section", "Sturdy metal frame", "Easy-to-clean upholstery"],
    certification: "KeBS Compliant"
  },
  {
    id: "microscope",
    name: "Compound Microscope",
    category: "Sterilization & Laboratory",
    model: "VS-MS-M120",
    description: "Biological microscope with multiple magnification levels for laboratory and educational use.",
    image: "/microscope.jpg",
    specs: ["High-quality objectives", "LED illumination", "Adjustable stage"],
    certification: "ISO 9001 Certified"
  },
  {
    id: "centrifuge",
    name: "Laboratory Centrifuge",
    category: "Sterilization & Laboratory",
    model: "VS-CF-C130",
    description: "Centrifuge for separating substances of different densities, essential for blood and urine analysis.",
    image: "/centrifuge.jpg",
    specs: ["Variable speed control", "Timer function", "Safety interlock lid"],
    certification: "ISO 13485 Certified"
  },
  {
    id: "drip-stand",
    name: "IV Drip Stand",
    category: "Home Care & Ward",
    model: "VS-DS-S140",
    description: "Adjustable height IV stand with multiple hooks and wheeled base for easy mobility in wards.",
    image: "/dripstand.jpg",
    specs: ["Adjustable height range", "Sturdy wheeled base", "Multiple hooks for IV bags"],
    certification: "KeBS Compliant"
  },
  {
    id: "pulse-ox",
    name: "Fingertip Pulse Oximeter",
    category: "Home Care & Ward",
    model: "VS-PO-O150",
    description: "Compact and easy-to-use monitor for measuring oxygen saturation (SpO2) and pulse rate.",
    image: "/pulseoximeter.jpg",
    specs: ["Accurate SpO2 & pulse rate measurements", "Dual-color OLED display", "Auto shut-off function"],
    certification: "CE Medical Certified"
  }
];