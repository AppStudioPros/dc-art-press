import type { Metadata } from 'next'
import { Rye, EB_Garamond, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SendANote from '@/components/SendANote'

// Display font — rough/letterpress feel for section headings
// TODO: Confirm actual font from Wix Editor (Style panel)
const rye = Rye({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rye',
  display: 'swap',
})

// Body / general serif — matches the clean serif body text on the site
// TODO: Confirm actual font from Wix Editor
const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

// Gold heading font — elegant serif for the "ABOUT DCArtPress" gold headings
// TODO: Confirm actual font from Wix Editor
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dry Creek Art Press — Woodblocks and Editioned Books by Leon Loughridge',
    template: '%s | Dry Creek Art Press',
  },
  description:
    'Woodblocks, serigraphs, etchings, watercolors and limited edition books by Leon Loughridge. Dry Creek Art Press, Denver Colorado.',
  metadataBase: new URL('https://www.dcartpress.com'),
  openGraph: {
    type: 'website',
    siteName: 'Dry Creek Art Press',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rye.variable} ${garamond.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main style={{ paddingTop: '70px', minHeight: '60vh' }}>
          {children}
        </main>
        <Footer />
        <SendANote />
      </body>
    </html>
  )
}
