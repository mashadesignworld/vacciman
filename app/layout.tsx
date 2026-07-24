import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vacciman Company Limited",
  description: "Medical Equipment Suppliers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
       
        {children}
        <WhatsAppFloat 
          phoneNumber="254727206387" // 👈 Add your main WhatsApp business line here (no leading zero or +)
          defaultMessage="Hello VACCIMAN LTD! I found your website and would like to request information regarding your medical equipment and vaccine cold chain solutions in Nairobi, Kenya."
        />
         <Footer />
         </body>
    </html>
  );
}
