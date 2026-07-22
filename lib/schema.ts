

interface MedicalProductSchemaType {
  id: string;
  name: string;
  category: string;
  model: string;
  description: string;
  image: string;
  specs: string[]; // Although we don't use specs in schema, we need it to match the source
  certification: string; // Same here
}
export function generateMedicalProductsSchema(products: MedicalProductSchemaType[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vacciman.co.ke";

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Medical Equipment & Clinical Supplies Catalog",
    "description": "Standard certified medical furniture, diagnostic devices, and operating theatre equipment supplied in Kenya.",
    "url": `${baseUrl}/solutions`,
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "@id": `${baseUrl}/solutions#${product.id}`,
        "name": product.name,
        "model": product.model,
        "description": product.description,
        "category": product.category,
        "image": `${baseUrl}${product.image}`,
        "brand": {
          "@type": "Brand",
          "name": "Vacciman"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "KES",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "Vacciman Medical Supplies"
          }
        }
      }
    }))
  };
}