import type { MetadataRoute } from 'next'

const BASE = 'https://www.dcartpress.com'
const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/original-prints-sketches`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/woodblocks`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/serigraphs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/etchings`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/watercolors`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/books`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/books/editioned`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/books/small-editions`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/books/exhibit-catalogs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/in-the-works`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/galleries`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/commissions`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/publicity`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/a-bit-more`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/shipping-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
