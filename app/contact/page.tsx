import ContactHero from "../components/ContactHero";
import ContactFormSection from "../components/ContactFormSection";
import MapAndHoursSection from "../components/MapAndHoursSection";

export const metadata = {
  title: "Contact Us | Vacciman Company Limited",
  description: "Get in touch with Kenya's premium medical equipment and pharmaceutical distributor.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <ContactHero />
      <ContactFormSection />
      <MapAndHoursSection />
    </div>
  );
}