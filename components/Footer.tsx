import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--footer-sage)', marginTop: '4rem' }}>
      <div className="page-wrap py-10">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>

          {/* Brand + Address */}
          <div>
            {/* TODO: Replace with actual Dry Creek Art Press script logo */}
            <p style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.1rem', color: 'var(--body-text)', marginBottom: '0.75rem', fontStyle: 'italic' }}>
              Dry Creek Art Press
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--body-text)', lineHeight: 1.7 }}>
              Mailing Address:<br />
              1685 S Colorado Boulevard,<br />
              UPS Box S-162<br />
              Denver, Colorado 80222<br /><br />
              <a href="tel:3039562994" style={{ color: 'var(--body-text)' }}>303 956-2994</a>
            </p>
          </div>

          {/* Col 1 */}
          <div>
            <FooterLinks links={[
              { label: 'Woodblocks', href: '/woodblocks' },
              { label: 'Watercolors', href: '/watercolors' },
              { label: 'About', href: '/about' },
              { label: 'Bio / Collections', href: '/about' },
              { label: 'Exhibiting Galleries', href: '/galleries' },
            ]} />
          </div>

          {/* Col 2 */}
          <div>
            <FooterLinks links={[
              { label: 'Studio Blog', href: '/blog' },
              { label: 'Return / Shipping Policy', href: '/shipping-policy' },
              { label: 'Privacy Policy', href: '/privacy' },
            ]} />
          </div>

          {/* DCAP Bookstore */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--body-text)', marginBottom: '0.5rem' }}>
              DCAP Bookstore
            </p>
            <FooterLinks links={[
              { label: 'Available Woodblocks', href: '/woodblocks' },
              { label: 'Available Sketches', href: '/watercolors' },
              { label: 'Available Books', href: '/books/editioned' },
            ]} />
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0' }}>
        <div className="page-wrap">
          <p style={{ fontSize: '0.7rem', color: 'var(--body-text)', textAlign: 'center' }}>
            © {new Date().getFullYear()} Dry Creek Art Press
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {links.map(l => (
        <li key={l.href} style={{ marginBottom: '0.4rem' }}>
          <Link href={l.href} style={{ fontSize: '0.82rem', color: 'var(--body-text)', textDecoration: 'none' }}
            className="hover:underline">{l.label}</Link>
        </li>
      ))}
    </ul>
  )
}
