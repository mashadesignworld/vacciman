import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Capabilities from "./components/Capabilities";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-vacciman-bgLight">
      {/* Global Brand Navigation Bar */}
      <Navbar />
     <Hero />
     <Capabilities />
     <Timeline />
     
    </main>
  );
}
