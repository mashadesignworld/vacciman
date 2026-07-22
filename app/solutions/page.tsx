// app/solutions/page.tsx
import { Metadata } from "next";
import SolutionsClient from "../components/SolutionsClient";
import { generateMedicalProductsSchema } from "@/lib/schema"; // adjust path to where schema.ts lives
import { PRODUCTS } from "../../data/products"; // adjust path to your products data array

export const metadata: Metadata = {
  title: "Medical Equipment & Healthcare Solutions | Vacciman",
  description:
    "Explore our full catalog of medical supplies, diagnostic tools, home care devices, and certified healthcare solutions.",
  openGraph: {
    title: "Medical Equipment & Healthcare Solutions | Vacciman",
    description:
      "Explore our full catalog of medical supplies, diagnostic tools, home care devices, and certified healthcare solutions.",
    url: "https://vacciman.co.ke/solutions",
    siteName: "Vacciman Healthcare",
    images: [
      {
        url: "https://vacciman.co.ke/anesthesia.jpg",
        width: 1200,
        height: 630,
        alt: "Vacciman Healthcare Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Equipment & Healthcare Solutions | Vacciman",
    description:
      "Explore our full catalog of medical supplies, diagnostic tools, home care devices, and certified healthcare solutions.",
    images: ["https://vacciman.co.ke/anesthesia.jpg"],
  },
};

export default function SolutionsPage() {
  const jsonLd = generateMedicalProductsSchema(PRODUCTS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionsClient />
    </>
  );
}