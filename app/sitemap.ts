import { MetadataRoute } from 'next';

// In production, use your actual live domain URL
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vacciman.co.ke';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  // If you later split products into dynamic dynamic routes (e.g. /solutions/[id]), 
  // you can map your product array directly into the sitemap array here:
  /*
  const productRoutes = PRODUCTS.map((product) => ({
    url: `${BASE_URL}/solutions/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  */

  return [...staticRoutes];
}