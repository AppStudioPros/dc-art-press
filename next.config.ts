import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old Wix "copy of" slugs → clean new slugs (301 permanent)
      { source: '/copy-of-commissions',   destination: '/commissions', permanent: true },
      { source: '/copy-of-commissions-1', destination: '/commissions', permanent: true },
      { source: '/copy-of-commissions-2', destination: '/commissions', permanent: true },
      { source: '/copy-of-in-the-works',  destination: '/in-the-works', permanent: true },
      // Old Wix slugs → new clean slugs
      { source: '/gallery-page',          destination: '/about', permanent: true },
      { source: '/s-projects-side-by-side', destination: '/about/special-projects', permanent: true },
      { source: '/publicity',             destination: '/publicity', permanent: false }, // same, keep
      { source: '/abitmore',              destination: '/a-bit-more', permanent: true },
      { source: '/editioned-books',       destination: '/books/editioned', permanent: true },
      { source: '/smalleditionbooks',     destination: '/books/small-editions', permanent: true },
      { source: '/exhibit-catalogs',      destination: '/books/exhibit-catalogs', permanent: true },
      { source: '/wbs-store',             destination: '/woodblocks', permanent: true },
      { source: '/available-books',       destination: '/books/editioned', permanent: true },
      { source: '/about-3',              destination: '/about', permanent: true },
      // Misc Wix routes
      { source: '/home',                  destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      ],
    }]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
}

export default nextConfig
