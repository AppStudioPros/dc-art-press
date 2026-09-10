'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X, ShoppingCart } from 'lucide-react'

const booksLinks = [
  { label: 'Editioned Books and More', href: '/books' },
  { label: 'Editioned Books', href: '/books/editioned' },
  { label: 'Small Edition Books', href: '/books/small-editions' },
  { label: 'Exhibit Catalogs', href: '/books/exhibit-catalogs' },
]

const aboutLinks = [
  { label: 'Bio / Collections', href: '/about' },
  { label: 'Exhibiting Galleries', href: '/galleries' },
  { label: 'Special Projects', href: '/about/special-projects' },
  { label: 'Commissions', href: '/commissions' },
  { label: 'Publicity', href: '/publicity' },
]

function Dropdown({ links, open }: { links: { label: string; href: string }[]; open: boolean }) {
  if (!open) return null
  return (
    <div
      className="absolute top-full left-0 pt-1 z-50 min-w-[220px]"
    >
      <div style={{ backgroundColor: 'var(--white)', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className="block px-5 py-2.5 text-sm hover:bg-[var(--card-bg)] transition-colors"
            style={{ color: 'var(--body-text)', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-avenir), sans-serif' }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [booksOpen, setBooksOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const navLinkStyle = {
    color: 'var(--accent)',
    fontFamily: 'var(--font-avenir), sans-serif',
    fontWeight: 300,
    fontSize: '0.85rem',
    letterSpacing: '0.04em',
    textDecoration: 'none',
    padding: '0.25rem 0',
  }

  return (
    <header style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--rule)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div className="page-wrap flex items-center justify-between h-[68px]">
        {/* Logo / Wordmark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          {/* TODO: Replace with actual logo image once provided */}
          <div style={{ fontFamily: 'var(--font-rye), serif', fontSize: '1.1rem', color: 'var(--body-text)', lineHeight: 1.2 }}>
            <span style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-avenir), serif' }}>Dry Creek</span>
            Art Press
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" style={navLinkStyle}>Home</Link>
          <Link href="/original-prints-sketches" style={navLinkStyle}>Original Prints &amp; Sketches</Link>

          {/* Books dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBooksOpen(true)}
            onMouseLeave={() => setBooksOpen(false)}
          >
            <button style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '3px', background: 'none', border: 'none', cursor: 'pointer' }}>
              Books <ChevronDown size={12} />
            </button>
            <Dropdown links={booksLinks} open={booksOpen} />
          </div>

          {/* About dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '3px', background: 'none', border: 'none', cursor: 'pointer' }}>
              About <ChevronDown size={12} />
            </button>
            <Dropdown links={aboutLinks} open={aboutOpen} />
          </div>

          <Link href="/a-bit-more" style={navLinkStyle}>A Bit More</Link>
          <Link href="/contact" style={navLinkStyle}>Contact</Link>
          <Link href="/blog" style={navLinkStyle}>Studio Blog</Link>

          {/* Cart icon */}
          <button style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.5rem' }} aria-label="Shopping cart">
            <ShoppingCart size={18} />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" style={{ color: 'var(--accent)', background: 'none', border: 'none' }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: 'var(--white)', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Original Prints & Sketches', href: '/original-prints-sketches' },
            { label: 'Books', href: '/books' },
            { label: 'Editioned Books', href: '/books/editioned' },
            { label: 'Small Edition Books', href: '/books/small-editions' },
            { label: 'Exhibit Catalogs', href: '/books/exhibit-catalogs' },
            { label: 'Bio / Collections', href: '/about' },
            { label: 'Exhibiting Galleries', href: '/galleries' },
            { label: 'Commissions', href: '/commissions' },
            { label: 'Publicity', href: '/publicity' },
            { label: 'A Bit More', href: '/a-bit-more' },
            { label: 'Contact', href: '/contact' },
            { label: 'Studio Blog', href: '/blog' },
          ].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm" style={{ color: 'var(--accent)', borderBottom: '1px solid var(--border)' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
