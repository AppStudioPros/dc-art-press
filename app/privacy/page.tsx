import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>
        <div className="prose-dc">
          <p>This website is operated by Dry Creek Art Press (Leon Loughridge). We are committed to protecting your personal information.</p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us through our contact form, including your name and email address, solely for the purpose of responding to your inquiry.</p>
          <h2>How We Use Your Information</h2>
          <p>Your information is used only to respond to messages sent through this website. We do not sell, share, or distribute your personal information to third parties.</p>
          <h2>Cookies</h2>
          <p>This website may use cookies to manage functionality. If you have concerns about cookies, please contact us directly and we can find another way to communicate.</p>
          <h2>Contact</h2>
          <p>For privacy questions, contact <a href="mailto:Leon@DCArtPress.com" style={{ color: 'var(--accent)' }}>Leon@DCArtPress.com</a>.</p>
          <p style={{ fontStyle: 'italic', color: '#999', fontSize: '0.85rem' }}>Do Not Sell My Personal Information.</p>
        </div>
      </div>
    </>
  )
}
