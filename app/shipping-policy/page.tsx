import type { Metadata } from 'next'


export const metadata: Metadata = { title: 'Return & Shipping Policy' }

export default function ShippingPage() {
  return (
    <>
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-avenir), serif', color: 'var(--accent)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Return & Shipping Policy</h1>
        <div className="prose-dc">
          <p style={{ fontFamily: 'var(--font-avenir), sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--body-text)' }}>
            Our shipping and return policy will be posted here shortly. For questions, please contact us at <a href="mailto:Leon@DCArtPress.com" style={{ color: 'var(--accent)' }}>Leon@DCArtPress.com</a>.
          </p>
        </div>
      </div>
    </>
  )
}
