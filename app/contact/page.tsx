import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Leon Loughridge at Dry Creek Art Press. Studio located in south Denver, Colorado. Phone: 303 956-2994. Email: Leon@DCArtPress.com.',
}

const studios = [
  { name: 'Denver Studio', desc: 'Located in our remodeled garage, the home studio is in south central Denver in the university area. It is the home base where I get framing done and store all my ideas and supplies. Studio visits are welcome.', img: 'denver-studio' },
  { name: 'Mountain Studio', desc: "Just a short hour drive from the Denver studio, the mountain studio is at the base of Mt Blue Sky (Mt Evans) and a world away from the hustle of Denver. The studio is \"off the grid\" and surrounded by inspiration.", img: 'mountain-studio' },
  { name: 'Art Gym Denver', desc: "This is a printmaker's dream come true. The maker's space is complete with two litho presses, three etching presses, and complete serigraph facilities. Also, a great cafe and the comradery of other printmakers.", img: 'art-gym' },
]

export default function ContactPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

      <div className="page-wrap" style={{ padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }} className="max-sm:grid-cols-1">

          {/* Left — Info */}
          <div>
            <h1 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '2rem', marginBottom: '1.5rem' }}>
              Contact Us
            </h1>
            <p>
              A few easy ways to contact us. Click on the <strong>Send A Note</strong> icon to send a message.
              I&apos;ll get back to you as soon as I can.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Send an email to <a href="mailto:Leon@DCArtPress.com" style={{ color: 'var(--accent)' }}>Leon@DCArtPress.com</a>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Or, call me at <a href="tel:3039562994" style={{ color: 'var(--accent)' }}>303 956-2994</a>.
              If I have cell phone service, I would love to chat.
            </p>
            <hr className="dc-rule" style={{ margin: '2rem 0' }} />
            <h3 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Mailing Address</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
              Dry Creek Art Press<br />
              1685 S Colorado Boulevard,<br />
              UPS Box S-162<br />
              Denver, Colorado 80222<br />
              <a href="tel:3039562994" style={{ color: 'var(--accent)' }}>303 956-2994</a>
            </p>
          </div>

          {/* Right — Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* ── Studio Spaces ── */}
        <hr className="dc-rule" />
        <h2 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.8rem', textAlign: 'center', margin: '2rem 0' }}>
          Studio Spaces
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="max-sm:grid-cols-1">
          {studios.map(s => (
            <div key={s.name}>
              {/* TODO: Replace with actual studio photo */}
              <div className="img-placeholder" style={{ height: '200px', marginBottom: '1rem' }}>[ {s.name} photo ]</div>
              <h3 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{s.name}</h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
