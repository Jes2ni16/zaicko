import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zaiko.website/client/malvin2/featured/primeworld-pointe',
      changeFrequency: 'monthly',
      priority: 0.9,
    }
  ]
}