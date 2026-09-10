import type { Metadata } from 'next'
import { Fredericka_the_Great, Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SendANote from '@/components/SendANote'

// Fredericka the Great — confirmed from Wix Editor
// Used for rough/textured section headings
const fredericka = Fredericka_the_Great({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fredericka',
  display: 'swap',
})

// Nunito Light — closest Google Fonts match to Avenir Light (confirmed from Wix Editor)
// TODO: Replace with licensed Avenir Light font if client provides
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-avenir',
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
    <html lang="en" className={`${fredericka.variable} ${nunito.variable}`}>
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
